// gsap.to(
//     "#box1",
//     {
//         duration: 3,
//         y: 320,
//         rotation: 360,
//         backgroundColor: "#5569daff",
//         borderRadius: "50%",
//         // scale:1.2,
//         ease: "bounce.out",
//     }
// )
// gsap.from(
//     "#box2",
//     {
//         duration: 3,
//         y: 300,
//         rotation: 360,
//         backgroundColor: "#152ba8ff",
//         borderRadius: "50%",
//         // ease: "bounce.out",
//     }
// )

// --------------------------------------------------------------------------------

// gsap.from("h1", {
//     // color: "blue",
//     duration: 1,
//     opacity: 0,
//     // y: -100,
//     stagger: 0.5,
//     // backgroundColor: "transparent",
// })

// gsap.to("#box", {
//     y: 200,
//     duration: 2,
//     delay:1,
//     rotate: 360,
//     repeat: -1,
//     ease: "bounce.inout",
//     yoyo: true,
// })

const tl = gsap.timeline();

// tl.to("#box1", {
//   y: 200,
//   duration: 1,
//   rotate: 360,
//   backgroundColor: "purple",
//   borderRadius: "50%",
//   ease: "bounce.out",
//   yoyo: true,
//   repeat: 1,
// })
//   .to("#box2", {
//     y: 200,
//     duration: 1,
//     rotate: 360,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     ease: "bounce.out",
//     yoyo: true,
//     repeat: 1,
//   })
//   .to("#box3", {
//     y: 200,
//     duration: 1,
//     rotate: 360,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     ease: "bounce.out",
//     yoyo: true,
//     repeat: 1,
//   });


//   tl.from("h2", {
//     opacity: 0,
//     y: -20,
//     duration: 1,
//   })

//   tl.from("h4", {
//     opacity: 0,
//     y: -20,
//     duration: 1,
//     stagger: 0.3,
//   })

//   tl.from("#title", {
//     opacity: 0,
//     duration: 1,
//     scale: 0.5,
//     ease: "back.out(1.7)",
//   })