(() => {
  console.log("IIFE Fired");
  
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const content = document.querySelectorAll(".HotspotAnnotation");

  let info = [
    {
      parts: 'Dynamic drivers',
      description: '6mm dynamic drivers provide consistently great audio',
      img: '../images/earbuds_driver.jpg'
    },

    {
      parts: 'Metal handle',
      description: 'non-slip metal handle'
    },

    {
      parts: 'High capacity battery',
      description: '8-hour non-stop playtime for each earbud'
    }
  ];

  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
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

  
  model.addEventListener("load", () => {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
    fillContent();
  });
  


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

})();

