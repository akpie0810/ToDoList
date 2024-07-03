let listContainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');
let btn = document.getElementById('btn');

function addTask(){
    if(inputBox.value===''){
        alert('Enter your task before adding it.')
        console.log('No')
    }
    else{
        const task = document.createElement('li');
        task.innerText = inputBox.value;
        listContainer.appendChild(task);
        let span = document.createElement('span')
        span.textContent='\u00d7'
        task.appendChild(span)
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName==='LI'){
        el.target.classList.toggle('checked')
        saveData();

    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove();
        saveData()
    }
})
btn.addEventListener('click',()=>{
    addTask();
}
)

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('tasks', listContainer.innerHTML)
}
showData();
