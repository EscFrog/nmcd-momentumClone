const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (title.className === clickedClass) {
    title.className = "";
  } else {
    title.className = clickedClass;
  }
}

title.addEventListener("click", handleTitleClick);
