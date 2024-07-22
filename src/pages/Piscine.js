import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

class Piscine extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Piscine</h2>
                        <h3 className="section-subheading text-muted">todo.</h3>

                        <p>L'entreprise construit des piscines neuves en maconnerie, c'est à dire des piscines enterrées et en dur.</p>
                        <p>Le travail se fait en lien avec un pisciniste qui sera en mesure de compléter l'offre des travaux de maconnerie.</p>
                        <p>Les piscines sont construites en béton armé, en parpaings, en briques, en pierres, en bois, en coques polyester, etc.</p>
                        <p>Les piscines peuvent être de formes rectangulaires, rondes, ovales, en haricot, etc.</p>
                        <p>Les piscines peuvent être de tailles standards ou sur mesure.</p>
                        <p>Les piscines peuvent être de profondeurs variables.</p>



                        <svg><DashboardRoundedIcon/></svg>
                    </div>
                </div>
            </section>
        );
    }
}

export default Piscine;
