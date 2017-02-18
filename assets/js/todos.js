// strike through todos by clicking 
$("ul").on("click", "li", function() {
    $(this).toggleClass('completed ');
});

// click on 'x' to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// get text from input
$("input[type='text']").keypress(function(event) {
	if (event.which === 13){
		// store input text
		var todoText = $(this).val();
		// empty the input box
		$(this).val("");
		// add new todo
		$("ul").append(`<li><span>X </span>${todoText}</li>`)
	}
});