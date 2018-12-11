import React, { Component } from 'react';

import AnnouncementHeader from './announcement-header';
import AnnouncementDescription from './announcement-description';
import AnnouncementFooter from './AnnouncementFooter/announcement-footer';

import './announcement.css';

export default class Announcement extends Component {    
    render() {
        return(
            <div className="announcement">
                <AnnouncementHeader />  
                <AnnouncementDescription />
                <AnnouncementFooter />
            </div>
        )
    }
}