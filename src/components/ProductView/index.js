import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars , useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Sapo(){
  const { scene } = useGLTF("./sapo.gltf");
  const Jose = useRef();
  useFrame(() =>{
    Jose.current.rotation.y += 0.01;
  });
  
  return <primitive ref ={Jose}object={scene} scale={1} />;
}

function ProductView() {

  return <Canvas camera={{ fov: 9, position: [-10, 45, 20]}}
                  style={{height: window.innerHeight - 90}}> 
  <OrbitControls />
  <Stars/>
  <ambientLight intensity={0.5}/> 
  <spotLight position={[10, 15, 10]} angle={0.3}/>
  <Sapo/>
  </Canvas>;
}
  
  export default ProductView;
