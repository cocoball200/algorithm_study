def removeDuplicate(nums):
    nums.sort()
    result = [nums[0]]

    for i in range(1,len(nums)):
        if nums[i] != nums[i-1]:
            result.append(nums[i])
    return result