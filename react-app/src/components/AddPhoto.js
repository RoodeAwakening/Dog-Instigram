import Webcam from "webcam-easy";


const photoPage = () => {


const addPhoto = () => {
  const webcamElement = document.getElementById("webcam");
  const canvasElement = document.getElementById("canvas");
  const snapSoundElement = document.getElementById("snapSound");
  const webcam = new Webcam(
    webcamElement,
    "user",
    canvasElement,
    snapSoundElement
  );
  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });
  if (
    "mediaDevices" in navigator &&
    "getUserMedia" in navigator.mediaDevices
  ) {
    console.log("Let's get this party started");
  }
  navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  var picture = webcam.snap();
};

return (
<div>

  {/* THESE ARE FOR THE MODAL - PLEASE REMOVE THEM AND ADD THEM THERE
  THE FUNCTIONALITY FOR THEM IS ABOVE - IT WILL NEED TO BE MOVED ALSO */}
  <div>
            <button id="add-photo" onClick={addPhoto} >
              <i class="fal fa-camera-alt"></i>
            </button>
          </div>
<video id="webcam" autoplay playsinline width="640" height="480"></video>
<canvas id="canvas" class="d-none"></canvas>
<audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio>
<div id='snapShot'></div>
  </div>
  )

}