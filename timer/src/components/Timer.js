//Importer les modules dont nous avons besoin
import React, { Component } from 'react';

//On crée notre composant
class Timer extends Component {

    render() {
        return ( <
            div className = 'timer--box' >
            <
            div className = "timer--content" >
            <
            div className = "timer--header" >
            <
            h2 > Titre < /h2> <
            /div> <
            div className = "timer--meta" >
            <
            p > Projet < /p> <
            /div> <
            div className = "timer--h2" >
            <
            h4 > 02: 45: 35 < /h4> <
            /div> <
            div className = "actions" >
            <
            span className = "trash" >
            Supprimer <
            /span> <
            span className = "edit" >
            Modifier <
            /span> <
            /div> <
            /div> <
            button className = "button" >
            Play <
            /button> <
            /div>
        )

    }
}

//Exporter le composant
export default Timer;