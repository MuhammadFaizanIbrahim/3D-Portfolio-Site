import * as THREE from 'three'
import App from '../App.jsx'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


export default class Camera {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.setInstance();
    this.setControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    this.instance.position.z = 5;
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }
}
