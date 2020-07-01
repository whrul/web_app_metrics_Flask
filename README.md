# Web application <br> in Flask with tracking and reporting website traffic
## Author: Walerij Hrul

### About work:
The application is a single page website associated with the web analytics services.
Additional events for analysis goals added on the application side detect:
- moving to sections on the page by using navbar links
- scrolling to certain part of the page - section2
- being on the web site more than 1 minute

### Under the work:
- micro web framework: **Flask 1.1.2** / **Python3**  
- web template engine: **Jinja2**
- web analytics services: **Google Analytics** and **Yandex.Metrica**
- CSS framework: **Bootstrap4**
- **jQuery**

### How to run the application:
1. use file *requirements.txt* for installing needed modules
2. run app:
   - for Linux and Mac:<br>
    *$ export FLASK_APP=app*<br>
    *$ export FLASK_ENV=development*<br>
    *$ flask init-db*<br>
    *$ flask run*<br>
   - for Windows cmd:<br>
    *> set FLASK_APP=app*<br>
    *> set FLASK_ENV=development*<br>
    *> flask init-db*<br>
    *> flask run*<br>

### Examples of analysis:
* **Google Analytics**<br>
    - Statistics:<br>
![analysis1](results/statisticsG.png)<br>
    - Goals:<br>
![analysis2](results/goalsG.png)<br>
* **Yandex.Metrica**<br>
    - Goals:<br>
![analysis3](results/goalsY.png)<br>
    - Click map:<br>
![analysis4](results/heatmap1.png)<br>
    - Scroll map<br>
![analysis5](results/heatmap2.png)<br>