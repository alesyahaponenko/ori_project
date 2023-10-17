import * as dat from 'dat.gui';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('work dev');
  newsGallery();
  init3D();
});

function newsGallery() {
  // console.log(gsap);
}

function init3D() {
  gsap.registerPlugin(ScrollTrigger);

  // 3d
  let camera, scene, renderer;
  let mixers = [];
  let controls;
  let cube_refr2;
  let directionalLight, directionalLight2;

  let importedCamera = null;
  let animationPercent = 0;
  let totalFrame = 750;
  let fps = 25;

  let scrollBarElement = 0;
  let globalPerc = 0;
  let glassThing, cylinder;

  let mouse = {
    x: 0,
    y: 0,
  };
  const frustumSize = 0.18;
  const aspect = window.innerWidth / window.innerHeight;

  init();

  function init() {
    console.log('---3D init');

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xff0000);

    // camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000);
    camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      100
    );
    camera.position.z = 3;

    const textureLoader = new THREE.TextureLoader();
    const image1 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652d83c05a83161b15eea379_image1.jpg'
    );
    image1.colorSpace = THREE.SRGBColorSpace;
    image1.flipY = false;

    const image2 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e70e37de52b4add32a442_image2.png'
    );
    image2.colorSpace = THREE.SRGBColorSpace;
    image2.flipY = false;

    const image3 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e85a095eba48fa03bfbb4_image3%401%2C5x.jpg'
    );
    image3.colorSpace = THREE.SRGBColorSpace;
    image3.flipY = false;

    const environmentMap = textureLoader.load(
      'https://uploads-ssl.webflow.com/64d1b088ae1023bd1808920b/64d3c2368c7c50fd2896c33e_2.jpg'
    );
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    environmentMap.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.BoxGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      color: 0xf2f2f2,
    });
    // material.map = environmentMap;
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Load a glTF resource
    let loader = new GLTFLoader();
    THREE.ImageUtils.crossOrigin = '';
    loader.crossOrigin = true;
    let dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      // resource URL
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652e9d66906d83daae04a6a1_model17.glb.txt',

      function (gltf) {
        scene.add(gltf.scene);

        // console.log(gltf.scene);

        const model = gltf.scene;
        const { animations } = gltf;

        // Material
        // const glassMaterial = new THREE.MeshPhysicalMaterial({
        //   reflectivity: 0.5,
        //   roughness: 0,
        //   transmission: 1.5,
        //   thickness: 1.8,
        //   ior: 1.7,
        //   clearcoat: 1,
        //   sheenRoughness: 1,
        //   envMap: environmentMap,
        //   envMapIntensity: 1.2,
        // });

        /**
         * Debug
         */
        function onMaterialUpdate() {
          glassMaterial.reflectivity = options.reflectivity;
          glassMaterial.roughness = options.roughness;
          glassMaterial.transmission = options.transmission;
          glassMaterial.thickness = options.thickness;
          glassMaterial.ior = options.ior;
          glassMaterial.clearcoat = options.clearcoat;
          glassMaterial.sheenRoughness = options.sheenRoughness;
          glassMaterial.envMapIntensity = options.envMapIntensity;
          glassMaterial.needsUpdate = true;
        }

        const options = {
          materialColor: '#FFFFFF',
          sheenRoughness: 0.5,
          reflectivity: 0.5,
          roughness: 0.1,
          transmission: 1.03,
          thickness: 0.03,
          ior: 1.42,
          clearcoat: 1,
          // envMap: environmentMap,
          envMapIntensity: 1.5,
        };

        const gui = new dat.GUI();

        gui.add(options, 'reflectivity', 0, 3, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'sheenRoughness', 0, 3, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'roughness', 0, 1, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'transmission', 0, 2, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'thickness', 0, 0.2, 0.001).onChange(onMaterialUpdate);
        gui.add(options, 'ior', 0, 3, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'clearcoat', 0, 3, 0.01).onChange(onMaterialUpdate);
        gui.add(options, 'envMapIntensity', 0, 10, 0.01).onChange(onMaterialUpdate);
        gui.close();
        const glassMaterial = new THREE.MeshPhysicalMaterial({
          sheenRoughness: options.sheenRoughness,
          reflectivity: options.reflectivity,
          roughness: options.roughness,
          transmission: options.transmission,
          thickness: options.thickness,
          ior: options.ior,
          clearcoat: options.clearcoat,
          envMap: environmentMap,
          envMapIntensity: options.envMapIntensity,
        });

        gltf.scene.traverse(function (child) {
          // console.log(child);

          if (child.name === 'cameraBlender') {
            importedCamera = scene.getObjectByName('cameraBlender');
            // console.log('------3D ' + child.name + ' found on ' + gltf.scene.name);
          }

          if (child.name === 'bg_full') {
            const bg_full = scene.getObjectByName('bg_full');
            bg_full.visible = false;
            bg_full.material = new THREE.MeshBasicMaterial({
              color: '#fafafa',
            });
            // console.log('------3D ' + child.name + ' found on ' + gltf.scene.name);
          }
          if (child.name === 'glassThing') {
            glassThing = scene.getObjectByName('glassThing');
            glassThing.material = glassMaterial;
            glassThing.material.side = THREE.DoubleSide;

            gsap.to(glassThing.rotation, {
              scrollTrigger: {
                trigger: '.wrapscroll',
                start: 'top top',
                end: () => '+=150%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.05;
                },
              },
            });
            gsap.to(glassThing.rotation, {
              scrollTrigger: {
                trigger: '.start2',
                start: 'top top',
                end: () => '+=300%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.05;
                },
              },
            });
          }

          if (child.name === 'Cylinder') {
            cylinder = scene.getObjectByName('Cylinder');
            cylinder.material = glassMaterial;
          }
          if (child.name === 'top_image1') {
            const top_image1 = scene.getObjectByName('top_image1');
            top_image1.material = new THREE.MeshBasicMaterial();
            top_image1.material.map = image1;
          }
          if (child.name === 'top_image2') {
            const top_image2 = scene.getObjectByName('top_image2');
            top_image2.material = new THREE.MeshBasicMaterial();
            top_image2.material.map = image2;
          }
          if (child.name === 'top_image3') {
            const top_image3 = scene.getObjectByName('top_image3');
            top_image3.material = new THREE.MeshBasicMaterial();
            top_image3.material.map = image3;
          }
          // if (child.name === 'top_image5') {
          //   const top_image3 = scene.getObjectByName('top_image5');
          //   top_image3.material = new THREE.MeshBasicMaterial();
          //   top_image3.material.map = image3;
          //   top_image3.material.transparent = true;
          //   top_image3.material.opacity = 0.5;
          // }
          if (child.name === 'cube_refr2') {
            cube_refr2 = scene.getObjectByName('cube_refr2');
            cube_refr2.material = new THREE.MeshBasicMaterial({
              // side: THREE.BackSide,
              side: THREE.DoubleSide,
              envMap: image1,
              map: image1,
              color: 0xff0000,
            });
          }

          // if (child.name === 'pagota1') {
          //   pagota = scene.getObjectByName('pagota1');
          //   pagota.material.side = THREE.DoubleSide;
          //   //                     console.log('------3D ' + child.name + " found on " + gltf.scene.name)
          // }
        });

        var mixer = new THREE.AnimationMixer(model);
        mixers.push(mixer);

        animations.forEach(function (clip) {
          mixer.clipAction(clip).play();
        });
        // var action = mixer.clipAction(animation);
        // action.play();

        animate();
        // loaded3D = true;
      },
      // called while loading is progressing
      function (xhr) {
        globalPerc = (xhr.loaded / 5736000) * 100;
        if (globalPerc > 99.99) {
          console.log('globalPerc ' + globalPerc + '% loaded');
        }
        // var bar = Math.floor((250 * xhr.loaded) / xhr.total);
        // var loadbar = document.getElementById('bar');
        // loadbar.style.width = bar + 'px';
      },
      function (error) {
        // console.log(error);
      }
    );

    const viewport = document.querySelector('[data-3d="c"]');
    // console.log(viewport);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    viewport.appendChild(renderer.domElement);

    /**
     * Lights
     */
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x080808, 2.2);
    scene.add(hemisphereLight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(0.2, 0.1, -0.5);
    scene.add(directionalLight);

    directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.castShadow = true;
    directionalLight2.shadow.mapSize.set(1024, 1024);
    directionalLight2.shadow.camera.far = 15;
    directionalLight2.shadow.camera.left = -7;
    directionalLight2.shadow.camera.top = 7;
    directionalLight2.shadow.camera.right = 7;
    directionalLight2.shadow.camera.bottom = -7;
    directionalLight2.position.set(-0.4, 0.1, -0.5);
    scene.add(directionalLight2);
    // gsap.to(directionalLight2.position, { x: -0.4, repeat: -1, yoyo: true, duration: 1 });

    // const helper2 = new THREE.DirectionalLightHelper(directionalLight2, 0.1);
    // scene.add(helper2);

    // const helper = new THREE.DirectionalLightHelper(directionalLight, 0.1);
    // scene.add(helper);

    // const pointLight = new THREE.PointLight(0xffffff, 2);
    // pointLight.position.set(1.2, 0, 0);
    // scene.add(pointLight);

    var mouseTolerance = 0.01;
    // if (desktop === true) {
    //   document.onmousemove = function (e) {
    //     var centerX = window.innerWidth * 0.5;
    //     var centerY = window.innerHeight * 0.5;

    //     /*
    //                     scene.rotation.y = (e.clientX - centerX) / centerX * 0.04;
    //                     scene.rotation.x = (e.clientY - centerY) / centerY * 0.05;
    //         */
    //   };
    // }
    window.addEventListener('resize', onWindowResize, false);

    scrollbarElementInit();
    scrollerProxyInit();
  }

  // Controls
  // controls = new OrbitControls(camera, viewport);
  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.target.set(0, 0, -5);
  // controls.enableDamping = true;
  // controls.update();
  function scrollerProxyInit() {
    ScrollTrigger.scrollerProxy('.wrapscroll', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBarElement.scrollTop = value;
        }
        return scrollBarElement.scrollTop;
      },
    });

    scrollBarElement.addListener(ScrollTrigger.update);

    const scroller = document.querySelector('.wrapscroll');
    ScrollTrigger.defaults({ scroller: scroller });
  }

  const tl = gsap.timeline({});
  ScrollTrigger.create({
    trigger: '.start2',
    animation: tl,
    start: 'top top',
    end: () => '+=150%',
    scrub: true,
  });
  tl.to(directionalLight.color, { r: 1, g: 0, b: 0 });
  tl.to(directionalLight, { intensity: 3 }, '<');
  tl.to(directionalLight2.color, { r: 1, g: 0, b: 0 }, '<');
  tl.to(directionalLight2, { intensity: 2 }, '<');

  tl.to(directionalLight.color, { r: 0, g: 0, b: 1 });
  tl.to(directionalLight, { intensity: 3 }, '<');
  tl.to(directionalLight2.color, { r: 0, g: 0, b: 1 }, '<');
  tl.to(directionalLight2, { intensity: 2 }, '<');

  function scrollbarElementInit() {
    scrollBarElement = Scrollbar.init(document.querySelector('.wrapscroll'), {
      continuousScrolling: false,
      alwaysShowTracks: true,
      damping: 0.04,
      renderByPixels: true,
    });
  }

  function onWindowResize() {
    console.log('resize');

    const aspect = window.innerWidth / window.innerHeight;

    camera.left = (frustumSize * aspect) / -2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    // controls.update();

    if (glassThing) {
      glassThing.rotation.z += 0.00125;
    }
    if (cylinder) {
      cylinder.rotation.x -= 0.005;
    }

    if (camera) {
      camera.position.x = importedCamera.position.x;
      camera.position.y = importedCamera.position.y;
      camera.position.z = importedCamera.position.z;
      camera.rotation.x = importedCamera.rotation.x;
      camera.rotation.y = importedCamera.rotation.y;
      camera.rotation.z = importedCamera.rotation.z;
      camera.updateProjectionMatrix();
    }

    if (scrollBarElement) {
      animationPercent =
        (100 * scrollBarElement.scrollTop) /
        (scrollBarElement.size.content.height - window.innerHeight);
      animationSecond = (animationPercent / 100) * (totalFrame / fps);
    } else {
      animationPercent = 0;
    }

    if (scrollBarElement) {
      for (const mixer of mixers) {
        mixer.setTime(animationSecond);
      }
    }

    renderer.render(scene, camera);
  }
}
