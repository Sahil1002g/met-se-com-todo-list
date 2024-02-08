let add=document.querySelector(".button");
let popup=document.querySelector("#pop");
let save=document.querySelector("#save");
let cancle=document.querySelector("#cancle");
console.log(add,popup,save);

add.addEventListener("click",()=> {
    popup.classList.remove("d-non");    
});
save.addEventListener("click",()=>{
    popup.classList.add("d-non")
});
cancle.addEventListener("click",()=>{
    popup.classList.add("d-non")
})

let todo=document.querySelector("#name")
let dis=document.querySelector(".dis")
let select=document.querySelector("#select");


save.addEventListener("click",()=>{
    let data={
        todo:todo.value ,
        dis:dis.value,
        select:select.value
    }
    console.log(todo);

    let todoli=localStorage.getItem("todoli")
    todoli=todoli === null ? [] : JSON.parse(todoli)
    
    todoli.unshift(data)
    localStorage.setItem("todoli",JSON.stringify(todoli))
    alert("todo is saved successful")
})

let todoli=localStorage.getItem("todoli")
let work=document.querySelector(".list")
 todoli= JSON.parse(todoli);


 let detail=todoli.map((value)=>{
    return` 
    
<div >
<h1>${value.todo}</h1>

<p>${value.dis}</p>
</div>
<button><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
   `
})
work.innerHTML=detail.join("");
console.log(blog);
