export const CarouselIndicators = (index) =>
`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${index == 0? 'active': ''}" ${index == 0?'aria-current="true"': ''} aria-label="Slide ${index+1}"></button>
`