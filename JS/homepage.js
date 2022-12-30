$(".tab-name").click(function () {
  const currentTarget = $(this);
  const type = currentTarget.data("type");
  const tab = $(`#${type}`);

  $(".active").removeClass("active")

  $(".tab-content").each(function () {
    $(this).fadeOut(0);
  })

  console.log('tab', tab);
  tab.fadeIn(200);

  currentTarget.addClass("active");
})
