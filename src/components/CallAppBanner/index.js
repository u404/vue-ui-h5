import CallAppBanner from './main'

/* istanbul ignore next */
CallAppBanner.install = function(Vue) {
  Vue.component(CallAppBanner.name, CallAppBanner)
}

export default CallAppBanner