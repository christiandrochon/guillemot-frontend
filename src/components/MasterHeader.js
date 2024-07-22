import React, {Component} from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DescriptionIcon from '@mui/icons-material/Description';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    {/*<div className="masthead-subheading">Maçonnerie, Charpente et couverture, Piscine, Tailleur de pierre</div>*/}
                    <div className="masthead-subheading">Neuf et rénovation</div>
                    <div className="masthead-heading text-uppercase">Guillemot et frères</div>
                    <div className="d-lg-inline-flex" style={{justifyContent: 'center', gap: '5em'}}>
                        <div className="masthead-heading text-uppercase">
                            <a className="btn btn-secondary btn-xl text-uppercase" href="#">
                                <DescriptionIcon style={{marginRight: 20, marginBottom: 2}}/>Devis gratuit
                            </a>
                        </div>
                        <div className="masthead-heading text-uppercase">
                            <a className="btn btn-secondary btn-xl text-uppercase" href="#">
                                <LocalPhoneIcon style={{marginRight: 20, marginBottom: 2}}/>06 78 27 11 88
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
            ;
    }
}

export default Header;
