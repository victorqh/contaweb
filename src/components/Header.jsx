import logo from '../assets/contadorlogo.svg';

function Header() {
    return (
        <header className="Header">
            <img src={logo} alt="Logo de la Institución" />
        </header>
    );
}

export default Header;