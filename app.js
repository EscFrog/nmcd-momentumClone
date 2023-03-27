const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); // submit 이벤트가 발생할 때 브라우저의 기본 동작을 막는다. 새로고침을 말함.
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
