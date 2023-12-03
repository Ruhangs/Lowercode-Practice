import React from 'react'
import { Tooltip, Button } from 'antd'
import { RuhangsIcon } from '@ruhangs/icons'
import { css } from "@emotion/css";
import { DEVICE, useDevice } from "@/framework/stores/useDevice"

export default function Device() {


  const { setDeviceWidth } = useDevice()

  const classes = {
    center: css({
      margin: "auto",
    })
  }
  return (
    <div className={classes.center}>
      <Tooltip placement="bottom" color="gray" title="电脑">
        <Button
          className={
            css({
              marginLeft: 4,
              marginRight: 4,
              border: "none"
            })
          }
          onClick={() => setDeviceWidth(DEVICE.PC)}
          icon={<RuhangsIcon type="icon-bijiben" />}
        />
      </Tooltip>
      <Tooltip placement="bottom" title="平板" color="gray">
        <Button
          className={
            css({
              marginLeft: 4,
              marginRight: 4,
              border: "none",
            })
          }
          onClick={() => setDeviceWidth(DEVICE.IPAD)}
          icon={<RuhangsIcon type="icon-a-23Cpingban" />}
        />
      </Tooltip>
      <Tooltip placement="bottom" title="手机" color="gray">
        <Button
          className={
            css({
              marginLeft: 4,
              marginRight: 4,
              border: "none"
            })
          }
          onClick={() => setDeviceWidth(DEVICE.MOBILE)}
          icon={<RuhangsIcon type="icon-shouji" />}
        />
      </Tooltip>
    </div>
  )
}
