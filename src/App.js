import React from "react";
import "./App.css";
import hookActions from "./actions/hooksActions";
import Input from "./components/Input/Input";
import LanguageContext from "./components/context/LanguageContext";
import LanguagePicker from "./components/LanguagePicker/LanguagePicker";

function reducer(state, action) {
    switch (action.type) {
        case "setSecretWord":
            return { ...state, secretWord: action.payload };
        case "setLanguage":
            return { ...state, secretWord: action.payload };
        default:
            throw new Error(`Invalid action type ${action.type}`);

    }
}

function App() {
    const [ state, dispatch ] = React.useReducer(reducer, { secretWord: null, language: "en" });

    const setSecretWord = (secretWord) => {
        dispatch({ type: "setSecretWord", payload: secretWord });
    };

    const setLanguage = (language) => {
        dispatch({ type: "setLanguage", payload: language });
    };

    React.useEffect(
        () => {
            hookActions.getSecretWord(setSecretWord());
        },
        []
    );

    if (!state.secretWord) {
        return (
            <div className="container" data-test="spinner">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading ...</span>
                </div>
                <p>Loading secret word </p>
            </div>
        );
    }

    return (
        <div
            data-test="app-component"
            className="container"
        >
            <LanguageContext.Provider value={state.language}>
                <h1>Jotto</h1>
                <Input secretWord={state.secretWord} />
                <LanguagePicker setLanguage={setLanguage} />
            </LanguageContext.Provider>
        </div>
    );
}

export default App;
