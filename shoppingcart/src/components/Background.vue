<template>
  <div class="stripes">
    <span></span><span></span><span></span><span></span><span></span>
  </div>
</template>

<style scoped>
.stripes {
  position: absolute;
  background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  height: 45vh;
  width: 100vw;
  display: -webkit-box;
  display: flex;
  -webkit-transform: skewY(-10deg);
  transform: skewY(-10deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
}
.stripes span {
  height: 175px;
  width: 33.33333%;
}
.stripes span:nth-child(1) {
  background: #53f;
  left: -16%;
  top: 50px;
  position: relative;
}
.stripes span:nth-child(2) {
  background: #4553ff;
  left: -16%;
  top: 50px;
  position: relative;
}
.stripes span:nth-child(3) {
  background: #4f40ff;
  left: -16%;
  top: 50px;
  position: relative;
}
.stripes span:nth-child(4) {
  background: #25ddf5;
  position: absolute;
  bottom: 150px;
  right: 0;
}
.stripes span:nth-child(5) {
  background: #1fa2ff;
  position: absolute;
  bottom: 0;
}
</style>
