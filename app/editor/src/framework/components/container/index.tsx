import { createReactMaterial } from '@ruhangs/core'
import { ProviderView } from './view'
import { Panel } from './panel'

export const __Provider__ = createReactMaterial(ProviderView, {
  displayName: '页面',
  custom: {
    useCanvas: true,
    useResize: false
  },
  related: {
    settingRender: Panel
  }
})
