//made with love by abtonc <3

const Vector = function () {
    if (arguments.length == 4) {
        return new Vector4(arguments[0], arguments[1], arguments[2], arguments[3])
    } else if (arguments.length == 3) {
        return new Vector3(arguments[0], arguments[1], arguments[2])
    } else if (arguments.length == 2) {
        return new Vector3(arguments[0], arguments[1])
    } else {
        throw new Error("Error occured while trying to parse Vector.")
    }
}

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

const Map = function () {
    if (arguments[0].w) {
        return new Map4D(arguments[0])
    } else if (arguments[0].z) {
        return new Map3D(arguments[0])
    } else if (arguments[0].y) {
        return new Map2D(arguments[0])
    } else {
        throw new Error("Error occured while trying to parse Vector.")
    }
}

const Map2D = class Map2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    filledVectors = []
    fillVector = (vector) => {
        if (typeof vector != "object" && vector.x && vector.y) {
            console.log("err: NaV")
            return false
        }
        if (vector.x > this.x || vector.y > this.y) {
            console.log("err: OOM")
            return false
        }
        this.filledVectors.push(vector)
        return true
    }
}

const Map3D = class Map3D {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
    filledVectors = []
    fillVector = (vector) => {
        if (typeof vector != "object" && vector.x && vector.y) {
            console.log("err: NaV")
            return false
        }
        if (vector.x > this.x || vector.y > this.y || vector.z > this.z) {
            console.log("err: OOM")
            return false
        }
        this.filledVectors.push(vector)
        return true
    }
}

const Map4D = class Map4D {
    constructor(x, y, z, w) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }
    filledVectors = []
    fillVector = (vector) => {
        if (typeof vector != "object" && vector.x && vector.y) {
            console.log("err: NaV")
            return false
        }
        if (vector.x > this.x || vector.y > this.y || vector.z > this.z || vector.w > this.w) {
            console.log("err: OOM")
            return false
        }
        this.filledVectors.push(vector)
        return true
    }
}

exports.Vector = Vector
exports.Vector4 = Vector4
exports.Vector3 = Vector3
exports.Vector2 = Vector2
exports.calcDimensions = calcDimensions
exports.Map = Map
exports.Map2D = Map2D
exports.Map3D = Map3D
exports.Map4D = Map4D
exports.information = {
    version: "1.0.3",
    author: "abtonc",
    lastUpdate: Date.parse("24.08.2020 15:51"),
}
