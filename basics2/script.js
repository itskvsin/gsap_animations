// gsap.from("#page1 #box", {
//     duration: 2,
//     opacity: 0,
//     ease: "power2.out",
//     scale: 0,
//     rotate: 360,
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })


// gsap.from("#page2 h1", {
//     opacity: 0,
//     duation: 2,
//     y: 200,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         start: "top 50%",
//         scroller: "body",
//         markers: true,

//     }
// })


// gsap.from("#page2 h2", {
//     opacity: 0,
//     duation: 2,
//     y: -200,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         start: "top 50%",
//         scroller: "body",
//         markers: true,

//     }
// })



// gsap.from("#page3 #box", {
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         markers: true,
//         scroller: "body",
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 2,
//         // pin: true,
//     }
// })


gsap.to("#page2 h1", {
    transform: "translate(-186%)",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 0%",
        end: "top -140%",
        markers: true,
        scroller: "body",
        scrub: 2,
        pin: true,
    }
})