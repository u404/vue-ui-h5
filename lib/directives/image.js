"use strict";

exports.__esModule = true;
var defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAGSBAMAAADKi8MBAAAAGFBMVEUzMzNPT09LS0s4ODg8PDxAQEBERERISEjhYOFkAAADa0lEQVR42u3YQVPaYBDG8W1D6PmJQK680NZrKqBXEGyv0Uk5g1a9gh3ar1/AgiSiMGMEDv/fTE7MwLLZPPuCAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAHYvtgPy1AzIe2eFwQWQHw6luB0PSwcywp0AHc6MKKnVUOZBqfB1540Op5pOq00thO9Wue9uLDxrZR0nBr6fmfHdl24uOBtOCZoLbrpl5zb6TjmwvhqpbR0s1zVVtL5zUHmrV8W1nT8njSao4rYpsOL32oaisinnTay8+KFTakRX3Nb+Xqp4q5ea7y2N+e5bSmmw1v5GdKattb/YtTGypeTUOt9lM4Zq5Ce3t/FlwJd3IazT7D6p+UrTFyJTMviklp8gbqzyt4r9SQfEWI6OBjZUxsBycKDTPLXp9oeo2KRNcKCOIckqweDXbS5tX9jOTC5Xy2no6vtZSsPkuBc8i76MGeZ2U0tqbOzlUStUug/wybMXkrL7pLoVWcOnyvfzi15dqWhjZ103Hh6NM/eHFWO0c4z32Fm9ftk60ofLYCs8XZW58lZ4SdZp8G8a9bifKGOV6jLztuq2+5rwncTbxAsuR57QUdIfxa2VPBcqoWp7OFD4sCmoXS6825rnA8jUMl1NT8mrRK43pOaX8bnSqlq+CG9kiypzqLz9K9UxIlq0YWt7OwuR849Ybzl4ppvdjww0sd+daqvv1Fxa8gtjGqWKcypY/bxj0rxetv4peWmLh+YbjZj688WjxiA9OPq97XevU7V0UatFTtMZr9+nzeir2TvzPveUshOtmqu4rI2jbe/Hd8jM6mfafzbuQ3kqlxtWNvR//V8tpZuCln9jTx8G2jp6Ekf/Z3lfh7m/NuYrXT9L36MaXBqmMib2J7Z53NX9oOgrcamPu7iLbuZabT9EPpe3iD8bI0grXWi/cQV8K/a4teb3HUpwyahv6kuNe+POz12g0ev17PbopKu2LNW03pvO66qtTbMPMuSGynWn2xyt5f6JKy2lF0E1sl7xxpXuqStKa/0RbVen+mES2W74Lkstwth7L16muJD/btnuth1nUfVLapG370byrPehJ2P+aRLZHzYu7+5pUqx3/SfqJAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJv8AkQuhtv1OE0AAAAAASUVORK5CYII="; // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="

var hasSrc = function hasSrc(el) {
  if (el instanceof Image && el.src) {
    return true;
  } else if (el.style.backgroundImage) {
    return true;
  }
  return false;
};

var setSrc = function setSrc(el, src) {
  if (el instanceof Image) {
    el.src = src;
  } else {
    el.style.backgroundImage = "url(" + src + ")";
  }
};

var loadImage = function loadImage(el, binding) {
  var src = binding.value;
  !hasSrc(el) && setSrc(el, defaultImage);
  var image = new Image();
  image.onload = function () {
    setSrc(el, this.src);
    image = null;
  };
  image.src = src;
};

var directive = {
  inserted: loadImage,
  update: loadImage
};

exports.default = directive;