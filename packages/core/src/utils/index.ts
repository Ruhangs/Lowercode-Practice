/** 画布的Id */
export const CanvasRootId = "__RuhangsEditorPreview__";

/** 实例的Id */
export const ScopeMoudleId = "__RuhangsBuilderScope__"

/** 代码运行时的ID */
export const RuntimeCtxId = "__RuhangsRuntime__";

/**
 * 创建运行代码的沙盒
 * @returns sandbox
 */
export const createRuntmieContext = () => {
  let iframe = document.getElementById(RuntimeCtxId) as HTMLIFrameElement;
  try {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      iframe.style.display = "none";
      iframe.id = RuntimeCtxId;
      document.documentElement.appendChild(iframe);
    }

    return iframe;
  } catch (error) {
    console.error("初始化执行容器失败")
    return null
  }
};
