from flask import Flask, render_template, request, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:5432/employee1'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False








db = SQLAlchemy(app)




@app.route("/")
def map():
    return render_template('google_maps.html')


if __name__ == "__main__":
    app.run()
