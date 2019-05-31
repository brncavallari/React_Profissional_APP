import React from "react";
import { connect } from "react-redux";

import { Board, Card, VictoryDialog } from "../../components";
// import { ErroDialog } from "../../components/ErroDialog";

const GamePage = ({ cards, onCardClick, isVictoryDialogOpen, onClose, onGameRestart }) => (
    <>
        <Board>
            {
                cards.map(card => (
                    <Card
                        key={card.key}
                        name={card.name}
                        isActive={card.isActive}
                        onclick={() => {
                            onCardClick(card);
                        }}
                    />
                ))}
        </Board>
        <VictoryDialog
            isOpen={isVictoryDialogOpen}
            onClose={onClose}
            onGameRestart={onGameRestart} />

        {/* <ErroDialog /> */}
    </>
);

const mapStateToProps = state => ({
    cards: state.cards,
    isVictoryDialogOpen: state.isVictoryDialogOpen,
    isCardWrong: state.isCardWrong
});

const mapDispatchToProps = dispatch => ({
    onCardClick: card => {
        dispatch({ type: "SELECT_CARD", key: card.key });
    },
    onClose: () => {
        dispatch({ type: "CLOSE_VICTORY_DIALOG" });
    },
    onGameRestart: () => {
        dispatch({ type: "START_GAME" });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage);
