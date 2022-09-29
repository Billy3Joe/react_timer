//Importer les modules dont nous avons besoin
import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

//On crée notre composant
class Container extends Component {

    render() {
        return ( <
            div className = 'list--container' > {
                this.props.isFormOpen ? ( <
                    TimerForm / >
                ) :
                    ( <
                    Timer title = "Apprendre React"
                    projet = "Développement web"
                    id = "01"
                    elapsed = "500052"
                    runningSince = { null }
                    />
                )
            } <
            /div>
        )

    }
}

//Exporter le composant
export default Container;