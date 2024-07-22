import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

class Contact extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact</h2>
                        {/*<h3 className="section-subheading text-muted">todo.</h3>*/}
                        <p>Vous pouvez nous contacter par téléphone au 06 78 27 11 88</p>
                        <p>Vous pouvez nous contacter par mail à l'adresse suivante: guillemot.freres@live.fr </p>
                        <p>Vous pouvez nous contacter par courrier à l'adresse suivante: 27, rue du onze novembre 1918, 33590 TALAIS</p>
                        {/*<p>Vous pouvez nous contacter par le formulaire de contact ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le chat en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de devis en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de rappel en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de rendez-vous en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de documentation en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de renseignements en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de contact en ligne ci-dessous: </p>*/}



                        <svg><DashboardRoundedIcon/></svg>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
