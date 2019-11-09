import React from "react";
import * as PropTypes from "prop-types";

function GuessedWords(props) {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guessed-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        contents = (
            <div data-test="guessed-words">
                <h3>Guessed words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                    </thead>
                <tbody>
                {guessedWordRows}
                </tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;