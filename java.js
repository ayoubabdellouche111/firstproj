const user=document.querySelector(".user");
const create=document.querySelector(".create");
const btn=document.querySelector(".btn");
const account=document.querySelector(".account");
const list_createnone=document.querySelector(".list_createnone");

user.addEventListener("click",(eo) => {
    create.classList.add("active")
    
})
btn.addEventListener("click",(params) => {
    create.classList.remove("active")
    
})
account.addEventListener("click",(eo) => {

    list_createnone.classList.add("active")
    
})