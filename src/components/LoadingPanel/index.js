import LoadingPanel from './main'

/* istanbul ignore next */
LoadingPanel.install = function(Vue) {
  Vue.component(LoadingPanel.name, LoadingPanel)
}

export default LoadingPanel