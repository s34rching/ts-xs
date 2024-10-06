import {hasValidParentheses} from "../src/valid-parentheses/valid-parentheses";

describe('"hasValidParentheses"', () => {
  it('should be resolved to "true" for simple enclosed input', () => {
    expect(hasValidParentheses('{}')).toBeTruthy()
  })

  it('should be resolved to "true" for sequential brackets', () => {
    expect(hasValidParentheses('{}()[]')).toBeTruthy()
  })

  it('should be resolved to "true" for enclosed brackets', () => {
    expect(hasValidParentheses('{([])}')).toBeTruthy()
  })

  it('should be resolved to "true" for mixed brackets', () => {
    expect(hasValidParentheses('(){([])}[]')).toBeTruthy()
  })

  it('should be resolved to "false" if pairs of brackets are enclosed', () => {
    expect(hasValidParentheses('([{}{}])[]')).toBeTruthy()
  })

  it('should be resolved to "false" if input too short', () => {
    expect(hasValidParentheses('(')).toBeFalsy()
  })

  it('should be resolved to "false" if input odd', () => {
    expect(hasValidParentheses('()[]{')).toBeFalsy()
  })

  it('should be resolved to "false" if pair has wrong order', () => {
    expect(hasValidParentheses('()}{[]')).toBeFalsy()
  })

  it('should be resolved to "false" if pair injected into enclosed', () => {
    expect(hasValidParentheses('({)[}]')).toBeFalsy()
  })
})
