function imgSlider(anything){
    document.querySelector('.starbucks').src= anything;
}
 function changeCircleColor(color){
        const circle= document.querySelector('.circle');
        circle.style.background = color;
        const button= document.querySelector('.button');
        button.style.background = color;
}
function changeTextColor(color){
    const star= document.querySelector('.star');
    star.style.text = color;
}

const icon =document.querySelector('.clicker');
const icon1 =document.querySelector('.clicker1');
const icon2 =document.querySelector('.clicker2');
const span=document.querySelector('span')

icon.addEventListener('click',()=>{
    span.style.color="#017143";
})
icon1.addEventListener('click',()=>{
    span.style.color="#eb7495";
})
icon2.addEventListener('click',()=>{
    span.style.color="#d752b1";
})
