import React, { Component } from "react"
import { createDeckAndDraw, drawCardFromDeck } from "./api"
import ButtonsTab from "./ButtonsTab";
import { CardLayout } from "./Layout.components"
import compareValues from "./utils";
import "./CardGameBoard.css"



export default class CardGameBoard extends Component {
    state = {
        cardImageUrl: null,
        cardValue: null,
        deckId: null,
        result: null,

    }


    async componentDidMount() {

        const { deckId, value, image } = await createDeckAndDraw();
        this.setState({
            deckId,
            cardValue: value,
            cardImageUrl: image
        })
    }

    onButtonClick = async ({ target: { name: bet} }) => {
        this.setState({
            cardImageUrl: null
        })
        const { deckId, cardValue: previousCardValue } = this.state;


        const { value: currentCardValue, image } = await drawCardFromDeck(deckId);
        const result = compareValues({
            previousCardValue,
            currentCardValue,
            bet,
            

        })
        this.setState({
            result,
            cardValue: currentCardValue,
            cardImageUrl: image,
        })
    }


    render() {
        const { result, cardImageUrl } = this.state;
        if (!cardImageUrl) {
            return <h1>Loading...</h1>
        }
        return (
            <CardLayout>
                <img src={cardImageUrl} alt="This is your cards" />
                <ButtonsTab onButtonClick={this.onButtonClick} />
                {result && <h2>{`You ${result}`}</h2>}
            
            </CardLayout>
        )
    }
}