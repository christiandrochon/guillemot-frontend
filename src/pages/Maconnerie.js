import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {Typography} from "@mui/material";
import HeaderContext from "./../components/HeaderContext";

class Maconnerie extends Component {

    static contextType = HeaderContext;

    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        // updateHeaderDetails('Maçonnerie', 'Travaux de construction et de démolition', '/template/assets/img/maconnerie.webp');
        updateHeaderDetails('Maçonnerie', 'Travaux de construction et de démolition', `${process.env.PUBLIC_URL}/template/assets/img/maconnerie.webp`);
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
                        {/*<h2 className="section-heading text-uppercase ">Maçonnerie</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Travaux de construction et de démolition.</h3>*/}

                        <div className="">
                            <Typography variant="h5" className="pb-5">L'entreprise effectue des travaux de maçonnerie générale, de gros œuvre et de
                                second
                                œuvre.
                            </Typography>
                            <p className="fs-5">L'entreprise intervient dans les domaines de la <strong>construction</strong> et de
                                la <strong>démolition</strong>.<br/> Concernant la
                                construction, elle se spécialise dans <strong>l'agrandissement</strong> et <strong>l'extension</strong> des
                                habitations et des bâtiments. Les travaux de démolition incluent le <strong>dallage</strong>,
                                les <strong>fondations</strong> et <strong>l'élévation des murs</strong>.</p>
                            <p className="fs-5">Elle intervient dans la construction de maisons individuelles, de bâtiments industriels, de
                                bâtiments
                                commerciaux, de bâtiments publics, de bâtiments agricoles et autres.</p>
                            <p className="fs-5">Les travaux de maçonnerie sont réalisés par des maçons professionnels possédant une connaissance
                                approfondie des
                                matériaux et des techniques de construction.</p>
                        </div>
                        <svg><DashboardRoundedIcon/></svg>
                        {/*<img src="/template/assets/img/60728329_l.jpg" alt="chantier" className="img-fluid logo-img-fluid px-5"/>*/}
                        <img src={`${process.env.PUBLIC_URL}/template/assets/img/60728329_l.jpg`} alt="chantier" className="img-fluid logo-img-fluid px-5"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Maconnerie;
