import { createReactMaterial } from '@ruhangs/core'
import View from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

export const __AntPagination__ = createReactMaterial(View, {
  displayName: '分页',
  custom: {
    useResize: false,

    useCanvas: true,
  },
  props: {
    current: 1,
    pageSize: 10,
    total: 100
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-link-m' />
  }
})
