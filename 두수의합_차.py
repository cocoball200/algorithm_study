# 배열에 있는 수들을 더해서 target값을 찾아라. 
def twoSum(nums, target):
    for n in nums:
        if(target-n) in nums:
            return n, (target-n)

def main():
    print(twoSum([2,8,19,37,51], 12))


# 위의 코드의 문제점은 nums를 다 돌아야하는것. 시간의 효율성 떨어짐
# 그래서 1. sort로 정렬한후, 처음과 마지막 요소를 더하고, 이를 비교하여, target값이 더 크면 처음에 있는 요소를 그 다음 index+1로, 반대이면 마지막 있는 요소를 index-1

def twoSumBest(nums,target):
    i =0
    j = len(nums-1)
    while i<j:
        sum = nums[i]+ sum[j]
        if(sum == target):
            return nums[i],nums[j]
        elif sum > target:
            j -= 1
        else sum < target:
            i += 1

# 가장 많이 차이 나는 수 찾기 

def difference(nums):
    nums.sort()
    return max(nums) - min(nums)

