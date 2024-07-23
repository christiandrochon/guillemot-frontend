import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";

class Charpente extends Component {
    render() {
        return (
            <section className="page-section bg-light">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Charpente, couverture</h2>
                        <h3 className="section-subheading text-muted">Solutions complètes pour vos projets de toiture et d'aménagement
                            extérieur.</h3>

                        <div className="container-marges-texte">
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
                        <svg className="w-100 my-5"><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/istockphoto-1566979286-1024x1024.jpg" alt="Description de l'image" className="img-fluid"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Charpente;
