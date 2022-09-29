//Importer les modules dont nous avons besoin
import React, { Component } from 'react';

//On crée notre composant
class TimerForm extends Component {

    render() {
        const submitText = this.props.title ? "Modifier" : "Créer";
        return ( <
            div className = 'form' >
            <
            div className = "form--content" >
            <
            div className = "form--item" >
            <
            label htmlFor = "#" > Titre < /label> <
            input type = "text"
            placeholder = 'Mon titre' / >
            <
            /div> <
            div className = "form--item" >
            <
            label htmlFor = "#" > Projet < /label> <
            input type = "text"
            placeholder = 'Mon projet' / >
            <
            /div> <
            /div> <
            div className = "form--button" >
            <
            button className = "button btn--submit" > { submitText } <
            /button> <
            button className = "button btn--cancel" >
            Annuler <
            /button> <
            /div> <
            /div>
        )

    }
}

//Exporter le composant
export default TimerForm;