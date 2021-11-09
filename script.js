const objArr = [
    {
        imgSrc:"https://picsum.photos/id/10/300",
        fillStyle:"blue",
        fillText:"Some Text"
    },
    {
        imgSrc:"https://picsum.photos/id/100/300",
        fillStyle:"white",
        fillText:"A Text"
    },
];

window.onload = () => {
    
    const canvas = document.querySelector("canvas");
    const audio = document.querySelector("audio");

    canvas.width = 300;
    canvas.height = 300;
    
    var cont = canvas.getContext("2d");
    let imageObj = new Image();
            console.log("ds");
            cont.fillRect(0, 0, 300, 300);
            cont.drawImage(imageObj, 0, 0);
            cont.fillStyle = objArr[0].fillStyle;
            cont.font = "40px Calibri";
            cont.fillText(objArr[0].fillText, 70, 150);
        imageObj.src = objArr[0].imgSrc;
    

    setTimeout(()=>{
            console.log("sfsa");
            cont.fillRect(0, 0, 300, 300);
            cont.drawImage(imageObj, 0, 0);
            cont.fillStyle = objArr[1].fillStyle;
            cont.font = "40px Calibri";
            cont.fillText(objArr[1].fillText, 70, 150);
        imageObj.src = objArr[1].imgSrc;
    }, 5000);
}
    

    // let imageObj = new Image();
    // imageObj.onload = () => {
    //     cont.drawImage(imageObj, 0, 0);
    //     cont.fillStyle = "red";
    //     cont.font = "40px Calibri";
    //     cont.fillText("My Text!", 70, 150);
    // };
    // imageObj.src = "https://picsum.photos/id/10/300";





