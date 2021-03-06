const EzVector = require('./index.js');

var testVec2 = new EzVector.Vector2(1, 1);
var testVec3 = new EzVector.Vector3(1, 1, 1);
var testVec4 = new EzVector.Vector4(1, 1, 1, 1);
var testMap2D = new EzVector.Map2D(10, 10);
var testMap3D = new EzVector.Map3D(10, 10, 10);
var testMap4D = new EzVector.Map4D(10, 10, 10, 10);

testMap2D.FillVector(testMap2D.RandomVector());
testMap2D.FillVector(testMap2D.RandomVector());
testMap2D.FillVector(testMap2D.RandomVector());
testMap2D.FillVector(testMap2D.RandomVector());
console.log(testMap2D.IsFilled(new EzVector.Vector2(1, 1)));
testMap2D.Print('⬛', '⬜');
