let webWidth = document.body.clientWidth;
const navMove = document.querySelector('#nav_move');
const featuredH3 = document.querySelectorAll('.featured_title h3');
const featured = document.querySelectorAll('.featured');
const mainFooter = document.querySelector('.main_footer');
const mainFooterH3 = document.querySelectorAll('.footer_item h3');
const mainFooterUl = document.querySelectorAll('.footer_item ul');
const specialWrap = document.querySelector('.special_wrap');
const specialItem = document.querySelectorAll('.special_item');
const specialLeft = document.querySelector('.section_special .left')
const specialRight = document.querySelector('.section_special .right') 
const blogWrap = document.querySelector('.blog_wrap');
const blogItem = document.querySelectorAll('.blog_item');
const blogLeft = document.querySelector('.section_blog .left')
const blogRight = document.querySelector('.section_blog .right') 
const badgeWrap = document.querySelector('.badge_wrap');
const badgeItem = document.querySelectorAll('.badge_item');
const badgeLeft = document.querySelector('.section_badge .left');
const badgeRight = document.querySelector('.section_badge .right');
const featured_scroll = document.querySelectorAll('.section_featured .featured');
const featuredItem = document.querySelectorAll('.featured_item');
const featuredLeft = document.querySelector('.featured_title .left');
const featuredRight = document.querySelector('.featured_title .right');
navMove.addEventListener('change',function(){
    if(this.checked){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflowY = 'scroll';
        //safari的overflow會出問題
    }
})
// 高度偵測手機板用
// 表單顯示
window.addEventListener('resize',function(e){
    webWidth = this.document.body.clientWidth;
    screenWidth(webWidth);
})
//偵測大小
function screenWidth(value){
    if(value >= 1080){
        mainFooterH3.forEach(function(e){
            e.removeEventListener('click',()=>{})
        })
        navScroll();
    }else{
        footerChange(mainFooterH3,mainFooterUl);
    }
}
screenWidth(webWidth);

// 切換
changeHandler(featuredH3,featured);
function changeHandler(arr,arr2){
    arr.forEach((event,index)=>{
        event.addEventListener('click',function(e){
            arr2.forEach((e)=>{
                e.style.display = 'none';
            })
            arr2[index].style.display = 'block';
            arr2[index].style.display = 'flex';
        })
    })
}

// footer表單切換
function footerChange(arr,arr2){
    arr.forEach((e,index)=>{
        e.addEventListener('click',function(){
            let answer = arr2[index].style.display == 'block';
            console.log(answer);
            if(!answer){
                arr2[index].style.display = 'block';
            }else{
                arr2[index].style.display = 'none';
            }
        })
    })
}
scrollHandler(specialItem,specialWrap,specialLeft,specialRight,4,155);
scrollHandler(blogItem,blogWrap,blogLeft,blogRight,3,155);
scrollHandler(badgeItem,badgeWrap,badgeLeft,badgeRight,5)
scrollHandler(featuredItem,featured_scroll[0],featuredLeft,featuredRight,2)
scrollHandler(featuredItem,featured_scroll[1],featuredLeft,featuredRight,2)
scrollHandler(featuredItem,featured_scroll[2],featuredLeft,featuredRight,2)
function scrollHandler(arr,event,left,right,number,reduce = 0){
    let scrollIndex = 0;
    let scroll = [];
    arr.forEach(function(e){
        scroll.push(e.offsetLeft - reduce);
    })
    left.addEventListener('click',function(){
        if(scrollIndex > 0){
            scrollIndex -= 1;
        }else{
            scrollIndex =  arr.length - arr.length % number - 1;
        }
        event.scrollLeft = scroll[scrollIndex];
        console.log(scrollIndex);
    })
    right.addEventListener('click',function(){ 
        if(scrollIndex <= arr.length - arr.length % number -2){
            scrollIndex += 1;
        }else{
            scrollIndex = 0;
        }
        event.scrollLeft = scroll[scrollIndex];
        console.log(event.scrollLeft);
        console.log(scroll[scrollIndex]);
    })
}


// 縮小後nav要fixed
// mb版左右移動會出問題