const windowHeight = window.innerHeight,
      heroSection = document.querySelector('.hero'),
      header = document.querySelector('.header'),
      saturnImage = document.querySelector('.hero__jupiter'),
      guideSection = document.querySelector('.guide'),
      marsPlanet = document.querySelector('.hero__mars'),
      earthPlanet = document.querySelector('.hero__earth')
      planetRowImages = document.querySelectorAll('.planet-row__image'),
      planetSection = document.querySelector('.planet');
      let scrollPosition = window.pageYOffset;

let planetSectionMargin = getComputedStyle(planetSection).marginTop;

const scrollOptions = {
  rootMargin: `-${planetSectionMargin} 0px 0px 0px`,
  threshold: .4
}

const scrollObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    planetRowImages.forEach(planet => {
      if (entry.isIntersecting) {
        planet.classList.add('_activeImage')
        marsPlanet.classList.add('vanishedPlanet')
        earthPlanet.classList.add('vanishedPlanet')
      } else if (!entry.isIntersecting) {
        planet.classList.remove('_activeImage')
      }
    })

  })
}, scrollOptions)

scrollObserver.observe(planetSection);



function changeOnScroll() {
  let scrollPosition = window.pageYOffset;
  if (scrollPosition > 0) {
    marsPlanet.style.transform = `translateY(${scrollPosition}px)`
    earthPlanet.style.transform = `translateY(${scrollPosition * 1.7}px)`
  }
}



function setSpacing() {
  const headersHeight = header.clientHeight;
  heroSection.style.paddingTop = headersHeight + 'px';
}

window.addEventListener('scroll', () => {
  changeOnScroll();
  console.log(planetSectionMargin)
});


setSpacing();

const fullHeight = () => {
  heroSection.style.minHeight = windowHeight + 'px';
}

// window.addEventListener('resize', fullHeight);
