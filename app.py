from flask import Flask, render_template, request, jsonify
import generateNtpnFromShell 

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/ntpn", methods=["POST"])
def ntpn():
    content = request.json
    ntpn = generateNtpnFromShell.process(content['billingCodes'])
    return jsonify(ntpn)