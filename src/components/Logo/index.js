import React from 'react';
import { DefaultScreen } from 'components/Responsive';
import './index.css';

class Logo extends React.Component {

    render() {
        return (<div className="Logo">
            <i className="fa fa-envelope" />
            <DefaultScreen>
                <div className="Logo-title">
                    Mailgentum
                </div>
            </DefaultScreen>
            
        </div>);
    }

}

export default Logo;