const refs = {
    townLink:document.querySelector('#town'),
    loveLink:document.querySelector('#love'),
    birdLink:document.querySelector('#bird'),
    dogLink:document.querySelector('#dog'),

    townSection:document.querySelector('.section-1'),
    loveSection:document.querySelector('.section-2'),
    birdSection:document.querySelector('.section-3'),
    dogSection:document.querySelector('.section-4'),

    btnUp:document.querySelector('#up')
}


// refs.townLink.addEventListener('click', function (e) {
//     window.scrollTo(0,refs.townSection.clientHeight)
// });

// refs.loveLink.addEventListener('click', function (e) {
//     window.scrollTo(0,refs.loveSection.clientHeight)
// });

// refs.birdLink.addEventListener('click', function (e) {
//     window.scrollTo(0,refs.birdSection.clientHeight)
// });

// refs.dogLink.addEventListener('click', function (e) {
//     window.scrollTo(0,refs.dogSection.clientHeight)
// });


window.addEventListener('scroll', function (e) {
   if(this.window.scrollY > 500){
    refs.btnUp.classList.add('is-visible')
   } else {
    refs.btnUp.classList.remove('is-visible')
   }
});

refs.btnUp.addEventListener('click', function (e) {
    window.scrollTo(0,0)
});