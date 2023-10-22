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
  portfolioGallery();
  init3D();
});

function portfolioGallery() {
  const portfWrapp = document.querySelector('.portfolio-wrap');
  document.querySelector('.btnnext-portfolio').addEventListener('click', () => {
    gsap.to(portfWrapp, { xPercent: -50, duration: 0.5 });
  });
  document.querySelector('.btnprev-portfolio').addEventListener('click', () => {
    gsap.to(portfWrapp, { xPercent: 0, duration: 0.5 });
  });
}

function newsGallery() {
  const wrapper = document.querySelector('.wrapp');
  const boxes = gsap.utils.toArray('.box');
  const loop = horizontalLoop(boxes, { paused: true, paddingRight: 4, draggable: true });

  document
    .querySelector('.btnnext')
    .addEventListener('click', () => loop.next({ duration: 0.4, ease: 'power1.inOut' }));
  document
    .querySelector('.btnprev')
    .addEventListener('click', () => loop.previous({ duration: 0.4, ease: 'power1.inOut' }));

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      timeOffset = 0,
      container =
        center === true
          ? items[0].parentNode
          : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 +
              gsap.getProperty(el, 'xPercent')
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i) => xPercents[i],
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth : 0;
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels['label' + i] + (tl.duration() * widths[i]) / 2 / totalWidth - timeOffset
            );
          });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0
          )
            .fromTo(
              item,
              { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
              {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond
            )
            .add('label' + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      proxy;
    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener('resize', () => refresh(true));
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof Draggable === 'function') {
      proxy = document.createElement('div');
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeX,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);
      typeof InertiaPlugin === 'undefined' &&
        console.warn(
          'InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club'
        );
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: 'x',
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: syncIndex,
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    return tl;
  }
}

function init3D() {
  gsap.registerPlugin(ScrollTrigger);

  // 3d
  let camera, scene, renderer;
  let mixers = [];
  let controls;
  let directionalLight, directionalLight2;
  let isMobile, desktop, device;

  let importedCamera = null;
  let animationPercent = 0;
  let totalFrame = 750;
  let fps = 25;

  let scrollBarElement = 0;
  let globalPerc = 0;
  let glassThing, cylinder;

  const frustumSize = 0.18;
  const aspect = window.innerWidth / window.innerHeight;

  //* MOBILE CHECK */
  isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  if (isMobile.any()) {
    desktop = false;
    device = 'mobile';
  } else {
    desktop = true;
    device = 'desktop';
  }

  console.log('device: ' + device);

  window.scrollTo(0, 0);

  init();

  function init() {
    console.log('---3D init');
    const gui = new dat.GUI();

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

    const image4 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319bf1a64f5e5f8bc368b6_illu_portfolio%401%2C5x.jpg'
    );
    image4.colorSpace = THREE.SRGBColorSpace;
    // image4.flipY = false;

    const image5 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/65319e9a7dccba83839abd0c_illu_news%401%2C5x.jpg'
    );
    image5.colorSpace = THREE.SRGBColorSpace;

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
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653568583ca73a3760379edb_model23.glb.txt',

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
          thickness: 0.086,
          ior: 1.23,
          clearcoat: 1,
          // envMap: environmentMap,
          envMapIntensity: 1.5,
        };

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
                  glassThing.rotation.z -= 0.04;
                },
              },
            });
            gsap.to(glassThing.rotation, {
              scrollTrigger: {
                trigger: '.start2',
                start: 'top top',
                end: () => '+=200%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.03;
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
          if (child.name === 'top_image4') {
            const top_image4 = scene.getObjectByName('top_image4');
            top_image4.material = new THREE.MeshBasicMaterial();
            top_image4.material.map = image4;
          }
          if (child.name === 'top_image5') {
            const top_image5 = scene.getObjectByName('top_image5');
            top_image5.material = new THREE.MeshBasicMaterial();
            top_image5.material.map = image5;
          }
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

    // function onLightUpdate() {
    //   directionalLight.position.x = lightOptions.posX;
    //   directionalLight.position.y = lightOptions.posY;
    //   directionalLight.position.z = lightOptions.posZ;
    // }

    // const lightOptions = {
    //   posX: 0.2,
    //   posY: 0.1,
    //   posZ: -0.5,
    // };

    // gui.add(lightOptions, 'posX', -2, 2, 0.1).onChange(onLightUpdate);
    // gui.add(lightOptions, 'posY', -2, 2, 0.1).onChange(onLightUpdate);
    // gui.add(lightOptions, 'posZ', -2, 2, 0.1).onChange(onLightUpdate);

    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(0.2, 0.1, -0.5);
    // directionalLight.position.set(lightOptions.posX, lightOptions.posY, lightOptions.posZ);
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

    let mouseTolerance = 0.5;
    if (desktop === true) {
      document.onmousemove = function (e) {
        let centerX = window.innerWidth * 0.5;
        let centerY = window.innerHeight * 0.5;

        if (glassThing) {
          // glassThing.position.y = ((e.clientX - centerX) / centerX) * 0.004 * mouseTolerance;
          // glassThing.position.x = ((e.clientY - centerY) / centerY) * 0.005 * mouseTolerance;

          glassThing.rotation.y = ((e.clientX - centerX) / centerX) * 0.7;
          glassThing.rotation.x = ((e.clientY - centerY) / centerY) * 0.5;
        }
      };
    }

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

  // const tl = gsap.timeline({});
  // ScrollTrigger.create({
  //   trigger: '.start2',
  //   animation: tl,
  //   start: 'top top',
  //   end: () => '+=150%',
  //   scrub: true,
  // });
  // tl.to(directionalLight.color, { r: 1, g: 0, b: 0 });
  // tl.to(directionalLight, { intensity: 3 }, '<');
  // tl.to(directionalLight2.color, { r: 1, g: 0, b: 0 }, '<');
  // tl.to(directionalLight2, { intensity: 2 }, '<');

  // tl.to(directionalLight.color, { r: 0, g: 0, b: 1 });
  // tl.to(directionalLight, { intensity: 3 }, '<');
  // tl.to(directionalLight2.color, { r: 0, g: 0, b: 1 }, '<');
  // tl.to(directionalLight2, { intensity: 2 }, '<');

  function scrollbarElementInit() {
    scrollBarElement = Scrollbar.init(document.querySelector('.wrapscroll'), {
      continuousScrolling: false,
      alwaysShowTracks: true,
      damping: 0.02,
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
      cylinder.rotation.x -= 0.01;
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
