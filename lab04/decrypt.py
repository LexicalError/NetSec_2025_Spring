c = 0x4e2c1f3cdd0ad977399813d9afaa13e1eb224665f9b35f988343d348570570fb
e = 0x10001
n = 0xa233271b7f7eec0e721c745aed5fb67e9d57cb5086863fd922ddae2760edd059
d = 0x314235ab3d320f8067994aa0de9c05b0bc346e83c8ba767d1684cc4b10d8aff1

m = pow(c, d, n)
secret = m.to_bytes(m.bit_length() // 8 + 1).decode()
print(secret)