//Importer les modules dont nous avons besoin
import React, { Component } from 'react';
import Container from './Container';

//On crée notre composant
class ListContainer extends Component {

    //Notre méthode liste
    render() {
        return ( <
            div className = 'list--container' >
            <
            Container isFormOpen = { false }
            /> <
            Container isFormOpen = { true }
            /> <
            /div>
        )

    }
}

//Exporter le composant
export default ListContainer;