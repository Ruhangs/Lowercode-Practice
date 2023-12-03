import { connectJsRuntimeVM } from "./iframe"

export const getScopeJsModule = () => {
  try {
    const { sandbox } = connectJsRuntimeVM()
    return sandbox?.ruhangsScope?.jsMoudle
  } catch (error) {
    throw new Error(`getHuosScopeJsModule Error...`)
  }
}


export const getScopeDepends = () => {
  try {
    const { sandbox } = connectJsRuntimeVM()
    return sandbox.ruhangsScope.depends
  } catch (error) {
    throw new Error(`getHuosScopeDepends Error...`)
  }
}