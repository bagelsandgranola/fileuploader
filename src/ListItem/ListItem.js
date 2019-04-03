import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileImage,
    faFileAudio,
    faFileAlt,
    faFileVideo
   } from '@fortawesome/free-solid-svg-icons';
import ControlBar from '../ControlBar/ControlBar';
import './ListItem.css'

class ListItem extends React.Component {


    render () {

        const icons = {
            "jpg": faFileImage,
            "mov": faFileVideo,
            "txt": faFileAlt,
            "mp3": faFileVideo
          }

        return (
            <div className="ListItem">
                <div className="ListItem_icon"> 
                    <div className="ListItem_circle">
                        <FontAwesomeIcon className="item_icon" icon={icons[this.props.fileType] || faFileAlt} />
                    </div>
                </div>

                <div className="ListItem_content">
                    <div className="ListItem_heading">
                        <div className="ListItem_title">
                            {this.props.name}
                        </div>
                        <div className="ListItem_size">
                            {this.props.size}
                        </div>
                    </div>

                    <div className="ListItem_actions">
                        <div className="ListItem_status">
                            <h3> {this.props.status} </h3>
                        </div>

                        <div className="Item_controls">
                        <ControlBar/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ListItem;