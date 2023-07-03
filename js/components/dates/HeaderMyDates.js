const HeaderMyDates = () => {


    return`<div class="headerDate__content">
                <h4 class="dateDetail__contentTitle">Mis Citas</h4><br>
                <button id="" class="filter_all"><i class="bi bi-filter"></i><p>Todas</p></button>
                <button id="1" class="filter_accepted"><i class="bi bi-filter"></i><p>Aceptadas</p></button>
                <button id="-1" class="filter_rejected"><i class="bi bi-filter"></i><p>Rechazadas</p></button>
                <button id="0" class="filter_pending"><i class="bi bi-filter"></i><p>Pendientes</p></button>
            </div>`
}

export default HeaderMyDates;