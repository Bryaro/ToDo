const ListElement = document.getElementById("ongoing-tasks-container");
const newTaskButton = document.getElementById("create-btn");
const userInput = document.getElementById("input-field");
const taskList = [];
newTaskButton.addEventListener("click", createNewTask);
createHTML();
function createHTML() {
    for(let i = 0; i < taskList.length; i++){
        const taskElement = document.createElement("li");
        const userText = document.createElement("p");
        const doneButton = document.createElement("button");
        const removeButton = document.createElement("button");
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
        function completeTask() {
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
        function makeOngoing() {
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
        function removeTask() {
            taskList.splice(i, 1);
            ListElement.innerHTML = "";
            console.log(taskList);
            for(let i1 = 0; i1 < taskList.length; i1++)taskList[i1].onList = false;
            createHTML();
        }
    }
}
function createNewTask() {
    const inputValue = userInput.value.trim();
    if (!inputValue) {
        alert("Du m\xe5ste skriva n\xe5got i f\xe4ltet!");
        return;
    }
    const task = {
        userInput: inputValue,
        isCompleted: false,
        onList: false
    };
    taskList.push(task);
    console.log(taskList);
    userInput.value = "";
    createHTML();
}
createHTML();

//# sourceMappingURL=index.2298a1cd.js.map
