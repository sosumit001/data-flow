
function init(){
    var boolEff = {
        navBool :  true,
    }
    var Button = {
        menuBtn : document.querySelector('#nav-bar'),
        menuList : document.querySelector('#nav-item-list'),
    }

    //1. open nav bar 
Button.menuBtn.addEventListener('click',()=>{
    if(boolEff.navBool)
    {
     //    console.log("just for testing purpose")
     anime({
         targets:Button.menuList,
         begin:function(){
             Button.menuBtn.innerHTML = "x";            
         },
         width:80+"%",
         duration:400,
         easing: "linear",
         
     })
     boolEff.navBool = false
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
     boolEff.navBool = true;
    }
 })


}

init();