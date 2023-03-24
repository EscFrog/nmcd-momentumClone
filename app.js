const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  // 여기는 밑의 한 줄의 코드와 동일한 기능을 한다.
  // if (title.classList.contains(clickedClass)) {
  //   title.classList.remove(clickedClass);
  // } else {
  //   title.classList.add(clickedClass);
  // }
  title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleTitleClick);
