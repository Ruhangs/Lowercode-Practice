import React from "react";
import { __Provider__, __Box__ } from "@/framework/components";
import { __AntButton__ } from "@/framework/components/design/antd/button";
import { Canvas, Frame as DocumentFrame } from "@craftjs/core";
import { useFrame } from "react-frame-component";
import { useDynamicHeadInsertion } from "../hooks/useDynamicHeadInsertion";
import { CanvasRootId, compileModuleResolve, sucraseTransformCode, ScopeMoudleId } from "@ruhangs/core";
import { useSchema } from '@/framework/stores/useSchema'
import { useAsyncEffect } from "ahooks";
import { DEVICE, useDevice } from "@/framework/stores/useDevice"

const deviceWidthMap = {
  [DEVICE.PC]: "100vw",
  [DEVICE.MOBILE]: "375px",
  [DEVICE.IPAD]: "768px",
};

export const DocumentNodes = () => {
  const { document: canvasDocument } = useFrame();
  const elements = useDynamicHeadInsertion();
  const jsMoudleCode = useSchema(select => select.jsMoudleCode)
  const { deviceWidth } = useDevice()

  React.useEffect(() => {
    const canvasElement = document.getElementById(CanvasRootId);
    const insertElement = canvasElement ? canvasDocument : document;

    if (insertElement && elements) {
      insertElement.head.appendChild(elements);
    }
  }, [canvasDocument, elements]);

  useAsyncEffect(async () => {
    const cjsCode = await sucraseTransformCode(jsMoudleCode)
    const { exports  } = compileModuleResolve(cjsCode);
    (window as any)[ScopeMoudleId] = {
      jsMoudle: exports
    }
  }, [jsMoudleCode])

  return (
    <div
      id="__CasterViewPort__"
      style={{
        width: deviceWidthMap[deviceWidth],
        height: '100vh',
        paddingInline: 12,
        margin: "auto",
      }}
    >
      <DocumentFrame>
        <Canvas
          canvas
          is={__Provider__}
          backgroundColor="#FFF"
          height="100%"
          width="100%"
        >
          <__Box__ />
        </Canvas>
      </DocumentFrame>
    </div>
  );
};
