document.addEventListener('DOMContentLoaded',() => {
    let container = document.getElementById('menu');
    let sidebarContainer = document.getElementById('sidebar_container');
    let element = document.getElementById('sidebar_box');
    let close = document.getElementById('sb-close-button');
    let isClick = false;

    container.addEventListener('click',(event) =>{
        event.stopPropagation();
        if(!isClick){
            sidebarContainer.classList.add('show');
            element.classList.add('show');
            isClick = true;
        } else {
            sidebarContainer.classList.remove('show');
            element.classList.remove('show');
            isClick = false;
        }
    });
    element.addEventListener('click',(event) =>{
        event.stopPropagation();
    });
    close.addEventListener('click',() =>{
        if(isClick){
            sidebarContainer.classList.remove('show');
            element.classList.remove('show');
            isClick = false;
        }
    });
});