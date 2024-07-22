import React from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Counter from "./pages/Counter";
import Skill from "./pages/Skill";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home";
import GallerySingle from "./pages/Gallery/GallerySingle";
import MasterHeader from "./components/MasterHeader";
import Footer from "./components/Footer";
import Clients from "./pages/Clients";
import Team from "./pages/Team";
import Services from "./pages/Services";
import About from "./pages/About";
import Maconnerie from "./pages/Maconnerie";
import Charpente from "./pages/Charpente";
import Piscine from "./pages/Piscine";
import {Tab} from "@mui/material";
import TaillePierre from "./pages/TaillePierre";

function App() {
    /*Declaration d'une' constante pour les key des composants*/
    const routs = [
        {path: '/', element: <Home/>},
        // {path: '/services', element: <Services/>},
        {path: '/maconnerie', element: <Maconnerie/>},
        {path: '/charpente', element: <Charpente/>},
        {path: '/taillepierre', element: <TaillePierre/>},
        {path: '/piscine', element: <Piscine/>},
        {path: '/counter', element: <Counter/>},
        {path: '/apropos', element: <About/>},
        {path: '/galerie', element: <Gallery/>},
        {path: '/detail/:id', element: <GallerySingle/>},
        {path: '/team', element: <Team/>},
        {path: '/skill', element: <Skill/>},

    ];

    return (

        <BrowserRouter>
            <MasterHeader/>
            <div id="page-top">
                {/*LINK fournit le lien vers le composant*/}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">
                            <img src="/template/assets/img/logo_complet.png" alt="logo guillemot"/>
                            {/*<img src="/template/assets/img/navbar-logo.svg" alt="..."/>*/}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                {/*<li key={routs.id} className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>*/}
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/maconnerie">Maconnerie</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/charpente">Charpente, couverture</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/piscine">Piscine</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/taillepierre">Taille de pierre</Link></li>

                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/galerie">Galerie</Link></li>
                                {/*<li key={routs.id} className="nav-item"><Link className="nav-link" to="/counter">Counter</Link></li>*/}
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/apropos">A propos</Link></li>
                                {/*<li key={routs.id} className="nav-item"><Link className="nav-link" href="/team">Team</Link></li>*/}
                                {/*<li key={routs.id} className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*SWITCH fournit la route du composant*/}
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/maconnerie" element={<Maconnerie/>}/>
                        <Route path="/charpente" element={<Charpente/>}/>
                        <Route path="/taillepierre" element={<TaillePierre/>}/>
                        <Route path="/piscine" element={<Piscine/>}/>
                        <Route path="/skill" element={<Skill/>}/>
                        <Route path="/team" element={<Team/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/apropos" element={<About/>}/>

                        {/*<Route path="/counter" element={<Counter/>}/>*/}
                        <Route path="/about" element={<Skill inputMessage="Presentation CV"/>}/>
                        <Route path="/galerie" element={<Gallery/>}/>
                        <Route path="/detail/:id" element={<GallerySingle/>}/>
                    </Routes>
                </div>
            </div>
            {/*<Services/>*/}
            {/*<About/>*/}

            {/*<Team/>*/}
            <Clients/>
            <Footer/>
        </BrowserRouter>

        /*	{		<div>
         <About inputMessage="Bimbo le bozo" />
         PROPS : transmettre des proprietes au composant Counter
         <div className="mt-3 m-5">
         <Counter title="Arc en ciel" value={51} photo="images/aec.jpg" desc="aec"/>
         <Counter title="Eau mysterieuse" value={2} photo="images/eau.jpg" desc="eau mysterieuse"/>
         <Counter title="Test desc balise" value={3} photo="" desc="texte en cas de non affichage d'image"/>
         </div>
         </div>
         }*/
    );
}

export default App;
