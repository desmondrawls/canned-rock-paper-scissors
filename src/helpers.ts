type PlayerThrowObject = {
    owner: string,
    throw: Throw,
}

export const getWinner = (p1: PlayerThrowObject, p2: PlayerThrowObject) => {
    if(p1.throw === p2.throw) {
        return 'Draw'
    } else {
        return winners.find((throws) => tupleEquals(throws, [p1.throw, p2.throw])) != undefined ? p1.owner : p2.owner
    }
}

// compare ([throw1, throw2]) 
const compare = (throw1, throw2) => {
    const checker = ['rock', 'scissors', 'paper'];
    if (checker.indexOf(throw1) < checker.indexOf(throw2)) return throw1;
    // 2 < 0
    else return throw2;
}

export type Throw = 'rock' | 'paper' | 'scissors' | '';

const winners: [Throw, Throw][] =[
    ['paper', 'rock'],
    ['rock', 'scissors'],
    ['scissors', 'paper'],
]

const tupleEquals = (tuple1: [Throw, Throw], tuple2: [Throw, Throw]) => {
    return tuple1[0] === tuple2[0] && tuple1[1] === tuple2[1]
}