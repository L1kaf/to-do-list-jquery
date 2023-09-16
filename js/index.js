//Добавление CSS стилей через JQuery
$(".text").css({
	"margin-left": "10px",
	"width": "200px"
});

$("h1").css("margin-left", "15px");

$("#form-list").css("display", "none");


$("#element").css({
	"margin-left": "20px",
	"height": "50px",
	"width": "220px",
	"background": "#d1d1d1",
	"border": "2px solid #909190",
	"border-radius": "5px",
	"line-height": "2.5em",
	"display": "none"
});

$("#comments").css({
	"display": "none",
	"margin-left": "25px",
	"font-weight": "bold",
	"font-size": "20px"
});
//Описание действия после нажатия кнопки открыть форму
$(".add-com").on("click", function () {
	//Делаем форму Блоком
	let form = $("#form-list");
	form.css("display", "block");
	//Заменяем кнопку на форму
	$(".add-com").replaceWith(form);
});
//Номер дела
let i = 1;
//Описание действия после нажатия кнопки добавить
$(".add").on("click", function () {
	//Появление блока с успешным добавлением дела
	$("#element").css("display", "block");
	setTimeout(function() { 
		$("#element").hide('slow'); 
		}, 2000);
	// Добавление комментария в скрытой форме
	let comment = $(".text").val();
	$("<p> Задание #" + i + ": " + comment + "</p>").appendTo("#comments");
	i++;
});
//После нажатия кнопки отобразить появляются все дела
$(".shows").on("click", function () {
	$("#comments").css("display", "block");
});
	