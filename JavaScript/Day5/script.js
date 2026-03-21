// let btn = document.querySelector("button");

// const todo = ()=>{
//     console.log("Don't touch");
// }

//  iss tarike se remove nhi hoga
// btn.addEventListener("click",function(){
//     console.log("Don't touch");
// });


// btn.removeEventListener("click",function(){
//     cosole.log("Don't touch");
// })


// iss tarike se remove ho jaega
// btn.addEventListener("click",todo);
// btn.removeEventListener("click",todo);

// let btn = document.querySelector("button");


// let todo = ()=>{
//     let target = document.querySelector(".items:nth-Child(3)");
//     target.style.backgroundColor = "yellow"
// }


// let btn = document.querySelector("button");
// let box = document.querySelector(".items:nth-child(3)");
// let  check = "";
// btn.addEventListener("click",function(){
//     if(check !== "yellow"){
//         box.style.backgroundColor = "yellow";
//         check = "yellow";
//     }
//     else{
//         box.style.backgroundColor = "";
//         check = "";
//     }
// });

// let btn = document.querySelector("button");
// let box = document.querySelector(".items:nth-child(3)");

// btn.addEventListener("click",function(){
//     box.classList.toggle("changeColor");
// })

// let btn = document.querySelector("button");
// let box = document.querySelector(".items:nth-child(3)");

// btn.addEventListener("dblclick",function(){
//     box.classList.toggle("changeColor");
// })

// let target = document.querySelector("a");
// target.addEventListener("click",function(e){
//     e.preventDefault();
// })

let target = document.querySelector("input");

target.addEventListener("input",function(e){
    console.log(e.target.value);
})
