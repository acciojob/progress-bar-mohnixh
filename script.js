const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle-child');

let activeIndex = 0;

nextBtn.addEventListener('click', function () {
    console.log('nxtClicked');
    
    if (activeIndex < circles.length) {
        circles[activeIndex].style.backgroundColor = 'black';
        prevBtn.disabled = false
        prevBtn.style.backgroundColor = ' rgba(186, 25, 25, 1)'

        if (activeIndex === circles.length - 1) {
            nextBtn.disabled = true;
            nextBtn.style.backgroundColor = 'rgba(186, 25, 25, 1)'
        }
        activeIndex++;
    }
});

prevBtn.addEventListener('click', function () {
    console.log('prvClicked');

    if (activeIndex > 0) {
        activeIndex--;
        circles[activeIndex].style.backgroundColor = 'gray';

        if (activeIndex < circles.length) {
            nextBtn.style.backgroundColor = '';
            nextBtn.disabled = false;
        }

        if(activeIndex === 0){
            prevBtn.disabled = true;
            prevBtn.style.backgroundColor = 'gray'
        }

    }
});