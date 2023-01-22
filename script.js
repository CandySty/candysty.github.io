const message = document.querySelector("#message")
const fileButton = document.querySelector("#file")
const img = document.querySelector("#img")
const synth = window.speechSynthesis

fileButton.addEventListener("change", event => loadFile(event))
img.addEventListener("load", () => userImageUploaded())

const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function loadFile(event) {
  img.src = URL.createObjectURL(event.target.files[0])
}

function userImageUploaded() {
  message.innerHTML = "Image was loaded!"
  classifier.classify(img, (err, results) => {
    console.log(results);
    message.innerHTML = `Aku Tebak itu ${results[0].label}!`
    text = `Aku tebak itu ${results[0].label}`
    synth.speak(new SpeechSynthesisUtterance(text))
  })
  
}

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!')
  message.innerHTML = "Aku akan menebak gambarnya!"
}