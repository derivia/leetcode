/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	// se uma das listas for nula, retorna a outra
	if (!list1) return list2;
	if (!list2) return list1;

	// escolhe a cabeça da lista mesclada
	let head, current;
	if (list1.val < list2.val) {
		head = list1;
		list1 = list1.next;
	} else {
		head = list2;
		list2 = list2.next;
	}
	current = head;

	// mescla as listas
	while (list1 && list2) {
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}

	// adiciona o restante da lista não vazia
	current.next = list1 || list2;

	return head;
};
