//$(document).on("pageinit", "#info-page", function () {
//	alert("hi");
//	var li="";
//	$.each(info, function (i, name) {
//		li += '<li><a href="#" id="' + i + '" class="info-go">' + name.name + '</a></li>';
//	});
//	
//	$("#prof-list").append(li).promise().done(function () {
//		$(this).on("click", ".info-go", function (e) {
//			 e.preventDefault();
//			$("#details-page").data("info", info[this.id]);
//			$.mobile.changePage("#details-page");
//			 $(this).listview("refresh");
//    });
//});
//});	
//	$(document).on("pagebeforeshow", "#details-page", function () {
//		var info = $(this).data("info");
//		var info_view = "";