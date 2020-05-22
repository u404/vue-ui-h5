import FailPanel from './main'

/* istanbul ignore next */
FailPanel.install = function(Vue) {
  Vue.component(FailPanel.name, FailPanel)
}

export default FailPanel