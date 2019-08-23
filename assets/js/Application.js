import Canvas from './Library/Canvas.js'
import Tests from './Tests/Tests.js'

/** Class for the application. */
export default class Application {
    /**
     * Create a new application.
     */
    constructor() {
        const tests = true
        if (tests) {
            new Tests()
        }

        this.shaderSources = {
            fragment: null,
            vertex: null,
        }
        this.preloader()
    }

    /** methode to load glsl shaders     */
    async preloader() {
        console.info('Preloading source code for shaders')
        await fetch('./assets/glsl/vertex-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.vertex = source)
            .catch(error => console.error(error.message))
        await fetch('./assets/glsl/fragment-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.fragment = source)
            .catch(error => console.error(error.message))
        this.run()
    }

    /** methode to draw Canvas     */
    run() {
        const width = 400
        const height = 400

        // VECTOR 1 ( Vector norm )
        let ranges = [document.getElementById('vA_x'), document.getElementById('vA_y'),document.getElementById('vB_x'), document.getElementById('vB_y'),]
        let canvas = new Canvas(width, height, this.shaderSources, ranges, "VectorCanvas_1")
    
        canvas.functions = canvas.vectorSub

            
        
        // VECTOR 2 ( Vector scalar )
        let ranges2 = [document.getElementById('vC_x'), document.getElementById('vC_y'),document.getElementById('scalar')]
        let canvas2 = new Canvas(width, height, this.shaderSources, ranges2, "VectorCanvas_2")
        
        canvas2.functions = canvas2.vectorScalar
            

        // MATRIX
        
        // MATRIX 1 ( Matrix Mul )
        let ranges4 = [document.getElementById('sub_x'), document.getElementById('sub_y'), document.getElementById('subB_x'), document.getElementById('subB_y'),]
        let canvas4 = new Canvas(width, height, this.shaderSources, ranges4, "MatrixCanvas_1")
        
        canvas4.functions = canvas4.matrixMul

        // MATRIX 2 ( Matrix rotate )
        let ranges3 = [document.getElementById('scale_x'), document.getElementById('scale_y'), document.getElementById('rot_omega')]
        let canvas3 = new Canvas(width, height, this.shaderSources, ranges3, "MatrixCanvas_2")
        
        canvas3.functions = canvas3.matrixRotate

      
        window.dispatchEvent(new Event('updateCanvas'))

        // collect value from sliders
       document.getElementById("vA_x").oninput = () => {
            document.getElementById("vA_xVal").innerHTML = document.getElementById("vA_x").value
        }
        document.getElementById("vA_y").oninput = () => {
            document.getElementById("vA_yVal").innerHTML = document.getElementById("vA_y").value
        }
        document.getElementById("vB_x").oninput = () => {
            document.getElementById("vB_xVal").innerHTML = document.getElementById("vB_x").value
        }
        document.getElementById("vB_y").oninput = () => {
            document.getElementById("vB_yVal").innerHTML = document.getElementById("vB_y").value
        }
        document.getElementById("vC_x").oninput = () => {
            document.getElementById("vC_xVal").innerHTML = document.getElementById("vC_x").value
        }
        document.getElementById("vC_y").oninput = () => {
            document.getElementById("vC_yVal").innerHTML = document.getElementById("vC_y").value
        }
        document.getElementById("scalar").oninput = () => {
            document.getElementById("scalarVal").innerHTML = document.getElementById("scalar").value
        }
        document.getElementById("rot_omega").oninput = () => {
            document.getElementById("rotValue").innerHTML = document.getElementById("rot_omega").value + "°"
        }
        document.getElementById("sub_x").oninput = () => {
            document.getElementById("sub_xVal").innerHTML = document.getElementById("sub_x").value
        }
        document.getElementById("sub_y").oninput = () => {
            document.getElementById("sub_yVal").innerHTML = document.getElementById("sub_y").value
        }
        document.getElementById("subB_x").oninput = () => {
            document.getElementById("subB_xVal").innerHTML = document.getElementById("subB_x").value
        }
        document.getElementById("subB_y").oninput = () => {
            document.getElementById("subB_yVal").innerHTML = document.getElementById("subB_y").value
        }
    }
}