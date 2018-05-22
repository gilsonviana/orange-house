import React, { Component } from 'react';

import './announcement-footer-photo-panel.css';
import AddPhoto from '../svg/add-photo.svg';

export default class AnnouncementFooterPhotoPanel extends Component {
    render() {
        return(
            <div className="announcement-footer__photo-panel">
                <div className="announcement-footer__photo-panel-item">
                    <input type="file" name="announce-picture-1" id="announce-pic-1" accept="image/jpg"/>
                    <label htmlFor="announce-pic-1">
                        <img src={AddPhoto} alt="Insert new" />
                    </label>
                </div>    
                <div className="announcement-footer__photo-panel-item">
                    <input type="file" name="announce-picture-2" id="announce-pic-2" accept="image/jpg"/>
                    <label htmlFor="announce-pic-2">
                        <img src={AddPhoto} alt="Insert new" />
                    </label>
                </div>    
                <div className="announcement-footer__photo-panel-item">
                    <input type="file" name="announce-picture-3" id="announce-pic-3" accept="image/jpg"/>
                    <label htmlFor="announce-pic-3">
                        <img src={AddPhoto} alt="Insert new" />
                    </label>
                </div>    
                <div className="announcement-footer__photo-panel-item">
                    <input type="file" name="announce-picture-4" id="announce-pic-4" accept="image/jpg"/>
                    <label htmlFor="announce-pic-4">
                        <img src={AddPhoto} alt="Insert new" />
                    </label>
                </div>                
            </div>
        )
    }
}