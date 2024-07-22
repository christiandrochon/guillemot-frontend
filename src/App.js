import React from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Counter from "./pages/Counter";
import About from "./pages/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home";
import GallerySingle from "./pages/Gallery/GallerySingle";
import MasterHeader from "./components/MasterHeader";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Services from "./components/Services";

function App() {
    /*Declaration d'une' constante pour les key des composants*/
    const routs = [
        {path: '/', element: <Home/>},
        {path: '/counter', element: <Counter/>},
        {path: '/about', element: <About/>},
        {path: '/gallery', element: <Gallery/>},

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
                                {/*<li key={routs.id}*/}
                                {/*    className="nav-item"><Link to="/">Home</Link></li>*/}
                                {/*<li key={routs.id}*/}
                                {/*    className="nav-link"><Link to="/counter">Counter</Link></li>*/}
                                {/*<li key={routs.id}*/}
                                {/*    className="nav-link"><Link to="/about">About</Link></li>*/}
                                {/*<li key={routs.id}*/}
                                {/*    className="nav-link"><Link to="/gallery">Gallery</Link></li>*/}
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/gallery">Galerie</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/counter">Counter</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li key={routs.id} className="nav-item"><Link className="nav-link" href="/team">Team</Link></li>
                                {/*<li key={routs.id} className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>*/}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*SWITCH fournit la route du composant*/}
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/about" element={<About inputMessage="Presentation CV"/>}/>
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path="/detail/:id" element={<GallerySingle/>}/>
                    </Routes>
                </div>
            </div>
            <Services/>
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
