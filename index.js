
window.onload=()=>{
    let navIcon = document.querySelector('#nav-icon');
    let navList = document.querySelector('#nav-list');
    let bool = true;
    
    //onclick property on nav button
    let navContent = `<i class="fa-solid fa-xmark"></i>`;
    let navPreContent = `<i class="fa-solid fa-angles-right">`;
    navIcon.addEventListener('click',()=>{
        if(bool)
        {
            navIcon.innerHTML = navContent;
            navList.style.cssText = "height:7rem;opacity:1"
            navIcon.style = "background-color:rgb(255, 174, 0);"
            bool = false;
        }
        else{
            navIcon.innerHTML = navPreContent;
            navIcon.style = "background-color:yellow"
            navList.style = "height:0; opacity:0";
            bool = true;
        }
    })

}