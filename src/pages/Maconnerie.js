import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";

class Maconnerie extends Component {
    render() {
        return (
            <section className="page-section bg-light">
                <div className="container container-marges-texte">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Maçonnerie</h2>
                        <h3 className="section-subheading text-muted">Travaux de construction et de démolition.</h3>

                        <Typography variant="h5" className="pb-5">L'entreprise effectue des travaux de maçonnerie générale, de gros œuvre et de second œuvre.
                        </Typography>
                        <p className="fs-5">L'entreprise intervient dans les domaines de la <strong>construction</strong> et de
                            la <strong>démolition</strong>.<br/> Concernant la
                            construction, elle se spécialise dans <strong>l'agrandissement</strong> et <strong>l'extension</strong> des habitations et des bâtiments. Les travaux de démolition
                            incluent le <strong>dallage</strong>, les <strong>fondations</strong> et <strong>l'élévation des murs</strong>.</p>
                        <p className="fs-5">Elle intervient dans la construction de maisons individuelles, de bâtiments industriels, de bâtiments
                            commerciaux, de bâtiments publics, de bâtiments agricoles et autres.</p>
                        <p className="fs-5">Les travaux de maçonnerie sont réalisés par des maçons professionnels possédant une connaissance approfondie des
                            matériaux et des techniques de construction.</p>

                        <svg className="w-100 my-5"><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/istockphoto-886676118-2048x2048.webp" alt="Description de l'image" className="img-fluid"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Maconnerie;
