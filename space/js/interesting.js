window.onscroll = function showHeader(){
    
    var header=document.querySelector(".header");
    if(window.pageYOffset>1){
        header.classList.add("header-fixed");
    }
    else{
        header.classList.remove("header-fixed");
    }
}

const animItems = document.querySelectorAll('._anim-items');

// if(animItems.length>0){
//     function animOnScroll(parms){
//         for(let index=0; index<animItems.length; index++ ){
//             const animeItem = animeItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOFFset = offset(animeItem).top;
//             const aniStart = 4;

//             const aniItenPoint = window.innerHeight - animItemHeight / aniStart
//             if(animItemHeight>window.innerHeight){
//                 window.innerHeight -  window.innerHeight/ aniStart
//             }
//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }
// }