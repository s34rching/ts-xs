import {respondAsBob} from "../src/bob/bob";

describe('"respondAsBob"', () => {
  it('should respond as Bob while yelling at him', () => {
    expect(respondAsBob('THIS IS')).toEqual('Whoa, chill out!')
  })

  it('should respond as Bob while yelling at him with question', () => {
    expect(respondAsBob('IS THAT TRUTH?')).toEqual('Calm down, I know what I\'m doing!')
  })

  it('should respond as Bob while asking him a question', () => {
    expect(respondAsBob('How are you?')).toEqual('Sure.')
  })

  it('should respond as Bob while keeping silence with Bob', () => {
    expect(respondAsBob('')).toEqual('Fine. Be that way!')
  })

  it('should respond as while you are talking with bob', () => {
    expect(respondAsBob('Some words')).toEqual('Whatever.')
  })
})
