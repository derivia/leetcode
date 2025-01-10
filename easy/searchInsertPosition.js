/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	// busca binária [O (log n)]
	// por serem necessariamente elementos ordenados de forma crescente.
	let tail = 0;
	let head = nums.length - 1;

	while (tail <= head) {
		let pivot = Math.floor((tail + head) / 2);

		if (nums[pivot] === target) {
			return pivot; // retorna o elemento encontrado
		} else if (nums[pivot] > target) {
			head = pivot - 1;
		} else {
			tail = pivot + 1;
		}
	}

	// retorna a posição onde o elemento estaria
	// baseado na posição do último elemento menor que `target`
	return tail;
};
