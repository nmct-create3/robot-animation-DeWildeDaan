let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyoEase: true,
})

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo('#Robot', {
        y: 2.5,
    }, {
        y: -2.5,
    }).to('#Shadow', {
        scale: 0.75,
    },
        '<',
    );

btnFast = document.querySelector(".js-fast");
btnNormal = document.querySelector(".js-normal");
btnSlow = document.querySelector(".js-slow");
btnPause = document.querySelector(".js-pause");

btnFast.onclick = () => tl.timeScale(5);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(0.5);
btnPause.onclick = () => tl.pause();

