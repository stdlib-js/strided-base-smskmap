<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->

# smskmap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Apply a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array according to a corresponding element in a strided mask array and assign each result to an element in a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-smskmap
```

</section>

<section class="usage">

## Usage

```javascript
var smskmap = require( '@stdlib/strided-base-smskmap' );
```

#### smskmap( N, x, strideX, mask, strideMask, y, strideY, fcn )

Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a single-precision floating-point strided output array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -2.0, 1.0, -3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1, 1, 0 ] );

// Compute the absolute values in-place:
smskmap( x.length, x, 1, m, 1, x, 1, absf );
// x => <Float32Array>[ 2.0, 1.0, -3.0, 5.0, 4.0, 0.0, -1.0, 3.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **mask**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **strideMask**: index increment for `mask`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.
-   **fcn**: function to apply.

The `N` and `stride` parameters determine which elements in the strided arrays are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

smskmap( N, x, 2, m, 2, y, -1, absf );
// y => <Float32Array>[ 5.0, 0.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );
var absf = require( '@stdlib/math-base-special-absf' );

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

smskmap( N, x1, -2, m1, 1, y1, 1, absf );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 0.0 ]
```

#### smskmap.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask, y, strideY, offsetY, fcn )

Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a single-precision floating-point strided output array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0, absf );
// y => <Float32Array>[ 1.0, 2.0, 0.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetMask**: starting index for `mask`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var floor = require( '@stdlib/math-base-special-floor' );
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

smskmap.ndarray( N, x, 2, 1, m, 2, 1, y, -1, y.length-1, absf );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var smskmap = require( '@stdlib/strided-base-smskmap' );

function scale( x ) {
    return x * 10.0;
}

var x = new Float32Array( 10 );
var m = new Uint8Array( x.length );
var y = new Float32Array( x.length );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*200.0) - 100.0 );
    m[ i ] = bernoulli( 0.2 );
}
console.log( x );
console.log( m );
console.log( y );

smskmap.ndarray( x.length, x, 1, 0, m, 1, 0, y, -1, y.length-1, scale );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-smskmap
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/smskmap.h"
```

#### stdlib_strided_smskmap( N, \*X, strideX, \*Mask, strideMask, \*Y, strideY, fcn )

Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a single-precision floating-point strided output array.

```c
#include <stdint.h>

static float scale( const float x ) {
    return x * 10.0f;
}

float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
uint8_t M[] = { 0, 0, 1, 0, 0, 1 };
float Y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

int64_t N = 6;

stdlib_strided_smskmap( N, X, 1, M, 1, Y, 1, scale );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Mask**: `[in] uint8_t*` mask array.
-   **strideMask**: `[in] int64_t` index increment for `Mask`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **fcn**: `[in] float (*fcn)( float )` unary function to apply.

```c
void stdlib_strided_smskmap( const int64_t N, const float *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, float *Y, const int64_t strideY, float (*fcn)( float ) );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/strided/base/smskmap.h"
#include <stdint.h>
#include <stdio.h>

// Define a callback:
static float scale( const float x ) {
    return x * 10.0f;
}

int main() {
    // Create an input strided array:
    float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };

    // Create a mask strided array:
    uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

    // Create an output strided array:
    float Y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideM = 1;
    int64_t strideY = -1;

    // Apply the callback:
    stdlib_strided_smskmap( N, X, strideX, M, strideM, Y, strideY, scale );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Y[ %lli ] = %f\n", i, Y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-smskmap.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-smskmap

[test-image]: https://github.com/stdlib-js/strided-base-smskmap/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/strided-base-smskmap/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-smskmap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-smskmap?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-smskmap
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-smskmap/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-smskmap/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

</section>

<!-- /.links -->
