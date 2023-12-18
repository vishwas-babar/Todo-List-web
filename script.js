// access all buttons
let filter_btn = document.querySelector('.filter');
let delete_all_btn = document.querySelector('.delete-all');

// let edit_btn = document.querySelector('.edit-btn');
// let done_btn = document.querySelector('.done-btn');
// let remove_btn = document.querySelector('.remove-btn');

let add_btn = document.querySelector('.add-btn');

let index = -1; // this is for storing the index of the task in the array of object


// add event listeners to all buttons
filter_btn.addEventListener('click', filterTheTasks);
delete_all_btn.addEventListener('click', deleteAllTasks);

// edit_btn.addEventListener('click', editTask);
// done_btn.addEventListener('click', doneTask);
// remove_btn.addEventListener('click', removeTask);

add_btn.addEventListener('click', addTask);


// defining the array of object for storing the tasks data
const tasks_arr = Array();

class Tasks {
    constructor(task, date, status = false) {
        this.task = task;
        this.date = date;
        this.status = status;
    }
}


// this function is for creating a object and storing it into the array
function addTaskToArray(task, date, status) {
    let task_obj = new Tasks(task, date, status);

    tasks_arr.push(task_obj);
}


// function for adding the task into the list
function addTask() {
    console.log('adding the task');

    // getting the task from the input field
    let task_name = document.querySelector('.task-name');
    let task_date = document.querySelector('.task-date');

    if (task_name.value.trim() == '') {
        alert('Please enter the task');
    } else {
        //  adding the task into the array of object
        addTaskToArray(task_name.value, task_date.value);
        index++;
        createTaskElements();



        // adding event listeners to the buttons
        let edit_btn = document.querySelectorAll('.edit-btn');
        let done_btn = document.querySelectorAll('.done-btn');
        let remove_btn = document.querySelectorAll('.remove-btn');

        edit_btn.forEach(element => {
            element.addEventListener('click', editTask);
        });
        done_btn.forEach(element => {
            element.addEventListener('click', doneTask);
        });
        remove_btn.forEach(element => {
            element.addEventListener('click', removeTask);
        });
    }
}

function createTaskElements() {
    
    let task_table = document.querySelector('.task-table');

    console.log(tasks_arr[index].task);
    // creating the tr element
    let tr = document.createElement('tr');
    tr.setAttribute('class', 'task-row');
    task_table.appendChild(tr);

    // creating the td element
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.textContent = tasks_arr[index].task;
    td2.textContent = tasks_arr[index].date;
    td3.textContent = (()=> {
        if (tasks_arr[index].status == true) {
            return 'Completed';
        } else {
            return 'pending';
        }
    })();
    td4.innerHTML = `
                        <button class="edit-btn"><i class='bx bx-edit-alt' ></i></button>
                        <button class="done-btn"><i class='bx bx-check'></i></button>
                        <button class="remove-btn"><i class='bx bx-trash'></i></button>
                    `


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

}


// function for filtering the tasks
function filterTheTasks() {
    console.log('filtering the tasks');
}

// function for deleting all the tasks
function deleteAllTasks() {
    console.log('deleting all the tasks');

    // deleting all the tasks from the array
    index = -1;
    tasks_arr.splice(0, tasks_arr.length);

    // deleting all the tasks from the table
    // let task_table = document.querySelector('.task-table');
    let task_rows = document.querySelectorAll('.task-row');
    task_rows.forEach(element => {
        element.remove();
    });
}

// function for editing the task
function editTask() {
    console.log('editing the task');
}

// function for marking the task as done
function doneTask() {
    console.log('marking the task as done');
}

// function for removing the task
function removeTask() {
    console.log('removing the task');
}

// function for storing the data into the local storage
function storeData() {
    console.log('storing the data into the local storage');
}

// function for getting the data from the local storage
function getData() {
    console.log('getting the data from the local storage');
}

