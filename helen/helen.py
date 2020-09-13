from flask import Flask, render_template, request;

app = Flask(__name__);

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html");

def main():

    app.run(debug = False, host = "0.0.0.0", port = "5001");

    return True;

if __name__ == "__main__":
    main();