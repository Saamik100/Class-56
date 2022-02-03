function Change_Color() {
document.getElementById("Paragraph").style.color="yellow"
document.getElementById("Paragraph").style.fontSize= "50px"
}
var index=0
function Change_Image(){
    var image = ["Image_1.jpg", "Image_2.jpg", "Image_3.jpg", "Image_4.jpg", "Image_5.jpg"]
  
document.getElementById("Image1").src= image[index]
index++
if(index>5){
index=0;

}

}