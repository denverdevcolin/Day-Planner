
let currentHour = 8;
let allItems = new Set();




function addTasks () {

    const input = document.getElementById('input');
    const inputValue = input.value.split(',');

    if (!input.value) {
        showAlert("no tasks");
        return;
    }

    handleNewSubmission(inputValue);

    input.value = '';

}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTasks();
    }
})

function showAlert (message) {
    let alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    // alertMessage.className = `alert`;
    alertMessage.style.display = 'block';
    
    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 2000);
}

function handleNewSubmission (userInput) {
    let taskList = document.getElementById('taskList');
    
    userInput.forEach(item => {
        allItems.add(item.trim());

        const taskItem = document.createElement('div');
        taskItem.className = 'new-item';

        taskItem.textContent = `${currentHour}:00 - ${item}`;
        taskList.appendChild(taskItem);
        currentHour++;
    });
}

// function updateStats () {
//     const taskCount = allItems.size;
//     const nextTime = formatTime(currentHour);
//     summary.innerHTML = `<strong>Current Schedule:</strong>${taskCount} | <strong>Next available time:</strong> ${nextTime}`;
// }






// function clearAllTasks () {
//     if (allItems.size === 0) {
//         alert("Task List is already clear!");
//         return;
//     }

//     updateStats();
//     listEl.innerHTML = '';
// }

