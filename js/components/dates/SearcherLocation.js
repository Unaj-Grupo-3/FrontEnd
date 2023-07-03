export const SearcherLocation = () => {
    const today = new Date();

    const formatDate = today.toISOString().slice(0, 16);
    
    return`
    <br>
    <section id="filter-dates" class="container-fluid filterDetail">
        <div class="add-date-title" id="title-new-date">
        </div>
        <div class="inputContainer flex-center">              
                <div class="input-dates-conteiner">
                    <h4>Lugar</h4>
                    <input class="dates" type="text" id="inputText" required>
                </div>
                <div class="error">
                    <p id="errorTipoLugar"></p>
                </div>             
        </div>
        <div class="inputContainer flex-center">
            <div class="input-dates-conteiner">
                <h4>Localidad</h4>
                <input class="dates" type="text" id="inputLocalidad" required>
            </div>
            <div class="error">
                <p id="errorLocalidad"></p>
            </div>
        </div>
        <div class="inputContainer  flex-center">
            <div class="input-dates-container">
              <h4>Fecha</h4>
              <input value=${formatDate} type="datetime-local" id="inputFecha" class="input-fecha" required>
            </div>
            <p id="errorFecha"></p>
        </div>
        <div class="inputContainer">
            <div class="button-container flex-center">
                <button class="" id="btn-new-date">Buscar</button>
            </div>
        </div>
    </section>
    <h5 class="errorsNewDate" id="errorsNewDate"></h5>
    <section id="main__dates">
        <div class="row map-container">
            <div class="map-column col-xl-4 col-lg-12">
                <h4 class="dateDetail__contentTitle" id="map-title"></h4><br>
                <div id="map" class="map flex-center col-md-6 col-sm-12">
                    <!-- map.js -->
                </div>
            </div>
            <div class="map-options col-xl-8 col-lg-12">                    
                <div id="result-dates-container">

                </div>
            </div>  
        </div>               
    </section>    
    <button id="btn-confirm-date" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#modalDateConfirm" hidden>Confirmar</button>
    `

}