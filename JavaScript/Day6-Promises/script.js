// function addtocart(){
//     console.log("item added to cart");
//     payment();
// }
// function payment(){
//     let  paidPrice;
//     console.log("payment processing...");
//     setTimeout(()=>{
//         paidPrice = 1000;
//         console.log("payment done");
//         orderdone(paidPrice);
//     },0)
// }
// function orderdone(paidPrice){
//     setTimeout(()=>{
//         console.log(`waiting ...`);
//         setTimeout(()=>{
//             console.log(`order completed with price ${paidPrice}`);
//             setTimeout(()=>{
//                 console.log("order delivered");
//             },2000);
//         },2000);
//     },3000);
// }
// addtocart();

// let btn = document.querySelector("button");
// let container = document.querySelector(".containner");
// let img;
// const fetchdata  = ()=>{
//     // container.innerHTML = ""; ye hai image ko remove krke usi jagah par dusri image crete krna
//     // iski jagah hum if - else bhi use kr skte hai ki agar img element exist krta hai to uska src update krdo warna naya img element create krke uska src set krdo
//     let selected = document.querySelector("input").value;
//     let data = fetch(`https://dog.ceo/api/breed/${selected}/images/random`).then(res=>{
//         res.json().then(((data)=>{
//             const {message , status} = data;
//             if(!img){
//                 img = document.createElement("img");
//                 img.setAttribute("src",message);
//                 container.appendChild(img);
//             }
//             else{
//                 img.setAttribute("src",message);
//             }
//         }));
//     });  
// }

// let target = btn.addEventListener("click",fetchdata);


let btn = document.querySelector("button");
let container = document.querySelector(".containner");
let div;
let img;
const fetchdata  = ()=>{
    // container.innerHTML = ""; ye hai image ko remove krke usi jagah par dusri image crete krna
    // iski jagah hum if - else bhi use kr skte hai ki agar img element exist krta hai to uska src update krdo warna naya img element create krke uska src set krdo
    // let selected = document.querySelector("input").value;

    let data = fetch("https://fakestoreapi.com/products").then(res=>{
        res.json().then(((data)=>{
            if(data){
                data.forEach((ele)=>{
                    div = document.createElement("div")
                    const {title,description,image,price} = ele;
                    div.innerHTML = `<h3>${title}</h3><i>${description}</i><img src=${image}></img><strong>${price}</strong>`;
                    container.appendChild(div);
                });
            }
        }));
    });  
}

let target = btn.addEventListener("click",fetchdata);
