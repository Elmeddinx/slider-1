let images = [
    {
        image   : 'img/01.jpg',
        number  : '1'
    },
    {
        image   : 'img/02.jpg',
        number  : '2'
    },
    {
        image   : 'img/03.jpg',
        number  : '3'
    },
    {
        image   : 'img/04.jpg',
        number  : '4'
    },
    {
        image   : 'img/05.jpg',
        number  : '5'
    },
    {
        image   : 'img/06.jpg',
        number  : '6'
    },
    {
        image   : 'img/07.jpg',
        number  : '7'
    }
];

index = 0;
index1 = index++;
let slayCount = images.length;
let settings = {
    duration : '2000',
    random   : false
}
init(settings);
init1(settings);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    index1--;
    showSlide(index);
    showSmallSlide(index+1);

    console.log(index1);
});
document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    index1++;
    showSlide(index);
    showSmallSlide(index+1);

    console.log(index1);
});

function init(settings){
    let prev; 
    setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slayCount);
            }while(index == prev)
            prev = index;
        }
        else{

        }
        showSlide(index);
    },settings.duration);
}
function init1(settings){
    let previ;
    setInterval(function(){
        if(settings.random){
            do{
                index1 = Math.floor(Math.random() * slayCount+1);
            }while(index1 == previ)
            previ = index;
        }
        console.log(index1);
        showSmallSlide(index1);
    },settings.duration);
}

function showSlide(i){

    index = i;

    if (i < 0) {
        index = slayCount - 1;
        index1 = slayCount - 1;
    }
    if (i >= slayCount){
        index = 0;
        index1 = 0;
    }


    document.querySelector('.big-slider').style.backgroundImage = `url(${images[index].image})`;
    document.querySelector('.slide-number-start').textContent = images[index].number;
}
function showSmallSlide(i){
    
    index1 = i;

    if (i < 0) {
        index1 = slayCount - 1;
    }
    if (i >= slayCount){
        index1 = 0;
    }

    document.querySelector('.next-small-slider').style.backgroundImage = `url(${images[index1].image})`;
}

