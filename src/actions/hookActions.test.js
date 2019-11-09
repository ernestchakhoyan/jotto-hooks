import moxios from "moxios";
import {getSecretWord} from "./hooksActions";

describe("> moxios test", () => {
    beforeEach(function() {
        moxios.install();
    });

    afterEach(function() {
        moxios.uninstall();
    });

    it("should call the getSecretWord callback on axios response", async () => {
        const secretWord = "party";

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                                    status: 200,
                                    response: secretWord
                                });
        });

        const getSecretWordMock = jest.fn();

        await getSecretWord(getSecretWordMock);
        expect(getSecretWordMock).toHaveBeenCalledWith(secretWord);
    });
});