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
            scramble(elements, i);
        }
    }, 2500);
};

function scramble(elements, i){
    setTimeout(function(){
        var afs = elements[i].closest("button");
        afs.click();

        var aleatorio = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        //alert(aleatorio);
        if(aleatorio > 2){
            document.getElementsByClassName("shadow-popover")[0].getElementsByTagName("button")[aleatorio].click();
        }else{

        }
        console.log("Iteracao", i, "escolha do numero do botao", aleatorio, "foi");
    }, 1500 * i);
}
