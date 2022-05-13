import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id="addo-footer2" className="section">
            <div className="addo-narrow-content">
                <div className="row">
                    <div className="col-md-4 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <p className="addo-lead">&copy; 2022 Naeem. All rights reserved</p>
                    </div>
                    <div className="col-md-4 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <h2 className="text-center">Naeem<br /><span>ZANNATUN </span></h2>
                    </div>
                    <div className="col-md-4 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <ul className="social-network">
                            <li><a href="https://www.facebook.com/saifulshant0/">Facebook</a></li>
                            <li><a href="https://twitter.com/saifuli18658918">Twitter</a></li>
                            <li><a href="https://github.com/saiful-shant0">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/saiful-shant0/">Linkend</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;