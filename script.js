let ctr=1;
function deleteTodo(index) {
    const element=document.getElementById(index);
    element.parentNode.removeChild(element);

}


function addTodo(){
    const inputEl=document.querySelector("input");
    const value=inputEl.value;
    if(value == ""){
        alert('enter todo');
        return 
    }
    const newDivEl=document.createElement("div");
    newDivEl.setAttribute("id",ctr);

    newDivEl.innerHTML="<div>" + value +'<button onclick="deleteTodo('+ctr +')"> Delete</button></div>';

    document.querySelector("body").appendChild(newDivEl)
    ctr=ctr+1;
}