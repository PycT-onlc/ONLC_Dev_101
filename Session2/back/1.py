from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
def myfront():

	return render_template("index.html")


@app.route("/back", methods = ["GET", "POST"])
def index():

	print(request.method)
	print(request.data)  # все данные из post-запроса тут.
	print(request.values)  # все данные из get-запроса либо переданные post'ом из формы тут 

	return "<h1>hi</h1><br>{}<hr>{}".format(request.method, request.values)

app.run(debug = True, host = "localhost", port = "3000")

