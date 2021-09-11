var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_image_object="";

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(500);
        block_image_object.scaleToHeight(310);
        block_image_object.set({
            top:150,
            left:350
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
