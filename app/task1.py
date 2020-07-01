from flask import (
    Blueprint, render_template
)

bp = Blueprint('task1', __name__, url_prefix='/')

from app.db import get_db

@bp.route('/')
def index():
    # get articles from db
    db = get_db()
    articles = db.execute(
        'SELECT id, title, content'
        ' FROM articles'
        ' LIMIT 3'
    ).fetchall()
    return render_template('task1/index.html', articles=articles)