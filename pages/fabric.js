import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { jsPDF } from "jspdf";
import './style.css';

const App = () => {
    const [canvas, setCanvas] = useState('');

    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    const initCanvas = () => (                                  //Workdesk
        new fabric.Canvas('canvas', {
            preserveObjectStacking:true,
            height: 800,
            width: 800,
            backgroundColor: 'pink'
        })
    )

    const addRect = canvi => {                                  //Button rect
        console.log('button works!');
        const rect = new fabric.Rect({
            height: 280,
            width: 200,
            fill: 'yellow'
        });
        canvi.add(rect);
        canvi.renderAll();
    }

    const deleteObject = function() {                           //Button delete
        canvas.getActiveObjects().forEach((obj) => {
            canvas.remove(obj)
          });
      }

    const addImage = function() {                               //Button Image
        fabric.Image.fromURL('http://atelierdudealer.fr/images/logo-dealer.png',function(img) {
        img.crossOrigin = 'anonymous';
        img.scale(0.05).set({opacity: 1});
        canvas.add(img);
        canvas.renderAll();
    });
    }
/*
    if (typeof document !== 'undefined') {
        var user_picture = document.getElementById("imgLoader");
        user_picture.onchange = function(){
            var reader = new FileReader();
            reader.onload = function (event){
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    var image = new fabric.Image(imgObj);
                    canvas.add(image);
                }
            }
            canvas.renderAll();
        }
    }
*/

    if (typeof document !== 'undefined') {
        document.getElementById('imgLoader').onchange = function handleImage(e) {
            var reader = new FileReader();
            reader.onload = function (event) { console.log('fdsf');
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    // start fabricJS stuff
                    
                    var image = new fabric.Image(imgObj);
                    /*Simage.set({
                        left: 250,
                        top: 250,
                        angle: 20,
                        padding: 10,
                        cornersize: 10
                    });*/
                    //image.scale(getRandomNum(0.1, 0.25)).setCoords();
                    canvas.add(image);
                    
                    // end fabricJS stuff
                }
                
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }




    const changeOpacity = function() {                          //Button opacity
        canvas.getActiveObjects().forEach((obj) => {
            if (obj) {
            let semi_op = (obj.opacity == 1) ? 0.5 : 1;         //Switch opacity to 0.5 or 1
            obj.set({opacity : semi_op});
            }
        });
        canvas.renderAll();
    }

                    /* OPACITY */
    if (typeof document !== 'undefined') {
        var slide_opacity = document.getElementById("slideOpacity");        //Get slider element
        var number_opacity = document.getElementById("numberOpacity");      //Get number element

        slide_opacity.oninput = function(){                     //Opacity slider
            canvas.getActiveObjects().forEach((obj) => {
                obj.set({opacity : (this.value / 100)});
                slide_opacity.value = number_opacity.value = this.value;
            });
            canvas.renderAll();
        };

        number_opacity.oninput = function(){                    //Opacity number
            canvas.getActiveObjects().forEach((obj) => {
            obj.set({opacity : this.value / 100});
            slide_opacity.value = number_opacity.value = this.value;
            });
            canvas.renderAll();
        };
    }

    const moveTo = option => {
        canvas.getActiveObjects().forEach((obj) => {
            if (option === 'back') {
                canvas.sendBackwards(obj);
            } else {
                canvas.bringForward(obj);
            }
        });
        canvas.renderAll();
    }

    const savePDF = function(){
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();

        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
    }




    return(                                                     //HTML
        <div id="product_perso">
            <div id="test">
                <h1>Fabric.js on React - fabric.Canvas('...')</h1>
                <button onClick={() => addRect(canvas)}>Rectangle</button>
                <button onClick={() => deleteObject()}>Delete</button>
                <button onClick={() => addImage()}>Image</button>
                <button onClick={() => changeOpacity()}>Opacity</button>
                <button onClick={() => moveTo('front')}>Up</button>
                <button onClick={() => moveTo('back')}>Down</button>
                <button onClick={() => savePDF()}>Download</button>
                <input type="file" id="imgLoader"></input>
                <div>
                    Opacity : 
                    <input type="range" min="1" max="100" value="100" class="slider" id="slideOpacity"></input>
                    <input type="number" min="1" max="100" class="number" id='numberOpacity' />
                </div>
            </div>
            <div id="div_canvas">
                <canvas id="canvas" />                              {/* workdesk */}
            </div>
        </div>
    );
}

export default App;