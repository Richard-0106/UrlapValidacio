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
    var reg=/[A-Z]+[a-z]{2,}/;
    if(ID("nev").value.length<3){
        uzenet +="A név legalább 3 karakter hosszú legyen<br>";
        ID("nev").style.border="2px solid red";
    }
    else if( !reg.test(ID("nev").value)){        
         uzenet +="A név legalább 3 karakter hosszú legyen! a név nagybetűvel kell kezdődjön!<br>";
    ID("nev").style.border="2px solid red";
    }
    else{
        ID("nev").style.border="none";    
    }
    var regEmail=/[a-z]+@+[a-z]+.hu$/;
    
if(!regEmail.test(ID("email").value)){
        uzenet +="Az email tartalmazzon egy @-ot és .hu-val végződjön <br>";
        ID("email").style.border="2px solid red";
    }else{
        ID("email").style.border="none";
          
}
if(ID("email").value!==ID("emailUjra").value){
        uzenet +="Nem egyezik meg az első emaillel <br>";
        ID("emailUjra").style.border="2px solid red";
    }else{
        ID("emailUjra").style.border="none";
    }
    
    var regTel=/^\+[0-9]{11}$/;
    
if(!regTel.test(ID("number").value)){
    uzenet += "Plusszal kezdődjön és 11 darab számból álljon<br>";
    ID("number").style.border="2px solid red";
    
}else{
    ID("number").style.border="none";
}
    var regWeb=/^\http:+[a-z]+.com$/;
    
if(!regWeb.test(ID("weboldal").value)){
    uzenet +="http:-vel kezdődjön és .com legyen a vége<br>";
    ID("weboldal").style.border="2px solid red";
}else{
    ID("weboldal").style.border="none";
}
   /* if( !reg.test(ID("email").value)){
        
         uzenet ="A név legalább 3 karakter hosszú legyen! a név nagybetűvel kell ssssssssssskezdődjön!<br>";
    ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
        
    }*/
    
    //console.log(uzenet);
    megadottAdatok+="Név: "+ID("nev").value+"<br>";
    megadottAdatok+="Email cím: "+ID("email").value+"<br>";
    megadottAdatok+="Telefonszám: "+ID("number").value+"<br>";
    megadottAdatok+="Weboldal: "+ID("weboldal").value+"<br>";
    $("aside section:nth-child(1) p")[0].innerHTML=uzenet;
    $("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;
}