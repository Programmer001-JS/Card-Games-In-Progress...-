import axios from "axios"


const api = axios.create({
    baseURL: "https://deckofcardsapi.com/api/deck/"
})

export const createDeckAndDraw = async () => {
    const { data } = await api.get('new/shuffle/', {
        params: {
            deck_count: 1
        }
    })

    const { deck_id: deckId } = data;

    const cardResponse =await drawCardFromDeck(deckId);
    console.log(cardResponse);
    return cardResponse

};
export const drawCardFromDeck =async (deckId) => {
    const { data } =await api.get(`${deckId}/draw/`, {
        params: {
            count: 1
        }
    })

    const { cards } = data;
    const { value, image } = cards[0];
    return { deckId, value, image };
}