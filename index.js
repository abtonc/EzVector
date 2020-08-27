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
    static CalcArea = (vector) => {
        return vector.x * vector.y * vector.z * vector.w
    }
    static Distance = (v1, v2) => {
        return Math.sqrt(
            (v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2 + (v1.w - v2.w) ** 2
        )
    }
    static Add = (arr) => {
        var result = new Vector4(0, 0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
            result.z += arr[i].z
            result.w += arr[i].w
        }
        return result
    }
    static Subtract = (arr) => {
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
    static CalcArea = (vector) => {
        return vector.x * vector.y * vector.z
    }
    static Distance = (v1, v2) => {
        return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2 + (v1.z - v2.z) ** 2)
    }
    static Add = (arr) => {
        var result = new Vector3(0, 0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
            result.z += arr[i].z
        }
        return result
    }
    static Subtract = (arr) => {
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
    static CalcArea = (vector) => {
        return vector.x * vector.y
    }
    static Distance = (v1, v2) => {
        return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
    }
    static Add = (arr) => {
        var result = new Vector2(0, 0)
        for (let i = 0; i < arr.length; i++) {
            result.x += arr[i].x
            result.y += arr[i].y
        }
        return result
    }
    static Subtract = (arr) => {
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

const CalcDimensions = (v) => {
    if (v.w) {
        return 4
    } else if (v.z) {
        return 3
    } else if (v.y) {
        return 2
    }
}

const Distance = (vector1, vector2) => {
    if (CalcDimensions(vector1) != CalcDimensions(vector2)) {
        throw new Error("Different dimensions or parameters not EzVector Vector.")
    }
    switch (CalcDimensions(vector1)) {
        case 2:
            return Math.sqrt((vector1.x - vector2.x) ** 2 + (vector1.y - vector2.y) ** 2)
            break
        case 3:
            return Math.sqrt(
                (vector1.x - vector2.x) ** 2 +
                    (vector1.y - vector2.y) ** 2 +
                    (vector1.z - vector2.z) ** 2
            )
            break
        case 4:
            return Math.sqrt(
                (vector1.x - vector2.x) ** 2 +
                    (vector1.y - vector2.y) ** 2 +
                    (vector1.z - vector2.z) ** 2 +
                    (vector1.w - vector2.w) ** 2
            )
            break
        default:
            throw new Error("Different dimensions or parameters not Vector.")
            break
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
    FillVector = (vector) => {
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
    IsFilled = (vector) => {
        var vectors = this.filledVectors.filter((vec) => vec.x == vector.x && vec.y == vector.y)
        if (vectors.length > 0) {
            return true
        } else {
            return false
        }
    }
    RandomVector = () => {
        return new Vector2(
            Math.floor(Math.random() * (this.x + 1)),
            Math.floor(Math.random() * (this.y + 1))
        )
    }
    Print = (filledCharacter, emptyCharacter) => {
        for (var height = 0; height < this.y; height++) {
            var string = ""
            for (var width = 0; width < this.x; width++) {
                if (this.IsFilled(new Vector2(width, height))) {
                    string += filledCharacter
                } else {
                    string += emptyCharacter
                }
            }
            console.log(string)
        }
    }
}

const Map3D = class Map3D {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
    filledVectors = []
    FillVector = (vector) => {
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
    IsFilled = (vector) => {
        var vectors = this.filledVectors.filter(
            (vec) => vec.x == vector.x && vec.y == vector.y && vec.z == vector.z
        )
        if (vectors.length > 0) {
            return true
        } else {
            return false
        }
    }
    RandomVector = () => {
        return new Vector3(
            Math.floor(Math.random() * (this.x + 1)),
            Math.floor(Math.random() * (this.y + 1)),
            Math.floor(Math.random() * (this.z + 1))
        )
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
    FillVector = (vector) => {
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
    IsFilled = (vector) => {
        var vectors = this.filledVectors.filter(
            (vec) =>
                vec.x == vector.x && vec.y == vector.y && vec.z == vector.z && vec.w == vector.w
        )
        if (vectors.length > 0) {
            return true
        } else {
            return false
        }
    }
    RandomVector = () => {
        return new Vector4(
            Math.floor(Math.random() * (this.x + 1)),
            Math.floor(Math.random() * (this.y + 1)),
            Math.floor(Math.random() * (this.z + 1)),
            Math.floor(Math.random() * (this.w + 1))
        )
    }
}

exports.Vector = Vector
exports.Vector4 = Vector4
exports.Vector3 = Vector3
exports.Vector2 = Vector2
exports.CalcDimensions = CalcDimensions
exports.Distance = Distance
exports.Map = Map
exports.Map2D = Map2D
exports.Map3D = Map3D
exports.Map4D = Map4D
