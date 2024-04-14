import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe BrowserRouter e Route
import Tela from './components/tela.jsx';
import Vagas from './components/vagas.jsx'; 
import Inscricoes from './components/inscricoes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Tela />} />
                    <Route path="/escolha-vagas/:cpf" element={<Vagas />} />
                    <Route path="/inscricoes/:cpf" element={<Inscricoes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
