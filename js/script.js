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
