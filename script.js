// Auto-play looped video (no buttons needed)
const loopVid = document.querySelector("#featureLocalVideo, .clean-video");

if (loopVid) {
  loopVid.muted = true;
  loopVid.loop = true;

  // Try to autoplay (works on all modern browsers if muted)
  loopVid.play().catch(() => {
    console.log("Autoplay blocked — but will start once user scrolls.");
  });

  // Start playing when section scrolls into view
  const observerLoop = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loopVid.play().catch(()=>{});
      }
    });
  }, { threshold: 0.3 });

  observerLoop.observe(loopVid);
}

// circle section
document.querySelectorAll(".metric-item").forEach(item => {
  let value = item.getAttribute("data-value");
  let color = item.getAttribute("data-color");

  let circle = item.querySelector(".progress");
  circle.style.stroke = color;

  let offset = 345 - (345 * value) / 100;
  circle.style.strokeDashoffset = offset;
});

// 9thsection

const reveals = document.querySelectorAll(".ai-boost-section");

function revealOnScroll() {
  reveals.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
