const Vector4 = class Vector4 {
    constructor(x, y, z, w) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }
    static calcArea = (x, y, z, w) => {
        return x * y * z * w
    }
    static distance = (v1, v2) => {
        return Math.sqrt(
            (v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2 + (v1.w - v2.w) ** 2
        )
    }
    static add = (arr) => {
        var result = new Vector4(0, 0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
            result.z += arr[i].z
            result.w += arr[i].w
        }
        return result
    }
    static subtract = (arr) => {
        var result = new Vector4(0, 0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                result.x += arr[i].x
                result.y += arr[i].y
                result.z += arr[i].z
                result.w += arr[i].w
            } else {
                result.x -= arr[i].x
                result.y -= arr[i].y
                result.z -= arr[i].z
                result.w -= arr[i].w
            }
        }
        return result
    }
}

const Vector3 = class Vector3 {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
    static calcArea = (x, y, z) => {
        return x * y * z
    }
    static distance = (v1, v2) => {
        return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2)
    }
    static add = (arr) => {
        var result = new Vector3(0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
            result.z += arr[i].z
        }
        return result
    }
    static subtract = (arr) => {
        var result = new Vector3(0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                result.x += arr[i].x
                result.y += arr[i].y
                result.z += arr[i].z
            } else {
                result.x -= arr[i].x
                result.y -= arr[i].y
                result.z -= arr[i].z
            }
        }
        return result
    }
}

const Vector2 = class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static calcArea = (x, y) => {
        return x * y
    }
    static distance = (v1, v2) => {
        return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
    }
    static add = (arr) => {
        var result = new Vector2(0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
        }
        return result
    }
    static subtract = (arr) => {
        var result = new Vector2(0, 0)
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                result.x += arr[i].x
                result.y += arr[i].y
            } else {
                result.x -= arr[i].x
                result.y -= arr[i].y
            }
        }
        return result
    }
}

const calcDimensions = (v) => {
    if (v.w) {
        return 4
    } else if (v.z) {
        return 3
    } else if (v.y) {
        return 2
    }
}

exports.Vector4 = Vector4
exports.Vector3 = Vector3
exports.Vector2 = Vector2
exports.calcDimensions = calcDimensions
