

$(document).ready( function(){
    var target =0;
    var $botones = $(".control")
    var $anterior = $(".previous")
    var $siguiente = $(".next")
    
    $botones.click(cambiarImagen)
//    $anterior.click(anteriorImagen)
//    $siguiente.click(siguienteImagen)
})


function cambiarImagen(){
    target = ($(this).data("target"))
    
//    mostrarImagen(target)
    console.log(target)
}

//var mostrarImagen = function (target) {
//	var lastSlide = $("div.active");
//	var slide = $("div[data-slide='" + target + "']");
//	console.log(lastSlide,slide)
//};