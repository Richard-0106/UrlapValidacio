window.addEventListener("load", init);
function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}

function init(){
    ID("kuld").addEventListener("click",validalas);
    
}
function validalas(){
    
   // console.log("haho!")
    //legalább 3 hosszúságú
    //nagybetűvel kezdődik
    //legyen benne szóköz
    var uzenet="";
    var megadottAdatok="";
    if(ID("nev").value.length<3){
        uzenet +="A név legalább 3 karakter hosszú legyen<br>";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
        
    }
    var reg=/[A-Z]+[a-z]{2,}/;
    if( !reg.test(ID("nev").value)){
        
         uzenet ="A név legalább 3 karakter hosszú legyen! a név nagybetűvel kell kezdődjön!<br>";
    ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
        
    }
    
    //console.log(uzenet);
    megadottAdatok+="Név: "+ID("nev").value+"<br>";
    $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
    $("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;
}