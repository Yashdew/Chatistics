#Customize Created Functions
from API.upload.upload import parsefile
from API.upload.check import check
from API.dataframe.token import corpus
from API.dataframe.TXTtoCSV import dataframe
from API.dataframe.preprocessing import preProcess
from API.dataframe.insights import insights
from API.dummy.test import tempory
# from API.wordcloud.wordcloud import WordCloudfun
 
import pandas as pd
import os
from flask import Flask, jsonify, request, redirect, flash, url_for, session, g, Response, send_file, make_response
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

#Add bearer token for authentication
cors = CORS(app, resources={r"*": {"origins": "*"}})


CORS(app)

#index route
@app.route('/', methods=['GET'])
def hello():
    return "pong"

#Testing Route
@app.route('/testing', methods=['POST'])
def index():
    if request.method == 'POST': 
        file = request.files['file']
        if file.filename != '':
            file.save(file.filename)                    #Save File in Root
            if check(file.filename) == True:            #check file extension
                content=parsefile(file.filename)        #Readfile
                os.remove(file.filename)                #Remove file from root
                content=corpus(content)                 #Filter the words
                content=preProcess(content)             #Preprocess the data
                df = dataframe(content)                 #
                new_insights=insights(df)               #
                return jsonify(new_insights)   
            else:
                os.remove(file.filename) 
                print("your file is not in TXT") 
                return "wrong"
    else:
        print("Something went wrong")
        return "wrong"


#API Route
@app.route('/api/v1/dummy', methods=['GET'])
def api():
    books = tempory()
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)