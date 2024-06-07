from flask import Flask, request, jsonify
from flask_cors import CORS
from subprocess import Popen, PIPE, DEVNULL
import random
import time

def keypress(sequence):
    p = Popen(['xte'], stdin=PIPE, stderr=DEVNULL, text=True)
    p.communicate(input=sequence)

fin = False
def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)

    app.config['CORS_HEADERS'] = 'Content-Type'

    @app.route('/words', methods=['POST'])
    def typer():
        global fin
        fin = False
        data = request.get_json()
        words = data['words']

        time.sleep(2)
        count = 0
        speed = 150
        minTime, timeRange = 60000//(speed * 4.4) - 30, 60
        for word in words:
            for letter in word:
                ms = random.randint(minTime, minTime + timeRange) / 1000
                time.sleep(ms)
                count += 1
                keypress(f'''key {letter}
                    ''')
                if fin:
                    break
            if fin:
                break
            keypress('''key space
                 ''')

        return jsonify({
            "status": "received"
        })


    @app.route('/end')
    def ender():
        global fin
        fin = True

        return jsonify({
            "ended": "true"
        })

    return app
