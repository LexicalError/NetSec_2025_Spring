from Crypto.Util.number import inverse
# openssl rsa -inform PEM -pubin -in public-key.pem -text -noout
# Public-Key: (640 bit)
# Modulus:
    # 00:ae:5b:b4:f2:66:00:32:59:cf:9a:6f:52:1c:3c:
    # 03:41:01:76:cf:16:df:53:95:34:76:ea:e3:b2:1e:
    # de:6c:3c:7b:03:bd:ca:20:b3:1c:00:67:ff:a7:97:
    # e4:e9:10:59:78:73:ee:f1:13:a6:0f:ec:cd:95:de:
    # b5:b2:bf:10:06:6b:e2:22:4a:ce:29:d5:32:dc:0b:
    # 5a:74:d2:d0:06:f1
# Exponent: 65537 (0x10001)

raw_n = "00:ae:5b:b4:f2:66:00:32:59:cf:9a:6f:52:1c:3c:03:41:01:76:cf:16:df:53:95:34:76:ea:e3:b2:1e:de:6c:3c:7b:03:bd:ca:20:b3:1c:00:67:ff:a7:97:e4:e9:10:59:78:73:ee:f1:13:a6:0f:ec:cd:95:de:b5:b2:bf:10:06:6b:e2:22:4a:ce:29:d5:32:dc:0b:5a:74:d2:d0:06:f1"
n = int(raw_n.replace(":", ""), 16)
e = 65537

p = 1634733645809253848443133883865090859841783670033092312181110852389333100104508151212118167511579
q = 1900871281664822113126851573935413975471896789968515493666638539088027103802104498957191261465571

n = p * q
phi = (p - 1) * (q - 1)
d = inverse(e, phi)

f = open("flag.txt", "rb")
flag = f.read()
f.close()
c = int.from_bytes(flag, byteorder="big")

m = pow(c, d, n)
print(m)
print(m.to_bytes((m.bit_length() + 7) // 8, byteorder="big"))

