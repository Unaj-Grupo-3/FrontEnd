export const RenderSuggestionDate = (name, formatted_address, photo, index) => {
    return  `
                <div class="row card-date" id="place_${index}">
                    <div class="col-lg-10 col-md-9">
                        <p><strong style="color: crimson;">${index + 1}</strong> - ${name} (${formatted_address})</p>
                    </div>
                    <div class="col-lg-2 col-md-3 div-photo-place">
                        <img class='photo-place' src='${photo}'>
                    </div>
                </div>
            `
};