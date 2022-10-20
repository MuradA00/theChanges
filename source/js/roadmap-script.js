const rocket = document.querySelector('.rm__container'),
      roadmapSection = document.querySelector('.rm'),
      scrollPercentage = roadmapSection.scrollTop;

const roadmapSectionObserver = new IntersectionObserver(function(roadmapEntries) {
  roadmapEntries.forEach(roadmapEntry => {
    window.addEventListener('scroll', () => {
      moveOnScroll();
      console.log(scrollPercentage);
    })
  })
})

const rocketPosition = rocket.offsetTop;

console.log(rocketPosition)

function moveOnScroll() {
  // rocket.style.transform = `translateX(${scrolledValueRoadmap}px)`
}

roadmapSectionObserver.observe(roadmapSection);
