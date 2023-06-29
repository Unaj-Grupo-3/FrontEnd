
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar%20in%20varela&key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU

const HeaderDates = () => {

        return  `
        <section class="headerDates">
            <div class="headerDate__content">
                <img id="main__dates_logo" src="../img/globo-blanco.png" alt="logo">

                <h4>Citas</h4>
                </div>

                <div class="headerDate__button">
                    <button id="filter_accepted">Aceptadas</button>
                    <button id="filter_rejected">Rechazadas</button>
                    <button id="filter_pending">Pendientes</button>
                    <button id="filter_add">Nueva Cita</button>
                </div>
                
            </section>
            `
    }
    
export default HeaderDates;
//            <hr class="line">