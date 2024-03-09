var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".blur")
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x+1+"px";
    crsr.style.top = dets.y+1+"px";
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";

})

var h4all = document.querySelectorAll(".nav h4");

h4all.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid yellowgreen";
        crsr.style.backgroundColor = "transparent";
    })
    e.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid yellowgreen";
        crsr.style.backgroundColor = "yellowgreen";
    })
})

gsap.to(".nav", {
    backgroundColor:"black",
    duration: 0.5,
    height : "93px",
    scrollTrigger : {
        trigger: ".nav",
        scroller : "body",
        start: "top -10%",
        end: "top -10%",
        scrub: 1,
    }
})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller : "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
})

gsap.from(".about img, .about-us",{
    y:10,
    opacity: 0,
    duration: 0.5,

    scrollTrigger:{
        trigger:".about-us",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.9,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub:1
    }

})

gsap.from(".c1",{
    y: -50,
    x: -50,
    scrollTrigger:{
        trigger:".c1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub:4
    }
})

gsap.from(".c2",{
    y: 50,
    x: 50,
    scrollTrigger:{
        trigger:".c1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub:4
    }
})
gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger:{
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
    }
})
