import LoadingPanel from '@src/components/LoadingPanel/index.js'
import FailPanel from '@src/components/FailPanel/index.js'
import Loading from '@src/components/Loading/index.js'
import Alert from '@src/components/Alert/index.js'
import Transition from '@src/components/Transition/index.js'
import CollapseTransition from '@src/components/CollapseTransition/index.js'
import Avator from '@src/components/Avator/index.js'
import Number from '@src/components/Number/index.js'
import CallAppBanner from '@src/components/CallAppBanner/index.js'
import avator from '@src/directives/avator.js'
import image from '@src/directives/image.js'
import lazyload from '@src/directives/lazyload.js'
import mousewheel from '@src/directives/mousewheel.js'
import fixPhoneFilter from '@src/filters/fixPhone.js'
import locale from './locale'

const components = [
  LoadingPanel,
  FailPanel,
  Loading,
  Alert,
  Transition,
  CollapseTransition,
  Avator,
  Number,
  CallAppBanner
]

const directives = {
  avator,
  image,
  lazyload,
  mousewheel
}

const filters = {
  fixPhone: fixPhoneFilter
}

const install = function(Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.use(component)
  })

  Object.keys(directives).forEach(key => {
    Vue.directive(directives[key].name || key, directives[key])
  })

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.3.4',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  directives,
  filters,
  LoadingPanel,
  FailPanel,
  Loading,
  Alert,
  Transition,
  CollapseTransition,
  Avator,
  Number,
  CallAppBanner
}