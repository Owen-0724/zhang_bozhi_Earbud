(() => {
  console.log("IIFE Fired");
  
  const hotspots = document.querySelectorAll("Hotspot");
  console.log(hotspots);

  function showInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 1});
  }

  function hideInfo() {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 0});
  }


  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover",showInfo);
    hotspot.addEventListener("mouseout",hideInfo);
  });


})();