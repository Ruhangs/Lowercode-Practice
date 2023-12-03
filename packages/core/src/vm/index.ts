import { compileModuleResolve, sucraseTransformCode } from '../builder'
import { connectJsRuntimeVM, InjectVMVarsType } from "./iframe";
import { logger } from '../logger';
import { difference } from "lodash-es"

export * from "./iframe";
export * from './scope'


export interface ExecuteResult {
  value: any;
  error: any;
  success: boolean;
}

/**
 *
 * @param code 执行的同步代码
 * @param globalScope 全局Scope实例
 */
const handleExecuteEvalCode = (
  code: string,
  gloabalScope?: InjectVMVarsType
) => {
  try {
    const { sandbox } = connectJsRuntimeVM()

    sandbox.__INJECT_VARS__ = gloabalScope;

    const value = sandbox.eval(`
        (() => {
          with (window.__INJECT_VARS__) {
            return (${code})
          }
        })()
      `);

    return { value, success: true, error: null } as ExecuteResult;
  } catch (error) {
    return { success: false, error, value: null } as ExecuteResult;
  }
};

/**
 * 远程调用
 * @param packageName 包名
 * @param cdnUrl 包地址
 */
const handleInstallNpm = async (packageName: string, cdnUrl?: string) => {
  // if (cdnUrl) {
  //   const data = await import(cdnUrl)
  //   console.log(data, 'data')
  // } else {
  //   logger.error("CDN路径不存在")
  // }
  console.log(packageName);

  const { ref } = connectJsRuntimeVM()

  const contentWindow = ref.contentWindow!;
    const contentDocument = ref.contentDocument!;

    return new Promise((resolve) => {
      // 先查一遍，看看是否存在已经加载的script
      const matchingElements = contentDocument.querySelectorAll(
        `script[src="${cdnUrl}"]`
      );

      if (matchingElements.length > 0) {
        resolve(true);
      } else {
        const saveWindowKeys = Object.keys(contentWindow)
        const script = contentDocument.createElement("script");

        script.setAttribute("src", cdnUrl!);

        // 执行过程中发生错误
        contentWindow.addEventListener("error", (evt) => {
          console.log(evt);
          resolve(false);
        });

        script.onload = () => {
          console.log("加载成功: ", cdnUrl);
          const curWindowKeys = Object.keys(contentWindow)
          const diffKey = difference(curWindowKeys, saveWindowKeys)
          console.log(curWindowKeys.length, saveWindowKeys.length, diffKey, '比对window的长度')
          resolve(true);
        };

        script.onerror = () => {
          resolve(false);
        };

        // 添加到 iframe 里面
        ref.contentDocument!.head.appendChild(script);
      }
    });
  
}

/**
 * 处理当前模块地址
 * @param code 代码
 */
const handleMountJsMoudle = async (
  code: string,
) => {
  const { sandbox } = connectJsRuntimeVM()
  const cjsCode = await sucraseTransformCode(code)
  if (cjsCode) {
    const module = compileModuleResolve(cjsCode, sandbox.ruhangsScope.depends)
    console.log(module, 'module')
    sandbox.ruhangsScope.jsMoudle = module.exports
    logger.info("JS模块挂载成功")
  }
}

export const jsRuntime = {
  execute: handleExecuteEvalCode,
  mountJsMoudle: handleMountJsMoudle,
  installNpm: handleInstallNpm
};
