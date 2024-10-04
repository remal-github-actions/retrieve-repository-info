import {snakeCaseToCamelCase} from './snakeCaseToCamelCase.js'

describe('snakeCaseToCamelCase', () => {

    it('empty', () => {
        expect(snakeCaseToCamelCase('')).toBe('')
    })

    it('one word', () => {
        expect(snakeCaseToCamelCase('word')).toBe('word')
    })

    it('simple', () => {
        expect(snakeCaseToCamelCase('snake_case_to_camel_case')).toBe('snakeCaseToCamelCase')
    })

    it('several underscores', () => {
        expect(snakeCaseToCamelCase('snake__case___to____camel_____case')).toBe('snakeCaseToCamelCase')
    })

})
