// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true,
// });




function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();

  function navbarAnimation() {
    gsap.to(".nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to(".nav-part2 .links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()
function videoAnimation(){
    let videocon = document.querySelector(".video-container")
    let cursor = document.querySelector(".play")
    videocon.addEventListener("mouseenter",function() {
        gsap.to(cursor, {
            opacity: 1,
            scale: 1
        })
    
    })
    videocon.addEventListener("mouseleave",function() {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0
        })
    })
    document.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            left: dets.x - 70,
            top: dets.y - 80,
        })
    })
}
videoAnimation()

function loadingAnimation(){
    gsap.from(".page1 h1", {
        y: 100,
        opacity : 0,
        delay: 0.5,
        stagger: 0.2,
        // scrub : 2
    })
    gsap.from(".page1 .video-container", {
        scale: 0.8,
        opacity : 0,
        delay: 1,
        duration: 0.5 
    })
}
loadingAnimation()

document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor", {
        left: dets.x  ,
        top: dets.y ,
        
    })  
})


function cursorAnimation(){
    let page3 = document.querySelector(".page3")
let cursor = document.querySelector(".cursor")
document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    // console.log("hiii")
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
});
}
cursorAnimation()





























