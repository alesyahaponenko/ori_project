import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import * as THREE from 'three';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  newsGallery();
  portfolioGallery();
  portfolioHover();
  init3D();
  sizes();
});

function portfolioHover() {
  const blockPortfolioHover = document.querySelectorAll('.grid-wrap .blockportfolio');
  blockPortfolioHover.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('hover');
    });
  });
}

function sizes() {
  const newsblock_inner = document.querySelectorAll('.newsblock_inner');

  newsblock_inner.forEach((parent) => {
    const rect = parent.getBoundingClientRect();
    parent.querySelectorAll('.bg_black_news').forEach((el) => {
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
    });
  });
}

function portfolioGallery() {
  const portfWrapp = document.querySelector('.grid-wrap');
  const btnnext = document.querySelector('.btnnext-portfolio');
  const btnprev = document.querySelector('.btnprev-portfolio');
  btnnext.addEventListener('click', () => {
    gsap.to(portfWrapp, {
      x: () =>
        window.innerWidth > 1440
          ? '-100em'
          : window.innerWidth < 1440 && window.innerWidth > 1250
            ? '-80em'
            : '-98em',
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

  let mm = gsap.matchMedia();

  let index = 0;
  let animating = false;

  const allBlocks = document.querySelectorAll('.stack_mob .blockportfolio').length - 2;

  mm.add('(max-width: 991px)', () => {
    function nextPortfolio() {
      if (index === allBlocks + 1) return;

      if (!animating) {
        animating = true;
        index++;
        gsap.to('.grid-wrap', {
          x: () => ((-71.5 * window.innerWidth - 10) * index) / 100,
          duration: 0.5,
          onComplete: () => {
            animating = false;
          },
        });
      }
    }

    function prevPortfolio() {
      if (index === 0) return;

      if (!animating) {
        animating = true;
        gsap.to('.grid-wrap', {
          x: () => (-71.5 * window.innerWidth * (index - 1)) / 100,
          duration: 0.5,
          onComplete: () => {
            index--;
            animating = false;
          },
        });
      }
    }

    Observer.create({
      type: 'touch',
      target: '.column-wrap',
      onLeft: () => nextPortfolio(),
      onRight: () => prevPortfolio(),
      tolerance: 10,
      preventDefault: true,
    });
  });
}

function newsGallery() {
  gsap.registerPlugin(Observer);

  let animating = false;
  const wrapper = document.querySelector('.wrapp');
  const boxes = gsap.utils.toArray('.box');
  if (boxes.length > 0) {
    const loop = horizontalLoop(boxes, { paused: true, paddingRight: 4, draggable: true });
    function startNext() {
      if (!animating) {
        animating = true;
        loop.next({ duration: 0.4, ease: 'power1.inOut' });
      }
    }
    function startPrev() {
      if (!animating) {
        animating = true;
        loop.previous({ duration: 0.4, ease: 'power1.inOut' });
      }
    }
    document.querySelector('.btnnext').addEventListener('click', startNext);
    document.querySelector('.btnprev').addEventListener('click', startPrev);
    Observer.create({
      type: 'touch',
      target: '.collectionlistwrapper4',
      onLeft: () => startNext(),
      onRight: () => startPrev(),
      tolerance: 10,
      preventDefault: true,
    });
  }

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
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
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
      setTimeout(() => {
        animating = false;
      }, 500);
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
    return tl;
  }
}

function init3D() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.normalizeScroll(true);

  THREE.Cache.enabled = true;
  // const gui = new dat.GUI();

  let camera, scene, renderer;
  let directionalLight, directionalLight2;
  let isMobile, desktop, tablet;

  let importedCamera = null;

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
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      // return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    MobileWidth: function () {
      return window.innerWidth < 992;
    },
    any: function () {
      return (
        isMobile.MobileWidth() ||
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
    if (window.innerWidth < 992 && window.innerWidth > 478) {
      tablet = true;
    } else {
      tablet = false;
    }
  } else {
    tablet = false;
    desktop = true;
  }

  let frustumSize = desktop ? 0.18 : 0.35;
  const aspect = window.innerWidth / window.innerHeight;

  window.scrollTo(0, 0);

  init();

  function init() {
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

    desktop ? (camera.position.z = 10) : (camera.position.z = 3);

    const textureLoader = new THREE.TextureLoader();
    const image1 = textureLoader.load(
      'https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bf948e9520b0454eddbda4_top_image_v20.png'
    );
    image1.colorSpace = THREE.SRGBColorSpace;
    image1.flipY = false;

    const image_cylender_bg = textureLoader.load(
      'https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bfa9f99f9a45d45edc5ade_process%20simplied_v20.png'
    );
    image_cylender_bg.colorSpace = THREE.SRGBColorSpace;
    image_cylender_bg.flipY = false;

    const image_cylender_bg_alpha = textureLoader.load(
      'https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65bfadcdbe8065401aabc3b4_process%20simplied_v20.jpg'
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

    const geometry = new THREE.BoxGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      color: 0xf2f2f2,
    });

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
      // 'https://uploads-ssl.webflow.com/650aab3968604618ddbe29a0/653e6a923d2acc91d9dbaa4f_model29.glb.txt',
      'https://uploads-ssl.webflow.com/64db21b0598aafe863e53d0d/65c0c9147e3131f60daba367_scroll_animation_v16-------rework2.glb.txt',

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
                end: () => '+=700%',
                scrub: 0,
                onUpdate: (self) => {
                  camera.updateProjectionMatrix();
                },
              },
              // y: () => (desktop ? -0.92 : -1.75),
              y: () => (desktop ? -1.31 : -2.45),
              ease: 'none',
            });
          }

          if (child.name === 'glassThing') {
            glassThing = scene.getObjectByName('glassThing');
            // glassThing.visible = false;
            glassThing.material = glassMaterial;
            glassThing.position.x = desktop ? -0.14 : -0.13;
            glassThing.material.side = THREE.DoubleSide;

            gsap.to(glassThing.rotation, {
              scrollTrigger: {
                trigger: '.wrapscroll',
                start: 'top top',
                end: () => '+=700%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= desktop ? 0.04 : 0.06;
                },
              },
            });
            // gsap.to(glassThing.rotation, {
            //   scrollTrigger: {
            //     trigger: '.start2',
            //     start: 'top top',
            //     end: () => '+=450%',
            //     scrub: true,
            //     onUpdate: () => {
            //       glassThing.rotation.z -= desktop ? 0.03 : 0.03;
            //     },
            //   },
            // });

            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: '.wrapscroll',
                start: 'top top',
                end: () => '+=550%',
                scrub: true,
                onUpdate: () => {
                  glassThing.rotation.z -= 0.02;
                },
              },
            });
            if (desktop) {
              tl.to(glassThing.position, { x: -0.14, y: -0.21, duration: 0.5, ease: 'none' });
              tl.to(glassThing.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' }, '<');
              tl.to(
                glassThing.position,
                { x: -0.07, y: -0.38, duration: 0.5, ease: 'none' },
                '+=0.3'
              );
              tl.to(glassThing.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' }, '<');

              tl.set(glassThing.position, { x: 0.03, y: -0.73 }, '+=0.8');
              tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

              tl.to(
                glassThing.position,
                { x: 0.03, y: -0.73, duration: 0.4, ease: 'none' },
                '+=0.3'
              );

              tl.to(glassThing.position, { x: -0.03, y: -1.1, duration: 1, ease: 'none' }, '+=0.5');
            } else {
              if (tablet) {
                tl.to(
                  glassThing.position,
                  { x: -0.17, y: -0.39, duration: 0.5, ease: 'none' },
                  '+=0.4'
                );
                tl.to(
                  glassThing.scale,
                  { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' },
                  '<'
                );
                tl.to(
                  glassThing.position,
                  { x: -0.1, y: -0.72, duration: 0.5, ease: 'none' },
                  '+=0.8'
                );
                tl.to(
                  glassThing.scale,
                  { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' },
                  '<'
                );

                tl.set(glassThing.position, { x: -0.08, y: -1.25 }, '+=1.2');
                tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

                tl.to(
                  glassThing.position,
                  { x: -0.08, y: -1.5, duration: 0.4, ease: 'none' },
                  '+=0.8'
                );

                tl.to(
                  glassThing.position,
                  { x: -0.08, y: -1.75, duration: 1, ease: 'none' },
                  '+=0.5'
                );
              } else {
                /////////////////////////////////////////////////////////// 
                if (window.innerHeight < 701) {
                  tl.to(
                    glassThing.position,
                    { x: -0.17, y: -0.33, duration: 0.5, ease: 'none' },
                    '+=0.7'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' },
                    '<'
                  );
                  tl.to(
                    glassThing.position,
                    { x: -0.1, y: -0.75, duration: 0.5, ease: 'none' },
                    '+=1'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' },
                    '<'
                  );

                  tl.set(glassThing.position, { x: -0.08, y: -1.22 }, '+=1.8');
                  tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.6, duration: 0.4, ease: 'none' },
                    '+=2'
                  );

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.9, duration: 1, ease: 'none' },
                    '+=0.5'
                  );
                }

                if (window.innerHeight > 700 && window.innerHeight < 791) {
                  tl.to(
                    glassThing.position,
                    { x: -0.17, y: -0.33, duration: 0.5, ease: 'none' },
                    '+=0.7'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' },
                    '<'
                  );
                  tl.to(
                    glassThing.position,
                    {
                      x: -0.1,
                      y: () => (isMobile.iOS() ? 0.58 : -0.7),
                      duration: 0.5,
                      ease: 'none',
                    },
                    '+=1'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' },
                    '<'
                  );

                  tl.set(glassThing.position, { x: -0.08, y: -1.16, duration: 0.5 }, '+=0.5');
                  tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.6, duration: 0.4, ease: 'none' },
                    '+=2'
                  );

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.9, duration: 1, ease: 'none' },
                    '+=0.5'
                  );
                }

                if (window.innerHeight > 790 && window.innerHeight < 891) {
                  tl.to(
                    glassThing.position,
                    { x: -0.17, y: -0.28, duration: 0.5, ease: 'none' },
                    '+=0.7'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' },
                    '<'
                  );
                  tl.to(
                    glassThing.position,
                    {
                      x: -0.1,
                      y: () => (isMobile.iOS() ? 0.54 : -0.65),
                      duration: 0.5,
                      ease: 'none',
                    },
                    '+=1'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' },
                    '<'
                  );

                  tl.set(glassThing.position, { x: -0.08, y: -1.04 }, '+=1');
                  tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.23, duration: 0.4, ease: 'none' },
                    '+=1'
                  );

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.6, duration: 1, ease: 'none' },
                    '+=2'
                  );
                }

                if (window.innerHeight > 890) {
                  tl.to(
                    glassThing.position,
                    { x: -0.17, y: -0.28, duration: 0.5, ease: 'none' },
                    '+=0.7'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.9, y: 0.9, z: 0.9, duration: 0.5, ease: 'none' },
                    '<'
                  );
                  tl.to(
                    glassThing.position,
                    {
                      x: -0.1,
                      y: () => (isMobile.iOS() ? 0.48 : -0.57),
                      duration: 0.5,
                      ease: 'none'
                    },
                    '+=1'
                  );
                  tl.to(
                    glassThing.scale,
                    { x: 0.6, y: 0.6, z: 0.6, duration: 0.5, ease: 'none' },
                    '<'
                  );

                  tl.set(glassThing.position, { x: -0.08, y: -0.98 }, '+=1.2');
                  tl.set(glassThing.scale, { x: 1, y: 1, z: 1 }, '<');

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.23, duration: 0.4, ease: 'none' },
                    '+=1'
                  );

                  tl.to(
                    glassThing.position,
                    { x: -0.08, y: -1.6, duration: 1, ease: 'none' },
                    '+=2'
                  );
                }
              }
            }
          }

          ////------------------ start
          if (child.name === 'top_image1') {
            const top_image1 = scene.getObjectByName('top_image1');
            top_image1.material = new THREE.MeshBasicMaterial();
            top_image1.scale.x = desktop ? 0.065 : 0.065 * 1.1;
            top_image1.scale.z = desktop ? 0.085 : 0.085 * 1.1;
            // top_image1.scale.multiplyScalar(desktop ? 1 : tablet ? 1 : 1.2);
            top_image1.position.y = desktop ? -0.0085 : tablet ? -0.0085 : 0.01;
            top_image1.position.x = desktop ? -0.07 : -0.06;
            top_image1.material.map = image1;
          }
          ////------------------2 el
          if (child.name === 'top_image3') {
            const top_image3 = scene.getObjectByName('top_image3');
            top_image3.position.y = desktop
              ? -0.22
              : tablet
                ? -0.4
                : //mobile
                window.innerHeight > 790
                  ? -0.30
                  : -0.39;

            top_image3.position.x = desktop ? -0.17 : -0.17;
            top_image3.scale.multiplyScalar(desktop ? 0.7 : 0.8);
            top_image3.material = new THREE.MeshBasicMaterial();
            top_image3.material.map = image3;
          }
          ////------------------3
          if (child.name === 'top_image2') {
            const top_image2 = scene.getObjectByName('top_image2');
            // top_image2.position.y = -0.38;
            top_image2.position.y = desktop
              ? -0.38
              : tablet
                ? -0.72
                : window.innerHeight < 700
                  ? -0.75
                  : window.innerHeight > 700 && window.innerHeight < 791
                    ? -0.70
                    : window.innerHeight > 790 && window.innerHeight < 891
                      ? -0.65
                      : window.innerHeight > 890
                        ? -0.58
                        : null;
            if (isMobile.iOS()) {
              top_image2.position.y = desktop
                ? -0.38
                : tablet
                  ? -0.7
                  : window.innerHeight < 700
                    ? -0.63
                    : window.innerHeight > 700 && window.innerHeight < 791
                      ? -0.58
                      : window.innerHeight > 790 && window.innerHeight < 891
                        ? -0.56
                        : window.innerHeight > 890
                          ? -0.5
                          : null;
            }
            top_image2.position.x = desktop ? -0.06 : -0.1;
            top_image2.scale.multiplyScalar(desktop ? 1 : tablet ? 1 : 1.3);
            top_image2.material = new THREE.MeshBasicMaterial();
            top_image2.material.map = image2;
          }
          if (child.name === 'illu_arrows001') {
            const illu_arrows = scene.getObjectByName('illu_arrows001');
            illu_arrows.position.y = desktop
              ? -0.4
              : tablet
                ? -0.74
                : window.innerHeight < 700
                  ? -0.76
                  : window.innerHeight > 700 && window.innerHeight < 791
                    ? -0.70
                    : window.innerHeight > 790 && window.innerHeight < 891
                      ? -0.65
                      : window.innerHeight > 890
                        ? -0.58
                        : null;
            if (isMobile.iOS()) {
              illu_arrows.position.y = desktop
                ? -0.38
                : tablet
                  ? -0.68
                  : window.innerHeight < 700
                    ? -0.61
                    : window.innerHeight > 700 && window.innerHeight < 791
                      ? -0.56
                      : window.innerHeight > 790 && window.innerHeight < 891
                        ? -0.54
                        : window.innerHeight > 890
                          ? -0.48
                          : null;
            }
            illu_arrows.position.x = desktop ? -0.03 : tablet ? -0.05 : -0.05;
            // illu_arrows.position.y = desktop ? -0.38 : tablet ? -0.72 : -0.74;
            // illu_arrows.position.x = desktop ? -0.06 : -0.1;
            // illu_arrows.scale.multiplyScalar(desktop ? 1 : tablet ? 1 : 1.3);
          }
          ////------------------4
          if (child.name === 'Cylinder') {
            cylinder = scene.getObjectByName('Cylinder');
            cylinder.material = glassMaterial;
            cylinder.position.y = desktop
              ? -0.54
              : tablet
                ? -1.02
                : window.innerHeight < 700
                  ? -1.05
                  : window.innerHeight > 700 && window.innerHeight < 791
                    ? -0.96
                    : window.innerHeight > 790 && window.innerHeight < 891
                      ? -0.89
                      : window.innerHeight > 890
                        ? -0.83
                        : null;
            if (isMobile.iOS()) {
              cylinder.position.y = desktop
                ? -0.54
                : tablet
                  ? -1.02
                  : window.innerHeight < 700
                    ? -0.93
                    : window.innerHeight > 700 && window.innerHeight < 791
                      ? -0.855
                      : window.innerHeight > 790 && window.innerHeight < 891
                        ? -0.8
                        : window.innerHeight > 890
                          ? -0.725
                          : null;
            }
            cylinder.position.x = desktop ? -0.05 : -0.1;
            cylinder.scale.multiplyScalar(
              desktop ? 0.9 : tablet ? 1.2 : 1
              // desktop ? (window.innerWidth > 1440 ? 0.7 : 0.8) : 0.8
            );
          }
          if (child.name === 'process_texts') {
            const process_texts = scene.getObjectByName('process_texts');
            process_texts.material = new THREE.MeshBasicMaterial();
            process_texts.visible = false;
          }
          if (child.name === 'process') {
            const process = scene.getObjectByName('process');
            process.material = new THREE.MeshBasicMaterial();
            process.material.alphaTest = 0.1;
            process.material.side = THREE.DoubleSide;
            process.material.map = image_cylender_bg;
            process.material.alphaMap = image_cylender_bg_alpha;
            process.position.y = desktop
              ? -0.544
              : tablet
                ? -1.02
                : window.innerHeight < 700
                  ? -1.05
                  : window.innerHeight > 700 && window.innerHeight < 791
                    ? -0.96
                    : window.innerHeight > 790 && window.innerHeight < 891
                      ? -0.89
                      : window.innerHeight > 890
                        ? -0.83
                        : null;
            if (isMobile.iOS()) {
              process.position.y = desktop
                ? -0.54
                : tablet
                  ? -1.02
                  : window.innerHeight < 700
                    ? -0.93
                    : window.innerHeight > 700 && window.innerHeight < 791
                      ? -0.855
                      : window.innerHeight > 790 && window.innerHeight < 891
                        ? -0.8
                        : window.innerHeight > 890
                          ? -0.725
                          : null;
            }
            process.position.x = desktop ? -0.08 : -0.1;
            process.scale.x = 0.033;
            process.scale.z = 0.03;
          }

          ////------------------5
          if (child.name === 'top_image4') {
            const top_image4 = scene.getObjectByName('top_image4');
            top_image4.position.y = -1.42;
            if (desktop) {
              top_image4.position.y = -0.73;
            }
            if (tablet) {
              top_image4.position.y = -0.73;
            }
            top_image4.position.x = desktop ? 0.1 : tablet ? 0.007 : -0.193;
            top_image4.scale.set(
              desktop ? 0.329 : tablet ? 0 : 0,
              desktop ? 0.253 : tablet ? 0 : 0,
              desktop ? 0.253 : tablet ? 0 : 0
            );

            top_image4.material = new THREE.MeshBasicMaterial();
            top_image4.material.map = image4;
          }
          ////------------------6
          if (child.name === 'top_image5') {
            const top_image5 = scene.getObjectByName('top_image5');
            top_image5.position.y = desktop ? -0.91 : tablet ? -0.73 : -1.622;
            top_image5.position.x = desktop ? 0 : tablet ? 0 : -0.09;
            // top_image5.position.y = desktop ? options.yPos2 : -1.45;
            // top_image5.position.x = desktop ? options.xPos2 : 0;
            top_image5.material = new THREE.MeshBasicMaterial();
            top_image5.material.map = image5;
            top_image5.scale.set(
              desktop ? 0.45 : tablet ? 0 : 0,
              desktop ? 0.45 : tablet ? 0 : 0,
              desktop ? 0.45 : tablet ? 0 : 0
            );
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
          // console.log('globalPerc ' + globalPerc + '% loaded');
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

    hemisphereLight.intensity = desktop ? 2.2 : 6;

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

    directionalLight.visible = desktop ? true : false;

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

    directionalLight2.visible = desktop ? true : false;

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

    if (desktop) {
      // scrollbarElementInit();
      // scrollerProxyInit();
    }
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
    class ModalPlugin extends ScrollbarPlugin {
      static pluginName = 'modal';

      static defaultOptions = {
        open: false,
      };

      transformDelta(delta) {
        return this.options.open ? { x: 0, y: 0 } : delta;
      }
    }

    Scrollbar.use(ModalPlugin);

    scrollBarElement = Scrollbar.init(document.querySelector('.wrapscroll'), {
      continuousScrolling: false,
      alwaysShowTracks: true,
      damping: desktop ? 0.05 : 0.1,
      // renderByPixels: true,
      renderByPixels: !('ontouchstart' in document),
    });
  }



  function onWindowResize() {
    console.log('resize');
    ScrollTrigger.refresh()
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
      glassThing.rotation.z += desktop ? 0.002 : 0.01;
    }
    if (cylinder) {
      cylinder.rotation.x -= desktop ? 0.01 : 0.05;
    }

    renderer.render(scene, camera);
  }
}
