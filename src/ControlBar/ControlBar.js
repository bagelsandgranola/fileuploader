import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRedoAlt,
    faTrashAlt,
    faCloudDownloadAlt
   } from '@fortawesome/free-solid-svg-icons';
import './ControlBar.css';


class ControlBar extends React.Component {


    render() {

        return(

            <div className="ControlBar">
                <div className="ControlBar_btn"> <FontAwesomeIcon icon={faRedoAlt}/> </div>
                <div className="ControlBar_btn"> <FontAwesomeIcon icon={faTrashAlt}/> </div>
                <div className="ControlBar_btn"> <FontAwesomeIcon icon={faCloudDownloadAlt}/> </div>

            </div>
        );
    }
}

export default ControlBar;