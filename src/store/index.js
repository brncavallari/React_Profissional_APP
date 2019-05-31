import { createStore, applyMiddleware } from "redux";
import { select, put, call, takeEvery, delay } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { func } from "prop-types";


const criarRandom = (length) => {
    var cards = [];
    for (var i = 1; i <= length; i++) {
        if (i % 2 == 0) {
            cards.push({ id: i - 1, key: i, name: "Carta " + (i - 1), isActive: false, hasMatch: false })
        } else {
            cards.push({ id: i, key: i, name: "Carta " + i, isActive: false, hasMatch: false })
        }
    }
    cards = shuffle(cards);
    return cards;
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const initialState = {
    isLocked: false,
    isVictoryDialogOpen: false,
    isCardWrong: false,
    cards: []
};

function* selectCard(action) {
    const { key } = action;
    const cards = yield select(state => state.cards);
    const index = cards.findIndex(c => c.key === key);
    const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch)
    const isLocked = yield select(state => state.isLocked);


    if (!isLocked && index > -1 && !cards[index].isActive) {
        yield put({ type: "OPEN_CARD", index });

        if (otherCardIndex > -1) {
            if (cards[index].id === cards[otherCardIndex].id) {
                yield put({ type: "SET_MATCH", index, index2: otherCardIndex })
            } else {
                yield put({ type: "LOCK" })
                yield delay(1000);
                yield put({
                    type: "CLOSE_CARDS", index, index2: otherCardIndex
                })
            }
        }
    }
}

function* gameSaga() {
    yield takeEvery("SELECT_CARD", selectCard);
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GAME": {
            const { value } = action;
            alert(value);
            return {
                ...state,
                isVictoryDialogOpen: false,
                cards: criarRandom(value)
            };
        }
        case "CLOSE_VICTORY_DIALOG": {
            return {
                ...state,
                isVictoryDialogOpen: false,
            };
        }
        case "TAKE_VALUE": {
            const { value } = action;
            state.cards = criarRandom(value);

            return {
                ...state,
                isLocked: false,
            }
        }

        case "LOCK": {
            return {
                ...state,
                isLocked: true
            };
        }
        case "CLOSE_CARDS": {
            const cards = state.cards.slice();
            let isCardWrong = true

            cards[action.index].isActive = false;
            cards[action.index2].isActive = false;

            return {
                ...state,
                isLocked: false,
                isCardWrong,
                cards
            };
        }
        case "SET_MATCH": {
            const cards = state.cards.slice();
            let isVictoryDialogOpen = false;


            cards[action.index].hasMatch = true;
            cards[action.index2].hasMatch = true;

            if (cards.every(c => c.hasMatch)) {
                isVictoryDialogOpen = true;
            }

            return {
                ...state,
                isVictoryDialogOpen,
                cards
            }
        }
        case "OPEN_CARD": {
            const cards = state.cards.slice();

            cards[action.index].isActive = true;

            return {
                ...state,
                cards
            }
        }
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    gameReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(gameSaga);

export default store;
