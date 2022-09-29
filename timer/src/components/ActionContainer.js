//Importer les modules dont nous avons besoin
import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Button from './Button';

//On crée notre composant
class ActionContainer extends Component {


    render() {
        return ( <
            div > {
                this.props.isFormOpen ? ( <
                    TimerForm / >
                ) :
                    ( <
                    Button / >
                )
            } <
            /div>
        )

    }
}

//Exporter le composant
export default ActionContainer;