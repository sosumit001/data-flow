import Webcontent from "./source/content.js";
window.onload=()=>{
 
    let navContainer = document.querySelector('#container')
    let bodyContent = document.querySelector('#content');
    let navIcon = document.querySelector('#nav-icon');
    let navList = document.querySelector('#nav-list');
    let compImg = document.querySelector('#comp-img');
    //comp ArchiTechTure
    let compArchi = document.querySelector('#comp-archi')

    let bool = true;
   
    //onclick property on nav button
    navIcon.addEventListener('click',()=>{
        if(bool)
        {
            navIcon.innerHTML = Webcontent.navContent;
            navList.style.cssText = "height:7rem;opacity:1"
            navIcon.style = "background-color:rgb(255, 174, 0);"
            bool = false;
        }
        else{
            navIcon.innerHTML = Webcontent.navPreContent;
            navIcon.style = "background-color:yellow"
            navList.style = "height:0; opacity:0";
            bool = true;
        }
    })

    //onscroll properties
    window.addEventListener('scroll',()=>{
        let angle = Math.floor(1)*window.pageYOffset;
        compImg.style.setProperty('--angle',angle + "deg");
        
    })
    //ArchiTechPage 
    compArchi.addEventListener('click',()=>{
        //import compArchi from webcontent 
        bodyContent.innerHTML =Webcontent.compArchi;
        let cpucont = document.querySelector('#cpu-svg');
        navIcon.innerHTML = Webcontent.navPreContent;
        navIcon.style = "background-color:yellow"
        navList.style = "height:0; opacity:0";
        bool = true;
    })
}