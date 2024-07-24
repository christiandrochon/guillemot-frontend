import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";
import HeaderContext from "./../components/HeaderContext";

class TaillePierre extends Component {
    static contextType = HeaderContext;

    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        updateHeaderDetails('Tailleur de pierre', 'Travail sur pierres et briquettes soulacaises');
    }

    render() {
        const {titre, sousTitre} = this.context;
        return (
            <section className="page-section bg-light">
                <div className="container">
                    <div className="text-center">
                        <div className="masthead-heading text-uppercase">{titre}</div>
                        <div className="masthead-subheading">{sousTitre}</div>

                        <div className="container-marges-texte">
                            <Typography variant="h5" className="pb-5">Artisanat et expertise pour des réalisations sur mesure et de haute qualité.</Typography>

                            <h4>Placage de Murs et Taille de Pierre</h4>
                            <p>L'entreprise est spécialisée dans le placage de murs en pierre et la taille de briquettes de style soulacais, offrant des
                                solutions
                                esthétiques et durables pour vos projets de construction et de rénovation.</p>

                            <h4>Restauration et Entretien :</h4>
                            <p>Nous réalisons la restauration de murs en pierre, incluant le ravalement, le traitement des murs et le jointage, afin de
                                préserver et
                                valoriser votre patrimoine bâti.</p>

                            <h4>Taille de Pierre :</h4>
                            <p>Notre expertise en taille de pierre nous permet de créer des encadrements de portes et de fenêtres, des linteaux, ainsi que des
                                appuis de fenêtres sur mesure, alliant tradition et savoir-faire artisanal.</p>
                        </div>

                        <svg className="w-100 my-5"><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/murs-porteurs_monolithe_1.jpg" alt="statues" className="img-fluid"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default TaillePierre;
