

document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
});
        function addTask() {
            const taskInput = taskInput.value();

            if (taskInput !== '') {
            const taskObject = document.createElement('ul');
            taskObject.textContent = taskInput;
            {
        let button = document.querySelector('button');
        addTaskButton.addEventListener("click", addTask);



                taskObject.addEventListener('click', createTask);


                taskInput.value = '';
            }
        }

        function creatTask(event) {
            const taskItem = event.target;
            taskItem.classList.toggle('completed');
        }

}












