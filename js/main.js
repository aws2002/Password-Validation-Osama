var state =false;
function showtoggle(){
    if(state){
        document.getElementById("myPass").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class","far fa-eye");
        state = false;
    }else{
        document.getElementById("myPass").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class","far fa-eye-slash");
        state = true;
    }
}

myPass.onfocus = function(){
    document.getElementById("massage").style.opacity="1";
}
myPass.onblur = function(){
    document.getElementById("massage").style.opacity="0";
}

var Password    = document.getElementById("myPass");
var capital     = document.getElementById("capital");
var length      = document.getElementById("length");
var specialChar = document.getElementById("specialChar");
var number      = document.getElementById("number");

Password.onkeyup =function() {

    if(Password.value.match(/[A-Z||أ-ي]/)){
        document.getElementById('capitalIcon').setAttribute("class","fas fa-check")
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        document.getElementById('capitalIcon').setAttribute("class","fas fa-times")
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
///////////////////////////////////////////////
    if(Password.value.match(/[0-9]/)){
        document.getElementById('numberIcon').setAttribute("class","fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        document.getElementById('numberIcon').setAttribute("class","fas fa-times")
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
///////////////////////////////////////////////
    if(Password.value.match(/[a-z^A-Z||أ-ي]/)){
        document.getElementById('charIcon').setAttribute("class","fas fa-check")
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    }
    else{
        document.getElementById('charIcon').setAttribute("class","fas fa-times")
        specialChar.classList.remove("valid");
        specialChar.classList.add("invalid");
    }
///////////////////////////////////////////////
    if(Password.value.length >=8){
        document.getElementById('lengthIcon').setAttribute("class","fas fa-check")
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else{
        document.getElementById('lengthIcon').setAttribute("class","fas fa-times")
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
