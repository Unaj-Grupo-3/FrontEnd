
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar%20in%20varela&key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU

const SearcherLocation = () => {

        return  `
        <section id="filter-dates" class="container-fluid filterDetail">
            <div class="">
                <h4 class="dateDetail__contentTitle">Agregar cita</h4>
            </div>
            <div class="inputContainer flex-center">              
                <div class="input-dates-conteiner">
                    <h4>Tipo de lugar</h4>
                    <input class="dates" type="text" id="inputText" required>
                </div>
                <div class="error">
                    <p id="errorName"></p>
                </div>             
            </div>

            <div class="inputContainer flex-center">
                <div class="input-dates-conteiner">
                    <h4>Localidad</h4>
                    <input class="dates" type="text" id="inputLocalidad" required>
                </div>
                <div class="error">
                    <p id="errorName"></p>
                </div>
            </div>

            <div class="inputContainer">
                <div class="button-container flex-center">
                    <button class="" id="btn-new-date">Buscar</button>
                </div>
            </div>
            
        </section>
        <section id="main__dates">
            <div class="row map-container">
                <div class="map-options col-md-6 col-sm-12">                    
                    <div id="result-dates-container">
    
                    </div>
                </div>
                <div class="map-column col-md-6 col-sm-12">
                    <h4 class="dateDetail__contentTitle" id="map-title"></h4><br>
                    <div id="map" class="map flex-center col-md-6 col-sm-12">
                        <!-- map.js -->
                    </div>
                </div>
            </div>               
        </section>

            `
    }
    
export default SearcherLocation;
