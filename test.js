const EzVector = require("./index.js")

var testVector4 = new EzVector.Vector4(1, 2, 3, 4)
console.log("x: " + testVector4.x)
console.log("y: " + testVector4.y)
console.log("z: " + testVector4.z)
console.log("w: " + testVector4.w)
console.log(
    EzVector.Vector4.distance(new EzVector.Vector4(1, 2, 3, 4), new EzVector.Vector4(1, 2, 3, 5))
)

var testVector3 = new EzVector.Vector3(1, 2, 3)
console.log("x: " + testVector3.x)
console.log("y: " + testVector3.y)
console.log("z: " + testVector3.z)
console.log(EzVector.Vector3.distance(new EzVector.Vector3(1, 2, 3), new EzVector.Vector3(1, 2, 4)))

var testVector2 = new EzVector.Vector2(1, 2)
console.log("x: " + testVector2.x)
console.log("y: " + testVector2.y)
console.log(EzVector.Vector2.distance(new EzVector.Vector2(1, 2), new EzVector.Vector2(1, 3)))

console.log(EzVector.Vector2.add([new EzVector.Vector2(1, 0), new EzVector.Vector2(1, 1)]))
console.log(EzVector.Vector2.subtract([new EzVector.Vector2(1, 0), new EzVector.Vector2(0, 1)]))
console.log(
    EzVector.Vector4.add([new EzVector.Vector4(1, 1, 1, 1), new EzVector.Vector4(1, 0, 1, 0)])
)
