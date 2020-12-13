var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

gsap.fromTo(
  "nav",
  { opacity: 0 },
  { duration: 3, opacity: 1, ease: "power1.out" }
);
gsap.fromTo(
  "nav",
  { opacity: 0 },
  { duration: 3, opacity: 1, ease: "power1.out" }
);
gsap.fromTo(
  ".hero-text",
  { y: 100, opacity: 0, scale: 0.9 },
  { y: 0, duration: 2, opacity: 1, scale: 1, ease: "power1.out" }
);

var tl = gsap.timeline();
tl.from(".showcase-left", { duration: 1, x: -500 });
tl.from(".showcase-right", { duration: 1, x: 500 });
tl.from(".showcase-bottom", { duration: 1, y: 500 }, "-=1");

var about = document.getElementById("about");
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

document.onscroll = (e) => {
  if (window.pageYOffset >= getOffset(about).top - 200) {
    gsap.from("#about", {left:-300, duration:2})
  }
};
