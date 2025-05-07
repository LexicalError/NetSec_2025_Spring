
hexes = [0x5B, 0x13, 0x49, 0x77, 0x13, 0x5E, 0x7D, 0x13]

# i:   0  1  2  0  1  2  0  1 
# v3:  0  1  2  3  4  5  6  7 
# v13: 5B 13 49 77 13 5E 7D 13
#      16 32 48 16 32 48 16 32

# for (int i = 0; v3 < 8; i++){
#     if(i >= 3)
#         i = 0;
#     sprintf(&v13, "%s%02X", &v13, v9[v3++] ^ v6[i])
# }

ans = ""
modify = [16, 32, 48]

for (i, hex) in enumerate(hexes):
    ans += chr(hex ^ modify[i % 3])

print(ans)
