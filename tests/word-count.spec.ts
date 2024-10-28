import {countWords, handleContractions, isWhiteSpace, normalizeWhitespaces} from "../src/word-count/word-count";

describe('Word Count', () => {
  describe('"isWhitespace"', () => {
    it('should identify whitespace', () => {
      expect(isWhiteSpace(" ")).toBeTruthy()
    })

    it('should reject strings', () => {
      expect(isWhiteSpace("g")).toBeFalsy()
    })
  })

  describe('"normalizeWhitespaces"', () => {
    it('should reduce whitespaces count', () => {
      expect(normalizeWhitespaces('do   things')).toEqual('do things')
    })

    it('should convert line break to whitespace', () => {
      expect(normalizeWhitespaces('do\nthings')).toEqual('do things')
    })

    it('should normalize multiple line breaks', () => {
      expect(normalizeWhitespaces('do\n\n\nthings')).toEqual('do things')
    })

    it('should keep normal whitespaces string', () => {
      expect(normalizeWhitespaces('do things wisely')).toEqual('do things wisely')
    })

    it('should trim paddings at the start', () => {
      expect(normalizeWhitespaces('  do things wisely')).toEqual('do things wisely')
    })

    it('should trim paddings at the end', () => {
      expect(normalizeWhitespaces('do things wisely   ')).toEqual('do things wisely')
    })
  })

  describe('"handleContractions"', () => {
    it('should remove single quotes', () => {
      expect(handleContractions("this is 'word'")).toEqual('this is word')
    })

    it('should remove single dashes', () => {
      expect(handleContractions('this - word - smth')).toEqual('this  word  smth')
    })

    it('should keep contractions', () => {
      expect(handleContractions("that's")).toEqual("that's")
    })

    it('should keep complex dashed words', () => {
      expect(handleContractions('this-is')).toEqual('this-is')
    })
  })

  describe('"countWords"', () => {
    it('should return words map', () => {
      expect(countWords('This is a phrase')).toEqual({'this': 1, 'is': 1, 'a': 1, 'phrase': 1})
    })

    it('should return words map for phrase with contractions', () => {
      expect(countWords("That's a phrase")).toEqual({"that's": 1, 'a': 1, 'phrase': 1})
    })

    it('should return words map for phrase with complex words', () => {
      expect(countWords("That's a one-to-one phrase")).toEqual({"that's": 1, 'a': 1, 'one-to-one': 1, 'phrase': 1})
    })

    it('should return words map for phrase with repetitive words', () => {
      expect(countWords("That's a one to one")).toEqual({"that's": 1, 'a': 1, 'one': 2, 'to': 1})
    })

    it('should return words map for phrase with quotes', () => {
      expect(countWords("He is 'the one'")).toEqual({"he": 1, 'is': 1, 'the': 1, 'one': 1})
    })

    it('should return words map for phrase with numbers', () => {
      expect(countWords("They work 24/7 for 365 days")).toEqual({"they": 1, 'work': 1, '24/7': 1, 'for': 1, '365': 1, 'days': 1})
    })
  })
})
