<template>
  <div class="container">
    <canvas class="webgl"></canvas>
    <div class="loading-bar"></div>
    <div class="loading-bar__background"></div>
    <div class="point point-0">
      <div class="label">1</div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur elit. Repellendus nulla veritatis
        molestiae, eum rerum placeat
      </div>
    </div>
    <div class="point point-1">
      <div class="label">2</div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur elit. Repellendus nulla veritatis
        molestiae, eum rerum placeat
      </div>
    </div>
    <div class="point point-2">
      <div class="label">3</div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur elit. Repellendus nulla veritatis
        molestiae, eum rerum placeat
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { Raycaster } from "three";
export default {
  name: "ThreeHeader",
  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    renderScene() {
      this.renderer.render(this.scene, this.camera);
    },
    init() {
      /**
       * Loaders
       */
      let sceneReady = false;
      const loadingBarElement = document.querySelector(".loading-bar");
      const loadingBarElement2 = document.querySelector(
        ".loading-bar__background"
      );
      const loadingManager = new THREE.LoadingManager(
        // Loaded
        () => {
          // Wait a little
          window.setTimeout(() => {
            // Animate overlay
            gsap.to(overlayMaterial.uniforms.uAlpha, {
              duration: 3,
              value: 0,
              delay: 1,
            });

            // Update loadingBarElement
            loadingBarElement.classList.add("ended");
            loadingBarElement.style.transform = "";
            loadingBarElement2.classList.add("ended");
            loadingBarElement2.style.transform = "";
          }, 500);

          window.setTimeout(() => {
            sceneReady = true;
          }, 2000);
        },

        // Progress
        (itemUrl, itemsLoaded, itemsTotal) => {
          // Calculate the progress and update the loadingBarElement
          const progressRatio = itemsLoaded / itemsTotal;
          loadingBarElement.style.transform = `scaleX(${progressRatio})`;
        }
      );
      const gltfLoader = new GLTFLoader(loadingManager);
      //   const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);
      /**
       * Base
       */
      // Debug
      const debugObject = {};

      // Canvas
      const canvas = document.querySelector("canvas.webgl");

      // Scene
      const scene = new THREE.Scene();

      /**
       * Overlay
       */
      const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1);
      const overlayMaterial = new THREE.ShaderMaterial({
        wireframe: true,
        transparent: true,
        uniforms: {
          uAlpha: { value: 1 },
        },
        vertexShader: `
          void main()
          {
              gl_Position = vec4(position, 1.0);
          }
      `,
        fragmentShader: `
          uniform float uAlpha;

          void main()
          {
              gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
          }
      `,
      });
      const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
      scene.add(overlay);

      /**
       * Update all materials
       */
      const updateAllMaterials = () => {
        scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshStandardMaterial
          ) {
            // child.material.envMap = environmentMap
            child.material.envMapIntensity = debugObject.envMapIntensity;
            child.material.needsUpdate = true;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
      };

      /**
       * Environment map
       */
      //   const environmentMap = cubeTextureLoader.load([
      //     "threejs-models/environmentMaps/0/px.jpg",
      //     "threejs-models/environmentMaps/0/nx.jpg",
      //     "threejs-models/environmentMaps/0/py.jpg",
      //     "threejs-models/environmentMaps/0/ny.jpg",
      //     "threejs-models/environmentMaps/0/pz.jpg",
      //     "threejs-models/environmentMaps/0/nz.jpg",
      //   ]);

      //   environmentMap.encoding = THREE.sRGBEncoding;

      //   scene.background = environmentMap;
      //   scene.environment = environmentMap;

      //   debugObject.envMapIntensity = 2.5;
      //MATERIAL
      const newMaterial = new THREE.MeshBasicMaterial({
        color: "white",
        wireframe: true,
      });
      //MODELS

      gltfLoader.load("threejs-models/cactus.gltf", (gltf) => {
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        // gltf.scene.children[0].material = newMaterial;
        console.log(newMaterial);
        gltf.scene.children[0].position.y = 4;

        scene.add(gltf.scene);
        updateAllMaterials();
        const cactus = scene.getObjectByName("Cube");
        cactus.position.y = -12;
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.x = 2;
      pointLight.position.y = 3;
      pointLight.position.z = 4;
      scene.add(pointLight);

      // gltfLoader.load("threejs-models/DIORAMA1/diorama1.gltf", (gltf) => {
      //   // gltf.scene.scale.set(2.5, 2.5, 2.5);
      //   gltf.scene.scale.set(0.3, 0.3, 0.3);
      //   gltf.scene.rotation.y = Math.PI * 0.25;
      //   scene.add(gltf.scene);

      //   updateAllMaterials();
      // });

      //RAYCASTER
      const raycaster = new Raycaster();

      //POINTS OF INTEREST
      const points = [
        {
          position: new THREE.Vector3(1.55, 0.2, -0.6),
          element: document.querySelector(".point-0"),
        },
        {
          position: new THREE.Vector3(0.5, 0.8, -1.6),
          element: document.querySelector(".point-1"),
        },
        {
          position: new THREE.Vector3(1.6, -1.3, -0.7),
          element: document.querySelector(".point-2"),
        },
      ];

      /**
       * Sizes
       */
      const sizes = {
        width: window.innerWidth * 0.5,
        height: window.innerHeight,
        // width: 400,
        // height: 400,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth * 0.5;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      // Base camera
      const camera = new THREE.PerspectiveCamera(
        70,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.set(4, 4, 4);
      camera.lookAt(0, 0, 0);
      scene.add(camera);

      // Controls
      const controls = new OrbitControls(camera, canvas);
      controls.target.set(0, 0.75, 0);
      controls.enableDamping = true;

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.physicallyCorrectLights = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 3;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      /**
       * Animate
       */
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        console.log(elapsedTime);

        // Update controls
        // controls.update();

        if (sceneReady) {
          const cactus = scene.getObjectByName("Cube");
          cactus.rotation.y = 0.5 * elapsedTime;

          // GO THROUGH EACH POINT OF POINTS ARRAY
          for (const point of points) {
            const screenPosition = point.position.clone();

            screenPosition.project(camera);

            raycaster.setFromCamera(screenPosition, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length === 0) {
              point.element.classList.add("visible");
            } else {
              const intersectionDistance = intersects[0].distance;
              const pointDistance = point.position.distanceTo(camera.position);

              if (intersectionDistance < pointDistance) {
                point.element.classList.remove("visible");
              } else {
                point.element.classList.add("visible");
              }
            }

            // const translateX = screenPosition.x * sizes.width * 0.5;
            // const translateY = -screenPosition.y * sizes.height * 0.5;
            const translateX = screenPosition.x * sizes.width * 0.5;
            const translateY = -screenPosition.y * sizes.height * 0.5;
            point.element.style.transform =
              "translateX(" +
              translateX +
              "px) translateY(" +
              translateY +
              "px)";
          }
        }

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.webgl {
  width: clamp(200px, 100%, 600px) !important;
  z-index: -1;
  outline: none;
  background: none;
}
.loading-bar {
  position: fixed;
  top: 50%;
  width: 100%;
  height: 2px;
  background: #ffffff;
  transform: scaleX(0.3);
  transform-origin: top left;
  transition: transform 0.5s;
  z-index: 3;
  &.ended {
    transform: scaleX(0);
    transform-origin: 100% 0;
    transition: transform 1.5s ease-in-out;
  }

  &__background {
    background-color: $base-color;
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0 0 0 0;
    z-index: 2;

    &.ended {
      opacity: 0;
      transform: scaleX(0);
      transform-origin: 100% 0;
      transition: transform, opacity 1.5s ease-in-out;
    }
  }
}

.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 0.2s ease;
}

.point:hover .text {
  opacity: 1;
}

.point.visible .label {
  transform: scale(1);
}

.label {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
  cursor: pointer;
  transform: scale(0);
}

.text {
  position: absolute;
  top: 60px;
  left: -100px;
  width: 240px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10%;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}
</style>
