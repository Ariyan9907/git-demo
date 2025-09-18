let inp=document.querySelector('input');
let btn=document.querySelector(".enter");
let ul=document.querySelector('ul');

function addtask(){
    if(inp.value.trim==="") return;

    let task=document.createElement('li');
    task.innerText=inp.value;

    let delBtn=document.createElement('BUTTON');
    delBtn.className="fa-solid fa-xmark";
    task.appendChild(delBtn);
    ul.appendChild(task);
    inp.value="";
}

btn.addEventListener("click",addtask);

inp.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        addtask();
    }
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let parent=event.target.parentElement;
        console.log("completed task:",parent.innerText);
        parent.remove();
    }
});