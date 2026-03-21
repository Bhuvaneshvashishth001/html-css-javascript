// let heading = document.getElementById("htag")
// let heading = document.getElementsByClassName("htag");
// let items = document.getElementsByClassName("items");
// for(let i=0;i<items.length;i++){
//     if(i%2 ==0){
//         items[i].style.backgroundColor="red";
//         items[i].textContent = "new even data"
//     }
// }

// for(let ele of items){
//     console.log(ele.style.color = "red");
// }

// let element = document.createElement("div");
// element.textContent = "this is new child";
// // document.body.append(element,"hello guys");
// // element.style.backgroundColor = "yellow";
// element.classList.add("color"); 
// element.style.backgroundColor = "yellow";
// element.style.fontFamily = "cursive";
// document.body.appendChild(element);

// let element = document.createElement("div");
// element.innerHTML = `<div>
//     <div>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
//     </div>
//     <p>This is a new paragraph.</p>
// </div>`;
// element.style.backgroundColor = "yellow";
// document.body.appendChild(element);

let ele = document.createElement("li");
ele.textContent = "grapes";
let target = document.querySelector(".items:nth-child(1)");
target.insertAdjacentElement("beforebegin", ele);

// Make button not clickable initially (already disabled in HTML)
// To enable it later, e.g., after clicking an item:
let button = document.getElementById("myButton");
let items = document.querySelectorAll(".items");

items.forEach(item => {
    item.addEventListener("click", () => {
        button.disabled = false; // Enable button after clicking an item
    });
});
