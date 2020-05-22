"use strict";

exports.__esModule = true;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeItem = function removeItem(arr, item) {
  if (!arr.length) return;
  var index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
    return arr;
  }
};

var init = {
  lazyLoad: false,
  default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
};

var listeners = [];
var imageCache = [];

var onListen = function onListen(ele, bind) {
  if (bind) {
    ele.addEventListener("scroll", render);
  } else {
    init.lazyLoad = false;
    ele.removeEventListener("scroll", render);
  }
};

var render = _lodash2.default.throttle(function () {
  for (var i = 0; i < listeners.length; i++) {
    checkCanShow(listeners[i]);
  }
}, 100);

var setEleSrc = function setEleSrc(ele, imgSrc) {
  ele.src = imgSrc;
  ele.style.opacity = 1;
  // ele.nextElementSibling.style.display = "block"
  ele.setAttribute("load", "success");
};

var alreadyLoad = function alreadyLoad(ele, imgSrc) {
  if (imageCache.indexOf(imgSrc) > -1) {
    setEleSrc(ele, imgSrc);
    return true;
  }
  return false;
};

var checkCanShow = function checkCanShow(item) {
  var ele = item.ele;
  var top = ele.getBoundingClientRect().top;
  if (top + 10 < window.innerHeight) {
    loadImgAsync(item, function (ele, imgSrc) {
      setEleSrc(ele, imgSrc);
      imageCache.push(imgSrc);
    }, function (e) {});
    return true;
  }
  return false;
};

var loadImgAsync = function loadImgAsync(item, resolve, reject) {
  var img = new Image();
  img.src = item.imgSrc;
  img.onload = function () {
    resolve(item.ele, item.imgSrc);
    img = null;
  };
  img.onerror = function (e) {
    reject(e);
    img = null;
  };
  removeItem(listeners, item);
};

var addListener = function addListener(ele, binding) {
  var imgSrc = binding.value;
  // ele.nextElementSibling.style.display = "none"
  ele.setAttribute("load", "fail");
  if (alreadyLoad(ele, imgSrc)) {
    return false;
  }
  var item = {
    ele: ele,
    imgSrc: imgSrc
  };
  ele.src = init.default;

  if (checkCanShow(item)) {
    return false;
  }
  listeners.push(item);
  if (!init.lazyLoad) {
    init.lazyLoad = true;
    onListen(window, true);
  }
};

exports.default = {
  inserted: addListener,
  update: addListener
};