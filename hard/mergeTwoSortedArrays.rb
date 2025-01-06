# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
  # garante que nums1 seja o array menor
  if nums1.length > nums2.length
    nums1, nums2 = nums2, nums1
  end

  m, n = nums1.length, nums2.length
  left, right = 0, m

  # busca binária no array menor
  while left <= right
    partition1 = (left + right) / 2
    partition2 = (m + n + 1) / 2 - partition1

    max_left1, min_right1 = get_partition_values(nums1, partition1, m)
    max_left2, min_right2 = get_partition_values(nums2, partition2, n)

    if max_left1 <= min_right2 && max_left2 <= min_right1
      return calculate_median(max_left1, max_left2, min_right1, min_right2, m + n)
    elsif max_left1 > min_right2
      # ajusta a partição para a esquerda
      right = partition1 - 1
    else
      # ajusta a partição para a direita
      left = partition1 + 1
    end
  end
end

def get_partition_values(nums, partition, length)
  max_left = partition == 0 ? -Float::INFINITY : nums[partition - 1]
  min_right = partition == length ? Float::INFINITY : nums[partition]
  [max_left, min_right]
end

def calculate_median(max_left1, max_left2, min_right1, min_right2, total_length)
  if total_length % 2 == 0
    # se o total de elementos for par, retorna a média dos dois valores do meio
    ([max_left1, max_left2].max + [min_right1, min_right2].min) / 2.0
  else
    # se for ímpar, retorna o valor máximo à esquerda
    [max_left1, max_left2].max
  end
end
