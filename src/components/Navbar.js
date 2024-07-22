// import React, {Component} from 'react';
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
// import Home from "../pages/Home";
// import Counter from "../pages/Counter";
// import About from "../pages/About";
// import Gallery from "../pages/Gallery/Gallery";
// import GallerySingle from "../pages/Gallery/GallerySingle";
//
// class Navbar extends Component {
//
//     const routs = [
//         {path: '/', element: <Home/>},
//         {path: '/counter', element: <Counter/>},
//         {path: '/about', element: <About/>},
//         {path: '/gallery', element: <Gallery/>},
//
//     ];
//     render() {
//         return (
//             <BrowserRouter>
//             <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
//                 <div class="container">
//                     <a class="navbar-brand" href="#page-top"><img src="/template/assets/img/navbar-logo.svg" alt="..." /></a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                         Menu
//                         <i class="fas fa-bars ms-1"></i>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
//                             <li key={routs.id}
//                                 className="nav-link"><Link to="/">Home</Link></li>
//                             <li key={routs.id}
//                                 className="nav-link"><Link to="/counter">Counter</Link></li>
//                             <li key={routs.id}
//                                 className="nav-link"><Link to="/about">About</Link></li>
//                             <li key={routs.id}
//                                 className="nav-link"><Link to="/gallery">Gallery</Link></li>
//
//                             {/*<li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>*/}
//                             {/*<li class="nav-item"><a class="nav-link" href="#about">About</a></li>*/}
//                             {/*<li class="nav-item"><a class="nav-link" href="#team">Team</a></li>*/}
//                             {/*<li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>*/}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//
//
//                 {/*LINK fournit le lien vers le composant*/}
//                 {/*<nav className="navbar navbar-expand navbar-brand m-2">*/}
//                 {/*    <ul className="navbar-nav">*/}
//                 {/*        <li key={routs.id}*/}
//                 {/*            className="nav-link"><Link to="/">Home</Link></li>*/}
//                 {/*        <li key={routs.id}*/}
//                 {/*            className="nav-link"><Link to="/counter">Counter</Link></li>*/}
//                 {/*        <li key={routs.id}*/}
//                 {/*            className="nav-link"><Link to="/about">About</Link></li>*/}
//                 {/*        <li key={routs.id}*/}
//                 {/*            className="nav-link"><Link to="/gallery">Gallery</Link></li>*/}
//                 {/*    </ul>*/}
//                 {/*</nav>*/}
//                 {/*SWITCH fournit la route du composant*/}
//                 <div className="container">
//                     <Routes>
//                         <Route exact path="/" element={<Home/>}/>
//                         <Route path="/counter" element={<Counter/>}/>
//                         <Route path="/about" element={<About inputMessage="Presentation CV"/>}/>
//                         <Route path="/gallery" element={<Gallery/>}/>
//                         <Route path="/detail/:id" element={<GallerySingle/>}/>
//                     </Routes>
//                     {/*<Routes>*/}
//                     {/*    <Route exact path="/" component={Home} />*/}
//                     {/*    	<Route path="/counter"><Counter /></Route>*/}
//                     {/*    /!*	<Route path="/music"><MusicPlayer /></Route>*!/*/}
//                     {/*    	<Route path="/about"><About inputMessage="Presentation CV" /></Route>*/}
//                     {/*    	<Route path="/gallery"><Gallery /></Route>*/}
//                     {/*    	<Route path="/detail/:id"*/}
//                     {/*    		   component={GallerySingle} />*/}
//                     {/*</Routes>*/}
//                 </div>
//             </BrowserRouter>
//
//             /*	{		<div>
//              <About inputMessage="Bimbo le bozo" />
//              PROPS : transmettre des proprietes au composant Counter
//              <div className="mt-3 m-5">
//              <Counter title="Arc en ciel" value={51} photo="images/aec.jpg" desc="aec"/>
//              <Counter title="Eau mysterieuse" value={2} photo="images/eau.jpg" desc="eau mysterieuse"/>
//              <Counter title="Test desc balise" value={3} photo="" desc="texte en cas de non affichage d'image"/>
//              </div>
//              </div>
//              }*/
//         );
//     }
// }
//
// export default Navbar;
