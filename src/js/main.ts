const ListElement = document.getElementById("ongoing-tasks-container") as HTMLElement;
const newTaskButton = document.getElementById("create-btn") as HTMLButtonElement;
const userInput = document.getElementById("input-field") as HTMLInputElement;
const taskList: { userInput: string, isCompleted: boolean, onList: boolean }[] = [];

newTaskButton.addEventListener("click", createNewTask);

createHTML();

function createHTML(): void {
  for (let i = 0; i < taskList.length; i++) {
    const taskElement = document.createElement("li") as HTMLLIElement;
    const userText = document.createElement("p") as HTMLParagraphElement;
    const doneButton = document.createElement("button") as HTMLButtonElement;
    const removeButton = document.createElement("button") as HTMLButtonElement;
    removeButton.innerText = "X";
    removeButton.addEventListener("click", removeTask);
    doneButton.innerText = "Done";
    doneButton.className = "complete-task-btn";

    if (taskList[i].onList === false) {
      userText.innerText = taskList[i].userInput;
      userText.className = "ongoing-text";
      taskElement.className = "ongoing-task";
      removeButton.className = "remove-btn";
      taskElement.appendChild(userText);
      taskElement.appendChild(removeButton);
      ListElement.appendChild(taskElement);
      taskElement.appendChild(doneButton);
      taskElement.appendChild(removeButton);
      doneButton.addEventListener("click", completeTask);
      taskList[i].onList = true;
    }

    function completeTask(): void {
      taskList[i].isCompleted = true;
      console.log(taskList[i]);
      doneButton.removeEventListener("click", completeTask);
      doneButton.addEventListener("click", makeOngoing);

      if (taskList[i].isCompleted === true) {
        taskElement.className = "completed-task";
        userText.className = "completed-text";
        doneButton.innerText = "Undo";
        doneButton.className = "undo-btn";
      }
    }

    function makeOngoing(): void {
      taskList[i].isCompleted = false;
      console.log(taskList[i]);

      if (taskList[i].isCompleted === false) {
        taskElement.className = "ongoing-task";
        userText.className = "ongoing-text";
        doneButton.innerText = "Done";
        doneButton.className = "complete-task-btn";
        doneButton.removeEventListener("click", makeOngoing);
        doneButton.addEventListener("click", completeTask);
      }
    }

    function removeTask(): void {
      taskList.splice(i, 1);
      ListElement.innerHTML = "";
      console.log(taskList);
      for (let i = 0; i < taskList.length; i++) {
        taskList[i].onList = false;
      }
      createHTML();
    }
  }
}

function createNewTask(): void {
  const inputValue = userInput.value.trim();

  if (!inputValue) {
    alert("Du måste skriva något i fältet!");
    return;
  }

  const task = {
    userInput: inputValue,
    isCompleted: false,
    onList: false,
  };

  taskList.push(task);
  console.log(taskList);

  userInput.value = "";
  createHTML();
}


createHTML();
