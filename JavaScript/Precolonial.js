function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;

let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
    const {
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

    const dist = targetY - timelineRect.top
    console.log(dist);

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`
    }

    sections.forEach(item => {
        //console.log(items);
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me')
        }
    });

    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler)


//blur effect


function toggle(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');
}

function toggle1(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup2');
    popup1.classList.toggle('active');
}

function toggle2(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup3');
    popup1.classList.toggle('active');
}

function toggle3(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup4');
    popup1.classList.toggle('active');
}

function toggle4(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup1 = document.getElementById('popup5');
    popup1.classList.toggle('active');
}


