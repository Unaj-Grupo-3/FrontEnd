export const CarouselInner = (image, index) =>
`
    <div class="carousel-item ${index == 0? 'active': ''}">
        <img id="photo" src="${image}" class="d-block photo" alt="Foto_${index+1}">                                  
    </div>
`