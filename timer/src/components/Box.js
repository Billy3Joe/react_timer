//Importer les modules dont nous avons besoin
import React, { Component } from 'react';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';

//On crée notre composant
class Box extends Component {
   
    //Notre méthode liste
    render() {
        return (
          <div className='boxed--view'>
            <div className='boxed--view__box'>
                <ListContainer />
                <ActionContainer isFormOpen={false} />
            </div>
          </div>
        )

    }
}

//Exporter le composant
export default Box;