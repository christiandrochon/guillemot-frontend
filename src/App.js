import React, {useState} from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MasterHeader from "./components/MasterHeader";
import Footer from "./components/Footer";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import About from "./pages/About";
import Maconnerie from "./pages/Maconnerie";
import Charpente from "./pages/Charpente";
import Piscine from "./pages/Piscine";
import TaillePierre from "./pages/TaillePierre";
import Contact from "./pages/Contact";

function App() {

    /*Declaration d'une' constante pour les key des composants*/
    const routs = [
        {path: '/', element: <Home/>},
        {path: '/maconnerie', element: <Maconnerie/>},
        {path: '/charpente', element: <Charpente/>},
        {path: '/taillepierre', element: <TaillePierre/>},
        {path: '/piscine', element: <Piscine/>},
        // {path: '/apropos', element: <About/>},
        // {path: '/team', element: <Team/>},
        {path: '/contact', element: <Contact/>},

    ];

    return (

        <BrowserRouter>
            <MasterHeader/>
            <div id="page-top">
                {/*LINK fournit le lien vers le composant*/}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">
                            {/*<img src="/template/assets/img/png-clipart-logo-handicraft-graphics-artisan.png" alt="logo guillemot"/>*/}
                            {/*<img src="/template/assets/img/navbar-logo.svg" alt="..."/>*/}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                                                                 to="/">Accueil</NavLink></li>
                            <li key={routs.id}
                                className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                                              to="/maconnerie">Maconnerie</NavLink></li>
                            <li key={routs.id}
                                className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/charpente">Charpente,
                                couverture</NavLink></li>
                            <li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                                                             to="/piscine">Piscine</NavLink></li>
                            <li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                                                             to="/taillepierre">Taille de pierre</NavLink></li>

                            {/*<li key={routs.id} className="nav-item"><Link className="nav-link" to="/galerie">Galerie</Link></li>*/}
                            {/*<li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}*/}
                            {/*                                                 to="/apropos">A propos</NavLink></li>*/}
                            {/*<li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}*/}
                            {/*                                                 to="/team">Team</NavLink></li>*/}
                            <li key={routs.id} className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                                                             to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
            </div>
        </nav>
{/*SWITCH fournit la route du composant*/
}
    <div className="container">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/maconnerie" element={<Maconnerie/>}/>
            <Route path="/charpente" element={<Charpente/>}/>
            <Route path="/piscine" element={<Piscine/>}/>
            <Route path="/taillepierre" element={<TaillePierre/>}/>
            {/*<Route path="/apropos" element={<About/>}/>*/}
            {/*<Route path="/team" element={<Team/>}/>*/}
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
</div>
    <Clients/>
    <Footer/>
</BrowserRouter>
)
    ;
}

export default App;
