/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var carry = 0;
	var lastNode = null;
	var headNode = null;
	while (l1 || l2 || carry > 0) {
		var result = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
		var node = new ListNode(result % 10);
		if (!headNode) {headNode = node;}
		if (lastNode) {lastNode.next = node;}
		lastNode = node;
		carry = Math.floor(result / 10);
		if (l1) {l1 = l1.next;}
		if (l2) {l2 = l2.next;}
	}
	return headNode;
};


// test helper
function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.toString = function() {
	var p = this;
	var result = [];
	while (p) {
		result.push(p.val);
		p = p.next;
	}
	return result.join(" -> ");
};

function numbersToList() {
	var headNode = new ListNode(0);
	var currNode = headNode;
	for (var i = 0; i < arguments.length; i++) {
		var node = new ListNode(arguments[i]);
		currNode.next = node;
		currNode = node;
	}
	return headNode.next;
}

// test
function test() {
	var node = addTwoNumbers(
		numbersToList(2, 4, 3),
		numbersToList(5, 6, 4)
	);
	console.log('result: ' + node.toString());
}

test();
