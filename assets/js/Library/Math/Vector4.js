export default class Vector4
{
    //CONSTRUCTOR
    constructor(x, y, z, w){
        this.x = Number(x) || 0
        this.y = Number(y) || 0
        this.z = Number(z) || 0
        this.w = Number(w) || 1
    }

    add(v){
        this.x += v.y
        this.y += v.y
        this.z += v.y
        this.w += v.y
    }

    sub(v){
        this.x -= v.y
        this.y -= v.y
        this.z -= v.y
        this.w -= v.y
    }

    scaler(a)
    {
        this.x *= a
        this.y *= a
        this.z *= a
        this.w *= a
    }

    norm()
    {
        let norm = Math.sqrt(this.x **2 + this.y **2 + this.z **2 + this.w **2)
        return norm
    }

    dotProduct(v)
    {
        let dp = this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
        return dp
    }
}