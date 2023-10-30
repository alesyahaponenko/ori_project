import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('work dev');
  newsGallery();
  portfolioGallery();
  init3D();
});

function portfolioGallery() {
  const portfWrapp = document.querySelector('.portfolio-wrap');
  const btnnext = document.querySelector('.btnnext-portfolio');
  const btnprev = document.querySelector('.btnprev-portfolio');
  btnnext.addEventListener('click', () => {
    gsap.to(portfWrapp, {
      // xPercent: -55,
      x: -1200,
      duration: 0.5,
      onComplete: () => {
        btnnext.style.display = 'none';
        btnprev.style.display = 'block';
      },
    });
  });
  btnprev.addEventListener('click', () => {
    gsap.to(portfWrapp, {
      // xPercent: 0,
      x: 0,
      duration: 0.5,
      onComplete: () => {
        btnnext.style.display = 'block';
        btnprev.style.display = 'none';
      },
    });
  });
}

function newsGallery() {
  gsap.registerPlugin(Observer);
  const wrapper = document.querySelector('.wrapp');
  const boxes = gsap.utils.toArray('.box');
  const loop = horizontalLoop(boxes, { paused: true, paddingRight: 4, draggable: true });

  document
    .querySelector('.btnnext')
    .addEventListener('click', () => loop.next({ duration: 0.4, ease: 'power1.inOut' }));
  document
    .querySelector('.btnprev')
    .addEventListener('click', () => loop.previous({ duration: 0.4, ease: 'power1.inOut' }));

  const animating = false;
  Observer.create({
    type: 'touch',
    target: '.collection-list-wrapper-4.w-dyn-list',
    onLeft: () => !animating && loop.next({ duration: 0.4, ease: 'power1.inOut' }),
    onRight: () => !animating && loop.previous({ duration: 0.4, ease: 'power1.inOut' }),
    tolerance: 10,
    preventDefault: true,
  });

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let { onChange } = config,
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
      { length } = items,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      { center } = config,
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
    // if (config.draggable && typeof Draggable === 'function') {
    //   proxy = document.createElement('div');
    //   let wrap = gsap.utils.wrap(0, 1),
    //     ratio,
    //     startProgress,
    //     draggable,
    //     dragSnap,
    //     lastSnap,
    //     initChangeX,
    //     align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
    //     syncIndex = () => tl.closestIndex(true);
    //   // typeof InertiaPlugin === 'undefined' &&
    //   //   console.warn(
    //   //     'InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club'
    //   //   );
    //   draggable = Draggable.create(proxy, {
    //     trigger: items[0].parentNode,
    //     type: 'x',
    //     onPressInit() {
    //       let { x } = this;
    //       gsap.killTweensOf(tl);
    //       startProgress = tl.progress();
    //       refresh();
    //       ratio = 1 / totalWidth;
    //       initChangeX = startProgress / -ratio - x;
    //       gsap.set(proxy, { x: startProgress / -ratio });
    //     },
    //     onDrag: align,
    //     onThrowUpdate: align,
    //     overshootTolerance: 0,
    //     inertia: true,
    //     snap(value) {
    //       //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
    //       if (Math.abs(startProgress / -ratio - this.x) < 10) {
    //         return lastSnap + initChangeX;
    //       }
    //       let time = -(value * ratio) * tl.duration(),
    //         wrappedTime = timeWrap(time),
    //         snapTime = times[getClosest(times, wrappedTime, tl.duration())],
    //         dif = snapTime - wrappedTime;
    //       Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
    //       lastSnap = (time + dif) / tl.duration() / -ratio;
    //       return lastSnap;
    //     },
    //     onRelease() {
    //       syncIndex();
    //       draggable.isThrowing && (indexIsDirty = true);
    //     },
    //     onThrowComplete: syncIndex,
    //   })[0];
    //   tl.draggable = draggable;
    // }
    // tl.closestIndex(true);
    // lastIndex = curIndex;
    // onChange && onChange(items[curIndex], curIndex);
    return tl;
  }
}

