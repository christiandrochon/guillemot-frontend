import React, {Component} from 'react';
import {Typography} from "@mui/material";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HeaderContext from "./../components/HeaderContext";

class Home extends Component {

    static contextType = HeaderContext;

    // Donner les valeurs attendues dans le bandeau
    componentDidMount() {
        const {updateHeaderDetails} = this.context;
        updateHeaderDetails('SARL GUILLEMOT Père et fils', 'Votre expert en construction et rénovation');
    }

    render() {
        const {titre, sousTitre} = this.context;
        return (

            <section className="page-section bg-light">
                <div className="container">
                    <div className="text-center pb-5">
                        <div className="masthead-heading">{titre}</div>
                        <div className="masthead-subheading text-uppercase">{sousTitre}</div>
                        {/*<h2 className="section-heading text-uppercase">SARL GUILLEMOT Père et fils</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Votre expert en construction et rénovation : maçonnerie, charpente, piscines et taille de*/}
                        {/*    pierre sur mesure.</h3>*/}


                        <div className="container-marges-texte">
                            <Typography variant="h5" className="pb-5">SARL GUILLEMOT Père et fils est une entreprise familiale qui se perpétue de père en fils
                                depuis cinq générations.
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
                                les
                                projets neufs que pour la rénovation.

                                <br/> <strong>Particuliers et entreprises : </strong> Nous travaillons avec les particuliers ainsi qu'avec les
                                entreprises.
                                <br/>
                                <strong>Conseils et devis : </strong> L'entreprise propose des conseils personnalisés, incluant des devis
                                gratuits et des études de marché.
                            </p>

                            <h4>Collaboration avec un réseau d'artisans</h4>
                            <p className="pb-5">GUILLEMOT Père et fils travaille en lien avec un <strong>réseau d'artisans qualifiés</strong>. <br/>Cette
                                collaboration permet d'organiser des réunions de chantier et de proposer rapidement des artisans pour les travaux qui ne
                                relèvent pas de nos
                                compétences.</p>

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
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <img className="img-fluid" src="/template/assets/img/istockphoto-677739506-1024x1024.jpg" alt="img 1"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Maconnerie</div>
                                    <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 2*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <img className="img-fluid" src="/template/assets/img/istockphoto-1566979286-1024x1024.jpg" alt="img 2"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Charpente, couverture</div>
                                    <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 3*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <img className="img-fluid" src="/template/assets/img/infinity-pool-2396808_960_720.jpg" alt="img 3"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Piscine</div>
                                    <div className="portfolio-caption-subheading text-muted">Identity</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4 mb-lg-0">
                            {/*PORTFOLIO ITEM 4*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <img className="img-fluid" src="/template/assets/img/statues-273745_960_720.jpg" alt="..."/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Tailleur de pierre</div>
                                    <div className="portfolio-caption-subheading text-muted">Branding</div>
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
