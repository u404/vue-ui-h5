import CollapseTransition from './main'

/* istanbul ignore next */
CollapseTransition.install = function(Vue) {
  Vue.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition