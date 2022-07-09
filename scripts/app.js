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
