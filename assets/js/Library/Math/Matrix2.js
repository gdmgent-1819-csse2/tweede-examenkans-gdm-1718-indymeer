/** Class representing a 2×2 matrix. */
export default class Matrix2 {
    /**
     * Create a 2×2 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0,
            0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} b - The second matrix.
     */
    add(b) {
        const a = this.elements
        this.elements = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} b - The second matrix.
     */
    sub(b) {
        const a = this.elements
        this.elements = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} b - The second matrix.
     */
    mul(b) {
        const a = this.elements
        const c = []
        this.elements = [

        c[0] = a[0] * b[0] + a[1] * b[2],
        c[1] = a[0] * b[1] + a[1] * b[3],
        c[2] = a[2] * b[0] + a[3] * b[2],
        c[3] = a[2] * b[1] + a[3] * b[3],
        
        ]
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        α *= Math.PI / 180
        const cos = Math.cos(α)
        const sin = Math.sin(α)
        const a = this.elements
        const r = [
            cos, -sin,
            sin, cos,
        ]
        this.elements = r
        this.mul(a);
    }
}