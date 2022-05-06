var buttons = {
    runArr : document.querySelector('.fa-laptop-code'),
    faChevRight: document.querySelector('.fa-chevron-right'),
    addBtn :document.querySelector('.top-btn'),
    sortBtn : document.querySelector('.bottom-btn'),
    addSort : document.querySelectorAll('.array-btn')
}
var containers = { 
    dsArrayContainer : document.querySelector('#ds-array-container'),
    dsSimulator: document.querySelector('#ds-animation-display')
}
//display simulator onclick
buttons.runArr.addEventListener('click',()=>{
    
    anime({

        targets:containers.dsSimulator ,
        baseFrequency: 0,
        scale: 1,
        height:[0 + "%",100 + "%"],
        width:[0 + "%",100 + "%"],
        begin:function(){
            containers.dsSimulator.style.display = "block"
        },
        easing: 'easeInOutQuad'
    })
    
})

//diplay buttons on click 
buttons.faChevRight.addEventListener("click",()=>{
    anime({
        targets: buttons.addSort,
        height:47 + "%",
        
        duration:2000
    })
})

var inputField = {
    button: document.querySelector('.btn'),
    text: document.querySelector('.text'),
    sort: document.querySelector('.sort'),
    pop: document.querySelector('.pop')
}
var userVal = [];
var displayBar = document.querySelector('.display-bar')

//add array element to container
inputField.button.addEventListener('click', () => {
    var userInput = inputField.text.value;

    inputField.text.value = ""
    print(userInput);


})
function print(val) {
    //push value to array
    userVal.push(val)

    var div = document.createElement('div');
    div.setAttribute('class', 'a-bar');
    div.style.height = val + '%';
    div.innerHTML = val
    displayBar.appendChild(div);
    var object = document.querySelector('.display-bar').lastChild;
    anime({
        direction: 'linear',
        targets: object,
        height: [0, val],
        duration: 2000
    })
}

//all inserted arrays 
//delete 
inputField.pop.addEventListener('click', () => {
    var allDiv = document.querySelectorAll('.a-bar')
    anime({
        targets: allDiv[allDiv.length - 1],
        backgroundColor: "hsl(0, 100%, 50%)",
        translateX: 50,
        duration: 1000,
    })
    setTimeout(() => { allDiv[allDiv.length - 1].remove() },
        1001);
})

//replace
inputField.sort.addEventListener('click', () => {
    var allDiv = document.querySelectorAll('.a-bar');
    var first = allDiv[0];
    allDiv[allDiv.length - 1].add
})