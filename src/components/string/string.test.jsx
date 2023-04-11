import { getSteps } from "./utils";

describe('Line reversal', () => {
    it('reverses with event number of symbols', () => {
        let string = getSteps('abcd');
        expect(string[string.length - 1].symbols.join('')).toBe('dcba');
    });
    it('reverses with unevent number of symbols', () => {
        let string = getSteps('abcdefg');
        expect(string[string.length - 1].symbols.join('')).toBe('gfedcba');
    });
    it('reverses single symbol', () => {
        let string = getSteps('o');
        expect(string[string.length - 1].symbols.join('')).toBe('o');
    });
    it('reverses the empty line', () => {
        let string = getSteps('');
        expect(string.symbols).toBe(undefined);
    });
}); 