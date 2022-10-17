const windowHeight = window.innerHeight,
      heroSection = document.querySelector('.hero'),
      header = document.querySelector('.header');

function setSpacing() {
  const headersHeight = header.clientHeight;
  heroSection.style.paddingTop = headersHeight + 'px';
}

setSpacing();

const fullHeight = () => {
  heroSection.style.minHeight = windowHeight + 'px';
}

// window.addEventListener('resize', fullHeight);
