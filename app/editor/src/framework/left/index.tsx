import * as React from 'react'
import { theme, Tabs, TabsProps } from "antd";
import { CodepenOutlined, ApartmentOutlined, ApiOutlined, CloudSyncOutlined } from '@ant-design/icons'
import { css } from "@emotion/css";
import { Tree } from "./tree";
import { Queries } from "./queries";
import { Hisotry } from './hisotry'
import { MaterialList } from "./materials/list";
import { Sidebar } from './sider'


const sidebarContext: Record<any, any> = {
  components: <MaterialList />,
  nodetree: <Tree />,
  datasource: <Queries />,
  cloud: <Hisotry />
}

export const Left = () => {
  const { token } = theme.useToken()
  const [selectValue, setSelectValue] = React.useState<React.Key>("components")

  return (
    <div className={css({
      display: 'grid',
      gridTemplateColumns: '45px 1fr'
    })} >
      <Sidebar
        value={selectValue}
        menus={[
          {
            value: "components",
            prototype: {
              tooltip: "组件",
              icon: <CodepenOutlined />
            }
          },

          {
            value: "nodetree",
            prototype: {
              tooltip: "大纲树",
              icon: <ApartmentOutlined />
            }
          },

          {
            value: 'datasource',
            prototype: {
              tooltip: "数据源",
              icon: <ApiOutlined />
            }
          },

          {
            value: 'cloud',
            prototype: {
              tooltip: "存储",
              icon: <CloudSyncOutlined />
            }
          }
        ]}
        onChange={(v) => v && setSelectValue(v)} />
      <div className={css({
        borderLeft: `1px solid ${token.colorBorderSecondary}`,
        height: '100%',
        width: 250,
        overflow: 'auto'
      })} >
        {sidebarContext?.[selectValue as string]}
      </div>
    </div>
  )
};
