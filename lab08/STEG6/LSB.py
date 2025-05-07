from PIL import Image
from tqdm import tqdm

im = Image.open("bonas.png")
width, height = im.size

pixels = im.getdata()

bits = ""

# for i in tqdm(pixels):
#     bits += bin(i)[-1]

# print(bits, end="")

f = open("LSB.txt", "rb")

bits = f.read()
f.close()

for i in range(4):
    print(chr(int(bits[i*8:(i+1)*8], 2)))

byte_array = bytearray()
for i in range(0, len(bits), 8):
    byte = bits[i:i+8]
    byte_array.append(int(byte, 2))

# Write to file
with open("LSB_file.rar", 'wb') as f:
    f.write(byte_array)