var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Promo extends React.Component {
  constructor(props) {
    super(props);
  // Here we render the function
  }
  render() {

    return (
    <section id="portfolio" className="bg-light-gray">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <h2 className="section-heading">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/roundicons.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Round Icons</h4>
                        <p className="text-muted">Graphic Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/startup-framework.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Startup Framework</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/treehouse.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Treehouse</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/golden.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Golden</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/escape.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Escape</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/dreams.png" className="img-responsive" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Dreams</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
            </div>
    </section>
    )}
}

module.exports = Promo;