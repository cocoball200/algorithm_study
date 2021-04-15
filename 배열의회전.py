# 방법 1 
def rotateArray(nums, k):
	return nums[len(nums)-k:] + nums[:len(nums)-k]

# 방법2 
def partialReverse(nums, start, end):
    for i in range(0, int((end-start)/2) + 1):
        temp = nums[start + i]
        nums[start+i] = nums[end - i]
        nums[end -i] = temp