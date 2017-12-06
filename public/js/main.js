// PROCHAINS SLIDER
$(".b-prochains__slider").slick({
  slidesToShow:3,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
$(".b-resultats__tags").slick({
  slidesToShow:5,
})
$(".b-resultats__dates").slick({
  slidesToShow:1,
})
