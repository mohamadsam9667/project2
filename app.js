


let inputTag=document.getElementById('input-field')
let deletBtn=document.getElementById('btn-delete')
let listedShow=document.getElementById('listed')
let saveBtn=document.getElementById("btn-save")

let boxsArray=document.querySelectorAll('.color-box')
let targetBox=document.getElementById('color-select')




boxsArray.forEach(function(box){
    
    let MainColor=box.style.backgroundColor
    box.addEventListener('click',function(){
        inputTag.style.backgroundColor=MainColor
        
        
    })
    
    
})

function newElem (){
    
    let colorInput=inputTag.style.backgroundColor
    
    let newDiv=document.createElement('div');
    let newP=document.createElement('p')
        newDiv.classList.add('cardShadow-smRounded');
        newDiv.classList.add('shadow-sm');
        newDiv.classList.add('rounded');
        newDiv.style.backgroundColor=colorInput
        newDiv.addEventListener('click',rmover)
        newP.classList.add('card-text')
        newP.classList.add('p-3')
   
       
        newP.innerHTML=inputTag.value
        newDiv.appendChild(newP)
        listedShow.append(newDiv)
        inputTag.value=''
        inputTag.style.backgroundColor='#fff'
}   



inputTag.addEventListener('keydown',function(event){
    if(event.keyCode === 13){
        newElem();
    }
})
saveBtn.addEventListener('click',newElem)





deletBtn.addEventListener('click',function(){
    inputTag.value=''
    inputTag.style.backgroundColor='#fff'
})


function rmover(event){
    event.target.parentElement.remove()
}