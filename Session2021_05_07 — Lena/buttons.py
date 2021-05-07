from flask import Flask, render_template, request;

app = Flask(__name__);

@app.route("/", methods=["POST", "GET"])
@app.route("/index")
def index():
	if request.method == "POST":
		data = request.form #объект, формируемый фласком. 
		print(data)

	return render_template("index.html", data=data);


def main():

    app.run(debug = True, host = "0.0.0.0", port = "5001");

    return True;


if __name__ == "__main__":
    main();