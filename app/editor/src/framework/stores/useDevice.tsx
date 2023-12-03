import { create } from 'zustand'

export enum DEVICE {
  PC,
  MOBILE,
  IPAD
}

interface State {
  deviceWidth: DEVICE;
  setDeviceWidth: (device: DEVICE) => void;
}

export const useDevice = create<State>((set) => ({
  deviceWidth: DEVICE.PC,
  setDeviceWidth: (device: DEVICE) => {
    set({ deviceWidth: device })
  }
}))
