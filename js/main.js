
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
    updateSummary();

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

        const timeString = formatTime(currentHour);
        taskItem.textContent = `${timeString} - ${item}`;
        taskList.appendChild(taskItem);
        currentHour++;
    });
}

function updateSummary () {

    let summary = document.getElementById('summary');
    // count number of items in allItems
    let taskCount = allItems.size;
    let nextTime = formatTime(currentHour);
    summary.innerHTML = `<strong>Current Schedule:</strong> ${taskCount} tasks | <strong>Next available time:</strong>${nextTime}`;
}

function formatTime (hour) {
    if (hour === 0 || hour === 12) {
        return hour === 0 ? "12:00 AM" : "12:00 PM";
    } else if (hour < 12) {
        return `${hour}:00 AM`;
    } else {
        return `${hour - 12}:00 PM`
    }
}

function clearAllTasks () {

    if (allItems.size === 0) {
        showAlert("Task list already clear!")
    }
    
    updateSummary();
    taskList.innerHTML = '';
    
}


