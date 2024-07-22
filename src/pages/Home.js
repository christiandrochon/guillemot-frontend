import React, {Component} from 'react';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Nous proposons une large gamme de services.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITME 1*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="/template/assets/img/istockphoto-677739506-1024x1024.jpg" alt="img 1"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Maconnerie</div>
                                    <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 2*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="/template/assets/img/istockphoto-1566979286-1024x1024.jpg" alt="img 2"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Charpente, couverture</div>
                                    <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4">
                            {/*PORTFOLIO ITEM 3*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="/template/assets/img/infinity-pool-2396808_960_720.jpg" alt="img 3"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Piscine</div>
                                    <div className="portfolio-caption-subheading text-muted">Identity</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-4 mb-lg-0">
                            {/*PORTFOLIO ITEM 4*/}
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="/template/assets/img/statues-273745_960_720.jpg" alt="..."/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Tailleur de pierre</div>
                                    <div className="portfolio-caption-subheading text-muted">Branding</div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">*/}
                        {/*    /!*PORTFOLIO ITEM 5*!/*/}
                        {/*    <div className="portfolio-item">*/}
                        {/*        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">*/}
                        {/*            <div className="portfolio-hover">*/}
                        {/*                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>*/}
                        {/*            </div>*/}
                        {/*            <img className="img-fluid" src="/template/assets/img/frame-2590772_960_720.jpg" alt="..."/>*/}
                        {/*        </a>*/}
                        {/*        <div className="portfolio-caption">*/}
                        {/*            <div className="portfolio-caption-heading">Galerie</div>*/}
                        {/*            <div className="portfolio-caption-subheading text-muted">Website Design</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-4 col-sm-6">*/}
                        {/*    /!*PORTFOLIO ITEM 6*!/*/}
                        {/*    <div className="portfolio-item">*/}
                        {/*        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">*/}
                        {/*            <div className="portfolio-hover">*/}
                        {/*                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>*/}
                        {/*            </div>*/}
                        {/*            <img className="img-fluid" src="/template/assets/img/portfolio/6.jpg" alt="..."/>*/}
                        {/*        </a>*/}
                        {/*        <div className="portfolio-caption">*/}
                        {/*            <div className="portfolio-caption-heading">Window</div>*/}
                        {/*            <div className="portfolio-caption-subheading text-muted">Photography</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
