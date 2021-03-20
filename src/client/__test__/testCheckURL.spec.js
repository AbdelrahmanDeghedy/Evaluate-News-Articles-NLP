import { checkURL } from "../js/checkURL";

describe('Testing checkURL.js', () => {
    test('Testing the checkURL function', () => {
        expect(checkURL).toBeDefined()
    })

    test('checkURL will return false, if we entered an invalid URL', () => {
        expect(checkURL('deghedy')).toBeFalsy()
    })

    test('checkURL will return true, if we entered a valid URL', () => {
        expect(checkURL('https://www.udacity.com')).toBeTruthy()
    })
})