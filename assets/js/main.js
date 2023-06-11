const $ = document.querySelector.bind(document);

$(".search-btn").addEventListener("click", function () {
  $(".search-box").classList.toggle("open");
  $(".search-input").focus();
});
