let input = document.getElementById("input");
let list = document.querySelector(".list");
let comp = document.querySelector(".complete");

function addTask() {
  if (input.value === "") {
    alert("Specify the task first!");
  } else {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = "./assets/delete.png";
    li.innerHTML = input.value;
    li.setAttribute("contenteditable", "true");
    li.addEventListener("blur", () => {
      li.removeAttribute("contenteditable");
    });
    console.log(li);
    input.value = "";
    list.appendChild(li);
    li.appendChild(img);
  }
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const task = e.target;
    task.classList.toggle("checked");
    if (task.classList.contains("checked")) {
      setTimeout(() => {
        list.removeChild(task);
        comp.appendChild(task);
      }, 500);
    }
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

comp.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const compTask = e.target;
    e.target.classList.toggle("checked");

    if (!compTask.classList.contains("checked")) {
      setTimeout(() => {
        comp.removeChild(compTask);
        list.appendChild(compTask);
      }, 500);
    }
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
});

function removeTask() {
  list.innerHTML = "";
  comp.innerHTML = "";
}
