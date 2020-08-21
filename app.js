let posts = [
    {
        name    : 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. CURABITUR PLACERAT',
        image   : './img/01.jpg',
        look    : '350',
        comment : '15',
        share   : '22',
        link    : 'https://www.youtube.com/watch?v=AkULvwJRD6A'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et.',
        image   : './img/02.jpg',
        look    : '425',
        comment : '20',
        share   : '25',
        link    : 'https://www.youtube.com/watch?v=45Ontquians'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur.',
        image   : './img/03.jpg',
        look    : '275',
        comment : '10',
        share   : '17',
        link    : 'https://www.youtube.com/watch?v=aom0IXUcTcY'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna.',
        image   : './img/04.jpg',
        look    : '370',
        comment : '14',
        share   : '19',
        link    : 'https://www.youtube.com/watch?v=16mt0mTXF7g'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum.',
        image   : './img/05.jpg',
        look    : '310',
        comment : '14',
        share   : '16',
        link    : 'https://www.youtube.com/watch?v=SFAmD-UPQT4'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus.',
        image   : './img/06.jpg',
        look    : '489',
        comment : '23',
        share   : '27',
        link    : 'https://www.youtube.com/watch?v=yjfXTzzXBFk'
    },
    {
        name    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis.',
        image   : './img/07.jpg',
        look    : '267',
        comment : '11',
        share   : '18',
        link    : 'https://www.youtube.com/watch?v=yBHDgyFceSs&t=578s'
    }
];

let index = 0;
let slayder = posts.length;
let interval;
let settings = {
    duration : '2000',
    random   : false
};

init(settings);

document.querySelector('.left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
});

function init(settings){
    let prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
            index = Math.floor(Math.random() * slayder);
            }while(index==prev)
            prev = index;
        }else{
            if(slayder == index+0){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i){
    index = i;

    if(i<0){
        index = slayder - 1;
    }
    if(i>=slayder){
        index = 0;
    }



    document.querySelector('.texta').textContent = posts[index].name;
    document.querySelector('.texta').setAttribute('href',posts[index].link);
    document.querySelector('.look').textContent = posts[index].look;
    document.querySelector('.share').textContent = posts[index].share;
    document.querySelector('.comment').textContent = posts[index].comment;
    document.querySelector('.main-container').style.backgroundImage = `url(${posts[index].image})`;
}

