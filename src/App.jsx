import * as THREE from 'three'
import Camera from '../components/Camera.js'
import { instance } from 'three/examples/jsm/nodes/Nodes.js';

let instance = null

  export default class App{
    constructor(){
      if(instance) return instance
      instance = this;

      this.canvas = document.querySelector("canvas.three.js");
      this.scene = new THREE.Scene();
      this.camera = new Camera();
      this.renderer = new Renderer();
    }
  }