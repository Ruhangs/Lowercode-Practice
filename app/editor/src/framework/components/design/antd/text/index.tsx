import { createReactMaterial } from '@ruhangs/core'
import { TextView } from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

export const __AntText__ = createReactMaterial(TextView, {
  displayName: '文本',
  custom: {
    useResize: false,
  },
  props: {
    children: '默认文本'
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-font-size-2' />
  }
})
