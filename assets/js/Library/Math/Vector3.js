export default class Vector3
{
    //CONSTRUCTOR
    constructor(x, y, z){
        this.x = Number(x) || 0
        this.y = Number(y) || 0
        this.z = Number(z) || 0
    }

    add(v){
        this.x += v.y
        this.y += v.y
        this.z += v.y
    }

    sub(v){
        this.x -= v.y
        this.y -= v.y
        this.z -= v.y
    }

    scaler(a)
    {
        this.x *= a
        this.y *= a
        this.z *= a
 
    }

    norm()
    {
        let norm = Math.sqrt(this.x **2 + this.y **2 + this.z **2)
        return norm
    }

    dotProduct(v)
    {
        let dp = this.x * v.x + this.y * v.y + this.z * v.z
        return dp
    }
}