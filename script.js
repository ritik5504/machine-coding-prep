const form=document.querySelector(".form");
const app=document.querySelector(".app");
const todo=document.querySelector("#todo");


const todocontainer=document.createElement("div");
app.appendChild(todocontainer);

//submit bala
form.addEventListener("submit",function(e){
    e.preventDefault();

    const todotext=todo.value.trim();
    if(todotext===""){
        alert("enter something...");
        return;

    }

    const item=document.createElement("div");

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";


    const todoitem=document.createElement("p");
    todoitem.textContent=todotext;

    const deletebtn=document.createElement("button");
    deletebtn.textContent="X";

    deletebtn.addEventListener("click",function(){
        item.remove();

    })

    checkbox.addEventListener("chnage",function(){
        if(checkbox.checked){
            todoitem.style.textDecoration="line-through";
        }else{
            todoitem.style.textDecoration="none";
        }
    })
    item.appendChild(todoitem);
    item.appendChild(deletebtn);
    item.appendChild(checkbox);

    todocontainer.appendChild(item);
    todo.value="";
})