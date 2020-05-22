import Transition from './main'

/* istanbul ignore next */
Transition.install = function(Vue) {
  Vue.component(Transition.name, Transition)
}

export default Transition