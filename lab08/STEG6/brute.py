import subprocess

password = open("5letterwords.txt", "r").read().split("\n")
for passwd in password:
    # print(passwd)
    result = subprocess.getstatusoutput("unrar x LSB_file.rar - inul -p" + passwd)
    if result[0] == 0:
        print("Sucess!! Password is {}".format(passwd))
        break
