import Loading from './main'
import LoadingFunction from "./function"

/* istanbul ignore next */
Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading)
  Vue.prototype.$loading = LoadingFunction
}

Loading.function = LoadingFunction

export default Loading