function init3D() {
  gsap.registerPlugin(ScrollTrigger);

  let stats;
  let camera, scene, renderer;
  let mixers = [];
  let directionalLight, directionalLight2;
  let isMobile, desktop;

  let importedCamera = null;
  let animationPercent = 0;
  let totalFrame = 750;
  let fps = 25;

  let scrollBarElement = 0;
  let globalPerc = 0;
  let glassThing, cylinder;

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
  } else {
    // desktop = true;
    desktop = false;
  }

  console.log('desktop: ' + desktop);

  let frustumSize = desktop ? 0.18 : 0.35;
  const aspect = window.innerWidth / window.innerHeight;

  window.scrollTo(0, 0);

  init();

  function init() {
    console.log('---3D init');

    scene = new THREE.Scene();
    desktop ? scene.position.set(0, 0, 0) : scene.position.set(0.1, -0.1, 0);

    camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      100
    );

    desktop ? (camera.position.z = 3) : (camera.position.z = 3);

    const textureLoader = new THREE.TextureLoader();
    const image1 = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/652d83c05a83161b15eea379_image1.jpg'
    );
    image1.colorSpace = THREE.SRGBColorSpace;
    image1.flipY = false;

    const image_cylender_bg = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e65903d2acc91d9d64c0c_cylender_bg.png'
    );
    image_cylender_bg.colorSpace = THREE.SRGBColorSpace;
    image_cylender_bg.flipY = false;

    const image_cylender_bg_alpha = textureLoader.load(
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e6880ae6bc5934492d30e_cylynder_alpha.jpg'
    );
    image_cylender_bg_alpha.colorSpace = THREE.SRGBColorSpace;
    image_cylender_bg_alpha.flipY = false;

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

    stats = new Stats();
    document.body.appendChild(stats.dom);

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
    // THREE.ImageUtils.crossOrigin = '';
    // loader.crossOrigin = true;
    let dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      // resource URL
      // 'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/6537c71dcc7971f73517c246_model26.glb.txt',
      'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e6a923d2acc91d9dbaa4f_model29.glb.txt',

      function (gltf) {
        scene.add(gltf.scene);

        const glassMaterial = new THREE.MeshPhysicalMaterial({
          sheenRoughness: 0.5,
          reflectivity: 0.5,
          roughness: 0.1,
          transmission: 1.03,
          thickness: 0.086,
          ior: 1.23,
          clearcoat: 1,
          envMap: environmentMap,
          envMapIntensity: 1.5,
        });

        gltf.scene.traverse(function (child) {
          if (child.name === 'cameraBlender') {
            importedCamera = scene.getObjectByName('cameraBlender');
            camera.position.x = importedCamera.position.x;
            camera.position.y = importedCamera.position.y;
            camera.position.z = importedCamera.position.z;
            camera.rotation.x = importedCamera.rotation.x;
            camera.rotation.y = importedCamera.rotation.y;
            camera.rotation.z = importedCamera.rotation.z;
            camera.updateProjectionMatrix();

            gsap.to(camera.position, {
              scrollTrigger: {
                trigger: '.wrapscroll',
                start: 'top top',
                end: () => '+=500%',
                scrub: true,
                onUpdate: () => {
                  camera.updateProjectionMatrix();
                },
              },
              y: () => (desktop ? -0.92 : -1.75),
              ease: 'none',
            });
          }

          if (child.name === 'bg_full') {
            const bg_full = scene.getObjectByName('bg_full');
            bg_full.visible = false;
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
                end: () => '+=350%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.03;
                },
              },
            });

            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: '.wrapscroll',
                start: 'top top',
                end: () => '+=500%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.02;
                  // console.log('y', glassThing.position.y);
                  // console.log('x', glassThing.position.x);
                },
              },
            });
            if (desktop) {
              tl.to(glassThing.position, { x: -0.05, y: -0.2, duration: 0.7, ease: 'none' });
              tl.to(glassThing.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 1, ease: 'none' }, '<');
              tl.set(glassThing.position, { x: -0.14, y: -0.51 }, '+=0.6');
              tl.to(glassThing.position, { x: -0.03, y: -0.7, duration: 1, ease: 'none' }, '+=0.8');
              tl.to(glassThing.position, { x: -0.01, y: -0.9, duration: 1, ease: 'none' });
            } else {
              tl.to(glassThing.position, { x: -0.1, y: -0.35, duration: 3, ease: 'none' });
              tl.to(glassThing.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 1, ease: 'none' }, '<');
              tl.set(glassThing.position, { x: -0.14, y: -1.3 }, '+=5');
              tl.to(glassThing.position, { x: -0.1, y: -1.5, duration: 1.4, ease: 'none' }, '<+=5');
              tl.to(glassThing.position, { x: -0.1, y: -1.75, duration: 1, ease: 'none' });
            }
          }
          ////------------------3
          if (child.name === 'Cylinder') {
            cylinder = scene.getObjectByName('Cylinder');
            cylinder.material = glassMaterial;
            cylinder.position.y = desktop ? -0.35 : -0.7;
            cylinder.position.x = desktop ? -0.0054 : -0.08;
            cylinder.scale.multiplyScalar(desktop ? 1 : 0.8);
          }
          if (child.name === 'process_texts') {
            const process_texts = scene.getObjectByName('process_texts');
            process_texts.position.y = desktop ? -0.35 : -0.7;
            process_texts.position.x = desktop ? -0.0054 : -0.1;
            process_texts.scale.multiplyScalar(desktop ? 1 : 0.8);
          }
          if (child.name === 'process') {
            const process = scene.getObjectByName('process');
            process.position.y = desktop ? -0.35 : -0.7;
            process.position.x = desktop ? -0.0054 : -0.08;
            process.scale.multiplyScalar(desktop ? 1 : 0.8);
            // process.material = new THREE.MeshBasicMaterial();
            // process.material.map = image_cylender_bg;
            // process.material.alphaMap = image_cylender_bg_alpha;
            // process.material.alphaTest = 0.99;

            // // process.material.transparent = true;
            // process.material.depthWrite = false;
            // process.material.side = THREE.DoubleSide;
          }
          ////------------------ start
          if (child.name === 'illu_arrows') {
            const illu_arrows = scene.getObjectByName('illu_arrows');
            illu_arrows.visible = false;
          }
          if (child.name === 'top_image1') {
            const top_image1 = scene.getObjectByName('top_image1');
            top_image1.material = new THREE.MeshBasicMaterial();
            top_image1.material.map = image1;
          }
          ////------------------2
          if (child.name === 'illu_arrows1') {
            const illu_arrows1 = scene.getObjectByName('illu_arrows1');
            illu_arrows1.position.y = desktop ? -0.2 : -0.35;
            illu_arrows1.position.x = desktop ? -0.02333 : -0.05;
          }
          if (child.name === 'top_image2') {
            const top_image2 = scene.getObjectByName('top_image2');
            top_image2.position.y = desktop ? -0.2 : -0.35;
            top_image2.position.x = desktop ? -0.02333 : -0.1;
            top_image2.material = new THREE.MeshBasicMaterial();
            top_image2.material.map = image2;
            // top_image2.visible = false;
          }
          ////------------------4
          if (child.name === 'top_image3') {
            const top_image3 = scene.getObjectByName('top_image3');
            top_image3.position.y = desktop ? -0.53 : -1.3;
            top_image3.material = new THREE.MeshBasicMaterial();
            top_image3.material.map = image3;
          }
          if (child.name === 'illu_arrows2') {
            const illu_arrows2 = scene.getObjectByName('illu_arrows2');
            illu_arrows2.position.y = desktop ? -0.53 : -1.3;
            // illu_arrows2.visible = false;
          }
          ////------------------5
          if (child.name === 'top_image4') {
            const top_image4 = scene.getObjectByName('top_image4');
            top_image4.position.y = desktop ? -0.67 : -1.45;
            top_image4.position.x = desktop ? -0.0054 : -0.1;
            top_image4.material = new THREE.MeshBasicMaterial();
            top_image4.material.map = image4;
          }
          ////------------------6
          if (child.name === 'top_image5') {
            const top_image5 = scene.getObjectByName('top_image5');
            top_image5.position.y = desktop ? -0.9 : -1.75;
            top_image5.position.x = desktop ? -0.0054 : -0.1;
            top_image5.material = new THREE.MeshBasicMaterial();
            top_image5.material.map = image5;
          }
        });

        // var mixer = new THREE.AnimationMixer(model);
        // mixers.push(mixer);

        // animations.forEach(function (clip) {
        //   mixer.clipAction(clip).play();
        // });

        animate();
      },
      function (xhr) {
        globalPerc = (xhr.loaded / 3000000) * 100;
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

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    viewport.appendChild(renderer.domElement);

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

    if (desktop === true) {
      document.onmousemove = function (e) {
        let centerX = window.innerWidth * 0.5;
        let centerY = window.innerHeight * 0.5;

        if (glassThing) {
          glassThing.rotation.y = ((e.clientX - centerX) / centerX) * 0.3;
          glassThing.rotation.x = ((e.clientY - centerY) / centerY) * 0.2;
        }
      };
    }

    window.addEventListener('resize', onWindowResize, false);

    scrollbarElementInit();
    scrollerProxyInit();
  }

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

  function scrollbarElementInit() {
    scrollBarElement = Scrollbar.init(document.querySelector('.wrapscroll'), {
      continuousScrolling: false,
      alwaysShowTracks: true,
      damping: 0.07,
      // renderByPixels: true,
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
    // console.log(isMobile.any());

    if (glassThing) {
      glassThing.rotation.z += 0.002;
    }
    if (cylinder) {
      cylinder.rotation.x -= 0.01;
    }

    // if (camera) {
    //   camera.position.x = importedCamera.position.x;
    //   camera.position.y = importedCamera.position.y;
    //   camera.position.z = importedCamera.position.z;
    //   camera.rotation.x = importedCamera.rotation.x;
    //   camera.rotation.y = importedCamera.rotation.y;
    //   camera.rotation.z = importedCamera.rotation.z;
    //   camera.updateProjectionMatrix();
    // }

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
    stats.update();
  }
}
