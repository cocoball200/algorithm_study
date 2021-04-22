def isValid(given_order, filtered_skill):
    return given_order.startswith(''.join(filtered_skill))

def solution(skills_order, candidates):
    answer = 0
    
    for candidate in candidates: 
        filtered = list(filter(lambda skill: skill in skills_order, candidate))
        
        if isValid(skills_order, filtered):
            answer += 1
        
    return answer