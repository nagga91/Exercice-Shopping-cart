var minus=document.querySelectorAll("#minus")
var plus=document.querySelectorAll("#plus")
var quantities=document.querySelectorAll("#quantity")
var table=document.querySelector("#table")
var add=document.querySelectorAll("#add")
var pictures=document.querySelectorAll("#picture")
var prices=document.querySelectorAll("#price")
var titles=document.querySelectorAll("#title")
var total=document.querySelector("#total")
console.log(add)
// plus[0].addEventListener("mouseover",function(){
//     plus[0].style.backgroundColor="black"
// })
// plus[0].addEventListener("mouseout",function(){
//     plus[0].style.backgroundColor="red"
// })
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click",function(){
    quantities[i].innerHTML++
  })
    
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click",function(){
    if(quantities[i].innerHTML>0){
        quantities[i].innerHTML--
    }
    
  })
    
}
function calcultotal(){
     var quantity=document.querySelectorAll("#quantityAchat")
    var price=document.querySelectorAll("#priceunitaire")
    var result=0
    for (let i = 0; i < price.length; i++) {
       result=result+ price[i].innerHTML*quantity[i].innerHTML
        
    }
    total.innerHTML=result
}

for (let i = 0; i < add.length; i++) {
   add[i].addEventListener("click",function(){
    if(quantities[i].innerHTML>0){
        var tr=document.createElement("tr")
    tr.style.width="100%"
    tr.id="row"
    tr.innerHTML=`
     <td>
                <img width="50px" height="50px" src="${pictures[i].src}" alt="">
            </td>
            <td>
                ${titles[i].innerHTML}
            </td>
            <td id="priceunitaire">
                ${prices[i].innerHTML}
            </td>
            <td id="quantityAchat">
               ${quantities[i].innerHTML}
            </td>
            <td>
                <button id="remove">X</button>
            </td>
    `
    table.appendChild(tr)
   
        calcultotal()
    var removes=document.querySelectorAll("#remove")
     var rows=document.querySelectorAll("#row")
    for (let i = 0; i < removes.length; i++) {
        removes[i].addEventListener("click",function(){
           
            console.log(rows)
            rows[i].remove()
            calcultotal()
        })
        
    }
    
    }
    else{
        alert("you must increase the quantity")
    }
    
   })
    
}