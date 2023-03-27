const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function hadleBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", hadleBtnClick);
