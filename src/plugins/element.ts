import { App } from '@vue/runtime-dom'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (app: App<Element>) => {
  app.use(ElementPlus)
}
