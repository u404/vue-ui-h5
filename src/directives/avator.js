const defaultAvator = "data:image/png;base64,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"

const hasSrc = (el) => {
  if (el instanceof Image && el.src) {
    return true
  } else if (el.style.backgroundImage) {
    return true
  }
  return false
}

const setSrc = (el, src) => {
  if (el instanceof Image) {
    el.src = src
  } else {
    el.style.backgroundImage = `url(${src})`
  }
}

const loadAvator = (el, binding) => {
  let src = binding.value
  !hasSrc(el) && setSrc(el, defaultAvator)
  let image = new Image()
  image.onload = function () {
    setSrc(el, this.src)
    image = null
  }
  image.src = src
}

const directive = {
  inserted: loadAvator,
  update: loadAvator
}

export default directive