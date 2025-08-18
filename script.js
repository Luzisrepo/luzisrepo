const video = document.createElement("video");
const videoList = [""];
const rndNum = Math.floor(Math.random() * videoList.length);
video.src = videoList[rndNum];
video.crossOrigin = "anonymous";
video.loop = true;
video.muted = true;
video.play();

// WEBGL BOOTSTRAP TWGL.js
const glcanvas = document.getElementById("canvas");
const gl = glcanvas.getContext("webgl2");

const programInfo = twgl.createProgramInfo(gl, [
"vertexShader",
"fragmentShader"]);


const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  texcoord: { numComponents: 2, data: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1] } };


const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
const textures = twgl.createTextures(gl, {
  video: { src: video, min: gl.LINEAR, wrap: [gl.REPEAT, gl.REPEAT] } });


// RENDER LOOP
const render = time => {
  twgl.resizeCanvasToDisplaySize(gl.canvas, 1.0);

  if (video.readyState >= video.HAVE_CURRENT_DATA) {
    gl.bindTexture(gl.TEXTURE_2D, textures.video);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
  }

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, {
    u_time: time * 0.001,
    u_video: textures.video,
    u_resolution: [gl.canvas.width, gl.canvas.height] });

  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
};

// DOM READY
window.addEventListener("DOMContentLoaded", event => {
  requestAnimationFrame(render);
});