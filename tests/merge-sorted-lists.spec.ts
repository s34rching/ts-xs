import {mergeTwoLists} from "../src/merge-sorted-lists/merge-sorted-lists";
import {list1, list2, merged} from "./fixtures/linked-lists"

describe('"mergeTwoLists"', () => {
  it('should return merged linked list', () => {
    const result = mergeTwoLists(list1, list2)

    expect(result).toEqual(merged)
  })
})
