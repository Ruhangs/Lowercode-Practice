import { createReactMaterial } from '@ruhangs/core'
import View from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

export const __AntQRCode__ = createReactMaterial(View, {
  displayName: '二维码',
  custom: {
    useCanvas: true,
  },
  props: {
    value: 'https://ant.design/'
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-link-m' />
  }
})
