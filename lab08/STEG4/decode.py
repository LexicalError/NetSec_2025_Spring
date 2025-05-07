import zlib
from PIL import Image
import numpy
import re

#User inputs:
###################################
filename = "stego1.png"


#Extract zlib from IDAT chunks
###################################
im = Image.open(filename)
width, height = im.size
with open(filename, 'rb') as fin:
    data=fin.read() 
    
DatLocation = data.find(bytes("IDAT","utf-8"))
CompressedZlibRaw = bytearray(data[DatLocation+4:len(data)])

while(CompressedZlibRaw.find(bytes("IDAT","utf-8")) != -1):
    DatLocationPlural = CompressedZlibRaw.find(bytes("IDAT","utf-8"))
    CurrentCRCChunk = CompressedZlibRaw[DatLocationPlural-4:DatLocationPlural]
    del CompressedZlibRaw[DatLocationPlural-8:DatLocationPlural+4]

CompressedZlib  = CompressedZlibRaw[0:len(CompressedZlibRaw)-4]
Decompressed = bytearray(zlib.decompress(CompressedZlib))



#Extract data from filters
###################################
CodeString = ""

if(len(im.getbands()) == 3): #Then it's an RGB only image
    #print("RGB")
    for i in range(0,len(Decompressed), ((width*3)+1)):
        try:
            CodeString += str(Decompressed[i])
        except:
            pass
        
elif(len(im.getbands())==1): #Is Palette image
    #print("Plaette")
    for i in range(0,len(Decompressed), (width*1)+1):
        try:
            CodeString += str(Decompressed[i])
        except:
            pass
else: #Is RGBA image
    #print("RGBA")
    for i in range(0,len(Decompressed), (width*4)+1):
        try:
            CodeString += str(Decompressed[i])
        except:
            pass
        
FinalData = CodeString

print("Finished")
print(FinalData)


bytes_list = [FinalData[i:i+8][::-1] for i in range(0, len(FinalData), 8)]
message = ''.join([chr(int(b, 2)) for b in bytes_list])
print("Message:", message)