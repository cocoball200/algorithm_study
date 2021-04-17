import queue

class MovingAvg():
	def __init__(self, size):
		self.size = size
		self.q = queue.Queue()
		self.sum = 0
	
	def nextVal(self, num):
		if self.q.qsize() < self.size:
			self.q.put(num)
			self.sum += num
			return self.sum / self.q.qsize()
		else:
			self.sum -= self.q.get()
			self.q.put(num)
			self.sum += num
			return self.sum / self.size
