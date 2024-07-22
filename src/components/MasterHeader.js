import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Talais</div>
                    <div className="masthead-heading text-uppercase">Guillemot et frères</div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#services">Devis gratuit</a>
                </div>
            </header>
        );
    }
}

export default Header;
