let init = "hide";
function iconChanged() {
  init = init === "hide" ? "show" : "hide";
  console.log(init);
  let pwd1 = document.getElementById("pwd1");

  if (init === "hide") {
    pwd1.type = "password";
  } else {
    pwd1.type = "text";
  }
  var iconselector = document.querySelector(".chngcls1");

  changer(iconselector);
}
let final = "hide";
function iconChanged2() {
  final = final === "hide" ? "show" : "hide";
  console.log(final);

  let pwd2 = document.getElementById("pwd2");
  if (final === "hide") {
    pwd2.type = "password";
  } else {
    pwd2.type = "text";
  }
  var iconselector2 = document.querySelector(".chngcls2");
  changer(iconselector2);
}
function changer(selector) {
  selector.classList.toggle("far");
  selector.classList.toggle("fa-eye");
  selector.classList.toggle("fas");
  selector.classList.toggle("fa-eye-slash");
}
function checkPassword(e) {
  password1 = e.password1.value;
  password2 = e.password2.value; //Here password 2 is name of second password input
  if (password1 == "") {
    alert("Enter the password");
  } else if (password2 == "") {
    alert("Enter confirm password");
  } else if (password2 != password1) {
    alert("Password do not match");
  } else {
    alert("Fuck you");
  }
}
