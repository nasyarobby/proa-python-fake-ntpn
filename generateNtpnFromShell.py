import subprocess

def process(stringCodes=""):
    codes = stringCodes.split()
    list_of_ntpn = []
    for code in codes:
        output = subprocess.run(["bash", "./genNtpn.sh"], stdout=subprocess.PIPE)
        ntpn = output.stdout.decode("UTF-8").strip()
        list_of_ntpn.append({"code": code, "ntpn": ntpn})
    return list_of_ntpn