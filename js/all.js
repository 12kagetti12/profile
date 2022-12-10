// navの位置までスクロール
$('.p-header_nav a, .c-header_logo a').click(function () {
	var elmHash = $(this).attr('href');
  var headerH = $(".l-header_addMargin").outerHeight(true);
	var pos = $(elmHash).offset().top - headerH;
	$('body,html').animate({scrollTop: pos}, 800); //取得した位置にスクロール。数値が大きくなるほどゆっくりスクロール
	return false;
});

// ハンバーガーメニュー表示非表示
$(function() {
	$(`.c-media_navButton, .p-header_nav a`).on(`click`, function() {
		$(`.p-header_nav, .c-media_navButton_line, .c-header_nav_noStyle`).toggleClass(`open`);
	})
});