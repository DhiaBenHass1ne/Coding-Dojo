from flask import Flask, render_template 
app = Flask(__name__)  

@app.route('/')          
def check():
    numx=4
    numy=8
    return render_template ('index.html', numx=numx, numy=numy)

@app.route('/4')          
def check_4():
    numx=4
    numy=4
    return render_template ('index.html', numx=numx, numy=numy)

@app.route('/<x>/<y>')          
def check_xy(x,y):
    b=0
    return render_template ('index.html', numx=int(x), numy=int(y),b=b)

@app.route('/<x>/<y>/<whitecolor>/<blackcolor>')          
def check_xy_color(x,y,whitecolor,blackcolor):
    
    return render_template ('index.html', numx=int(x), numy=int(y),whitecolor=whitecolor,blackcolor=blackcolor)


if __name__=="__main__":      
    app.run(debug=True)   
