window.onload = () => {
    const canvas = document.querySelector("canvas");
    const audio = document.querySelector("audio");

    canvas.width = 300;
    canvas.height = 300;
    
    var cont = canvas.getContext("2d");
    let imageObj = new Image();
    imageObj.onload = () => {
        cont.drawImage(imageObj, 0, 0);
        cont.fillStyle = "red";
        cont.font = "40px Calibri";
        cont.fillText("My Text!", 70, 150);
    };
    imageObj.src = "https://picsum.photos/300";
}





