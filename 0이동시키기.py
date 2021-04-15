def moveZerosToEnd(nums):
	currentIndex = 0
	
	for i in range(len(nums)):
		if nums[i] != 0:
			nums[currentIndex] = nums[i]
			if i != currentIndex:
				nums[i] =0
			currentIndex += 1			
	return nums