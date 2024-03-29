import * as THREE from 'three'
import Experience from "../Experience.js";

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        // Test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ 
                color: 0x475577,
                wireframe: true
            })
        )
        
        this.scene.add(testMesh)
    }
}