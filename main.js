Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function captureImage() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img src="' + data_url + '" id="capture_image">';
    });
}
console.log("ml5verion=", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-jOOPAEav/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence;
    }
}

