<script>
	import { browser } from '$app/environment'; 
	import * as THREE from "three"

  /*
  if (browser) {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    })

    renderer.setPixelRatio( window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 30
    renderer.render( scene, camera)
  }
  */



  
	if(browser) {
		let camera = new THREE.PerspectiveCamera;
		let scene = new THREE.Scene;
		let renderer = new THREE.WebGLRenderer;
		let cube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ color: 0xffffff }));

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight )
      document.querySelector("#bg").appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 3, 3, 3 );
			const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
			cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;
		}

		const render = () => {
			renderer.clear()
			renderer.render(scene, camera);
		}

		const animate = () => {
			requestAnimationFrame(animate)

			cube.rotation.x += 0.001
			cube.rotation.y += 0.001

			render()
		}

		window.onload = function() {
      init();
      animate();
    };
	}
</script>

<canvas id="bg"></canvas>