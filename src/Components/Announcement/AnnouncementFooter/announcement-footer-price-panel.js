import React, { Component } from 'react';

import './announcement-footer-price-panel.css';

export default class AnnouncementFooterPricePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rangePrice: 0
        }        
    }

    handlePriceRange(e) {
        this.setState({ rangePrice: e.target.value })
    }

    render() {
        return(
            <div className="announcement-footer__price-panel">
                <div className="announcement-footer__price-panel-range">
                    <input type="range" range="5" id="announcement-price" max="1000" onChange={this.handlePriceRange.bind(this)} />
                    <label htmlFor="announcement-price">     
                     $ { this.state.rangePrice }
                    </label>
                </div>
            </div>
        )
    }
}