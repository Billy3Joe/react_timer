//Importer les modules dont nous avons besoin
import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

//On crée notre composant
class Container extends Component {

    render() {
        return ( <
            div > {
                this.props.isFormOpen ? ( <
                    TimerForm / >
                ) :
                    ( <
                    Timer / >
                )
            } <
            /div>
        )

    }
}

//Exporter le composant
export default Container;