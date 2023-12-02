import { createReactMaterial } from '@ruhangs/core'
import { BoxView } from './view'

export const __Box__ = createReactMaterial(BoxView, {
  displayName: '容器',
  props: {
    defaultSize: {
      width: '100%',
      height: 120
    },
  },
  custom: {
    useCanvas: true,
    useResize: true,
  },
})
