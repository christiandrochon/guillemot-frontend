import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";
import HeaderContext from "./../components/HeaderContext";

class Charpente extends Component {
    static contextType = HeaderContext;

    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        updateHeaderDetails('Charpente, couverture', 'Solutions complètes pour vos projets de toiture et d\'aménagement extérieur', '/template/assets/img/charpente_bois.jpg');
    }

    render() {
        const {titre, sousTitre, imgurl} = this.context;
        return (
            <section className="page-section bg-light">
                <div className="">
                    <div className="text-center">
                        <div className="masthead-heading text-uppercase">{titre}</div>
                        <div className="masthead-subheading">{sousTitre}</div>
                        <div className="masthead-img">{imgurl}</div>
                        {/*<h2 className="section-heading text-uppercase">Charpente, couverture</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Solutions complètes pour vos projets de toiture et d'aménagement*/}
                        {/*    extérieur.</h3>*/}

                        <div className="">
                            <Typography variant="h5" className="pb-5">L'entreprise est spécialisée dans les travaux de charpente et de couverture, offrant une
                                large
                                gamme de services pour répondre à tous vos besoins en construction et rénovation.</Typography>

                            <h4>Charpente :</h4>
                            <p>Pose de fermettes américaines et traditionnelles</p>

                            <h4>Couverture :</h4>
                            <p>Couverture en tuiles <br/>
                                Pose de bandeaux en lambris ou PVC</p>

                            <h4>Éléments de toiture :</h4>
                            <p>Pose de gouttières en zinc ou PVC <br/>
                                Installation de fenêtres de toit, Velux, volets roulants et battants</p>

                            <h4>Isolation :</h4>
                            <p>Isolation des combles et des rampants</p>

                            <h4>Bardage :</h4>
                            <p>Pose de bardages en bois, PVC, zinc, ardoises, tuiles, etc.</p>

                            <h4>Aménagement extérieur :</h4>
                            <p>Pose de terrasses en bois<br/>
                                Installation de pergolas, abris de jardin, carports, garages, appentis, auvents, préaux, vérandas, abris de piscine, etc.</p>

                            <h4>Entretien et traitement :</h4>
                            <p>Traitement des toitures</p>
                        </div>
                        <svg><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/charpente-fermette-bouaye-2.jpg" alt="Charpente" className="img-fluid logo-img-fluid px-5"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Charpente;
