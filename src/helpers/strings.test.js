import stringModule from "./strings";

const { getStringByLanguage } = stringModule;

const strings = {
    en: { submit: "submit" },
    emoji: { submit: "🚀" },
    am: {},
};

describe("> Language strings testing", () => {
    const mockWarning = jest.fn();
    let originalWarning;

    beforeEach(function() {
        originalWarning = console.warn;
        console.warn = mockWarning;
    });

    afterEach(function() {
        console.warn = originalWarning;
    });

    it("should return correct submit string for english", () => {
        const string = getStringByLanguage("en", "submit", strings);
        expect(string).toBe("submit");
        expect(mockWarning).not.toHaveBeenCalled();
    });

    it("should return correct submit string for emoji", () => {
        const string = getStringByLanguage("emoji", "submit", strings);
        expect(string).toBe("🚀");
        expect(mockWarning).not.toHaveBeenCalled();
    });

    it("should return english submit string when language does not exists", () => {
        const string = getStringByLanguage("rus", "submit", strings);
        expect(string).toBe("submit");
        expect(mockWarning).toHaveBeenCalledWith("Could not get string [submit] for [rus]");
    });

    it("should return english submit string when submit key does not exists for language", () => {
        const string = getStringByLanguage("am", "submit", strings);
        expect(string).toBe("submit");
        expect(mockWarning).toHaveBeenCalledWith("Could not get string [submit] for [am]");
    });
});