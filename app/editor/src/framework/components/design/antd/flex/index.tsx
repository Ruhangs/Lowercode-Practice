import { createReactMaterial } from '@ruhangs/core'
import View from './view'
import { Panel } from './panel'
import { RemixIcon } from '@ruhangs/icons'

import { Element } from "@craftjs/core";
import { EmptySetter } from '@/framework/canvas/empty-render';

export const __AntFlex__ = createReactMaterial(View, {
  displayName: '弹性布局',
  custom: {
    useCanvas: true,
  },
  props: {
  },
  related: {
    settingRender: Panel,
    icon: () => <RemixIcon type='icon-link-m' />
  }
}, {
  children: (
    <Element canvas id="flex-children" is={EmptySetter} />
  )
})
