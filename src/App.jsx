
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import './app.css';
import Description from "./components/Description.jsx"; // Importa tus estilos aquí

function App() {
    return (
        <div className="container">
            <Description />
            <Header />
            <RegistrationForm />

        </div>
    );
}

export default App;