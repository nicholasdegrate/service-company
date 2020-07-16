//  hamburger nav
const hamburgerBtn = document.querySelector('#hamburger');
const navContainer = document.querySelector('.nav-links-wrapper');
const liLinks = document.querySelector('.nav-links-wrapper .nav-container');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', function() {
    navContainer.style.height = '100vh';
    navContainer.style.width = '100%';
    liLinks.style.display = 'block';
    body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', function() {
    navContainer.style.height = '0vh';
    navContainer.style.width = '100%';
    liLinks.style.display = 'none';
    body.style.overflowY = 'scroll';
});

// home.pug - join btn
const joinBtn = document.querySelector('.circle-join');
const joinPage = document.querySelector('#coming-soon');
const wrapper = document.querySelector('#main-wrapper');
const joinDiv = document.querySelector('#join-div');
const joinBtnText = document.querySelector('#coming-soon-container');
joinBtn.addEventListener('click', function() {
    joinPage.style.display = 'block';
    joinDiv.style.display = 'block';
    body.style.overflow = 'hidden';
    body.appendChild(joinPage);
    requestAnimationFrame(() => {
        setTimeout(() => {
            joinPage.style.height ='100vh';
            joinPage.style.width = '90%';
            joinDiv.style.height = '100vh';
        });
    });
});
// home.pug - our mission 


// student.pug  - random displayed circle 
const area = document.querySelector('.student-header-content');
const backgroundColor = ['#639BD9','#183B8C', '#D59AA8','#639BD9','#183B8C', '#D59AA8','#639BD9','#183B8C', '#D59AA8','#639BD9','#183B8C', '#D59AA8','#639BD9','#183B8C', '#D59AA8',];
for (let i= 0; i < 20; i++) {
    // position the circle random in the container
    let left = Math.floor(Math.random() * 40) + 20;
    let top = Math.floor(Math.random() * 90) + 3;
    let div = document.createElement('div');

    div.setAttribute('class', `number${i}`);
    // add a css styling to each circle
    let css = {
        backgroundColor: backgroundColor[i],
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        transition: 'all .3s',
        opacity: '.6',
    };
    // assing the css to the div.style
    Object.assign(div.style, css);
    // appending it to area
    area.appendChild(div);
}

//fag Dropbox
