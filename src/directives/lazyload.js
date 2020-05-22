import _ from "lodash"

const removeItem = (arr, item) => {
  if (!arr.length) return
  let index = arr.indexOf(item)
  if (index > -1) {
    arr.splice(index, 1)
    return arr
  }
}

let init = {
  lazyLoad: false,
  default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
}

let listeners = []
let imageCache = []

const onListen = (ele, bind) => {
  if (bind) {
    ele.addEventListener("scroll", render)
  } else {
    init.lazyLoad = false
    ele.removeEventListener("scroll", render)
  }
}

const render = _.throttle(() => {
  for (let i = 0; i < listeners.length; i++) {
    checkCanShow(listeners[i])
  }
}, 100)

const setEleSrc = (ele, imgSrc) => {
  ele.src = imgSrc
  ele.style.opacity = 1
  // ele.nextElementSibling.style.display = "block"
  ele.setAttribute("load", "success")
}

const alreadyLoad = (ele, imgSrc) => {
  if (imageCache.indexOf(imgSrc) > -1) {
    setEleSrc(ele, imgSrc)
    return true
  }
  return false
}

const checkCanShow = (item) => {
  let ele = item.ele
  let top = ele.getBoundingClientRect().top
  if (top + 10 < window.innerHeight) {
    loadImgAsync(item, (ele, imgSrc) => {
      setEleSrc(ele, imgSrc)
      imageCache.push(imgSrc)
    }, (e) => {

    })
    return true
  }
  return false
}

const loadImgAsync = (item, resolve, reject) => {
  let img = new Image()
  img.src = item.imgSrc
  img.onload = () => {
    resolve(item.ele, item.imgSrc)
    img = null
  }
  img.onerror = (e) => {
    reject(e)
    img = null
  }
  removeItem(listeners, item)
}

const addListener = (ele, binding) => {
  let imgSrc = binding.value
  // ele.nextElementSibling.style.display = "none"
  ele.setAttribute("load", "fail")
  if (alreadyLoad(ele, imgSrc)) {
    return false
  }
  let item = {
    ele: ele,
    imgSrc: imgSrc
  }
  ele.src = init.default

  if (checkCanShow(item)) {
    return false
  }
  listeners.push(item)
  if (!init.lazyLoad) {
    init.lazyLoad = true
    onListen(window, true)
  }
}

export default {
  inserted: addListener,
  update: addListener
}
