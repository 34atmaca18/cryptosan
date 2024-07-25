import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import btc from '../assets/btc.png';

const ThreeJSScene = () => {
  const mountRef = useRef(null); 

  useEffect(() => {
    let scene, camera, renderer, mesh;
    const currentMount = mountRef.current; 

    const initializeScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(500, 500);
      currentMount.appendChild(renderer.domElement);
      const ambientLight = new THREE.AmbientLight(0x404040); 
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 75, 100);
      pointLight.position.set(1, 3, 4); 
      scene.add(pointLight);
      const texture = new THREE.TextureLoader().load(btc);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.7,
        roughness: 0.5,
      });

      const geometry = new THREE.CylinderGeometry(3, 3, 0.65, 100);
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      camera.position.set(0, 0, 7);
      mesh.rotation.z = 1.55;
      mesh.rotation.y = 1.5; 
    };

    initializeScene();
    const animate = () => {
      if (mesh) { 
        mesh.rotation.y += 0.007
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      if (renderer && renderer.domElement && currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '500px', height: '500px' }} />;
};

export default ThreeJSScene;
