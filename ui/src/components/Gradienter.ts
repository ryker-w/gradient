import { AmbientLight, ArrowHelper, AxesHelper, BoxGeometry, Color, DirectionalLight, GridHelper, Group, HemisphereLight, HemisphereLightHelper, Mesh, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, Vector2, Vector3, WebGLRenderer } from "three"

import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls'
import Stats from 'three/examples/jsm/libs/stats.module'

const boxSize: number = 60
const step: number = 0.01

const lowStep = (a: number, b: number) => {
    let s = 3 * step
    if (Math.abs(a - b) < s || Math.abs(a + b) < s) {
        return true
    } else {
        return false
    }
}

const calcFace = (to: number, from: number) => {
    if (to > from) {
        return true // 正向旋转
    } else{
        return false // 反向旋转
    }
}

export default class Gradienter {

    controls!: ArcballControls
    scene!: Scene
    camera!: PerspectiveCamera
    renderer!: WebGLRenderer

    hemiHelper!: HemisphereLightHelper
    root: HTMLElement
    stats: Stats

    gridHelper!: GridHelper

    box: Group

    showLog: boolean = false

    faceTo: Vector3 = new Vector3(0, 0, 0)
    faceDelta: Vector3 = new Vector3(0, 0, 0)

    constructor(root: HTMLElement) {
        this.root = root
        this.stats = Stats()
        this.box = new Group()
        this.box.rotation.set(this.faceTo.x, this.faceTo.y, this.faceTo.z)
        this.root.appendChild(this.stats.domElement)
    }

    init(): void {

        this.initScene()
        this.initCamera()
        this.initRender()
        this.initLight()
        this.initControls()

        this.addCube()

        document.addEventListener('resize', this.onWindowResize, false)
    }

    initScene() {
        this.scene = new Scene()
        // this.scene.background = new Color(0x666666)
        let axes = new AxesHelper(40)

        axes.position.set(320, -70, 150)
        this.scene.add(axes)
        this.gridHelper = new GridHelper(600, 10, 0x888888, 0x444444)
        this.scene.add(this.gridHelper)
    }

    initLight() {

        const light = new DirectionalLight( 0xffffff, 2 );
        light.position.set( 1, 1, 1 );
        this.scene.add( light );

        var ambient = new AmbientLight(0xffffff, 1) //AmbientLight,影响整个场景的光源 
        this.scene.add(ambient)
    }

    initCamera(): void {
        this.camera = new PerspectiveCamera(
            20,
            this.root.clientWidth / this.root.clientHeight,
            0.1,
            30000
        )

        this.scene.add(this.camera)
        this.camera.position.set( 1000, 500, 1000 );
		this.camera.lookAt( 0, 200, 0 );
    }

    initRender(): void {
        this.renderer = new WebGLRenderer({ antialias: true })
        // this.renderer.setClearColor(new Color(0xeeeeee))
        this.renderer.setSize(this.root.clientWidth, this.root.clientHeight)
        this.root.appendChild(this.renderer.domElement);
    }

    initControls() {
        this.controls = new ArcballControls( this.camera, this.renderer.domElement, this.scene );
        
        //this.scene.add(this.controls)
    }

    addCube() {
        console.log('add cube')
        let mat = new MeshNormalMaterial()
        let geo = new BoxGeometry(boxSize, boxSize /4, boxSize /2)

        let mesh = new Mesh(geo, mat)
        mesh.position.set(0,0,0)
        this.box.add(mesh)

        let ori = new Vector3(0, 0 , 0)
        let len = 2 * boxSize
        let xArrow = new ArrowHelper(new Vector3(1,0,0), ori, len, 0xff0000)
        let yArrow = new ArrowHelper(new Vector3(0,1,0), ori, len, 0x00ff00)
        let zArrow = new ArrowHelper(new Vector3(0,0,1), ori, len, 0x0000ff)

        this.box.add(xArrow)
        this.box.add(yArrow)
        this.box.add(zArrow)


        this.scene.add(this.box)
        //this.controls.attach(this.mesh)

    }

    lastLogTime: number = 0

    log():void {
        if (!this.showLog) {
            return
        }
        let s = new Date().getSeconds()
        
        if (s != this.lastLogTime) {
            this.lastLogTime = s
        } else {
            return
        }

        if (s % 5 != 0) {
            return
        }
        console.log('faceTo:' + this.faceTo.x + ',' + this.faceTo.y + ',' + this.faceTo.z)
        console.log('rotation:' + this.box.rotation.x + "," + this.box.rotation.y + ',' + this.box.rotation.z)
    }

    
    animate() {
        requestAnimationFrame(() => {
            this.animate()
        })

        this.log()

        this.stats.update()

        let r = this.box.rotation

        if (this.box.rotation.x != this.faceTo.x) {
            if (calcFace(this.faceTo.x, this.box.rotation.x)) {
                this.box.rotation.x += step
            } else {
                this.box.rotation.x -= step
            }
            if (lowStep(this.box.rotation.x, this.faceTo.x)) {
                console.log('x low step')
                this.box.rotation.x = this.faceTo.x
            }
        }

        if (this.box.rotation.y != this.faceTo.y) {
            if (calcFace(this.faceTo.y, this.box.rotation.y)) {
                this.box.rotation.y += step
            } else {
                this.box.rotation.y -= step
            }
            if (lowStep(this.box.rotation.y, this.faceTo.y)) {
                console.log('y low step')
                this.box.rotation.y = this.faceTo.y
            }
        }

        if (this.box.rotation.z != this.faceTo.z) {
            if (calcFace(this.faceTo.z, this.box.rotation.z)) {
                this.box.rotation.z += step
            } else {
                this.box.rotation.z -= step
            }
            if (lowStep(this.box.rotation.z, this.faceTo.z)) {
                console.log('z low step')
                this.box.rotation.z = this.faceTo.z
            }
        }

        this.render()
    }

    render() {
        this.renderer?.render(this.scene, this.camera)
    }

    start() {
        this.init()
        this.render()
        this.animate()
    }

    onWindowResize(): void {
        this.camera.aspect = this.root.clientWidth, this.root.clientHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.root.clientWidth, this.root.clientHeight)
    }

    change(faceTo: Vector3) {
        console.log('change face to:' + faceTo.x + "," + faceTo.y + "," + faceTo.z)

        // this.box.rotation.set(0, 0 , 0)
        
        let rx = faceTo.y / 180
        let ry = faceTo.z / 180
        let rz = faceTo.x / 180

        console.log('rotate π:' + rx + "," + ry + "," + rz)


        let x = rx * Math.PI
        let y = ry * Math.PI
        let z = rz * Math.PI

        console.log('rotate:' + x + "," + y + ',' + z)

        this.faceTo.set(x, y, z)
    }
   
}