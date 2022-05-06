
function init(){
    var bool = true;
    var navBool = true;
    var Button = {
        leftBtn :document.querySelector('#left-right-btn .second'),
        menuBtn : document.querySelector('#nav-bar'),
        menuList : document.querySelector('#nav-item-list')
    }
var dsPage = document.querySelector('#ds-page');

//open nav bar 
Button.menuBtn.addEventListener('click',()=>{
   if(navBool)
   {
    anime({
        targets:Button.menuList,
        width:80+"%",
        duration:400,
        easing: "linear",
        
    })
    navBool = false;
   }
   else
   {
    anime({
        targets:Button.menuList,
        width:0+"%",
        duration:300,
        easing: "linear",
    })
    navBool = true;
   }
})


//open ds gate
    Button.leftBtn.addEventListener('click',()=>{
       if(bool){
        dsPage.style.cssText = 'top:0%'
        bool = false;
        console.log("aasd");
       }
       else{
           dsPage.style = 'top:100%';
           bool = true;
       }
    })
   console.log("adsfafd")
}

init();