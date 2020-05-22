import Alert from './main'
import func from "./function"

/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert)
  Vue.prototype.$alert = func
}

Alert.function = func

export default Alert
