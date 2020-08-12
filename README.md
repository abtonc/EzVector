# EzVector

EzVector is Vector calculation module.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install EzVector.

```bash
npm i ezvector
```

or

```bash
npm install ezvector
```

## Usage

### Vector2

```js
const EzVector = require("ezvector")

var vector = new EzVector.Vector2(1, 2)

console.log(vector.x, vector.y)
```

### Vector3

```js
const EzVector = require("ezvector")

var vector = new EzVector.Vector3(1, 2, 3)

console.log(vector.x, vector.y, vector.z)
```

### Vector4

```js
const EzVector = require("ezvector")

var vector = new EzVector.Vector4(1, 2, 3, 4)

console.log(vector.x, vector.y, vector.z, vector.w)
```

## Static Functions

### Vector2

```js
Vector2.add([vectors])
```

```js
Vector2.subtract([vectors])
```

```js
Vector2.distance(vector1, vector2)
```

### Vector3

```js
Vector3.add([vectors])
```

```js
Vector3.subtract([vectors])
```

```js
Vector3.distance(vector1, vector2)
```

### Vector4

```js
Vector4.add([vectors])
```

```js
Vector4.subtract([vectors])
```

```js
Vector4.distance(vector1, vector2)
```

## Contributing

No github source for now. Wiki soon.

## License

[ISC](https://opensource.org/licenses/ISC)
