/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let numToIndex = {};
	for (let i = 0; i < nums.length; i++) {
		let match = target - nums[i];

		if (match in numToIndex) {
			return [numToIndex[match], i];
		}

		numToIndex[nums[i]] = i;
	}
	return [];
};
