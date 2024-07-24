import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";
import HeaderContext from "./../components/HeaderContext";

class Piscine extends Component {
    static contextType = HeaderContext;

    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        updateHeaderDetails('Piscine', 'Conception et réalisation de piscines enterrées sur mesure');
    }

    render() {
        const {titre, sousTitre} = this.context;
        return (
            <section className="page-section bg-light">
                <div className="container">
                    <div className="text-center">
                        <div className="masthead-heading text-uppercase">{titre}</div>
                        <div className="masthead-subheading">{sousTitre}</div>
                        {/*<h2 className="section-heading text-uppercase">Piscine</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Conception et réalisation de piscines enterrées sur mesure.</h3>*/}

                        <div className="container-marges-texte">
                            <Typography variant="h5" className="pb-5">Transformez votre jardin en oasis de détente avec nos piscines sur mesure, conçues et
                                construites avec l'expertise de notre entreprise de maçonnerie.</Typography>

                            <h4>Piscines Enterrées</h4>
                            <p>L'entreprise se spécialise dans la construction de piscines neuves en maçonnerie, offrant des piscines enterrées et en dur,
                                adaptées
                                à tous vos besoins.</p>

                            <h4>Collaboration :</h4>
                            <p>Nous travaillons en étroite collaboration avec un pisciniste qualifié, capable de compléter notre offre de travaux de maçonnerie
                                pour
                                vous fournir une solution piscine complète et de haute qualité.</p>

                            <h4>Matériaux :</h4>
                            <p>Les piscines sont construites avec divers matériaux, tels que le béton armé, les parpaings, les briques, les pierres, le bois, ou
                                encore les coques en polyester, garantissant durabilité et esthétisme.</p>

                            <h4>Formes :</h4>
                            <p>Nous offrons une variété de formes pour vos piscines, y compris rectangulaires, rondes, ovales, en haricot, et bien d'autres,
                                pour
                                s'adapter à votre espace et à vos préférences.</p>

                            <h4>Dimensions :</h4>
                            <p>Nos piscines peuvent être de tailles standards ou sur mesure, avec des profondeurs variables, pour répondre à vos exigences
                                spécifiques.</p>
                        </div>

                        <svg className="w-100 my-5"><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/ladder-6798998_960_720.jpg" alt="Description de l'image" className="img-fluid"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Piscine;
