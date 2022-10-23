//use with tampermonkey
//window.onload = function(){
console.log("carregando");
    setTimeout(function(){
        console.log("carregou");
        scrambleMain();
    }, 2500);
//};

var aleatorio = null;

function scrambleMain(howManyTimesMoreTimes = 0){
    var elements = document.querySelectorAll('[d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"]');
    console.log("elements old", elements);
    var shuffled = shuffle(elements);
        console.log("elements", shuffled);
        for (var b = 0; b < elements.length; b++) {
            elements[b].setAttribute("jader", shuffled[b]);
        }

        elements = document.querySelectorAll("[jader]");
        for (var i = elements.length - 1; i >= 0; i--) {
            scramble(i);
        }

    for(var times = 0; times < howManyTimesMoreTimes; times++){
        setTimeout(function(){
            scrambleMain();
        }, 1000 * elements.length * (times + 1));
    }
}
function scramble(i){
    setTimeout(function(){
        console.log("i", i);
        var elemento = document.querySelectorAll("[jader='"+i+"']")[0];
        var afs = elemento.closest("button");
        afs.click();
        setTimeout(function(){
            var aleatorio = 3;
            elemento.closest(".bg-back-lightest").getElementsByClassName("shadow-popover")[0].getElementsByTagName("button")[aleatorio].click();
            document.getElementsByClassName("min-h-screen")[0].click();
            document.getElementsByTagName("body")[0].click();
            var nomeDaMusica = elemento.closest(".bg-back-lightest").getElementsByClassName("break-words")[0].textContent;
            console.log("nome da musica", nomeDaMusica, "Iteracao", i, "escolha do numero do botao", aleatorio, "foi");
        }, 500);
    }, 1000 * i);
}

function shuffle(sourceArray) {
    var randomList = [];
  for (var i = 0; i < sourceArray.length; i++) {
        randomList.push(i);
    }
    randomList.sort(function (a, b) {return Math.random() - 0.5;});
    return randomList;
}
