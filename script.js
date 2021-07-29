var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var numbers = "1234567890";

function generate() {
  let code = document.getElementById("slider").value;

  var values = "";
  values += lower;
  values += upper;
  values += special;
  values += numbers;

  let password = "";

  for (i = 0; i <= code; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("display").value = password;

  document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

document.getElementById("length").innerHTML = "length: 20";

document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 5) {
    document.getElementById("length").innerHTML =
      "lenght: " + document.getElementById("slider").value;
  } else {
    document.getElementById("lenght").innerHTML = "length: 1";
  }
};

function copyPassword() {
  document.getElementById("display").select();

  document.execCommand("copy");

  alert("password copied");
}
