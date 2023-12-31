let inputName=document.getElementById("inputName");
let addBtn=document.getElementById("addBtn");
let nameList=document.getElementById("nameList");
 

addBtn.addEventListener("click", function(){
    const li=document.createElement("button");
    li.innerText=inputName.value
    nameList.appendChild(li)
})