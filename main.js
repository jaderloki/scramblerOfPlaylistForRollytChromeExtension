window.onload = function(){
console.log("carregando");
    setTimeout(function(){
        console.log("carregou");

        var elements = document.querySelectorAll('[d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"]');

         for (var b = 0; b < elements.length; b++) {
            elements[b].setAttribute("jader", b);
        }

        elements = document.querySelectorAll("[jader]");

        for (var i = 0; i < elements.length; i++) {
            scramble(i);
        }
    }, 2500);
};

var aleatorio = null;
function scramble(i){
    setTimeout(function(){
        var elemento = document.querySelectorAll("[jader='"+i+"']")[0];
        var afs = elemento.closest("button");
        afs.click();
        setTimeout(function(){
            var aleatorio = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            //aleatorio = (aleatorio != null ? (aleatorio == 4 ? 3 : 4) : Math.floor(Math.random() * (4 - 3 + 1) + 3));
            //alert(aleatorio);
            if(aleatorio > 2){
                elemento.closest(".bg-back-lightest").getElementsByClassName("shadow-popover")[0].getElementsByTagName("button")[aleatorio].click();
            }else{

            }
            document.getElementsByClassName("min-h-screen")[0].click();
            document.getElementsByTagName("body")[0].click();
            var nomeDaMusica = elemento.closest(".bg-back-lightest").getElementsByClassName("break-words")[0].textContent;
            console.log("nome da musica", nomeDaMusica, "Iteracao", i, "escolha do numero do botao", aleatorio, "foi");
        }, 500);
    }, 1000 * i);
}
