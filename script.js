

function init(){
    var bool = true;
    var Button = {
        leftBtn :document.querySelector('#left-right-btn .second') ,
    }
    var dsPage = document.querySelector("#ds-page");
    Button.leftBtn.addEventListener('click',()=>{
       if(bool){
        dsPage.style.cssText = 'left:0%;'
        bool = false;
       }
       else{
           dsPage.style = 'left:100%';
           bool = true;
       }
    })
}

init();