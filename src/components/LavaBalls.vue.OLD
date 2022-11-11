<template>
  <div class="lava">
    <svg class="lamp" viewBox="-21 0 100 125">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="4"
            result="color-matrix-blur"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -8"
            result="color-matrix-filter"
          ></feColorMatrix>
          <feComposite
            in="SourceGraphic"
            in2="filter"
            operator="atop"
          ></feComposite>
        </filter>
      </defs>
      <g class="gloops" filter="url(#goo)">
        <ellipse rx="10%" ry="10%" class="circle" fill="green">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="12.2s"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="10.4s"
            begin="-1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="19.4s"
            begin="-3"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(37, 11, 84, 0.8); rgb(37, 11, 84, 0.8); rgb(37, 11, 84, 0.8)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse r="10%" class="circle" fill="rgb(37, 11, 84, 0.8)">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="11.2s"
            begin="-12"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="14.1s"
            begin="-4"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="9.4s"
            begin="-5"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="10.4s"
            begin="-3"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(37, 11, 84, 0.8); yellow; rgb(37, 11, 84, 0.8)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse r="10%" class="circle" fill="yellow">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="11.7s"
            begin="-6"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="16.4s"
            begin="-9"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="7.4s"
            begin="-4"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="13.4s"
            begin="-5"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(37, 11, 84, 0.4); rgb(37, 11, 84, 0.4); rgb(37, 11, 84, 0.8)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="30" cy="18" rx="7" ry="4" fill="rgb(37, 11, 84, 0.8)" />
        <ellipse cx="30" cy="87" rx="15" ry="10" fill="rgb(37, 11, 84, 0.8)" />
      </g>
    </svg>
  </div>
</template>
<style scoped>
.lava {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  bottom: 0;
  top: 0;
}
.lamp {
  height: 100%;
  width: 100%;
}
</style>
