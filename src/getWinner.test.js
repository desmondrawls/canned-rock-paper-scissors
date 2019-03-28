import {getWinner} from './helpers';

describe('getWinner tests', () => {

    it('reports that paper beats rock', () => {
        expect.assertions(2);
        let sallyWins = getWinner( {owner: 'Colin', throw: 'rock'} , {owner: 'Sally', throw: 'paper'});
        let colinWins = getWinner( {owner: 'Colin', throw: 'paper'} , {owner: 'Sally', throw: 'rock'});
        expect(colinWins).toBe('Colin');
        expect(sallyWins).toBe('Sally');
    });

    it('reports that rock beats scissors', () => {
        expect.assertions(2);
        let colinWins = getWinner( {owner: 'Colin', throw: 'rock'} , {owner: 'Sally', throw: 'scissors'});
        let sallyWins = getWinner( {owner: 'Colin', throw: 'scissors'} , {owner: 'Sally', throw: 'rock'});
        expect(colinWins).toBe('Colin');
        expect(sallyWins).toBe('Sally');
    });

    it('reports that scissors beats paper', () => {
        expect.assertions(2);
        let colinWins = getWinner( {owner: 'Colin', throw: 'scissors'} , {owner: 'Sally', throw: 'paper'});
        let sallyWins = getWinner( {owner: 'Colin', throw: 'paper'} , {owner: 'Sally', throw: 'scissors'});
        expect(colinWins).toBe('Colin');
        expect(sallyWins).toBe('Sally');
    });

    it('reports a tie', () => {
        expect.assertions(1);
        let result = getWinner( {owner: 'Colin', throw: 'rock'} , {owner: 'Sally', throw: 'rock'});
        expect(result).toBe('Draw');
    })
})