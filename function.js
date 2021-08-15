var img=["me.jpg", "gramma.jpg", "ma.jpg", "da.jpg", "Niriselfie.jpg"];
var names=["Neehaara","Chandrika", "Ceema", "Rajith", "Niranjan"];
var i=0;
function update(){
var number_of_family_member=5;
if(i>number_of_family_member){
    i=0;
}
var new_img=img[i];
var new_name=names[i];
document.getElementById("image").src=new_img;
document.getElementById("name_of_family_member").innerHTML=new_name;
i++;
}