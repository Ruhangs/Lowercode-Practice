import { createReactMaterial } from '@ruhangs/core'
import View from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

export const __AntLink__ = createReactMaterial(View, {
  displayName: '链接',
  custom: {
    useResize: false,
  },
  props: {
    children: '默认文本'
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-link-m' />
  }
})
