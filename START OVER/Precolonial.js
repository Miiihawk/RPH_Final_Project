function qs(selector, all = false){
    return all ? document.querySelectorAll(selector):document.querySelector(selector)
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;

let prevScrollY = window.scrollY;
let up, down;
let full= false;
let set = 0;
const targetY = window.innerHeight*0.8;

function scrollHandler(e){
    const{
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    console.log(dist);

    if (down && !full){
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full){
        full = true;
        line.style.bottom = `-50px`
    }

    sections.forEach(item => {
        //console.log(items);
        const rect = item.getBoundingClientRect();

        if(rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me')
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll',scrollHandler)



//blur effect


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');


}


function toggle1(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup2');
    popup1.classList.toggle('active');


}

function toggle2(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup3');
    popup1.classList.toggle('active');


}

function toggle3(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup4');
    popup1.classList.toggle('active');


}

function toggle4(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup5');
    popup1.classList.toggle('active');


}


//street view

function initStreetView() {
    var locations = {
        'magellan-street-view': "https://www.google.com/maps/embed?pb=!4v1733046761859!6m8!1m7!1sCAoSLEFGMVFpcE4wdWJNUnlGd21DVDhwWk4tTmxUTjRKS0o5MVhfOVdKb29kdmlI!2m2!1d10.29361917590339!2d123.9019774690554!3f230.53715619367426!4f36.05996411685145!5f0.5970117501821992",
        'missionary-street-view': "https://www.google.com/maps/embed?pb=!4v1733052920156!6m8!1m7!1sCAoSLEFGMVFpcE4xUjJ3Wjc3THZ1VmVDUkgzNWNrcGhxdzV3blNyNVdGcllHOGlz!2m2!1d10.29425119209786!2d123.9023927678782!3f284.55!4f16.379999999999995!5f0.7820865974627469",
        'katipunan-street-view': "https://www.google.com/maps/embed?pb=!4v1733053060150!6m8!1m7!1sCAoSLEFGMVFpcE4xMkM2ZUtfMHhaSHBUOU41R29BMlNsU2c3RkNJT0Nfb05ydUh1!2m2!1d14.59090864983832!2d120.9809407586723!3f72.68311482157955!4f13.078363283057712!5f1.8307434606067732",
        'independence-street-view': "https://www.google.com/maps/embed?pb=!4v1733053150076!6m8!1m7!1sCAoSLEFGMVFpcE9kc2g4NG5vTGJwME5xNlNobkYybnFFNG02QzQwRW5QMWJLdVNj!2m2!1d14.44563922035453!2d120.9067944978898!3f153.64958119839903!4f10.62615223835698!5f0.7820865974627469"
    };

    for (var id in locations) {
        var element = document.getElementById(id);
        if (element) {
            element.innerHTML = `<iframe 
                src="${locations[id]}" 
                width="100%" 
                height="434" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>`;
        }
    }
}

window.onload = initStreetView;
