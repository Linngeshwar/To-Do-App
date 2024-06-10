
let taskCount = 1;

function checkTask(checkbox){
    const taskName = checkbox.nextElementSibling;
    if(checkbox.checked && taskName.value){
        taskName.style.textDecoration ='line-through';
    } else{
        taskName.style.textDecoration ='none';
    }
}

// function checkOverFlow(){
//     if(container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth){
//         container.classList.add("overflow");
//     }else{
//         container.classList.remove("overflow");
//     }
// }

function AddTask(){
    const appcontainer = document.getElementById("App-container");
    
    let NewTask = document.createElement("div");
    NewTask.className = "task";
    NewTask.id = `task${taskCount}`;
    
    let checkbox = document.createElement("input");
    checkbox.className = "Tick";
    checkbox.id = `checkbox${taskCount}`;
    checkbox.type = "checkbox";
    checkbox.onclick = function(){ checkTask(this)};
    
    let Taskname = document.createElement("input");
    Taskname.type = "text";
    Taskname.placeholder = "TaskName";
    Taskname.id = "taskName";

    let Deletebtn = document.createElement("img");
    Deletebtn.src = "delete.jpg";
    Deletebtn.className = "deleteTask";
    Deletebtn.onclick = function(){delTask(this)};

    NewTask.appendChild(checkbox);
    NewTask.appendChild(Taskname);
    NewTask.appendChild(Deletebtn);
    appcontainer.appendChild(NewTask);
    NewTask.classList.add("FadeIn");
    taskCount++;
    console.log(NewTask);
}
function delTask(deletebtn){
    console.log(deletebtn);
    const tasks = document.getElementById("App-container");
    let task = deletebtn.parentNode;
    task.classList.remove("FadeIn");
    task.classList.add("FadeOut");
    setTimeout(()=>{
        tasks.removeChild(task); 
    },450);
    taskCount--;
}
// container.onload = checkOverFlow;
// container.onresize = checkOverFlow;