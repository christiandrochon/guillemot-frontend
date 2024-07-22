import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Link} from "@mui/material";

class TaillePierre extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Tailleur de pierre</h2>
                        <h3 className="section-subheading text-muted">Travail sur pierres et briquettes soulacaises.</h3>

                        <p>L'entrerpise effectue le placage de murs en pierre et la taille de briquettes de style soulacais.</p>
                        <p>Elle saura faire de la restauration de murs en pierre, le ravalement, le traitement des murs , le jointage.</p>
                        <p>Elle effectue la taille de pierre pour les encadrements de portes et de fenêtres, les linteaux, les appuis de fenêtres, les </p>
                            <svg><DashboardRoundedIcon/></svg>
                    </div>
                </div>
            </section>
        );
    }
}

export default TaillePierre;
