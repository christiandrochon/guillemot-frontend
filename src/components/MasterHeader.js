import React, {Component} from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DescriptionIcon from '@mui/icons-material/Description';
import HeaderContext from "./HeaderContext";

class MasterHeader extends Component {

    // Contexte pour passer les var titre et sousTitre du bandeau
    static contextType = HeaderContext;

    render() {
        const { headerDetails } = this.context;
        console.log(headerDetails);

        // Ensure titre and sousTitre are strings before rendering
        const titre = typeof headerDetails.titre === 'string' ? headerDetails.titre : '';
        const sousTitre = typeof headerDetails.sousTitre === 'string' ? headerDetails.sousTitre : '';
        const imgurl = typeof headerDetails.imgurl === 'string' ? headerDetails.imgurl : '';

        return (
            <header className="masthead" style={{backgroundImage: `url(${imgurl})`}}>
                <div className="container">

                    <div className="masthead-heading text-uppercase">{titre}</div>
                    <div className="masthead-subheading mb-5">{sousTitre}</div>

                    <div className="buttons-container">
                        <div className="d-lg-inline-flex" style={{justifyContent: 'center', gap: '5em'}}>
                            <div className="masthead-heading text-uppercase">
                                <a className="btn btn-xl btnDevisTel text-uppercase" href="mailto:guillemot.freres@live.fr">
                                    <DescriptionIcon style={{marginRight: 20, marginBottom: 2}}/>Devis gratuit
                                </a>
                            </div>
                            <div className="masthead-heading text-uppercase">
                                <a className="btn btn-xl btnDevisTel text-uppercase" href="tel:+33678271188">
                                    <LocalPhoneIcon style={{marginRight: 20, marginBottom: 2}}/>06 78 27 11 88</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
    }
}

export default MasterHeader;
