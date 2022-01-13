/* 	DEV: CÁSSIA OLIVEIRA DOS SANTOS
	TURMA: INFO19
	PROFESSOR: KLEBERSON JUNIO DO AMARAL SERIQUE */

function insert(valor) {
	$('.displayCalculadora').val($('.displayCalculadora').val() + valor);
}
function equal() {
	$('.displayCalculadora').val(eval($('.displayCalculadora').val()));
}
function clean() {
	$('.displayCalculadora').val('');
}
function del() {
	value = $('.displayCalculadora').val();
	$('.displayCalculadora').val(value.substring(0, value.length - 1));
}
