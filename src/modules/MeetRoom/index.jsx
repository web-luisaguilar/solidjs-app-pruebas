import { createEffect, onMount } from 'solid-js';

let vidRef;
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
    vidRef.current.srcObject = captureStream;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}

const MeetRoom = () => {
  startCapture();
  return (
    <div>
      <h1>MeetRoom</h1>
      <video ref={vidRef} autoplay width={900} height={600}></video>
    </div>
  );
};

export default MeetRoom;
