import {ListNode} from "./list-node";

export const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  const resultingList = new ListNode()
  let list1CurrentNode = list1
  let list2CurrentNode = list2
  let resultingListCurrentNode = resultingList

  while (list1CurrentNode !== null || list2CurrentNode !== null) {
    let nextValue

    if (!list1CurrentNode && list2CurrentNode) {
      nextValue = list2CurrentNode!.val!
      list2CurrentNode = list2CurrentNode!.next
    } else if (!list2CurrentNode && list1CurrentNode) {
      nextValue = list1CurrentNode!.val!
      list1CurrentNode = list1CurrentNode!.next
    } else if (list2CurrentNode!.val < list1CurrentNode!.val) {
      nextValue = list2CurrentNode!.val!
      list2CurrentNode = list2CurrentNode!.next
    } else if (list2CurrentNode!.val > list1CurrentNode!.val || list2CurrentNode!.val === list1CurrentNode!.val) {
      nextValue = list1CurrentNode!.val!
      list1CurrentNode = list1CurrentNode!.next
    }

    if (!resultingListCurrentNode.val) {
      resultingListCurrentNode.val = nextValue!
    } else {
      resultingListCurrentNode.next = new ListNode(nextValue)
      resultingListCurrentNode = resultingListCurrentNode.next
    }
  }

  return resultingList
}
