//generate the code
function generate() {

let complexity = document.getElementById("slider").value;

let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*?";

let password = "";

for(i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

document.getElementById("display").value = password;

//previous passwords

document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

document.getElementById("length").innerHTML = "length: 20";

document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "lenght: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("lenght").innerHTML = "length: 1";
    }
}
//copy code
function copyPassword(){
    document.getElementById("display").select();
   
    document.execCommand("copy");
   
    alert("password copied");
}