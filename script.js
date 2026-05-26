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

    //create paragraph

    const todoitem=document.createElement("p");
    todoitem.textContent=todotext;

    const deletebtn=document.createElement("button");
    deletebtn.textContent="X";

    deletebtn.addEventListener("click",function(){
        item.remove();

    })
    item.appendChild(todoitem);
    item.appendChild(deletebtn);

    todocontainer.appendChild(item);
    todo.value="";
})