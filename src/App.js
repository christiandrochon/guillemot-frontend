import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home";
import GallerySingle from "./components/Gallery/GallerySingle";
import MusicPlayer from "./components/Music/MusicPlayer";

function App() {
    /*Declaration d'une' constante pour les key des composants*/
    const routs = [
        {path: '/', element: <Home/>},
        {path: '/counter', element: <Counter/>},
        /*		{path: '/music', element: <MusicPlayer />},*/
        {path: '/about', element: <About/>},
        {path: '/gallery', element: <Gallery/>},

    ];

    return (

        <BrowserRouter>
            {/*LINK fournit le lien vers le composant*/}
            <nav className="navbar navbar-expand navbar-brand m-2">
                <ul className="navbar-nav">
                    <li key={routs.id}
                        className="nav-link"><Link to="/">Home</Link></li>
                    <li key={routs.id}
                        className="nav-link"><Link to="/counter">Counter</Link></li>
                    	<li key={routs.id}
						className="nav-link"><Link to="/music">Music</Link></li>
                    <li key={routs.id}
                        className="nav-link"><Link to="/about">About</Link></li>
                    <li key={routs.id}
                        className="nav-link"><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
            {/*SWITCH fournit la route du composant*/}
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/musicplayer" element={<MusicPlayer/>}/>
                    <Route path="/about" element={<About inputMessage="Presentation CV"/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/detail/:id" element={<GallerySingle/>}/>
                </Routes>
                {/*<Routes>*/}
                {/*    <Route exact path="/" component={Home} />*/}
                {/*    	<Route path="/counter"><Counter /></Route>*/}
                {/*    /!*	<Route path="/music"><MusicPlayer /></Route>*!/*/}
                {/*    	<Route path="/about"><About inputMessage="Presentation CV" /></Route>*/}
                {/*    	<Route path="/gallery"><Gallery /></Route>*/}
                {/*    	<Route path="/detail/:id"*/}
                {/*    		   component={GallerySingle} />*/}
                {/*</Routes>*/}
            </div>
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
