

function init(){
    var bool = true;
    var Button = {
        leftBtn :document.querySelector('#left-right-btn .second') ,
    }

     var dsPage = document.querySelector('#ds-page');
 
    Button.leftBtn.addEventListener('click',()=>{
       if(bool){
        dsPage.style = 'right:0%;  width:100%;'
        bool = false;
        console.log("aasd");
       }
       else{
           dsPage.style = 'right:-100%; width:0%;';
           bool = true;
       }
    })
   console.log("adsfafd")
}

init();