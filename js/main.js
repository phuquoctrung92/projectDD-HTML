window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
$(".content__slide").slick({
  infinite: false,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: $(".content__prev"),
  nextArrow: $(".content__next"),
})
