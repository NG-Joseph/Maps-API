const sub = document.querySelectorAll(".sub")[0]
const subli = document.querySelectorAll(".sub>ul>li")
const subulli = document.querySelectorAll(".searchbar > ul >li")[3]
const plus = document.querySelectorAll(".plus")[0]
const burger = document.querySelectorAll(".burger")[0]
const nav = document.querySelectorAll(".searchbar")[0]


plus.addEventListener("click", subcli)
burger.addEventListener("click", burcli)
let j = 0, k = 0 

function subcli(){
    if(j === 0){
        sub.style = "top:100px;opacity:1"
        for(a of subli){
            a.style = "padding: 10px 0"
        }
        subulli.style = "margin-top:240px"
        j++
    } else {
        sub.style = "top:10px;opacity:0"
        subulli.style = "margin-top:0"
        j--
    }
}
 function burcli(){
     if (k === 0){
         nav.style = "left:0px"
         k++
     } else {
         nav.style = "left:-250px"
         k--
     }
 }