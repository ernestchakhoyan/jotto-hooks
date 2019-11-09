import axios from "axios";

export const getSecretWord = async (setSecretWord) => {
    const response = await axios("http://localhost:3000");
    setSecretWord(response.data);
};

export default {
    getSecretWord,
}