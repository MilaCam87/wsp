//camy

//funcionalidad input

function addMessage() {
	//debugger;
	var $input = $("#mensaje"); //definimos una variable para busca el elemento (input)
	var texto = $input.val(); // obtener el valor del input (valor ingresado por el usuario)
	$input.val(""); // reseteamos el input (para que cuando lo enviemos arriba, input quede vacío)
	
}