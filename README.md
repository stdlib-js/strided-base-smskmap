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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smskmap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a unary function to a single-precision floating-point strided input array according to a strided mask array and assign results to a single-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
smskmap = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var smskmap = require( 'path/to/vendor/umd/strided-base-smskmap/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.smskmap;
})();
</script>
```

#### smskmap( N, x, strideX, mask, strideMask, y, strideY, fcn )

Applies a unary function to a single-precision floating-point strided input array according to a strided mask array and assigns results to a single-precision floating-point strided output array.

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
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskmap( 3, x, 2, m, 2, y, -1, absf );
// y => <Float32Array>[ 5.0, 0.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var absf = require( '@stdlib/math-base-special-absf' );

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

smskmap( 3, x1, -2, m1, 1, y1, 1, absf );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 0.0 ]
```

#### smskmap.ndarray( N, x, strideX, offsetX, mask, strideMask, offsetMask, y, strideY, offsetY, fcn )

Applies a unary function to a single-precision floating-point strided input array according to a strided mask array and assigns results to a single-precision floating-point strided output array using alternative indexing semantics.

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

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var absf = require( '@stdlib/math-base-special-absf' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskmap.ndarray( 3, x, 2, 1, m, 2, 1, y, -1, y.length-1, absf );
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-smskmap@umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/dmskmap`][@stdlib/strided/base/dmskmap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a double-precision floating-point strided input array according to a strided mask array and assign results to a double-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/mskunary`][@stdlib/strided/base/mskunary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array according to elements in a strided mask array and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/smap`][@stdlib/strided/base/smap]</span><span class="delimiter">: </span><span class="description">apply a unary function to a single-precision floating-point strided input array and assign results to a single-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/smskmap2`][@stdlib/strided/base/smskmap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to single-precision floating-point strided input arrays according to a strided mask array and assign results to a single-precision floating-point strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-smskmap.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-smskmap

[test-image]: https://github.com/stdlib-js/strided-base-smskmap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-smskmap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-smskmap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-smskmap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-smskmap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-smskmap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-smskmap/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-smskmap/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-smskmap/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-smskmap/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-smskmap/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-smskmap/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-smskmap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-smskmap/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/umd

<!-- <related-links> -->

[@stdlib/strided/base/dmskmap]: https://github.com/stdlib-js/strided-base-dmskmap/tree/umd

[@stdlib/strided/base/mskunary]: https://github.com/stdlib-js/strided-base-mskunary/tree/umd

[@stdlib/strided/base/smap]: https://github.com/stdlib-js/strided-base-smap/tree/umd

[@stdlib/strided/base/smskmap2]: https://github.com/stdlib-js/strided-base-smskmap2/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
