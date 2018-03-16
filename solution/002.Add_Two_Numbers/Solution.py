#!/usr/bin/env python

import math


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def append(self, val):
        """
        :type val: int
        """
        cur = self
        while cur.next is not None:
            cur = cur.next
        cur.next = ListNode(val)

    def __str__(self):
        l = [str(self.val)]
        node = self.next
        while node is not None:
            l.append(str(node.val))
            node = node.next
        return " -> ".join(l)


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        carry = 0
        head_node = None
        last_node = None
        while carry != 0 or l1 is not None or l2 is not None:
            result = carry + (l1.val if l1 is not None else 0) + (l2.val if l2 is not None else 0)
            n = ListNode(result % 10)
            if head_node is None:
                head_node = n
            if last_node is not None:
                last_node.next = n
            last_node = n
            carry = math.floor(result / 10)
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
        return head_node


if __name__ == '__main__':
    l1 = ListNode(2)
    l1.append(4)
    l1.append(3)

    l2 = ListNode(5)
    l2.append(6)
    l2.append(4)

    l3 = Solution().addTwoNumbers(l1, l2)
    print(l3)
