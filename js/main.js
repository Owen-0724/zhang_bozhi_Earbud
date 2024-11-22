(() => {
  console.log("IIFE Fired");
  
  //hotspot

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const content = document.querySelectorAll(".HotspotAnnotation");

  let info = [
      {
          parts: "Dynamic drivers",
          description: "6mm dynamic drivers provide consistently great audio",
          img: "../images/earbuds_driver.jpg",
      },
      {
          parts: "Metal handle",
          description: "Non-slip metal handle",
          img: "../images/earbuds_driver.jpg",
      },
      {
          parts: "High capacity battery",
          description: "8-hour non-stop playtime for each earbud",
          img: "../images/earbuds_driver.jpg",
      },
  ];

  
  function modelLoaded() {
      hotspots.forEach((hotspot, index) => {
         
          hotspot.style.display = "block";

          gsap.fromTo(
              hotspot,
              { scale: 0, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, duration: 1, delay: index * 0.2 }
          );
      });
  }

  function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, { autoAlpha: 1, duration: 0.5 });

      gsap.to(this, { scale: 1.1, duration: 0.3 });
  }

  function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, { autoAlpha: 0, duration: 0.5 });

      gsap.to(this, { scale: 1, duration: 0.3 });
  }

  function fillContent() {
      content.forEach((annotationDiv, index) => {
          annotationDiv.innerHTML = "";
        
          let infoParts = document.createElement("h2");
          infoParts.textContent = info[index].parts;
          annotationDiv.appendChild(infoParts);

          let infoDescription = document.createElement("p");
          infoDescription.textContent = info[index].description;
          annotationDiv.appendChild(infoDescription);

          if (info[index].img) {
              let infoImg = document.createElement("img");
              infoImg.src = info[index].img;
              annotationDiv.appendChild(infoImg);
          }
      });
  }


  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
  });


  model.addEventListener("load", fillContent);
  


  //scroll

  const canvas = document.querySelector("#earbud_scroll");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 411;
    const images = [];
    const buds = {
        frame:0
    }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `images/earbud_scroll_${i.toString().padStart(5, '0')}.jpg`;
      images.push(img);
    }

    gsap.to(buds,{
        frame: 410,
        snap: "frame",
        scrollTrigger: {
            trigger: "#earbud_scroll",
            pin: true,
            scrub: 1,
            markers: true,
            start: "top top"
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render)

    function render(){
        context.clearRect(0,0, canvas.width, canvas.height);
        //console.log(images[buds.frame]);
        context.drawImage(images[buds.frame],0,0);
    }

    //x-ray

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor(){
        console.log(slider.value);
        divisor.style.width = slider.value+"%";
    }

    slider.addEventListener("input", moveDivisor);

    //scroll animation

    gsap.registerPlugin(ScrollTrigger);


    
    gsap.to("#box", 1,
      {scrollTrigger:{
          trigger: "#box",

          toggleActions: "restart resume reverse resume",
          markers: true,

          start: "top center",

          end: "bottom center"
      },
      x:400, ease:"power1.inOut"
      }
  )

})();

