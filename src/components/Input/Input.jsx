import React from "react";
import * as PropTypes from "prop-types";

function Input({secretWord}) {
    return (
        <div data-test="input-component">

        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;