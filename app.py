from flask import Flask, render_template, jsonify
import data
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import psycopg2

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')


@app.route('/')
def home():
    return render_template('base.html')


@app.route('/db_data', methods=['GET'])
def database_data():
    # 
    return jsonify(all_names)
    data = {"this": "is my database data"}
    return jsonify(data)


@app.route('/api_data', methods=['GET'])
def api_data():
    # data = data.get_api_data()
    data = {"this": "is my api data"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)