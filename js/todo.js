const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에는 문자열만 저장할 수 있다. 그래서 toDos 배열을 JSON 문법의 문자열로 바꿔서 저장한다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 이 한 줄을 무려 3개의 강의에서 설명함. 잘 기억해둘 것.
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const div = document.createElement("div");
  div.innerText = "●";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(div);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  if (toDos.length < 5) {
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      // 현재 시간을 id로 사용하기 위해 새로운 투두를 오브젝트로 전달한다.
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  } else {
    alert("You can't enter more than 5 To Do");
  }
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos); // string 으로 되어있던 JSON 구문을 해설해서 다시 매열로 만든다.
  toDos = parsedTodos; //예전 toDos 항목들을 toDos 배열에 다시 넣는다.
  parsedTodos.forEach(paintToDo);
}
