let taskinput = document.getElementById('TaskInput');
let addBtn = document.getElementById('AddBtn');
let notasks = document.getElementById('NoTasks');
let alltasks = document.getElementById('AllTasks');
let inputcomment = document.getElementById('val');
let showbtn =document.getElementById('mb');
let model = document.getElementById('model');

showbtn.addEventListener('click', ()=>{
    model.classList.add('block');
})

let closeshowfunc = () =>{
    model.classList.remove('block');    
}

let closecommentfunc = () =>{
    inputcomment.classList.add('none');
    
}

let notasksfunc = () =>{
    if(alltasks.childElementCount == 0){
    notasks.classList.remove('none');}
    
}



let addtask = ()=>{
    
    let taskData = taskinput.value;
    if(taskData.length == 0 ){
        inputcomment.innerText ='Please Enter valid Data';
        inputcomment.classList.remove('none');
        inputcomment.innerHTML +=` <button type="button" onclick="closecommentfunc()" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>`;
    }
   
    else if(taskData.length < 3 ){
        inputcomment.innerText ='Please Enter more than 3 char';
        inputcomment.classList.remove('none');
        inputcomment.innerHTML +=` <button type="button" onclick="closecommentfunc()" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>`;
    }
    else if(taskData.length >= 20 ){
        inputcomment.innerText ='Please Enter less than 20 char';
        inputcomment.classList.remove('none');
        inputcomment.innerHTML +=` <button type="button" onclick="closecommentfunc()" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>`;
    }

    else{
    inputcomment.classList.add('none');
    notasks.classList.add('none');
    let myDiv = document.createElement('div');
    let delBtn =document.createElement('button');
    delBtn.classList = 'btn del btn-danger float-right';
    delBtn.innerText = 'Delete';
    myDiv.classList = 'alert task alert-info py-4';
    myDiv.innerHTML = taskData; 
    myDiv.append(delBtn); 
    alltasks.append(myDiv);
    
    alltasks.addEventListener('click', function(e){
        if(e.target.classList.contains('task')){
            e.target.classList.toggle('checked');
        }

    });

    taskinput.value ="";
    
    }
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains('del')){
       e.target.parentElement.remove();
       notasksfunc();
    }
})

addBtn.addEventListener('click', addtask);

