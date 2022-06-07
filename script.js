
function init(){
    var bool = true;
    var navBool = true;
    var Button = {
        rightBtn :document.querySelector('#left-right-btn .second'),
        leftBtn : document.querySelector('#left-right-btn .frst'),
        menuBtn : document.querySelector('#nav-bar'),
        menuList : document.querySelector('#nav-item-list'),
    }
var dsPage = document.querySelector('#ds-page');
var osPage = document.querySelector('#os-page')

//open nav bar 
Button.menuBtn.addEventListener('click',()=>{
   if(navBool)
   {
    //    console.log("just for testing purpose")
    anime({
        targets:Button.menuList,
        begin:function(){
            Button.menuBtn.innerHTML = "x";            
        },
        width:50+"%",
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
        begin:function(){
            Button.menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;        
        },
        duration:300,
        easing: "linear",
    })
    navBool = true;
   }
})


//open ds gate
    Button.rightBtn.addEventListener('click',()=>{
       if(bool){
        Button.leftBtn.style.cssText = "transform: scale(0);";
        dsPage.style.cssText = 'top:0%'
        bool = false;
       }
       else{
        Button.leftBtn.style.cssText = "transform: scale(1);";
           dsPage.style = 'top:100%';
           bool = true;
       }
    })
//open os gate
Button.leftBtn.addEventListener('click',()=>{
    if(bool){
     Button.rightBtn.style.cssText = "transform: scale(0);";
     osPage.style.cssText = 'top:0%'
     bool = false;
     
    }
    else{
        Button.rightBtn.style.cssText = "transform: scale(1);";
        osPage.style = 'top:100%';
        bool = true;
    }
 })
}

init();