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

function toggle5(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup6');
    popup1.classList.toggle('active');


}

function toggle6(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup7');
    popup1.classList.toggle('active');


}

function toggle7(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup8');
    popup1.classList.toggle('active');


}

function toggle8(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup9');
    popup1.classList.toggle('active');


}

function toggle9(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup10');
    popup1.classList.toggle('active');


}

function toggle10(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup11');
    popup1.classList.toggle('active');


}

function toggle11(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup12');
    popup1.classList.toggle('active');


}

function toggle12(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup13');
    popup1.classList.toggle('active');


}

function toggle13(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup14');
    popup1.classList.toggle('active');


}


//street view

function initStreetView() {
    var locations = {
        'york-street-view': "https://www.google.com/maps/embed?pb=!4v1733059932156!6m8!1m7!1sCAoSLEFGMVFpcFBCbU9CWUQxbVdjVmhYU0xYQ01wUXI5WG9kRnJZYndveEZIcEZ4!2m2!1d48.85637278786128!2d2.297446672150753!3f356.39383386730657!4f10.559365534219523!5f0.7820865974627469",
        'commonwealth-street-view': "https://www.google.com/maps/embed?pb=!4v1733060859890!6m8!1m7!1sScl9HuPgDOohVVEqoFAe-Q!2m2!1d14.58718698399366!2d120.9805500392237!3f108.48561177327278!4f9.830235273417387!5f1.4484982567963582",
        'bataan-street-view': "https://www.google.com/maps/embed?pb=!4v1733060911855!6m8!1m7!1skaW7eURcA8gNYz-MxeF7lQ!2m2!1d15.31559188037152!2d120.5810192532453!3f301.98343312898027!4f4.313842037320086!5f2.793374159902406",
        'independence-street-view': "https://www.google.com/maps/embed?pb=!4v1733060980648!6m8!1m7!1svAGbC6liPMrjzoW6q3EsoA!2m2!1d14.58023625361696!2d120.9742684211927!3f245.20863261005755!4f3.766963233990353!5f0.7820865974627469"
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
