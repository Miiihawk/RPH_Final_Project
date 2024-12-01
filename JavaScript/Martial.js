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


function toggle(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');


}


function toggle1(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup2');
    popup1.classList.toggle('active');


}

function toggle2(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup3');
    popup1.classList.toggle('active');


}

function toggle3(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup4');
    popup1.classList.toggle('active');


}

function toggle4(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup5');
    popup1.classList.toggle('active');


}

function toggle5(event){
    event.preventDefault();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup6');
    popup1.classList.toggle('active');


}

//street view

function initStreetView() {
    var locations = {
        'martiallaw-street-view': "https://www.google.com/maps/embed?pb=!4v1733063757159!6m8!1m7!1soksbFQ3WyBU2-A0MwFzbEg!2m2!1d14.5946120443024!2d120.9946507655612!3f41.18042486308028!4f-1.9913831498525383!5f0.7820865974627469",
        'naia-street-view': "https://www.google.com/maps/embed?pb=!4v1733070465305!6m8!1m7!1sZIxiaNDVzhsYQQR8itUUcQ!2m2!1d14.50666217216884!2d121.0042711838035!3f164.61141352035963!4f14.74701463792232!5f0.7820865974627469",
        'martiallaw-street-view2': "https://www.google.com/maps/embed?pb=!4v1733063757159!6m8!1m7!1soksbFQ3WyBU2-A0MwFzbEg!2m2!1d14.5946120443024!2d120.9946507655612!3f41.18042486308028!4f-1.9913831498525383!5f0.7820865974627469",
        'edsa-street-view': "https://www.google.com/maps/embed?pb=!4v1733070711577!6m8!1m7!1saQTZFe60FgwnnALyZ_eIBw!2m2!1d14.59276326044922!2d121.0586992674398!3f131.12695920735774!4f15.241990600968037!5f0.7820865974627469"
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
