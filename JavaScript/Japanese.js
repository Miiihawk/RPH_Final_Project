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



//street view

function initStreetView() {
    var locations = {
        'pearlharbor-street-view': "https://www.google.com/maps/embed?pb=!4v1733063331223!6m8!1m7!1sCAoSLEFGMVFpcE5jOTEtXzR4LUdET2k4R0ZPWWU5R0YyaDhibS1TVldTOTh1ZGVz!2m2!1d21.36771607000835!2d-157.9392016118046!3f269.77900323060345!4f-1.4373758905718432!5f0.7820865974627469",
        'mcarthur-street-view': "https://www.google.com/maps/embed?pb=!4v1733063428629!6m8!1m7!1sCAoSLEFGMVFpcFByMFkyRXZpLVdPYXh1aVNYLWtfZUppbjhyR2FIZl9BR1dGSU1u!2m2!1d11.17211882949852!2d125.012191241056!3f127.82898308283205!4f-4.046233651338497!5f0.4002360200620913",
        'independence-street-view': "https://www.google.com/maps/embed?pb=!4v1733060980648!6m8!1m7!1svAGbC6liPMrjzoW6q3EsoA!2m2!1d14.58023625361696!2d120.9742684211927!3f245.20863261005755!4f3.766963233990353!5f0.7820865974627469",
        'military-street-view': "https://www.google.com/maps/embed?pb=!4v1733063538327!6m8!1m7!1soQRs-uVPUwhbv4C8MJCmiA!2m2!1d14.82771421093781!2d120.2117289839122!3f183.82456142342443!4f-0.1835227984449972!5f0.40091302076849983",
        'martiallaw-street-view': "https://www.google.com/maps/embed?pb=!4v1733063757159!6m8!1m7!1soksbFQ3WyBU2-A0MwFzbEg!2m2!1d14.5946120443024!2d120.9946507655612!3f41.18042486308028!4f-1.9913831498525383!5f0.7820865974627469",
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
