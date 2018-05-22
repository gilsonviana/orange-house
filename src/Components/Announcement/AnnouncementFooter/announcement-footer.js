import React, { Component } from 'react';

import AnnouncementFooterPhotoPanel from './announcement-footer-photo-panel';
import AnnouncementFooterPricePanel from './announcement-footer-price-panel';

import './announcement-footer.css';
import AddPhoto from '../svg/photo.svg';
import AddPrice from '../svg/money.svg';
import AddLocation from '../svg/location.svg';
import More from '../svg/more.svg';

export default class AnnouncementFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPhotoPanel: false,
            showPricePanel: false
        }
    }

    togglePhonePanel() {
        this.setState({ 
            showPhotoPanel: !this.state.showPhotoPanel,
            showPricePanel: false 
        })
    }

    togglePricePanel() {
        this.setState({ 
            showPricePanel: !this.state.showPricePanel,
            showPhotoPanel: false
        })
    }

    render() {
        return(
            <div className="announcement-footer">
                <div  onClick={this.togglePhonePanel.bind(this)} className="announcement-footer__control">
                    <div>
                        <img src={AddPhoto} alt="Insert some photographs" />Photo
                    </div>
                </div>
                { (this.state.showPhotoPanel) ? <AnnouncementFooterPhotoPanel /> : ''}
                
                <div onClick={this.togglePricePanel.bind(this)} className="announcement-footer__control">
                    <div>
                        <img src={AddPrice} alt="Insert/edit price" />Price
                    </div>
                </div>
                { (this.state.showPricePanel) ? <AnnouncementFooterPricePanel /> : '' }

                <div className="announcement-footer__control">
                    <div>
                        <img src={AddLocation} alt="Insert/edit location" />Location
                    </div>
                </div>
                <div className="announcement-footer__control">
                    <div>
                        <img src={More} alt="Insert more notes" />More
                    </div>
                </div>
            </div>
        )
    }
}