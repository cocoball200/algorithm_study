def isParenthesisValid(st):
	stack =[]
	pDic ={')':'(', '}':'{','>':'<',']':'['}
	pOpens ={'{','[','<','('}
	
	for ch in st:
		if ch in pOpens: # ch가 열린괄호
			stack.append(ch)
		
		else: #ch가 닫힌 괄호
			if len(stack) != 0 and stack[-1] == pDic[ch]:
				stack.pop()
			else:
				return False
	return True

examples = ["({()})", "[]<>{}", ")(" "<]", "<(>)"]

for example in examples:
    print(example, isParenthesisValid(example))