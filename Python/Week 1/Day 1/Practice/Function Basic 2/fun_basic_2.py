# ****Countdown****

input=5
def countdown (num):
    arr=[]
    for i in range(num,-1,-1):
        arr.append(i)
    return arr

print(countdown(input))

# ****Print and Return****
arr2=[1,2]
def p_and_r(l):
    print(l[0])
    return(l[1])
print(p_and_r(arr2))

# **** First Plus Length****
arr3=[1,2,3,4,5]
def first_length(l):
    sum=l[0]+len(l)
    return sum
print(first_length(arr3))

# ****Value Greater than second****
arr4=[5,2,3,2,1,4]
def greater(l):
    count=0
    l2=[]
    for i in l:
        if i > l[1]:
            count+=1
            l2.append(i)
    print(count)
    return l2

print(greater(arr4))

# ****This length, That value****
def func5(size,val):
    arr=[]
    for i in range(size):
        arr.append(val)
    return arr

print(func5(4,7))
