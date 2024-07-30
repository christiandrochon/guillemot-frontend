import React, {Component} from 'react';
import {Typography} from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HeaderContext from "./../components/HeaderContext";
import {Link} from "react-router-dom";

class Home extends Component {

    static contextType = HeaderContext;

    // Donner les valeurs attendues dans le bandeau
    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        if (typeof updateHeaderDetails === 'function') {
            updateHeaderDetails('SARL GUILLEMOT Père et fils', 'Votre expert en construction et rénovation', `${process.env.PUBLIC_URL}//template/assets/img/mirror-construction-trowel-masonry-66761.jpg`);
        }
    }

    render() {
        const {titre, sousTitre, imgurl} = this.context;
        return (

            <section className="page-section bg-light">
                <div className="">
                    <div className="text-center pb-5">
                        <div className="masthead-heading">{titre}</div>
                        <div className="masthead-subheading text-uppercase">{sousTitre}</div>
                        <div className="masthead-img">{imgurl}</div>
                        {/*<h2 className="section-heading text-uppercase">SARL GUILLEMOT Père et fils</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Votre expert en construction et rénovation : maçonnerie, charpente, piscines et taille de*/}
                        {/*    pierre sur mesure.</h3>*/}


                        <div className="">
                            <Typography variant="h5" className="pb-5">SARL GUILLEMOT Père et fils est une entreprise familiale de maçonnerie qui oeuvre dans la
                                construction et la rénovation depuis cinq générations.
                                <br/>
                                Basée à Talais en Médoc, l'entreprise compte quatre ouvriers spécialisés dans divers domaines de la
                                construction.</Typography>

                            <h4>Spécialités de l'entreprise</h4>
                            <p className="pb-5">Travaux de maçonnerie <br/> Charpente et couverture <br/>Construction de piscines enterrées <br/>Taille de
                                pierre
                            </p>


                            <h4>Zone d'intervention</h4>
                            <p className="pb-5">L'entreprise intervient dans un rayon de <strong>50 kilomètres</strong> autour de Talais.</p>

                            <h4>Prestations offertes</h4>
                            <p className="pb-5"><strong>Neuf et rénovation : </strong> SARL GUILLEMOT Père et fils fournit des prestations aussi bien pour
                                les projets neufs que pour la rénovation.

                                <br/> <strong>Particuliers et entreprises : </strong> Elle travaille aussi bien pour le compte des particuliers que pour celui
                                des
                                entreprises.
                                <br/>
                                <strong>Conseils et devis : </strong> L'entreprise propose des conseils personnalisés, incluant des devis
                                gratuits et des études de marché.
                            </p>

                            <h4>Collaboration avec un réseau d'artisans</h4>
                            <p className="pb-5">GUILLEMOT Père et fils travaille en lien avec un <strong>réseau d'artisans qualifiés</strong>. <br/>Cette
                                collaboration permet d'organiser des réunions de chantier et de proposer rapidement des artisans pour les travaux qui ne
                                relèvent pas de nos compétences.</p>

                            <h4>Savoir-faire spécifique</h4>
                            <p>L'entreprise est particulièrement reconnue pour son savoir-faire dans le <strong>travail de la briquette sur les villas de
                                type
                                soulacaise.</strong></p>
                        </div>
                        <svg className="my-5"><DashboardRoundedIcon/></svg>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITME 1*/}
                            <div className="portfolio-item">
                                <Link to="/maconnerie" className="portfolio-link">
                                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/template/assets/img/0506aff5-461d-4dd7-a091-2c0b3340f32b-1600-1920w.webp`} alt="img 1"/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Maçonnerie</div>
                                    <div className="portfolio-caption-subheading text-muted">Chantier</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 2*/}
                            <div className="portfolio-item">
                                <Link to="/charpente" className="portfolio-link">
                                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/template/assets/img/1632832547-charpente-bois-min.avif`} alt="img 2"/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Charpente, couverture</div>
                                    <div className="portfolio-caption-subheading text-muted">Armature</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 3*/}
                            <div className="portfolio-item">
                                <Link to="/piscine" className="portfolio-link">
                                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/template/assets/img/infinity-pool-2396808_960_720.jpg`} alt="img 3"/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Piscine</div>
                                    <div className="portfolio-caption-subheading text-muted">Détente</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4 mb-lg-0">
                            {/*PORTFOLIO ITEM 4*/}
                            <div className="portfolio-item">
                                <Link to="/taillepierre" className="portfolio-link">
                                    <img className="img-fluid" src={`${process.env.PUBLIC_URL}/template/assets/img/tailleur-pierre.jpeg`} alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Tailleur de pierre</div>
                                    <div className="portfolio-caption-subheading text-muted">Sculpture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
