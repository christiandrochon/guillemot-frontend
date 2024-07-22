import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

class Maconnerie extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Maconnerie</h2>
                        <h3 className="section-subheading text-muted">todo.</h3>

                        <p className="fs-5">L'entreprise évolue dans la construction et la démolition. La construction concerne l'agrandissemnt et l'extension des habitations et
                            des batiments.
                            tandis que la démolition consiste dans le dallage, les fondations et l'élévation des murs.</p>
                        {/*<p>L'entreprise ne fait pas de terrassement ni d'assainissement.</p>*/}
                        <p className="fs-5">Les travaux de maçonnerie sont réalisés par des maçons professionnels qui ont une connaissance approfondie des matériaux de
                            construction et des techniques de construction.</p>

                        {/*<svg><DashboardRoundedIcon/></svg>*/}
                        <img src="/template/assets/img/istockphoto-886676118-2048x2048.webp" alt="Description de l'image" className="img-fluid"/>
                    </div>

                    {/*<div className="portfolio-item">*/}
                    {/*    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">*/}
                    {/*        <img className="img-fluid" src="/template/assets/img/istockphoto-1566979286-1024x1024.jpg" alt="..."/>*/}
                    {/*    </a>*/}
                    {/*    <div className="portfolio-caption">*/}
                    {/*        <div className="portfolio-caption-heading">Window</div>*/}
                    {/*        <div className="portfolio-caption-subheading text-muted">Photography</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        );
    }
}

export default Maconnerie;
