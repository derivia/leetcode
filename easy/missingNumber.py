class Solution(object):
    def missingNumber(self, nums):
        n = len(nums)
        expected_sum = (
            n * (n + 1) // 2
        )  # calcula a soma esperada dos números no intervalo [0, n]
        actual_sum = sum(nums)
        return (
            expected_sum - actual_sum
        )  # retorna a diferença entre a soma esperada e a soma real, que é o número faltante
