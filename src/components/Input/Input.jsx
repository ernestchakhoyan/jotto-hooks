import React from "react";
import * as PropTypes from "prop-types";

function Input({secretWord}) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div data-test="input-component">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    type="text"
                    className="mb-2 mx-sm-3"
                    placeholder="Enter text"
                    onChange={(event) => setCurrentGuess(event.target.value)}
                    value={currentGuess}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(event) => {
                        event.preventDefault();
                        setCurrentGuess("")
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;