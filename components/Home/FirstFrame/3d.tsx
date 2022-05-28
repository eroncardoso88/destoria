import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useEffect, useRef } from "react";

interface PropsType {
  width?: string;
  height?: string;
  wrapperClassName?: string;
  mtlPath: string;
  objPath: string;
  texturePath?: string;
}

const ThreeD = ({ width, height, wrapperClassName, mtlPath, objPath, texturePath }: PropsType) => {
  let scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer, frameId: any, pivot: THREE.Object3D;
  const mountEl = useRef<any>();
  useEffect(() => {
    (async () => {
      const clientWidth = mountEl.current.clientWidth;
      const clientHeight = mountEl.current.clientHeight;
  
      //Add Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor("white", 0);

      renderer.setSize(clientWidth, clientHeight);
      mountEl.current.appendChild(renderer.domElement);
  
      //add Camera
      camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 100);
      camera.position.z = 20;
      camera.position.y = 0;
  
      //Camera Controls
      const controls = new OrbitControls(camera, renderer.domElement);
  
      //Simple Box with WireFrame
      await addModels();
  
      renderScene();
      //start animation
      start();
    })();
    return () => {
      stop();
      mountEl.current.removeChild(renderer.domElement);
    }
  }, []);

  const addModels = () => (
    new Promise((resolve, reject) => {
      //Loading 3d Models
      //Loading Material First
      const mtlLoader = new MTLLoader();
      mtlLoader.load(mtlPath, async (materials) => {
        materials.preload();

        //Load Object Now and Set Material
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials).load(
          objPath,
          (object) => {
            const logo = object;
            const material = defaultMaterial();
            logo.traverse(function (child) {   // aka setTexture
              if (child instanceof THREE.Mesh) {
                  child.material = material;
              }
            });

            //const logo = new THREE.Mesh(object, texture);

            // Scale and set position.
            logo.position.set(-10, -12, 0);
            logo.scale.set(8, 8, 8);

            // Add logo to pivot object to rotate center.
            pivot = new THREE.Object3D();
            pivot.add(logo);

            // Add pivot to scene.
            scene = new THREE.Scene();
            scene.add(pivot);

            addLight();
            resolve(scene);
          },
          xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          error => {
            console.log("An error happened" + error);
            reject(error);
          }
        )
      });
    })
  );

  const defaultMaterial = () => {
    // Add texture to object
    const base = new THREE.TextureLoader().load("logo/logo_Textures/mesh_basecolor.png");
    const emissive = new THREE.TextureLoader().load("logo/logo_Textures/mesh_emissive.png");
    const roughness = new THREE.TextureLoader().load("logo/logo_Textures/unreal_mesh_orm.png");
    const metalic = new THREE.TextureLoader().load("logo/logo_Textures/mesh_metallic.png");
    const normal = new THREE.TextureLoader().load("logo/logo_Textures/mesh_normal.png");
    return new THREE.MeshStandardMaterial( {
      color: 0xffffff,
      map: base,
      emissive: 0x00c5ff,
      emissiveMap: emissive,
      emissiveIntensity: 1,
      roughness: 0.01,
      roughnessMap: roughness,
      metalness: 0.1,
      metalnessMap: metalic,
      normalMap: normal,
    });
  }

  const addLight = () => {
    //LIGHTS
    const light = new THREE.PointLight(0xffffff, 3, 100, 5);
    light.position.set(2, 2, 20);
    scene.add(light);

    // add a light helper
    // const sphereSize = 1;
    // const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
    // scene.add( pointLightHelper );
  }

  const start = () => {
    if (!frameId) {
      frameId = window.requestAnimationFrame(animate);
    }
  };

  const stop = () => {
    cancelAnimationFrame(frameId);
  };

  const animate = () => {
    //Rotate Models
    if (pivot) pivot.rotation.y += 0.01;

    renderScene();
    frameId = window.requestAnimationFrame(animate);
  };

  const renderScene = () => {
    if (renderer) renderer.render(scene, camera);
  };

  return (
    <div
      className={wrapperClassName}
      style={{ width, height }}
      ref={mountEl}
    />
  );
}

ThreeD.defaultProps = {
  width: '295px',
  height: '170px',
  wrapperClassName: '',
}

export default ThreeD;
