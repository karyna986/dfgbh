let miniBlock = document.querySelector ('.new--div')
let divStep = 0
let leftCrock=0

function showbottom() {
    divStep += 10
    if (divStep<=350) {
        miniBlock.style.top = divStep +'px'
    }
    else {
       alert('За границы блока выходить нельзя!')
    }
}

function showtop() {
 divStep -= 10
if (divStep>=0) {
    miniBlock.style.top = divStep +'px'
}
else {
    alert('За границы блока выходить нельзя!')
    }
}

function showleft(){
leftCrock -= 10
    if (leftCrock>=0) {
        miniBlock.style.left = leftCrock +'px'
    }
    else {
       alert('За границы блока выходить нельзя!')
    }
}

function showright(){
    leftCrock += 10
    if (leftCrock<=800) {
        miniBlock.style.left = leftCrock +'px'
    }
    else {
       alert('За границы блока выходить нельзя!')
    }
      
}
    
      
    
   
  

 


 
   