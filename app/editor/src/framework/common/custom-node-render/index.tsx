/** @jsxImportSource @emotion/react */
import * as React from "react";
import { useNode, useEditor } from "@craftjs/core";
import ReactDOM from "react-dom";
import { useFrame } from "react-frame-component";
import { DragOutlined, DeleteOutlined } from "@ant-design/icons";
import { RemixIcon } from "@ruhangs/icons";
import { Button, Flex, Popover, Space, Tooltip, Typography, theme, message } from "antd";
import { PortalOperationNode } from "./portal";
import { css } from "@emotion/react";

export interface RenderNodeWrapperProps {
  render: React.ReactElement;
}

export const CustomNodeRender: React.FC<RenderNodeWrapperProps> = ({
  render,
}) => {
  const { id } = useNode();
  const { token } = theme.useToken();
  const currentRef = React.useRef<HTMLDivElement>(null);
  const { actions, query, isActive, isHovered } = useEditor((state, queryEditor) => {
    const [selectId] = state.events.selected;
    const [hoverId] = state.events.hovered;
    const [dragged] = state.events.dragged;
    return {
      isActive: queryEditor.getEvent("selected").contains(id),
      isHovered: queryEditor.getEvent("hovered").contains(id),
      isDragged: queryEditor.getEvent("dragged").contains(id),
      selectId,
      hoverId,
      dragged,
    };
  });

  const {
    dom,
    name,
    isRootNode,
    moveable,
    deletable,
    connectors: { drag },
  } = useNode((node) => {
    return {
      isRootNode: query.node(id).isRoot(),
      dom: node.dom,
      parent: node.data.parent,
      moveable: query.node(node.id).isDraggable(),
      deletable: query.node(node.id).isDeletable(),
      name: node.data.displayName,
      isResize: node.data.custom.useResize || false,
    };
  });

  const { document: canvasDocument } = useFrame();

  React.useEffect(() => {
    if (dom) {
      if (isActive) {
        dom.classList.add("editor-component-active");
      } else {
        dom.classList.remove("editor-component-active");
      }
    }
  }, [dom, isActive]);

  React.useEffect(() => {
    if (dom && !isRootNode) {
      if (isHovered && !isActive) {
        dom.classList.add("editor-component-hover");
      } else {
        dom.classList.remove("editor-component-hover");
      }
    }
  }, [dom, isHovered, isRootNode, isActive]);


  /**
   * 处理删除选中节点逻辑
   */
  const handleDeleteSelectedNode = () => {
    try {
      actions.delete(id);
      message.success("删除成功");
    } catch (error) {
      message.error("删除失败");
    }
  };

  return (
    <>
      {dom && isActive
        ? ReactDOM.createPortal(
          <div
            css={ isRootNode ? css({
              float: "right",
              display: "flex"
            }) : css({
              position: "absolute",
              bottom: -21,
              left: 0,
              display: "flex"
            })}
          >
            <div
              css={css({
                background: "#2178ea",
                display: "flex",
                height: 20,
                maxWidth: 100,
                zIndex: 10000,
                pointerEvents: "none",
                paddingInline: 4,
                borderRadius: 4
              })}
            >
              <Flex
                align="center"
                css={css({
                  pointerEvents: "auto",
                  color: "#FFF",
                  height: 20,
                })}
              >
                {name ? (
                  <Flex
                    align="center"
                    css={css({
                      height: 20,

                    })}
                  >
                    {name}
                  </Flex>
                ) : null}
              </Flex>
            </div>
            <div
              css={ isRootNode ? css({
                display: 'none'
              }) : css({
                background: "#2178ea",
                display: "flex",
                height: 20,
                maxWidth: 100,
                zIndex: 10000,
                pointerEvents: "none",
                marginLeft: 3
              })}
            >
              <Flex
                align="center"
                css={css({
                  pointerEvents: "auto",
                  color: "#FFF",
                  height: 20,
                })}
              >
                {moveable ? (
                  <Flex
                    ref={drag as any}
                    align="center"
                    justify="center"
                    css={css({
                      height: 10,
                      width: 10,
                      fontWeight: 'bold',
                      margin: 4
                    })}
                  >
                    <DragOutlined />
                  </Flex>
                ) : null}
                {deletable ? (
                  <Flex
                    ref={drag as any}
                    align="center"
                    justify="center"
                    css={css({
                      height: 10,
                      width: 10,
                      fontWeight: 'bold',
                      margin: 4,
                      color: "#fff"
                    })}
                  >
                    <DeleteOutlined onClick={handleDeleteSelectedNode} />
                  </Flex>
                ) : null}
              </Flex>

            </div>
          </div>,

          dom!
        )
        : null}
      {render}
    </>
  );
};
