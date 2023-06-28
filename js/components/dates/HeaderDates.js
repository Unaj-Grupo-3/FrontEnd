
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar%20in%20varela&key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU

const HeaderDates = () => {

        return  `
        <section class="headerDates">
            <div class="headerDate__content">
                <img id="main__dates_logo" src="../img/globo-blanco.png" alt="logo">

                <h4>Citas</h4>
                </div>

                <div class="headerDate__button">
                    <button id="headerDate__button">Aceptadas</button>
                    <button id="headerDate__button">Rechazadas</button>
                    <button id="headerDate__Status">Pendientes</button>
                    <button id="headerDate__addDate">Agregar Cita</button>
                </div>
                
            </section>
            `
    }
    
export default HeaderDates;
//            <hr class="line">
