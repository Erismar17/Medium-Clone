import './style.css';
import logo from '../img/logo.webp';
import lupa from '../img/lupa.png';
import write from '../img/editar.png';
import campana from '../img/campana.png';
import user from '../img/perfil.jpg';

const NavBar = () => {
    return (
        <header>
            <img class="logo" src={logo} alt="Logo" />
            <div class="busqueda">
                <img class="lupa" src={lupa} alt="Lupa" />
                <input class="inputBusqueda" type="text" placeholder="Search" />
            </div>

            <div class="escribir">
                <img class="writepng" src={write} alt="Escribir" />
                <h5 class="write">Write</h5>
            </div>

            <img class="campana" src={campana} alt="Campana" />
            <img class="user" src={user} alt="User" />
        </header>
    )
};

export default NavBar;