import React, { Component } from 'react';

import './announcement-description.css';

export default class AnnouncementDescription extends Component {
    render() {
        return(
            <div className="announcement-description">
                <textarea required>
                </textarea>
                <label>Your beautiful house is...</label>
            </div>
        )
    }
}