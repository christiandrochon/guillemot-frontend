import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

class Contact extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center containerAvecMarges">
                        <h2 className="section-heading text-uppercase">Contact</h2>
                        <h3 className="section-subheading text-muted">Nous sommes là pour vous aider.</h3>
                        <p className="pb-4">Cliquez pour nous appeler au <a className="mailto" href="tel:+33678271188"><h2>06 78 27 11 88</h2></a>
                        </p>
                        <p className="pb-5">Cliquez pour nous envoyer un email à <a className="mailto"
                                                                                    href="mailto:guillemot.freres@live.fr"><h2>guillemot.freres@live.fr</h2></a>
                        </p>

                        <p>Adresse de la société : <br/><h2><strong>27, rue du onze novembre 1918 <br/> 33590 TALAIS</strong></h2></p>
                        {/*<p>Vous pouvez nous contacter par le formulaire de contact ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le chat en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de devis en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de rappel en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de rendez-vous en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de documentation en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de renseignements en ligne ci-dessous: </p>*/}
                        {/*<p>Vous pouvez nous contacter par le formulaire de demande de contact en ligne ci-dessous: </p>*/}


                        <svg className="my-5"><DashboardRoundedIcon/></svg>
                        <img src="/template/assets/img/contact-us-banner.jpeg" alt="contact" className="img-fluid"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
