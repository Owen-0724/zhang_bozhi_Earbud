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
  
})();

