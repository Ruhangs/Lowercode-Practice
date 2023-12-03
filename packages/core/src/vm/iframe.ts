import { logger } from "../logger";

export const jsRuntimeCtxId = '__RuhangsRuntimeCtxId__'

interface IBrowserRuntimeVMWindow extends Window {
  // 插入的上下文
  __INJECT_VARS__?: InjectVMVarsType;

  // 日志打印函数
  logger: typeof console;

  // eval的函数声明
  eval: typeof window.eval;

  // huos
  ruhangsScope: BrowserRuntimeVMScopeType
}

export type InjectVMVarsType = Record<string, unknown>;

export interface BrowserRuntimeVMScopeType {
  jsMoudle: InjectVMVarsType;
  depends: InjectVMVarsType
}

const initScopeData: BrowserRuntimeVMScopeType = {
  jsMoudle: {},
  depends:{}
}

/**
 * 
 * 连接当前执行js语句的上下文实例
 */
export const connectJsRuntimeVM = () => {
  
  let iframe = document.getElementById(jsRuntimeCtxId) as HTMLIFrameElement;

  try {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      iframe.style.display = "none";
      iframe.id = jsRuntimeCtxId;
      document.documentElement.appendChild(iframe);
      const sandbox = iframe.contentWindow as IBrowserRuntimeVMWindow;
      sandbox.ruhangsScope = initScopeData
      logger.info("容器创建成功 & ruhangs空间挂载完成")
    }
    return {
      ref: iframe,
      sandbox: iframe!.contentWindow as IBrowserRuntimeVMWindow,
    };
  } catch (error: any) {
    logger.error(error.message)
    throw new Error("[ruhangs]: connectJsRuntimeVM fail...", )
  }
}