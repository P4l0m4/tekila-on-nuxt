<template>
  <section>
    <div id="div1">
      <span class="-dots -dot1"></span>
      <span class="-dots -dot2"></span>
      <span class="-dots -dot3"></span>
      <span class="-dots -dot4"></span>
    </div>
    <div class="Google">
      <span>G</span>
      <span>o</span>
      <span>o</span>
      <span>g</span>
      <span>l</span>
      <span>e</span>
    </div>
    <div id="div2">
      <span class="dots dot1"></span>
      <span class="dots dot2"></span>
      <span class="dots dot3"></span>
      <span class="dots dot4"></span>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
* {
  margin: 0;
  padding: 0;
}
:root {
  --blue: #4284f4;
  --red: #eb4236;
  --yellow: #fcbc05;
  --green: #34a854;
  --size: 40px;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
#div1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#div2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.-dots {
  width: var(--size);
  height: var(--size);
  background-color: #678eb0;
  border-radius: 50%;
  margin: 5px 40px;
  animation: moveup 1.2s ease-in-out infinite alternate;
}
@keyframes moveup {
  to {
    transform: translateY(-25vh);
  }
}
.dots {
  width: var(--size);
  height: var(--size);
  background-color: #678eb0;
  border-radius: 50%;
  margin: 5px 40px;
  animation: movedown 1.2s ease-in-out infinite alternate;
}
@keyframes movedown {
  to {
    transform: translateY(25vh);
  }
}
.-dot1 {
  background-color: var(--blue);
  animation-delay: 0.6s;
}
.-dot2 {
  background-color: var(--red);
  animation-delay: 0.8s;
}
.-dot3 {
  background-color: var(--yellow);
  animation-delay: 1s;
}
.-dot4 {
  background-color: var(--green);
  animation-delay: 1.2s;
}
.dot1 {
  background-color: var(--blue);
  animation-delay: 0.6s;
}
.dot2 {
  background-color: var(--red);
  animation-delay: 0.8s;
}
.dot3 {
  background-color: var(--yellow);
  animation-delay: 1s;
}
.dot4 {
  background-color: var(--green);
  animation-delay: 1.2s;
}
.Google {
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  width: 100%;
  text-align: center;
}
.Google span {
  margin-right: -22px;
}
.Google span:nth-child(1) {
  color: var(--blue);
  font-size: 6.2rem;
}
.Google span:nth-child(2) {
  color: var(--red);
}
.Google span:nth-child(3) {
  color: var(--yellow);
}
.Google span:nth-child(4) {
  color: var(--blue);
}
.Google span:nth-child(5) {
  color: var(--green);
}
.Google span:nth-child(6) {
  color: var(--red);
}
</style>
