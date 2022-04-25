

function init(){
    var bool = true;
    var Button = {
        leftBtn :document.querySelector('#left-right-btn .second') ,
    }
    var dsPage = document.querySelector("#ds-page");
    Button.leftBtn.addEventListener('click',()=>{
       if(bool){
        dsPage.style.cssText = 'right:0%; width:100%;'
        bool = false;
       }
       else{
           dsPage.style = 'right:-100%; width:0%;';
           bool = true;
       }
    })
}

init();