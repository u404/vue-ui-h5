import Number from './main'

/* istanbul ignore next */
Number.install = function(Vue) {
  Vue.component(Number.name, Number)
}

export default Number