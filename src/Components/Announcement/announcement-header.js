import React, { Component } from 'react';

import './announcement-header.css';

export default class AnnouncementHeader extends Component {
    render() {
        return(
            <div className="announcement-header">
                <div>
                    <input type="radio" name="announcement-header-radio" id="announce-radio-sell" />
                    <label htmlFor="announce-radio-sell">Sell</label>
                </div>
                <div>
                    <input type="radio" name="announcement-header-radio" id="announce-radio-rent" />
                    <label htmlFor="announce-radio-rent">Rent</label>
                </div>
                <div>
                    <input type="radio" name="announcement-header-radio" id="announce-radio-share" />
                    <label htmlFor="announce-radio-share">Share</label>
                </div>
                <div>
                    <input type="submit" value="Announce" />
                </div>
            </div>
        )
    }
}