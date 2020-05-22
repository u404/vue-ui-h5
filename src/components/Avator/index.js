import Avator from './main'

/* istanbul ignore next */
Avator.install = function(Vue) {
  Vue.component(Avator.name, Avator)
}

export default Avator