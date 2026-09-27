from flask import render_template
from app import create_app

app = create_app()

# PASTE THE FRONTEND ROUTE HERE
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # threaded=True so concurrent requests (e.g. a concurrent brute-force
    # test) are actually handled in parallel instead of queued one at a
    # time; safe now that SQLite is in WAL mode with a busy_timeout set
    # (see app/__init__.py).
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)