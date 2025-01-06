/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode();
	let current = dummy;
	let carry = 0; // armazena o valor de "vai um"

	while (l1 || l2 || carry) {
		// soma os valores dos nós atuais e o carry
		const val1 = l1 ? l1.val : 0;
		const val2 = l2 ? l2.val : 0;
		const sum = val1 + val2 + carry;

		// calcula o novo carry e o valor do nó atual
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;

		// avança para os próximos nós, se existirem
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	return dummy.next;
};
