import { createReactMaterial } from '@ruhangs/core'
import { ProviderView } from './view'
import { Panel } from './panel'
import { Element } from "@craftjs/core";
import { EmptySetter } from '@/framework/canvas/empty-render';

export const __Provider__ = createReactMaterial(ProviderView, {
  displayName: '页面',
  custom: {
    useCanvas: true,
    useResize: true
  },
  related: {
    settingRender: Panel
  }
}, {
  children: (
    <Element canvas id="flex-children" is={EmptySetter} />
  )
}
)
