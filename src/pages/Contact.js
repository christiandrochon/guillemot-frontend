import React, {Component} from 'react';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HeaderContext from "./../components/HeaderContext";

class Contact extends Component {
    static contextType = HeaderContext;

    componentDidMount() {
        window.scrollTo(0, 0);
        //recuperer la fonction updateHeaderDetails du contexte
        const {updateHeaderDetails} = this.context;
        updateHeaderDetails('Contact', 'Nous sommes là pour vous aider', '/template/assets/img/contact-us-banner.jpeg');
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

                        {/*<h2 className="section-heading text-uppercase">Contact</h2>*/}
                        {/*<h3 className="section-subheading text-muted">Nous sommes là pour vous aider.</h3>*/}

                        <div className="">
                            <p className="pb-4">Cliquez pour nous appeler au <a className="mailto" href="tel:+33678271188"><h2>06 78 27 11 88</h2></a>
                            </p>
                            <p className="pb-5">Cliquez pour nous envoyer un email à <a className="mailto"
                                                                                        href="mailto:guillemot.freres@live.fr"><h2>guillemot.freres@live.fr</h2>
                            </a>
                            </p>

                            <p>Adresse de la société : <br/><h2><strong>27, rue du onze novembre 1918 <br/> 33590 TALAIS</strong></h2></p>
                        </div>

                        {/*<svg><DashboardRoundedIcon/></svg>*/}
                        {/*<img src="/template/assets/img/contact-us-banner.jpeg" alt="contact" className="img-fluid logo-img-fluid px-5"/>*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
