import { createReactMaterial } from '@ruhangs/core'
import View from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

export const __AntImage__ = createReactMaterial(View, {
  displayName: '图片',
  custom: {
    useCanvas: true,
  },
  props: {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    width: 200,
    height: 200
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-link-m' />
  }
})
