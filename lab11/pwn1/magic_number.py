from pwn import *

r = remote("127.0.0.1", 1234)
r.recvuntil(b":)")

# First input: 0x79487ff
r.send(p32(0x79487ff))
print(r.recvline())
print(r.recvline())

for i in range(1000):	
    problem = r.recvuntil("?")	
    r.send(str(eval(problem[:-4])) + '\n')

r.interactive()
