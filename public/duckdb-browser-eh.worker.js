'use strict';
var duckdb = (() => {
  var Uh = Object.create;
  var us = Object.defineProperty;
  var Lh = Object.getOwnPropertyDescriptor;
  var Nh = Object.getOwnPropertyNames;
  var kh = Object.getPrototypeOf,
    Ch = Object.prototype.hasOwnProperty;
  var sa = ((r) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(r, { get: (t, e) => (typeof require < 'u' ? require : t)[e] })
      : r)(function (r) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + r + '" is not supported');
  });
  var ds = (r, t) => () => (
      t || r((t = { exports: {} }).exports, t), t.exports
    ),
    dn = (r, t) => {
      for (var e in t) us(r, e, { get: t[e], enumerable: !0 });
    },
    Mc = (r, t, e, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let i of Nh(t))
          !Ch.call(r, i) &&
            i !== e &&
            us(r, i, {
              get: () => t[i],
              enumerable: !(n = Lh(t, i)) || n.enumerable,
            });
      return r;
    };
  var Uc = (r, t, e) => (
      (e = r != null ? Uh(kh(r)) : {}),
      Mc(
        t || !r || !r.__esModule
          ? us(e, 'default', { value: r, enumerable: !0 })
          : e,
        r
      )
    ),
    Ph = (r) => Mc(us({}, '__esModule', { value: !0 }), r);
  var rl = ds((L_, ps) => {
    var Lc,
      Nc,
      kc,
      Cc,
      Pc,
      Hc,
      Vc,
      zc,
      jc,
      fs,
      oa,
      Wc,
      $c,
      Yc,
      En,
      Xc,
      Gc,
      Kc,
      Jc,
      qc,
      Zc,
      Qc,
      tl,
      el,
      hs;
    (function (r) {
      var t =
        typeof global == 'object'
          ? global
          : typeof self == 'object'
          ? self
          : typeof this == 'object'
          ? this
          : {};
      typeof define == 'function' && define.amd
        ? define('tslib', ['exports'], function (n) {
            r(e(t, e(n)));
          })
        : typeof ps == 'object' && typeof ps.exports == 'object'
        ? r(e(t, e(ps.exports)))
        : r(e(t));
      function e(n, i) {
        return (
          n !== t &&
            (typeof Object.create == 'function'
              ? Object.defineProperty(n, '__esModule', { value: !0 })
              : (n.__esModule = !0)),
          function (s, o) {
            return (n[s] = i ? i(s, o) : o);
          }
        );
      }
    })(function (r) {
      var t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, i) {
            n.__proto__ = i;
          }) ||
        function (n, i) {
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
        };
      (Lc = function (n, i) {
        if (typeof i != 'function' && i !== null)
          throw new TypeError(
            'Class extends value ' + String(i) + ' is not a constructor or null'
          );
        t(n, i);
        function s() {
          this.constructor = n;
        }
        n.prototype =
          i === null
            ? Object.create(i)
            : ((s.prototype = i.prototype), new s());
      }),
        (Nc =
          Object.assign ||
          function (n) {
            for (var i, s = 1, o = arguments.length; s < o; s++) {
              i = arguments[s];
              for (var a in i)
                Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
            }
            return n;
          }),
        (kc = function (n, i) {
          var s = {};
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) &&
              i.indexOf(o) < 0 &&
              (s[o] = n[o]);
          if (n != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var a = 0, o = Object.getOwnPropertySymbols(n);
              a < o.length;
              a++
            )
              i.indexOf(o[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, o[a]) &&
                (s[o[a]] = n[o[a]]);
          return s;
        }),
        (Cc = function (n, i, s, o) {
          var a = arguments.length,
            c =
              a < 3
                ? i
                : o === null
                ? (o = Object.getOwnPropertyDescriptor(i, s))
                : o,
            u;
          if (
            typeof Reflect == 'object' &&
            typeof Reflect.decorate == 'function'
          )
            c = Reflect.decorate(n, i, s, o);
          else
            for (var p = n.length - 1; p >= 0; p--)
              (u = n[p]) &&
                (c = (a < 3 ? u(c) : a > 3 ? u(i, s, c) : u(i, s)) || c);
          return a > 3 && c && Object.defineProperty(i, s, c), c;
        }),
        (Pc = function (n, i) {
          return function (s, o) {
            i(s, o, n);
          };
        }),
        (Hc = function (n, i) {
          if (
            typeof Reflect == 'object' &&
            typeof Reflect.metadata == 'function'
          )
            return Reflect.metadata(n, i);
        }),
        (Vc = function (n, i, s, o) {
          function a(c) {
            return c instanceof s
              ? c
              : new s(function (u) {
                  u(c);
                });
          }
          return new (s || (s = Promise))(function (c, u) {
            function p(S) {
              try {
                _(o.next(S));
              } catch (J) {
                u(J);
              }
            }
            function b(S) {
              try {
                _(o.throw(S));
              } catch (J) {
                u(J);
              }
            }
            function _(S) {
              S.done ? c(S.value) : a(S.value).then(p, b);
            }
            _((o = o.apply(n, i || [])).next());
          });
        }),
        (zc = function (n, i) {
          var s = {
              label: 0,
              sent: function () {
                if (c[0] & 1) throw c[1];
                return c[1];
              },
              trys: [],
              ops: [],
            },
            o,
            a,
            c,
            u;
          return (
            (u = { next: p(0), throw: p(1), return: p(2) }),
            typeof Symbol == 'function' &&
              (u[Symbol.iterator] = function () {
                return this;
              }),
            u
          );
          function p(_) {
            return function (S) {
              return b([_, S]);
            };
          }
          function b(_) {
            if (o) throw new TypeError('Generator is already executing.');
            for (; s; )
              try {
                if (
                  ((o = 1),
                  a &&
                    (c =
                      _[0] & 2
                        ? a.return
                        : _[0]
                        ? a.throw || ((c = a.return) && c.call(a), 0)
                        : a.next) &&
                    !(c = c.call(a, _[1])).done)
                )
                  return c;
                switch (((a = 0), c && (_ = [_[0] & 2, c.value]), _[0])) {
                  case 0:
                  case 1:
                    c = _;
                    break;
                  case 4:
                    return s.label++, { value: _[1], done: !1 };
                  case 5:
                    s.label++, (a = _[1]), (_ = [0]);
                    continue;
                  case 7:
                    (_ = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      ((c = s.trys),
                      !(c = c.length > 0 && c[c.length - 1]) &&
                        (_[0] === 6 || _[0] === 2))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (_[0] === 3 && (!c || (_[1] > c[0] && _[1] < c[3]))) {
                      s.label = _[1];
                      break;
                    }
                    if (_[0] === 6 && s.label < c[1]) {
                      (s.label = c[1]), (c = _);
                      break;
                    }
                    if (c && s.label < c[2]) {
                      (s.label = c[2]), s.ops.push(_);
                      break;
                    }
                    c[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                _ = i.call(n, s);
              } catch (S) {
                (_ = [6, S]), (a = 0);
              } finally {
                o = c = 0;
              }
            if (_[0] & 5) throw _[1];
            return { value: _[0] ? _[1] : void 0, done: !0 };
          }
        }),
        (jc = function (n, i) {
          for (var s in n)
            s !== 'default' &&
              !Object.prototype.hasOwnProperty.call(i, s) &&
              hs(i, n, s);
        }),
        (hs = Object.create
          ? function (n, i, s, o) {
              o === void 0 && (o = s);
              var a = Object.getOwnPropertyDescriptor(i, s);
              (!a ||
                ('get' in a ? !i.__esModule : a.writable || a.configurable)) &&
                (a = {
                  enumerable: !0,
                  get: function () {
                    return i[s];
                  },
                }),
                Object.defineProperty(n, o, a);
            }
          : function (n, i, s, o) {
              o === void 0 && (o = s), (n[o] = i[s]);
            }),
        (fs = function (n) {
          var i = typeof Symbol == 'function' && Symbol.iterator,
            s = i && n[i],
            o = 0;
          if (s) return s.call(n);
          if (n && typeof n.length == 'number')
            return {
              next: function () {
                return (
                  n && o >= n.length && (n = void 0),
                  { value: n && n[o++], done: !n }
                );
              },
            };
          throw new TypeError(
            i ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        }),
        (oa = function (n, i) {
          var s = typeof Symbol == 'function' && n[Symbol.iterator];
          if (!s) return n;
          var o = s.call(n),
            a,
            c = [],
            u;
          try {
            for (; (i === void 0 || i-- > 0) && !(a = o.next()).done; )
              c.push(a.value);
          } catch (p) {
            u = { error: p };
          } finally {
            try {
              a && !a.done && (s = o.return) && s.call(o);
            } finally {
              if (u) throw u.error;
            }
          }
          return c;
        }),
        (Wc = function () {
          for (var n = [], i = 0; i < arguments.length; i++)
            n = n.concat(oa(arguments[i]));
          return n;
        }),
        ($c = function () {
          for (var n = 0, i = 0, s = arguments.length; i < s; i++)
            n += arguments[i].length;
          for (var o = Array(n), a = 0, i = 0; i < s; i++)
            for (var c = arguments[i], u = 0, p = c.length; u < p; u++, a++)
              o[a] = c[u];
          return o;
        }),
        (Yc = function (n, i, s) {
          if (s || arguments.length === 2)
            for (var o = 0, a = i.length, c; o < a; o++)
              (c || !(o in i)) &&
                (c || (c = Array.prototype.slice.call(i, 0, o)), (c[o] = i[o]));
          return n.concat(c || Array.prototype.slice.call(i));
        }),
        (En = function (n) {
          return this instanceof En ? ((this.v = n), this) : new En(n);
        }),
        (Xc = function (n, i, s) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var o = s.apply(n, i || []),
            a,
            c = [];
          return (
            (a = {}),
            u('next'),
            u('throw'),
            u('return'),
            (a[Symbol.asyncIterator] = function () {
              return this;
            }),
            a
          );
          function u(Z) {
            o[Z] &&
              (a[Z] = function (dt) {
                return new Promise(function (Ft, Zt) {
                  c.push([Z, dt, Ft, Zt]) > 1 || p(Z, dt);
                });
              });
          }
          function p(Z, dt) {
            try {
              b(o[Z](dt));
            } catch (Ft) {
              J(c[0][3], Ft);
            }
          }
          function b(Z) {
            Z.value instanceof En
              ? Promise.resolve(Z.value.v).then(_, S)
              : J(c[0][2], Z);
          }
          function _(Z) {
            p('next', Z);
          }
          function S(Z) {
            p('throw', Z);
          }
          function J(Z, dt) {
            Z(dt), c.shift(), c.length && p(c[0][0], c[0][1]);
          }
        }),
        (Gc = function (n) {
          var i, s;
          return (
            (i = {}),
            o('next'),
            o('throw', function (a) {
              throw a;
            }),
            o('return'),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );
          function o(a, c) {
            i[a] = n[a]
              ? function (u) {
                  return (s = !s)
                    ? { value: En(n[a](u)), done: a === 'return' }
                    : c
                    ? c(u)
                    : u;
                }
              : c;
          }
        }),
        (Kc = function (n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var i = n[Symbol.asyncIterator],
            s;
          return i
            ? i.call(n)
            : ((n = typeof fs == 'function' ? fs(n) : n[Symbol.iterator]()),
              (s = {}),
              o('next'),
              o('throw'),
              o('return'),
              (s[Symbol.asyncIterator] = function () {
                return this;
              }),
              s);
          function o(c) {
            s[c] =
              n[c] &&
              function (u) {
                return new Promise(function (p, b) {
                  (u = n[c](u)), a(p, b, u.done, u.value);
                });
              };
          }
          function a(c, u, p, b) {
            Promise.resolve(b).then(function (_) {
              c({ value: _, done: p });
            }, u);
          }
        }),
        (Jc = function (n, i) {
          return (
            Object.defineProperty
              ? Object.defineProperty(n, 'raw', { value: i })
              : (n.raw = i),
            n
          );
        });
      var e = Object.create
        ? function (n, i) {
            Object.defineProperty(n, 'default', { enumerable: !0, value: i });
          }
        : function (n, i) {
            n.default = i;
          };
      (qc = function (n) {
        if (n && n.__esModule) return n;
        var i = {};
        if (n != null)
          for (var s in n)
            s !== 'default' &&
              Object.prototype.hasOwnProperty.call(n, s) &&
              hs(i, n, s);
        return e(i, n), i;
      }),
        (Zc = function (n) {
          return n && n.__esModule ? n : { default: n };
        }),
        (Qc = function (n, i, s, o) {
          if (s === 'a' && !o)
            throw new TypeError(
              'Private accessor was defined without a getter'
            );
          if (typeof i == 'function' ? n !== i || !o : !i.has(n))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return s === 'm' ? o : s === 'a' ? o.call(n) : o ? o.value : i.get(n);
        }),
        (tl = function (n, i, s, o, a) {
          if (o === 'm') throw new TypeError('Private method is not writable');
          if (o === 'a' && !a)
            throw new TypeError(
              'Private accessor was defined without a setter'
            );
          if (typeof i == 'function' ? n !== i || !a : !i.has(n))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return o === 'a' ? a.call(n, s) : a ? (a.value = s) : i.set(n, s), s;
        }),
        (el = function (n, i) {
          if (i === null || (typeof i != 'object' && typeof i != 'function'))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof n == 'function' ? i === n : n.has(i);
        }),
        r('__extends', Lc),
        r('__assign', Nc),
        r('__rest', kc),
        r('__decorate', Cc),
        r('__param', Pc),
        r('__metadata', Hc),
        r('__awaiter', Vc),
        r('__generator', zc),
        r('__exportStar', jc),
        r('__createBinding', hs),
        r('__values', fs),
        r('__read', oa),
        r('__spread', Wc),
        r('__spreadArrays', $c),
        r('__spreadArray', Yc),
        r('__await', En),
        r('__asyncGenerator', Xc),
        r('__asyncDelegator', Gc),
        r('__asyncValues', Kc),
        r('__makeTemplateObject', Jc),
        r('__importStar', qc),
        r('__importDefault', Zc),
        r('__classPrivateFieldGet', Qc),
        r('__classPrivateFieldSet', tl),
        r('__classPrivateFieldIn', el);
    });
  });
  var ic = ds(() => {});
  var zu = ds(() => {});
  var Ku = ds((exports, module) => {
    (function () {
      'use strict';
      var ERROR = 'input is invalid type',
        WINDOW = typeof window == 'object',
        root = WINDOW ? window : {};
      root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
      var WEB_WORKER = !WINDOW && typeof self == 'object',
        NODE_JS =
          !root.JS_SHA256_NO_NODE_JS &&
          typeof process == 'object' &&
          process.versions &&
          process.versions.node;
      NODE_JS ? (root = global) : WEB_WORKER && (root = self);
      var COMMON_JS =
          !root.JS_SHA256_NO_COMMON_JS &&
          typeof module == 'object' &&
          module.exports,
        AMD = typeof define == 'function' && define.amd,
        ARRAY_BUFFER =
          !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u',
        HEX_CHARS = '0123456789abcdef'.split(''),
        EXTRA = [-2147483648, 8388608, 32768, 128],
        SHIFT = [24, 16, 8, 0],
        K = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'],
        blocks = [];
      (root.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
        (Array.isArray = function (r) {
          return Object.prototype.toString.call(r) === '[object Array]';
        }),
        ARRAY_BUFFER &&
          (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
          (ArrayBuffer.isView = function (r) {
            return (
              typeof r == 'object' &&
              r.buffer &&
              r.buffer.constructor === ArrayBuffer
            );
          });
      var createOutputMethod = function (r, t) {
          return function (e) {
            return new Sha256(t, !0).update(e)[r]();
          };
        },
        createMethod = function (r) {
          var t = createOutputMethod('hex', r);
          NODE_JS && (t = nodeWrap(t, r)),
            (t.create = function () {
              return new Sha256(r);
            }),
            (t.update = function (i) {
              return t.create().update(i);
            });
          for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var n = OUTPUT_TYPES[e];
            t[n] = createOutputMethod(n, r);
          }
          return t;
        },
        nodeWrap = function (method, is224) {
          var crypto = eval("require('crypto')"),
            Buffer = eval("require('buffer').Buffer"),
            algorithm = is224 ? 'sha224' : 'sha256',
            nodeMethod = function (r) {
              if (typeof r == 'string')
                return crypto
                  .createHash(algorithm)
                  .update(r, 'utf8')
                  .digest('hex');
              if (r == null) throw new Error(ERROR);
              return (
                r.constructor === ArrayBuffer && (r = new Uint8Array(r)),
                Array.isArray(r) ||
                ArrayBuffer.isView(r) ||
                r.constructor === Buffer
                  ? crypto
                      .createHash(algorithm)
                      .update(new Buffer(r))
                      .digest('hex')
                  : method(r)
              );
            };
          return nodeMethod;
        },
        createHmacOutputMethod = function (r, t) {
          return function (e, n) {
            return new HmacSha256(e, t, !0).update(n)[r]();
          };
        },
        createHmacMethod = function (r) {
          var t = createHmacOutputMethod('hex', r);
          (t.create = function (i) {
            return new HmacSha256(i, r);
          }),
            (t.update = function (i, s) {
              return t.create(i).update(s);
            });
          for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var n = OUTPUT_TYPES[e];
            t[n] = createHmacOutputMethod(n, r);
          }
          return t;
        };
      function Sha256(r, t) {
        t
          ? ((blocks[0] =
              blocks[16] =
              blocks[1] =
              blocks[2] =
              blocks[3] =
              blocks[4] =
              blocks[5] =
              blocks[6] =
              blocks[7] =
              blocks[8] =
              blocks[9] =
              blocks[10] =
              blocks[11] =
              blocks[12] =
              blocks[13] =
              blocks[14] =
              blocks[15] =
                0),
            (this.blocks = blocks))
          : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          r
            ? ((this.h0 = 3238371032),
              (this.h1 = 914150663),
              (this.h2 = 812702999),
              (this.h3 = 4144912697),
              (this.h4 = 4290775857),
              (this.h5 = 1750603025),
              (this.h6 = 1694076839),
              (this.h7 = 3204075428))
            : ((this.h0 = 1779033703),
              (this.h1 = 3144134277),
              (this.h2 = 1013904242),
              (this.h3 = 2773480762),
              (this.h4 = 1359893119),
              (this.h5 = 2600822924),
              (this.h6 = 528734635),
              (this.h7 = 1541459225)),
          (this.block = this.start = this.bytes = this.hBytes = 0),
          (this.finalized = this.hashed = !1),
          (this.first = !0),
          (this.is224 = r);
      }
      (Sha256.prototype.update = function (r) {
        if (!this.finalized) {
          var t,
            e = typeof r;
          if (e !== 'string') {
            if (e === 'object') {
              if (r === null) throw new Error(ERROR);
              if (ARRAY_BUFFER && r.constructor === ArrayBuffer)
                r = new Uint8Array(r);
              else if (
                !Array.isArray(r) &&
                (!ARRAY_BUFFER || !ArrayBuffer.isView(r))
              )
                throw new Error(ERROR);
            } else throw new Error(ERROR);
            t = !0;
          }
          for (var n, i = 0, s, o = r.length, a = this.blocks; i < o; ) {
            if (
              (this.hashed &&
                ((this.hashed = !1),
                (a[0] = this.block),
                (a[16] =
                  a[1] =
                  a[2] =
                  a[3] =
                  a[4] =
                  a[5] =
                  a[6] =
                  a[7] =
                  a[8] =
                  a[9] =
                  a[10] =
                  a[11] =
                  a[12] =
                  a[13] =
                  a[14] =
                  a[15] =
                    0)),
              t)
            )
              for (s = this.start; i < o && s < 64; ++i)
                a[s >> 2] |= r[i] << SHIFT[s++ & 3];
            else
              for (s = this.start; i < o && s < 64; ++i)
                (n = r.charCodeAt(i)),
                  n < 128
                    ? (a[s >> 2] |= n << SHIFT[s++ & 3])
                    : n < 2048
                    ? ((a[s >> 2] |= (192 | (n >> 6)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | (n & 63)) << SHIFT[s++ & 3]))
                    : n < 55296 || n >= 57344
                    ? ((a[s >> 2] |= (224 | (n >> 12)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | (n & 63)) << SHIFT[s++ & 3]))
                    : ((n =
                        65536 +
                        (((n & 1023) << 10) | (r.charCodeAt(++i) & 1023))),
                      (a[s >> 2] |= (240 | (n >> 18)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | ((n >> 12) & 63)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | ((n >> 6) & 63)) << SHIFT[s++ & 3]),
                      (a[s >> 2] |= (128 | (n & 63)) << SHIFT[s++ & 3]));
            (this.lastByteIndex = s),
              (this.bytes += s - this.start),
              s >= 64
                ? ((this.block = a[16]),
                  (this.start = s - 64),
                  this.hash(),
                  (this.hashed = !0))
                : (this.start = s);
          }
          return (
            this.bytes > 4294967295 &&
              ((this.hBytes += (this.bytes / 4294967296) << 0),
              (this.bytes = this.bytes % 4294967296)),
            this
          );
        }
      }),
        (Sha256.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var r = this.blocks,
              t = this.lastByteIndex;
            (r[16] = this.block),
              (r[t >> 2] |= EXTRA[t & 3]),
              (this.block = r[16]),
              t >= 56 &&
                (this.hashed || this.hash(),
                (r[0] = this.block),
                (r[16] =
                  r[1] =
                  r[2] =
                  r[3] =
                  r[4] =
                  r[5] =
                  r[6] =
                  r[7] =
                  r[8] =
                  r[9] =
                  r[10] =
                  r[11] =
                  r[12] =
                  r[13] =
                  r[14] =
                  r[15] =
                    0)),
              (r[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
              (r[15] = this.bytes << 3),
              this.hash();
          }
        }),
        (Sha256.prototype.hash = function () {
          var r = this.h0,
            t = this.h1,
            e = this.h2,
            n = this.h3,
            i = this.h4,
            s = this.h5,
            o = this.h6,
            a = this.h7,
            c = this.blocks,
            u,
            p,
            b,
            _,
            S,
            J,
            Z,
            dt,
            Ft,
            Zt,
            oe;
          for (u = 16; u < 64; ++u)
            (S = c[u - 15]),
              (p =
                ((S >>> 7) | (S << 25)) ^ ((S >>> 18) | (S << 14)) ^ (S >>> 3)),
              (S = c[u - 2]),
              (b =
                ((S >>> 17) | (S << 15)) ^
                ((S >>> 19) | (S << 13)) ^
                (S >>> 10)),
              (c[u] = (c[u - 16] + p + c[u - 7] + b) << 0);
          for (oe = t & e, u = 0; u < 64; u += 4)
            this.first
              ? (this.is224
                  ? ((dt = 300032),
                    (S = c[0] - 1413257819),
                    (a = (S - 150054599) << 0),
                    (n = (S + 24177077) << 0))
                  : ((dt = 704751109),
                    (S = c[0] - 210244248),
                    (a = (S - 1521486534) << 0),
                    (n = (S + 143694565) << 0)),
                (this.first = !1))
              : ((p =
                  ((r >>> 2) | (r << 30)) ^
                  ((r >>> 13) | (r << 19)) ^
                  ((r >>> 22) | (r << 10))),
                (b =
                  ((i >>> 6) | (i << 26)) ^
                  ((i >>> 11) | (i << 21)) ^
                  ((i >>> 25) | (i << 7))),
                (dt = r & t),
                (_ = dt ^ (r & e) ^ oe),
                (Z = (i & s) ^ (~i & o)),
                (S = a + b + Z + K[u] + c[u]),
                (J = p + _),
                (a = (n + S) << 0),
                (n = (S + J) << 0)),
              (p =
                ((n >>> 2) | (n << 30)) ^
                ((n >>> 13) | (n << 19)) ^
                ((n >>> 22) | (n << 10))),
              (b =
                ((a >>> 6) | (a << 26)) ^
                ((a >>> 11) | (a << 21)) ^
                ((a >>> 25) | (a << 7))),
              (Ft = n & r),
              (_ = Ft ^ (n & t) ^ dt),
              (Z = (a & i) ^ (~a & s)),
              (S = o + b + Z + K[u + 1] + c[u + 1]),
              (J = p + _),
              (o = (e + S) << 0),
              (e = (S + J) << 0),
              (p =
                ((e >>> 2) | (e << 30)) ^
                ((e >>> 13) | (e << 19)) ^
                ((e >>> 22) | (e << 10))),
              (b =
                ((o >>> 6) | (o << 26)) ^
                ((o >>> 11) | (o << 21)) ^
                ((o >>> 25) | (o << 7))),
              (Zt = e & n),
              (_ = Zt ^ (e & r) ^ Ft),
              (Z = (o & a) ^ (~o & i)),
              (S = s + b + Z + K[u + 2] + c[u + 2]),
              (J = p + _),
              (s = (t + S) << 0),
              (t = (S + J) << 0),
              (p =
                ((t >>> 2) | (t << 30)) ^
                ((t >>> 13) | (t << 19)) ^
                ((t >>> 22) | (t << 10))),
              (b =
                ((s >>> 6) | (s << 26)) ^
                ((s >>> 11) | (s << 21)) ^
                ((s >>> 25) | (s << 7))),
              (oe = t & e),
              (_ = oe ^ (t & n) ^ Zt),
              (Z = (s & o) ^ (~s & a)),
              (S = i + b + Z + K[u + 3] + c[u + 3]),
              (J = p + _),
              (i = (r + S) << 0),
              (r = (S + J) << 0);
          (this.h0 = (this.h0 + r) << 0),
            (this.h1 = (this.h1 + t) << 0),
            (this.h2 = (this.h2 + e) << 0),
            (this.h3 = (this.h3 + n) << 0),
            (this.h4 = (this.h4 + i) << 0),
            (this.h5 = (this.h5 + s) << 0),
            (this.h6 = (this.h6 + o) << 0),
            (this.h7 = (this.h7 + a) << 0);
        }),
        (Sha256.prototype.hex = function () {
          this.finalize();
          var r = this.h0,
            t = this.h1,
            e = this.h2,
            n = this.h3,
            i = this.h4,
            s = this.h5,
            o = this.h6,
            a = this.h7,
            c =
              HEX_CHARS[(r >> 28) & 15] +
              HEX_CHARS[(r >> 24) & 15] +
              HEX_CHARS[(r >> 20) & 15] +
              HEX_CHARS[(r >> 16) & 15] +
              HEX_CHARS[(r >> 12) & 15] +
              HEX_CHARS[(r >> 8) & 15] +
              HEX_CHARS[(r >> 4) & 15] +
              HEX_CHARS[r & 15] +
              HEX_CHARS[(t >> 28) & 15] +
              HEX_CHARS[(t >> 24) & 15] +
              HEX_CHARS[(t >> 20) & 15] +
              HEX_CHARS[(t >> 16) & 15] +
              HEX_CHARS[(t >> 12) & 15] +
              HEX_CHARS[(t >> 8) & 15] +
              HEX_CHARS[(t >> 4) & 15] +
              HEX_CHARS[t & 15] +
              HEX_CHARS[(e >> 28) & 15] +
              HEX_CHARS[(e >> 24) & 15] +
              HEX_CHARS[(e >> 20) & 15] +
              HEX_CHARS[(e >> 16) & 15] +
              HEX_CHARS[(e >> 12) & 15] +
              HEX_CHARS[(e >> 8) & 15] +
              HEX_CHARS[(e >> 4) & 15] +
              HEX_CHARS[e & 15] +
              HEX_CHARS[(n >> 28) & 15] +
              HEX_CHARS[(n >> 24) & 15] +
              HEX_CHARS[(n >> 20) & 15] +
              HEX_CHARS[(n >> 16) & 15] +
              HEX_CHARS[(n >> 12) & 15] +
              HEX_CHARS[(n >> 8) & 15] +
              HEX_CHARS[(n >> 4) & 15] +
              HEX_CHARS[n & 15] +
              HEX_CHARS[(i >> 28) & 15] +
              HEX_CHARS[(i >> 24) & 15] +
              HEX_CHARS[(i >> 20) & 15] +
              HEX_CHARS[(i >> 16) & 15] +
              HEX_CHARS[(i >> 12) & 15] +
              HEX_CHARS[(i >> 8) & 15] +
              HEX_CHARS[(i >> 4) & 15] +
              HEX_CHARS[i & 15] +
              HEX_CHARS[(s >> 28) & 15] +
              HEX_CHARS[(s >> 24) & 15] +
              HEX_CHARS[(s >> 20) & 15] +
              HEX_CHARS[(s >> 16) & 15] +
              HEX_CHARS[(s >> 12) & 15] +
              HEX_CHARS[(s >> 8) & 15] +
              HEX_CHARS[(s >> 4) & 15] +
              HEX_CHARS[s & 15] +
              HEX_CHARS[(o >> 28) & 15] +
              HEX_CHARS[(o >> 24) & 15] +
              HEX_CHARS[(o >> 20) & 15] +
              HEX_CHARS[(o >> 16) & 15] +
              HEX_CHARS[(o >> 12) & 15] +
              HEX_CHARS[(o >> 8) & 15] +
              HEX_CHARS[(o >> 4) & 15] +
              HEX_CHARS[o & 15];
          return (
            this.is224 ||
              (c +=
                HEX_CHARS[(a >> 28) & 15] +
                HEX_CHARS[(a >> 24) & 15] +
                HEX_CHARS[(a >> 20) & 15] +
                HEX_CHARS[(a >> 16) & 15] +
                HEX_CHARS[(a >> 12) & 15] +
                HEX_CHARS[(a >> 8) & 15] +
                HEX_CHARS[(a >> 4) & 15] +
                HEX_CHARS[a & 15]),
            c
          );
        }),
        (Sha256.prototype.toString = Sha256.prototype.hex),
        (Sha256.prototype.digest = function () {
          this.finalize();
          var r = this.h0,
            t = this.h1,
            e = this.h2,
            n = this.h3,
            i = this.h4,
            s = this.h5,
            o = this.h6,
            a = this.h7,
            c = [
              (r >> 24) & 255,
              (r >> 16) & 255,
              (r >> 8) & 255,
              r & 255,
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              t & 255,
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              e & 255,
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              n & 255,
              (i >> 24) & 255,
              (i >> 16) & 255,
              (i >> 8) & 255,
              i & 255,
              (s >> 24) & 255,
              (s >> 16) & 255,
              (s >> 8) & 255,
              s & 255,
              (o >> 24) & 255,
              (o >> 16) & 255,
              (o >> 8) & 255,
              o & 255,
            ];
          return (
            this.is224 ||
              c.push((a >> 24) & 255, (a >> 16) & 255, (a >> 8) & 255, a & 255),
            c
          );
        }),
        (Sha256.prototype.array = Sha256.prototype.digest),
        (Sha256.prototype.arrayBuffer = function () {
          this.finalize();
          var r = new ArrayBuffer(this.is224 ? 28 : 32),
            t = new DataView(r);
          return (
            t.setUint32(0, this.h0),
            t.setUint32(4, this.h1),
            t.setUint32(8, this.h2),
            t.setUint32(12, this.h3),
            t.setUint32(16, this.h4),
            t.setUint32(20, this.h5),
            t.setUint32(24, this.h6),
            this.is224 || t.setUint32(28, this.h7),
            r
          );
        });
      function HmacSha256(r, t, e) {
        var n,
          i = typeof r;
        if (i === 'string') {
          var s = [],
            o = r.length,
            a = 0,
            c;
          for (n = 0; n < o; ++n)
            (c = r.charCodeAt(n)),
              c < 128
                ? (s[a++] = c)
                : c < 2048
                ? ((s[a++] = 192 | (c >> 6)), (s[a++] = 128 | (c & 63)))
                : c < 55296 || c >= 57344
                ? ((s[a++] = 224 | (c >> 12)),
                  (s[a++] = 128 | ((c >> 6) & 63)),
                  (s[a++] = 128 | (c & 63)))
                : ((c =
                    65536 + (((c & 1023) << 10) | (r.charCodeAt(++n) & 1023))),
                  (s[a++] = 240 | (c >> 18)),
                  (s[a++] = 128 | ((c >> 12) & 63)),
                  (s[a++] = 128 | ((c >> 6) & 63)),
                  (s[a++] = 128 | (c & 63)));
          r = s;
        } else if (i === 'object') {
          if (r === null) throw new Error(ERROR);
          if (ARRAY_BUFFER && r.constructor === ArrayBuffer)
            r = new Uint8Array(r);
          else if (
            !Array.isArray(r) &&
            (!ARRAY_BUFFER || !ArrayBuffer.isView(r))
          )
            throw new Error(ERROR);
        } else throw new Error(ERROR);
        r.length > 64 && (r = new Sha256(t, !0).update(r).array());
        var u = [],
          p = [];
        for (n = 0; n < 64; ++n) {
          var b = r[n] || 0;
          (u[n] = 92 ^ b), (p[n] = 54 ^ b);
        }
        Sha256.call(this, t, e),
          this.update(p),
          (this.oKeyPad = u),
          (this.inner = !0),
          (this.sharedMemory = e);
      }
      (HmacSha256.prototype = new Sha256()),
        (HmacSha256.prototype.finalize = function () {
          if ((Sha256.prototype.finalize.call(this), this.inner)) {
            this.inner = !1;
            var r = this.array();
            Sha256.call(this, this.is224, this.sharedMemory),
              this.update(this.oKeyPad),
              this.update(r),
              Sha256.prototype.finalize.call(this);
          }
        });
      var exports = createMethod();
      (exports.sha256 = exports),
        (exports.sha224 = createMethod(!0)),
        (exports.sha256.hmac = createHmacMethod()),
        (exports.sha224.hmac = createHmacMethod(!0)),
        COMMON_JS
          ? (module.exports = exports)
          : ((root.sha256 = exports.sha256),
            (root.sha224 = exports.sha224),
            AMD &&
              define(function () {
                return exports;
              }));
    })();
  });
  var O_ = {};
  dn(O_, { registerWorker: () => Qu });
  var nl = Uc(rl(), 1),
    {
      __extends: N_,
      __assign: k_,
      __rest: il,
      __decorate: C_,
      __param: P_,
      __metadata: H_,
      __awaiter: I,
      __generator: V_,
      __exportStar: z_,
      __createBinding: j_,
      __values: W_,
      __read: $_,
      __spread: Y_,
      __spreadArrays: X_,
      __spreadArray: G_,
      __await: W,
      __asyncGenerator: ue,
      __asyncDelegator: On,
      __asyncValues: Ee,
      __makeTemplateObject: K_,
      __importStar: J_,
      __importDefault: q_,
      __classPrivateFieldGet: Z_,
      __classPrivateFieldSet: Q_,
      __classPrivateFieldIn: ty,
    } = nl.default;
  var fa = {};
  dn(fa, {
    compareArrayLike: () => da,
    joinUint8Arrays: () => Ie,
    memcpy: () => Rn,
    rebaseValueOffsets: () => hi,
    toArrayBufferView: () => $,
    toArrayBufferViewAsyncIterator: () => We,
    toArrayBufferViewIterator: () => or,
    toBigInt64Array: () => Yh,
    toBigUint64Array: () => Kh,
    toFloat32Array: () => Jh,
    toFloat32ArrayAsyncIterator: () => fp,
    toFloat32ArrayIterator: () => ip,
    toFloat64Array: () => qh,
    toFloat64ArrayAsyncIterator: () => hp,
    toFloat64ArrayIterator: () => sp,
    toInt16Array: () => $h,
    toInt16ArrayAsyncIterator: () => cp,
    toInt16ArrayIterator: () => tp,
    toInt32Array: () => fn,
    toInt32ArrayAsyncIterator: () => lp,
    toInt32ArrayIterator: () => ep,
    toInt8Array: () => Wh,
    toInt8ArrayAsyncIterator: () => ap,
    toInt8ArrayIterator: () => Qh,
    toUint16Array: () => Xh,
    toUint16ArrayAsyncIterator: () => up,
    toUint16ArrayIterator: () => rp,
    toUint32Array: () => Gh,
    toUint32ArrayAsyncIterator: () => dp,
    toUint32ArrayIterator: () => np,
    toUint8Array: () => L,
    toUint8ArrayAsyncIterator: () => ua,
    toUint8ArrayIterator: () => la,
    toUint8ClampedArray: () => Zh,
    toUint8ClampedArrayAsyncIterator: () => pp,
    toUint8ClampedArrayIterator: () => op,
  });
  var Hh = new TextDecoder('utf-8'),
    di = (r) => Hh.decode(r),
    Vh = new TextEncoder(),
    Yr = (r) => Vh.encode(r);
  var [ny, ms] = (() => {
      let r = () => {
        throw new Error('BigInt is not available in this environment');
      };
      function t() {
        throw r();
      }
      return (
        (t.asIntN = () => {
          throw r();
        }),
        (t.asUintN = () => {
          throw r();
        }),
        typeof BigInt < 'u' ? [BigInt, !0] : [t, !1]
      );
    })(),
    [Oe, iy] = (() => {
      let r = () => {
        throw new Error('BigInt64Array is not available in this environment');
      };
      class t {
        static get BYTES_PER_ELEMENT() {
          return 8;
        }
        static of() {
          throw r();
        }
        static from() {
          throw r();
        }
        constructor() {
          throw r();
        }
      }
      return typeof BigInt64Array < 'u' ? [BigInt64Array, !0] : [t, !1];
    })(),
    [Re, sy] = (() => {
      let r = () => {
        throw new Error('BigUint64Array is not available in this environment');
      };
      class t {
        static get BYTES_PER_ELEMENT() {
          return 8;
        }
        static of() {
          throw r();
        }
        static from() {
          throw r();
        }
        constructor() {
          throw r();
        }
      }
      return typeof BigUint64Array < 'u' ? [BigUint64Array, !0] : [t, !1];
    })();
  var zh = (r) => typeof r == 'number',
    sl = (r) => typeof r == 'boolean',
    Mt = (r) => typeof r == 'function',
    re = (r) => r != null && Object(r) === r,
    ze = (r) => re(r) && Mt(r.then);
  var je = (r) => re(r) && Mt(r[Symbol.iterator]),
    Me = (r) => re(r) && Mt(r[Symbol.asyncIterator]),
    _s = (r) => re(r) && re(r.schema);
  var ys = (r) => re(r) && 'done' in r && 'value' in r;
  var bs = (r) => re(r) && Mt(r.stat) && zh(r.fd);
  var gs = (r) => re(r) && fi(r.body),
    ws = (r) => '_getDOMStream' in r && '_getNodeStream' in r,
    ol = (r) => re(r) && Mt(r.abort) && Mt(r.getWriter) && !ws(r),
    fi = (r) => re(r) && Mt(r.cancel) && Mt(r.getReader) && !ws(r),
    al = (r) => re(r) && Mt(r.end) && Mt(r.write) && sl(r.writable) && !ws(r),
    vs = (r) => re(r) && Mt(r.read) && Mt(r.pipe) && sl(r.readable) && !ws(r),
    cl = (r) =>
      re(r) &&
      Mt(r.clear) &&
      Mt(r.bytes) &&
      Mt(r.position) &&
      Mt(r.setPosition) &&
      Mt(r.capacity) &&
      Mt(r.getBufferIdentifier) &&
      Mt(r.createLong);
  var ca = typeof SharedArrayBuffer < 'u' ? SharedArrayBuffer : ArrayBuffer;
  function jh(r) {
    let t = r[0] ? [r[0]] : [],
      e,
      n,
      i,
      s;
    for (let o, a, c = 0, u = 0, p = r.length; ++c < p; ) {
      if (
        ((o = t[u]),
        (a = r[c]),
        !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset)
      ) {
        a && (t[++u] = a);
        continue;
      }
      if (
        (({ byteOffset: e, byteLength: i } = o),
        ({ byteOffset: n, byteLength: s } = a),
        e + i < n || n + s < e)
      ) {
        a && (t[++u] = a);
        continue;
      }
      t[u] = new Uint8Array(o.buffer, e, n - e + s);
    }
    return t;
  }
  function Rn(r, t, e = 0, n = t.byteLength) {
    let i = r.byteLength,
      s = new Uint8Array(r.buffer, r.byteOffset, i),
      o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
    return s.set(o, e), r;
  }
  function Ie(r, t) {
    let e = jh(r),
      n = e.reduce((p, b) => p + b.byteLength, 0),
      i,
      s,
      o,
      a = 0,
      c = -1,
      u = Math.min(t || Number.POSITIVE_INFINITY, n);
    for (let p = e.length; ++c < p; ) {
      if (
        ((i = e[c]),
        (s = i.subarray(0, Math.min(i.length, u - a))),
        u <= a + s.length)
      ) {
        s.length < i.length
          ? (e[c] = i.subarray(s.length))
          : s.length === i.length && c++,
          o ? Rn(o, s, a) : (o = s);
        break;
      }
      Rn(o || (o = new Uint8Array(u)), s, a), (a += s.length);
    }
    return [o || new Uint8Array(0), e.slice(c), n - (o ? o.byteLength : 0)];
  }
  function $(r, t) {
    let e = ys(t) ? t.value : t;
    return e instanceof r
      ? r === Uint8Array
        ? new r(e.buffer, e.byteOffset, e.byteLength)
        : e
      : e
      ? (typeof e == 'string' && (e = Yr(e)),
        e instanceof ArrayBuffer
          ? new r(e)
          : e instanceof ca
          ? new r(e)
          : cl(e)
          ? $(r, e.bytes())
          : ArrayBuffer.isView(e)
          ? e.byteLength <= 0
            ? new r(0)
            : new r(e.buffer, e.byteOffset, e.byteLength / r.BYTES_PER_ELEMENT)
          : r.from(e))
      : new r(0);
  }
  var Wh = (r) => $(Int8Array, r),
    $h = (r) => $(Int16Array, r),
    fn = (r) => $(Int32Array, r),
    Yh = (r) => $(Oe, r),
    L = (r) => $(Uint8Array, r),
    Xh = (r) => $(Uint16Array, r),
    Gh = (r) => $(Uint32Array, r),
    Kh = (r) => $(Re, r),
    Jh = (r) => $(Float32Array, r),
    qh = (r) => $(Float64Array, r),
    Zh = (r) => $(Uint8ClampedArray, r),
    aa = (r) => (r.next(), r);
  function* or(r, t) {
    let e = function* (i) {
        yield i;
      },
      n =
        typeof t == 'string' ||
        ArrayBuffer.isView(t) ||
        t instanceof ArrayBuffer ||
        t instanceof ca
          ? e(t)
          : je(t)
          ? t
          : e(t);
    return (
      yield* aa(
        (function* (i) {
          let s = null;
          do s = i.next(yield $(r, s));
          while (!s.done);
        })(n[Symbol.iterator]())
      ),
      new r()
    );
  }
  var Qh = (r) => or(Int8Array, r),
    tp = (r) => or(Int16Array, r),
    ep = (r) => or(Int32Array, r),
    la = (r) => or(Uint8Array, r),
    rp = (r) => or(Uint16Array, r),
    np = (r) => or(Uint32Array, r),
    ip = (r) => or(Float32Array, r),
    sp = (r) => or(Float64Array, r),
    op = (r) => or(Uint8ClampedArray, r);
  function We(r, t) {
    return ue(this, arguments, function* () {
      if (ze(t)) return yield W(yield W(yield* On(Ee(We(r, yield W(t))))));
      let n = function (o) {
          return ue(this, arguments, function* () {
            yield yield W(yield W(o));
          });
        },
        i = function (o) {
          return ue(this, arguments, function* () {
            yield W(
              yield* On(
                Ee(
                  aa(
                    (function* (a) {
                      let c = null;
                      do c = a.next(yield c == null ? void 0 : c.value);
                      while (!c.done);
                    })(o[Symbol.iterator]())
                  )
                )
              )
            );
          });
        },
        s =
          typeof t == 'string' ||
          ArrayBuffer.isView(t) ||
          t instanceof ArrayBuffer ||
          t instanceof ca
            ? n(t)
            : je(t)
            ? i(t)
            : Me(t)
            ? t
            : n(t);
      return (
        yield W(
          yield* On(
            Ee(
              aa(
                (function (o) {
                  return ue(this, arguments, function* () {
                    let a = null;
                    do a = yield W(o.next(yield yield W($(r, a))));
                    while (!a.done);
                  });
                })(s[Symbol.asyncIterator]())
              )
            )
          )
        ),
        yield W(new r())
      );
    });
  }
  var ap = (r) => We(Int8Array, r),
    cp = (r) => We(Int16Array, r),
    lp = (r) => We(Int32Array, r),
    ua = (r) => We(Uint8Array, r),
    up = (r) => We(Uint16Array, r),
    dp = (r) => We(Uint32Array, r),
    fp = (r) => We(Float32Array, r),
    hp = (r) => We(Float64Array, r),
    pp = (r) => We(Uint8ClampedArray, r);
  function hi(r, t, e) {
    if (r !== 0) {
      e = e.slice(0, t + 1);
      for (let n = -1; ++n <= t; ) e[n] += r;
    }
    return e;
  }
  function da(r, t) {
    let e = 0,
      n = r.length;
    if (n !== t.length) return !1;
    if (n > 0)
      do if (r[e] !== t[e]) return !1;
      while (++e < n);
    return !0;
  }
  var jt = {
      fromIterable(r) {
        return Ss(mp(r));
      },
      fromAsyncIterable(r) {
        return Ss(_p(r));
      },
      fromDOMStream(r) {
        return Ss(yp(r));
      },
      fromNodeStream(r) {
        return Ss(bp(r));
      },
      toDOMStream(r, t) {
        throw new Error('"toDOMStream" not available in this environment');
      },
      toNodeStream(r, t) {
        throw new Error('"toNodeStream" not available in this environment');
      },
    },
    Ss = (r) => (r.next(), r);
  function* mp(r) {
    let t,
      e = !1,
      n = [],
      i,
      s,
      o,
      a = 0;
    function c() {
      return s === 'peek' ? Ie(n, o)[0] : (([i, n, a] = Ie(n, o)), i);
    }
    ({ cmd: s, size: o } = yield null);
    let u = la(r)[Symbol.iterator]();
    try {
      do
        if (
          (({ done: t, value: i } = Number.isNaN(o - a)
            ? u.next()
            : u.next(o - a)),
          !t && i.byteLength > 0 && (n.push(i), (a += i.byteLength)),
          t || o <= a)
        )
          do ({ cmd: s, size: o } = yield c());
          while (o < a);
      while (!t);
    } catch (p) {
      (e = !0) && typeof u.throw == 'function' && u.throw(p);
    } finally {
      e === !1 && typeof u.return == 'function' && u.return(null);
    }
    return null;
  }
  function _p(r) {
    return ue(this, arguments, function* () {
      let e,
        n = !1,
        i = [],
        s,
        o,
        a,
        c = 0;
      function u() {
        return o === 'peek' ? Ie(i, a)[0] : (([s, i, c] = Ie(i, a)), s);
      }
      ({ cmd: o, size: a } = yield yield W(null));
      let p = ua(r)[Symbol.asyncIterator]();
      try {
        do
          if (
            (({ done: e, value: s } = Number.isNaN(a - c)
              ? yield W(p.next())
              : yield W(p.next(a - c))),
            !e && s.byteLength > 0 && (i.push(s), (c += s.byteLength)),
            e || a <= c)
          )
            do ({ cmd: o, size: a } = yield yield W(u()));
            while (a < c);
        while (!e);
      } catch (b) {
        (n = !0) && typeof p.throw == 'function' && (yield W(p.throw(b)));
      } finally {
        n === !1 &&
          typeof p.return == 'function' &&
          (yield W(p.return(new Uint8Array(0))));
      }
      return yield W(null);
    });
  }
  function yp(r) {
    return ue(this, arguments, function* () {
      let e = !1,
        n = !1,
        i = [],
        s,
        o,
        a,
        c = 0;
      function u() {
        return o === 'peek' ? Ie(i, a)[0] : (([s, i, c] = Ie(i, a)), s);
      }
      ({ cmd: o, size: a } = yield yield W(null));
      let p = new pa(r);
      try {
        do
          if (
            (({ done: e, value: s } = Number.isNaN(a - c)
              ? yield W(p.read())
              : yield W(p.read(a - c))),
            !e && s.byteLength > 0 && (i.push(L(s)), (c += s.byteLength)),
            e || a <= c)
          )
            do ({ cmd: o, size: a } = yield yield W(u()));
            while (a < c);
        while (!e);
      } catch (b) {
        (n = !0) && (yield W(p.cancel(b)));
      } finally {
        n === !1 ? yield W(p.cancel()) : r.locked && p.releaseLock();
      }
      return yield W(null);
    });
  }
  var pa = class {
      constructor(t) {
        (this.source = t),
          (this.reader = null),
          (this.reader = this.source.getReader()),
          this.reader.closed.catch(() => {});
      }
      get closed() {
        return this.reader
          ? this.reader.closed.catch(() => {})
          : Promise.resolve();
      }
      releaseLock() {
        this.reader && this.reader.releaseLock(), (this.reader = null);
      }
      cancel(t) {
        return I(this, void 0, void 0, function* () {
          let { reader: e, source: n } = this;
          e && (yield e.cancel(t).catch(() => {})),
            n && n.locked && this.releaseLock();
        });
      }
      read(t) {
        return I(this, void 0, void 0, function* () {
          if (t === 0)
            return { done: this.reader == null, value: new Uint8Array(0) };
          let e = yield this.reader.read();
          return !e.done && (e.value = L(e)), e;
        });
      }
    },
    ha = (r, t) => {
      let e = (i) => n([t, i]),
        n;
      return [t, e, new Promise((i) => (n = i) && r.once(t, e))];
    };
  function bp(r) {
    return ue(this, arguments, function* () {
      let e = [],
        n = 'error',
        i = !1,
        s = null,
        o,
        a,
        c = 0,
        u = [],
        p;
      function b() {
        return o === 'peek' ? Ie(u, a)[0] : (([p, u, c] = Ie(u, a)), p);
      }
      if ((({ cmd: o, size: a } = yield yield W(null)), r.isTTY))
        return yield yield W(new Uint8Array(0)), yield W(null);
      try {
        (e[0] = ha(r, 'end')), (e[1] = ha(r, 'error'));
        do {
          if (
            ((e[2] = ha(r, 'readable')),
            ([n, s] = yield W(Promise.race(e.map((S) => S[2])))),
            n === 'error')
          )
            break;
          if (
            ((i = n === 'end') ||
              (Number.isFinite(a - c)
                ? ((p = L(r.read(a - c))),
                  p.byteLength < a - c && (p = L(r.read())))
                : (p = L(r.read())),
              p.byteLength > 0 && (u.push(p), (c += p.byteLength))),
            i || a <= c)
          )
            do ({ cmd: o, size: a } = yield yield W(b()));
            while (a < c);
        } while (!i);
      } finally {
        yield W(_(e, n === 'error' ? s : null));
      }
      return yield W(null);
      function _(S, J) {
        return (
          (p = u = null),
          new Promise((Z, dt) => {
            for (let [Ft, Zt] of S) r.off(Ft, Zt);
            try {
              let Ft = r.destroy;
              Ft && Ft.call(r, J), (J = void 0);
            } catch (Ft) {
              J = Ft || J;
            } finally {
              J != null ? dt(J) : Z();
            }
          })
        );
      }
    });
  }
  var Lt;
  (function (r) {
    (r[(r.V1 = 0)] = 'V1'),
      (r[(r.V2 = 1)] = 'V2'),
      (r[(r.V3 = 2)] = 'V3'),
      (r[(r.V4 = 3)] = 'V4'),
      (r[(r.V5 = 4)] = 'V5');
  })(Lt || (Lt = {}));
  var vt;
  (function (r) {
    (r[(r.Sparse = 0)] = 'Sparse'), (r[(r.Dense = 1)] = 'Dense');
  })(vt || (vt = {}));
  var yt;
  (function (r) {
    (r[(r.HALF = 0)] = 'HALF'),
      (r[(r.SINGLE = 1)] = 'SINGLE'),
      (r[(r.DOUBLE = 2)] = 'DOUBLE');
  })(yt || (yt = {}));
  var Wt;
  (function (r) {
    (r[(r.DAY = 0)] = 'DAY'), (r[(r.MILLISECOND = 1)] = 'MILLISECOND');
  })(Wt || (Wt = {}));
  var X;
  (function (r) {
    (r[(r.SECOND = 0)] = 'SECOND'),
      (r[(r.MILLISECOND = 1)] = 'MILLISECOND'),
      (r[(r.MICROSECOND = 2)] = 'MICROSECOND'),
      (r[(r.NANOSECOND = 3)] = 'NANOSECOND');
  })(X || (X = {}));
  var ne;
  (function (r) {
    (r[(r.YEAR_MONTH = 0)] = 'YEAR_MONTH'),
      (r[(r.DAY_TIME = 1)] = 'DAY_TIME'),
      (r[(r.MONTH_DAY_NANO = 2)] = 'MONTH_DAY_NANO');
  })(ne || (ne = {}));
  var tt;
  (function (r) {
    (r[(r.NONE = 0)] = 'NONE'),
      (r[(r.Schema = 1)] = 'Schema'),
      (r[(r.DictionaryBatch = 2)] = 'DictionaryBatch'),
      (r[(r.RecordBatch = 3)] = 'RecordBatch'),
      (r[(r.Tensor = 4)] = 'Tensor'),
      (r[(r.SparseTensor = 5)] = 'SparseTensor');
  })(tt || (tt = {}));
  var f;
  (function (r) {
    (r[(r.NONE = 0)] = 'NONE'),
      (r[(r.Null = 1)] = 'Null'),
      (r[(r.Int = 2)] = 'Int'),
      (r[(r.Float = 3)] = 'Float'),
      (r[(r.Binary = 4)] = 'Binary'),
      (r[(r.Utf8 = 5)] = 'Utf8'),
      (r[(r.Bool = 6)] = 'Bool'),
      (r[(r.Decimal = 7)] = 'Decimal'),
      (r[(r.Date = 8)] = 'Date'),
      (r[(r.Time = 9)] = 'Time'),
      (r[(r.Timestamp = 10)] = 'Timestamp'),
      (r[(r.Interval = 11)] = 'Interval'),
      (r[(r.List = 12)] = 'List'),
      (r[(r.Struct = 13)] = 'Struct'),
      (r[(r.Union = 14)] = 'Union'),
      (r[(r.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
      (r[(r.FixedSizeList = 16)] = 'FixedSizeList'),
      (r[(r.Map = 17)] = 'Map'),
      (r[(r.Dictionary = -1)] = 'Dictionary'),
      (r[(r.Int8 = -2)] = 'Int8'),
      (r[(r.Int16 = -3)] = 'Int16'),
      (r[(r.Int32 = -4)] = 'Int32'),
      (r[(r.Int64 = -5)] = 'Int64'),
      (r[(r.Uint8 = -6)] = 'Uint8'),
      (r[(r.Uint16 = -7)] = 'Uint16'),
      (r[(r.Uint32 = -8)] = 'Uint32'),
      (r[(r.Uint64 = -9)] = 'Uint64'),
      (r[(r.Float16 = -10)] = 'Float16'),
      (r[(r.Float32 = -11)] = 'Float32'),
      (r[(r.Float64 = -12)] = 'Float64'),
      (r[(r.DateDay = -13)] = 'DateDay'),
      (r[(r.DateMillisecond = -14)] = 'DateMillisecond'),
      (r[(r.TimestampSecond = -15)] = 'TimestampSecond'),
      (r[(r.TimestampMillisecond = -16)] = 'TimestampMillisecond'),
      (r[(r.TimestampMicrosecond = -17)] = 'TimestampMicrosecond'),
      (r[(r.TimestampNanosecond = -18)] = 'TimestampNanosecond'),
      (r[(r.TimeSecond = -19)] = 'TimeSecond'),
      (r[(r.TimeMillisecond = -20)] = 'TimeMillisecond'),
      (r[(r.TimeMicrosecond = -21)] = 'TimeMicrosecond'),
      (r[(r.TimeNanosecond = -22)] = 'TimeNanosecond'),
      (r[(r.DenseUnion = -23)] = 'DenseUnion'),
      (r[(r.SparseUnion = -24)] = 'SparseUnion'),
      (r[(r.IntervalDayTime = -25)] = 'IntervalDayTime'),
      (r[(r.IntervalYearMonth = -26)] = 'IntervalYearMonth');
  })(f || (f = {}));
  var Ue;
  (function (r) {
    (r[(r.OFFSET = 0)] = 'OFFSET'),
      (r[(r.DATA = 1)] = 'DATA'),
      (r[(r.VALIDITY = 2)] = 'VALIDITY'),
      (r[(r.TYPE = 3)] = 'TYPE');
  })(Ue || (Ue = {}));
  var Oa = {};
  dn(Oa, {
    clampIndex: () => lm,
    clampRange: () => _i,
    createElementComparator: () => Jr,
  });
  var gp = void 0;
  function $e(r) {
    if (r === null) return 'null';
    if (r === gp) return 'undefined';
    switch (typeof r) {
      case 'number':
        return `${r}`;
      case 'bigint':
        return `${r}`;
      case 'string':
        return `"${r}"`;
    }
    return typeof r[Symbol.toPrimitive] == 'function'
      ? r[Symbol.toPrimitive]('string')
      : ArrayBuffer.isView(r)
      ? r instanceof Oe || r instanceof Re
        ? `[${[...r].map((t) => $e(t))}]`
        : `[${r}]`
      : ArrayBuffer.isView(r)
      ? `[${r}]`
      : JSON.stringify(r, (t, e) => (typeof e == 'bigint' ? `${e}` : e));
  }
  var _a = {};
  dn(_a, {
    BN: () => hn,
    bignumToBigInt: () => Is,
    bignumToString: () => Xr,
    isArrowBigNumSymbol: () => ll,
  });
  var ll = Symbol.for('isArrowBigNum');
  function Ye(r, ...t) {
    return t.length === 0
      ? Object.setPrototypeOf($(this.TypedArray, r), this.constructor.prototype)
      : Object.setPrototypeOf(
          new this.TypedArray(r, ...t),
          this.constructor.prototype
        );
  }
  Ye.prototype[ll] = !0;
  Ye.prototype.toJSON = function () {
    return `"${Xr(this)}"`;
  };
  Ye.prototype.valueOf = function () {
    return ul(this);
  };
  Ye.prototype.toString = function () {
    return Xr(this);
  };
  Ye.prototype[Symbol.toPrimitive] = function (r = 'default') {
    switch (r) {
      case 'number':
        return ul(this);
      case 'string':
        return Xr(this);
      case 'default':
        return Is(this);
    }
    return Xr(this);
  };
  function Mn(...r) {
    return Ye.apply(this, r);
  }
  function Un(...r) {
    return Ye.apply(this, r);
  }
  function pi(...r) {
    return Ye.apply(this, r);
  }
  Object.setPrototypeOf(Mn.prototype, Object.create(Int32Array.prototype));
  Object.setPrototypeOf(Un.prototype, Object.create(Uint32Array.prototype));
  Object.setPrototypeOf(pi.prototype, Object.create(Uint32Array.prototype));
  Object.assign(Mn.prototype, Ye.prototype, {
    constructor: Mn,
    signed: !0,
    TypedArray: Int32Array,
    BigIntArray: Oe,
  });
  Object.assign(Un.prototype, Ye.prototype, {
    constructor: Un,
    signed: !1,
    TypedArray: Uint32Array,
    BigIntArray: Re,
  });
  Object.assign(pi.prototype, Ye.prototype, {
    constructor: pi,
    signed: !0,
    TypedArray: Uint32Array,
    BigIntArray: Re,
  });
  function ul(r) {
    let { buffer: t, byteOffset: e, length: n, signed: i } = r,
      s = new Re(t, e, n),
      o = i && s[s.length - 1] & (BigInt(1) << BigInt(63)),
      a = BigInt(o ? 1 : 0),
      c = BigInt(0);
    if (o) {
      for (let u of s) a += ~u * (BigInt(1) << (BigInt(32) * c++));
      a *= BigInt(-1);
    } else for (let u of s) a += u * (BigInt(1) << (BigInt(32) * c++));
    return a;
  }
  var Xr, Is;
  ms
    ? ((Is = (r) =>
        r.byteLength === 8
          ? new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]
          : ma(r)),
      (Xr = (r) =>
        r.byteLength === 8
          ? `${new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]}`
          : ma(r)))
    : ((Xr = ma), (Is = Xr));
  function ma(r) {
    let t = '',
      e = new Uint32Array(2),
      n = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2),
      i = new Uint32Array((n = new Uint16Array(n).reverse()).buffer),
      s = -1,
      o = n.length - 1;
    do {
      for (e[0] = n[(s = 0)]; s < o; )
        (n[s++] = e[1] = e[0] / 10), (e[0] = ((e[0] - e[1] * 10) << 16) + n[s]);
      (n[s] = e[1] = e[0] / 10), (e[0] = e[0] - e[1] * 10), (t = `${e[0]}${t}`);
    } while (i[0] || i[1] || i[2] || i[3]);
    return t != null ? t : '0';
  }
  var hn = class {
    static new(t, e) {
      switch (e) {
        case !0:
          return new Mn(t);
        case !1:
          return new Un(t);
      }
      switch (t.constructor) {
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Oe:
          return new Mn(t);
      }
      return t.byteLength === 16 ? new pi(t) : new Un(t);
    }
    static signed(t) {
      return new Mn(t);
    }
    static unsigned(t) {
      return new Un(t);
    }
    static decimal(t) {
      return new pi(t);
    }
    constructor(t, e) {
      return hn.new(t, e);
    }
  };
  var dl,
    fl,
    hl,
    pl,
    ml,
    _l,
    yl,
    bl,
    gl,
    wl,
    vl,
    Sl,
    Il,
    Fl,
    Al,
    xl,
    Bl,
    Tl,
    Dl,
    B = class {
      static isNull(t) {
        return (t == null ? void 0 : t.typeId) === f.Null;
      }
      static isInt(t) {
        return (t == null ? void 0 : t.typeId) === f.Int;
      }
      static isFloat(t) {
        return (t == null ? void 0 : t.typeId) === f.Float;
      }
      static isBinary(t) {
        return (t == null ? void 0 : t.typeId) === f.Binary;
      }
      static isUtf8(t) {
        return (t == null ? void 0 : t.typeId) === f.Utf8;
      }
      static isBool(t) {
        return (t == null ? void 0 : t.typeId) === f.Bool;
      }
      static isDecimal(t) {
        return (t == null ? void 0 : t.typeId) === f.Decimal;
      }
      static isDate(t) {
        return (t == null ? void 0 : t.typeId) === f.Date;
      }
      static isTime(t) {
        return (t == null ? void 0 : t.typeId) === f.Time;
      }
      static isTimestamp(t) {
        return (t == null ? void 0 : t.typeId) === f.Timestamp;
      }
      static isInterval(t) {
        return (t == null ? void 0 : t.typeId) === f.Interval;
      }
      static isList(t) {
        return (t == null ? void 0 : t.typeId) === f.List;
      }
      static isStruct(t) {
        return (t == null ? void 0 : t.typeId) === f.Struct;
      }
      static isUnion(t) {
        return (t == null ? void 0 : t.typeId) === f.Union;
      }
      static isFixedSizeBinary(t) {
        return (t == null ? void 0 : t.typeId) === f.FixedSizeBinary;
      }
      static isFixedSizeList(t) {
        return (t == null ? void 0 : t.typeId) === f.FixedSizeList;
      }
      static isMap(t) {
        return (t == null ? void 0 : t.typeId) === f.Map;
      }
      static isDictionary(t) {
        return (t == null ? void 0 : t.typeId) === f.Dictionary;
      }
      static isDenseUnion(t) {
        return B.isUnion(t) && t.mode === vt.Dense;
      }
      static isSparseUnion(t) {
        return B.isUnion(t) && t.mode === vt.Sparse;
      }
      get typeId() {
        return f.NONE;
      }
    };
  dl = Symbol.toStringTag;
  B[dl] = ((r) => (
    (r.children = null),
    (r.ArrayType = Array),
    (r[Symbol.toStringTag] = 'DataType')
  ))(B.prototype);
  var ie = class extends B {
    toString() {
      return 'Null';
    }
    get typeId() {
      return f.Null;
    }
  };
  fl = Symbol.toStringTag;
  ie[fl] = ((r) => (r[Symbol.toStringTag] = 'Null'))(ie.prototype);
  var xt = class extends B {
    constructor(t, e) {
      super(), (this.isSigned = t), (this.bitWidth = e);
    }
    get typeId() {
      return f.Int;
    }
    get ArrayType() {
      switch (this.bitWidth) {
        case 8:
          return this.isSigned ? Int8Array : Uint8Array;
        case 16:
          return this.isSigned ? Int16Array : Uint16Array;
        case 32:
          return this.isSigned ? Int32Array : Uint32Array;
        case 64:
          return this.isSigned ? Oe : Re;
      }
      throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() {
      return `${this.isSigned ? 'I' : 'Ui'}nt${this.bitWidth}`;
    }
  };
  hl = Symbol.toStringTag;
  xt[hl] = ((r) => (
    (r.isSigned = null), (r.bitWidth = null), (r[Symbol.toStringTag] = 'Int')
  ))(xt.prototype);
  var Fs = class extends xt {
      constructor() {
        super(!0, 8);
      }
      get ArrayType() {
        return Int8Array;
      }
    },
    As = class extends xt {
      constructor() {
        super(!0, 16);
      }
      get ArrayType() {
        return Int16Array;
      }
    },
    ar = class extends xt {
      constructor() {
        super(!0, 32);
      }
      get ArrayType() {
        return Int32Array;
      }
    },
    xs = class extends xt {
      constructor() {
        super(!0, 64);
      }
      get ArrayType() {
        return Oe;
      }
    },
    Bs = class extends xt {
      constructor() {
        super(!1, 8);
      }
      get ArrayType() {
        return Uint8Array;
      }
    },
    Ts = class extends xt {
      constructor() {
        super(!1, 16);
      }
      get ArrayType() {
        return Uint16Array;
      }
    },
    Ds = class extends xt {
      constructor() {
        super(!1, 32);
      }
      get ArrayType() {
        return Uint32Array;
      }
    },
    Es = class extends xt {
      constructor() {
        super(!1, 64);
      }
      get ArrayType() {
        return Re;
      }
    };
  Object.defineProperty(Fs.prototype, 'ArrayType', { value: Int8Array });
  Object.defineProperty(As.prototype, 'ArrayType', { value: Int16Array });
  Object.defineProperty(ar.prototype, 'ArrayType', { value: Int32Array });
  Object.defineProperty(xs.prototype, 'ArrayType', { value: Oe });
  Object.defineProperty(Bs.prototype, 'ArrayType', { value: Uint8Array });
  Object.defineProperty(Ts.prototype, 'ArrayType', { value: Uint16Array });
  Object.defineProperty(Ds.prototype, 'ArrayType', { value: Uint32Array });
  Object.defineProperty(Es.prototype, 'ArrayType', { value: Re });
  var de = class extends B {
    constructor(t) {
      super(), (this.precision = t);
    }
    get typeId() {
      return f.Float;
    }
    get ArrayType() {
      switch (this.precision) {
        case yt.HALF:
          return Uint16Array;
        case yt.SINGLE:
          return Float32Array;
        case yt.DOUBLE:
          return Float64Array;
      }
      throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() {
      return `Float${this.precision << 5 || 16}`;
    }
  };
  pl = Symbol.toStringTag;
  de[pl] = ((r) => ((r.precision = null), (r[Symbol.toStringTag] = 'Float')))(
    de.prototype
  );
  var Os = class extends de {
      constructor() {
        super(yt.HALF);
      }
    },
    Rs = class extends de {
      constructor() {
        super(yt.SINGLE);
      }
    },
    Ms = class extends de {
      constructor() {
        super(yt.DOUBLE);
      }
    };
  Object.defineProperty(Os.prototype, 'ArrayType', { value: Uint16Array });
  Object.defineProperty(Rs.prototype, 'ArrayType', { value: Float32Array });
  Object.defineProperty(Ms.prototype, 'ArrayType', { value: Float64Array });
  var Ar = class extends B {
    constructor() {
      super();
    }
    get typeId() {
      return f.Binary;
    }
    toString() {
      return 'Binary';
    }
  };
  ml = Symbol.toStringTag;
  Ar[ml] = ((r) => (
    (r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Binary')
  ))(Ar.prototype);
  var xr = class extends B {
    constructor() {
      super();
    }
    get typeId() {
      return f.Utf8;
    }
    toString() {
      return 'Utf8';
    }
  };
  _l = Symbol.toStringTag;
  xr[_l] = ((r) => (
    (r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Utf8')
  ))(xr.prototype);
  var Br = class extends B {
    constructor() {
      super();
    }
    get typeId() {
      return f.Bool;
    }
    toString() {
      return 'Bool';
    }
  };
  yl = Symbol.toStringTag;
  Br[yl] = ((r) => (
    (r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Bool')
  ))(Br.prototype);
  var Tr = class extends B {
    constructor(t, e, n = 128) {
      super(), (this.scale = t), (this.precision = e), (this.bitWidth = n);
    }
    get typeId() {
      return f.Decimal;
    }
    toString() {
      return `Decimal[${this.precision}e${this.scale > 0 ? '+' : ''}${
        this.scale
      }]`;
    }
  };
  bl = Symbol.toStringTag;
  Tr[bl] = ((r) => (
    (r.scale = null),
    (r.precision = null),
    (r.ArrayType = Uint32Array),
    (r[Symbol.toStringTag] = 'Decimal')
  ))(Tr.prototype);
  var Dr = class extends B {
    constructor(t) {
      super(), (this.unit = t);
    }
    get typeId() {
      return f.Date;
    }
    toString() {
      return `Date${(this.unit + 1) * 32}<${Wt[this.unit]}>`;
    }
  };
  gl = Symbol.toStringTag;
  Dr[gl] = ((r) => (
    (r.unit = null),
    (r.ArrayType = Int32Array),
    (r[Symbol.toStringTag] = 'Date')
  ))(Dr.prototype);
  var Xe = class extends B {
    constructor(t, e) {
      super(), (this.unit = t), (this.bitWidth = e);
    }
    get typeId() {
      return f.Time;
    }
    toString() {
      return `Time${this.bitWidth}<${X[this.unit]}>`;
    }
    get ArrayType() {
      switch (this.bitWidth) {
        case 32:
          return Int32Array;
        case 64:
          return Oe;
      }
      throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
  };
  wl = Symbol.toStringTag;
  Xe[wl] = ((r) => (
    (r.unit = null), (r.bitWidth = null), (r[Symbol.toStringTag] = 'Time')
  ))(Xe.prototype);
  var Er = class extends B {
    constructor(t, e) {
      super(), (this.unit = t), (this.timezone = e);
    }
    get typeId() {
      return f.Timestamp;
    }
    toString() {
      return `Timestamp<${X[this.unit]}${
        this.timezone ? `, ${this.timezone}` : ''
      }>`;
    }
  };
  vl = Symbol.toStringTag;
  Er[vl] = ((r) => (
    (r.unit = null),
    (r.timezone = null),
    (r.ArrayType = Int32Array),
    (r[Symbol.toStringTag] = 'Timestamp')
  ))(Er.prototype);
  var Or = class extends B {
    constructor(t) {
      super(), (this.unit = t);
    }
    get typeId() {
      return f.Interval;
    }
    toString() {
      return `Interval<${ne[this.unit]}>`;
    }
  };
  Sl = Symbol.toStringTag;
  Or[Sl] = ((r) => (
    (r.unit = null),
    (r.ArrayType = Int32Array),
    (r[Symbol.toStringTag] = 'Interval')
  ))(Or.prototype);
  var Ge = class extends B {
    constructor(t) {
      super(), (this.children = [t]);
    }
    get typeId() {
      return f.List;
    }
    toString() {
      return `List<${this.valueType}>`;
    }
    get valueType() {
      return this.children[0].type;
    }
    get valueField() {
      return this.children[0];
    }
    get ArrayType() {
      return this.valueType.ArrayType;
    }
  };
  Il = Symbol.toStringTag;
  Ge[Il] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'List')))(
    Ge.prototype
  );
  var ht = class extends B {
    constructor(t) {
      super(), (this.children = t);
    }
    get typeId() {
      return f.Struct;
    }
    toString() {
      return `Struct<{${this.children
        .map((t) => `${t.name}:${t.type}`)
        .join(', ')}}>`;
    }
  };
  Fl = Symbol.toStringTag;
  ht[Fl] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'Struct')))(
    ht.prototype
  );
  var Ke = class extends B {
    constructor(t, e, n) {
      super(),
        (this.mode = t),
        (this.children = n),
        (this.typeIds = e = Int32Array.from(e)),
        (this.typeIdToChildIndex = e.reduce(
          (i, s, o) => ((i[s] = o) && i) || i,
          Object.create(null)
        ));
    }
    get typeId() {
      return f.Union;
    }
    toString() {
      return `${this[Symbol.toStringTag]}<${this.children
        .map((t) => `${t.type}`)
        .join(' | ')}>`;
    }
  };
  Al = Symbol.toStringTag;
  Ke[Al] = ((r) => (
    (r.mode = null),
    (r.typeIds = null),
    (r.children = null),
    (r.typeIdToChildIndex = null),
    (r.ArrayType = Int8Array),
    (r[Symbol.toStringTag] = 'Union')
  ))(Ke.prototype);
  var Rr = class extends B {
    constructor(t) {
      super(), (this.byteWidth = t);
    }
    get typeId() {
      return f.FixedSizeBinary;
    }
    toString() {
      return `FixedSizeBinary[${this.byteWidth}]`;
    }
  };
  xl = Symbol.toStringTag;
  Rr[xl] = ((r) => (
    (r.byteWidth = null),
    (r.ArrayType = Uint8Array),
    (r[Symbol.toStringTag] = 'FixedSizeBinary')
  ))(Rr.prototype);
  var Je = class extends B {
    constructor(t, e) {
      super(), (this.listSize = t), (this.children = [e]);
    }
    get typeId() {
      return f.FixedSizeList;
    }
    get valueType() {
      return this.children[0].type;
    }
    get valueField() {
      return this.children[0];
    }
    get ArrayType() {
      return this.valueType.ArrayType;
    }
    toString() {
      return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
    }
  };
  Bl = Symbol.toStringTag;
  Je[Bl] = ((r) => (
    (r.children = null),
    (r.listSize = null),
    (r[Symbol.toStringTag] = 'FixedSizeList')
  ))(Je.prototype);
  var qe = class extends B {
    constructor(t, e = !1) {
      super(), (this.children = [t]), (this.keysSorted = e);
    }
    get typeId() {
      return f.Map;
    }
    get keyType() {
      return this.children[0].type.children[0].type;
    }
    get valueType() {
      return this.children[0].type.children[1].type;
    }
    get childType() {
      return this.children[0].type;
    }
    toString() {
      return `Map<{${this.children[0].type.children
        .map((t) => `${t.name}:${t.type}`)
        .join(', ')}}>`;
    }
  };
  Tl = Symbol.toStringTag;
  qe[Tl] = ((r) => (
    (r.children = null), (r.keysSorted = null), (r[Symbol.toStringTag] = 'Map_')
  ))(qe.prototype);
  var wp = (
      (r) => () =>
        ++r
    )(-1),
    Fe = class extends B {
      constructor(t, e, n, i) {
        super(),
          (this.indices = e),
          (this.dictionary = t),
          (this.isOrdered = i || !1),
          (this.id = n == null ? wp() : typeof n == 'number' ? n : n.low);
      }
      get typeId() {
        return f.Dictionary;
      }
      get children() {
        return this.dictionary.children;
      }
      get valueType() {
        return this.dictionary;
      }
      get ArrayType() {
        return this.dictionary.ArrayType;
      }
      toString() {
        return `Dictionary<${this.indices}, ${this.dictionary}>`;
      }
    };
  Dl = Symbol.toStringTag;
  Fe[Dl] = ((r) => (
    (r.id = null),
    (r.indices = null),
    (r.isOrdered = null),
    (r.dictionary = null),
    (r[Symbol.toStringTag] = 'Dictionary')
  ))(Fe.prototype);
  function Ae(r) {
    let t = r;
    switch (r.typeId) {
      case f.Decimal:
        return r.bitWidth / 32;
      case f.Timestamp:
        return 2;
      case f.Date:
        return 1 + t.unit;
      case f.Interval:
        return 1 + t.unit;
      case f.FixedSizeList:
        return t.listSize;
      case f.FixedSizeBinary:
        return t.byteWidth;
      default:
        return 1;
    }
  }
  var D = class {
    visitMany(t, ...e) {
      return t.map((n, i) => this.visit(n, ...e.map((s) => s[i])));
    }
    visit(...t) {
      return this.getVisitFn(t[0], !1).apply(this, t);
    }
    getVisitFn(t, e = !0) {
      return vp(this, t, e);
    }
    getVisitFnByTypeId(t, e = !0) {
      return Ln(this, t, e);
    }
    visitNull(t, ...e) {
      return null;
    }
    visitBool(t, ...e) {
      return null;
    }
    visitInt(t, ...e) {
      return null;
    }
    visitFloat(t, ...e) {
      return null;
    }
    visitUtf8(t, ...e) {
      return null;
    }
    visitBinary(t, ...e) {
      return null;
    }
    visitFixedSizeBinary(t, ...e) {
      return null;
    }
    visitDate(t, ...e) {
      return null;
    }
    visitTimestamp(t, ...e) {
      return null;
    }
    visitTime(t, ...e) {
      return null;
    }
    visitDecimal(t, ...e) {
      return null;
    }
    visitList(t, ...e) {
      return null;
    }
    visitStruct(t, ...e) {
      return null;
    }
    visitUnion(t, ...e) {
      return null;
    }
    visitDictionary(t, ...e) {
      return null;
    }
    visitInterval(t, ...e) {
      return null;
    }
    visitFixedSizeList(t, ...e) {
      return null;
    }
    visitMap(t, ...e) {
      return null;
    }
  };
  function vp(r, t, e = !0) {
    return typeof t == 'number'
      ? Ln(r, t, e)
      : typeof t == 'string' && t in f
      ? Ln(r, f[t], e)
      : t && t instanceof B
      ? Ln(r, El(t), e)
      : (t == null ? void 0 : t.type) && t.type instanceof B
      ? Ln(r, El(t.type), e)
      : Ln(r, f.NONE, e);
  }
  function Ln(r, t, e = !0) {
    let n = null;
    switch (t) {
      case f.Null:
        n = r.visitNull;
        break;
      case f.Bool:
        n = r.visitBool;
        break;
      case f.Int:
        n = r.visitInt;
        break;
      case f.Int8:
        n = r.visitInt8 || r.visitInt;
        break;
      case f.Int16:
        n = r.visitInt16 || r.visitInt;
        break;
      case f.Int32:
        n = r.visitInt32 || r.visitInt;
        break;
      case f.Int64:
        n = r.visitInt64 || r.visitInt;
        break;
      case f.Uint8:
        n = r.visitUint8 || r.visitInt;
        break;
      case f.Uint16:
        n = r.visitUint16 || r.visitInt;
        break;
      case f.Uint32:
        n = r.visitUint32 || r.visitInt;
        break;
      case f.Uint64:
        n = r.visitUint64 || r.visitInt;
        break;
      case f.Float:
        n = r.visitFloat;
        break;
      case f.Float16:
        n = r.visitFloat16 || r.visitFloat;
        break;
      case f.Float32:
        n = r.visitFloat32 || r.visitFloat;
        break;
      case f.Float64:
        n = r.visitFloat64 || r.visitFloat;
        break;
      case f.Utf8:
        n = r.visitUtf8;
        break;
      case f.Binary:
        n = r.visitBinary;
        break;
      case f.FixedSizeBinary:
        n = r.visitFixedSizeBinary;
        break;
      case f.Date:
        n = r.visitDate;
        break;
      case f.DateDay:
        n = r.visitDateDay || r.visitDate;
        break;
      case f.DateMillisecond:
        n = r.visitDateMillisecond || r.visitDate;
        break;
      case f.Timestamp:
        n = r.visitTimestamp;
        break;
      case f.TimestampSecond:
        n = r.visitTimestampSecond || r.visitTimestamp;
        break;
      case f.TimestampMillisecond:
        n = r.visitTimestampMillisecond || r.visitTimestamp;
        break;
      case f.TimestampMicrosecond:
        n = r.visitTimestampMicrosecond || r.visitTimestamp;
        break;
      case f.TimestampNanosecond:
        n = r.visitTimestampNanosecond || r.visitTimestamp;
        break;
      case f.Time:
        n = r.visitTime;
        break;
      case f.TimeSecond:
        n = r.visitTimeSecond || r.visitTime;
        break;
      case f.TimeMillisecond:
        n = r.visitTimeMillisecond || r.visitTime;
        break;
      case f.TimeMicrosecond:
        n = r.visitTimeMicrosecond || r.visitTime;
        break;
      case f.TimeNanosecond:
        n = r.visitTimeNanosecond || r.visitTime;
        break;
      case f.Decimal:
        n = r.visitDecimal;
        break;
      case f.List:
        n = r.visitList;
        break;
      case f.Struct:
        n = r.visitStruct;
        break;
      case f.Union:
        n = r.visitUnion;
        break;
      case f.DenseUnion:
        n = r.visitDenseUnion || r.visitUnion;
        break;
      case f.SparseUnion:
        n = r.visitSparseUnion || r.visitUnion;
        break;
      case f.Dictionary:
        n = r.visitDictionary;
        break;
      case f.Interval:
        n = r.visitInterval;
        break;
      case f.IntervalDayTime:
        n = r.visitIntervalDayTime || r.visitInterval;
        break;
      case f.IntervalYearMonth:
        n = r.visitIntervalYearMonth || r.visitInterval;
        break;
      case f.FixedSizeList:
        n = r.visitFixedSizeList;
        break;
      case f.Map:
        n = r.visitMap;
        break;
    }
    if (typeof n == 'function') return n;
    if (!e) return () => null;
    throw new Error(`Unrecognized type '${f[t]}'`);
  }
  function El(r) {
    switch (r.typeId) {
      case f.Null:
        return f.Null;
      case f.Int: {
        let { bitWidth: t, isSigned: e } = r;
        switch (t) {
          case 8:
            return e ? f.Int8 : f.Uint8;
          case 16:
            return e ? f.Int16 : f.Uint16;
          case 32:
            return e ? f.Int32 : f.Uint32;
          case 64:
            return e ? f.Int64 : f.Uint64;
        }
        return f.Int;
      }
      case f.Float:
        switch (r.precision) {
          case yt.HALF:
            return f.Float16;
          case yt.SINGLE:
            return f.Float32;
          case yt.DOUBLE:
            return f.Float64;
        }
        return f.Float;
      case f.Binary:
        return f.Binary;
      case f.Utf8:
        return f.Utf8;
      case f.Bool:
        return f.Bool;
      case f.Decimal:
        return f.Decimal;
      case f.Time:
        switch (r.unit) {
          case X.SECOND:
            return f.TimeSecond;
          case X.MILLISECOND:
            return f.TimeMillisecond;
          case X.MICROSECOND:
            return f.TimeMicrosecond;
          case X.NANOSECOND:
            return f.TimeNanosecond;
        }
        return f.Time;
      case f.Timestamp:
        switch (r.unit) {
          case X.SECOND:
            return f.TimestampSecond;
          case X.MILLISECOND:
            return f.TimestampMillisecond;
          case X.MICROSECOND:
            return f.TimestampMicrosecond;
          case X.NANOSECOND:
            return f.TimestampNanosecond;
        }
        return f.Timestamp;
      case f.Date:
        switch (r.unit) {
          case Wt.DAY:
            return f.DateDay;
          case Wt.MILLISECOND:
            return f.DateMillisecond;
        }
        return f.Date;
      case f.Interval:
        switch (r.unit) {
          case ne.DAY_TIME:
            return f.IntervalDayTime;
          case ne.YEAR_MONTH:
            return f.IntervalYearMonth;
        }
        return f.Interval;
      case f.Map:
        return f.Map;
      case f.List:
        return f.List;
      case f.Struct:
        return f.Struct;
      case f.Union:
        switch (r.mode) {
          case vt.Dense:
            return f.DenseUnion;
          case vt.Sparse:
            return f.SparseUnion;
        }
        return f.Union;
      case f.FixedSizeBinary:
        return f.FixedSizeBinary;
      case f.FixedSizeList:
        return f.FixedSizeList;
      case f.Dictionary:
        return f.Dictionary;
    }
    throw new Error(`Unrecognized type '${f[r.typeId]}'`);
  }
  D.prototype.visitInt8 = null;
  D.prototype.visitInt16 = null;
  D.prototype.visitInt32 = null;
  D.prototype.visitInt64 = null;
  D.prototype.visitUint8 = null;
  D.prototype.visitUint16 = null;
  D.prototype.visitUint32 = null;
  D.prototype.visitUint64 = null;
  D.prototype.visitFloat16 = null;
  D.prototype.visitFloat32 = null;
  D.prototype.visitFloat64 = null;
  D.prototype.visitDateDay = null;
  D.prototype.visitDateMillisecond = null;
  D.prototype.visitTimestampSecond = null;
  D.prototype.visitTimestampMillisecond = null;
  D.prototype.visitTimestampMicrosecond = null;
  D.prototype.visitTimestampNanosecond = null;
  D.prototype.visitTimeSecond = null;
  D.prototype.visitTimeMillisecond = null;
  D.prototype.visitTimeMicrosecond = null;
  D.prototype.visitTimeNanosecond = null;
  D.prototype.visitDenseUnion = null;
  D.prototype.visitSparseUnion = null;
  D.prototype.visitIntervalDayTime = null;
  D.prototype.visitIntervalYearMonth = null;
  var ya = {};
  dn(ya, { float64ToUint16: () => mi, uint16ToFloat64: () => Us });
  var Ol = new Float64Array(1),
    Nn = new Uint32Array(Ol.buffer);
  function Us(r) {
    let t = (r & 31744) >> 10,
      e = (r & 1023) / 1024,
      n = Math.pow(-1, (r & 32768) >> 15);
    switch (t) {
      case 31:
        return n * (e ? Number.NaN : 1 / 0);
      case 0:
        return n * (e ? 6103515625e-14 * e : 0);
    }
    return n * Math.pow(2, t - 15) * (1 + e);
  }
  function mi(r) {
    if (r !== r) return 32256;
    Ol[0] = r;
    let t = ((Nn[1] & 2147483648) >> 16) & 65535,
      e = Nn[1] & 2146435072,
      n = 0;
    return (
      e >= 1089470464
        ? Nn[0] > 0
          ? (e = 31744)
          : ((e = (e & 2080374784) >> 16), (n = (Nn[1] & 1048575) >> 10))
        : e <= 1056964608
        ? ((n = 1048576 + (Nn[1] & 1048575)),
          (n = (1048576 + (n << ((e >> 20) - 998))) >> 21),
          (e = 0))
        : ((e = (e - 1056964608) >> 10), (n = ((Nn[1] & 1048575) + 512) >> 10)),
      t | e | (n & 65535)
    );
  }
  var N = class extends D {};
  function j(r) {
    return (t, e, n) => {
      if (t.setValid(e, n != null)) return r(t, e, n);
    };
  }
  var Sp = (r, t, e) => {
      r[t] = Math.trunc(e / 864e5);
    },
    ba = (r, t, e) => {
      (r[t] = Math.trunc(e % 4294967296)),
        (r[t + 1] = Math.trunc(e / 4294967296));
    },
    Ip = (r, t, e) => {
      (r[t] = Math.trunc((e * 1e3) % 4294967296)),
        (r[t + 1] = Math.trunc((e * 1e3) / 4294967296));
    },
    Fp = (r, t, e) => {
      (r[t] = Math.trunc((e * 1e6) % 4294967296)),
        (r[t + 1] = Math.trunc((e * 1e6) / 4294967296));
    },
    Rl = (r, t, e, n) => {
      if (e + 1 < t.length) {
        let { [e]: i, [e + 1]: s } = t;
        r.set(n.subarray(0, s - i), i);
      }
    },
    Ap = ({ offset: r, values: t }, e, n) => {
      let i = r + e;
      n ? (t[i >> 3] |= 1 << i % 8) : (t[i >> 3] &= ~(1 << i % 8));
    },
    Mr = ({ values: r }, t, e) => {
      r[t] = e;
    },
    ga = ({ values: r }, t, e) => {
      r[t] = e;
    },
    Ml = ({ values: r }, t, e) => {
      r[t] = mi(e);
    },
    xp = (r, t, e) => {
      switch (r.type.precision) {
        case yt.HALF:
          return Ml(r, t, e);
        case yt.SINGLE:
        case yt.DOUBLE:
          return ga(r, t, e);
      }
    },
    Ls = ({ values: r }, t, e) => {
      Sp(r, t, e.valueOf());
    },
    Ns = ({ values: r }, t, e) => {
      ba(r, t * 2, e.valueOf());
    },
    wa = ({ stride: r, values: t }, e, n) => {
      t.set(n.subarray(0, r), r * e);
    },
    Bp = ({ values: r, valueOffsets: t }, e, n) => Rl(r, t, e, n),
    Tp = ({ values: r, valueOffsets: t }, e, n) => {
      Rl(r, t, e, Yr(n));
    },
    va = (r, t, e) => {
      r.type.unit === Wt.DAY ? Ls(r, t, e) : Ns(r, t, e);
    },
    ks = ({ values: r }, t, e) => ba(r, t * 2, e / 1e3),
    Cs = ({ values: r }, t, e) => ba(r, t * 2, e),
    Ps = ({ values: r }, t, e) => Ip(r, t * 2, e),
    Hs = ({ values: r }, t, e) => Fp(r, t * 2, e),
    Sa = (r, t, e) => {
      switch (r.type.unit) {
        case X.SECOND:
          return ks(r, t, e);
        case X.MILLISECOND:
          return Cs(r, t, e);
        case X.MICROSECOND:
          return Ps(r, t, e);
        case X.NANOSECOND:
          return Hs(r, t, e);
      }
    },
    Vs = ({ values: r }, t, e) => {
      r[t] = e;
    },
    zs = ({ values: r }, t, e) => {
      r[t] = e;
    },
    js = ({ values: r }, t, e) => {
      r[t] = e;
    },
    Ws = ({ values: r }, t, e) => {
      r[t] = e;
    },
    Ia = (r, t, e) => {
      switch (r.type.unit) {
        case X.SECOND:
          return Vs(r, t, e);
        case X.MILLISECOND:
          return zs(r, t, e);
        case X.MICROSECOND:
          return js(r, t, e);
        case X.NANOSECOND:
          return Ws(r, t, e);
      }
    },
    Fa = ({ values: r, stride: t }, e, n) => {
      r.set(n.subarray(0, t), t * e);
    },
    Dp = (r, t, e) => {
      let n = r.children[0],
        i = r.valueOffsets,
        s = $t.getVisitFn(n);
      if (Array.isArray(e))
        for (let o = -1, a = i[t], c = i[t + 1]; a < c; ) s(n, a++, e[++o]);
      else
        for (let o = -1, a = i[t], c = i[t + 1]; a < c; ) s(n, a++, e.get(++o));
    },
    Ep = (r, t, e) => {
      let n = r.children[0],
        { valueOffsets: i } = r,
        s = $t.getVisitFn(n),
        { [t]: o, [t + 1]: a } = i,
        c = e instanceof Map ? e.entries() : Object.entries(e);
      for (let u of c) if ((s(n, o, u), ++o >= a)) break;
    },
    Op = (r, t) => (e, n, i, s) => n && e(n, r, t[s]),
    Rp = (r, t) => (e, n, i, s) => n && e(n, r, t.get(s)),
    Mp = (r, t) => (e, n, i, s) => n && e(n, r, t.get(i.name)),
    Up = (r, t) => (e, n, i, s) => n && e(n, r, t[i.name]),
    Lp = (r, t, e) => {
      let n = r.type.children.map((s) => $t.getVisitFn(s.type)),
        i =
          e instanceof Map
            ? Mp(t, e)
            : e instanceof k
            ? Rp(t, e)
            : Array.isArray(e)
            ? Op(t, e)
            : Up(t, e);
      r.type.children.forEach((s, o) => i(n[o], r.children[o], s, o));
    },
    Np = (r, t, e) => {
      r.type.mode === vt.Dense ? Ul(r, t, e) : Ll(r, t, e);
    },
    Ul = (r, t, e) => {
      let n = r.type.typeIdToChildIndex[r.typeIds[t]],
        i = r.children[n];
      $t.visit(i, r.valueOffsets[t], e);
    },
    Ll = (r, t, e) => {
      let n = r.type.typeIdToChildIndex[r.typeIds[t]],
        i = r.children[n];
      $t.visit(i, t, e);
    },
    kp = (r, t, e) => {
      var n;
      (n = r.dictionary) === null || n === void 0 || n.set(r.values[t], e);
    },
    Aa = (r, t, e) => {
      r.type.unit === ne.DAY_TIME ? $s(r, t, e) : Ys(r, t, e);
    },
    $s = ({ values: r }, t, e) => {
      r.set(e.subarray(0, 2), 2 * t);
    },
    Ys = ({ values: r }, t, e) => {
      r[t] = e[0] * 12 + (e[1] % 12);
    },
    Cp = (r, t, e) => {
      let { stride: n } = r,
        i = r.children[0],
        s = $t.getVisitFn(i);
      if (Array.isArray(e))
        for (let o = -1, a = t * n; ++o < n; ) s(i, a + o, e[o]);
      else for (let o = -1, a = t * n; ++o < n; ) s(i, a + o, e.get(o));
    };
  N.prototype.visitBool = j(Ap);
  N.prototype.visitInt = j(Mr);
  N.prototype.visitInt8 = j(Mr);
  N.prototype.visitInt16 = j(Mr);
  N.prototype.visitInt32 = j(Mr);
  N.prototype.visitInt64 = j(Mr);
  N.prototype.visitUint8 = j(Mr);
  N.prototype.visitUint16 = j(Mr);
  N.prototype.visitUint32 = j(Mr);
  N.prototype.visitUint64 = j(Mr);
  N.prototype.visitFloat = j(xp);
  N.prototype.visitFloat16 = j(Ml);
  N.prototype.visitFloat32 = j(ga);
  N.prototype.visitFloat64 = j(ga);
  N.prototype.visitUtf8 = j(Tp);
  N.prototype.visitBinary = j(Bp);
  N.prototype.visitFixedSizeBinary = j(wa);
  N.prototype.visitDate = j(va);
  N.prototype.visitDateDay = j(Ls);
  N.prototype.visitDateMillisecond = j(Ns);
  N.prototype.visitTimestamp = j(Sa);
  N.prototype.visitTimestampSecond = j(ks);
  N.prototype.visitTimestampMillisecond = j(Cs);
  N.prototype.visitTimestampMicrosecond = j(Ps);
  N.prototype.visitTimestampNanosecond = j(Hs);
  N.prototype.visitTime = j(Ia);
  N.prototype.visitTimeSecond = j(Vs);
  N.prototype.visitTimeMillisecond = j(zs);
  N.prototype.visitTimeMicrosecond = j(js);
  N.prototype.visitTimeNanosecond = j(Ws);
  N.prototype.visitDecimal = j(Fa);
  N.prototype.visitList = j(Dp);
  N.prototype.visitStruct = j(Lp);
  N.prototype.visitUnion = j(Np);
  N.prototype.visitDenseUnion = j(Ul);
  N.prototype.visitSparseUnion = j(Ll);
  N.prototype.visitDictionary = j(kp);
  N.prototype.visitInterval = j(Aa);
  N.prototype.visitIntervalDayTime = j($s);
  N.prototype.visitIntervalYearMonth = j(Ys);
  N.prototype.visitFixedSizeList = j(Cp);
  N.prototype.visitMap = j(Ep);
  var $t = new N();
  var Ze = Symbol.for('parent'),
    kn = Symbol.for('rowIndex'),
    Gr = class {
      constructor(t, e) {
        return (this[Ze] = t), (this[kn] = e), new Proxy(this, new Ba());
      }
      toArray() {
        return Object.values(this.toJSON());
      }
      toJSON() {
        let t = this[kn],
          e = this[Ze],
          n = e.type.children,
          i = {};
        for (let s = -1, o = n.length; ++s < o; )
          i[n[s].name] = Dt.visit(e.children[s], t);
        return i;
      }
      toString() {
        return `{${[...this]
          .map(([t, e]) => `${$e(t)}: ${$e(e)}`)
          .join(', ')}}`;
      }
      [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
      }
      [Symbol.iterator]() {
        return new xa(this[Ze], this[kn]);
      }
    },
    xa = class {
      constructor(t, e) {
        (this.childIndex = 0),
          (this.children = t.children),
          (this.rowIndex = e),
          (this.childFields = t.type.children),
          (this.numChildren = this.childFields.length);
      }
      [Symbol.iterator]() {
        return this;
      }
      next() {
        let t = this.childIndex;
        return t < this.numChildren
          ? ((this.childIndex = t + 1),
            {
              done: !1,
              value: [
                this.childFields[t].name,
                Dt.visit(this.children[t], this.rowIndex),
              ],
            })
          : { done: !0, value: null };
      }
    };
  Object.defineProperties(Gr.prototype, {
    [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: 'Row' },
    [Ze]: { writable: !0, enumerable: !1, configurable: !1, value: null },
    [kn]: { writable: !0, enumerable: !1, configurable: !1, value: -1 },
  });
  var Ba = class {
    isExtensible() {
      return !1;
    }
    deleteProperty() {
      return !1;
    }
    preventExtensions() {
      return !0;
    }
    ownKeys(t) {
      return t[Ze].type.children.map((e) => e.name);
    }
    has(t, e) {
      return t[Ze].type.children.findIndex((n) => n.name === e) !== -1;
    }
    getOwnPropertyDescriptor(t, e) {
      if (t[Ze].type.children.findIndex((n) => n.name === e) !== -1)
        return { writable: !0, enumerable: !0, configurable: !0 };
    }
    get(t, e) {
      if (Reflect.has(t, e)) return t[e];
      let n = t[Ze].type.children.findIndex((i) => i.name === e);
      if (n !== -1) {
        let i = Dt.visit(t[Ze].children[n], t[kn]);
        return Reflect.set(t, e, i), i;
      }
    }
    set(t, e, n) {
      let i = t[Ze].type.children.findIndex((s) => s.name === e);
      return i !== -1
        ? ($t.visit(t[Ze].children[i], t[kn], n), Reflect.set(t, e, n))
        : Reflect.has(t, e) || typeof e == 'symbol'
        ? Reflect.set(t, e, n)
        : !1;
    }
  };
  var O = class extends D {};
  function P(r) {
    return (t, e) => (t.getValid(e) ? r(t, e) : null);
  }
  var Pp = (r, t) => 864e5 * r[t],
    Ta = (r, t) => 4294967296 * r[t + 1] + (r[t] >>> 0),
    Hp = (r, t) => 4294967296 * (r[t + 1] / 1e3) + (r[t] >>> 0) / 1e3,
    Vp = (r, t) => 4294967296 * (r[t + 1] / 1e6) + (r[t] >>> 0) / 1e6,
    Nl = (r) => new Date(r),
    zp = (r, t) => Nl(Pp(r, t)),
    jp = (r, t) => Nl(Ta(r, t)),
    Wp = (r, t) => null,
    kl = (r, t, e) => {
      if (e + 1 >= t.length) return null;
      let n = t[e],
        i = t[e + 1];
      return r.subarray(n, i);
    },
    $p = ({ offset: r, values: t }, e) => {
      let n = r + e;
      return (t[n >> 3] & (1 << n % 8)) !== 0;
    },
    Cl = ({ values: r }, t) => zp(r, t),
    Pl = ({ values: r }, t) => jp(r, t * 2),
    Kr = ({ stride: r, values: t }, e) => t[r * e],
    Yp = ({ stride: r, values: t }, e) => Us(t[r * e]),
    Hl = ({ values: r }, t) => r[t],
    Xp = ({ stride: r, values: t }, e) => t.subarray(r * e, r * (e + 1)),
    Gp = ({ values: r, valueOffsets: t }, e) => kl(r, t, e),
    Kp = ({ values: r, valueOffsets: t }, e) => {
      let n = kl(r, t, e);
      return n !== null ? di(n) : null;
    },
    Jp = ({ values: r }, t) => r[t],
    qp = ({ type: r, values: t }, e) =>
      r.precision !== yt.HALF ? t[e] : Us(t[e]),
    Zp = (r, t) => (r.type.unit === Wt.DAY ? Cl(r, t) : Pl(r, t)),
    Vl = ({ values: r }, t) => 1e3 * Ta(r, t * 2),
    zl = ({ values: r }, t) => Ta(r, t * 2),
    jl = ({ values: r }, t) => Hp(r, t * 2),
    Wl = ({ values: r }, t) => Vp(r, t * 2),
    Qp = (r, t) => {
      switch (r.type.unit) {
        case X.SECOND:
          return Vl(r, t);
        case X.MILLISECOND:
          return zl(r, t);
        case X.MICROSECOND:
          return jl(r, t);
        case X.NANOSECOND:
          return Wl(r, t);
      }
    },
    $l = ({ values: r }, t) => r[t],
    Yl = ({ values: r }, t) => r[t],
    Xl = ({ values: r }, t) => r[t],
    Gl = ({ values: r }, t) => r[t],
    tm = (r, t) => {
      switch (r.type.unit) {
        case X.SECOND:
          return $l(r, t);
        case X.MILLISECOND:
          return Yl(r, t);
        case X.MICROSECOND:
          return Xl(r, t);
        case X.NANOSECOND:
          return Gl(r, t);
      }
    },
    em = ({ values: r, stride: t }, e) =>
      hn.decimal(r.subarray(t * e, t * (e + 1))),
    rm = (r, t) => {
      let { valueOffsets: e, stride: n, children: i } = r,
        { [t * n]: s, [t * n + 1]: o } = e,
        c = i[0].slice(s, o - s);
      return new k([c]);
    },
    nm = (r, t) => {
      let { valueOffsets: e, children: n } = r,
        { [t]: i, [t + 1]: s } = e,
        o = n[0];
      return new cr(o.slice(i, s - i));
    },
    im = (r, t) => new Gr(r, t),
    sm = (r, t) => (r.type.mode === vt.Dense ? Kl(r, t) : Jl(r, t)),
    Kl = (r, t) => {
      let e = r.type.typeIdToChildIndex[r.typeIds[t]],
        n = r.children[e];
      return Dt.visit(n, r.valueOffsets[t]);
    },
    Jl = (r, t) => {
      let e = r.type.typeIdToChildIndex[r.typeIds[t]],
        n = r.children[e];
      return Dt.visit(n, t);
    },
    om = (r, t) => {
      var e;
      return (e = r.dictionary) === null || e === void 0
        ? void 0
        : e.get(r.values[t]);
    },
    am = (r, t) => (r.type.unit === ne.DAY_TIME ? ql(r, t) : Zl(r, t)),
    ql = ({ values: r }, t) => r.subarray(2 * t, 2 * (t + 1)),
    Zl = ({ values: r }, t) => {
      let e = r[t],
        n = new Int32Array(2);
      return (n[0] = Math.trunc(e / 12)), (n[1] = Math.trunc(e % 12)), n;
    },
    cm = (r, t) => {
      let { stride: e, children: n } = r,
        s = n[0].slice(t * e, e);
      return new k([s]);
    };
  O.prototype.visitNull = P(Wp);
  O.prototype.visitBool = P($p);
  O.prototype.visitInt = P(Jp);
  O.prototype.visitInt8 = P(Kr);
  O.prototype.visitInt16 = P(Kr);
  O.prototype.visitInt32 = P(Kr);
  O.prototype.visitInt64 = P(Hl);
  O.prototype.visitUint8 = P(Kr);
  O.prototype.visitUint16 = P(Kr);
  O.prototype.visitUint32 = P(Kr);
  O.prototype.visitUint64 = P(Hl);
  O.prototype.visitFloat = P(qp);
  O.prototype.visitFloat16 = P(Yp);
  O.prototype.visitFloat32 = P(Kr);
  O.prototype.visitFloat64 = P(Kr);
  O.prototype.visitUtf8 = P(Kp);
  O.prototype.visitBinary = P(Gp);
  O.prototype.visitFixedSizeBinary = P(Xp);
  O.prototype.visitDate = P(Zp);
  O.prototype.visitDateDay = P(Cl);
  O.prototype.visitDateMillisecond = P(Pl);
  O.prototype.visitTimestamp = P(Qp);
  O.prototype.visitTimestampSecond = P(Vl);
  O.prototype.visitTimestampMillisecond = P(zl);
  O.prototype.visitTimestampMicrosecond = P(jl);
  O.prototype.visitTimestampNanosecond = P(Wl);
  O.prototype.visitTime = P(tm);
  O.prototype.visitTimeSecond = P($l);
  O.prototype.visitTimeMillisecond = P(Yl);
  O.prototype.visitTimeMicrosecond = P(Xl);
  O.prototype.visitTimeNanosecond = P(Gl);
  O.prototype.visitDecimal = P(em);
  O.prototype.visitList = P(rm);
  O.prototype.visitStruct = P(im);
  O.prototype.visitUnion = P(sm);
  O.prototype.visitDenseUnion = P(Kl);
  O.prototype.visitSparseUnion = P(Jl);
  O.prototype.visitDictionary = P(om);
  O.prototype.visitInterval = P(am);
  O.prototype.visitIntervalDayTime = P(ql);
  O.prototype.visitIntervalYearMonth = P(Zl);
  O.prototype.visitFixedSizeList = P(cm);
  O.prototype.visitMap = P(nm);
  var Dt = new O();
  var Le = Symbol.for('keys'),
    Cn = Symbol.for('vals'),
    cr = class {
      constructor(t) {
        return (
          (this[Le] = new k([t.children[0]]).memoize()),
          (this[Cn] = t.children[1]),
          new Proxy(this, new Ea())
        );
      }
      [Symbol.iterator]() {
        return new Da(this[Le], this[Cn]);
      }
      get size() {
        return this[Le].length;
      }
      toArray() {
        return Object.values(this.toJSON());
      }
      toJSON() {
        let t = this[Le],
          e = this[Cn],
          n = {};
        for (let i = -1, s = t.length; ++i < s; ) n[t.get(i)] = Dt.visit(e, i);
        return n;
      }
      toString() {
        return `{${[...this]
          .map(([t, e]) => `${$e(t)}: ${$e(e)}`)
          .join(', ')}}`;
      }
      [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
      }
    },
    Da = class {
      constructor(t, e) {
        (this.keys = t),
          (this.vals = e),
          (this.keyIndex = 0),
          (this.numKeys = t.length);
      }
      [Symbol.iterator]() {
        return this;
      }
      next() {
        let t = this.keyIndex;
        return t === this.numKeys
          ? { done: !0, value: null }
          : (this.keyIndex++,
            { done: !1, value: [this.keys.get(t), Dt.visit(this.vals, t)] });
      }
    },
    Ea = class {
      isExtensible() {
        return !1;
      }
      deleteProperty() {
        return !1;
      }
      preventExtensions() {
        return !0;
      }
      ownKeys(t) {
        return t[Le].toArray().map(String);
      }
      has(t, e) {
        return t[Le].includes(e);
      }
      getOwnPropertyDescriptor(t, e) {
        if (t[Le].indexOf(e) !== -1)
          return { writable: !0, enumerable: !0, configurable: !0 };
      }
      get(t, e) {
        if (Reflect.has(t, e)) return t[e];
        let n = t[Le].indexOf(e);
        if (n !== -1) {
          let i = Dt.visit(Reflect.get(t, Cn), n);
          return Reflect.set(t, e, i), i;
        }
      }
      set(t, e, n) {
        let i = t[Le].indexOf(e);
        return i !== -1
          ? ($t.visit(Reflect.get(t, Cn), i, n), Reflect.set(t, e, n))
          : Reflect.has(t, e)
          ? Reflect.set(t, e, n)
          : !1;
      }
    };
  Object.defineProperties(cr.prototype, {
    [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: 'Row' },
    [Le]: { writable: !0, enumerable: !1, configurable: !1, value: null },
    [Cn]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  });
  function lm(r, t, e) {
    let n = r.length,
      i = t > -1 ? t : n + (t % n);
    return e ? e(r, i) : i;
  }
  var Ql;
  function _i(r, t, e, n) {
    let { length: i = 0 } = r,
      s = typeof t != 'number' ? 0 : t,
      o = typeof e != 'number' ? i : e;
    return (
      s < 0 && (s = ((s % i) + i) % i),
      o < 0 && (o = ((o % i) + i) % i),
      o < s && ((Ql = s), (s = o), (o = Ql)),
      o > i && (o = i),
      n ? n(r, s, o) : [s, o]
    );
  }
  var tu = (r) => r !== r;
  function Jr(r) {
    if (typeof r !== 'object' || r === null) return tu(r) ? tu : (e) => e === r;
    if (r instanceof Date) {
      let e = r.valueOf();
      return (n) => (n instanceof Date ? n.valueOf() === e : !1);
    }
    return ArrayBuffer.isView(r)
      ? (e) => (e ? da(r, e) : !1)
      : r instanceof Map
      ? dm(r)
      : Array.isArray(r)
      ? um(r)
      : r instanceof k
      ? fm(r)
      : hm(r, !0);
  }
  function um(r) {
    let t = [];
    for (let e = -1, n = r.length; ++e < n; ) t[e] = Jr(r[e]);
    return Xs(t);
  }
  function dm(r) {
    let t = -1,
      e = [];
    for (let n of r.values()) e[++t] = Jr(n);
    return Xs(e);
  }
  function fm(r) {
    let t = [];
    for (let e = -1, n = r.length; ++e < n; ) t[e] = Jr(r.get(e));
    return Xs(t);
  }
  function hm(r, t = !1) {
    let e = Object.keys(r);
    if (!t && e.length === 0) return () => !1;
    let n = [];
    for (let i = -1, s = e.length; ++i < s; ) n[i] = Jr(r[e[i]]);
    return Xs(n, e);
  }
  function Xs(r, t) {
    return (e) => {
      if (!e || typeof e != 'object') return !1;
      switch (e.constructor) {
        case Array:
          return pm(r, e);
        case Map:
          return eu(r, e, e.keys());
        case cr:
        case Gr:
        case Object:
        case void 0:
          return eu(r, e, t || Object.keys(e));
      }
      return e instanceof k ? mm(r, e) : !1;
    };
  }
  function pm(r, t) {
    let e = r.length;
    if (t.length !== e) return !1;
    for (let n = -1; ++n < e; ) if (!r[n](t[n])) return !1;
    return !0;
  }
  function mm(r, t) {
    let e = r.length;
    if (t.length !== e) return !1;
    for (let n = -1; ++n < e; ) if (!r[n](t.get(n))) return !1;
    return !0;
  }
  function eu(r, t, e) {
    let n = e[Symbol.iterator](),
      i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](),
      s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator](),
      o = 0,
      a = r.length,
      c = s.next(),
      u = n.next(),
      p = i.next();
    for (
      ;
      o < a &&
      !u.done &&
      !p.done &&
      !c.done &&
      !(u.value !== p.value || !r[o](c.value));
      ++o, u = n.next(), p = i.next(), c = s.next()
    );
    return o === a && u.done && p.done && c.done
      ? !0
      : (n.return && n.return(),
        i.return && i.return(),
        s.return && s.return(),
        !1);
  }
  var Ra = {};
  dn(Ra, {
    BitIterator: () => pn,
    getBit: () => ru,
    getBool: () => Ks,
    packBools: () => mn,
    popcnt_array: () => nu,
    popcnt_bit_range: () => yi,
    popcnt_uint32: () => Gs,
    setBool: () => _m,
    truncateBitmap: () => Pn,
  });
  function Ks(r, t, e, n) {
    return (e & (1 << n)) !== 0;
  }
  function ru(r, t, e, n) {
    return (e & (1 << n)) >> n;
  }
  function _m(r, t, e) {
    return e
      ? !!(r[t >> 3] |= 1 << t % 8) || !0
      : !(r[t >> 3] &= ~(1 << t % 8)) && !1;
  }
  function Pn(r, t, e) {
    let n = (e.byteLength + 7) & -8;
    if (r > 0 || e.byteLength < n) {
      let i = new Uint8Array(n);
      return (
        i.set(
          r % 8 === 0
            ? e.subarray(r >> 3)
            : mn(new pn(e, r, t, null, Ks)).subarray(0, n)
        ),
        i
      );
    }
    return e;
  }
  function mn(r) {
    let t = [],
      e = 0,
      n = 0,
      i = 0;
    for (let o of r)
      o && (i |= 1 << n), ++n === 8 && ((t[e++] = i), (i = n = 0));
    (e === 0 || n > 0) && (t[e++] = i);
    let s = new Uint8Array((t.length + 7) & -8);
    return s.set(t), s;
  }
  var pn = class {
    constructor(t, e, n, i, s) {
      (this.bytes = t),
        (this.length = n),
        (this.context = i),
        (this.get = s),
        (this.bit = e % 8),
        (this.byteIndex = e >> 3),
        (this.byte = t[this.byteIndex++]),
        (this.index = 0);
    }
    next() {
      return this.index < this.length
        ? (this.bit === 8 &&
            ((this.bit = 0), (this.byte = this.bytes[this.byteIndex++])),
          {
            value: this.get(this.context, this.index++, this.byte, this.bit++),
          })
        : { done: !0, value: null };
    }
    [Symbol.iterator]() {
      return this;
    }
  };
  function yi(r, t, e) {
    if (e - t <= 0) return 0;
    if (e - t < 8) {
      let s = 0;
      for (let o of new pn(r, t, e - t, r, ru)) s += o;
      return s;
    }
    let n = (e >> 3) << 3,
      i = t + (t % 8 === 0 ? 0 : 8 - (t % 8));
    return yi(r, t, i) + yi(r, n, e) + nu(r, i >> 3, (n - i) >> 3);
  }
  function nu(r, t, e) {
    let n = 0,
      i = Math.trunc(t),
      s = new DataView(r.buffer, r.byteOffset, r.byteLength),
      o = e === void 0 ? r.byteLength : i + e;
    for (; o - i >= 4; ) (n += Gs(s.getUint32(i))), (i += 4);
    for (; o - i >= 2; ) (n += Gs(s.getUint16(i))), (i += 2);
    for (; o - i >= 1; ) (n += Gs(s.getUint8(i))), (i += 1);
    return n;
  }
  function Gs(r) {
    let t = Math.trunc(r);
    return (
      (t = t - ((t >>> 1) & 1431655765)),
      (t = (t & 858993459) + ((t >>> 2) & 858993459)),
      (((t + (t >>> 4)) & 252645135) * 16843009) >>> 24
    );
  }
  var ym = -1,
    nt = class {
      constructor(t, e, n, i, s, o = [], a) {
        (this.type = t),
          (this.children = o),
          (this.dictionary = a),
          (this.offset = Math.floor(Math.max(e || 0, 0))),
          (this.length = Math.floor(Math.max(n || 0, 0))),
          (this._nullCount = Math.floor(Math.max(i || 0, -1)));
        let c;
        s instanceof nt
          ? ((this.stride = s.stride),
            (this.values = s.values),
            (this.typeIds = s.typeIds),
            (this.nullBitmap = s.nullBitmap),
            (this.valueOffsets = s.valueOffsets))
          : ((this.stride = Ae(t)),
            s &&
              ((c = s[0]) && (this.valueOffsets = c),
              (c = s[1]) && (this.values = c),
              (c = s[2]) && (this.nullBitmap = c),
              (c = s[3]) && (this.typeIds = c))),
          (this.nullable =
            this._nullCount !== 0 &&
            this.nullBitmap &&
            this.nullBitmap.byteLength > 0);
      }
      get typeId() {
        return this.type.typeId;
      }
      get ArrayType() {
        return this.type.ArrayType;
      }
      get buffers() {
        return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
      }
      get byteLength() {
        let t = 0,
          { valueOffsets: e, values: n, nullBitmap: i, typeIds: s } = this;
        return (
          e && (t += e.byteLength),
          n && (t += n.byteLength),
          i && (t += i.byteLength),
          s && (t += s.byteLength),
          this.children.reduce((o, a) => o + a.byteLength, t)
        );
      }
      get nullCount() {
        let t = this._nullCount,
          e;
        return (
          t <= ym &&
            (e = this.nullBitmap) &&
            (this._nullCount = t =
              this.length - yi(e, this.offset, this.offset + this.length)),
          t
        );
      }
      getValid(t) {
        if (this.nullable && this.nullCount > 0) {
          let e = this.offset + t;
          return (this.nullBitmap[e >> 3] & (1 << e % 8)) !== 0;
        }
        return !0;
      }
      setValid(t, e) {
        if (!this.nullable) return e;
        if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
          let { nullBitmap: c } = this._changeLengthAndBackfillNullBitmap(
            this.length
          );
          Object.assign(this, { nullBitmap: c, _nullCount: 0 });
        }
        let { nullBitmap: n, offset: i } = this,
          s = (i + t) >> 3,
          o = (i + t) % 8,
          a = (n[s] >> o) & 1;
        return (
          e
            ? a === 0 &&
              ((n[s] |= 1 << o), (this._nullCount = this.nullCount + 1))
            : a === 1 &&
              ((n[s] &= ~(1 << o)), (this._nullCount = this.nullCount - 1)),
          e
        );
      }
      clone(
        t = this.type,
        e = this.offset,
        n = this.length,
        i = this._nullCount,
        s = this,
        o = this.children
      ) {
        return new nt(t, e, n, i, s, o, this.dictionary);
      }
      slice(t, e) {
        let { stride: n, typeId: i, children: s } = this,
          o = +(this._nullCount === 0) - 1,
          a = i === 16 ? n : 1,
          c = this._sliceBuffers(t, e, n, i);
        return this.clone(
          this.type,
          this.offset + t,
          e,
          o,
          c,
          s.length === 0 || this.valueOffsets
            ? s
            : this._sliceChildren(s, a * t, a * e)
        );
      }
      _changeLengthAndBackfillNullBitmap(t) {
        if (this.typeId === f.Null) return this.clone(this.type, 0, t, 0);
        let { length: e, nullCount: n } = this,
          i = new Uint8Array(((t + 63) & -64) >> 3).fill(255, 0, e >> 3);
        (i[e >> 3] = (1 << (e - (e & -8))) - 1),
          n > 0 && i.set(Pn(this.offset, e, this.nullBitmap), 0);
        let s = this.buffers;
        return (
          (s[Ue.VALIDITY] = i), this.clone(this.type, 0, t, n + (t - e), s)
        );
      }
      _sliceBuffers(t, e, n, i) {
        let s,
          { buffers: o } = this;
        return (
          (s = o[Ue.TYPE]) && (o[Ue.TYPE] = s.subarray(t, t + e)),
          ((s = o[Ue.OFFSET]) && (o[Ue.OFFSET] = s.subarray(t, t + e + 1))) ||
            ((s = o[Ue.DATA]) &&
              (o[Ue.DATA] = i === 6 ? s : s.subarray(n * t, n * (t + e)))),
          o
        );
      }
      _sliceChildren(t, e, n) {
        return t.map((i) => i.slice(e, n));
      }
    };
  nt.prototype.children = Object.freeze([]);
  var _n = class extends D {
    visit(t) {
      return this.getVisitFn(t.type).call(this, t);
    }
    visitNull(t) {
      let { ['type']: e, ['offset']: n = 0, ['length']: i = 0 } = t;
      return new nt(e, n, i, 0);
    }
    visitBool(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length >> 3,
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitInt(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        { ['length']: o = s.length, ['nullCount']: a = t.nullBitmap ? -1 : 0 } =
          t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitFloat(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        { ['length']: o = s.length, ['nullCount']: a = t.nullBitmap ? -1 : 0 } =
          t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitUtf8(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.data),
        s = L(t.nullBitmap),
        o = fn(t.valueOffsets),
        {
          ['length']: a = o.length - 1,
          ['nullCount']: c = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, a, c, [o, i, s]);
    }
    visitBinary(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.data),
        s = L(t.nullBitmap),
        o = fn(t.valueOffsets),
        {
          ['length']: a = o.length - 1,
          ['nullCount']: c = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, a, c, [o, i, s]);
    }
    visitFixedSizeBinary(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitDate(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitTimestamp(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitTime(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitDecimal(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitList(t) {
      let { ['type']: e, ['offset']: n = 0, ['child']: i } = t,
        s = L(t.nullBitmap),
        o = fn(t.valueOffsets),
        {
          ['length']: a = o.length - 1,
          ['nullCount']: c = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, a, c, [o, void 0, s], [i]);
    }
    visitStruct(t) {
      let { ['type']: e, ['offset']: n = 0, ['children']: i = [] } = t,
        s = L(t.nullBitmap),
        {
          length: o = i.reduce((c, { length: u }) => Math.max(c, u), 0),
          nullCount: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, void 0, s], i);
    }
    visitUnion(t) {
      let { ['type']: e, ['offset']: n = 0, ['children']: i = [] } = t,
        s = L(t.nullBitmap),
        o = $(e.ArrayType, t.typeIds),
        { ['length']: a = o.length, ['nullCount']: c = t.nullBitmap ? -1 : 0 } =
          t;
      if (B.isSparseUnion(e))
        return new nt(e, n, a, c, [void 0, void 0, s, o], i);
      let u = fn(t.valueOffsets);
      return new nt(e, n, a, c, [u, void 0, s, o], i);
    }
    visitDictionary(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.indices.ArrayType, t.data),
        {
          ['dictionary']: o = new k([new _n().visit({ type: e.dictionary })]),
        } = t,
        { ['length']: a = s.length, ['nullCount']: c = t.nullBitmap ? -1 : 0 } =
          t;
      return new nt(e, n, a, c, [void 0, s, i], [], o);
    }
    visitInterval(t) {
      let { ['type']: e, ['offset']: n = 0 } = t,
        i = L(t.nullBitmap),
        s = $(e.ArrayType, t.data),
        {
          ['length']: o = s.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, s, i]);
    }
    visitFixedSizeList(t) {
      let {
          ['type']: e,
          ['offset']: n = 0,
          ['child']: i = new _n().visit({ type: e.valueType }),
        } = t,
        s = L(t.nullBitmap),
        {
          ['length']: o = i.length / Ae(e),
          ['nullCount']: a = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, o, a, [void 0, void 0, s], [i]);
    }
    visitMap(t) {
      let {
          ['type']: e,
          ['offset']: n = 0,
          ['child']: i = new _n().visit({ type: e.childType }),
        } = t,
        s = L(t.nullBitmap),
        o = fn(t.valueOffsets),
        {
          ['length']: a = o.length - 1,
          ['nullCount']: c = t.nullBitmap ? -1 : 0,
        } = t;
      return new nt(e, n, a, c, [o, void 0, s], [i]);
    }
  };
  function C(r) {
    return new _n().visit(r);
  }
  var bi = class {
    constructor(t = 0, e) {
      (this.numChunks = t),
        (this.getChunkIterator = e),
        (this.chunkIndex = 0),
        (this.chunkIterator = this.getChunkIterator(0));
    }
    next() {
      for (; this.chunkIndex < this.numChunks; ) {
        let t = this.chunkIterator.next();
        if (!t.done) return t;
        ++this.chunkIndex < this.numChunks &&
          (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
      }
      return { done: !0, value: null };
    }
    [Symbol.iterator]() {
      return this;
    }
  };
  function Js(r) {
    return r.reduce((t, e) => t + e.nullCount, 0);
  }
  function qs(r) {
    return r.reduce(
      (t, e, n) => ((t[n + 1] = t[n] + e.length), t),
      new Uint32Array(r.length + 1)
    );
  }
  function Zs(r, t, e, n) {
    let i = [];
    for (let s = -1, o = r.length; ++s < o; ) {
      let a = r[s],
        c = t[s],
        { length: u } = a;
      if (c >= n) break;
      if (e >= c + u) continue;
      if (c >= e && c + u <= n) {
        i.push(a);
        continue;
      }
      let p = Math.max(0, e - c),
        b = Math.min(n - c, u);
      i.push(a.slice(p, b - p));
    }
    return i.length === 0 && i.push(r[0].slice(0, 0)), i;
  }
  function Ma(r, t, e, n) {
    let i = 0,
      s = 0,
      o = t.length - 1;
    do {
      if (i >= o - 1) return e < t[o] ? n(r, i, e - t[i]) : null;
      (s = i + Math.trunc((o - i) * 0.5)), e < t[s] ? (o = s) : (i = s);
    } while (i < o);
  }
  function gi(r, t) {
    return r.getValid(t);
  }
  function qr(r) {
    function t(e, n, i) {
      return r(e[n], i);
    }
    return function (e) {
      let n = this.data;
      return Ma(n, this._offsets, e, t);
    };
  }
  function Qs(r) {
    let t;
    function e(n, i, s) {
      return r(n[i], s, t);
    }
    return function (n, i) {
      let s = this.data;
      t = i;
      let o = Ma(s, this._offsets, n, e);
      return (t = void 0), o;
    };
  }
  function to(r) {
    let t;
    function e(n, i, s) {
      let o = s,
        a = 0,
        c = 0;
      for (let u = i - 1, p = n.length; ++u < p; ) {
        let b = n[u];
        if (~(a = r(b, t, o))) return c + a;
        (o = 0), (c += b.length);
      }
      return -1;
    }
    return function (n, i) {
      t = n;
      let s = this.data,
        o = typeof i != 'number' ? e(s, 0, 0) : Ma(s, this._offsets, i, e);
      return (t = void 0), o;
    };
  }
  var R = class extends D {};
  function bm(r, t) {
    return t === null && r.length > 0 ? 0 : -1;
  }
  function gm(r, t) {
    let { nullBitmap: e } = r;
    if (!e || r.nullCount <= 0) return -1;
    let n = 0;
    for (let i of new pn(e, r.offset + (t || 0), r.length, e, Ks)) {
      if (!i) return n;
      ++n;
    }
    return -1;
  }
  function Y(r, t, e) {
    if (t === void 0) return -1;
    if (t === null) return gm(r, e);
    let n = Dt.getVisitFn(r),
      i = Jr(t);
    for (let s = (e || 0) - 1, o = r.length; ++s < o; )
      if (i(n(r, s))) return s;
    return -1;
  }
  function iu(r, t, e) {
    let n = Dt.getVisitFn(r),
      i = Jr(t);
    for (let s = (e || 0) - 1, o = r.length; ++s < o; )
      if (i(n(r, s))) return s;
    return -1;
  }
  R.prototype.visitNull = bm;
  R.prototype.visitBool = Y;
  R.prototype.visitInt = Y;
  R.prototype.visitInt8 = Y;
  R.prototype.visitInt16 = Y;
  R.prototype.visitInt32 = Y;
  R.prototype.visitInt64 = Y;
  R.prototype.visitUint8 = Y;
  R.prototype.visitUint16 = Y;
  R.prototype.visitUint32 = Y;
  R.prototype.visitUint64 = Y;
  R.prototype.visitFloat = Y;
  R.prototype.visitFloat16 = Y;
  R.prototype.visitFloat32 = Y;
  R.prototype.visitFloat64 = Y;
  R.prototype.visitUtf8 = Y;
  R.prototype.visitBinary = Y;
  R.prototype.visitFixedSizeBinary = Y;
  R.prototype.visitDate = Y;
  R.prototype.visitDateDay = Y;
  R.prototype.visitDateMillisecond = Y;
  R.prototype.visitTimestamp = Y;
  R.prototype.visitTimestampSecond = Y;
  R.prototype.visitTimestampMillisecond = Y;
  R.prototype.visitTimestampMicrosecond = Y;
  R.prototype.visitTimestampNanosecond = Y;
  R.prototype.visitTime = Y;
  R.prototype.visitTimeSecond = Y;
  R.prototype.visitTimeMillisecond = Y;
  R.prototype.visitTimeMicrosecond = Y;
  R.prototype.visitTimeNanosecond = Y;
  R.prototype.visitDecimal = Y;
  R.prototype.visitList = Y;
  R.prototype.visitStruct = Y;
  R.prototype.visitUnion = Y;
  R.prototype.visitDenseUnion = iu;
  R.prototype.visitSparseUnion = iu;
  R.prototype.visitDictionary = Y;
  R.prototype.visitInterval = Y;
  R.prototype.visitIntervalDayTime = Y;
  R.prototype.visitIntervalYearMonth = Y;
  R.prototype.visitFixedSizeList = Y;
  R.prototype.visitMap = Y;
  var yn = new R();
  var M = class extends D {};
  function H(r) {
    let { type: t } = r;
    if (
      r.nullCount === 0 &&
      r.stride === 1 &&
      (t.typeId === f.Timestamp ||
        (t instanceof xt && t.bitWidth !== 64) ||
        (t instanceof Xe && t.bitWidth !== 64) ||
        (t instanceof de && t.precision !== yt.HALF))
    )
      return new bi(r.data.length, (n) => {
        let i = r.data[n];
        return i.values.subarray(0, i.length)[Symbol.iterator]();
      });
    let e = 0;
    return new bi(r.data.length, (n) => {
      let s = r.data[n].length,
        o = r.slice(e, e + s);
      return (e += s), new Ua(o);
    });
  }
  var Ua = class {
    constructor(t) {
      (this.vector = t), (this.index = 0);
    }
    next() {
      return this.index < this.vector.length
        ? { value: this.vector.get(this.index++) }
        : { done: !0, value: null };
    }
    [Symbol.iterator]() {
      return this;
    }
  };
  M.prototype.visitNull = H;
  M.prototype.visitBool = H;
  M.prototype.visitInt = H;
  M.prototype.visitInt8 = H;
  M.prototype.visitInt16 = H;
  M.prototype.visitInt32 = H;
  M.prototype.visitInt64 = H;
  M.prototype.visitUint8 = H;
  M.prototype.visitUint16 = H;
  M.prototype.visitUint32 = H;
  M.prototype.visitUint64 = H;
  M.prototype.visitFloat = H;
  M.prototype.visitFloat16 = H;
  M.prototype.visitFloat32 = H;
  M.prototype.visitFloat64 = H;
  M.prototype.visitUtf8 = H;
  M.prototype.visitBinary = H;
  M.prototype.visitFixedSizeBinary = H;
  M.prototype.visitDate = H;
  M.prototype.visitDateDay = H;
  M.prototype.visitDateMillisecond = H;
  M.prototype.visitTimestamp = H;
  M.prototype.visitTimestampSecond = H;
  M.prototype.visitTimestampMillisecond = H;
  M.prototype.visitTimestampMicrosecond = H;
  M.prototype.visitTimestampNanosecond = H;
  M.prototype.visitTime = H;
  M.prototype.visitTimeSecond = H;
  M.prototype.visitTimeMillisecond = H;
  M.prototype.visitTimeMicrosecond = H;
  M.prototype.visitTimeNanosecond = H;
  M.prototype.visitDecimal = H;
  M.prototype.visitList = H;
  M.prototype.visitStruct = H;
  M.prototype.visitUnion = H;
  M.prototype.visitDenseUnion = H;
  M.prototype.visitSparseUnion = H;
  M.prototype.visitDictionary = H;
  M.prototype.visitInterval = H;
  M.prototype.visitIntervalDayTime = H;
  M.prototype.visitIntervalYearMonth = H;
  M.prototype.visitFixedSizeList = H;
  M.prototype.visitMap = H;
  var Hn = new M();
  var wm = (r, t) => r + t,
    lr = class extends D {
      visitNull(t, e) {
        return 0;
      }
      visitInt(t, e) {
        return t.type.bitWidth / 8;
      }
      visitFloat(t, e) {
        return t.type.ArrayType.BYTES_PER_ELEMENT;
      }
      visitBool(t, e) {
        return 1 / 8;
      }
      visitDecimal(t, e) {
        return t.type.bitWidth / 8;
      }
      visitDate(t, e) {
        return (t.type.unit + 1) * 4;
      }
      visitTime(t, e) {
        return t.type.bitWidth / 8;
      }
      visitTimestamp(t, e) {
        return t.type.unit === X.SECOND ? 4 : 8;
      }
      visitInterval(t, e) {
        return (t.type.unit + 1) * 4;
      }
      visitStruct(t, e) {
        return t.children.reduce((n, i) => n + xe.visit(i, e), 0);
      }
      visitFixedSizeBinary(t, e) {
        return t.type.byteWidth;
      }
      visitMap(t, e) {
        return 8 + t.children.reduce((n, i) => n + xe.visit(i, e), 0);
      }
      visitDictionary(t, e) {
        var n;
        return (
          t.type.indices.bitWidth / 8 +
          (((n = t.dictionary) === null || n === void 0
            ? void 0
            : n.getByteLength(t.values[e])) || 0)
        );
      }
    },
    vm = ({ valueOffsets: r }, t) => 8 + (r[t + 1] - r[t]),
    Sm = ({ valueOffsets: r }, t) => 8 + (r[t + 1] - r[t]),
    Im = ({ valueOffsets: r, stride: t, children: e }, n) => {
      let i = e[0],
        { [n * t]: s } = r,
        { [n * t + 1]: o } = r,
        a = xe.getVisitFn(i.type),
        c = i.slice(s, o - s),
        u = 8;
      for (let p = -1, b = o - s; ++p < b; ) u += a(c, p);
      return u;
    },
    Fm = ({ stride: r, children: t }, e) => {
      let n = t[0],
        i = n.slice(e * r, r),
        s = xe.getVisitFn(n.type),
        o = 0;
      for (let a = -1, c = i.length; ++a < c; ) o += s(i, a);
      return o;
    },
    Am = (r, t) => (r.type.mode === vt.Dense ? su(r, t) : ou(r, t)),
    su = ({ type: r, children: t, typeIds: e, valueOffsets: n }, i) => {
      let s = r.typeIdToChildIndex[e[i]];
      return 8 + xe.visit(t[s], n[i]);
    },
    ou = ({ children: r }, t) =>
      4 +
      xe
        .visitMany(
          r,
          r.map(() => t)
        )
        .reduce(wm, 0);
  lr.prototype.visitUtf8 = vm;
  lr.prototype.visitBinary = Sm;
  lr.prototype.visitList = Im;
  lr.prototype.visitFixedSizeList = Fm;
  lr.prototype.visitUnion = Am;
  lr.prototype.visitDenseUnion = su;
  lr.prototype.visitSparseUnion = ou;
  var xe = new lr();
  var au,
    cu = {},
    lu = {},
    k = class {
      constructor(t) {
        var e, n, i;
        let s = t[0] instanceof k ? t.flatMap((a) => a.data) : t;
        if (s.length === 0 || s.some((a) => !(a instanceof nt)))
          throw new TypeError(
            'Vector constructor expects an Array of Data instances.'
          );
        let o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
        switch (s.length) {
          case 0:
            this._offsets = [0];
            break;
          case 1: {
            let { get: a, set: c, indexOf: u, byteLength: p } = cu[o.typeId],
              b = s[0];
            (this.isValid = (_) => gi(b, _)),
              (this.get = (_) => a(b, _)),
              (this.set = (_, S) => c(b, _, S)),
              (this.indexOf = (_) => u(b, _)),
              (this.getByteLength = (_) => p(b, _)),
              (this._offsets = [0, b.length]);
            break;
          }
          default:
            Object.setPrototypeOf(this, lu[o.typeId]), (this._offsets = qs(s));
            break;
        }
        (this.data = s),
          (this.type = o),
          (this.stride = Ae(o)),
          (this.numChildren =
            (i =
              (n = o.children) === null || n === void 0 ? void 0 : n.length) !==
              null && i !== void 0
              ? i
              : 0),
          (this.length = this._offsets[this._offsets.length - 1]);
      }
      get byteLength() {
        return (
          this._byteLength === -1 &&
            (this._byteLength = this.data.reduce(
              (t, e) => t + e.byteLength,
              0
            )),
          this._byteLength
        );
      }
      get nullCount() {
        return (
          this._nullCount === -1 && (this._nullCount = Js(this.data)),
          this._nullCount
        );
      }
      get ArrayType() {
        return this.type.ArrayType;
      }
      get [Symbol.toStringTag]() {
        return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
      }
      get VectorName() {
        return `${f[this.type.typeId]}Vector`;
      }
      isValid(t) {
        return !1;
      }
      get(t) {
        return null;
      }
      set(t, e) {}
      indexOf(t, e) {
        return -1;
      }
      includes(t, e) {
        return this.indexOf(t, e) > 0;
      }
      getByteLength(t) {
        return 0;
      }
      [Symbol.iterator]() {
        return Hn.visit(this);
      }
      concat(...t) {
        return new k(
          this.data.concat(
            t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)
          )
        );
      }
      slice(t, e) {
        return new k(
          _i(this, t, e, ({ data: n, _offsets: i }, s, o) => Zs(n, i, s, o))
        );
      }
      toJSON() {
        return [...this];
      }
      toArray() {
        let { type: t, data: e, length: n, stride: i, ArrayType: s } = this;
        switch (t.typeId) {
          case f.Int:
          case f.Float:
          case f.Decimal:
          case f.Time:
          case f.Timestamp:
            switch (e.length) {
              case 0:
                return new s();
              case 1:
                return e[0].values.subarray(0, n * i);
              default:
                return e.reduce(
                  (o, { values: a, length: c }) => (
                    o.array.set(a.subarray(0, c * i), o.offset),
                    (o.offset += c * i),
                    o
                  ),
                  { array: new s(n * i), offset: 0 }
                ).array;
            }
        }
        return [...this];
      }
      toString() {
        return `[${[...this].join(',')}]`;
      }
      getChild(t) {
        var e;
        return this.getChildAt(
          (e = this.type.children) === null || e === void 0
            ? void 0
            : e.findIndex((n) => n.name === t)
        );
      }
      getChildAt(t) {
        return t > -1 && t < this.numChildren
          ? new k(this.data.map(({ children: e }) => e[t]))
          : null;
      }
      get isMemoized() {
        return B.isDictionary(this.type)
          ? this.data[0].dictionary.isMemoized
          : !1;
      }
      memoize() {
        if (B.isDictionary(this.type)) {
          let t = new Vn(this.data[0].dictionary),
            e = this.data.map((n) => {
              let i = n.clone();
              return (i.dictionary = t), i;
            });
          return new k(e);
        }
        return new Vn(this);
      }
      unmemoize() {
        if (B.isDictionary(this.type) && this.isMemoized) {
          let t = this.data[0].dictionary.unmemoize(),
            e = this.data.map((n) => {
              let i = n.clone();
              return (i.dictionary = t), i;
            });
          return new k(e);
        }
        return this;
      }
    };
  au = Symbol.toStringTag;
  k[au] = ((r) => {
    (r.type = B.prototype),
      (r.data = []),
      (r.length = 0),
      (r.stride = 1),
      (r.numChildren = 0),
      (r._nullCount = -1),
      (r._byteLength = -1),
      (r._offsets = new Uint32Array([0])),
      (r[Symbol.isConcatSpreadable] = !0);
    let t = Object.keys(f)
      .map((e) => f[e])
      .filter((e) => typeof e == 'number' && e !== f.NONE);
    for (let e of t) {
      let n = Dt.getVisitFnByTypeId(e),
        i = $t.getVisitFnByTypeId(e),
        s = yn.getVisitFnByTypeId(e),
        o = xe.getVisitFnByTypeId(e);
      (cu[e] = { get: n, set: i, indexOf: s, byteLength: o }),
        (lu[e] = Object.create(r, {
          isValid: { value: qr(gi) },
          get: { value: qr(Dt.getVisitFnByTypeId(e)) },
          set: { value: Qs($t.getVisitFnByTypeId(e)) },
          indexOf: { value: to(yn.getVisitFnByTypeId(e)) },
          getByteLength: { value: qr(xe.getVisitFnByTypeId(e)) },
        }));
    }
    return 'Vector';
  })(k.prototype);
  var Vn = class extends k {
    constructor(t) {
      super(t.data);
      let e = this.get,
        n = this.set,
        i = this.slice,
        s = new Array(this.length);
      Object.defineProperty(this, 'get', {
        value(o) {
          let a = s[o];
          if (a !== void 0) return a;
          let c = e.call(this, o);
          return (s[o] = c), c;
        },
      }),
        Object.defineProperty(this, 'set', {
          value(o, a) {
            n.call(this, o, a), (s[o] = a);
          },
        }),
        Object.defineProperty(this, 'slice', {
          value: (o, a) => new Vn(i.call(this, o, a)),
        }),
        Object.defineProperty(this, 'isMemoized', { value: !0 }),
        Object.defineProperty(this, 'unmemoize', {
          value: () => new k(this.data),
        }),
        Object.defineProperty(this, 'memoize', { value: () => this });
    }
  };
  function uu(r) {
    if (!r || r.length <= 0)
      return function (i) {
        return !0;
      };
    let t = '',
      e = r.filter((n) => n === n);
    return (
      e.length > 0 &&
        (t = `
    switch (x) {${e
      .map(
        (n) => `
        case ${xm(n)}:`
      )
      .join('')}
            return false;
    }`),
      r.length !== e.length &&
        (t = `if (x !== x) return false;
${t}`),
      new Function(
        'x',
        `${t}
return true;`
      )
    );
  }
  function xm(r) {
    return typeof r != 'bigint' ? $e(r) : ms ? `${$e(r)}n` : `"${$e(r)}"`;
  }
  var La = (r, t) => ((Math.ceil(r) * t + 63) & -64 || 64) / t,
    Bm = (r, t = 0) =>
      r.length >= t ? r.subarray(0, t) : Rn(new r.constructor(t), r, 0),
    Zr = class {
      constructor(t, e = 1) {
        (this.buffer = t),
          (this.stride = e),
          (this.BYTES_PER_ELEMENT = t.BYTES_PER_ELEMENT),
          (this.ArrayType = t.constructor),
          this._resize((this.length = Math.ceil(t.length / e)));
      }
      get byteLength() {
        return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
      }
      get reservedLength() {
        return this.buffer.length / this.stride;
      }
      get reservedByteLength() {
        return this.buffer.byteLength;
      }
      set(t, e) {
        return this;
      }
      append(t) {
        return this.set(this.length, t);
      }
      reserve(t) {
        if (t > 0) {
          this.length += t;
          let e = this.stride,
            n = this.length * e,
            i = this.buffer.length;
          n >= i &&
            this._resize(
              i === 0
                ? La(n * 1, this.BYTES_PER_ELEMENT)
                : La(n * 2, this.BYTES_PER_ELEMENT)
            );
        }
        return this;
      }
      flush(t = this.length) {
        t = La(t * this.stride, this.BYTES_PER_ELEMENT);
        let e = Bm(this.buffer, t);
        return this.clear(), e;
      }
      clear() {
        return (this.length = 0), this._resize(0), this;
      }
      _resize(t) {
        return (this.buffer = Rn(new this.ArrayType(t), this.buffer));
      }
    };
  Zr.prototype.offset = 0;
  var Ur = class extends Zr {
      last() {
        return this.get(this.length - 1);
      }
      get(t) {
        return this.buffer[t];
      }
      set(t, e) {
        return (
          this.reserve(t - this.length + 1),
          (this.buffer[t * this.stride] = e),
          this
        );
      }
    },
    zn = class extends Ur {
      constructor(t = new Uint8Array(0)) {
        super(t, 1 / 8), (this.numValid = 0);
      }
      get numInvalid() {
        return this.length - this.numValid;
      }
      get(t) {
        return (this.buffer[t >> 3] >> t % 8) & 1;
      }
      set(t, e) {
        let { buffer: n } = this.reserve(t - this.length + 1),
          i = t >> 3,
          s = t % 8,
          o = (n[i] >> s) & 1;
        return (
          e
            ? o === 0 && ((n[i] |= 1 << s), ++this.numValid)
            : o === 1 && ((n[i] &= ~(1 << s)), --this.numValid),
          this
        );
      }
      clear() {
        return (this.numValid = 0), super.clear();
      }
    },
    jn = class extends Ur {
      constructor(t = new Int32Array(1)) {
        super(t, 1);
      }
      append(t) {
        return this.set(this.length - 1, t);
      }
      set(t, e) {
        let n = this.length - 1,
          i = this.reserve(t - n + 1).buffer;
        return n < t++ && i.fill(i[n], n, t), (i[t] = i[t - 1] + e), this;
      }
      flush(t = this.length - 1) {
        return t > this.length && this.set(t - 1, 0), super.flush(t + 1);
      }
    };
  var bt = class {
    constructor({ type: t, nullValues: e }) {
      (this.length = 0),
        (this.finished = !1),
        (this.type = t),
        (this.children = []),
        (this.nullValues = e),
        (this.stride = Ae(t)),
        (this._nulls = new zn()),
        e && e.length > 0 && (this._isValid = uu(e));
    }
    static throughNode(t) {
      throw new Error('"throughNode" not available in this environment');
    }
    static throughDOM(t) {
      throw new Error('"throughDOM" not available in this environment');
    }
    toVector() {
      return new k([this.flush()]);
    }
    get ArrayType() {
      return this.type.ArrayType;
    }
    get nullCount() {
      return this._nulls.numInvalid;
    }
    get numChildren() {
      return this.children.length;
    }
    get byteLength() {
      let t = 0,
        { _offsets: e, _values: n, _nulls: i, _typeIds: s, children: o } = this;
      return (
        e && (t += e.byteLength),
        n && (t += n.byteLength),
        i && (t += i.byteLength),
        s && (t += s.byteLength),
        o.reduce((a, c) => a + c.byteLength, t)
      );
    }
    get reservedLength() {
      return this._nulls.reservedLength;
    }
    get reservedByteLength() {
      let t = 0;
      return (
        this._offsets && (t += this._offsets.reservedByteLength),
        this._values && (t += this._values.reservedByteLength),
        this._nulls && (t += this._nulls.reservedByteLength),
        this._typeIds && (t += this._typeIds.reservedByteLength),
        this.children.reduce((e, n) => e + n.reservedByteLength, t)
      );
    }
    get valueOffsets() {
      return this._offsets ? this._offsets.buffer : null;
    }
    get values() {
      return this._values ? this._values.buffer : null;
    }
    get nullBitmap() {
      return this._nulls ? this._nulls.buffer : null;
    }
    get typeIds() {
      return this._typeIds ? this._typeIds.buffer : null;
    }
    append(t) {
      return this.set(this.length, t);
    }
    isValid(t) {
      return this._isValid(t);
    }
    set(t, e) {
      return this.setValid(t, this.isValid(e)) && this.setValue(t, e), this;
    }
    setValue(t, e) {
      this._setValue(this, t, e);
    }
    setValid(t, e) {
      return (this.length = this._nulls.set(t, +e).length), e;
    }
    addChild(t, e = `${this.numChildren}`) {
      throw new Error(
        `Cannot append children to non-nested type "${this.type}"`
      );
    }
    getChildAt(t) {
      return this.children[t] || null;
    }
    flush() {
      let t,
        e,
        n,
        i,
        {
          type: s,
          length: o,
          nullCount: a,
          _typeIds: c,
          _offsets: u,
          _values: p,
          _nulls: b,
        } = this;
      (e = c == null ? void 0 : c.flush(o))
        ? (i = u == null ? void 0 : u.flush(o))
        : (i = u == null ? void 0 : u.flush(o))
        ? (t = p == null ? void 0 : p.flush(u.last()))
        : (t = p == null ? void 0 : p.flush(o)),
        a > 0 && (n = b == null ? void 0 : b.flush(o));
      let _ = this.children.map((S) => S.flush());
      return (
        this.clear(),
        C({
          type: s,
          length: o,
          nullCount: a,
          children: _,
          child: _[0],
          data: t,
          typeIds: e,
          nullBitmap: n,
          valueOffsets: i,
        })
      );
    }
    finish() {
      this.finished = !0;
      for (let t of this.children) t.finish();
      return this;
    }
    clear() {
      var t, e, n, i;
      (this.length = 0),
        (t = this._nulls) === null || t === void 0 || t.clear(),
        (e = this._values) === null || e === void 0 || e.clear(),
        (n = this._offsets) === null || n === void 0 || n.clear(),
        (i = this._typeIds) === null || i === void 0 || i.clear();
      for (let s of this.children) s.clear();
      return this;
    }
  };
  bt.prototype.length = 1;
  bt.prototype.stride = 1;
  bt.prototype.children = null;
  bt.prototype.finished = !1;
  bt.prototype.nullValues = null;
  bt.prototype._isValid = () => !0;
  var Nt = class extends bt {
      constructor(t) {
        super(t), (this._values = new Ur(new this.ArrayType(0), this.stride));
      }
      setValue(t, e) {
        let n = this._values;
        return n.reserve(t - n.length + 1), super.setValue(t, e);
      }
    },
    ur = class extends bt {
      constructor(t) {
        super(t), (this._pendingLength = 0), (this._offsets = new jn());
      }
      setValue(t, e) {
        let n = this._pending || (this._pending = new Map()),
          i = n.get(t);
        i && (this._pendingLength -= i.length),
          (this._pendingLength += e instanceof cr ? e[Le].length : e.length),
          n.set(t, e);
      }
      setValid(t, e) {
        return super.setValid(t, e)
          ? !0
          : ((this._pending || (this._pending = new Map())).set(t, void 0), !1);
      }
      clear() {
        return (
          (this._pendingLength = 0), (this._pending = void 0), super.clear()
        );
      }
      flush() {
        return this._flush(), super.flush();
      }
      finish() {
        return this._flush(), super.finish();
      }
      _flush() {
        let t = this._pending,
          e = this._pendingLength;
        return (
          (this._pendingLength = 0),
          (this._pending = void 0),
          t && t.size > 0 && this._flushPending(t, e),
          this
        );
      }
    };
  var bn = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    offset() {
      return this.bb.readInt64(this.bb_pos);
    }
    metaDataLength() {
      return this.bb.readInt32(this.bb_pos + 8);
    }
    bodyLength() {
      return this.bb.readInt64(this.bb_pos + 16);
    }
    static sizeOf() {
      return 24;
    }
    static createBlock(t, e, n, i) {
      return (
        t.prep(8, 24),
        t.writeInt64(i),
        t.pad(4),
        t.writeInt32(n),
        t.writeInt64(e),
        t.offset()
      );
    }
  };
  var dr = new Int32Array(2),
    eo = new Float32Array(dr.buffer),
    ro = new Float64Array(dr.buffer),
    Wn = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
  var Et = class {
    constructor(t, e) {
      (this.low = t | 0), (this.high = e | 0);
    }
    static create(t, e) {
      return t == 0 && e == 0 ? Et.ZERO : new Et(t, e);
    }
    toFloat64() {
      return (this.low >>> 0) + this.high * 4294967296;
    }
    equals(t) {
      return this.low == t.low && this.high == t.high;
    }
  };
  Et.ZERO = new Et(0, 0);
  var wi;
  (function (r) {
    (r[(r.UTF8_BYTES = 1)] = 'UTF8_BYTES'),
      (r[(r.UTF16_STRING = 2)] = 'UTF16_STRING');
  })(wi || (wi = {}));
  var se = class {
    constructor(t) {
      (this.bytes_ = t), (this.position_ = 0);
    }
    static allocate(t) {
      return new se(new Uint8Array(t));
    }
    clear() {
      this.position_ = 0;
    }
    bytes() {
      return this.bytes_;
    }
    position() {
      return this.position_;
    }
    setPosition(t) {
      this.position_ = t;
    }
    capacity() {
      return this.bytes_.length;
    }
    readInt8(t) {
      return (this.readUint8(t) << 24) >> 24;
    }
    readUint8(t) {
      return this.bytes_[t];
    }
    readInt16(t) {
      return (this.readUint16(t) << 16) >> 16;
    }
    readUint16(t) {
      return this.bytes_[t] | (this.bytes_[t + 1] << 8);
    }
    readInt32(t) {
      return (
        this.bytes_[t] |
        (this.bytes_[t + 1] << 8) |
        (this.bytes_[t + 2] << 16) |
        (this.bytes_[t + 3] << 24)
      );
    }
    readUint32(t) {
      return this.readInt32(t) >>> 0;
    }
    readInt64(t) {
      return new Et(this.readInt32(t), this.readInt32(t + 4));
    }
    readUint64(t) {
      return new Et(this.readUint32(t), this.readUint32(t + 4));
    }
    readFloat32(t) {
      return (dr[0] = this.readInt32(t)), eo[0];
    }
    readFloat64(t) {
      return (
        (dr[Wn ? 0 : 1] = this.readInt32(t)),
        (dr[Wn ? 1 : 0] = this.readInt32(t + 4)),
        ro[0]
      );
    }
    writeInt8(t, e) {
      this.bytes_[t] = e;
    }
    writeUint8(t, e) {
      this.bytes_[t] = e;
    }
    writeInt16(t, e) {
      (this.bytes_[t] = e), (this.bytes_[t + 1] = e >> 8);
    }
    writeUint16(t, e) {
      (this.bytes_[t] = e), (this.bytes_[t + 1] = e >> 8);
    }
    writeInt32(t, e) {
      (this.bytes_[t] = e),
        (this.bytes_[t + 1] = e >> 8),
        (this.bytes_[t + 2] = e >> 16),
        (this.bytes_[t + 3] = e >> 24);
    }
    writeUint32(t, e) {
      (this.bytes_[t] = e),
        (this.bytes_[t + 1] = e >> 8),
        (this.bytes_[t + 2] = e >> 16),
        (this.bytes_[t + 3] = e >> 24);
    }
    writeInt64(t, e) {
      this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high);
    }
    writeUint64(t, e) {
      this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high);
    }
    writeFloat32(t, e) {
      (eo[0] = e), this.writeInt32(t, dr[0]);
    }
    writeFloat64(t, e) {
      (ro[0] = e),
        this.writeInt32(t, dr[Wn ? 0 : 1]),
        this.writeInt32(t + 4, dr[Wn ? 1 : 0]);
    }
    getBufferIdentifier() {
      if (this.bytes_.length < this.position_ + 4 + 4)
        throw new Error(
          'FlatBuffers: ByteBuffer is too short to contain an identifier.'
        );
      let t = '';
      for (let e = 0; e < 4; e++)
        t += String.fromCharCode(this.readInt8(this.position_ + 4 + e));
      return t;
    }
    __offset(t, e) {
      let n = t - this.readInt32(t);
      return e < this.readInt16(n) ? this.readInt16(n + e) : 0;
    }
    __union(t, e) {
      return (t.bb_pos = e + this.readInt32(e)), (t.bb = this), t;
    }
    __string(t, e) {
      t += this.readInt32(t);
      let n = this.readInt32(t),
        i = '',
        s = 0;
      if (((t += 4), e === wi.UTF8_BYTES))
        return this.bytes_.subarray(t, t + n);
      for (; s < n; ) {
        let o,
          a = this.readUint8(t + s++);
        if (a < 192) o = a;
        else {
          let c = this.readUint8(t + s++);
          if (a < 224) o = ((a & 31) << 6) | (c & 63);
          else {
            let u = this.readUint8(t + s++);
            if (a < 240) o = ((a & 15) << 12) | ((c & 63) << 6) | (u & 63);
            else {
              let p = this.readUint8(t + s++);
              o =
                ((a & 7) << 18) | ((c & 63) << 12) | ((u & 63) << 6) | (p & 63);
            }
          }
        }
        o < 65536
          ? (i += String.fromCharCode(o))
          : ((o -= 65536),
            (i += String.fromCharCode(
              (o >> 10) + 55296,
              (o & ((1 << 10) - 1)) + 56320
            )));
      }
      return i;
    }
    __union_with_string(t, e) {
      return typeof t == 'string' ? this.__string(e) : this.__union(t, e);
    }
    __indirect(t) {
      return t + this.readInt32(t);
    }
    __vector(t) {
      return t + this.readInt32(t) + 4;
    }
    __vector_len(t) {
      return this.readInt32(t + this.readInt32(t));
    }
    __has_identifier(t) {
      if (t.length != 4)
        throw new Error('FlatBuffers: file identifier must be length ' + 4);
      for (let e = 0; e < 4; e++)
        if (t.charCodeAt(e) != this.readInt8(this.position() + 4 + e))
          return !1;
      return !0;
    }
    createLong(t, e) {
      return Et.create(t, e);
    }
    createScalarList(t, e) {
      let n = [];
      for (let i = 0; i < e; ++i) t(i) !== null && n.push(t(i));
      return n;
    }
    createObjList(t, e) {
      let n = [];
      for (let i = 0; i < e; ++i) {
        let s = t(i);
        s !== null && n.push(s.unpack());
      }
      return n;
    }
  };
  var Lr = class {
    constructor(t) {
      (this.minalign = 1),
        (this.vtable = null),
        (this.vtable_in_use = 0),
        (this.isNested = !1),
        (this.object_start = 0),
        (this.vtables = []),
        (this.vector_num_elems = 0),
        (this.force_defaults = !1),
        (this.string_maps = null);
      let e;
      t ? (e = t) : (e = 1024), (this.bb = se.allocate(e)), (this.space = e);
    }
    clear() {
      this.bb.clear(),
        (this.space = this.bb.capacity()),
        (this.minalign = 1),
        (this.vtable = null),
        (this.vtable_in_use = 0),
        (this.isNested = !1),
        (this.object_start = 0),
        (this.vtables = []),
        (this.vector_num_elems = 0),
        (this.force_defaults = !1),
        (this.string_maps = null);
    }
    forceDefaults(t) {
      this.force_defaults = t;
    }
    dataBuffer() {
      return this.bb;
    }
    asUint8Array() {
      return this.bb
        .bytes()
        .subarray(this.bb.position(), this.bb.position() + this.offset());
    }
    prep(t, e) {
      t > this.minalign && (this.minalign = t);
      let n = (~(this.bb.capacity() - this.space + e) + 1) & (t - 1);
      for (; this.space < n + t + e; ) {
        let i = this.bb.capacity();
        (this.bb = Lr.growByteBuffer(this.bb)),
          (this.space += this.bb.capacity() - i);
      }
      this.pad(n);
    }
    pad(t) {
      for (let e = 0; e < t; e++) this.bb.writeInt8(--this.space, 0);
    }
    writeInt8(t) {
      this.bb.writeInt8((this.space -= 1), t);
    }
    writeInt16(t) {
      this.bb.writeInt16((this.space -= 2), t);
    }
    writeInt32(t) {
      this.bb.writeInt32((this.space -= 4), t);
    }
    writeInt64(t) {
      this.bb.writeInt64((this.space -= 8), t);
    }
    writeFloat32(t) {
      this.bb.writeFloat32((this.space -= 4), t);
    }
    writeFloat64(t) {
      this.bb.writeFloat64((this.space -= 8), t);
    }
    addInt8(t) {
      this.prep(1, 0), this.writeInt8(t);
    }
    addInt16(t) {
      this.prep(2, 0), this.writeInt16(t);
    }
    addInt32(t) {
      this.prep(4, 0), this.writeInt32(t);
    }
    addInt64(t) {
      this.prep(8, 0), this.writeInt64(t);
    }
    addFloat32(t) {
      this.prep(4, 0), this.writeFloat32(t);
    }
    addFloat64(t) {
      this.prep(8, 0), this.writeFloat64(t);
    }
    addFieldInt8(t, e, n) {
      (this.force_defaults || e != n) && (this.addInt8(e), this.slot(t));
    }
    addFieldInt16(t, e, n) {
      (this.force_defaults || e != n) && (this.addInt16(e), this.slot(t));
    }
    addFieldInt32(t, e, n) {
      (this.force_defaults || e != n) && (this.addInt32(e), this.slot(t));
    }
    addFieldInt64(t, e, n) {
      (this.force_defaults || !e.equals(n)) && (this.addInt64(e), this.slot(t));
    }
    addFieldFloat32(t, e, n) {
      (this.force_defaults || e != n) && (this.addFloat32(e), this.slot(t));
    }
    addFieldFloat64(t, e, n) {
      (this.force_defaults || e != n) && (this.addFloat64(e), this.slot(t));
    }
    addFieldOffset(t, e, n) {
      (this.force_defaults || e != n) && (this.addOffset(e), this.slot(t));
    }
    addFieldStruct(t, e, n) {
      e != n && (this.nested(e), this.slot(t));
    }
    nested(t) {
      if (t != this.offset())
        throw new Error('FlatBuffers: struct must be serialized inline.');
    }
    notNested() {
      if (this.isNested)
        throw new Error(
          'FlatBuffers: object serialization must not be nested.'
        );
    }
    slot(t) {
      this.vtable !== null && (this.vtable[t] = this.offset());
    }
    offset() {
      return this.bb.capacity() - this.space;
    }
    static growByteBuffer(t) {
      let e = t.capacity();
      if (e & 3221225472)
        throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
      let n = e << 1,
        i = se.allocate(n);
      return i.setPosition(n - e), i.bytes().set(t.bytes(), n - e), i;
    }
    addOffset(t) {
      this.prep(4, 0), this.writeInt32(this.offset() - t + 4);
    }
    startObject(t) {
      this.notNested(),
        this.vtable == null && (this.vtable = []),
        (this.vtable_in_use = t);
      for (let e = 0; e < t; e++) this.vtable[e] = 0;
      (this.isNested = !0), (this.object_start = this.offset());
    }
    endObject() {
      if (this.vtable == null || !this.isNested)
        throw new Error('FlatBuffers: endObject called without startObject');
      this.addInt32(0);
      let t = this.offset(),
        e = this.vtable_in_use - 1;
      for (; e >= 0 && this.vtable[e] == 0; e--);
      let n = e + 1;
      for (; e >= 0; e--)
        this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
      let i = 2;
      this.addInt16(t - this.object_start);
      let s = (n + i) * 2;
      this.addInt16(s);
      let o = 0,
        a = this.space;
      t: for (e = 0; e < this.vtables.length; e++) {
        let c = this.bb.capacity() - this.vtables[e];
        if (s == this.bb.readInt16(c)) {
          for (let u = 2; u < s; u += 2)
            if (this.bb.readInt16(a + u) != this.bb.readInt16(c + u))
              continue t;
          o = this.vtables[e];
          break;
        }
      }
      return (
        o
          ? ((this.space = this.bb.capacity() - t),
            this.bb.writeInt32(this.space, o - t))
          : (this.vtables.push(this.offset()),
            this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)),
        (this.isNested = !1),
        t
      );
    }
    finish(t, e, n) {
      let i = n ? 4 : 0;
      if (e) {
        let s = e;
        if ((this.prep(this.minalign, 4 + 4 + i), s.length != 4))
          throw new Error('FlatBuffers: file identifier must be length ' + 4);
        for (let o = 4 - 1; o >= 0; o--) this.writeInt8(s.charCodeAt(o));
      }
      this.prep(this.minalign, 4 + i),
        this.addOffset(t),
        i && this.addInt32(this.bb.capacity() - this.space),
        this.bb.setPosition(this.space);
    }
    finishSizePrefixed(t, e) {
      this.finish(t, e, !0);
    }
    requiredField(t, e) {
      let n = this.bb.capacity() - t,
        i = n - this.bb.readInt32(n);
      if (!(this.bb.readInt16(i + e) != 0))
        throw new Error('FlatBuffers: field ' + e + ' must be set');
    }
    startVector(t, e, n) {
      this.notNested(),
        (this.vector_num_elems = e),
        this.prep(4, t * e),
        this.prep(n, t * e);
    }
    endVector() {
      return this.writeInt32(this.vector_num_elems), this.offset();
    }
    createSharedString(t) {
      if (!t) return 0;
      if (
        (this.string_maps || (this.string_maps = new Map()),
        this.string_maps.has(t))
      )
        return this.string_maps.get(t);
      let e = this.createString(t);
      return this.string_maps.set(t, e), e;
    }
    createString(t) {
      if (!t) return 0;
      let e;
      if (t instanceof Uint8Array) e = t;
      else {
        e = [];
        let n = 0;
        for (; n < t.length; ) {
          let i,
            s = t.charCodeAt(n++);
          if (s < 55296 || s >= 56320) i = s;
          else {
            let o = t.charCodeAt(n++);
            i = (s << 10) + o + (65536 - (55296 << 10) - 56320);
          }
          i < 128
            ? e.push(i)
            : (i < 2048
                ? e.push(((i >> 6) & 31) | 192)
                : (i < 65536
                    ? e.push(((i >> 12) & 15) | 224)
                    : e.push(((i >> 18) & 7) | 240, ((i >> 12) & 63) | 128),
                  e.push(((i >> 6) & 63) | 128)),
              e.push((i & 63) | 128));
        }
      }
      this.addInt8(0),
        this.startVector(1, e.length, 1),
        this.bb.setPosition((this.space -= e.length));
      for (let n = 0, i = this.space, s = this.bb.bytes(); n < e.length; n++)
        s[i++] = e[n];
      return this.endVector();
    }
    createLong(t, e) {
      return Et.create(t, e);
    }
    createObjectOffset(t) {
      return t === null
        ? 0
        : typeof t == 'string'
        ? this.createString(t)
        : t.pack(this);
    }
    createObjectOffsetList(t) {
      let e = [];
      for (let n = 0; n < t.length; ++n) {
        let i = t[n];
        if (i !== null) e.push(this.createObjectOffset(i));
        else
          throw new Error(
            'FlatBuffers: Argument for createObjectOffsetList cannot contain null.'
          );
      }
      return e;
    }
    createStructOffsetList(t, e) {
      return (
        e(this, t.length), this.createObjectOffsetList(t), this.endVector()
      );
    }
  };
  var pt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsKeyValue(t, e) {
      return (e || new pt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsKeyValue(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new pt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    key(t) {
      let e = this.bb.__offset(this.bb_pos, 4);
      return e ? this.bb.__string(this.bb_pos + e, t) : null;
    }
    value(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e ? this.bb.__string(this.bb_pos + e, t) : null;
    }
    static startKeyValue(t) {
      t.startObject(2);
    }
    static addKey(t, e) {
      t.addFieldOffset(0, e, 0);
    }
    static addValue(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static endKeyValue(t) {
      return t.endObject();
    }
    static createKeyValue(t, e, n) {
      return (
        pt.startKeyValue(t),
        pt.addKey(t, e),
        pt.addValue(t, n),
        pt.endKeyValue(t)
      );
    }
  };
  var Qr;
  (function (r) {
    (r[(r.V1 = 0)] = 'V1'),
      (r[(r.V2 = 1)] = 'V2'),
      (r[(r.V3 = 2)] = 'V3'),
      (r[(r.V4 = 3)] = 'V4'),
      (r[(r.V5 = 4)] = 'V5');
  })(Qr || (Qr = {}));
  var tn;
  (function (r) {
    (r[(r.Little = 0)] = 'Little'), (r[(r.Big = 1)] = 'Big');
  })(tn || (tn = {}));
  var vi;
  (function (r) {
    r[(r.DenseArray = 0)] = 'DenseArray';
  })(vi || (vi = {}));
  var kt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsInt(t, e) {
      return (e || new kt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsInt(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new kt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    bitWidth() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt32(this.bb_pos + t) : 0;
    }
    isSigned() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
    }
    static startInt(t) {
      t.startObject(2);
    }
    static addBitWidth(t, e) {
      t.addFieldInt32(0, e, 0);
    }
    static addIsSigned(t, e) {
      t.addFieldInt8(1, +e, 0);
    }
    static endInt(t) {
      return t.endObject();
    }
    static createInt(t, e, n) {
      return (
        kt.startInt(t), kt.addBitWidth(t, e), kt.addIsSigned(t, n), kt.endInt(t)
      );
    }
  };
  var Be = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsDictionaryEncoding(t, e) {
      return (e || new Be()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsDictionaryEncoding(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Be()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    id() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
    }
    indexType(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e
        ? (t || new kt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb)
        : null;
    }
    isOrdered() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
    }
    dictionaryKind() {
      let t = this.bb.__offset(this.bb_pos, 10);
      return t ? this.bb.readInt16(this.bb_pos + t) : vi.DenseArray;
    }
    static startDictionaryEncoding(t) {
      t.startObject(4);
    }
    static addId(t, e) {
      t.addFieldInt64(0, e, t.createLong(0, 0));
    }
    static addIndexType(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static addIsOrdered(t, e) {
      t.addFieldInt8(2, +e, 0);
    }
    static addDictionaryKind(t, e) {
      t.addFieldInt16(3, e, vi.DenseArray);
    }
    static endDictionaryEncoding(t) {
      return t.endObject();
    }
  };
  var fr = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsBinary(t, e) {
      return (e || new fr()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsBinary(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new fr()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startBinary(t) {
      t.startObject(0);
    }
    static endBinary(t) {
      return t.endObject();
    }
    static createBinary(t) {
      return fr.startBinary(t), fr.endBinary(t);
    }
  };
  var hr = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsBool(t, e) {
      return (e || new hr()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsBool(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new hr()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startBool(t) {
      t.startObject(0);
    }
    static endBool(t) {
      return t.endObject();
    }
    static createBool(t) {
      return hr.startBool(t), hr.endBool(t);
    }
  };
  var Si;
  (function (r) {
    (r[(r.DAY = 0)] = 'DAY'), (r[(r.MILLISECOND = 1)] = 'MILLISECOND');
  })(Si || (Si = {}));
  var fe = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsDate(t, e) {
      return (e || new fe()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsDate(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new fe()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    unit() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Si.MILLISECOND;
    }
    static startDate(t) {
      t.startObject(1);
    }
    static addUnit(t, e) {
      t.addFieldInt16(0, e, Si.MILLISECOND);
    }
    static endDate(t) {
      return t.endObject();
    }
    static createDate(t, e) {
      return fe.startDate(t), fe.addUnit(t, e), fe.endDate(t);
    }
  };
  var Ct = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsDecimal(t, e) {
      return (e || new Ct()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsDecimal(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Ct()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    precision() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt32(this.bb_pos + t) : 0;
    }
    scale() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.readInt32(this.bb_pos + t) : 0;
    }
    bitWidth() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? this.bb.readInt32(this.bb_pos + t) : 128;
    }
    static startDecimal(t) {
      t.startObject(3);
    }
    static addPrecision(t, e) {
      t.addFieldInt32(0, e, 0);
    }
    static addScale(t, e) {
      t.addFieldInt32(1, e, 0);
    }
    static addBitWidth(t, e) {
      t.addFieldInt32(2, e, 128);
    }
    static endDecimal(t) {
      return t.endObject();
    }
    static createDecimal(t, e, n, i) {
      return (
        Ct.startDecimal(t),
        Ct.addPrecision(t, e),
        Ct.addScale(t, n),
        Ct.addBitWidth(t, i),
        Ct.endDecimal(t)
      );
    }
  };
  var en;
  (function (r) {
    (r[(r.SECOND = 0)] = 'SECOND'),
      (r[(r.MILLISECOND = 1)] = 'MILLISECOND'),
      (r[(r.MICROSECOND = 2)] = 'MICROSECOND'),
      (r[(r.NANOSECOND = 3)] = 'NANOSECOND');
  })(en || (en = {}));
  var he = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsFixedSizeBinary(t, e) {
      return (e || new he()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsFixedSizeBinary(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new he()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    byteWidth() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt32(this.bb_pos + t) : 0;
    }
    static startFixedSizeBinary(t) {
      t.startObject(1);
    }
    static addByteWidth(t, e) {
      t.addFieldInt32(0, e, 0);
    }
    static endFixedSizeBinary(t) {
      return t.endObject();
    }
    static createFixedSizeBinary(t, e) {
      return (
        he.startFixedSizeBinary(t),
        he.addByteWidth(t, e),
        he.endFixedSizeBinary(t)
      );
    }
  };
  var pe = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsFixedSizeList(t, e) {
      return (e || new pe()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsFixedSizeList(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new pe()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    listSize() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt32(this.bb_pos + t) : 0;
    }
    static startFixedSizeList(t) {
      t.startObject(1);
    }
    static addListSize(t, e) {
      t.addFieldInt32(0, e, 0);
    }
    static endFixedSizeList(t) {
      return t.endObject();
    }
    static createFixedSizeList(t, e) {
      return (
        pe.startFixedSizeList(t), pe.addListSize(t, e), pe.endFixedSizeList(t)
      );
    }
  };
  var Ii;
  (function (r) {
    (r[(r.HALF = 0)] = 'HALF'),
      (r[(r.SINGLE = 1)] = 'SINGLE'),
      (r[(r.DOUBLE = 2)] = 'DOUBLE');
  })(Ii || (Ii = {}));
  var me = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsFloatingPoint(t, e) {
      return (e || new me()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsFloatingPoint(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new me()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    precision() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Ii.HALF;
    }
    static startFloatingPoint(t) {
      t.startObject(1);
    }
    static addPrecision(t, e) {
      t.addFieldInt16(0, e, Ii.HALF);
    }
    static endFloatingPoint(t) {
      return t.endObject();
    }
    static createFloatingPoint(t, e) {
      return (
        me.startFloatingPoint(t), me.addPrecision(t, e), me.endFloatingPoint(t)
      );
    }
  };
  var Fi;
  (function (r) {
    (r[(r.YEAR_MONTH = 0)] = 'YEAR_MONTH'),
      (r[(r.DAY_TIME = 1)] = 'DAY_TIME'),
      (r[(r.MONTH_DAY_NANO = 2)] = 'MONTH_DAY_NANO');
  })(Fi || (Fi = {}));
  var _e = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsInterval(t, e) {
      return (e || new _e()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsInterval(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new _e()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    unit() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Fi.YEAR_MONTH;
    }
    static startInterval(t) {
      t.startObject(1);
    }
    static addUnit(t, e) {
      t.addFieldInt16(0, e, Fi.YEAR_MONTH);
    }
    static endInterval(t) {
      return t.endObject();
    }
    static createInterval(t, e) {
      return _e.startInterval(t), _e.addUnit(t, e), _e.endInterval(t);
    }
  };
  var pr = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsList(t, e) {
      return (e || new pr()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsList(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new pr()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startList(t) {
      t.startObject(0);
    }
    static endList(t) {
      return t.endObject();
    }
    static createList(t) {
      return pr.startList(t), pr.endList(t);
    }
  };
  var ye = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsMap(t, e) {
      return (e || new ye()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsMap(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new ye()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    keysSorted() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
    }
    static startMap(t) {
      t.startObject(1);
    }
    static addKeysSorted(t, e) {
      t.addFieldInt8(0, +e, 0);
    }
    static endMap(t) {
      return t.endObject();
    }
    static createMap(t, e) {
      return ye.startMap(t), ye.addKeysSorted(t, e), ye.endMap(t);
    }
  };
  var mr = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsNull(t, e) {
      return (e || new mr()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsNull(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new mr()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startNull(t) {
      t.startObject(0);
    }
    static endNull(t) {
      return t.endObject();
    }
    static createNull(t) {
      return mr.startNull(t), mr.endNull(t);
    }
  };
  var _r = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsStruct_(t, e) {
      return (e || new _r()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsStruct_(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new _r()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startStruct_(t) {
      t.startObject(0);
    }
    static endStruct_(t) {
      return t.endObject();
    }
    static createStruct_(t) {
      return _r.startStruct_(t), _r.endStruct_(t);
    }
  };
  var Gt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsTime(t, e) {
      return (e || new Gt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsTime(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Gt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    unit() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : en.MILLISECOND;
    }
    bitWidth() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.readInt32(this.bb_pos + t) : 32;
    }
    static startTime(t) {
      t.startObject(2);
    }
    static addUnit(t, e) {
      t.addFieldInt16(0, e, en.MILLISECOND);
    }
    static addBitWidth(t, e) {
      t.addFieldInt32(1, e, 32);
    }
    static endTime(t) {
      return t.endObject();
    }
    static createTime(t, e, n) {
      return (
        Gt.startTime(t), Gt.addUnit(t, e), Gt.addBitWidth(t, n), Gt.endTime(t)
      );
    }
  };
  var Kt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsTimestamp(t, e) {
      return (e || new Kt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsTimestamp(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Kt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    unit() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : en.SECOND;
    }
    timezone(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e ? this.bb.__string(this.bb_pos + e, t) : null;
    }
    static startTimestamp(t) {
      t.startObject(2);
    }
    static addUnit(t, e) {
      t.addFieldInt16(0, e, en.SECOND);
    }
    static addTimezone(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static endTimestamp(t) {
      return t.endObject();
    }
    static createTimestamp(t, e, n) {
      return (
        Kt.startTimestamp(t),
        Kt.addUnit(t, e),
        Kt.addTimezone(t, n),
        Kt.endTimestamp(t)
      );
    }
  };
  var Ai;
  (function (r) {
    (r[(r.Sparse = 0)] = 'Sparse'), (r[(r.Dense = 1)] = 'Dense');
  })(Ai || (Ai = {}));
  var Pt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsUnion(t, e) {
      return (e || new Pt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsUnion(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    mode() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Ai.Sparse;
    }
    typeIds(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e
        ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4)
        : 0;
    }
    typeIdsLength() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    typeIdsArray() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t
        ? new Int32Array(
            this.bb.bytes().buffer,
            this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
            this.bb.__vector_len(this.bb_pos + t)
          )
        : null;
    }
    static startUnion(t) {
      t.startObject(2);
    }
    static addMode(t, e) {
      t.addFieldInt16(0, e, Ai.Sparse);
    }
    static addTypeIds(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static createTypeIdsVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addInt32(e[n]);
      return t.endVector();
    }
    static startTypeIdsVector(t, e) {
      t.startVector(4, e, 4);
    }
    static endUnion(t) {
      return t.endObject();
    }
    static createUnion(t, e, n) {
      return (
        Pt.startUnion(t), Pt.addMode(t, e), Pt.addTypeIds(t, n), Pt.endUnion(t)
      );
    }
  };
  var yr = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsUtf8(t, e) {
      return (e || new yr()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsUtf8(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new yr()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    static startUtf8(t) {
      t.startObject(0);
    }
    static endUtf8(t) {
      return t.endObject();
    }
    static createUtf8(t) {
      return yr.startUtf8(t), yr.endUtf8(t);
    }
  };
  var gt;
  (function (r) {
    (r[(r.NONE = 0)] = 'NONE'),
      (r[(r.Null = 1)] = 'Null'),
      (r[(r.Int = 2)] = 'Int'),
      (r[(r.FloatingPoint = 3)] = 'FloatingPoint'),
      (r[(r.Binary = 4)] = 'Binary'),
      (r[(r.Utf8 = 5)] = 'Utf8'),
      (r[(r.Bool = 6)] = 'Bool'),
      (r[(r.Decimal = 7)] = 'Decimal'),
      (r[(r.Date = 8)] = 'Date'),
      (r[(r.Time = 9)] = 'Time'),
      (r[(r.Timestamp = 10)] = 'Timestamp'),
      (r[(r.Interval = 11)] = 'Interval'),
      (r[(r.List = 12)] = 'List'),
      (r[(r.Struct_ = 13)] = 'Struct_'),
      (r[(r.Union = 14)] = 'Union'),
      (r[(r.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
      (r[(r.FixedSizeList = 16)] = 'FixedSizeList'),
      (r[(r.Map = 17)] = 'Map'),
      (r[(r.Duration = 18)] = 'Duration'),
      (r[(r.LargeBinary = 19)] = 'LargeBinary'),
      (r[(r.LargeUtf8 = 20)] = 'LargeUtf8'),
      (r[(r.LargeList = 21)] = 'LargeList');
  })(gt || (gt = {}));
  var Ot = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsField(t, e) {
      return (e || new Ot()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsField(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Ot()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    name(t) {
      let e = this.bb.__offset(this.bb_pos, 4);
      return e ? this.bb.__string(this.bb_pos + e, t) : null;
    }
    nullable() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
    }
    typeType() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? this.bb.readUint8(this.bb_pos + t) : gt.NONE;
    }
    type(t) {
      let e = this.bb.__offset(this.bb_pos, 10);
      return e ? this.bb.__union(t, this.bb_pos + e) : null;
    }
    dictionary(t) {
      let e = this.bb.__offset(this.bb_pos, 12);
      return e
        ? (t || new Be()).__init(this.bb.__indirect(this.bb_pos + e), this.bb)
        : null;
    }
    children(t, e) {
      let n = this.bb.__offset(this.bb_pos, 14);
      return n
        ? (e || new Ot()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    childrenLength() {
      let t = this.bb.__offset(this.bb_pos, 14);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    customMetadata(t, e) {
      let n = this.bb.__offset(this.bb_pos, 16);
      return n
        ? (e || new pt()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    customMetadataLength() {
      let t = this.bb.__offset(this.bb_pos, 16);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    static startField(t) {
      t.startObject(7);
    }
    static addName(t, e) {
      t.addFieldOffset(0, e, 0);
    }
    static addNullable(t, e) {
      t.addFieldInt8(1, +e, 0);
    }
    static addTypeType(t, e) {
      t.addFieldInt8(2, e, gt.NONE);
    }
    static addType(t, e) {
      t.addFieldOffset(3, e, 0);
    }
    static addDictionary(t, e) {
      t.addFieldOffset(4, e, 0);
    }
    static addChildren(t, e) {
      t.addFieldOffset(5, e, 0);
    }
    static createChildrenVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startChildrenVector(t, e) {
      t.startVector(4, e, 4);
    }
    static addCustomMetadata(t, e) {
      t.addFieldOffset(6, e, 0);
    }
    static createCustomMetadataVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startCustomMetadataVector(t, e) {
      t.startVector(4, e, 4);
    }
    static endField(t) {
      return t.endObject();
    }
  };
  var St = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsSchema(t, e) {
      return (e || new St()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsSchema(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new St()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    endianness() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : tn.Little;
    }
    fields(t, e) {
      let n = this.bb.__offset(this.bb_pos, 6);
      return n
        ? (e || new Ot()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    fieldsLength() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    customMetadata(t, e) {
      let n = this.bb.__offset(this.bb_pos, 8);
      return n
        ? (e || new pt()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    customMetadataLength() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    features(t) {
      let e = this.bb.__offset(this.bb_pos, 10);
      return e
        ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8)
        : this.bb.createLong(0, 0);
    }
    featuresLength() {
      let t = this.bb.__offset(this.bb_pos, 10);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    static startSchema(t) {
      t.startObject(4);
    }
    static addEndianness(t, e) {
      t.addFieldInt16(0, e, tn.Little);
    }
    static addFields(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static createFieldsVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startFieldsVector(t, e) {
      t.startVector(4, e, 4);
    }
    static addCustomMetadata(t, e) {
      t.addFieldOffset(2, e, 0);
    }
    static createCustomMetadataVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startCustomMetadataVector(t, e) {
      t.startVector(4, e, 4);
    }
    static addFeatures(t, e) {
      t.addFieldOffset(3, e, 0);
    }
    static createFeaturesVector(t, e) {
      t.startVector(8, e.length, 8);
      for (let n = e.length - 1; n >= 0; n--) t.addInt64(e[n]);
      return t.endVector();
    }
    static startFeaturesVector(t, e) {
      t.startVector(8, e, 8);
    }
    static endSchema(t) {
      return t.endObject();
    }
    static finishSchemaBuffer(t, e) {
      t.finish(e);
    }
    static finishSizePrefixedSchemaBuffer(t, e) {
      t.finish(e, void 0, !0);
    }
    static createSchema(t, e, n, i, s) {
      return (
        St.startSchema(t),
        St.addEndianness(t, e),
        St.addFields(t, n),
        St.addCustomMetadata(t, i),
        St.addFeatures(t, s),
        St.endSchema(t)
      );
    }
  };
  var Jt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsFooter(t, e) {
      return (e || new Jt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsFooter(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Jt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    version() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Qr.V1;
    }
    schema(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e
        ? (t || new St()).__init(this.bb.__indirect(this.bb_pos + e), this.bb)
        : null;
    }
    dictionaries(t, e) {
      let n = this.bb.__offset(this.bb_pos, 8);
      return n
        ? (e || new bn()).__init(
            this.bb.__vector(this.bb_pos + n) + t * 24,
            this.bb
          )
        : null;
    }
    dictionariesLength() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    recordBatches(t, e) {
      let n = this.bb.__offset(this.bb_pos, 10);
      return n
        ? (e || new bn()).__init(
            this.bb.__vector(this.bb_pos + n) + t * 24,
            this.bb
          )
        : null;
    }
    recordBatchesLength() {
      let t = this.bb.__offset(this.bb_pos, 10);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    customMetadata(t, e) {
      let n = this.bb.__offset(this.bb_pos, 12);
      return n
        ? (e || new pt()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    customMetadataLength() {
      let t = this.bb.__offset(this.bb_pos, 12);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    static startFooter(t) {
      t.startObject(5);
    }
    static addVersion(t, e) {
      t.addFieldInt16(0, e, Qr.V1);
    }
    static addSchema(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static addDictionaries(t, e) {
      t.addFieldOffset(2, e, 0);
    }
    static startDictionariesVector(t, e) {
      t.startVector(24, e, 8);
    }
    static addRecordBatches(t, e) {
      t.addFieldOffset(3, e, 0);
    }
    static startRecordBatchesVector(t, e) {
      t.startVector(24, e, 8);
    }
    static addCustomMetadata(t, e) {
      t.addFieldOffset(4, e, 0);
    }
    static createCustomMetadataVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startCustomMetadataVector(t, e) {
      t.startVector(4, e, 4);
    }
    static endFooter(t) {
      return t.endObject();
    }
    static finishFooterBuffer(t, e) {
      t.finish(e);
    }
    static finishSizePrefixedFooterBuffer(t, e) {
      t.finish(e, void 0, !0);
    }
  };
  var G = class {
    constructor(t = [], e, n) {
      (this.fields = t || []),
        (this.metadata = e || new Map()),
        n || (n = Na(t)),
        (this.dictionaries = n);
    }
    get [Symbol.toStringTag]() {
      return 'Schema';
    }
    get names() {
      return this.fields.map((t) => t.name);
    }
    toString() {
      return `Schema<{ ${this.fields
        .map((t, e) => `${e}: ${t}`)
        .join(', ')} }>`;
    }
    select(t) {
      let e = new Set(t),
        n = this.fields.filter((i) => e.has(i.name));
      return new G(n, this.metadata);
    }
    selectAt(t) {
      let e = t.map((n) => this.fields[n]).filter(Boolean);
      return new G(e, this.metadata);
    }
    assign(...t) {
      let e =
          t[0] instanceof G
            ? t[0]
            : Array.isArray(t[0])
            ? new G(t[0])
            : new G(t),
        n = [...this.fields],
        i = io(io(new Map(), this.metadata), e.metadata),
        s = e.fields.filter((a) => {
          let c = n.findIndex((u) => u.name === a.name);
          return ~c
            ? (n[c] = a.clone({
                metadata: io(io(new Map(), n[c].metadata), a.metadata),
              })) && !1
            : !0;
        }),
        o = Na(s, new Map());
      return new G([...n, ...s], i, new Map([...this.dictionaries, ...o]));
    }
  };
  G.prototype.fields = null;
  G.prototype.metadata = null;
  G.prototype.dictionaries = null;
  var V = class {
    constructor(t, e, n = !1, i) {
      (this.name = t),
        (this.type = e),
        (this.nullable = n),
        (this.metadata = i || new Map());
    }
    static new(...t) {
      let [e, n, i, s] = t;
      return (
        t[0] &&
          typeof t[0] == 'object' &&
          (({ name: e } = t[0]),
          n === void 0 && (n = t[0].type),
          i === void 0 && (i = t[0].nullable),
          s === void 0 && (s = t[0].metadata)),
        new V(`${e}`, n, i, s)
      );
    }
    get typeId() {
      return this.type.typeId;
    }
    get [Symbol.toStringTag]() {
      return 'Field';
    }
    toString() {
      return `${this.name}: ${this.type}`;
    }
    clone(...t) {
      let [e, n, i, s] = t;
      return (
        !t[0] || typeof t[0] != 'object'
          ? ([
              e = this.name,
              n = this.type,
              i = this.nullable,
              s = this.metadata,
            ] = t)
          : ({
              name: e = this.name,
              type: n = this.type,
              nullable: i = this.nullable,
              metadata: s = this.metadata,
            } = t[0]),
        V.new(e, n, i, s)
      );
    }
  };
  V.prototype.type = null;
  V.prototype.name = null;
  V.prototype.nullable = null;
  V.prototype.metadata = null;
  function io(r, t) {
    return new Map([...(r || new Map()), ...(t || new Map())]);
  }
  function Na(r, t = new Map()) {
    for (let e = -1, n = r.length; ++e < n; ) {
      let s = r[e].type;
      if (B.isDictionary(s)) {
        if (!t.has(s.id)) t.set(s.id, s.dictionary);
        else if (t.get(s.id) !== s.dictionary)
          throw new Error(
            'Cannot create Schema containing two different dictionaries with the same Id'
          );
      }
      s.children && s.children.length > 0 && Na(s.children, t);
    }
    return t;
  }
  var du = Et,
    Tm = Lr,
    Dm = se,
    Nr = class {
      constructor(t, e = Lt.V4, n, i) {
        (this.schema = t),
          (this.version = e),
          n && (this._recordBatches = n),
          i && (this._dictionaryBatches = i);
      }
      static decode(t) {
        t = new Dm(L(t));
        let e = Jt.getRootAsFooter(t),
          n = G.decode(e.schema());
        return new ka(n, e);
      }
      static encode(t) {
        let e = new Tm(),
          n = G.encode(e, t.schema);
        Jt.startRecordBatchesVector(e, t.numRecordBatches);
        for (let o of [...t.recordBatches()].slice().reverse()) tr.encode(e, o);
        let i = e.endVector();
        Jt.startDictionariesVector(e, t.numDictionaries);
        for (let o of [...t.dictionaryBatches()].slice().reverse())
          tr.encode(e, o);
        let s = e.endVector();
        return (
          Jt.startFooter(e),
          Jt.addSchema(e, n),
          Jt.addVersion(e, Lt.V4),
          Jt.addRecordBatches(e, i),
          Jt.addDictionaries(e, s),
          Jt.finishFooterBuffer(e, Jt.endFooter(e)),
          e.asUint8Array()
        );
      }
      get numRecordBatches() {
        return this._recordBatches.length;
      }
      get numDictionaries() {
        return this._dictionaryBatches.length;
      }
      *recordBatches() {
        for (let t, e = -1, n = this.numRecordBatches; ++e < n; )
          (t = this.getRecordBatch(e)) && (yield t);
      }
      *dictionaryBatches() {
        for (let t, e = -1, n = this.numDictionaries; ++e < n; )
          (t = this.getDictionaryBatch(e)) && (yield t);
      }
      getRecordBatch(t) {
        return (
          (t >= 0 && t < this.numRecordBatches && this._recordBatches[t]) ||
          null
        );
      }
      getDictionaryBatch(t) {
        return (
          (t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t]) ||
          null
        );
      }
    };
  var ka = class extends Nr {
      constructor(t, e) {
        super(t, e.version()), (this._footer = e);
      }
      get numRecordBatches() {
        return this._footer.recordBatchesLength();
      }
      get numDictionaries() {
        return this._footer.dictionariesLength();
      }
      getRecordBatch(t) {
        if (t >= 0 && t < this.numRecordBatches) {
          let e = this._footer.recordBatches(t);
          if (e) return tr.decode(e);
        }
        return null;
      }
      getDictionaryBatch(t) {
        if (t >= 0 && t < this.numDictionaries) {
          let e = this._footer.dictionaries(t);
          if (e) return tr.decode(e);
        }
        return null;
      }
    },
    tr = class {
      constructor(t, e, n) {
        (this.metaDataLength = t),
          (this.offset = typeof n == 'number' ? n : n.low),
          (this.bodyLength = typeof e == 'number' ? e : e.low);
      }
      static decode(t) {
        return new tr(t.metaDataLength(), t.bodyLength(), t.offset());
      }
      static encode(t, e) {
        let { metaDataLength: n } = e,
          i = new du(e.offset, 0),
          s = new du(e.bodyLength, 0);
        return bn.createBlock(t, i, n, s);
      }
    };
  var mt = Object.freeze({ done: !0, value: void 0 }),
    xi = class {
      constructor(t) {
        this._json = t;
      }
      get schema() {
        return this._json.schema;
      }
      get batches() {
        return this._json.batches || [];
      }
      get dictionaries() {
        return this._json.dictionaries || [];
      }
    },
    gn = class {
      tee() {
        return this._getDOMStream().tee();
      }
      pipe(t, e) {
        return this._getNodeStream().pipe(t, e);
      }
      pipeTo(t, e) {
        return this._getDOMStream().pipeTo(t, e);
      }
      pipeThrough(t, e) {
        return this._getDOMStream().pipeThrough(t, e);
      }
      _getDOMStream() {
        return this._DOMStream || (this._DOMStream = this.toDOMStream());
      }
      _getNodeStream() {
        return this._nodeStream || (this._nodeStream = this.toNodeStream());
      }
    },
    so = class extends gn {
      constructor() {
        super(),
          (this._values = []),
          (this.resolvers = []),
          (this._closedPromise = new Promise(
            (t) => (this._closedPromiseResolve = t)
          ));
      }
      get closed() {
        return this._closedPromise;
      }
      cancel(t) {
        return I(this, void 0, void 0, function* () {
          yield this.return(t);
        });
      }
      write(t) {
        this._ensureOpen() &&
          (this.resolvers.length <= 0
            ? this._values.push(t)
            : this.resolvers.shift().resolve({ done: !1, value: t }));
      }
      abort(t) {
        this._closedPromiseResolve &&
          (this.resolvers.length <= 0
            ? (this._error = { error: t })
            : this.resolvers.shift().reject({ done: !0, value: t }));
      }
      close() {
        if (this._closedPromiseResolve) {
          let { resolvers: t } = this;
          for (; t.length > 0; ) t.shift().resolve(mt);
          this._closedPromiseResolve(), (this._closedPromiseResolve = void 0);
        }
      }
      [Symbol.asyncIterator]() {
        return this;
      }
      toDOMStream(t) {
        return jt.toDOMStream(
          this._closedPromiseResolve || this._error ? this : this._values,
          t
        );
      }
      toNodeStream(t) {
        return jt.toNodeStream(
          this._closedPromiseResolve || this._error ? this : this._values,
          t
        );
      }
      throw(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.abort(t), mt;
        });
      }
      return(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.close(), mt;
        });
      }
      read(t) {
        return I(this, void 0, void 0, function* () {
          return (yield this.next(t, 'read')).value;
        });
      }
      peek(t) {
        return I(this, void 0, void 0, function* () {
          return (yield this.next(t, 'peek')).value;
        });
      }
      next(...t) {
        return this._values.length > 0
          ? Promise.resolve({ done: !1, value: this._values.shift() })
          : this._error
          ? Promise.reject({ done: !0, value: this._error.error })
          : this._closedPromiseResolve
          ? new Promise((e, n) => {
              this.resolvers.push({ resolve: e, reject: n });
            })
          : Promise.resolve(mt);
      }
      _ensureOpen() {
        if (this._closedPromiseResolve) return !0;
        throw new Error('AsyncQueue is closed');
      }
    };
  var br = class extends so {
      write(t) {
        if ((t = L(t)).byteLength > 0) return super.write(t);
      }
      toString(t = !1) {
        return t ? di(this.toUint8Array(!0)) : this.toUint8Array(!1).then(di);
      }
      toUint8Array(t = !1) {
        return t
          ? Ie(this._values)[0]
          : (() =>
              I(this, void 0, void 0, function* () {
                var e, n;
                let i = [],
                  s = 0;
                try {
                  for (var o = Ee(this), a; (a = yield o.next()), !a.done; ) {
                    let c = a.value;
                    i.push(c), (s += c.byteLength);
                  }
                } catch (c) {
                  e = { error: c };
                } finally {
                  try {
                    a && !a.done && (n = o.return) && (yield n.call(o));
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return Ie(i, s)[0];
              }))();
      }
    },
    gr = class {
      constructor(t) {
        t && (this.source = new Ca(jt.fromIterable(t)));
      }
      [Symbol.iterator]() {
        return this;
      }
      next(t) {
        return this.source.next(t);
      }
      throw(t) {
        return this.source.throw(t);
      }
      return(t) {
        return this.source.return(t);
      }
      peek(t) {
        return this.source.peek(t);
      }
      read(t) {
        return this.source.read(t);
      }
    },
    be = class {
      constructor(t) {
        t instanceof be
          ? (this.source = t.source)
          : t instanceof br
          ? (this.source = new kr(jt.fromAsyncIterable(t)))
          : vs(t)
          ? (this.source = new kr(jt.fromNodeStream(t)))
          : fi(t)
          ? (this.source = new kr(jt.fromDOMStream(t)))
          : gs(t)
          ? (this.source = new kr(jt.fromDOMStream(t.body)))
          : je(t)
          ? (this.source = new kr(jt.fromIterable(t)))
          : ze(t)
          ? (this.source = new kr(jt.fromAsyncIterable(t)))
          : Me(t) && (this.source = new kr(jt.fromAsyncIterable(t)));
      }
      [Symbol.asyncIterator]() {
        return this;
      }
      next(t) {
        return this.source.next(t);
      }
      throw(t) {
        return this.source.throw(t);
      }
      return(t) {
        return this.source.return(t);
      }
      get closed() {
        return this.source.closed;
      }
      cancel(t) {
        return this.source.cancel(t);
      }
      peek(t) {
        return this.source.peek(t);
      }
      read(t) {
        return this.source.read(t);
      }
    },
    Ca = class {
      constructor(t) {
        this.source = t;
      }
      cancel(t) {
        this.return(t);
      }
      peek(t) {
        return this.next(t, 'peek').value;
      }
      read(t) {
        return this.next(t, 'read').value;
      }
      next(t, e = 'read') {
        return this.source.next({ cmd: e, size: t });
      }
      throw(t) {
        return Object.create((this.source.throw && this.source.throw(t)) || mt);
      }
      return(t) {
        return Object.create(
          (this.source.return && this.source.return(t)) || mt
        );
      }
    },
    kr = class {
      constructor(t) {
        (this.source = t),
          (this._closedPromise = new Promise(
            (e) => (this._closedPromiseResolve = e)
          ));
      }
      cancel(t) {
        return I(this, void 0, void 0, function* () {
          yield this.return(t);
        });
      }
      get closed() {
        return this._closedPromise;
      }
      read(t) {
        return I(this, void 0, void 0, function* () {
          return (yield this.next(t, 'read')).value;
        });
      }
      peek(t) {
        return I(this, void 0, void 0, function* () {
          return (yield this.next(t, 'peek')).value;
        });
      }
      next(t, e = 'read') {
        return I(this, void 0, void 0, function* () {
          return yield this.source.next({ cmd: e, size: t });
        });
      }
      throw(t) {
        return I(this, void 0, void 0, function* () {
          let e = (this.source.throw && (yield this.source.throw(t))) || mt;
          return (
            this._closedPromiseResolve && this._closedPromiseResolve(),
            (this._closedPromiseResolve = void 0),
            Object.create(e)
          );
        });
      }
      return(t) {
        return I(this, void 0, void 0, function* () {
          let e = (this.source.return && (yield this.source.return(t))) || mt;
          return (
            this._closedPromiseResolve && this._closedPromiseResolve(),
            (this._closedPromiseResolve = void 0),
            Object.create(e)
          );
        });
      }
    };
  var Bi = class extends gr {
      constructor(t, e) {
        super(),
          (this.position = 0),
          (this.buffer = L(t)),
          (this.size = typeof e > 'u' ? this.buffer.byteLength : e);
      }
      readInt32(t) {
        let { buffer: e, byteOffset: n } = this.readAt(t, 4);
        return new DataView(e, n).getInt32(0, !0);
      }
      seek(t) {
        return (this.position = Math.min(t, this.size)), t < this.size;
      }
      read(t) {
        let { buffer: e, size: n, position: i } = this;
        return e && i < n
          ? (typeof t != 'number' && (t = Number.POSITIVE_INFINITY),
            (this.position = Math.min(n, i + Math.min(n - i, t))),
            e.subarray(i, this.position))
          : null;
      }
      readAt(t, e) {
        let n = this.buffer,
          i = Math.min(this.size, t + e);
        return n ? n.subarray(t, i) : new Uint8Array(e);
      }
      close() {
        this.buffer && (this.buffer = null);
      }
      throw(t) {
        return this.close(), { done: !0, value: t };
      }
      return(t) {
        return this.close(), { done: !0, value: t };
      }
    },
    rn = class extends be {
      constructor(t, e) {
        super(),
          (this.position = 0),
          (this._handle = t),
          typeof e == 'number'
            ? (this.size = e)
            : (this._pending = (() =>
                I(this, void 0, void 0, function* () {
                  (this.size = (yield t.stat()).size), delete this._pending;
                }))());
      }
      readInt32(t) {
        return I(this, void 0, void 0, function* () {
          let { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
          return new DataView(e, n).getInt32(0, !0);
        });
      }
      seek(t) {
        return I(this, void 0, void 0, function* () {
          return (
            this._pending && (yield this._pending),
            (this.position = Math.min(t, this.size)),
            t < this.size
          );
        });
      }
      read(t) {
        return I(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let { _handle: e, size: n, position: i } = this;
          if (e && i < n) {
            typeof t != 'number' && (t = Number.POSITIVE_INFINITY);
            let s = i,
              o = 0,
              a = 0,
              c = Math.min(n, s + Math.min(n - s, t)),
              u = new Uint8Array(Math.max(0, (this.position = c) - s));
            for (; (s += a) < c && (o += a) < u.byteLength; )
              ({ bytesRead: a } = yield e.read(u, o, u.byteLength - o, s));
            return u;
          }
          return null;
        });
      }
      readAt(t, e) {
        return I(this, void 0, void 0, function* () {
          this._pending && (yield this._pending);
          let { _handle: n, size: i } = this;
          if (n && t + e < i) {
            let s = Math.min(i, t + e),
              o = new Uint8Array(s - t);
            return (yield n.read(o, 0, e, t)).buffer;
          }
          return new Uint8Array(e);
        });
      }
      close() {
        return I(this, void 0, void 0, function* () {
          let t = this._handle;
          (this._handle = null), t && (yield t.close());
        });
      }
      throw(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.close(), { done: !0, value: t };
        });
      }
      return(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.close(), { done: !0, value: t };
        });
      }
    };
  var Ha = {};
  dn(Ha, {
    BaseInt64: () => Ti,
    Int128: () => ge,
    Int64: () => Ht,
    Uint64: () => it,
  });
  function $n(r) {
    return r < 0 && (r = 4294967295 + r + 1), `0x${r.toString(16)}`;
  }
  var Yn = 8,
    Pa = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8],
    Ti = class {
      constructor(t) {
        this.buffer = t;
      }
      high() {
        return this.buffer[1];
      }
      low() {
        return this.buffer[0];
      }
      _times(t) {
        let e = new Uint32Array([
            this.buffer[1] >>> 16,
            this.buffer[1] & 65535,
            this.buffer[0] >>> 16,
            this.buffer[0] & 65535,
          ]),
          n = new Uint32Array([
            t.buffer[1] >>> 16,
            t.buffer[1] & 65535,
            t.buffer[0] >>> 16,
            t.buffer[0] & 65535,
          ]),
          i = e[3] * n[3];
        this.buffer[0] = i & 65535;
        let s = i >>> 16;
        return (
          (i = e[2] * n[3]),
          (s += i),
          (i = (e[3] * n[2]) >>> 0),
          (s += i),
          (this.buffer[0] += s << 16),
          (this.buffer[1] = s >>> 0 < i ? 65536 : 0),
          (this.buffer[1] += s >>> 16),
          (this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1]),
          (this.buffer[1] +=
            (e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0]) << 16),
          this
        );
      }
      _plus(t) {
        let e = (this.buffer[0] + t.buffer[0]) >>> 0;
        (this.buffer[1] += t.buffer[1]),
          e < this.buffer[0] >>> 0 && ++this.buffer[1],
          (this.buffer[0] = e);
      }
      lessThan(t) {
        return (
          this.buffer[1] < t.buffer[1] ||
          (this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0])
        );
      }
      equals(t) {
        return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
      }
      greaterThan(t) {
        return t.lessThan(this);
      }
      hex() {
        return `${$n(this.buffer[1])} ${$n(this.buffer[0])}`;
      }
    },
    it = class extends Ti {
      times(t) {
        return this._times(t), this;
      }
      plus(t) {
        return this._plus(t), this;
      }
      static from(t, e = new Uint32Array(2)) {
        return it.fromString(typeof t == 'string' ? t : t.toString(), e);
      }
      static fromNumber(t, e = new Uint32Array(2)) {
        return it.fromString(t.toString(), e);
      }
      static fromString(t, e = new Uint32Array(2)) {
        let n = t.length,
          i = new it(e);
        for (let s = 0; s < n; ) {
          let o = Yn < n - s ? Yn : n - s,
            a = new it(
              new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])
            ),
            c = new it(new Uint32Array([Pa[o], 0]));
          i.times(c), i.plus(a), (s += o);
        }
        return i;
      }
      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let n = -1, i = t.length; ++n < i; )
          it.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
        return e;
      }
      static multiply(t, e) {
        return new it(new Uint32Array(t.buffer)).times(e);
      }
      static add(t, e) {
        return new it(new Uint32Array(t.buffer)).plus(e);
      }
    },
    Ht = class extends Ti {
      negate() {
        return (
          (this.buffer[0] = ~this.buffer[0] + 1),
          (this.buffer[1] = ~this.buffer[1]),
          this.buffer[0] == 0 && ++this.buffer[1],
          this
        );
      }
      times(t) {
        return this._times(t), this;
      }
      plus(t) {
        return this._plus(t), this;
      }
      lessThan(t) {
        let e = this.buffer[1] << 0,
          n = t.buffer[1] << 0;
        return e < n || (e === n && this.buffer[0] < t.buffer[0]);
      }
      static from(t, e = new Uint32Array(2)) {
        return Ht.fromString(typeof t == 'string' ? t : t.toString(), e);
      }
      static fromNumber(t, e = new Uint32Array(2)) {
        return Ht.fromString(t.toString(), e);
      }
      static fromString(t, e = new Uint32Array(2)) {
        let n = t.startsWith('-'),
          i = t.length,
          s = new Ht(e);
        for (let o = n ? 1 : 0; o < i; ) {
          let a = Yn < i - o ? Yn : i - o,
            c = new Ht(
              new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])
            ),
            u = new Ht(new Uint32Array([Pa[a], 0]));
          s.times(u), s.plus(c), (o += a);
        }
        return n ? s.negate() : s;
      }
      static convertArray(t) {
        let e = new Uint32Array(t.length * 2);
        for (let n = -1, i = t.length; ++n < i; )
          Ht.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
        return e;
      }
      static multiply(t, e) {
        return new Ht(new Uint32Array(t.buffer)).times(e);
      }
      static add(t, e) {
        return new Ht(new Uint32Array(t.buffer)).plus(e);
      }
    },
    ge = class {
      constructor(t) {
        this.buffer = t;
      }
      high() {
        return new Ht(
          new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)
        );
      }
      low() {
        return new Ht(
          new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2)
        );
      }
      negate() {
        return (
          (this.buffer[0] = ~this.buffer[0] + 1),
          (this.buffer[1] = ~this.buffer[1]),
          (this.buffer[2] = ~this.buffer[2]),
          (this.buffer[3] = ~this.buffer[3]),
          this.buffer[0] == 0 && ++this.buffer[1],
          this.buffer[1] == 0 && ++this.buffer[2],
          this.buffer[2] == 0 && ++this.buffer[3],
          this
        );
      }
      times(t) {
        let e = new it(new Uint32Array([this.buffer[3], 0])),
          n = new it(new Uint32Array([this.buffer[2], 0])),
          i = new it(new Uint32Array([this.buffer[1], 0])),
          s = new it(new Uint32Array([this.buffer[0], 0])),
          o = new it(new Uint32Array([t.buffer[3], 0])),
          a = new it(new Uint32Array([t.buffer[2], 0])),
          c = new it(new Uint32Array([t.buffer[1], 0])),
          u = new it(new Uint32Array([t.buffer[0], 0])),
          p = it.multiply(s, u);
        this.buffer[0] = p.low();
        let b = new it(new Uint32Array([p.high(), 0]));
        return (
          (p = it.multiply(i, u)),
          b.plus(p),
          (p = it.multiply(s, c)),
          b.plus(p),
          (this.buffer[1] = b.low()),
          (this.buffer[3] = b.lessThan(p) ? 1 : 0),
          (this.buffer[2] = b.high()),
          new it(
            new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)
          )
            .plus(it.multiply(n, u))
            .plus(it.multiply(i, c))
            .plus(it.multiply(s, a)),
          (this.buffer[3] += it
            .multiply(e, u)
            .plus(it.multiply(n, c))
            .plus(it.multiply(i, a))
            .plus(it.multiply(s, o))
            .low()),
          this
        );
      }
      plus(t) {
        let e = new Uint32Array(4);
        return (
          (e[3] = (this.buffer[3] + t.buffer[3]) >>> 0),
          (e[2] = (this.buffer[2] + t.buffer[2]) >>> 0),
          (e[1] = (this.buffer[1] + t.buffer[1]) >>> 0),
          (e[0] = (this.buffer[0] + t.buffer[0]) >>> 0),
          e[0] < this.buffer[0] >>> 0 && ++e[1],
          e[1] < this.buffer[1] >>> 0 && ++e[2],
          e[2] < this.buffer[2] >>> 0 && ++e[3],
          (this.buffer[3] = e[3]),
          (this.buffer[2] = e[2]),
          (this.buffer[1] = e[1]),
          (this.buffer[0] = e[0]),
          this
        );
      }
      hex() {
        return `${$n(this.buffer[3])} ${$n(this.buffer[2])} ${$n(
          this.buffer[1]
        )} ${$n(this.buffer[0])}`;
      }
      static multiply(t, e) {
        return new ge(new Uint32Array(t.buffer)).times(e);
      }
      static add(t, e) {
        return new ge(new Uint32Array(t.buffer)).plus(e);
      }
      static from(t, e = new Uint32Array(4)) {
        return ge.fromString(typeof t == 'string' ? t : t.toString(), e);
      }
      static fromNumber(t, e = new Uint32Array(4)) {
        return ge.fromString(t.toString(), e);
      }
      static fromString(t, e = new Uint32Array(4)) {
        let n = t.startsWith('-'),
          i = t.length,
          s = new ge(e);
        for (let o = n ? 1 : 0; o < i; ) {
          let a = Yn < i - o ? Yn : i - o,
            c = new ge(
              new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])
            ),
            u = new ge(new Uint32Array([Pa[a], 0, 0, 0]));
          s.times(u), s.plus(c), (o += a);
        }
        return n ? s.negate() : s;
      }
      static convertArray(t) {
        let e = new Uint32Array(t.length * 4);
        for (let n = -1, i = t.length; ++n < i; )
          ge.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * n, 4));
        return e;
      }
    };
  var Di = class extends D {
      constructor(t, e, n, i) {
        super(),
          (this.nodesIndex = -1),
          (this.buffersIndex = -1),
          (this.bytes = t),
          (this.nodes = e),
          (this.buffers = n),
          (this.dictionaries = i);
      }
      visit(t) {
        return super.visit(t instanceof V ? t.type : t);
      }
      visitNull(t, { length: e } = this.nextFieldNode()) {
        return C({ type: t, length: e });
      }
      visitBool(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitInt(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitFloat(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitUtf8(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t),
        });
      }
      visitBinary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          valueOffsets: this.readOffsets(t),
          data: this.readData(t),
        });
      }
      visitFixedSizeBinary(
        t,
        { length: e, nullCount: n } = this.nextFieldNode()
      ) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitDate(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitTimestamp(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitTime(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitDecimal(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitList(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          valueOffsets: this.readOffsets(t),
          child: this.visit(t.children[0]),
        });
      }
      visitStruct(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          children: this.visitMany(t.children),
        });
      }
      visitUnion(t) {
        return t.mode === vt.Sparse
          ? this.visitSparseUnion(t)
          : this.visitDenseUnion(t);
      }
      visitDenseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          typeIds: this.readTypeIds(t),
          valueOffsets: this.readOffsets(t),
          children: this.visitMany(t.children),
        });
      }
      visitSparseUnion(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          typeIds: this.readTypeIds(t),
          children: this.visitMany(t.children),
        });
      }
      visitDictionary(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t.indices),
          dictionary: this.readDictionary(t),
        });
      }
      visitInterval(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          data: this.readData(t),
        });
      }
      visitFixedSizeList(
        t,
        { length: e, nullCount: n } = this.nextFieldNode()
      ) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          child: this.visit(t.children[0]),
        });
      }
      visitMap(t, { length: e, nullCount: n } = this.nextFieldNode()) {
        return C({
          type: t,
          length: e,
          nullCount: n,
          nullBitmap: this.readNullBitmap(t, n),
          valueOffsets: this.readOffsets(t),
          child: this.visit(t.children[0]),
        });
      }
      nextFieldNode() {
        return this.nodes[++this.nodesIndex];
      }
      nextBufferRange() {
        return this.buffers[++this.buffersIndex];
      }
      readNullBitmap(t, e, n = this.nextBufferRange()) {
        return (e > 0 && this.readData(t, n)) || new Uint8Array(0);
      }
      readOffsets(t, e) {
        return this.readData(t, e);
      }
      readTypeIds(t, e) {
        return this.readData(t, e);
      }
      readData(t, { length: e, offset: n } = this.nextBufferRange()) {
        return this.bytes.subarray(n, n + e);
      }
      readDictionary(t) {
        return this.dictionaries.get(t.id);
      }
    },
    oo = class extends Di {
      constructor(t, e, n, i) {
        super(new Uint8Array(0), e, n, i), (this.sources = t);
      }
      readNullBitmap(t, e, { offset: n } = this.nextBufferRange()) {
        return e <= 0 ? new Uint8Array(0) : mn(this.sources[n]);
      }
      readOffsets(t, { offset: e } = this.nextBufferRange()) {
        return $(Uint8Array, $(Int32Array, this.sources[e]));
      }
      readTypeIds(t, { offset: e } = this.nextBufferRange()) {
        return $(Uint8Array, $(t.ArrayType, this.sources[e]));
      }
      readData(t, { offset: e } = this.nextBufferRange()) {
        let { sources: n } = this;
        return B.isTimestamp(t)
          ? $(Uint8Array, Ht.convertArray(n[e]))
          : (B.isInt(t) || B.isTime(t)) && t.bitWidth === 64
          ? $(Uint8Array, Ht.convertArray(n[e]))
          : B.isDate(t) && t.unit === Wt.MILLISECOND
          ? $(Uint8Array, Ht.convertArray(n[e]))
          : B.isDecimal(t)
          ? $(Uint8Array, ge.convertArray(n[e]))
          : B.isBinary(t) || B.isFixedSizeBinary(t)
          ? Em(n[e])
          : B.isBool(t)
          ? mn(n[e])
          : B.isUtf8(t)
          ? Yr(n[e].join(''))
          : $(
              Uint8Array,
              $(
                t.ArrayType,
                n[e].map((i) => +i)
              )
            );
      }
    };
  function Em(r) {
    let t = r.join(''),
      e = new Uint8Array(t.length / 2);
    for (let n = 0; n < t.length; n += 2)
      e[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
    return e;
  }
  var Xn = class extends ur {
    constructor(t) {
      super(t), (this._values = new Zr(new Uint8Array(0)));
    }
    get byteLength() {
      let t = this._pendingLength + this.length * 4;
      return (
        this._offsets && (t += this._offsets.byteLength),
        this._values && (t += this._values.byteLength),
        this._nulls && (t += this._nulls.byteLength),
        t
      );
    }
    setValue(t, e) {
      return super.setValue(t, L(e));
    }
    _flushPending(t, e) {
      let n = this._offsets,
        i = this._values.reserve(e).buffer,
        s = 0;
      for (let [o, a] of t)
        if (a === void 0) n.set(o, 0);
        else {
          let c = a.length;
          i.set(a, s), n.set(o, c), (s += c);
        }
    }
  };
  var ao = class extends bt {
    constructor(t) {
      super(t), (this._values = new zn());
    }
    setValue(t, e) {
      this._values.set(t, +e);
    }
  };
  var wn = class extends Nt {};
  wn.prototype._setValue = va;
  var Ei = class extends wn {};
  Ei.prototype._setValue = Ls;
  var Oi = class extends wn {};
  Oi.prototype._setValue = Ns;
  var Ri = class extends Nt {};
  Ri.prototype._setValue = Fa;
  var co = class extends bt {
    constructor({ type: t, nullValues: e, dictionaryHashFunction: n }) {
      super({ type: new Fe(t.dictionary, t.indices, t.id, t.isOrdered) }),
        (this._nulls = null),
        (this._dictionaryOffset = 0),
        (this._keysToIndices = Object.create(null)),
        (this.indices = vn({ type: this.type.indices, nullValues: e })),
        (this.dictionary = vn({
          type: this.type.dictionary,
          nullValues: null,
        })),
        typeof n == 'function' && (this.valueToKey = n);
    }
    get values() {
      return this.indices.values;
    }
    get nullCount() {
      return this.indices.nullCount;
    }
    get nullBitmap() {
      return this.indices.nullBitmap;
    }
    get byteLength() {
      return this.indices.byteLength + this.dictionary.byteLength;
    }
    get reservedLength() {
      return this.indices.reservedLength + this.dictionary.reservedLength;
    }
    get reservedByteLength() {
      return (
        this.indices.reservedByteLength + this.dictionary.reservedByteLength
      );
    }
    isValid(t) {
      return this.indices.isValid(t);
    }
    setValid(t, e) {
      let n = this.indices;
      return (e = n.setValid(t, e)), (this.length = n.length), e;
    }
    setValue(t, e) {
      let n = this._keysToIndices,
        i = this.valueToKey(e),
        s = n[i];
      return (
        s === void 0 &&
          (n[i] = s =
            this._dictionaryOffset + this.dictionary.append(e).length - 1),
        this.indices.setValue(t, s)
      );
    }
    flush() {
      let t = this.type,
        e = this._dictionary,
        n = this.dictionary.toVector(),
        i = this.indices.flush().clone(t);
      return (
        (i.dictionary = e ? e.concat(n) : n),
        this.finished || (this._dictionaryOffset += n.length),
        (this._dictionary = i.dictionary),
        this.clear(),
        i
      );
    }
    finish() {
      return (
        this.indices.finish(),
        this.dictionary.finish(),
        (this._dictionaryOffset = 0),
        (this._keysToIndices = Object.create(null)),
        super.finish()
      );
    }
    clear() {
      return this.indices.clear(), this.dictionary.clear(), super.clear();
    }
    valueToKey(t) {
      return typeof t == 'string' ? t : `${t}`;
    }
  };
  var Mi = class extends Nt {};
  Mi.prototype._setValue = wa;
  var lo = class extends bt {
    setValue(t, e) {
      let [n] = this.children,
        i = t * this.stride;
      for (let s = -1, o = e.length; ++s < o; ) n.set(i + s, e[s]);
    }
    addChild(t, e = '0') {
      if (this.numChildren > 0)
        throw new Error('FixedSizeListBuilder can only have one child.');
      let n = this.children.push(t);
      return (this.type = new Je(this.type.listSize, new V(e, t.type, !0))), n;
    }
  };
  var Sn = class extends Nt {
      setValue(t, e) {
        this._values.set(t, e);
      }
    },
    uo = class extends Sn {
      setValue(t, e) {
        super.setValue(t, mi(e));
      }
    },
    fo = class extends Sn {},
    ho = class extends Sn {};
  var In = class extends Nt {};
  In.prototype._setValue = Aa;
  var Ui = class extends In {};
  Ui.prototype._setValue = $s;
  var Li = class extends In {};
  Li.prototype._setValue = Ys;
  var ke = class extends Nt {
      setValue(t, e) {
        this._values.set(t, e);
      }
    },
    po = class extends ke {},
    mo = class extends ke {},
    _o = class extends ke {},
    yo = class extends ke {},
    bo = class extends ke {},
    go = class extends ke {},
    wo = class extends ke {},
    vo = class extends ke {};
  var So = class extends ur {
    constructor(t) {
      super(t), (this._offsets = new jn());
    }
    addChild(t, e = '0') {
      if (this.numChildren > 0)
        throw new Error('ListBuilder can only have one child.');
      return (
        (this.children[this.numChildren] = t),
        (this.type = new Ge(new V(e, t.type, !0))),
        this.numChildren - 1
      );
    }
    _flushPending(t) {
      let e = this._offsets,
        [n] = this.children;
      for (let [i, s] of t)
        if (typeof s > 'u') e.set(i, 0);
        else {
          let o = s.length,
            a = e.set(i, o).buffer[i];
          for (let c = -1; ++c < o; ) n.set(a + c, s[c]);
        }
    }
  };
  var Io = class extends ur {
    set(t, e) {
      return super.set(t, e);
    }
    setValue(t, e) {
      let n = e instanceof Map ? e : new Map(Object.entries(e)),
        i = this._pending || (this._pending = new Map()),
        s = i.get(t);
      s && (this._pendingLength -= s.size),
        (this._pendingLength += n.size),
        i.set(t, n);
    }
    addChild(t, e = `${this.numChildren}`) {
      if (this.numChildren > 0)
        throw new Error('ListBuilder can only have one child.');
      return (
        (this.children[this.numChildren] = t),
        (this.type = new qe(new V(e, t.type, !0), this.type.keysSorted)),
        this.numChildren - 1
      );
    }
    _flushPending(t) {
      let e = this._offsets,
        [n] = this.children;
      for (let [i, s] of t)
        if (s === void 0) e.set(i, 0);
        else {
          let { [i]: o, [i + 1]: a } = e.set(i, s.size).buffer;
          for (let c of s.entries()) if ((n.set(o, c), ++o >= a)) break;
        }
    }
  };
  var Fo = class extends bt {
    setValue(t, e) {}
    setValid(t, e) {
      return (this.length = Math.max(t + 1, this.length)), e;
    }
  };
  var Ao = class extends bt {
    setValue(t, e) {
      let { children: n, type: i } = this;
      switch (Array.isArray(e) || e.constructor) {
        case !0:
          return i.children.forEach((s, o) => n[o].set(t, e[o]));
        case Map:
          return i.children.forEach((s, o) => n[o].set(t, e.get(s.name)));
        default:
          return i.children.forEach((s, o) => n[o].set(t, e[s.name]));
      }
    }
    setValid(t, e) {
      return (
        super.setValid(t, e) || this.children.forEach((n) => n.setValid(t, e)),
        e
      );
    }
    addChild(t, e = `${this.numChildren}`) {
      let n = this.children.push(t);
      return (
        (this.type = new ht([...this.type.children, new V(e, t.type, !0)])), n
      );
    }
  };
  var Cr = class extends Nt {};
  Cr.prototype._setValue = Sa;
  var Ni = class extends Cr {};
  Ni.prototype._setValue = ks;
  var ki = class extends Cr {};
  ki.prototype._setValue = Cs;
  var Ci = class extends Cr {};
  Ci.prototype._setValue = Ps;
  var Pi = class extends Cr {};
  Pi.prototype._setValue = Hs;
  var Pr = class extends Nt {};
  Pr.prototype._setValue = Ia;
  var Hi = class extends Pr {};
  Hi.prototype._setValue = Vs;
  var Vi = class extends Pr {};
  Vi.prototype._setValue = zs;
  var zi = class extends Pr {};
  zi.prototype._setValue = js;
  var ji = class extends Pr {};
  ji.prototype._setValue = Ws;
  var Gn = class extends bt {
      constructor(t) {
        super(t),
          (this._typeIds = new Ur(new Int8Array(0), 1)),
          typeof t.valueToChildTypeId == 'function' &&
            (this._valueToChildTypeId = t.valueToChildTypeId);
      }
      get typeIdToChildIndex() {
        return this.type.typeIdToChildIndex;
      }
      append(t, e) {
        return this.set(this.length, t, e);
      }
      set(t, e, n) {
        return (
          n === void 0 && (n = this._valueToChildTypeId(this, e, t)),
          this.setValid(t, this.isValid(e)) && this.setValue(t, e, n),
          this
        );
      }
      setValue(t, e, n) {
        this._typeIds.set(t, n);
        let i = this.type.typeIdToChildIndex[n],
          s = this.children[i];
        s == null || s.set(t, e);
      }
      addChild(t, e = `${this.children.length}`) {
        let n = this.children.push(t),
          {
            type: { children: i, mode: s, typeIds: o },
          } = this,
          a = [...i, new V(e, t.type)];
        return (this.type = new Ke(s, [...o, n], a)), n;
      }
      _valueToChildTypeId(t, e, n) {
        throw new Error(
          'Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.'
        );
      }
    },
    xo = class extends Gn {},
    Bo = class extends Gn {
      constructor(t) {
        super(t), (this._offsets = new Ur(new Int32Array(0)));
      }
      setValue(t, e, n) {
        let i = this._typeIds.set(t, n).buffer[t],
          s = this.getChildAt(this.type.typeIdToChildIndex[i]),
          o = this._offsets.set(t, s.length).buffer[t];
        s == null || s.set(o, e);
      }
    };
  var Wi = class extends ur {
    constructor(t) {
      super(t), (this._values = new Zr(new Uint8Array(0)));
    }
    get byteLength() {
      let t = this._pendingLength + this.length * 4;
      return (
        this._offsets && (t += this._offsets.byteLength),
        this._values && (t += this._values.byteLength),
        this._nulls && (t += this._nulls.byteLength),
        t
      );
    }
    setValue(t, e) {
      return super.setValue(t, Yr(e));
    }
    _flushPending(t, e) {}
  };
  Wi.prototype._flushPending = Xn.prototype._flushPending;
  var Va = class extends D {
      visitNull() {
        return Fo;
      }
      visitBool() {
        return ao;
      }
      visitInt() {
        return ke;
      }
      visitInt8() {
        return po;
      }
      visitInt16() {
        return mo;
      }
      visitInt32() {
        return _o;
      }
      visitInt64() {
        return yo;
      }
      visitUint8() {
        return bo;
      }
      visitUint16() {
        return go;
      }
      visitUint32() {
        return wo;
      }
      visitUint64() {
        return vo;
      }
      visitFloat() {
        return Sn;
      }
      visitFloat16() {
        return uo;
      }
      visitFloat32() {
        return fo;
      }
      visitFloat64() {
        return ho;
      }
      visitUtf8() {
        return Wi;
      }
      visitBinary() {
        return Xn;
      }
      visitFixedSizeBinary() {
        return Mi;
      }
      visitDate() {
        return wn;
      }
      visitDateDay() {
        return Ei;
      }
      visitDateMillisecond() {
        return Oi;
      }
      visitTimestamp() {
        return Cr;
      }
      visitTimestampSecond() {
        return Ni;
      }
      visitTimestampMillisecond() {
        return ki;
      }
      visitTimestampMicrosecond() {
        return Ci;
      }
      visitTimestampNanosecond() {
        return Pi;
      }
      visitTime() {
        return Pr;
      }
      visitTimeSecond() {
        return Hi;
      }
      visitTimeMillisecond() {
        return Vi;
      }
      visitTimeMicrosecond() {
        return zi;
      }
      visitTimeNanosecond() {
        return ji;
      }
      visitDecimal() {
        return Ri;
      }
      visitList() {
        return So;
      }
      visitStruct() {
        return Ao;
      }
      visitUnion() {
        return Gn;
      }
      visitDenseUnion() {
        return Bo;
      }
      visitSparseUnion() {
        return xo;
      }
      visitDictionary() {
        return co;
      }
      visitInterval() {
        return In;
      }
      visitIntervalDayTime() {
        return Ui;
      }
      visitIntervalYearMonth() {
        return Li;
      }
      visitFixedSizeList() {
        return lo;
      }
      visitMap() {
        return Io;
      }
    },
    fu = new Va();
  var U = class extends D {
    compareSchemas(t, e) {
      return (
        t === e ||
        (e instanceof t.constructor &&
          this.compareManyFields(t.fields, e.fields))
      );
    }
    compareManyFields(t, e) {
      return (
        t === e ||
        (Array.isArray(t) &&
          Array.isArray(e) &&
          t.length === e.length &&
          t.every((n, i) => this.compareFields(n, e[i])))
      );
    }
    compareFields(t, e) {
      return (
        t === e ||
        (e instanceof t.constructor &&
          t.name === e.name &&
          t.nullable === e.nullable &&
          this.visit(t.type, e.type))
      );
    }
  };
  function we(r, t) {
    return t instanceof r.constructor;
  }
  function $i(r, t) {
    return r === t || we(r, t);
  }
  function Hr(r, t) {
    return (
      r === t ||
      (we(r, t) && r.bitWidth === t.bitWidth && r.isSigned === t.isSigned)
    );
  }
  function To(r, t) {
    return r === t || (we(r, t) && r.precision === t.precision);
  }
  function Om(r, t) {
    return r === t || (we(r, t) && r.byteWidth === t.byteWidth);
  }
  function za(r, t) {
    return r === t || (we(r, t) && r.unit === t.unit);
  }
  function Yi(r, t) {
    return (
      r === t || (we(r, t) && r.unit === t.unit && r.timezone === t.timezone)
    );
  }
  function Xi(r, t) {
    return (
      r === t || (we(r, t) && r.unit === t.unit && r.bitWidth === t.bitWidth)
    );
  }
  function Rm(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.children.length === t.children.length &&
        wr.compareManyFields(r.children, t.children))
    );
  }
  function Mm(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.children.length === t.children.length &&
        wr.compareManyFields(r.children, t.children))
    );
  }
  function ja(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.mode === t.mode &&
        r.typeIds.every((e, n) => e === t.typeIds[n]) &&
        wr.compareManyFields(r.children, t.children))
    );
  }
  function Um(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.id === t.id &&
        r.isOrdered === t.isOrdered &&
        wr.visit(r.indices, t.indices) &&
        wr.visit(r.dictionary, t.dictionary))
    );
  }
  function Wa(r, t) {
    return r === t || (we(r, t) && r.unit === t.unit);
  }
  function Lm(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.listSize === t.listSize &&
        r.children.length === t.children.length &&
        wr.compareManyFields(r.children, t.children))
    );
  }
  function Nm(r, t) {
    return (
      r === t ||
      (we(r, t) &&
        r.keysSorted === t.keysSorted &&
        r.children.length === t.children.length &&
        wr.compareManyFields(r.children, t.children))
    );
  }
  U.prototype.visitNull = $i;
  U.prototype.visitBool = $i;
  U.prototype.visitInt = Hr;
  U.prototype.visitInt8 = Hr;
  U.prototype.visitInt16 = Hr;
  U.prototype.visitInt32 = Hr;
  U.prototype.visitInt64 = Hr;
  U.prototype.visitUint8 = Hr;
  U.prototype.visitUint16 = Hr;
  U.prototype.visitUint32 = Hr;
  U.prototype.visitUint64 = Hr;
  U.prototype.visitFloat = To;
  U.prototype.visitFloat16 = To;
  U.prototype.visitFloat32 = To;
  U.prototype.visitFloat64 = To;
  U.prototype.visitUtf8 = $i;
  U.prototype.visitBinary = $i;
  U.prototype.visitFixedSizeBinary = Om;
  U.prototype.visitDate = za;
  U.prototype.visitDateDay = za;
  U.prototype.visitDateMillisecond = za;
  U.prototype.visitTimestamp = Yi;
  U.prototype.visitTimestampSecond = Yi;
  U.prototype.visitTimestampMillisecond = Yi;
  U.prototype.visitTimestampMicrosecond = Yi;
  U.prototype.visitTimestampNanosecond = Yi;
  U.prototype.visitTime = Xi;
  U.prototype.visitTimeSecond = Xi;
  U.prototype.visitTimeMillisecond = Xi;
  U.prototype.visitTimeMicrosecond = Xi;
  U.prototype.visitTimeNanosecond = Xi;
  U.prototype.visitDecimal = $i;
  U.prototype.visitList = Rm;
  U.prototype.visitStruct = Mm;
  U.prototype.visitUnion = ja;
  U.prototype.visitDenseUnion = ja;
  U.prototype.visitSparseUnion = ja;
  U.prototype.visitDictionary = Um;
  U.prototype.visitInterval = Wa;
  U.prototype.visitIntervalDayTime = Wa;
  U.prototype.visitIntervalYearMonth = Wa;
  U.prototype.visitFixedSizeList = Lm;
  U.prototype.visitMap = Nm;
  var wr = new U();
  function Fn(r, t) {
    return wr.compareSchemas(r, t);
  }
  function hu(r, t) {
    return wr.compareFields(r, t);
  }
  function pu(r, t) {
    return wr.visit(r, t);
  }
  function vn(r) {
    let t = r.type,
      e = new (fu.getVisitFn(t)())(r);
    if (t.children && t.children.length > 0) {
      let n = r.children || [],
        i = { nullValues: r.nullValues },
        s = Array.isArray(n) ? (o, a) => n[a] || i : ({ name: o }) => n[o] || i;
      for (let [o, a] of t.children.entries()) {
        let { type: c } = a,
          u = s(a, o);
        e.children.push(vn(Object.assign(Object.assign({}, u), { type: c })));
      }
    }
    return e;
  }
  function Do(r, t) {
    return km(
      r,
      t.map((e) => e.data.concat())
    );
  }
  function km(r, t) {
    let e = [...r.fields],
      n = [],
      i = { numBatches: t.reduce((b, _) => Math.max(b, _.length), 0) },
      s = 0,
      o = 0,
      a = -1,
      c = t.length,
      u,
      p = [];
    for (; i.numBatches-- > 0; ) {
      for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
        (p[a] = u = t[a].shift()), (o = Math.min(o, u ? u.length : o));
      Number.isFinite(o) &&
        ((p = Cm(e, o, p, t, i)),
        o > 0 &&
          (n[s++] = C({
            type: new ht(e),
            length: o,
            nullCount: 0,
            children: p.slice(),
          })));
    }
    return [(r = r.assign(e)), n.map((b) => new ft(r, b))];
  }
  function Cm(r, t, e, n, i) {
    var s;
    let o = ((t + 63) & -64) >> 3;
    for (let a = -1, c = n.length; ++a < c; ) {
      let u = e[a],
        p = u == null ? void 0 : u.length;
      if (p >= t)
        p === t
          ? (e[a] = u)
          : ((e[a] = u.slice(0, t)),
            (i.numBatches = Math.max(
              i.numBatches,
              n[a].unshift(u.slice(t, p - t))
            )));
      else {
        let b = r[a];
        (r[a] = b.clone({ nullable: !0 })),
          (e[a] =
            (s =
              u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(t)) !==
              null && s !== void 0
              ? s
              : C({
                  type: b.type,
                  length: t,
                  nullCount: t,
                  nullBitmap: new Uint8Array(o),
                }));
      }
    }
    return e;
  }
  var mu,
    At = class {
      constructor(...t) {
        var e, n;
        if (t.length === 0)
          return (
            (this.batches = []),
            (this.schema = new G([])),
            (this._offsets = [0]),
            this
          );
        let i, s;
        t[0] instanceof G && (i = t.shift()),
          t[t.length - 1] instanceof Uint32Array && (s = t.pop());
        let o = (c) => {
            if (c) {
              if (c instanceof ft) return [c];
              if (c instanceof At) return c.batches;
              if (c instanceof nt) {
                if (c.type instanceof ht)
                  return [new ft(new G(c.type.children), c)];
              } else {
                if (Array.isArray(c)) return c.flatMap((u) => o(u));
                if (typeof c[Symbol.iterator] == 'function')
                  return [...c].flatMap((u) => o(u));
                if (typeof c == 'object') {
                  let u = Object.keys(c),
                    p = u.map((S) => new k([c[S]])),
                    b = new G(u.map((S, J) => new V(String(S), p[J].type))),
                    [, _] = Do(b, p);
                  return _.length === 0 ? [new ft(c)] : _;
                }
              }
            }
            return [];
          },
          a = t.flatMap((c) => o(c));
        if (
          ((i =
            (n =
              i != null
                ? i
                : (e = a[0]) === null || e === void 0
                ? void 0
                : e.schema) !== null && n !== void 0
              ? n
              : new G([])),
          !(i instanceof G))
        )
          throw new TypeError(
            'Table constructor expects a [Schema, RecordBatch[]] pair.'
          );
        for (let c of a) {
          if (!(c instanceof ft))
            throw new TypeError(
              'Table constructor expects a [Schema, RecordBatch[]] pair.'
            );
          if (!Fn(i, c.schema))
            throw new TypeError(
              'Table and inner RecordBatch schemas must be equivalent.'
            );
        }
        (this.schema = i),
          (this.batches = a),
          (this._offsets = s != null ? s : qs(this.data));
      }
      get data() {
        return this.batches.map(({ data: t }) => t);
      }
      get numCols() {
        return this.schema.fields.length;
      }
      get numRows() {
        return this.data.reduce((t, e) => t + e.length, 0);
      }
      get nullCount() {
        return (
          this._nullCount === -1 && (this._nullCount = Js(this.data)),
          this._nullCount
        );
      }
      isValid(t) {
        return !1;
      }
      get(t) {
        return null;
      }
      set(t, e) {}
      indexOf(t, e) {
        return -1;
      }
      getByteLength(t) {
        return 0;
      }
      [Symbol.iterator]() {
        return this.batches.length > 0
          ? Hn.visit(new k(this.data))
          : new Array(0)[Symbol.iterator]();
      }
      toArray() {
        return [...this];
      }
      toString() {
        return `[
  ${this.toArray().join(`,
  `)}
]`;
      }
      concat(...t) {
        let e = this.schema,
          n = this.data.concat(t.flatMap(({ data: i }) => i));
        return new At(
          e,
          n.map((i) => new ft(e, i))
        );
      }
      slice(t, e) {
        let n = this.schema;
        [t, e] = _i({ length: this.numRows }, t, e);
        let i = Zs(this.data, this._offsets, t, e);
        return new At(
          n,
          i.map((s) => new ft(n, s))
        );
      }
      getChild(t) {
        return this.getChildAt(
          this.schema.fields.findIndex((e) => e.name === t)
        );
      }
      getChildAt(t) {
        if (t > -1 && t < this.schema.fields.length) {
          let e = this.data.map((n) => n.children[t]);
          if (e.length === 0) {
            let { type: n } = this.schema.fields[t],
              i = C({ type: n, length: 0, nullCount: 0 });
            e.push(i._changeLengthAndBackfillNullBitmap(this.numRows));
          }
          return new k(e);
        }
        return null;
      }
      setChild(t, e) {
        var n;
        return this.setChildAt(
          (n = this.schema.fields) === null || n === void 0
            ? void 0
            : n.findIndex((i) => i.name === t),
          e
        );
      }
      setChildAt(t, e) {
        let n = this.schema,
          i = [...this.batches];
        if (t > -1 && t < this.numCols) {
          e || (e = new k([C({ type: new ie(), length: this.numRows })]));
          let s = n.fields.slice(),
            o = s[t].clone({ type: e.type }),
            a = this.schema.fields.map((c, u) => this.getChildAt(u));
          ([s[t], a[t]] = [o, e]), ([n, i] = Do(n, a));
        }
        return new At(n, i);
      }
      select(t) {
        let e = this.schema.fields.reduce(
          (n, i, s) => n.set(i.name, s),
          new Map()
        );
        return this.selectAt(t.map((n) => e.get(n)).filter((n) => n > -1));
      }
      selectAt(t) {
        let e = this.schema.selectAt(t),
          n = this.batches.map((i) => i.selectAt(t));
        return new At(e, n);
      }
      assign(t) {
        let e = this.schema.fields,
          [n, i] = t.schema.fields.reduce(
            (a, c, u) => {
              let [p, b] = a,
                _ = e.findIndex((S) => S.name === c.name);
              return ~_ ? (b[_] = u) : p.push(u), a;
            },
            [[], []]
          ),
          s = this.schema.assign(t.schema),
          o = [
            ...e
              .map((a, c) => [c, i[c]])
              .map(([a, c]) =>
                c === void 0 ? this.getChildAt(a) : t.getChildAt(c)
              ),
            ...n.map((a) => t.getChildAt(a)),
          ].filter(Boolean);
        return new At(...Do(s, o));
      }
    };
  mu = Symbol.toStringTag;
  At[mu] = ((r) => (
    (r.schema = null),
    (r.batches = []),
    (r._offsets = new Uint32Array([0])),
    (r._nullCount = -1),
    (r[Symbol.isConcatSpreadable] = !0),
    (r.isValid = qr(gi)),
    (r.get = qr(Dt.getVisitFn(f.Struct))),
    (r.set = Qs($t.getVisitFn(f.Struct))),
    (r.indexOf = to(yn.getVisitFn(f.Struct))),
    (r.getByteLength = qr(xe.getVisitFn(f.Struct))),
    'Table'
  ))(At.prototype);
  var yu,
    ft = class {
      constructor(...t) {
        switch (t.length) {
          case 2: {
            if ((([this.schema] = t), !(this.schema instanceof G)))
              throw new TypeError(
                'RecordBatch constructor expects a [Schema, Data] pair.'
              );
            if (
              (([
                ,
                this.data = C({
                  nullCount: 0,
                  type: new ht(this.schema.fields),
                  children: this.schema.fields.map((e) =>
                    C({ type: e.type, nullCount: 0 })
                  ),
                }),
              ] = t),
              !(this.data instanceof nt))
            )
              throw new TypeError(
                'RecordBatch constructor expects a [Schema, Data] pair.'
              );
            [this.schema, this.data] = _u(this.schema, this.data.children);
            break;
          }
          case 1: {
            let [e] = t,
              {
                fields: n,
                children: i,
                length: s,
              } = Object.keys(e).reduce(
                (c, u, p) => (
                  (c.children[p] = e[u]),
                  (c.length = Math.max(c.length, e[u].length)),
                  (c.fields[p] = V.new({
                    name: u,
                    type: e[u].type,
                    nullable: !0,
                  })),
                  c
                ),
                { length: 0, fields: new Array(), children: new Array() }
              ),
              o = new G(n),
              a = C({ type: new ht(n), length: s, children: i, nullCount: 0 });
            [this.schema, this.data] = _u(o, a.children, s);
            break;
          }
          default:
            throw new TypeError(
              'RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.'
            );
        }
      }
      get dictionaries() {
        return (
          this._dictionaries ||
          (this._dictionaries = bu(this.schema.fields, this.data.children))
        );
      }
      get numCols() {
        return this.schema.fields.length;
      }
      get numRows() {
        return this.data.length;
      }
      get nullCount() {
        return this.data.nullCount;
      }
      isValid(t) {
        return this.data.getValid(t);
      }
      get(t) {
        return Dt.visit(this.data, t);
      }
      set(t, e) {
        return $t.visit(this.data, t, e);
      }
      indexOf(t, e) {
        return yn.visit(this.data, t, e);
      }
      getByteLength(t) {
        return xe.visit(this.data, t);
      }
      [Symbol.iterator]() {
        return Hn.visit(new k([this.data]));
      }
      toArray() {
        return [...this];
      }
      concat(...t) {
        return new At(this.schema, [this, ...t]);
      }
      slice(t, e) {
        let [n] = new k([this.data]).slice(t, e).data;
        return new ft(this.schema, n);
      }
      getChild(t) {
        var e;
        return this.getChildAt(
          (e = this.schema.fields) === null || e === void 0
            ? void 0
            : e.findIndex((n) => n.name === t)
        );
      }
      getChildAt(t) {
        return t > -1 && t < this.schema.fields.length
          ? new k([this.data.children[t]])
          : null;
      }
      setChild(t, e) {
        var n;
        return this.setChildAt(
          (n = this.schema.fields) === null || n === void 0
            ? void 0
            : n.findIndex((i) => i.name === t),
          e
        );
      }
      setChildAt(t, e) {
        let n = this.schema,
          i = this.data;
        if (t > -1 && t < this.numCols) {
          e || (e = new k([C({ type: new ie(), length: this.numRows })]));
          let s = n.fields.slice(),
            o = i.children.slice(),
            a = s[t].clone({ type: e.type });
          ([s[t], o[t]] = [a, e.data[0]]),
            (n = new G(s, new Map(this.schema.metadata))),
            (i = C({ type: new ht(s), children: o }));
        }
        return new ft(n, i);
      }
      select(t) {
        let e = this.schema.select(t),
          n = new ht(e.fields),
          i = [];
        for (let s of t) {
          let o = this.schema.fields.findIndex((a) => a.name === s);
          ~o && (i[o] = this.data.children[o]);
        }
        return new ft(e, C({ type: n, length: this.numRows, children: i }));
      }
      selectAt(t) {
        let e = this.schema.selectAt(t),
          n = t.map((s) => this.data.children[s]).filter(Boolean),
          i = C({ type: new ht(e.fields), length: this.numRows, children: n });
        return new ft(e, i);
      }
    };
  yu = Symbol.toStringTag;
  ft[yu] = ((r) => (
    (r._nullCount = -1), (r[Symbol.isConcatSpreadable] = !0), 'RecordBatch'
  ))(ft.prototype);
  function _u(r, t, e = t.reduce((n, i) => Math.max(n, i.length), 0)) {
    var n;
    let i = [...r.fields],
      s = [...t],
      o = ((e + 63) & -64) >> 3;
    for (let [a, c] of r.fields.entries()) {
      let u = t[a];
      (!u || u.length !== e) &&
        ((i[a] = c.clone({ nullable: !0 })),
        (s[a] =
          (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(e)) !==
            null && n !== void 0
            ? n
            : C({
                type: c.type,
                length: e,
                nullCount: e,
                nullBitmap: new Uint8Array(o),
              })));
    }
    return [r.assign(i), C({ type: new ht(i), length: e, children: s })];
  }
  function bu(r, t, e = new Map()) {
    for (let n = -1, i = r.length; ++n < i; ) {
      let o = r[n].type,
        a = t[n];
      if (B.isDictionary(o)) {
        if (!e.has(o.id)) a.dictionary && e.set(o.id, a.dictionary);
        else if (e.get(o.id) !== a.dictionary)
          throw new Error(
            'Cannot create Schema containing two different dictionaries with the same Id'
          );
      }
      o.children && o.children.length > 0 && bu(o.children, a.children, e);
    }
    return e;
  }
  var An = class extends ft {
    constructor(t) {
      let e = t.fields.map((i) => C({ type: i.type })),
        n = C({ type: new ht(t.fields), nullCount: 0, children: e });
      super(t, n);
    }
  };
  var Gi;
  (function (r) {
    r[(r.BUFFER = 0)] = 'BUFFER';
  })(Gi || (Gi = {}));
  var Ki;
  (function (r) {
    (r[(r.LZ4_FRAME = 0)] = 'LZ4_FRAME'), (r[(r.ZSTD = 1)] = 'ZSTD');
  })(Ki || (Ki = {}));
  var er = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsBodyCompression(t, e) {
      return (e || new er()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsBodyCompression(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new er()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    codec() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt8(this.bb_pos + t) : Ki.LZ4_FRAME;
    }
    method() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.readInt8(this.bb_pos + t) : Gi.BUFFER;
    }
    static startBodyCompression(t) {
      t.startObject(2);
    }
    static addCodec(t, e) {
      t.addFieldInt8(0, e, Ki.LZ4_FRAME);
    }
    static addMethod(t, e) {
      t.addFieldInt8(1, e, Gi.BUFFER);
    }
    static endBodyCompression(t) {
      return t.endObject();
    }
    static createBodyCompression(t, e, n) {
      return (
        er.startBodyCompression(t),
        er.addCodec(t, e),
        er.addMethod(t, n),
        er.endBodyCompression(t)
      );
    }
  };
  var Kn = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    offset() {
      return this.bb.readInt64(this.bb_pos);
    }
    length() {
      return this.bb.readInt64(this.bb_pos + 8);
    }
    static sizeOf() {
      return 16;
    }
    static createBuffer(t, e, n) {
      return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset();
    }
  };
  var Jn = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    length() {
      return this.bb.readInt64(this.bb_pos);
    }
    nullCount() {
      return this.bb.readInt64(this.bb_pos + 8);
    }
    static sizeOf() {
      return 16;
    }
    static createFieldNode(t, e, n) {
      return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset();
    }
  };
  var qt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsRecordBatch(t, e) {
      return (e || new qt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsRecordBatch(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    length() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
    }
    nodes(t, e) {
      let n = this.bb.__offset(this.bb_pos, 6);
      return n
        ? (e || new Jn()).__init(
            this.bb.__vector(this.bb_pos + n) + t * 16,
            this.bb
          )
        : null;
    }
    nodesLength() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    buffers(t, e) {
      let n = this.bb.__offset(this.bb_pos, 8);
      return n
        ? (e || new Kn()).__init(
            this.bb.__vector(this.bb_pos + n) + t * 16,
            this.bb
          )
        : null;
    }
    buffersLength() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    compression(t) {
      let e = this.bb.__offset(this.bb_pos, 10);
      return e
        ? (t || new er()).__init(this.bb.__indirect(this.bb_pos + e), this.bb)
        : null;
    }
    static startRecordBatch(t) {
      t.startObject(4);
    }
    static addLength(t, e) {
      t.addFieldInt64(0, e, t.createLong(0, 0));
    }
    static addNodes(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static startNodesVector(t, e) {
      t.startVector(16, e, 8);
    }
    static addBuffers(t, e) {
      t.addFieldOffset(2, e, 0);
    }
    static startBuffersVector(t, e) {
      t.startVector(16, e, 8);
    }
    static addCompression(t, e) {
      t.addFieldOffset(3, e, 0);
    }
    static endRecordBatch(t) {
      return t.endObject();
    }
  };
  var Ce = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsDictionaryBatch(t, e) {
      return (e || new Ce()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsDictionaryBatch(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Ce()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    id() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
    }
    data(t) {
      let e = this.bb.__offset(this.bb_pos, 6);
      return e
        ? (t || new qt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb)
        : null;
    }
    isDelta() {
      let t = this.bb.__offset(this.bb_pos, 8);
      return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
    }
    static startDictionaryBatch(t) {
      t.startObject(3);
    }
    static addId(t, e) {
      t.addFieldInt64(0, e, t.createLong(0, 0));
    }
    static addData(t, e) {
      t.addFieldOffset(1, e, 0);
    }
    static addIsDelta(t, e) {
      t.addFieldInt8(2, +e, 0);
    }
    static endDictionaryBatch(t) {
      return t.endObject();
    }
  };
  var qn;
  (function (r) {
    (r[(r.NONE = 0)] = 'NONE'),
      (r[(r.Schema = 1)] = 'Schema'),
      (r[(r.DictionaryBatch = 2)] = 'DictionaryBatch'),
      (r[(r.RecordBatch = 3)] = 'RecordBatch'),
      (r[(r.Tensor = 4)] = 'Tensor'),
      (r[(r.SparseTensor = 5)] = 'SparseTensor');
  })(qn || (qn = {}));
  var Bt = class {
    constructor() {
      (this.bb = null), (this.bb_pos = 0);
    }
    __init(t, e) {
      return (this.bb_pos = t), (this.bb = e), this;
    }
    static getRootAsMessage(t, e) {
      return (e || new Bt()).__init(
        t.readInt32(t.position()) + t.position(),
        t
      );
    }
    static getSizePrefixedRootAsMessage(t, e) {
      return (
        t.setPosition(t.position() + 4),
        (e || new Bt()).__init(t.readInt32(t.position()) + t.position(), t)
      );
    }
    version() {
      let t = this.bb.__offset(this.bb_pos, 4);
      return t ? this.bb.readInt16(this.bb_pos + t) : Qr.V1;
    }
    headerType() {
      let t = this.bb.__offset(this.bb_pos, 6);
      return t ? this.bb.readUint8(this.bb_pos + t) : qn.NONE;
    }
    header(t) {
      let e = this.bb.__offset(this.bb_pos, 8);
      return e ? this.bb.__union(t, this.bb_pos + e) : null;
    }
    bodyLength() {
      let t = this.bb.__offset(this.bb_pos, 10);
      return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
    }
    customMetadata(t, e) {
      let n = this.bb.__offset(this.bb_pos, 12);
      return n
        ? (e || new pt()).__init(
            this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4),
            this.bb
          )
        : null;
    }
    customMetadataLength() {
      let t = this.bb.__offset(this.bb_pos, 12);
      return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
    }
    static startMessage(t) {
      t.startObject(5);
    }
    static addVersion(t, e) {
      t.addFieldInt16(0, e, Qr.V1);
    }
    static addHeaderType(t, e) {
      t.addFieldInt8(1, e, qn.NONE);
    }
    static addHeader(t, e) {
      t.addFieldOffset(2, e, 0);
    }
    static addBodyLength(t, e) {
      t.addFieldInt64(3, e, t.createLong(0, 0));
    }
    static addCustomMetadata(t, e) {
      t.addFieldOffset(4, e, 0);
    }
    static createCustomMetadataVector(t, e) {
      t.startVector(4, e.length, 4);
      for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
      return t.endVector();
    }
    static startCustomMetadataVector(t, e) {
      t.startVector(4, e, 4);
    }
    static endMessage(t) {
      return t.endObject();
    }
    static finishMessageBuffer(t, e) {
      t.finish(e);
    }
    static finishSizePrefixedMessageBuffer(t, e) {
      t.finish(e, void 0, !0);
    }
    static createMessage(t, e, n, i, s, o) {
      return (
        Bt.startMessage(t),
        Bt.addVersion(t, e),
        Bt.addHeaderType(t, n),
        Bt.addHeader(t, i),
        Bt.addBodyLength(t, s),
        Bt.addCustomMetadata(t, o),
        Bt.endMessage(t)
      );
    }
  };
  var Hm = Et,
    $a = class extends D {
      visit(t, e) {
        return t == null || e == null ? void 0 : super.visit(t, e);
      }
      visitNull(t, e) {
        return mr.startNull(e), mr.endNull(e);
      }
      visitInt(t, e) {
        return (
          kt.startInt(e),
          kt.addBitWidth(e, t.bitWidth),
          kt.addIsSigned(e, t.isSigned),
          kt.endInt(e)
        );
      }
      visitFloat(t, e) {
        return (
          me.startFloatingPoint(e),
          me.addPrecision(e, t.precision),
          me.endFloatingPoint(e)
        );
      }
      visitBinary(t, e) {
        return fr.startBinary(e), fr.endBinary(e);
      }
      visitBool(t, e) {
        return hr.startBool(e), hr.endBool(e);
      }
      visitUtf8(t, e) {
        return yr.startUtf8(e), yr.endUtf8(e);
      }
      visitDecimal(t, e) {
        return (
          Ct.startDecimal(e),
          Ct.addScale(e, t.scale),
          Ct.addPrecision(e, t.precision),
          Ct.addBitWidth(e, t.bitWidth),
          Ct.endDecimal(e)
        );
      }
      visitDate(t, e) {
        return fe.startDate(e), fe.addUnit(e, t.unit), fe.endDate(e);
      }
      visitTime(t, e) {
        return (
          Gt.startTime(e),
          Gt.addUnit(e, t.unit),
          Gt.addBitWidth(e, t.bitWidth),
          Gt.endTime(e)
        );
      }
      visitTimestamp(t, e) {
        let n = (t.timezone && e.createString(t.timezone)) || void 0;
        return (
          Kt.startTimestamp(e),
          Kt.addUnit(e, t.unit),
          n !== void 0 && Kt.addTimezone(e, n),
          Kt.endTimestamp(e)
        );
      }
      visitInterval(t, e) {
        return _e.startInterval(e), _e.addUnit(e, t.unit), _e.endInterval(e);
      }
      visitList(t, e) {
        return pr.startList(e), pr.endList(e);
      }
      visitStruct(t, e) {
        return _r.startStruct_(e), _r.endStruct_(e);
      }
      visitUnion(t, e) {
        Pt.startTypeIdsVector(e, t.typeIds.length);
        let n = Pt.createTypeIdsVector(e, t.typeIds);
        return (
          Pt.startUnion(e),
          Pt.addMode(e, t.mode),
          Pt.addTypeIds(e, n),
          Pt.endUnion(e)
        );
      }
      visitDictionary(t, e) {
        let n = this.visit(t.indices, e);
        return (
          Be.startDictionaryEncoding(e),
          Be.addId(e, new Hm(t.id, 0)),
          Be.addIsOrdered(e, t.isOrdered),
          n !== void 0 && Be.addIndexType(e, n),
          Be.endDictionaryEncoding(e)
        );
      }
      visitFixedSizeBinary(t, e) {
        return (
          he.startFixedSizeBinary(e),
          he.addByteWidth(e, t.byteWidth),
          he.endFixedSizeBinary(e)
        );
      }
      visitFixedSizeList(t, e) {
        return (
          pe.startFixedSizeList(e),
          pe.addListSize(e, t.listSize),
          pe.endFixedSizeList(e)
        );
      }
      visitMap(t, e) {
        return ye.startMap(e), ye.addKeysSorted(e, t.keysSorted), ye.endMap(e);
      }
    },
    Eo = new $a();
  function Su(r, t = new Map()) {
    return new G(Vm(r, t), Oo(r.customMetadata), t);
  }
  function Ya(r) {
    return new Yt(r.count, Fu(r.columns), Au(r.columns));
  }
  function Iu(r) {
    return new Se(Ya(r.data), r.id, r.isDelta);
  }
  function Vm(r, t) {
    return (r.fields || []).filter(Boolean).map((e) => V.fromJSON(e, t));
  }
  function gu(r, t) {
    return (r.children || []).filter(Boolean).map((e) => V.fromJSON(e, t));
  }
  function Fu(r) {
    return (r || []).reduce(
      (t, e) => [...t, new rr(e.count, zm(e.VALIDITY)), ...Fu(e.children)],
      []
    );
  }
  function Au(r, t = []) {
    for (let e = -1, n = (r || []).length; ++e < n; ) {
      let i = r[e];
      i.VALIDITY && t.push(new ve(t.length, i.VALIDITY.length)),
        i.TYPE && t.push(new ve(t.length, i.TYPE.length)),
        i.OFFSET && t.push(new ve(t.length, i.OFFSET.length)),
        i.DATA && t.push(new ve(t.length, i.DATA.length)),
        (t = Au(i.children, t));
    }
    return t;
  }
  function zm(r) {
    return (r || []).reduce((t, e) => t + +(e === 0), 0);
  }
  function xu(r, t) {
    let e, n, i, s, o, a;
    return (
      !t || !(s = r.dictionary)
        ? ((o = vu(r, gu(r, t))),
          (i = new V(r.name, o, r.nullable, Oo(r.customMetadata))))
        : t.has((e = s.id))
        ? ((n = (n = s.indexType) ? wu(n) : new ar()),
          (a = new Fe(t.get(e), n, e, s.isOrdered)),
          (i = new V(r.name, a, r.nullable, Oo(r.customMetadata))))
        : ((n = (n = s.indexType) ? wu(n) : new ar()),
          t.set(e, (o = vu(r, gu(r, t)))),
          (a = new Fe(o, n, e, s.isOrdered)),
          (i = new V(r.name, a, r.nullable, Oo(r.customMetadata)))),
      i || null
    );
  }
  function Oo(r) {
    return new Map(Object.entries(r || {}));
  }
  function wu(r) {
    return new xt(r.isSigned, r.bitWidth);
  }
  function vu(r, t) {
    let e = r.type.name;
    switch (e) {
      case 'NONE':
        return new ie();
      case 'null':
        return new ie();
      case 'binary':
        return new Ar();
      case 'utf8':
        return new xr();
      case 'bool':
        return new Br();
      case 'list':
        return new Ge((t || [])[0]);
      case 'struct':
        return new ht(t || []);
      case 'struct_':
        return new ht(t || []);
    }
    switch (e) {
      case 'int': {
        let n = r.type;
        return new xt(n.isSigned, n.bitWidth);
      }
      case 'floatingpoint': {
        let n = r.type;
        return new de(yt[n.precision]);
      }
      case 'decimal': {
        let n = r.type;
        return new Tr(n.scale, n.precision, n.bitWidth);
      }
      case 'date': {
        let n = r.type;
        return new Dr(Wt[n.unit]);
      }
      case 'time': {
        let n = r.type;
        return new Xe(X[n.unit], n.bitWidth);
      }
      case 'timestamp': {
        let n = r.type;
        return new Er(X[n.unit], n.timezone);
      }
      case 'interval': {
        let n = r.type;
        return new Or(ne[n.unit]);
      }
      case 'union': {
        let n = r.type;
        return new Ke(vt[n.mode], n.typeIds || [], t || []);
      }
      case 'fixedsizebinary': {
        let n = r.type;
        return new Rr(n.byteWidth);
      }
      case 'fixedsizelist': {
        let n = r.type;
        return new Je(n.listSize, (t || [])[0]);
      }
      case 'map': {
        let n = r.type;
        return new qe((t || [])[0], n.keysSorted);
      }
    }
    throw new Error(`Unrecognized type: "${e}"`);
  }
  var xn = Et,
    jm = Lr,
    Wm = se,
    Rt = class {
      constructor(t, e, n, i) {
        (this._version = e),
          (this._headerType = n),
          (this.body = new Uint8Array(0)),
          i && (this._createHeader = () => i),
          (this._bodyLength = typeof t == 'number' ? t : t.low);
      }
      static fromJSON(t, e) {
        let n = new Rt(0, Lt.V4, e);
        return (n._createHeader = $m(t, e)), n;
      }
      static decode(t) {
        t = new Wm(L(t));
        let e = Bt.getRootAsMessage(t),
          n = e.bodyLength(),
          i = e.version(),
          s = e.headerType(),
          o = new Rt(n, i, s);
        return (o._createHeader = Ym(e, s)), o;
      }
      static encode(t) {
        let e = new jm(),
          n = -1;
        return (
          t.isSchema()
            ? (n = G.encode(e, t.header()))
            : t.isRecordBatch()
            ? (n = Yt.encode(e, t.header()))
            : t.isDictionaryBatch() && (n = Se.encode(e, t.header())),
          Bt.startMessage(e),
          Bt.addVersion(e, Lt.V4),
          Bt.addHeader(e, n),
          Bt.addHeaderType(e, t.headerType),
          Bt.addBodyLength(e, new xn(t.bodyLength, 0)),
          Bt.finishMessageBuffer(e, Bt.endMessage(e)),
          e.asUint8Array()
        );
      }
      static from(t, e = 0) {
        if (t instanceof G) return new Rt(0, Lt.V4, tt.Schema, t);
        if (t instanceof Yt) return new Rt(e, Lt.V4, tt.RecordBatch, t);
        if (t instanceof Se) return new Rt(e, Lt.V4, tt.DictionaryBatch, t);
        throw new Error(`Unrecognized Message header: ${t}`);
      }
      get type() {
        return this.headerType;
      }
      get version() {
        return this._version;
      }
      get headerType() {
        return this._headerType;
      }
      get bodyLength() {
        return this._bodyLength;
      }
      header() {
        return this._createHeader();
      }
      isSchema() {
        return this.headerType === tt.Schema;
      }
      isRecordBatch() {
        return this.headerType === tt.RecordBatch;
      }
      isDictionaryBatch() {
        return this.headerType === tt.DictionaryBatch;
      }
    },
    Yt = class {
      constructor(t, e, n) {
        (this._nodes = e),
          (this._buffers = n),
          (this._length = typeof t == 'number' ? t : t.low);
      }
      get nodes() {
        return this._nodes;
      }
      get length() {
        return this._length;
      }
      get buffers() {
        return this._buffers;
      }
    },
    Se = class {
      constructor(t, e, n = !1) {
        (this._data = t),
          (this._isDelta = n),
          (this._id = typeof e == 'number' ? e : e.low);
      }
      get id() {
        return this._id;
      }
      get data() {
        return this._data;
      }
      get isDelta() {
        return this._isDelta;
      }
      get length() {
        return this.data.length;
      }
      get nodes() {
        return this.data.nodes;
      }
      get buffers() {
        return this.data.buffers;
      }
    },
    ve = class {
      constructor(t, e) {
        (this.offset = typeof t == 'number' ? t : t.low),
          (this.length = typeof e == 'number' ? e : e.low);
      }
    },
    rr = class {
      constructor(t, e) {
        (this.length = typeof t == 'number' ? t : t.low),
          (this.nullCount = typeof e == 'number' ? e : e.low);
      }
    };
  function $m(r, t) {
    return () => {
      switch (t) {
        case tt.Schema:
          return G.fromJSON(r);
        case tt.RecordBatch:
          return Yt.fromJSON(r);
        case tt.DictionaryBatch:
          return Se.fromJSON(r);
      }
      throw new Error(
        `Unrecognized Message type: { name: ${tt[t]}, type: ${t} }`
      );
    };
  }
  function Ym(r, t) {
    return () => {
      switch (t) {
        case tt.Schema:
          return G.decode(r.header(new St()));
        case tt.RecordBatch:
          return Yt.decode(r.header(new qt()), r.version());
        case tt.DictionaryBatch:
          return Se.decode(r.header(new Ce()), r.version());
      }
      throw new Error(
        `Unrecognized Message type: { name: ${tt[t]}, type: ${t} }`
      );
    };
  }
  V.encode = n_;
  V.decode = e_;
  V.fromJSON = xu;
  G.encode = r_;
  G.decode = Xm;
  G.fromJSON = Su;
  Yt.encode = i_;
  Yt.decode = Gm;
  Yt.fromJSON = Ya;
  Se.encode = s_;
  Se.decode = Km;
  Se.fromJSON = Iu;
  rr.encode = o_;
  rr.decode = qm;
  ve.encode = a_;
  ve.decode = Jm;
  function Xm(r, t = new Map()) {
    let e = t_(r, t);
    return new G(e, Ro(r), t);
  }
  function Gm(r, t = Lt.V4) {
    if (r.compression() !== null)
      throw new Error('Record batch compression not implemented');
    return new Yt(r.length(), Zm(r), Qm(r, t));
  }
  function Km(r, t = Lt.V4) {
    return new Se(Yt.decode(r.data(), t), r.id(), r.isDelta());
  }
  function Jm(r) {
    return new ve(r.offset(), r.length());
  }
  function qm(r) {
    return new rr(r.length(), r.nullCount());
  }
  function Zm(r) {
    let t = [];
    for (let e, n = -1, i = -1, s = r.nodesLength(); ++n < s; )
      (e = r.nodes(n)) && (t[++i] = rr.decode(e));
    return t;
  }
  function Qm(r, t) {
    let e = [];
    for (let n, i = -1, s = -1, o = r.buffersLength(); ++i < o; )
      (n = r.buffers(i)) &&
        (t < Lt.V4 && (n.bb_pos += 8 * (i + 1)), (e[++s] = ve.decode(n)));
    return e;
  }
  function t_(r, t) {
    let e = [];
    for (let n, i = -1, s = -1, o = r.fieldsLength(); ++i < o; )
      (n = r.fields(i)) && (e[++s] = V.decode(n, t));
    return e;
  }
  function Bu(r, t) {
    let e = [];
    for (let n, i = -1, s = -1, o = r.childrenLength(); ++i < o; )
      (n = r.children(i)) && (e[++s] = V.decode(n, t));
    return e;
  }
  function e_(r, t) {
    let e, n, i, s, o, a;
    return (
      !t || !(a = r.dictionary())
        ? ((i = Du(r, Bu(r, t))), (n = new V(r.name(), i, r.nullable(), Ro(r))))
        : t.has((e = a.id().low))
        ? ((s = (s = a.indexType()) ? Tu(s) : new ar()),
          (o = new Fe(t.get(e), s, e, a.isOrdered())),
          (n = new V(r.name(), o, r.nullable(), Ro(r))))
        : ((s = (s = a.indexType()) ? Tu(s) : new ar()),
          t.set(e, (i = Du(r, Bu(r, t)))),
          (o = new Fe(i, s, e, a.isOrdered())),
          (n = new V(r.name(), o, r.nullable(), Ro(r)))),
      n || null
    );
  }
  function Ro(r) {
    let t = new Map();
    if (r)
      for (
        let e, n, i = -1, s = Math.trunc(r.customMetadataLength());
        ++i < s;

      )
        (e = r.customMetadata(i)) &&
          (n = e.key()) != null &&
          t.set(n, e.value());
    return t;
  }
  function Tu(r) {
    return new xt(r.isSigned(), r.bitWidth());
  }
  function Du(r, t) {
    let e = r.typeType();
    switch (e) {
      case gt.NONE:
        return new ie();
      case gt.Null:
        return new ie();
      case gt.Binary:
        return new Ar();
      case gt.Utf8:
        return new xr();
      case gt.Bool:
        return new Br();
      case gt.List:
        return new Ge((t || [])[0]);
      case gt.Struct_:
        return new ht(t || []);
    }
    switch (e) {
      case gt.Int: {
        let n = r.type(new kt());
        return new xt(n.isSigned(), n.bitWidth());
      }
      case gt.FloatingPoint: {
        let n = r.type(new me());
        return new de(n.precision());
      }
      case gt.Decimal: {
        let n = r.type(new Ct());
        return new Tr(n.scale(), n.precision(), n.bitWidth());
      }
      case gt.Date: {
        let n = r.type(new fe());
        return new Dr(n.unit());
      }
      case gt.Time: {
        let n = r.type(new Gt());
        return new Xe(n.unit(), n.bitWidth());
      }
      case gt.Timestamp: {
        let n = r.type(new Kt());
        return new Er(n.unit(), n.timezone());
      }
      case gt.Interval: {
        let n = r.type(new _e());
        return new Or(n.unit());
      }
      case gt.Union: {
        let n = r.type(new Pt());
        return new Ke(n.mode(), n.typeIdsArray() || [], t || []);
      }
      case gt.FixedSizeBinary: {
        let n = r.type(new he());
        return new Rr(n.byteWidth());
      }
      case gt.FixedSizeList: {
        let n = r.type(new pe());
        return new Je(n.listSize(), (t || [])[0]);
      }
      case gt.Map: {
        let n = r.type(new ye());
        return new qe((t || [])[0], n.keysSorted());
      }
    }
    throw new Error(`Unrecognized type: "${gt[e]}" (${e})`);
  }
  function r_(r, t) {
    let e = t.fields.map((s) => V.encode(r, s));
    St.startFieldsVector(r, e.length);
    let n = St.createFieldsVector(r, e),
      i =
        t.metadata && t.metadata.size > 0
          ? St.createCustomMetadataVector(
              r,
              [...t.metadata].map(([s, o]) => {
                let a = r.createString(`${s}`),
                  c = r.createString(`${o}`);
                return (
                  pt.startKeyValue(r),
                  pt.addKey(r, a),
                  pt.addValue(r, c),
                  pt.endKeyValue(r)
                );
              })
            )
          : -1;
    return (
      St.startSchema(r),
      St.addFields(r, n),
      St.addEndianness(r, c_ ? tn.Little : tn.Big),
      i !== -1 && St.addCustomMetadata(r, i),
      St.endSchema(r)
    );
  }
  function n_(r, t) {
    let e = -1,
      n = -1,
      i = -1,
      s = t.type,
      o = t.typeId;
    B.isDictionary(s)
      ? ((o = s.dictionary.typeId),
        (i = Eo.visit(s, r)),
        (n = Eo.visit(s.dictionary, r)))
      : (n = Eo.visit(s, r));
    let a = (s.children || []).map((p) => V.encode(r, p)),
      c = Ot.createChildrenVector(r, a),
      u =
        t.metadata && t.metadata.size > 0
          ? Ot.createCustomMetadataVector(
              r,
              [...t.metadata].map(([p, b]) => {
                let _ = r.createString(`${p}`),
                  S = r.createString(`${b}`);
                return (
                  pt.startKeyValue(r),
                  pt.addKey(r, _),
                  pt.addValue(r, S),
                  pt.endKeyValue(r)
                );
              })
            )
          : -1;
    return (
      t.name && (e = r.createString(t.name)),
      Ot.startField(r),
      Ot.addType(r, n),
      Ot.addTypeType(r, o),
      Ot.addChildren(r, c),
      Ot.addNullable(r, !!t.nullable),
      e !== -1 && Ot.addName(r, e),
      i !== -1 && Ot.addDictionary(r, i),
      u !== -1 && Ot.addCustomMetadata(r, u),
      Ot.endField(r)
    );
  }
  function i_(r, t) {
    let e = t.nodes || [],
      n = t.buffers || [];
    qt.startNodesVector(r, e.length);
    for (let o of e.slice().reverse()) rr.encode(r, o);
    let i = r.endVector();
    qt.startBuffersVector(r, n.length);
    for (let o of n.slice().reverse()) ve.encode(r, o);
    let s = r.endVector();
    return (
      qt.startRecordBatch(r),
      qt.addLength(r, new xn(t.length, 0)),
      qt.addNodes(r, i),
      qt.addBuffers(r, s),
      qt.endRecordBatch(r)
    );
  }
  function s_(r, t) {
    let e = Yt.encode(r, t.data);
    return (
      Ce.startDictionaryBatch(r),
      Ce.addId(r, new xn(t.id, 0)),
      Ce.addIsDelta(r, t.isDelta),
      Ce.addData(r, e),
      Ce.endDictionaryBatch(r)
    );
  }
  function o_(r, t) {
    return Jn.createFieldNode(r, new xn(t.length, 0), new xn(t.nullCount, 0));
  }
  function a_(r, t) {
    return Kn.createBuffer(r, new xn(t.offset, 0), new xn(t.length, 0));
  }
  var c_ = (() => {
    let r = new ArrayBuffer(2);
    return new DataView(r).setInt16(0, 256, !0), new Int16Array(r)[0] === 256;
  })();
  var Ga = (r) =>
      `Expected ${tt[r]} Message in stream, but was null or length 0.`,
    Ka = (r) =>
      `Header pointer of flatbuffer-encoded ${tt[r]} Message is null or length 0.`,
    Eu = (r, t) => `Expected to read ${r} metadata bytes, but only read ${t}.`,
    Ou = (r, t) =>
      `Expected to read ${r} bytes for message body, but only read ${t}.`,
    Zn = class {
      constructor(t) {
        this.source = t instanceof gr ? t : new gr(t);
      }
      [Symbol.iterator]() {
        return this;
      }
      next() {
        let t;
        return (t = this.readMetadataLength()).done
          ? mt
          : t.value === -1 && (t = this.readMetadataLength()).done
          ? mt
          : (t = this.readMetadata(t.value)).done
          ? mt
          : t;
      }
      throw(t) {
        return this.source.throw(t);
      }
      return(t) {
        return this.source.return(t);
      }
      readMessage(t) {
        let e;
        if ((e = this.next()).done) return null;
        if (t != null && e.value.headerType !== t) throw new Error(Ga(t));
        return e.value;
      }
      readMessageBody(t) {
        if (t <= 0) return new Uint8Array(0);
        let e = L(this.source.read(t));
        if (e.byteLength < t) throw new Error(Ou(t, e.byteLength));
        return e.byteOffset % 8 === 0 &&
          e.byteOffset + e.byteLength <= e.buffer.byteLength
          ? e
          : e.slice();
      }
      readSchema(t = !1) {
        let e = tt.Schema,
          n = this.readMessage(e),
          i = n == null ? void 0 : n.header();
        if (t && !i) throw new Error(Ka(e));
        return i;
      }
      readMetadataLength() {
        let t = this.source.read(Mo),
          e = t && new se(t),
          n = (e == null ? void 0 : e.readInt32(0)) || 0;
        return { done: n === 0, value: n };
      }
      readMetadata(t) {
        let e = this.source.read(t);
        if (!e) return mt;
        if (e.byteLength < t) throw new Error(Eu(t, e.byteLength));
        return { done: !1, value: Rt.decode(e) };
      }
    },
    Ji = class {
      constructor(t, e) {
        this.source = t instanceof be ? t : bs(t) ? new rn(t, e) : new be(t);
      }
      [Symbol.asyncIterator]() {
        return this;
      }
      next() {
        return I(this, void 0, void 0, function* () {
          let t;
          return (t = yield this.readMetadataLength()).done
            ? mt
            : t.value === -1 && (t = yield this.readMetadataLength()).done
            ? mt
            : (t = yield this.readMetadata(t.value)).done
            ? mt
            : t;
        });
      }
      throw(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.source.throw(t);
        });
      }
      return(t) {
        return I(this, void 0, void 0, function* () {
          return yield this.source.return(t);
        });
      }
      readMessage(t) {
        return I(this, void 0, void 0, function* () {
          let e;
          if ((e = yield this.next()).done) return null;
          if (t != null && e.value.headerType !== t) throw new Error(Ga(t));
          return e.value;
        });
      }
      readMessageBody(t) {
        return I(this, void 0, void 0, function* () {
          if (t <= 0) return new Uint8Array(0);
          let e = L(yield this.source.read(t));
          if (e.byteLength < t) throw new Error(Ou(t, e.byteLength));
          return e.byteOffset % 8 === 0 &&
            e.byteOffset + e.byteLength <= e.buffer.byteLength
            ? e
            : e.slice();
        });
      }
      readSchema(t = !1) {
        return I(this, void 0, void 0, function* () {
          let e = tt.Schema,
            n = yield this.readMessage(e),
            i = n == null ? void 0 : n.header();
          if (t && !i) throw new Error(Ka(e));
          return i;
        });
      }
      readMetadataLength() {
        return I(this, void 0, void 0, function* () {
          let t = yield this.source.read(Mo),
            e = t && new se(t),
            n = (e == null ? void 0 : e.readInt32(0)) || 0;
          return { done: n === 0, value: n };
        });
      }
      readMetadata(t) {
        return I(this, void 0, void 0, function* () {
          let e = yield this.source.read(t);
          if (!e) return mt;
          if (e.byteLength < t) throw new Error(Eu(t, e.byteLength));
          return { done: !1, value: Rt.decode(e) };
        });
      }
    },
    qi = class extends Zn {
      constructor(t) {
        super(new Uint8Array(0)),
          (this._schema = !1),
          (this._body = []),
          (this._batchIndex = 0),
          (this._dictionaryIndex = 0),
          (this._json = t instanceof xi ? t : new xi(t));
      }
      next() {
        let { _json: t } = this;
        if (!this._schema)
          return (
            (this._schema = !0),
            { done: !1, value: Rt.fromJSON(t.schema, tt.Schema) }
          );
        if (this._dictionaryIndex < t.dictionaries.length) {
          let e = t.dictionaries[this._dictionaryIndex++];
          return (
            (this._body = e.data.columns),
            { done: !1, value: Rt.fromJSON(e, tt.DictionaryBatch) }
          );
        }
        if (this._batchIndex < t.batches.length) {
          let e = t.batches[this._batchIndex++];
          return (
            (this._body = e.columns),
            { done: !1, value: Rt.fromJSON(e, tt.RecordBatch) }
          );
        }
        return (this._body = []), mt;
      }
      readMessageBody(t) {
        return e(this._body);
        function e(n) {
          return (n || []).reduce(
            (i, s) => [
              ...i,
              ...((s.VALIDITY && [s.VALIDITY]) || []),
              ...((s.TYPE && [s.TYPE]) || []),
              ...((s.OFFSET && [s.OFFSET]) || []),
              ...((s.DATA && [s.DATA]) || []),
              ...e(s.children),
            ],
            []
          );
        }
      }
      readMessage(t) {
        let e;
        if ((e = this.next()).done) return null;
        if (t != null && e.value.headerType !== t) throw new Error(Ga(t));
        return e.value;
      }
      readSchema() {
        let t = tt.Schema,
          e = this.readMessage(t),
          n = e == null ? void 0 : e.header();
        if (!e || !n) throw new Error(Ka(t));
        return n;
      }
    },
    Mo = 4,
    Xa = 'ARROW1',
    Qn = new Uint8Array(Xa.length);
  for (let r = 0; r < Xa.length; r += 1) Qn[r] = Xa.codePointAt(r);
  function Uo(r, t = 0) {
    for (let e = -1, n = Qn.length; ++e < n; )
      if (Qn[e] !== r[t + e]) return !1;
    return !0;
  }
  var ti = Qn.length,
    Ja = ti + Mo,
    Ru = ti * 2 + Mo;
  var Tt = class extends gn {
      constructor(t) {
        super(), (this._impl = t);
      }
      get closed() {
        return this._impl.closed;
      }
      get schema() {
        return this._impl.schema;
      }
      get autoDestroy() {
        return this._impl.autoDestroy;
      }
      get dictionaries() {
        return this._impl.dictionaries;
      }
      get numDictionaries() {
        return this._impl.numDictionaries;
      }
      get numRecordBatches() {
        return this._impl.numRecordBatches;
      }
      get footer() {
        return this._impl.isFile() ? this._impl.footer : null;
      }
      isSync() {
        return this._impl.isSync();
      }
      isAsync() {
        return this._impl.isAsync();
      }
      isFile() {
        return this._impl.isFile();
      }
      isStream() {
        return this._impl.isStream();
      }
      next() {
        return this._impl.next();
      }
      throw(t) {
        return this._impl.throw(t);
      }
      return(t) {
        return this._impl.return(t);
      }
      cancel() {
        return this._impl.cancel();
      }
      reset(t) {
        return (
          this._impl.reset(t),
          (this._DOMStream = void 0),
          (this._nodeStream = void 0),
          this
        );
      }
      open(t) {
        let e = this._impl.open(t);
        return ze(e) ? e.then(() => this) : this;
      }
      readRecordBatch(t) {
        return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
      }
      [Symbol.iterator]() {
        return this._impl[Symbol.iterator]();
      }
      [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]();
      }
      toDOMStream() {
        return jt.toDOMStream(
          this.isSync()
            ? { [Symbol.iterator]: () => this }
            : { [Symbol.asyncIterator]: () => this }
        );
      }
      toNodeStream() {
        return jt.toNodeStream(
          this.isSync()
            ? { [Symbol.iterator]: () => this }
            : { [Symbol.asyncIterator]: () => this },
          { objectMode: !0 }
        );
      }
      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment');
      }
      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment');
      }
      static from(t) {
        return t instanceof Tt
          ? t
          : _s(t)
          ? u_(t)
          : bs(t)
          ? h_(t)
          : ze(t)
          ? (() =>
              I(this, void 0, void 0, function* () {
                return yield Tt.from(yield t);
              }))()
          : gs(t) || fi(t) || vs(t) || Me(t)
          ? f_(new be(t))
          : d_(new gr(t));
      }
      static readAll(t) {
        return t instanceof Tt
          ? t.isSync()
            ? Mu(t)
            : Uu(t)
          : _s(t) || ArrayBuffer.isView(t) || je(t) || ys(t)
          ? Mu(t)
          : Uu(t);
      }
    },
    vr = class extends Tt {
      constructor(t) {
        super(t), (this._impl = t);
      }
      readAll() {
        return [...this];
      }
      [Symbol.iterator]() {
        return this._impl[Symbol.iterator]();
      }
      [Symbol.asyncIterator]() {
        return ue(this, arguments, function* () {
          yield W(yield* On(Ee(this[Symbol.iterator]())));
        });
      }
    },
    nn = class extends Tt {
      constructor(t) {
        super(t), (this._impl = t);
      }
      readAll() {
        var t, e;
        return I(this, void 0, void 0, function* () {
          let n = new Array();
          try {
            for (var i = Ee(this), s; (s = yield i.next()), !s.done; ) {
              let o = s.value;
              n.push(o);
            }
          } catch (o) {
            t = { error: o };
          } finally {
            try {
              s && !s.done && (e = i.return) && (yield e.call(i));
            } finally {
              if (t) throw t.error;
            }
          }
          return n;
        });
      }
      [Symbol.iterator]() {
        throw new Error('AsyncRecordBatchStreamReader is not Iterable');
      }
      [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]();
      }
    },
    sn = class extends vr {
      constructor(t) {
        super(t), (this._impl = t);
      }
    },
    Zi = class extends nn {
      constructor(t) {
        super(t), (this._impl = t);
      }
    },
    Lo = class {
      constructor(t = new Map()) {
        (this.closed = !1),
          (this.autoDestroy = !0),
          (this._dictionaryIndex = 0),
          (this._recordBatchIndex = 0),
          (this.dictionaries = t);
      }
      get numDictionaries() {
        return this._dictionaryIndex;
      }
      get numRecordBatches() {
        return this._recordBatchIndex;
      }
      isSync() {
        return !1;
      }
      isAsync() {
        return !1;
      }
      isFile() {
        return !1;
      }
      isStream() {
        return !1;
      }
      reset(t) {
        return (
          (this._dictionaryIndex = 0),
          (this._recordBatchIndex = 0),
          (this.schema = t),
          (this.dictionaries = new Map()),
          this
        );
      }
      _loadRecordBatch(t, e) {
        let n = this._loadVectors(t, e, this.schema.fields),
          i = C({
            type: new ht(this.schema.fields),
            length: t.length,
            children: n,
          });
        return new ft(this.schema, i);
      }
      _loadDictionaryBatch(t, e) {
        let { id: n, isDelta: i } = t,
          { dictionaries: s, schema: o } = this,
          a = s.get(n);
        if (i || !a) {
          let c = o.dictionaries.get(n),
            u = this._loadVectors(t.data, e, [c]);
          return (a && i ? a.concat(new k(u)) : new k(u)).memoize();
        }
        return a.memoize();
      }
      _loadVectors(t, e, n) {
        return new Di(e, t.nodes, t.buffers, this.dictionaries).visitMany(n);
      }
    },
    ei = class extends Lo {
      constructor(t, e) {
        super(e),
          (this._reader = _s(t)
            ? new qi((this._handle = t))
            : new Zn((this._handle = t)));
      }
      isSync() {
        return !0;
      }
      isStream() {
        return !0;
      }
      [Symbol.iterator]() {
        return this;
      }
      cancel() {
        !this.closed &&
          (this.closed = !0) &&
          (this.reset()._reader.return(),
          (this._reader = null),
          (this.dictionaries = null));
      }
      open(t) {
        return (
          this.closed ||
            ((this.autoDestroy = Lu(this, t)),
            this.schema ||
              (this.schema = this._reader.readSchema()) ||
              this.cancel()),
          this
        );
      }
      throw(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0)
          ? this.reset()._reader.throw(t)
          : mt;
      }
      return(t) {
        return !this.closed && this.autoDestroy && (this.closed = !0)
          ? this.reset()._reader.return(t)
          : mt;
      }
      next() {
        if (this.closed) return mt;
        let t,
          { _reader: e } = this;
        for (; (t = this._readNextMessageAndValidate()); )
          if (t.isSchema()) this.reset(t.header());
          else if (t.isRecordBatch()) {
            this._recordBatchIndex++;
            let n = t.header(),
              i = e.readMessageBody(t.bodyLength);
            return { done: !1, value: this._loadRecordBatch(n, i) };
          } else if (t.isDictionaryBatch()) {
            this._dictionaryIndex++;
            let n = t.header(),
              i = e.readMessageBody(t.bodyLength),
              s = this._loadDictionaryBatch(n, i);
            this.dictionaries.set(n.id, s);
          }
        return this.schema && this._recordBatchIndex === 0
          ? (this._recordBatchIndex++, { done: !1, value: new An(this.schema) })
          : this.return();
      }
      _readNextMessageAndValidate(t) {
        return this._reader.readMessage(t);
      }
    },
    ri = class extends Lo {
      constructor(t, e) {
        super(e), (this._reader = new Ji((this._handle = t)));
      }
      isAsync() {
        return !0;
      }
      isStream() {
        return !0;
      }
      [Symbol.asyncIterator]() {
        return this;
      }
      cancel() {
        return I(this, void 0, void 0, function* () {
          !this.closed &&
            (this.closed = !0) &&
            (yield this.reset()._reader.return(),
            (this._reader = null),
            (this.dictionaries = null));
        });
      }
      open(t) {
        return I(this, void 0, void 0, function* () {
          return (
            this.closed ||
              ((this.autoDestroy = Lu(this, t)),
              this.schema ||
                (this.schema = yield this._reader.readSchema()) ||
                (yield this.cancel())),
            this
          );
        });
      }
      throw(t) {
        return I(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0)
            ? yield this.reset()._reader.throw(t)
            : mt;
        });
      }
      return(t) {
        return I(this, void 0, void 0, function* () {
          return !this.closed && this.autoDestroy && (this.closed = !0)
            ? yield this.reset()._reader.return(t)
            : mt;
        });
      }
      next() {
        return I(this, void 0, void 0, function* () {
          if (this.closed) return mt;
          let t,
            { _reader: e } = this;
          for (; (t = yield this._readNextMessageAndValidate()); )
            if (t.isSchema()) yield this.reset(t.header());
            else if (t.isRecordBatch()) {
              this._recordBatchIndex++;
              let n = t.header(),
                i = yield e.readMessageBody(t.bodyLength);
              return { done: !1, value: this._loadRecordBatch(n, i) };
            } else if (t.isDictionaryBatch()) {
              this._dictionaryIndex++;
              let n = t.header(),
                i = yield e.readMessageBody(t.bodyLength),
                s = this._loadDictionaryBatch(n, i);
              this.dictionaries.set(n.id, s);
            }
          return this.schema && this._recordBatchIndex === 0
            ? (this._recordBatchIndex++,
              { done: !1, value: new An(this.schema) })
            : yield this.return();
        });
      }
      _readNextMessageAndValidate(t) {
        return I(this, void 0, void 0, function* () {
          return yield this._reader.readMessage(t);
        });
      }
    },
    No = class extends ei {
      constructor(t, e) {
        super(t instanceof Bi ? t : new Bi(t), e);
      }
      get footer() {
        return this._footer;
      }
      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0;
      }
      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0;
      }
      isSync() {
        return !0;
      }
      isFile() {
        return !0;
      }
      open(t) {
        if (!this.closed && !this._footer) {
          this.schema = (this._footer = this._readFooter()).schema;
          for (let e of this._footer.dictionaryBatches())
            e && this._readDictionaryBatch(this._dictionaryIndex++);
        }
        return super.open(t);
      }
      readRecordBatch(t) {
        var e;
        if (this.closed) return null;
        this._footer || this.open();
        let n =
          (e = this._footer) === null || e === void 0
            ? void 0
            : e.getRecordBatch(t);
        if (n && this._handle.seek(n.offset)) {
          let i = this._reader.readMessage(tt.RecordBatch);
          if (i != null && i.isRecordBatch()) {
            let s = i.header(),
              o = this._reader.readMessageBody(i.bodyLength);
            return this._loadRecordBatch(s, o);
          }
        }
        return null;
      }
      _readDictionaryBatch(t) {
        var e;
        let n =
          (e = this._footer) === null || e === void 0
            ? void 0
            : e.getDictionaryBatch(t);
        if (n && this._handle.seek(n.offset)) {
          let i = this._reader.readMessage(tt.DictionaryBatch);
          if (i != null && i.isDictionaryBatch()) {
            let s = i.header(),
              o = this._reader.readMessageBody(i.bodyLength),
              a = this._loadDictionaryBatch(s, o);
            this.dictionaries.set(s.id, a);
          }
        }
      }
      _readFooter() {
        let { _handle: t } = this,
          e = t.size - Ja,
          n = t.readInt32(e),
          i = t.readAt(e - n, n);
        return Nr.decode(i);
      }
      _readNextMessageAndValidate(t) {
        var e;
        if (
          (this._footer || this.open(),
          this._footer && this._recordBatchIndex < this.numRecordBatches)
        ) {
          let n =
            (e = this._footer) === null || e === void 0
              ? void 0
              : e.getRecordBatch(this._recordBatchIndex);
          if (n && this._handle.seek(n.offset))
            return this._reader.readMessage(t);
        }
        return null;
      }
    },
    qa = class extends ri {
      constructor(t, ...e) {
        let n = typeof e[0] != 'number' ? e.shift() : void 0,
          i = e[0] instanceof Map ? e.shift() : void 0;
        super(t instanceof rn ? t : new rn(t, n), i);
      }
      get footer() {
        return this._footer;
      }
      get numDictionaries() {
        return this._footer ? this._footer.numDictionaries : 0;
      }
      get numRecordBatches() {
        return this._footer ? this._footer.numRecordBatches : 0;
      }
      isFile() {
        return !0;
      }
      isAsync() {
        return !0;
      }
      open(t) {
        let e = Object.create(null, { open: { get: () => super.open } });
        return I(this, void 0, void 0, function* () {
          if (!this.closed && !this._footer) {
            this.schema = (this._footer = yield this._readFooter()).schema;
            for (let n of this._footer.dictionaryBatches())
              n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
          }
          return yield e.open.call(this, t);
        });
      }
      readRecordBatch(t) {
        var e;
        return I(this, void 0, void 0, function* () {
          if (this.closed) return null;
          this._footer || (yield this.open());
          let n =
            (e = this._footer) === null || e === void 0
              ? void 0
              : e.getRecordBatch(t);
          if (n && (yield this._handle.seek(n.offset))) {
            let i = yield this._reader.readMessage(tt.RecordBatch);
            if (i != null && i.isRecordBatch()) {
              let s = i.header(),
                o = yield this._reader.readMessageBody(i.bodyLength);
              return this._loadRecordBatch(s, o);
            }
          }
          return null;
        });
      }
      _readDictionaryBatch(t) {
        var e;
        return I(this, void 0, void 0, function* () {
          let n =
            (e = this._footer) === null || e === void 0
              ? void 0
              : e.getDictionaryBatch(t);
          if (n && (yield this._handle.seek(n.offset))) {
            let i = yield this._reader.readMessage(tt.DictionaryBatch);
            if (i != null && i.isDictionaryBatch()) {
              let s = i.header(),
                o = yield this._reader.readMessageBody(i.bodyLength),
                a = this._loadDictionaryBatch(s, o);
              this.dictionaries.set(s.id, a);
            }
          }
        });
      }
      _readFooter() {
        return I(this, void 0, void 0, function* () {
          let { _handle: t } = this;
          t._pending && (yield t._pending);
          let e = t.size - Ja,
            n = yield t.readInt32(e),
            i = yield t.readAt(e - n, n);
          return Nr.decode(i);
        });
      }
      _readNextMessageAndValidate(t) {
        return I(this, void 0, void 0, function* () {
          if (
            (this._footer || (yield this.open()),
            this._footer && this._recordBatchIndex < this.numRecordBatches)
          ) {
            let e = this._footer.getRecordBatch(this._recordBatchIndex);
            if (e && (yield this._handle.seek(e.offset)))
              return yield this._reader.readMessage(t);
          }
          return null;
        });
      }
    },
    Za = class extends ei {
      constructor(t, e) {
        super(t, e);
      }
      _loadVectors(t, e, n) {
        return new oo(e, t.nodes, t.buffers, this.dictionaries).visitMany(n);
      }
    };
  function Lu(r, t) {
    return t && typeof t.autoDestroy == 'boolean'
      ? t.autoDestroy
      : r.autoDestroy;
  }
  function* Mu(r) {
    let t = Tt.from(r);
    try {
      if (!t.open({ autoDestroy: !1 }).closed)
        do yield t;
        while (!t.reset().open().closed);
    } finally {
      t.cancel();
    }
  }
  function Uu(r) {
    return ue(this, arguments, function* () {
      let e = yield W(Tt.from(r));
      try {
        if (!(yield W(e.open({ autoDestroy: !1 }))).closed)
          do yield yield W(e);
          while (!(yield W(e.reset().open())).closed);
      } finally {
        yield W(e.cancel());
      }
    });
  }
  function u_(r) {
    return new vr(new Za(r));
  }
  function d_(r) {
    let t = r.peek((ti + 7) & -8);
    return t && t.byteLength >= 4
      ? Uo(t)
        ? new sn(new No(r.read()))
        : new vr(new ei(r))
      : new vr(new ei((function* () {})()));
  }
  function f_(r) {
    return I(this, void 0, void 0, function* () {
      let t = yield r.peek((ti + 7) & -8);
      return t && t.byteLength >= 4
        ? Uo(t)
          ? new sn(new No(yield r.read()))
          : new nn(new ri(r))
        : new nn(
            new ri(
              (function () {
                return ue(this, arguments, function* () {});
              })()
            )
          );
    });
  }
  function h_(r) {
    return I(this, void 0, void 0, function* () {
      let { size: t } = yield r.stat(),
        e = new rn(r, t);
      return t >= Ru && Uo(yield e.readAt(0, (ti + 7) & -8))
        ? new Zi(new qa(e))
        : new nn(new ri(e));
    });
  }
  var It = class extends D {
    constructor() {
      super(),
        (this._byteLength = 0),
        (this._nodes = []),
        (this._buffers = []),
        (this._bufferRegions = []);
    }
    static assemble(...t) {
      let e = (i) =>
          i.flatMap((s) =>
            Array.isArray(s) ? e(s) : s instanceof ft ? s.data.children : s.data
          ),
        n = new It();
      return n.visitMany(e(t)), n;
    }
    visit(t) {
      if (t instanceof k) return this.visitMany(t.data), this;
      let { type: e } = t;
      if (!B.isDictionary(e)) {
        let { length: n, nullCount: i } = t;
        if (n > 2147483647)
          throw new RangeError(
            'Cannot write arrays larger than 2^31 - 1 in length'
          );
        B.isNull(e) ||
          nr.call(
            this,
            i <= 0 ? new Uint8Array(0) : Pn(t.offset, n, t.nullBitmap)
          ),
          this.nodes.push(new rr(n, i));
      }
      return super.visit(t);
    }
    visitNull(t) {
      return this;
    }
    visitDictionary(t) {
      return this.visit(t.clone(t.type.indices));
    }
    get nodes() {
      return this._nodes;
    }
    get buffers() {
      return this._buffers;
    }
    get byteLength() {
      return this._byteLength;
    }
    get bufferRegions() {
      return this._bufferRegions;
    }
  };
  function nr(r) {
    let t = (r.byteLength + 7) & -8;
    return (
      this.buffers.push(r),
      this.bufferRegions.push(new ve(this._byteLength, t)),
      (this._byteLength += t),
      this
    );
  }
  function p_(r) {
    let { type: t, length: e, typeIds: n, valueOffsets: i } = r;
    if ((nr.call(this, n), t.mode === vt.Sparse)) return Qa.call(this, r);
    if (t.mode === vt.Dense) {
      if (r.offset <= 0) return nr.call(this, i), Qa.call(this, r);
      {
        let s = n.reduce((p, b) => Math.max(p, b), n[0]),
          o = new Int32Array(s + 1),
          a = new Int32Array(s + 1).fill(-1),
          c = new Int32Array(e),
          u = hi(-i[0], e, i);
        for (let p, b, _ = -1; ++_ < e; )
          (b = a[(p = n[_])]) === -1 && (b = a[p] = u[p]),
            (c[_] = u[_] - b),
            ++o[p];
        nr.call(this, c);
        for (let p, b = -1, _ = t.children.length; ++b < _; )
          if ((p = r.children[b])) {
            let S = t.typeIds[b],
              J = Math.min(e, o[S]);
            this.visit(p.slice(a[S], J));
          }
      }
    }
    return this;
  }
  function m_(r) {
    let t;
    return r.nullCount >= r.length
      ? nr.call(this, new Uint8Array(0))
      : (t = r.values) instanceof Uint8Array
      ? nr.call(this, Pn(r.offset, r.length, t))
      : nr.call(this, mn(r.values));
  }
  function on(r) {
    return nr.call(this, r.values.subarray(0, r.length * r.stride));
  }
  function Nu(r) {
    let { length: t, values: e, valueOffsets: n } = r,
      i = n[0],
      s = n[t],
      o = Math.min(s - i, e.byteLength - i);
    return (
      nr.call(this, hi(-n[0], t, n)), nr.call(this, e.subarray(i, i + o)), this
    );
  }
  function tc(r) {
    let { length: t, valueOffsets: e } = r;
    return e && nr.call(this, hi(e[0], t, e)), this.visit(r.children[0]);
  }
  function Qa(r) {
    return this.visitMany(
      r.type.children.map((t, e) => r.children[e]).filter(Boolean)
    )[0];
  }
  It.prototype.visitBool = m_;
  It.prototype.visitInt = on;
  It.prototype.visitFloat = on;
  It.prototype.visitUtf8 = Nu;
  It.prototype.visitBinary = Nu;
  It.prototype.visitFixedSizeBinary = on;
  It.prototype.visitDate = on;
  It.prototype.visitTimestamp = on;
  It.prototype.visitTime = on;
  It.prototype.visitDecimal = on;
  It.prototype.visitList = tc;
  It.prototype.visitStruct = Qa;
  It.prototype.visitUnion = p_;
  It.prototype.visitInterval = on;
  It.prototype.visitFixedSizeList = tc;
  It.prototype.visitMap = tc;
  var Bn = class extends gn {
      constructor(t) {
        super(),
          (this._position = 0),
          (this._started = !1),
          (this._sink = new br()),
          (this._schema = null),
          (this._dictionaryBlocks = []),
          (this._recordBatchBlocks = []),
          (this._dictionaryDeltaOffsets = new Map()),
          re(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }),
          (this._autoDestroy =
            typeof t.autoDestroy == 'boolean' ? t.autoDestroy : !0),
          (this._writeLegacyIpcFormat =
            typeof t.writeLegacyIpcFormat == 'boolean'
              ? t.writeLegacyIpcFormat
              : !1);
      }
      static throughNode(t) {
        throw new Error('"throughNode" not available in this environment');
      }
      static throughDOM(t, e) {
        throw new Error('"throughDOM" not available in this environment');
      }
      toString(t = !1) {
        return this._sink.toString(t);
      }
      toUint8Array(t = !1) {
        return this._sink.toUint8Array(t);
      }
      writeAll(t) {
        return ze(t)
          ? t.then((e) => this.writeAll(e))
          : Me(t)
          ? rc(this, t)
          : ec(this, t);
      }
      get closed() {
        return this._sink.closed;
      }
      [Symbol.asyncIterator]() {
        return this._sink[Symbol.asyncIterator]();
      }
      toDOMStream(t) {
        return this._sink.toDOMStream(t);
      }
      toNodeStream(t) {
        return this._sink.toNodeStream(t);
      }
      close() {
        return this.reset()._sink.close();
      }
      abort(t) {
        return this.reset()._sink.abort(t);
      }
      finish() {
        return (
          this._autoDestroy
            ? this.close()
            : this.reset(this._sink, this._schema),
          this
        );
      }
      reset(t = this._sink, e = null) {
        return (
          t === this._sink || t instanceof br
            ? (this._sink = t)
            : ((this._sink = new br()),
              t && ol(t)
                ? this.toDOMStream({ type: 'bytes' }).pipeTo(t)
                : t && al(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)),
          this._started && this._schema && this._writeFooter(this._schema),
          (this._started = !1),
          (this._dictionaryBlocks = []),
          (this._recordBatchBlocks = []),
          (this._dictionaryDeltaOffsets = new Map()),
          (!e || !Fn(e, this._schema)) &&
            (e == null
              ? ((this._position = 0), (this._schema = null))
              : ((this._started = !0),
                (this._schema = e),
                this._writeSchema(e))),
          this
        );
      }
      write(t) {
        let e = null;
        if (this._sink) {
          if (t == null) return this.finish() && void 0;
          if (t instanceof At && !(e = t.schema))
            return this.finish() && void 0;
          if (t instanceof ft && !(e = t.schema))
            return this.finish() && void 0;
        } else throw new Error('RecordBatchWriter is closed');
        if (e && !Fn(e, this._schema)) {
          if (this._started && this._autoDestroy) return this.close();
          this.reset(this._sink, e);
        }
        t instanceof ft
          ? t instanceof An || this._writeRecordBatch(t)
          : t instanceof At
          ? this.writeAll(t.batches)
          : je(t) && this.writeAll(t);
      }
      _writeMessage(t, e = 8) {
        let n = e - 1,
          i = Rt.encode(t),
          s = i.byteLength,
          o = this._writeLegacyIpcFormat ? 4 : 8,
          a = (s + o + n) & ~n,
          c = a - s - o;
        return (
          t.headerType === tt.RecordBatch
            ? this._recordBatchBlocks.push(
                new tr(a, t.bodyLength, this._position)
              )
            : t.headerType === tt.DictionaryBatch &&
              this._dictionaryBlocks.push(
                new tr(a, t.bodyLength, this._position)
              ),
          this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)),
          this._write(Int32Array.of(a - o)),
          s > 0 && this._write(i),
          this._writePadding(c)
        );
      }
      _write(t) {
        if (this._started) {
          let e = L(t);
          e &&
            e.byteLength > 0 &&
            (this._sink.write(e), (this._position += e.byteLength));
        }
        return this;
      }
      _writeSchema(t) {
        return this._writeMessage(Rt.from(t));
      }
      _writeFooter(t) {
        return this._writeLegacyIpcFormat
          ? this._write(Int32Array.of(0))
          : this._write(Int32Array.of(-1, 0));
      }
      _writeMagic() {
        return this._write(Qn);
      }
      _writePadding(t) {
        return t > 0 ? this._write(new Uint8Array(t)) : this;
      }
      _writeRecordBatch(t) {
        let {
            byteLength: e,
            nodes: n,
            bufferRegions: i,
            buffers: s,
          } = It.assemble(t),
          o = new Yt(t.numRows, n, i),
          a = Rt.from(o, e);
        return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s);
      }
      _writeDictionaryBatch(t, e, n = !1) {
        this._dictionaryDeltaOffsets.set(
          e,
          t.length + (this._dictionaryDeltaOffsets.get(e) || 0)
        );
        let {
            byteLength: i,
            nodes: s,
            bufferRegions: o,
            buffers: a,
          } = It.assemble(new k([t])),
          c = new Yt(t.length, s, o),
          u = new Se(c, e, n),
          p = Rt.from(u, i);
        return this._writeMessage(p)._writeBodyBuffers(a);
      }
      _writeBodyBuffers(t) {
        let e, n, i;
        for (let s = -1, o = t.length; ++s < o; )
          (e = t[s]) &&
            (n = e.byteLength) > 0 &&
            (this._write(e),
            (i = ((n + 7) & -8) - n) > 0 && this._writePadding(i));
        return this;
      }
      _writeDictionaries(t) {
        for (let [e, n] of t.dictionaries) {
          let i = this._dictionaryDeltaOffsets.get(e) || 0;
          if (i === 0 || (n = n == null ? void 0 : n.slice(i)).length > 0)
            for (let s of n.data)
              this._writeDictionaryBatch(s, e, i > 0), (i += s.length);
        }
        return this;
      }
    },
    Vr = class extends Bn {
      static writeAll(t, e) {
        let n = new Vr(e);
        return ze(t)
          ? t.then((i) => n.writeAll(i))
          : Me(t)
          ? rc(n, t)
          : ec(n, t);
      }
    },
    zr = class extends Bn {
      static writeAll(t) {
        let e = new zr();
        return ze(t)
          ? t.then((n) => e.writeAll(n))
          : Me(t)
          ? rc(e, t)
          : ec(e, t);
      }
      constructor() {
        super(), (this._autoDestroy = !0);
      }
      _writeSchema(t) {
        return this._writeMagic()._writePadding(2);
      }
      _writeFooter(t) {
        let e = Nr.encode(
          new Nr(t, Lt.V4, this._recordBatchBlocks, this._dictionaryBlocks)
        );
        return super
          ._writeFooter(t)
          ._write(e)
          ._write(Int32Array.of(e.byteLength))
          ._writeMagic();
      }
    };
  function ec(r, t) {
    let e = t;
    t instanceof At && ((e = t.batches), r.reset(void 0, t.schema));
    for (let n of e) r.write(n);
    return r.finish();
  }
  function rc(r, t) {
    var e, n, i, s;
    return I(this, void 0, void 0, function* () {
      try {
        for (e = Ee(t); (n = yield e.next()), !n.done; ) {
          let o = n.value;
          r.write(o);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          n && !n.done && (s = e.return) && (yield s.call(e));
        } finally {
          if (i) throw i.error;
        }
      }
      return r.finish();
    });
  }
  function ku(r, t) {
    if (Me(r)) return y_(r, t);
    if (je(r)) return __(r, t);
    throw new Error(
      'toDOMStream() must be called with an Iterable or AsyncIterable'
    );
  }
  function __(r, t) {
    let e = null,
      n = (t == null ? void 0 : t.type) === 'bytes' || !1,
      i = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
    return new ReadableStream(
      Object.assign(Object.assign({}, t), {
        start(o) {
          s(o, e || (e = r[Symbol.iterator]()));
        },
        pull(o) {
          e ? s(o, e) : o.close();
        },
        cancel() {
          (((e == null ? void 0 : e.return) && e.return()) || !0) && (e = null);
        },
      }),
      Object.assign({ highWaterMark: n ? i : void 0 }, t)
    );
    function s(o, a) {
      let c,
        u = null,
        p = o.desiredSize || null;
      for (; !(u = a.next(n ? p : null)).done; )
        if (
          (ArrayBuffer.isView(u.value) &&
            (c = L(u.value)) &&
            (p != null && n && (p = p - c.byteLength + 1), (u.value = c)),
          o.enqueue(u.value),
          p != null && --p <= 0)
        )
          return;
      o.close();
    }
  }
  function y_(r, t) {
    let e = null,
      n = (t == null ? void 0 : t.type) === 'bytes' || !1,
      i = (t == null ? void 0 : t.highWaterMark) || Math.pow(2, 24);
    return new ReadableStream(
      Object.assign(Object.assign({}, t), {
        start(o) {
          return I(this, void 0, void 0, function* () {
            yield s(o, e || (e = r[Symbol.asyncIterator]()));
          });
        },
        pull(o) {
          return I(this, void 0, void 0, function* () {
            e ? yield s(o, e) : o.close();
          });
        },
        cancel() {
          return I(this, void 0, void 0, function* () {
            (((e == null ? void 0 : e.return) && (yield e.return())) || !0) &&
              (e = null);
          });
        },
      }),
      Object.assign({ highWaterMark: n ? i : void 0 }, t)
    );
    function s(o, a) {
      return I(this, void 0, void 0, function* () {
        let c,
          u = null,
          p = o.desiredSize || null;
        for (; !(u = yield a.next(n ? p : null)).done; )
          if (
            (ArrayBuffer.isView(u.value) &&
              (c = L(u.value)) &&
              (p != null && n && (p = p - c.byteLength + 1), (u.value = c)),
            o.enqueue(u.value),
            p != null && --p <= 0)
          )
            return;
        o.close();
      });
    }
  }
  function Hu(r) {
    return new nc(r);
  }
  var nc = class {
      constructor(t) {
        (this._numChunks = 0), (this._finished = !1), (this._bufferedSize = 0);
        let {
            ['readableStrategy']: e,
            ['writableStrategy']: n,
            ['queueingStrategy']: i = 'count',
          } = t,
          s = il(t, [
            'readableStrategy',
            'writableStrategy',
            'queueingStrategy',
          ]);
        (this._controller = null),
          (this._builder = vn(s)),
          (this._getSize = i !== 'bytes' ? Cu : Pu);
        let { ['highWaterMark']: o = i === 'bytes' ? Math.pow(2, 14) : 1e3 } =
            Object.assign({}, e),
          { ['highWaterMark']: a = i === 'bytes' ? Math.pow(2, 14) : 1e3 } =
            Object.assign({}, n);
        (this.readable = new ReadableStream(
          {
            cancel: () => {
              this._builder.clear();
            },
            pull: (c) => {
              this._maybeFlush(this._builder, (this._controller = c));
            },
            start: (c) => {
              this._maybeFlush(this._builder, (this._controller = c));
            },
          },
          { highWaterMark: o, size: i !== 'bytes' ? Cu : Pu }
        )),
          (this.writable = new WritableStream(
            {
              abort: () => {
                this._builder.clear();
              },
              write: () => {
                this._maybeFlush(this._builder, this._controller);
              },
              close: () => {
                this._maybeFlush(this._builder.finish(), this._controller);
              },
            },
            {
              highWaterMark: a,
              size: (c) => this._writeValueAndReturnChunkSize(c),
            }
          ));
      }
      _writeValueAndReturnChunkSize(t) {
        let e = this._bufferedSize;
        return (
          (this._bufferedSize = this._getSize(this._builder.append(t))),
          this._bufferedSize - e
        );
      }
      _maybeFlush(t, e) {
        e != null &&
          (this._bufferedSize >= e.desiredSize &&
            ++this._numChunks &&
            this._enqueue(e, t.toVector()),
          t.finished &&
            ((t.length > 0 || this._numChunks === 0) &&
              ++this._numChunks &&
              this._enqueue(e, t.toVector()),
            !this._finished &&
              (this._finished = !0) &&
              this._enqueue(e, null)));
      }
      _enqueue(t, e) {
        (this._bufferedSize = 0),
          (this._controller = null),
          e == null ? t.close() : t.enqueue(e);
      }
    },
    Cu = (r) => {
      var t;
      return (t = r == null ? void 0 : r.length) !== null && t !== void 0
        ? t
        : 0;
    },
    Pu = (r) => {
      var t;
      return (t = r == null ? void 0 : r.byteLength) !== null && t !== void 0
        ? t
        : 0;
    };
  function ko(r, t) {
    let e = new br(),
      n = null,
      i = new ReadableStream({
        cancel() {
          return I(this, void 0, void 0, function* () {
            yield e.close();
          });
        },
        start(a) {
          return I(this, void 0, void 0, function* () {
            yield o(a, n || (n = yield s()));
          });
        },
        pull(a) {
          return I(this, void 0, void 0, function* () {
            n ? yield o(a, n) : a.close();
          });
        },
      });
    return {
      writable: new WritableStream(
        e,
        Object.assign({ highWaterMark: Math.pow(2, 14) }, r)
      ),
      readable: i,
    };
    function s() {
      return I(this, void 0, void 0, function* () {
        return yield (yield Tt.from(e)).open(t);
      });
    }
    function o(a, c) {
      return I(this, void 0, void 0, function* () {
        let u = a.desiredSize,
          p = null;
        for (; !(p = yield c.next()).done; )
          if ((a.enqueue(p.value), u != null && --u <= 0)) return;
        a.close();
      });
    }
  }
  function Co(r, t) {
    let e = new this(r),
      n = new be(e),
      i = new ReadableStream(
        {
          cancel() {
            return I(this, void 0, void 0, function* () {
              yield n.cancel();
            });
          },
          pull(o) {
            return I(this, void 0, void 0, function* () {
              yield s(o);
            });
          },
          start(o) {
            return I(this, void 0, void 0, function* () {
              yield s(o);
            });
          },
        },
        Object.assign({ highWaterMark: Math.pow(2, 14) }, t)
      );
    return { writable: new WritableStream(e, r), readable: i };
    function s(o) {
      return I(this, void 0, void 0, function* () {
        let a = null,
          c = o.desiredSize;
        for (; (a = yield n.read(c || null)); )
          if ((o.enqueue(a), c != null && (c -= a.byteLength) <= 0)) return;
        o.close();
      });
    }
  }
  function Po(r, t = 'stream') {
    return (t === 'stream' ? Vr : zr).writeAll(r).toUint8Array(!0);
  }
  var v_ = Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign(Object.assign({}, _a), Ha), Ra),
          ya
        ),
        fa
      ),
      Oa
    ),
    { compareSchemas: Fn, compareFields: hu, compareTypes: pu }
  );
  jt.toDOMStream = ku;
  bt.throughDOM = Hu;
  Tt.throughDOM = ko;
  sn.throughDOM = ko;
  vr.throughDOM = ko;
  Bn.throughDOM = Co;
  zr.throughDOM = Co;
  Vr.throughDOM = Co;
  function ni(r) {
    switch (r.typeId) {
      case f.Binary:
        return { sqlType: 'binary' };
      case f.Bool:
        return { sqlType: 'bool' };
      case f.Date:
        return { sqlType: 'date' };
      case f.DateDay:
        return { sqlType: 'date32[d]' };
      case f.DateMillisecond:
        return { sqlType: 'date64[ms]' };
      case f.Decimal: {
        let t = r;
        return { sqlType: 'decimal', precision: t.precision, scale: t.scale };
      }
      case f.Float:
        return { sqlType: 'float' };
      case f.Float16:
        return { sqlType: 'float16' };
      case f.Float32:
        return { sqlType: 'float32' };
      case f.Float64:
        return { sqlType: 'float64' };
      case f.Int:
        return { sqlType: 'int32' };
      case f.Int16:
        return { sqlType: 'int16' };
      case f.Int32:
        return { sqlType: 'int32' };
      case f.Int64:
        return { sqlType: 'int64' };
      case f.Uint16:
        return { sqlType: 'uint16' };
      case f.Uint32:
        return { sqlType: 'uint32' };
      case f.Uint64:
        return { sqlType: 'uint64' };
      case f.Uint8:
        return { sqlType: 'uint8' };
      case f.IntervalDayTime:
        return { sqlType: 'interval[dt]' };
      case f.IntervalYearMonth:
        return { sqlType: 'interval[m]' };
      case f.List:
        return { sqlType: 'list', valueType: ni(r.valueType) };
      case f.FixedSizeBinary:
        return { sqlType: 'fixedsizebinary', byteWidth: r.byteWidth };
      case f.Null:
        return { sqlType: 'null' };
      case f.Utf8:
        return { sqlType: 'utf8' };
      case f.Struct:
        return {
          sqlType: 'struct',
          fields: r.children.map((e) => Ho(e.name, e.type)),
        };
      case f.Map: {
        let t = r;
        return {
          sqlType: 'map',
          keyType: ni(t.keyType),
          valueType: ni(t.valueType),
        };
      }
      case f.Time:
        return { sqlType: 'time[s]' };
      case f.TimeMicrosecond:
        return { sqlType: 'time[us]' };
      case f.TimeMillisecond:
        return { sqlType: 'time[ms]' };
      case f.TimeNanosecond:
        return { sqlType: 'time[ns]' };
      case f.TimeSecond:
        return { sqlType: 'time[s]' };
      case f.Timestamp:
        return { sqlType: 'timestamp', timezone: r.timezone || void 0 };
      case f.TimestampSecond:
        return { sqlType: 'timestamp[s]', timezone: r.timezone || void 0 };
      case f.TimestampMicrosecond:
        return { sqlType: 'timestamp[us]', timezone: r.timezone || void 0 };
      case f.TimestampNanosecond:
        return { sqlType: 'timestamp[ns]', timezone: r.timezone || void 0 };
      case f.TimestampMillisecond:
        return { sqlType: 'timestamp[ms]', timezone: r.timezone || void 0 };
    }
    throw new Error(`unsupported arrow type: ${r.toString()}`);
  }
  function Ho(r, t) {
    let e = ni(t);
    return (e.name = r), e;
  }
  var Vo = class {
    constructor() {
      this._bindings = null;
      this._nextMessageId = 0;
    }
    log(t) {
      this.postMessage(
        {
          messageId: this._nextMessageId++,
          requestId: 0,
          type: 'LOG',
          data: t,
        },
        []
      );
    }
    sendOK(t) {
      this.postMessage(
        {
          messageId: this._nextMessageId++,
          requestId: t.messageId,
          type: 'OK',
          data: null,
        },
        []
      );
    }
    failWith(t, e) {
      let n = { name: e.name, message: e.message, stack: e.stack || void 0 };
      this.postMessage(
        {
          messageId: this._nextMessageId++,
          requestId: t.messageId,
          type: 'ERROR',
          data: n,
        },
        []
      );
    }
    async onMessage(t) {
      switch (t.type) {
        case 'PING':
          this.sendOK(t);
          return;
        case 'INSTANTIATE':
          this._bindings != null &&
            this.failWith(t, new Error('duckdb already initialized'));
          try {
            (this._bindings = await this.instantiate(
              t.data[0],
              t.data[1],
              (e) => {
                this.postMessage(
                  {
                    messageId: this._nextMessageId++,
                    requestId: t.messageId,
                    type: 'INSTANTIATE_PROGRESS',
                    data: e,
                  },
                  []
                );
              }
            )),
              this.sendOK(t);
          } catch (e) {
            (this._bindings = null), this.failWith(t, e);
          }
          return;
        default:
          break;
      }
      if (!this._bindings)
        return this.failWith(t, new Error('duckdb is not initialized'));
      try {
        switch (t.type) {
          case 'GET_VERSION':
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'VERSION_STRING',
                data: this._bindings.getVersion(),
              },
              []
            );
            break;
          case 'GET_FEATURE_FLAGS':
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'FEATURE_FLAGS',
                data: this._bindings.getFeatureFlags(),
              },
              []
            );
            break;
          case 'RESET':
            this._bindings.reset(), this.sendOK(t);
            break;
          case 'OPEN':
            this._bindings.open(t.data), this.sendOK(t);
            break;
          case 'DROP_FILE':
            this._bindings.dropFile(t.data), this.sendOK(t);
            break;
          case 'DROP_FILES':
            this._bindings.dropFiles(), this.sendOK(t);
            break;
          case 'FLUSH_FILES':
            this._bindings.flushFiles(), this.sendOK(t);
            break;
          case 'CONNECT': {
            let e = this._bindings.connect();
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'CONNECTION_INFO',
                data: e.useUnsafe((n, i) => i),
              },
              []
            );
            break;
          }
          case 'DISCONNECT':
            this._bindings.disconnect(t.data), this.sendOK(t);
            break;
          case 'CREATE_PREPARED': {
            let e = this._bindings.createPrepared(t.data[0], t.data[1]);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'PREPARED_STATEMENT_ID',
                data: e,
              },
              []
            );
            break;
          }
          case 'CLOSE_PREPARED': {
            this._bindings.closePrepared(t.data[0], t.data[1]), this.sendOK(t);
            break;
          }
          case 'RUN_PREPARED': {
            let e = this._bindings.runPrepared(t.data[0], t.data[1], t.data[2]);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'QUERY_RESULT',
                data: e,
              },
              [e.buffer]
            );
            break;
          }
          case 'RUN_QUERY': {
            let e = this._bindings.runQuery(t.data[0], t.data[1]);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'QUERY_RESULT',
                data: e,
              },
              [e.buffer]
            );
            break;
          }
          case 'SEND_PREPARED': {
            let e = this._bindings.sendPrepared(
              t.data[0],
              t.data[1],
              t.data[2]
            );
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'QUERY_RESULT_HEADER',
                data: e,
              },
              [e.buffer]
            );
            break;
          }
          case 'START_PENDING_QUERY': {
            let e = this._bindings.startPendingQuery(t.data[0], t.data[1]),
              n = [];
            e && n.push(e.buffer),
              this.postMessage(
                {
                  messageId: this._nextMessageId++,
                  requestId: t.messageId,
                  type: 'QUERY_RESULT_HEADER_OR_NULL',
                  data: e,
                },
                n
              );
            break;
          }
          case 'POLL_PENDING_QUERY': {
            let e = this._bindings.pollPendingQuery(t.data),
              n = [];
            e && n.push(e.buffer),
              this.postMessage(
                {
                  messageId: this._nextMessageId++,
                  requestId: t.messageId,
                  type: 'QUERY_RESULT_HEADER_OR_NULL',
                  data: e,
                },
                n
              );
            break;
          }
          case 'CANCEL_PENDING_QUERY': {
            let e = this._bindings.cancelPendingQuery(t.data);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'SUCCESS',
                data: e,
              },
              []
            );
            break;
          }
          case 'FETCH_QUERY_RESULTS': {
            let e = this._bindings.fetchQueryResults(t.data);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'QUERY_RESULT_CHUNK',
                data: e,
              },
              [e.buffer]
            );
            break;
          }
          case 'GET_TABLE_NAMES': {
            let e = this._bindings.getTableNames(t.data[0], t.data[1]);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'TABLE_NAMES',
                data: e,
              },
              []
            );
            break;
          }
          case 'GLOB_FILE_INFOS': {
            let e = this._bindings.globFiles(t.data);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'FILE_INFOS',
                data: e,
              },
              []
            );
            break;
          }
          case 'REGISTER_FILE_URL':
            this._bindings.registerFileURL(
              t.data[0],
              t.data[1],
              t.data[2],
              t.data[3]
            ),
              this.sendOK(t);
            break;
          case 'REGISTER_FILE_BUFFER':
            this._bindings.registerFileBuffer(t.data[0], t.data[1]),
              this.sendOK(t);
            break;
          case 'REGISTER_FILE_HANDLE':
            this._bindings.registerFileHandle(
              t.data[0],
              t.data[1],
              t.data[2],
              t.data[3]
            ),
              this.sendOK(t);
            break;
          case 'COPY_FILE_TO_PATH':
            this._bindings.copyFileToPath(t.data[0], t.data[1]), this.sendOK(t);
            break;
          case 'COPY_FILE_TO_BUFFER': {
            let e = this._bindings.copyFileToBuffer(t.data);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'FILE_BUFFER',
                data: e,
              },
              []
            );
            break;
          }
          case 'COLLECT_FILE_STATISTICS':
            this._bindings.collectFileStatistics(t.data[0], t.data[1]),
              this.sendOK(t);
            break;
          case 'EXPORT_FILE_STATISTICS': {
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'FILE_STATISTICS',
                data: this._bindings.exportFileStatistics(t.data),
              },
              []
            );
            break;
          }
          case 'INSERT_ARROW_FROM_IPC_STREAM': {
            this._bindings.insertArrowFromIPCStream(
              t.data[0],
              t.data[1],
              t.data[2]
            ),
              this.sendOK(t);
            break;
          }
          case 'IMPORT_CSV_FROM_PATH': {
            this._bindings.insertCSVFromPath(t.data[0], t.data[1], t.data[2]),
              this.sendOK(t);
            break;
          }
          case 'IMPORT_JSON_FROM_PATH': {
            this._bindings.insertJSONFromPath(t.data[0], t.data[1], t.data[2]),
              this.sendOK(t);
            break;
          }
          case 'TOKENIZE': {
            let e = this._bindings.tokenize(t.data);
            this.postMessage(
              {
                messageId: this._nextMessageId++,
                requestId: t.messageId,
                type: 'SCRIPT_TOKENS',
                data: e,
              },
              []
            );
            break;
          }
        }
      } catch (e) {
        return this.failWith(t, e);
      }
    }
  };
  var ju = {};
  var S_ = (() => {
      var r = ju.url;
      return function (t) {
        t = t || {};
        var e = typeof t < 'u' ? t : {},
          n,
          i;
        e.ready = new Promise(function (l, d) {
          (n = l), (i = d);
        });
        var s = Object.assign({}, e),
          o = [],
          a = './this.program',
          c = (l, d) => {
            throw d;
          },
          u = typeof window == 'object',
          p = typeof importScripts == 'function',
          b =
            typeof process == 'object' &&
            typeof process.versions == 'object' &&
            typeof process.versions.node == 'string',
          _ = '';
        function S(l) {
          return e.locateFile ? e.locateFile(l, _) : _ + l;
        }
        var J, Z, dt, Ft;
        function Zt(l) {
          if (l instanceof Qi) return;
          Pe('exiting due to exception: ' + l);
        }
        if (b) {
          p ? (_ = ic().dirname(_) + '/') : (_ = __dirname + '/');
          var oe, cn;
          typeof sa == 'function' && ((oe = zu()), (cn = ic())),
            (J = (l, d) => (
              (l = cn.normalize(l)), oe.readFileSync(l, d ? void 0 : 'utf8')
            )),
            (dt = (l) => {
              var d = J(l, !0);
              return d.buffer || (d = new Uint8Array(d)), d;
            }),
            (Z = (l, d, h) => {
              (l = cn.normalize(l)),
                oe.readFile(l, function (m, y) {
                  m ? h(m) : d(y.buffer);
                });
            }),
            process.argv.length > 1 &&
              (a = process.argv[1].replace(/\\/g, '/')),
            (o = process.argv.slice(2)),
            process.on('uncaughtException', function (l) {
              if (!(l instanceof Qi)) throw l;
            }),
            process.on('unhandledRejection', function (l) {
              throw l;
            }),
            (c = (l, d) => {
              if (_c()) throw ((process.exitCode = l), d);
              Zt(d), process.exit(l);
            }),
            (e.inspect = function () {
              return '[Emscripten Module object]';
            });
        } else
          (u || p) &&
            (p
              ? (_ = self.location.href)
              : typeof document < 'u' &&
                document.currentScript &&
                (_ = document.currentScript.src),
            r && (_ = r),
            _.indexOf('blob:') !== 0
              ? (_ = _.substr(0, _.replace(/[?#].*/, '').lastIndexOf('/') + 1))
              : (_ = ''),
            (J = (l) => {
              var d = new XMLHttpRequest();
              return d.open('GET', l, !1), d.send(null), d.responseText;
            }),
            p &&
              (dt = (l) => {
                var d = new XMLHttpRequest();
                return (
                  d.open('GET', l, !1),
                  (d.responseType = 'arraybuffer'),
                  d.send(null),
                  new Uint8Array(d.response)
                );
              }),
            (Z = (l, d, h) => {
              var m = new XMLHttpRequest();
              m.open('GET', l, !0),
                (m.responseType = 'arraybuffer'),
                (m.onload = () => {
                  if (m.status == 200 || (m.status == 0 && m.response)) {
                    d(m.response);
                    return;
                  }
                  h();
                }),
                (m.onerror = h),
                m.send(null);
            }),
            (Ft = (l) => (document.title = l)));
        var ii = e.print || console.log.bind(console),
          Pe = e.printErr || console.warn.bind(console);
        Object.assign(e, s),
          (s = null),
          e.arguments && (o = e.arguments),
          e.thisProgram && (a = e.thisProgram),
          e.quit && (c = e.quit);
        var jr;
        e.wasmBinary && (jr = e.wasmBinary);
        var si = e.noExitRuntime || !0;
        typeof WebAssembly != 'object' && Ve('no native wasm support detected');
        var q,
          Vt = !1,
          Xt;
        function Qt(l, d) {
          l || Ve(d);
        }
        var zt = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
        function Ut(l, d, h) {
          d >>>= 0;
          for (var m = d + h, y = d; l[y] && !(y >= m); ) ++y;
          if (y - d > 16 && l.buffer && zt) return zt.decode(l.subarray(d, y));
          for (var F = ''; d < y; ) {
            var v = l[d++];
            if (!(v & 128)) {
              F += String.fromCharCode(v);
              continue;
            }
            var w = l[d++] & 63;
            if ((v & 224) == 192) {
              F += String.fromCharCode(((v & 31) << 6) | w);
              continue;
            }
            var x = l[d++] & 63;
            if (
              ((v & 240) == 224
                ? (v = ((v & 15) << 12) | (w << 6) | x)
                : (v = ((v & 7) << 18) | (w << 12) | (x << 6) | (l[d++] & 63)),
              v < 65536)
            )
              F += String.fromCharCode(v);
            else {
              var Q = v - 65536;
              F += String.fromCharCode(55296 | (Q >> 10), 56320 | (Q & 1023));
            }
          }
          return F;
        }
        function rt(l, d) {
          return (l >>>= 0), l ? Ut($r, l, d) : '';
        }
        function ae(l, d, h, m) {
          if (((h >>>= 0), !(m > 0))) return 0;
          for (var y = h, F = h + m - 1, v = 0; v < l.length; ++v) {
            var w = l.charCodeAt(v);
            if (w >= 55296 && w <= 57343) {
              var x = l.charCodeAt(++v);
              w = (65536 + ((w & 1023) << 10)) | (x & 1023);
            }
            if (w <= 127) {
              if (h >= F) break;
              d[h++ >>> 0] = w;
            } else if (w <= 2047) {
              if (h + 1 >= F) break;
              (d[h++ >>> 0] = 192 | (w >> 6)), (d[h++ >>> 0] = 128 | (w & 63));
            } else if (w <= 65535) {
              if (h + 2 >= F) break;
              (d[h++ >>> 0] = 224 | (w >> 12)),
                (d[h++ >>> 0] = 128 | ((w >> 6) & 63)),
                (d[h++ >>> 0] = 128 | (w & 63));
            } else {
              if (h + 3 >= F) break;
              (d[h++ >>> 0] = 240 | (w >> 18)),
                (d[h++ >>> 0] = 128 | ((w >> 12) & 63)),
                (d[h++ >>> 0] = 128 | ((w >> 6) & 63)),
                (d[h++ >>> 0] = 128 | (w & 63));
            }
          }
          return (d[h >>> 0] = 0), h - y;
        }
        function Wr(l, d, h) {
          return ae(l, $r, d, h);
        }
        function td(l) {
          for (var d = 0, h = 0; h < l.length; ++h) {
            var m = l.charCodeAt(h);
            m <= 127
              ? d++
              : m <= 2047
              ? (d += 2)
              : m >= 55296 && m <= 57343
              ? ((d += 4), ++h)
              : (d += 3);
          }
          return d;
        }
        var uc, Dn, $r, oi, dc, A, He, ed, rd;
        function fc(l) {
          (uc = l),
            (e.HEAP8 = Dn = new Int8Array(l)),
            (e.HEAP16 = oi = new Int16Array(l)),
            (e.HEAP32 = A = new Int32Array(l)),
            (e.HEAPU8 = $r = new Uint8Array(l)),
            (e.HEAPU16 = dc = new Uint16Array(l)),
            (e.HEAPU32 = He = new Uint32Array(l)),
            (e.HEAPF32 = ed = new Float32Array(l)),
            (e.HEAPF64 = rd = new Float64Array(l));
        }
        var R_ = e.INITIAL_MEMORY || 16777216,
          nd,
          hc = [],
          pc = [],
          id = [],
          mc = [],
          sd = !1;
        function _c() {
          return si;
        }
        function od() {
          if (e.preRun)
            for (
              typeof e.preRun == 'function' && (e.preRun = [e.preRun]);
              e.preRun.length;

            )
              ud(e.preRun.shift());
          ts(hc);
        }
        function ad() {
          (sd = !0), ts(pc);
        }
        function cd() {
          ts(id);
        }
        function ld() {
          if (e.postRun)
            for (
              typeof e.postRun == 'function' && (e.postRun = [e.postRun]);
              e.postRun.length;

            )
              fd(e.postRun.shift());
          ts(mc);
        }
        function ud(l) {
          hc.unshift(l);
        }
        function dd(l) {
          pc.unshift(l);
        }
        function fd(l) {
          mc.unshift(l);
        }
        var ln = 0,
          Ko = null,
          ai = null;
        function hd(l) {
          ln++, e.monitorRunDependencies && e.monitorRunDependencies(ln);
        }
        function pd(l) {
          if (
            (ln--,
            e.monitorRunDependencies && e.monitorRunDependencies(ln),
            ln == 0 && (Ko !== null && (clearInterval(Ko), (Ko = null)), ai))
          ) {
            var d = ai;
            (ai = null), d();
          }
        }
        function Ve(l) {
          e.onAbort && e.onAbort(l),
            (l = 'Aborted(' + l + ')'),
            Pe(l),
            (Vt = !0),
            (Xt = 1),
            (l += '. Build with -sASSERTIONS for more info.'),
            Dc();
        }
        var md = 'data:application/octet-stream;base64,';
        function yc(l) {
          return l.startsWith(md);
        }
        var Te;
        e.locateFile
          ? ((Te = './duckdb-eh.wasm'), yc(Te) || (Te = S(Te)))
          : (Te = new URL('./duckdb-eh.wasm', ju.url).toString());
        function bc(l) {
          try {
            if (l == Te && jr) return new Uint8Array(jr);
            if (dt) return dt(l);
            throw 'both async and sync fetching of the wasm failed';
          } catch (d) {
            Ve(d);
          }
        }
        function _d() {
          return !jr && (u || p) && typeof fetch == 'function'
            ? fetch(Te, { credentials: 'same-origin' })
                .then(function (l) {
                  if (!l.ok)
                    throw "failed to load wasm binary file at '" + Te + "'";
                  return l.arrayBuffer();
                })
                .catch(function () {
                  return bc(Te);
                })
            : Promise.resolve().then(function () {
                return bc(Te);
              });
        }
        function yd() {
          var l = { a: zf };
          function d(v, w) {
            var x = v.exports;
            (e.asm = x),
              (q = e.asm.ia),
              fc(q.buffer),
              (nd = e.asm.la),
              dd(e.asm.ja),
              pd('wasm-instantiate');
          }
          hd('wasm-instantiate');
          function h(v) {
            d(v.instance);
          }
          function m(v) {
            return _d()
              .then(function (w) {
                return WebAssembly.instantiate(w, l);
              })
              .then(function (w) {
                return w;
              })
              .then(v, function (w) {
                Pe('failed to asynchronously prepare wasm: ' + w), Ve(w);
              });
          }
          function y() {
            return !jr &&
              typeof WebAssembly.instantiateStreaming == 'function' &&
              !yc(Te) &&
              !b &&
              typeof fetch == 'function'
              ? fetch(Te, { credentials: 'same-origin' }).then(function (v) {
                  var w = WebAssembly.instantiateStreaming(v, l);
                  return w.then(h, function (x) {
                    return (
                      Pe('wasm streaming compile failed: ' + x),
                      Pe('falling back to ArrayBuffer instantiation'),
                      m(h)
                    );
                  });
                })
              : m(h);
          }
          if (e.instantiateWasm)
            try {
              var F = e.instantiateWasm(l, d);
              return F;
            } catch (v) {
              Pe('Module.instantiateWasm callback failed with error: ' + v),
                i(v);
            }
          return y().catch(i), {};
        }
        function Qi(l) {
          (this.name = 'ExitStatus'),
            (this.message = 'Program terminated with exit(' + l + ')'),
            (this.status = l);
        }
        function ts(l) {
          for (; l.length > 0; ) l.shift()(e);
        }
        var un = {
          varargs: void 0,
          get: function () {
            un.varargs += 4;
            var l = A[(un.varargs - 4) >>> 2];
            return l;
          },
          getStr: function (l) {
            var d = rt(l);
            return d;
          },
        };
        function bd(l, d, h, m, y) {
          for (
            var F = 0,
              v = d ? A[d >>> 2] : 0,
              w = d ? A[(d + 4) >>> 2] : 0,
              x = h ? A[h >>> 2] : 0,
              Q = h ? A[(h + 4) >>> 2] : 0,
              st = m ? A[m >>> 2] : 0,
              ce = m ? A[(m + 4) >>> 2] : 0,
              at = 0,
              sr = 0,
              wt = 0,
              te = 0,
              le = 0,
              Fr = 0,
              g =
                (d ? A[d >>> 2] : 0) |
                (h ? A[h >>> 2] : 0) |
                (m ? A[m >>> 2] : 0),
              E =
                (d ? A[(d + 4) >>> 2] : 0) |
                (h ? A[(h + 4) >>> 2] : 0) |
                (m ? A[(m + 4) >>> 2] : 0),
              ut = function (Oh, Rh, Mh, Rc) {
                return Oh < 32 ? Rh & Rc : Mh & Rc;
              },
              ct = 0;
            ct < l;
            ct++
          ) {
            var ee = 1 << ct % 32;
            if (!!ut(ct, g, E, ee)) {
              var ui = un.getStreamFromFD(ct),
                ls = un.DEFAULT_POLLMASK;
              ui.stream_ops.poll && (ls = ui.stream_ops.poll(ui)),
                ls & 1 &&
                  ut(ct, v, w, ee) &&
                  (ct < 32 ? (at = at | ee) : (sr = sr | ee), F++),
                ls & 4 &&
                  ut(ct, x, Q, ee) &&
                  (ct < 32 ? (wt = wt | ee) : (te = te | ee), F++),
                ls & 2 &&
                  ut(ct, st, ce, ee) &&
                  (ct < 32 ? (le = le | ee) : (Fr = Fr | ee), F++);
            }
          }
          return (
            d && ((A[d >>> 2] = at), (A[(d + 4) >>> 2] = sr)),
            h && ((A[h >>> 2] = wt), (A[(h + 4) >>> 2] = te)),
            m && ((A[m >>> 2] = le), (A[(m + 4) >>> 2] = Fr)),
            F
          );
        }
        function gd() {
          Pe('missing function: $SOCKFS'), Ve(-1);
        }
        function gc() {
          Pe('missing function: $FS'), Ve(-1);
        }
        function ci(l) {
          var d = gd.getSocket(l);
          if (!d) throw new gc.ErrnoError(8);
          return d;
        }
        function Jo(l) {
          return (
            (l & 255) +
            '.' +
            ((l >> 8) & 255) +
            '.' +
            ((l >> 16) & 255) +
            '.' +
            ((l >> 24) & 255)
          );
        }
        function wc(l) {
          var d = '',
            h = 0,
            m = 0,
            y = 0,
            F = 0,
            v = 0,
            w = 0,
            x = [
              l[0] & 65535,
              l[0] >> 16,
              l[1] & 65535,
              l[1] >> 16,
              l[2] & 65535,
              l[2] >> 16,
              l[3] & 65535,
              l[3] >> 16,
            ],
            Q = !0,
            st = '';
          for (w = 0; w < 5; w++)
            if (x[w] !== 0) {
              Q = !1;
              break;
            }
          if (Q) {
            if (((st = Jo(x[6] | (x[7] << 16))), x[5] === -1))
              return (d = '::ffff:'), (d += st), d;
            if (x[5] === 0)
              return (
                (d = '::'),
                st === '0.0.0.0' && (st = ''),
                st === '0.0.0.1' && (st = '1'),
                (d += st),
                d
              );
          }
          for (h = 0; h < 8; h++)
            x[h] === 0 && (h - y > 1 && (v = 0), (y = h), v++),
              v > m && ((m = v), (F = h - m + 1));
          for (h = 0; h < 8; h++) {
            if (m > 1 && x[h] === 0 && h >= F && h < F + m) {
              h === F && ((d += ':'), F === 0 && (d += ':'));
              continue;
            }
            (d += Number(ea(x[h] & 65535)).toString(16)),
              (d += h < 7 ? ':' : '');
          }
          return d;
        }
        function vc(l, d) {
          var h = oi[l >>> 1],
            m = ea(dc[(l + 2) >>> 1]),
            y;
          switch (h) {
            case 2:
              if (d !== 16) return { errno: 28 };
              (y = A[(l + 4) >>> 2]), (y = Jo(y));
              break;
            case 10:
              if (d !== 28) return { errno: 28 };
              (y = [
                A[(l + 8) >>> 2],
                A[(l + 12) >>> 2],
                A[(l + 16) >>> 2],
                A[(l + 20) >>> 2],
              ]),
                (y = wc(y));
              break;
            default:
              return { errno: 5 };
          }
          return { family: h, addr: y, port: m };
        }
        function es(l) {
          for (var d = l.split('.'), h = 0; h < 4; h++) {
            var m = Number(d[h]);
            if (isNaN(m)) return null;
            d[h] = m;
          }
          return (d[0] | (d[1] << 8) | (d[2] << 16) | (d[3] << 24)) >>> 0;
        }
        function rs(l) {
          return parseInt(l);
        }
        function qo(l) {
          var d,
            h,
            m,
            y,
            F =
              /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
            v = [];
          if (!F.test(l)) return null;
          if (l === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
          for (
            l.startsWith('::')
              ? (l = l.replace('::', 'Z:'))
              : (l = l.replace('::', ':Z:')),
              l.indexOf('.') > 0
                ? ((l = l.replace(new RegExp('[.]', 'g'), ':')),
                  (d = l.split(':')),
                  (d[d.length - 4] =
                    rs(d[d.length - 4]) + rs(d[d.length - 3]) * 256),
                  (d[d.length - 3] =
                    rs(d[d.length - 2]) + rs(d[d.length - 1]) * 256),
                  (d = d.slice(0, d.length - 2)))
                : (d = l.split(':')),
              m = 0,
              y = 0,
              h = 0;
            h < d.length;
            h++
          )
            if (typeof d[h] == 'string')
              if (d[h] === 'Z') {
                for (y = 0; y < 8 - d.length + 1; y++) v[h + y] = 0;
                m = y - 1;
              } else v[h + m] = os(parseInt(d[h], 16));
            else v[h + m] = d[h];
          return [
            (v[1] << 16) | v[0],
            (v[3] << 16) | v[2],
            (v[5] << 16) | v[4],
            (v[7] << 16) | v[6],
          ];
        }
        var De = {
          address_map: { id: 1, addrs: {}, names: {} },
          lookup_name: function (l) {
            var d = es(l);
            if (d !== null || ((d = qo(l)), d !== null)) return l;
            var h;
            if (De.address_map.addrs[l]) h = De.address_map.addrs[l];
            else {
              var m = De.address_map.id++;
              Qt(m < 65535, 'exceeded max address mappings of 65535'),
                (h = '172.29.' + (m & 255) + '.' + (m & 65280)),
                (De.address_map.names[h] = l),
                (De.address_map.addrs[l] = h);
            }
            return h;
          },
          lookup_addr: function (l) {
            return De.address_map.names[l] ? De.address_map.names[l] : null;
          },
        };
        function Sc(l, d, h) {
          if (h && l === 0) return null;
          var m = vc(l, d);
          if (m.errno) throw new gc.ErrnoError(m.errno);
          return (m.addr = De.lookup_addr(m.addr) || m.addr), m;
        }
        function wd(l, d, h) {
          var m = ci(l),
            y = Sc(d, h);
          return m.sock_ops.bind(m, y.addr, y.port), 0;
        }
        function vd(l, d, h) {
          var m = ci(l),
            y = Sc(d, h);
          return m.sock_ops.connect(m, y.addr, y.port), 0;
        }
        function Sd(l, d, h, m) {}
        function Id(l, d, h) {
          return (un.varargs = h), 0;
        }
        function Fd(l, d) {}
        function Ad(l, d, h) {}
        function xd(l, d, h) {}
        function Ic(l, d) {
          return $r.fill(0, l, l + d), l;
        }
        function Zo(l, d, h, m, y) {
          switch (d) {
            case 2:
              (h = es(h)),
                Ic(l, 16),
                y && (A[y >>> 2] = 16),
                (oi[l >>> 1] = d),
                (A[(l + 4) >>> 2] = h),
                (oi[(l + 2) >>> 1] = os(m));
              break;
            case 10:
              (h = qo(h)),
                Ic(l, 28),
                y && (A[y >>> 2] = 28),
                (A[l >>> 2] = d),
                (A[(l + 8) >>> 2] = h[0]),
                (A[(l + 12) >>> 2] = h[1]),
                (A[(l + 16) >>> 2] = h[2]),
                (A[(l + 20) >>> 2] = h[3]),
                (oi[(l + 2) >>> 1] = os(m));
              break;
            default:
              return 5;
          }
          return 0;
        }
        function Bd(l, d, h) {
          var m = ci(l);
          if (!m.daddr) return -53;
          var y = Zo(d, m.family, De.lookup_name(m.daddr), m.dport, h);
          return 0;
        }
        function Td(l, d, h, m, y) {
          var F = ci(l);
          return d === 1 && h === 4
            ? ((A[m >>> 2] = F.error), (A[y >>> 2] = 4), (F.error = null), 0)
            : -50;
        }
        function Dd(l, d, h) {
          return (un.varargs = h), 0;
        }
        function Ed(l, d) {}
        function Od(l, d, h) {}
        function Rd(l, d, h, m) {}
        function Md(l, d, h, m) {
          un.varargs = m;
        }
        function Ud(l, d, h, m, y, F) {
          var v = ci(l),
            w = v.sock_ops.recvmsg(v, h);
          if (!w) return 0;
          if (y) var x = Zo(y, v.family, De.lookup_name(w.addr), w.port, F);
          return $r.set(w.buffer, d >>> 0), w.buffer.byteLength;
        }
        function Ld(l, d, h, m) {}
        function Nd(l) {}
        function kd(l, d, h, m, y, F) {}
        function Cd(l, d, h) {}
        function Pd(l, d) {}
        function Hd(l, d, h) {}
        function Vd(l) {}
        var Fc =
          'To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking';
        function zd(l, d) {
          Ve(Fc);
        }
        function jd(l, d) {
          Ve(Fc);
        }
        var Wd = !0;
        function $d() {
          return Wd;
        }
        function Yd() {
          Ve('');
        }
        function Xd(l, d) {
          return globalThis.DUCKDB_RUNTIME.createDirectory(e, l, d);
        }
        function Gd(l, d) {
          return globalThis.DUCKDB_RUNTIME.checkDirectory(e, l, d);
        }
        function Kd(l, d) {
          return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(e, l, d);
        }
        function Jd(l, d) {
          return globalThis.DUCKDB_RUNTIME.removeDirectory(e, l, d);
        }
        function qd(l) {
          return globalThis.DUCKDB_RUNTIME.closeFile(e, l);
        }
        function Zd(l, d) {
          return globalThis.DUCKDB_RUNTIME.checkFile(e, l, d);
        }
        function Qd(l) {
          return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(e, l);
        }
        function tf(l, d, h, m) {
          return globalThis.DUCKDB_RUNTIME.moveFile(e, l, d, h, m);
        }
        function ef(l, d) {
          return globalThis.DUCKDB_RUNTIME.openFile(e, l, d);
        }
        function rf(l, d, h, m) {
          return globalThis.DUCKDB_RUNTIME.readFile(e, l, d, h, m);
        }
        function nf(l, d) {
          return globalThis.DUCKDB_RUNTIME.truncateFile(e, l, d);
        }
        function sf(l, d, h, m) {
          return globalThis.DUCKDB_RUNTIME.writeFile(e, l, d, h, m);
        }
        function of(l) {
          return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(l);
        }
        function af(l, d) {
          return globalThis.DUCKDB_RUNTIME.glob(e, l, d);
        }
        function cf(l) {
          return globalThis.DUCKDB_RUNTIME.testPlatformFeature(e, l);
        }
        function lf(l, d, h, m, y, F) {
          return globalThis.DUCKDB_RUNTIME.callScalarUDF(e, l, d, h, m, y, F);
        }
        function uf() {
          return Date.now();
        }
        function Ac() {
          return 4294901760;
        }
        function df() {
          return Ac();
        }
        var Qo;
        b
          ? (Qo = () => {
              var l = process.hrtime();
              return l[0] * 1e3 + l[1] / 1e6;
            })
          : (Qo = () => performance.now());
        function ff(l, d, h) {
          $r.copyWithin(l >>> 0, d >>> 0, (d + h) >>> 0);
        }
        function hf(l) {
          try {
            return q.grow((l - uc.byteLength + 65535) >>> 16), fc(q.buffer), 1;
          } catch (d) {}
        }
        function pf(l) {
          var d = $r.length;
          l = l >>> 0;
          var h = Ac();
          if (l > h) return !1;
          let m = (x, Q) => x + ((Q - (x % Q)) % Q);
          for (var y = 1; y <= 4; y *= 2) {
            var F = d * (1 + 0.2 / y);
            F = Math.min(F, l + 100663296);
            var v = Math.min(h, m(Math.max(l, F), 65536)),
              w = hf(v);
            if (w) return !0;
          }
          return !1;
        }
        var ta = {};
        function mf() {
          return a || './this.program';
        }
        function li() {
          if (!li.strings) {
            var l =
                (
                  (typeof navigator == 'object' &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  'C'
                ).replace('-', '_') + '.UTF-8',
              d = {
                USER: 'web_user',
                LOGNAME: 'web_user',
                PATH: '/',
                PWD: '/',
                HOME: '/home/web_user',
                LANG: l,
                _: mf(),
              };
            for (var h in ta) ta[h] === void 0 ? delete d[h] : (d[h] = ta[h]);
            var m = [];
            for (var h in d) m.push(h + '=' + d[h]);
            li.strings = m;
          }
          return li.strings;
        }
        function _f(l, d, h) {
          for (var m = 0; m < l.length; ++m) Dn[d++ >>> 0] = l.charCodeAt(m);
          h || (Dn[d >>> 0] = 0);
        }
        function yf(l, d) {
          var h = 0;
          return (
            li().forEach(function (m, y) {
              var F = d + h;
              (He[(l + y * 4) >>> 2] = F), _f(m, F), (h += m.length + 1);
            }),
            0
          );
        }
        function bf(l, d) {
          var h = li();
          He[l >>> 2] = h.length;
          var m = 0;
          return (
            h.forEach(function (y) {
              m += y.length + 1;
            }),
            (He[d >>> 2] = m),
            0
          );
        }
        function gf(l) {
          return 52;
        }
        function wf(l, d) {
          var h = l == 1 || l == 2 ? 2 : Ve();
          return (Dn[d >>> 0] = h), 0;
        }
        function vf(l, d, h, m, y, F) {
          return 52;
        }
        function Sf(l, d, h, m, y, F) {
          return 52;
        }
        function If(l, d, h, m) {
          return 52;
        }
        function Ff(l, d, h, m, y) {
          return 70;
        }
        function Af(l) {
          return 52;
        }
        var xf = [null, [], []];
        function Bf(l, d) {
          var h = xf[l];
          d === 0 || d === 10
            ? ((l === 1 ? ii : Pe)(Ut(h, 0)), (h.length = 0))
            : h.push(d);
        }
        function Tf(l, d, h, m) {
          for (var y = 0, F = 0; F < h; F++) {
            var v = He[d >>> 2],
              w = He[(d + 4) >>> 2];
            d += 8;
            for (var x = 0; x < w; x++) Bf(l, $r[(v + x) >>> 0]);
            y += w;
          }
          return (He[m >>> 2] = y), 0;
        }
        function Df(l, d, h, m) {
          var y = 0,
            F = 0,
            v = 0,
            w = 0,
            x = 0,
            Q = 0,
            st;
          function ce(at, sr, wt, te, le, Fr) {
            var g, E, ut, ct;
            return (
              (E = at === 10 ? 28 : 16),
              (le = at === 10 ? wc(le) : Jo(le)),
              (g = ra(E)),
              (ct = Zo(g, at, le, Fr)),
              Qt(!ct),
              (ut = ra(32)),
              (A[(ut + 4) >>> 2] = at),
              (A[(ut + 8) >>> 2] = sr),
              (A[(ut + 12) >>> 2] = wt),
              (A[(ut + 24) >>> 2] = te),
              (He[(ut + 20) >>> 2] = g),
              at === 10 ? (A[(ut + 16) >>> 2] = 28) : (A[(ut + 16) >>> 2] = 16),
              (A[(ut + 28) >>> 2] = 0),
              ut
            );
          }
          if (
            (h &&
              ((v = A[h >>> 2]),
              (w = A[(h + 4) >>> 2]),
              (x = A[(h + 8) >>> 2]),
              (Q = A[(h + 12) >>> 2])),
            x && !Q && (Q = x === 2 ? 17 : 6),
            !x && Q && (x = Q === 17 ? 2 : 1),
            Q === 0 && (Q = 6),
            x === 0 && (x = 1),
            !l && !d)
          )
            return -2;
          if (v & -1088 || (h !== 0 && A[h >>> 2] & 2 && !l)) return -1;
          if (v & 32) return -2;
          if (x !== 0 && x !== 1 && x !== 2) return -7;
          if (w !== 0 && w !== 2 && w !== 10) return -6;
          if (d && ((d = rt(d)), (F = parseInt(d, 10)), isNaN(F)))
            return v & 1024 ? -2 : -8;
          if (!l)
            return (
              w === 0 && (w = 2),
              (v & 1) === 0 &&
                (w === 2 ? (y = ss(2130706433)) : (y = [0, 0, 0, 1])),
              (st = ce(w, x, Q, null, y, F)),
              (He[m >>> 2] = st),
              0
            );
          if (((l = rt(l)), (y = es(l)), y !== null))
            if (w === 0 || w === 2) w = 2;
            else if (w === 10 && v & 8) (y = [0, 0, ss(65535), y]), (w = 10);
            else return -2;
          else if (((y = qo(l)), y !== null))
            if (w === 0 || w === 10) w = 10;
            else return -2;
          return y != null
            ? ((st = ce(w, x, Q, l, y, F)), (He[m >>> 2] = st), 0)
            : v & 4
            ? -2
            : ((l = De.lookup_name(l)),
              (y = es(l)),
              w === 0 ? (w = 2) : w === 10 && (y = [0, 0, ss(65535), y]),
              (st = ce(w, x, Q, null, y, F)),
              (He[m >>> 2] = st),
              0);
        }
        function Ef() {
          if (
            typeof crypto == 'object' &&
            typeof crypto.getRandomValues == 'function'
          ) {
            var l = new Uint8Array(1);
            return () => (crypto.getRandomValues(l), l[0]);
          } else if (b)
            try {
              var d = sa('crypto');
              return () => d.randomBytes(1)[0];
            } catch (h) {}
          return () => Ve('randomDevice');
        }
        function ns(l, d) {
          ns.randomDevice || (ns.randomDevice = Ef());
          for (var h = 0; h < d; h++) Dn[(l + h) >>> 0] = ns.randomDevice();
          return 0;
        }
        function Of(l, d, h, m, y, F, v) {
          var w = vc(l, d);
          if (w.errno) return -6;
          var x = w.port,
            Q = w.addr,
            st = !1;
          if (h && m) {
            var ce;
            if (v & 1 || !(ce = De.lookup_addr(Q))) {
              if (v & 8) return -2;
            } else Q = ce;
            var at = Wr(Q, h, m);
            at + 1 >= m && (st = !0);
          }
          if (y && F) {
            x = '' + x;
            var at = Wr(x, y, F);
            at + 1 >= F && (st = !0);
          }
          return st ? -12 : 0;
        }
        function is(l) {
          return l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0);
        }
        function Rf(l, d) {
          for (var h = 0, m = 0; m <= d; h += l[m++]);
          return h;
        }
        var xc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Bc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Mf(l, d) {
          for (var h = new Date(l.getTime()); d > 0; ) {
            var m = is(h.getFullYear()),
              y = h.getMonth(),
              F = (m ? xc : Bc)[y];
            if (d > F - h.getDate())
              (d -= F - h.getDate() + 1),
                h.setDate(1),
                y < 11
                  ? h.setMonth(y + 1)
                  : (h.setMonth(0), h.setFullYear(h.getFullYear() + 1));
            else return h.setDate(h.getDate() + d), h;
          }
          return h;
        }
        function Uf(l, d, h) {
          var m = h > 0 ? h : td(l) + 1,
            y = new Array(m),
            F = ae(l, y, 0, y.length);
          return d && (y.length = F), y;
        }
        function Tc(l, d) {
          Dn.set(l, d >>> 0);
        }
        function Lf(l, d, h, m) {
          var y = A[(m + 40) >>> 2],
            F = {
              tm_sec: A[m >>> 2],
              tm_min: A[(m + 4) >>> 2],
              tm_hour: A[(m + 8) >>> 2],
              tm_mday: A[(m + 12) >>> 2],
              tm_mon: A[(m + 16) >>> 2],
              tm_year: A[(m + 20) >>> 2],
              tm_wday: A[(m + 24) >>> 2],
              tm_yday: A[(m + 28) >>> 2],
              tm_isdst: A[(m + 32) >>> 2],
              tm_gmtoff: A[(m + 36) >>> 2],
              tm_zone: y ? rt(y) : '',
            },
            v = rt(h),
            w = {
              '%c': '%a %b %d %H:%M:%S %Y',
              '%D': '%m/%d/%y',
              '%F': '%Y-%m-%d',
              '%h': '%b',
              '%r': '%I:%M:%S %p',
              '%R': '%H:%M',
              '%T': '%H:%M:%S',
              '%x': '%m/%d/%y',
              '%X': '%H:%M:%S',
              '%Ec': '%c',
              '%EC': '%C',
              '%Ex': '%m/%d/%y',
              '%EX': '%H:%M:%S',
              '%Ey': '%y',
              '%EY': '%Y',
              '%Od': '%d',
              '%Oe': '%e',
              '%OH': '%H',
              '%OI': '%I',
              '%Om': '%m',
              '%OM': '%M',
              '%OS': '%S',
              '%Ou': '%u',
              '%OU': '%U',
              '%OV': '%V',
              '%Ow': '%w',
              '%OW': '%W',
              '%Oy': '%y',
            };
          for (var x in w) v = v.replace(new RegExp(x, 'g'), w[x]);
          var Q = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            st = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ];
          function ce(g, E, ut) {
            for (
              var ct = typeof g == 'number' ? g.toString() : g || '';
              ct.length < E;

            )
              ct = ut[0] + ct;
            return ct;
          }
          function at(g, E) {
            return ce(g, E, '0');
          }
          function sr(g, E) {
            function ut(ee) {
              return ee < 0 ? -1 : ee > 0 ? 1 : 0;
            }
            var ct;
            return (
              (ct = ut(g.getFullYear() - E.getFullYear())) === 0 &&
                (ct = ut(g.getMonth() - E.getMonth())) === 0 &&
                (ct = ut(g.getDate() - E.getDate())),
              ct
            );
          }
          function wt(g) {
            switch (g.getDay()) {
              case 0:
                return new Date(g.getFullYear() - 1, 11, 29);
              case 1:
                return g;
              case 2:
                return new Date(g.getFullYear(), 0, 3);
              case 3:
                return new Date(g.getFullYear(), 0, 2);
              case 4:
                return new Date(g.getFullYear(), 0, 1);
              case 5:
                return new Date(g.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(g.getFullYear() - 1, 11, 30);
            }
          }
          function te(g) {
            var E = Mf(new Date(g.tm_year + 1900, 0, 1), g.tm_yday),
              ut = new Date(E.getFullYear(), 0, 4),
              ct = new Date(E.getFullYear() + 1, 0, 4),
              ee = wt(ut),
              ui = wt(ct);
            return sr(ee, E) <= 0
              ? sr(ui, E) <= 0
                ? E.getFullYear() + 1
                : E.getFullYear()
              : E.getFullYear() - 1;
          }
          var le = {
            '%a': function (g) {
              return Q[g.tm_wday].substring(0, 3);
            },
            '%A': function (g) {
              return Q[g.tm_wday];
            },
            '%b': function (g) {
              return st[g.tm_mon].substring(0, 3);
            },
            '%B': function (g) {
              return st[g.tm_mon];
            },
            '%C': function (g) {
              var E = g.tm_year + 1900;
              return at((E / 100) | 0, 2);
            },
            '%d': function (g) {
              return at(g.tm_mday, 2);
            },
            '%e': function (g) {
              return ce(g.tm_mday, 2, ' ');
            },
            '%g': function (g) {
              return te(g).toString().substring(2);
            },
            '%G': function (g) {
              return te(g);
            },
            '%H': function (g) {
              return at(g.tm_hour, 2);
            },
            '%I': function (g) {
              var E = g.tm_hour;
              return E == 0 ? (E = 12) : E > 12 && (E -= 12), at(E, 2);
            },
            '%j': function (g) {
              return at(
                g.tm_mday + Rf(is(g.tm_year + 1900) ? xc : Bc, g.tm_mon - 1),
                3
              );
            },
            '%m': function (g) {
              return at(g.tm_mon + 1, 2);
            },
            '%M': function (g) {
              return at(g.tm_min, 2);
            },
            '%n': function () {
              return `
`;
            },
            '%p': function (g) {
              return g.tm_hour >= 0 && g.tm_hour < 12 ? 'AM' : 'PM';
            },
            '%S': function (g) {
              return at(g.tm_sec, 2);
            },
            '%t': function () {
              return '	';
            },
            '%u': function (g) {
              return g.tm_wday || 7;
            },
            '%U': function (g) {
              var E = g.tm_yday + 7 - g.tm_wday;
              return at(Math.floor(E / 7), 2);
            },
            '%V': function (g) {
              var E = Math.floor((g.tm_yday + 7 - ((g.tm_wday + 6) % 7)) / 7);
              if (((g.tm_wday + 371 - g.tm_yday - 2) % 7 <= 2 && E++, E)) {
                if (E == 53) {
                  var ct = (g.tm_wday + 371 - g.tm_yday) % 7;
                  ct != 4 && (ct != 3 || !is(g.tm_year)) && (E = 1);
                }
              } else {
                E = 52;
                var ut = (g.tm_wday + 7 - g.tm_yday - 1) % 7;
                (ut == 4 || (ut == 5 && is((g.tm_year % 400) - 1))) && E++;
              }
              return at(E, 2);
            },
            '%w': function (g) {
              return g.tm_wday;
            },
            '%W': function (g) {
              var E = g.tm_yday + 7 - ((g.tm_wday + 6) % 7);
              return at(Math.floor(E / 7), 2);
            },
            '%y': function (g) {
              return (g.tm_year + 1900).toString().substring(2);
            },
            '%Y': function (g) {
              return g.tm_year + 1900;
            },
            '%z': function (g) {
              var E = g.tm_gmtoff,
                ut = E >= 0;
              return (
                (E = Math.abs(E) / 60),
                (E = (E / 60) * 100 + (E % 60)),
                (ut ? '+' : '-') + String('0000' + E).slice(-4)
              );
            },
            '%Z': function (g) {
              return g.tm_zone;
            },
            '%%': function () {
              return '%';
            },
          };
          v = v.replace(/%%/g, '\0\0');
          for (var x in le)
            v.includes(x) && (v = v.replace(new RegExp(x, 'g'), le[x](F)));
          v = v.replace(/\0\0/g, '%');
          var Fr = Uf(v, !1);
          return Fr.length > d ? 0 : (Tc(Fr, l), Fr.length - 1);
        }
        function Nf(l, d, h, m, y) {
          return Lf(l, d, h, m);
        }
        function kf(l) {
          (Xt = l),
            _c() || (e.onExit && e.onExit(l), (Vt = !0)),
            c(l, new Qi(l));
        }
        function Cf(l, d) {
          (Xt = l), kf(l);
        }
        function Pf(l) {
          if (l instanceof Qi || l == 'unwind') return Xt;
          c(1, l);
        }
        function Hf(l) {
          var d = e['_' + l];
          return d;
        }
        function Vf(l, d, h, m, y) {
          var F = {
            string: (wt) => {
              var te = 0;
              if (wt != null && wt !== 0) {
                var le = (wt.length << 2) + 1;
                (te = as(le)), Wr(wt, te, le);
              }
              return te;
            },
            array: (wt) => {
              var te = as(wt.length);
              return Tc(wt, te), te;
            },
          };
          function v(wt) {
            return d === 'string' ? rt(wt) : d === 'boolean' ? Boolean(wt) : wt;
          }
          var w = Hf(l),
            x = [],
            Q = 0;
          if (m)
            for (var st = 0; st < m.length; st++) {
              var ce = F[h[st]];
              ce
                ? (Q === 0 && (Q = na()), (x[st] = ce(m[st])))
                : (x[st] = m[st]);
            }
          var at = w.apply(null, x);
          function sr(wt) {
            return Q !== 0 && ia(Q), v(wt);
          }
          return (at = sr(at)), at;
        }
        var zf = {
            Z: bd,
            ba: wd,
            aa: vd,
            U: Sd,
            a: Id,
            T: Fd,
            t: Ad,
            O: xd,
            X: Bd,
            Y: Td,
            n: Dd,
            Q: Ed,
            P: Od,
            R: Rd,
            o: Md,
            _: Ud,
            L: Ld,
            i: Nd,
            $: kd,
            k: Cd,
            S: Pd,
            j: Hd,
            ca: Vd,
            ea: zd,
            da: jd,
            p: $d,
            c: Yd,
            D: Xd,
            F: Gd,
            B: Kd,
            C: Jd,
            g: qd,
            z: Zd,
            s: Qd,
            A: tf,
            H: ef,
            d: rf,
            G: nf,
            h: sf,
            I: of,
            y: af,
            f: cf,
            J: lf,
            q: uf,
            r: df,
            V: Qo,
            ga: ff,
            ha: pf,
            E: yf,
            M: bf,
            b: gf,
            fa: wf,
            w: vf,
            v: Sf,
            m: If,
            x: Ff,
            N: Af,
            e: Tf,
            l: Df,
            K: ns,
            W: Of,
            u: Nf,
          },
          M_ = yd(),
          jf = (e.___wasm_call_ctors = function () {
            return (jf = e.___wasm_call_ctors = e.asm.ja).apply(
              null,
              arguments
            );
          }),
          Wf = (e._main = function () {
            return (Wf = e._main = e.asm.ka).apply(null, arguments);
          }),
          $f = (e._duckdb_web_fs_glob_add_path = function () {
            return ($f = e._duckdb_web_fs_glob_add_path = e.asm.ma).apply(
              null,
              arguments
            );
          }),
          Yf = (e._duckdb_web_clear_response = function () {
            return (Yf = e._duckdb_web_clear_response = e.asm.na).apply(
              null,
              arguments
            );
          }),
          Xf = (e._duckdb_web_fail_with = function () {
            return (Xf = e._duckdb_web_fail_with = e.asm.oa).apply(
              null,
              arguments
            );
          }),
          Gf = (e._duckdb_web_reset = function () {
            return (Gf = e._duckdb_web_reset = e.asm.pa).apply(null, arguments);
          }),
          Kf = (e._duckdb_web_connect = function () {
            return (Kf = e._duckdb_web_connect = e.asm.qa).apply(
              null,
              arguments
            );
          }),
          Jf = (e._duckdb_web_disconnect = function () {
            return (Jf = e._duckdb_web_disconnect = e.asm.ra).apply(
              null,
              arguments
            );
          }),
          qf = (e._duckdb_web_flush_files = function () {
            return (qf = e._duckdb_web_flush_files = e.asm.sa).apply(
              null,
              arguments
            );
          }),
          Zf = (e._duckdb_web_flush_file = function () {
            return (Zf = e._duckdb_web_flush_file = e.asm.ta).apply(
              null,
              arguments
            );
          }),
          Qf = (e._duckdb_web_open = function () {
            return (Qf = e._duckdb_web_open = e.asm.ua).apply(null, arguments);
          }),
          th = (e._duckdb_web_get_global_file_info = function () {
            return (th = e._duckdb_web_get_global_file_info = e.asm.va).apply(
              null,
              arguments
            );
          }),
          eh = (e._duckdb_web_collect_file_stats = function () {
            return (eh = e._duckdb_web_collect_file_stats = e.asm.wa).apply(
              null,
              arguments
            );
          }),
          rh = (e._duckdb_web_export_file_stats = function () {
            return (rh = e._duckdb_web_export_file_stats = e.asm.xa).apply(
              null,
              arguments
            );
          }),
          nh = (e._duckdb_web_fs_drop_file = function () {
            return (nh = e._duckdb_web_fs_drop_file = e.asm.ya).apply(
              null,
              arguments
            );
          }),
          ih = (e._duckdb_web_fs_drop_files = function () {
            return (ih = e._duckdb_web_fs_drop_files = e.asm.za).apply(
              null,
              arguments
            );
          }),
          sh = (e._duckdb_web_fs_glob_file_infos = function () {
            return (sh = e._duckdb_web_fs_glob_file_infos = e.asm.Aa).apply(
              null,
              arguments
            );
          }),
          oh = (e._duckdb_web_fs_get_file_info_by_id = function () {
            return (oh = e._duckdb_web_fs_get_file_info_by_id = e.asm.Ba).apply(
              null,
              arguments
            );
          }),
          ah = (e._duckdb_web_fs_get_file_info_by_name = function () {
            return (ah = e._duckdb_web_fs_get_file_info_by_name =
              e.asm.Ca).apply(null, arguments);
          }),
          ch = (e._duckdb_web_fs_register_file_url = function () {
            return (ch = e._duckdb_web_fs_register_file_url = e.asm.Da).apply(
              null,
              arguments
            );
          }),
          lh = (e._duckdb_web_fs_register_file_buffer = function () {
            return (lh = e._duckdb_web_fs_register_file_buffer =
              e.asm.Ea).apply(null, arguments);
          }),
          uh = (e._duckdb_web_copy_file_to_buffer = function () {
            return (uh = e._duckdb_web_copy_file_to_buffer = e.asm.Fa).apply(
              null,
              arguments
            );
          }),
          dh = (e._duckdb_web_copy_file_to_path = function () {
            return (dh = e._duckdb_web_copy_file_to_path = e.asm.Ga).apply(
              null,
              arguments
            );
          }),
          fh = (e._duckdb_web_get_version = function () {
            return (fh = e._duckdb_web_get_version = e.asm.Ha).apply(
              null,
              arguments
            );
          }),
          hh = (e._duckdb_web_get_feature_flags = function () {
            return (hh = e._duckdb_web_get_feature_flags = e.asm.Ia).apply(
              null,
              arguments
            );
          }),
          ph = (e._duckdb_web_tokenize = function () {
            return (ph = e._duckdb_web_tokenize = e.asm.Ja).apply(
              null,
              arguments
            );
          }),
          mh = (e._duckdb_web_udf_scalar_create = function () {
            return (mh = e._duckdb_web_udf_scalar_create = e.asm.Ka).apply(
              null,
              arguments
            );
          }),
          _h = (e._duckdb_web_prepared_create = function () {
            return (_h = e._duckdb_web_prepared_create = e.asm.La).apply(
              null,
              arguments
            );
          }),
          yh = (e._duckdb_web_prepared_close = function () {
            return (yh = e._duckdb_web_prepared_close = e.asm.Ma).apply(
              null,
              arguments
            );
          }),
          bh = (e._duckdb_web_prepared_run = function () {
            return (bh = e._duckdb_web_prepared_run = e.asm.Na).apply(
              null,
              arguments
            );
          }),
          gh = (e._duckdb_web_prepared_send = function () {
            return (gh = e._duckdb_web_prepared_send = e.asm.Oa).apply(
              null,
              arguments
            );
          }),
          wh = (e._duckdb_web_query_run = function () {
            return (wh = e._duckdb_web_query_run = e.asm.Pa).apply(
              null,
              arguments
            );
          }),
          vh = (e._duckdb_web_pending_query_start = function () {
            return (vh = e._duckdb_web_pending_query_start = e.asm.Qa).apply(
              null,
              arguments
            );
          }),
          Sh = (e._duckdb_web_pending_query_poll = function () {
            return (Sh = e._duckdb_web_pending_query_poll = e.asm.Ra).apply(
              null,
              arguments
            );
          }),
          Ih = (e._duckdb_web_pending_query_cancel = function () {
            return (Ih = e._duckdb_web_pending_query_cancel = e.asm.Sa).apply(
              null,
              arguments
            );
          }),
          Fh = (e._duckdb_web_query_fetch_results = function () {
            return (Fh = e._duckdb_web_query_fetch_results = e.asm.Ta).apply(
              null,
              arguments
            );
          }),
          Ah = (e._duckdb_web_get_tablenames = function () {
            return (Ah = e._duckdb_web_get_tablenames = e.asm.Ua).apply(
              null,
              arguments
            );
          }),
          xh = (e._duckdb_web_insert_arrow_from_ipc_stream = function () {
            return (xh = e._duckdb_web_insert_arrow_from_ipc_stream =
              e.asm.Va).apply(null, arguments);
          }),
          Bh = (e._duckdb_web_insert_csv_from_path = function () {
            return (Bh = e._duckdb_web_insert_csv_from_path = e.asm.Wa).apply(
              null,
              arguments
            );
          }),
          Th = (e._duckdb_web_insert_json_from_path = function () {
            return (Th = e._duckdb_web_insert_json_from_path = e.asm.Xa).apply(
              null,
              arguments
            );
          }),
          ss = (e._htonl = function () {
            return (ss = e._htonl = e.asm.Ya).apply(null, arguments);
          }),
          os = (e._htons = function () {
            return (os = e._htons = e.asm.Za).apply(null, arguments);
          }),
          ea = (e._ntohs = function () {
            return (ea = e._ntohs = e.asm._a).apply(null, arguments);
          }),
          ra = (e._malloc = function () {
            return (ra = e._malloc = e.asm.$a).apply(null, arguments);
          }),
          Dh = (e._free = function () {
            return (Dh = e._free = e.asm.ab).apply(null, arguments);
          }),
          Dc = (e.___trap = function () {
            return (Dc = e.___trap = e.asm.bb).apply(null, arguments);
          }),
          na = (e.stackSave = function () {
            return (na = e.stackSave = e.asm.cb).apply(null, arguments);
          }),
          ia = (e.stackRestore = function () {
            return (ia = e.stackRestore = e.asm.db).apply(null, arguments);
          }),
          as = (e.stackAlloc = function () {
            return (as = e.stackAlloc = e.asm.eb).apply(null, arguments);
          });
        (e.stackAlloc = as),
          (e.stackSave = na),
          (e.stackRestore = ia),
          (e.ccall = Vf);
        var cs;
        ai = function l() {
          cs || Ec(), cs || (ai = l);
        };
        function Eh(l) {
          var d = e._main,
            h = 0,
            m = 0;
          try {
            var y = d(h, m);
            return Cf(y, !0), y;
          } catch (F) {
            return Pf(F);
          }
        }
        function Ec(l) {
          if (((l = l || o), ln > 0 || (od(), ln > 0))) return;
          function d() {
            cs ||
              ((cs = !0),
              (e.calledRun = !0),
              !Vt &&
                (ad(),
                cd(),
                n(e),
                e.onRuntimeInitialized && e.onRuntimeInitialized(),
                Oc && Eh(l),
                ld()));
          }
          e.setStatus
            ? (e.setStatus('Running...'),
              setTimeout(function () {
                setTimeout(function () {
                  e.setStatus('');
                }, 1),
                  d();
              }, 1))
            : d();
        }
        if (e.preInit)
          for (
            typeof e.preInit == 'function' && (e.preInit = [e.preInit]);
            e.preInit.length > 0;

          )
            e.preInit.pop()();
        var Oc = !0;
        return e.noInitialRun && (Oc = !1), Ec(), t.ready;
      };
    })(),
    Wu = S_;
  var zo = class {
      constructor(t, e) {
        (this._bindings = t), (this._conn = e);
      }
      close() {
        this._bindings.disconnect(this._conn);
      }
      useUnsafe(t) {
        return t(this._bindings, this._conn);
      }
      query(t) {
        let e = this._bindings.runQuery(this._conn, t),
          n = Tt.from(e);
        return (
          console.assert(n.isSync()), console.assert(n.isFile()), new At(n)
        );
      }
      async send(t) {
        let e = this._bindings.startPendingQuery(this._conn, t);
        for (; e == null; )
          e = await new Promise((s, o) => {
            try {
              s(this._bindings.pollPendingQuery(this._conn));
            } catch (a) {
              o(a);
            }
          });
        let n = new jo(this._bindings, this._conn, e),
          i = Tt.from(n);
        return console.assert(i.isSync()), console.assert(i.isStream()), i;
      }
      cancelSent() {
        return this._bindings.cancelPendingQuery(this._conn);
      }
      getTableNames(t) {
        return this._bindings.getTableNames(this._conn, t);
      }
      prepare(t) {
        let e = this._bindings.createPrepared(this._conn, t);
        return new sc(this._bindings, this._conn, e);
      }
      createScalarFunction(t, e, n) {
        this._bindings.createScalarFunction(this._conn, t, e, n);
      }
      insertArrowTable(t, e) {
        let n = Po(t, 'stream');
        this.insertArrowFromIPCStream(n, e);
      }
      insertArrowFromIPCStream(t, e) {
        this._bindings.insertArrowFromIPCStream(this._conn, t, e);
      }
      insertCSVFromPath(t, e) {
        this._bindings.insertCSVFromPath(this._conn, t, e);
      }
      insertJSONFromPath(t, e) {
        this._bindings.insertJSONFromPath(this._conn, t, e);
      }
    },
    jo = class {
      constructor(t, e, n) {
        this.bindings = t;
        this.conn = e;
        this.header = n;
        (this._first = !0), (this._depleted = !1);
      }
      next() {
        if (this._first)
          return (this._first = !1), { done: !1, value: this.header };
        if (this._depleted) return { done: !0, value: null };
        let t = this.bindings.fetchQueryResults(this.conn);
        return (
          (this._depleted = t.length == 0), { done: this._depleted, value: t }
        );
      }
      [Symbol.iterator]() {
        return this;
      }
    },
    sc = class {
      constructor(t, e, n) {
        (this.bindings = t), (this.connectionId = e), (this.statementId = n);
      }
      close() {
        this.bindings.closePrepared(this.connectionId, this.statementId);
      }
      query(...t) {
        let e = this.bindings.runPrepared(
            this.connectionId,
            this.statementId,
            t
          ),
          n = Tt.from(e);
        return (
          console.assert(n.isSync()), console.assert(n.isFile()), new At(n)
        );
      }
      send(...t) {
        let e = this.bindings.sendPrepared(
            this.connectionId,
            this.statementId,
            t
          ),
          n = new jo(this.bindings, this.connectionId, e),
          i = Tt.from(n);
        return console.assert(i.isSync()), console.assert(i.isStream()), i;
      }
    };
  var Xu = new TextEncoder(),
    $u = new TextDecoder('utf-8');
  function oc(r, t, e) {
    let n = Xu.encode(e),
      i = r._malloc(n.byteLength),
      s = r.HEAPU8.subarray(i, i + n.byteLength);
    s.set(n),
      (r.HEAPF64[(t >> 3) + 0] = 1),
      (r.HEAPF64[(t >> 3) + 1] = i),
      (r.HEAPF64[(t >> 3) + 2] = s.byteLength);
  }
  function cc(r) {
    switch (r) {
      case 'UINT8':
      case 'INT8':
        return 1;
      case 'INT32':
      case 'FLOAT':
        return 4;
      case 'INT64':
      case 'UINT64':
      case 'DOUBLE':
      case 'VARCHAR':
        return 8;
      default:
        return 0;
    }
  }
  function ac(r, t, e, n) {
    let i = r.HEAPU8.subarray(t, t + n * cc(e));
    switch (e) {
      case 'UINT8':
        return new Uint8Array(i.buffer, i.byteOffset, n);
      case 'INT8':
        return new Int8Array(i.buffer, i.byteOffset, n);
      case 'INT32':
        return new Int32Array(i.buffer, i.byteOffset, n);
      case 'FLOAT':
        return new Float32Array(i.buffer, i.byteOffset, n);
      case 'DOUBLE':
        return new Float64Array(i.buffer, i.byteOffset, n);
      case 'VARCHAR':
        return new Float64Array(i.buffer, i.byteOffset, n);
      default:
        return new Array(0);
    }
  }
  function Yu(r, t, e) {
    let n = r.HEAPU8.subarray(t, t + e);
    return new Uint8Array(n.buffer, n.byteOffset, e);
  }
  function Wo(r, t, e) {
    let n = r.HEAPU8.subarray(t, t + e * 8);
    return new Float64Array(n.buffer, n.byteOffset, e);
  }
  function Gu(r, t, e, n, i, s, o, a) {
    try {
      let c = r._udfFunctions.get(n);
      if (!c) {
        oc(t, e, 'Unknown UDF with id: ' + n);
        return;
      }
      let u = $u.decode(t.HEAPU8.subarray(i, i + s)),
        p = JSON.parse(u),
        b = Wo(t, o, a / 8),
        _ = (q) => {
          var Xt;
          let Vt = null;
          switch (
            (q.validityBuffer !== void 0 &&
              (Vt = Yu(t, b[q.validityBuffer], p.rows)),
            q.physicalType)
          ) {
            case 'VARCHAR': {
              if (q.dataBuffer === null || q.dataBuffer === void 0)
                throw new Error(
                  'malformed data view, expected data buffer for VARCHAR argument'
                );
              if (q.lengthBuffer === null || q.lengthBuffer === void 0)
                throw new Error(
                  'malformed data view, expected data length buffer for VARCHAR argument'
                );
              let Qt = ac(t, b[q.dataBuffer], q.physicalType, p.rows),
                zt = [],
                Ut = Wo(t, b[q.lengthBuffer], p.rows);
              for (let rt = 0; rt < p.rows; ++rt) {
                if (Vt != null && !Vt[rt]) {
                  zt.push(null);
                  continue;
                }
                let ae = t.HEAPU8.subarray(Qt[rt], Qt[rt] + Ut[rt]),
                  Wr = $u.decode(ae);
                zt.push(Wr);
              }
              return (rt) => zt[rt];
            }
            case 'STRUCT': {
              let Qt = {},
                zt = [];
              for (
                let Ut = 0;
                Ut < (((Xt = q.children) == null ? void 0 : Xt.length) || 0);
                ++Ut
              ) {
                let rt = q.children[Ut],
                  ae = _(rt);
                zt.push((Wr) => {
                  Qt[rt.name] = ae(Wr);
                });
              }
              return Vt != null
                ? (Ut) => {
                    if (!Vt[Ut]) return null;
                    for (let rt of zt) rt(Ut);
                    return Qt;
                  }
                : (Ut) => {
                    for (let rt of zt) rt(Ut);
                    return Qt;
                  };
            }
            default: {
              if (q.dataBuffer === void 0)
                throw new Error(
                  'malformed data view, expected data buffer for argument of type: ' +
                    q.physicalType
                );
              let Qt = ac(t, b[q.dataBuffer], q.physicalType, p.rows);
              return Vt != null
                ? (zt) => (Vt[zt] ? Qt[zt] : null)
                : (zt) => Qt[zt];
            }
          }
        },
        S = [];
      for (let q = 0; q < p.args.length; ++q) S.push(_(p.args[q]));
      let J = p.rows * cc(p.ret.physicalType),
        Z = t._malloc(J),
        dt = ac(t, Z, p.ret.physicalType, p.rows),
        Ft = t._malloc(p.rows),
        Zt = Yu(t, Ft, p.rows);
      if (dt.length == 0 || Zt.length == 0) {
        oc(t, e, "Can't create physical arrays for result");
        return;
      }
      let oe = dt;
      p.ret.physicalType == 'VARCHAR' && (oe = new Array(p.rows));
      let cn = [];
      for (let q = 0; q < p.args.length; ++q) cn.push(null);
      for (let q = 0; q < p.rows; ++q) {
        for (let Xt = 0; Xt < p.args.length; ++Xt) cn[Xt] = S[Xt](q);
        let Vt = c.func(...cn);
        (oe[q] = Vt), (Zt[q] = Vt == null ? 0 : 1);
      }
      let ii = 0;
      switch (p.ret.physicalType) {
        case 'VARCHAR': {
          let q = new Array(0);
          ii = t._malloc(p.rows * cc('DOUBLE'));
          let Vt = Wo(t, ii, p.rows),
            Xt = 0;
          for (let rt = 0; rt < p.rows; ++rt) {
            let ae = Xu.encode(oe[rt] || '');
            q.push(ae), (Vt[rt] = ae.length), (Xt += ae.length);
          }
          let Qt = t._malloc(Xt),
            zt = t.HEAPU8.subarray(Qt, Qt + Xt),
            Ut = 0;
          for (let rt = 0; rt < p.rows; ++rt) {
            dt[rt] = Ut;
            let ae = q[rt];
            zt.subarray(Ut, Ut + ae.length).set(ae), (Ut += ae.length);
          }
        }
      }
      let Pe = 3 * 8,
        jr = t._malloc(Pe),
        si = Wo(t, jr, 3);
      (si[0] = Z),
        (si[1] = Ft),
        (si[2] = ii),
        (t.HEAPF64[(e >> 3) + 0] = 0),
        (t.HEAPF64[(e >> 3) + 1] = jr),
        (t.HEAPF64[(e >> 3) + 2] = 0);
    } catch (c) {
      oc(t, e, c.toString());
    }
  }
  function F_() {
    let r = new TextDecoder();
    return (t) => (
      typeof SharedArrayBuffer < 'u' &&
        t.buffer instanceof SharedArrayBuffer &&
        (t = new Uint8Array(t)),
      r.decode(t)
    );
  }
  var A_ = F_();
  function ir(r, t) {
    console.error(`FAIL WITH: ${t}`),
      r.ccall('duckdb_web_fail_with', null, ['string'], [t]);
  }
  function Tn(r, t, e) {
    let n = r.HEAPU8.subarray(t, t + e),
      i = new Uint8Array(new ArrayBuffer(n.byteLength));
    return i.set(n), i;
  }
  function z(r, t, e) {
    return A_(r.HEAPU8.subarray(t, t + e));
  }
  function ot(r, t, e, n) {
    let i = r.stackSave(),
      s = r.stackAlloc(3 * 8);
    e.unshift('number'), n.unshift(s), r.ccall(t, null, e, n);
    let o = r.HEAPF64[(s >> 3) + 0],
      a = r.HEAPF64[(s >> 3) + 1],
      c = r.HEAPF64[(s >> 3) + 2];
    return r.stackRestore(i), [o, a, c];
  }
  function _t(r) {
    r.ccall('duckdb_web_clear_response', null, [], []);
  }
  var $o = class {
    constructor(t) {
      let e = new Float64Array(t.buffer, t.byteOffset, t.byteLength / 8),
        n = new Uint8Array(new ArrayBuffer(t.byteLength));
      n.set(t.subarray(7 * 8)),
        (this.totalFileReadsCold = e[0]),
        (this.totalFileReadsAhead = e[1]),
        (this.totalFileReadsCached = e[2]),
        (this.totalFileWrites = e[3]),
        (this.totalPageAccesses = e[4]),
        (this.totalPageLoads = e[5]),
        (this.blockSize = e[6]),
        (this.blockStats = n);
    }
    getBlockStats(t, e) {
      return (
        (e = e || {
          file_reads_cold: 0,
          file_reads_ahead: 0,
          file_reads_cached: 0,
          file_writes: 0,
          page_accesses: 0,
          page_loads: 0,
        }),
        (e.file_writes = this.blockStats[t * 3 + 0] & 15),
        (e.file_reads_cold = this.blockStats[t * 3 + 0] >> 4),
        (e.file_reads_ahead = this.blockStats[t * 3 + 1] & 15),
        (e.file_reads_cached = this.blockStats[t * 3 + 1] >> 4),
        (e.page_accesses = this.blockStats[t * 3 + 1] & 15),
        (e.page_loads = this.blockStats[t * 3 + 1] >> 4),
        e
      );
    }
  };
  var x_ = new TextEncoder();
  var Yo = class {
    constructor(t, e) {
      this._instance = null;
      this._initPromise = null;
      this._initPromiseResolver = () => {};
      this.onInstantiationProgress = [];
      (this._logger = t), (this._runtime = e), (this._nextUDFId = 1);
    }
    get logger() {
      return this._logger;
    }
    get mod() {
      return this._instance;
    }
    get pthread() {
      return this.mod.PThread || null;
    }
    async instantiate(t = (e) => {}) {
      return this._instance != null
        ? this
        : (this._initPromise != null &&
            (this.onInstantiationProgress.push(t), await this._initPromise),
          (this._initPromise = new Promise((e) => {
            this._initPromiseResolver = e;
          })),
          (this.onInstantiationProgress = [t]),
          (this._instance = await this.instantiateImpl({
            print: console.log.bind(console),
            printErr: console.log.bind(console),
            onRuntimeInitialized: this._initPromiseResolver,
          })),
          await this._initPromise,
          (this._initPromise = null),
          (this.onInstantiationProgress = this.onInstantiationProgress.filter(
            (e) => e != t
          )),
          this);
    }
    open(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_open',
        ['string'],
        [JSON.stringify(t)]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      _t(this.mod);
    }
    reset() {
      let [t, e, n] = ot(this.mod, 'duckdb_web_reset', [], []);
      if (t !== 0) throw new Error(z(this.mod, e, n));
      _t(this.mod);
    }
    getVersion() {
      let [t, e, n] = ot(this.mod, 'duckdb_web_get_version', [], []);
      if (t !== 0) throw new Error(z(this.mod, e, n));
      let i = z(this.mod, e, n);
      return _t(this.mod), i;
    }
    getFeatureFlags() {
      return this.mod.ccall('duckdb_web_get_feature_flags', 'number', [], []);
    }
    tokenize(t) {
      let [e, n, i] = ot(this.mod, 'duckdb_web_tokenize', ['string'], [t]);
      if (e !== 0) throw new Error(z(this.mod, n, i));
      let s = z(this.mod, n, i);
      return _t(this.mod), JSON.parse(s);
    }
    connect() {
      let t = this.mod.ccall('duckdb_web_connect', 'number', [], []);
      return new zo(this, t);
    }
    disconnect(t) {
      if (
        (this.mod.ccall('duckdb_web_disconnect', null, ['number'], [t]),
        this.pthread)
      )
        for (let e of [
          ...this.pthread.runningWorkers,
          ...this.pthread.unusedWorkers,
        ])
          e.postMessage({ cmd: 'dropUDFFunctions', connectionId: t });
    }
    runQuery(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_query_run',
        ['number', 'string'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      let o = Tn(this.mod, i, s);
      return _t(this.mod), o;
    }
    startPendingQuery(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_pending_query_start',
        ['number', 'string'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      if (i == 0) return null;
      let o = Tn(this.mod, i, s);
      return _t(this.mod), o;
    }
    pollPendingQuery(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_pending_query_poll',
        ['number'],
        [t]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      if (n == 0) return null;
      let s = Tn(this.mod, n, i);
      return _t(this.mod), s;
    }
    cancelPendingQuery(t) {
      return this.mod.ccall(
        'duckdb_web_pending_query_cancel',
        'boolean',
        ['number'],
        [t]
      );
    }
    fetchQueryResults(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_query_fetch_results',
        ['number'],
        [t]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      let s = Tn(this.mod, n, i);
      return _t(this.mod), s;
    }
    getTableNames(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_get_tablenames',
        ['number', 'string'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      let o = z(this.mod, i, s);
      return _t(this.mod), JSON.parse(o);
    }
    createScalarFunction(t, e, n, i) {
      let s = { functionId: this._nextUDFId, name: e, returnType: ni(n) },
        o = {
          functionId: s.functionId,
          connectionId: t,
          name: e,
          returnType: n,
          func: i,
        };
      this._nextUDFId += 1;
      let [a, c, u] = ot(
        this.mod,
        'duckdb_web_udf_scalar_create',
        ['number', 'string'],
        [t, JSON.stringify(s)]
      );
      if (a !== 0) throw new Error(z(this.mod, c, u));
      if (
        (_t(this.mod),
        (globalThis.DUCKDB_RUNTIME._udfFunctions = (
          globalThis.DUCKDB_RUNTIME._udfFunctions || new Map()
        ).set(o.functionId, o)),
        this.pthread)
      )
        for (let p of [
          ...this.pthread.runningWorkers,
          ...this.pthread.unusedWorkers,
        ])
          p.postMessage({ cmd: 'registerUDFFunction', udf: o });
    }
    createPrepared(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_prepared_create',
        ['number', 'string'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      return _t(this.mod), i;
    }
    closePrepared(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_prepared_close',
        ['number', 'number'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      _t(this.mod);
    }
    runPrepared(t, e, n) {
      let [i, s, o] = ot(
        this.mod,
        'duckdb_web_prepared_run',
        ['number', 'number', 'string'],
        [t, e, JSON.stringify(n)]
      );
      if (i !== 0) throw new Error(z(this.mod, s, o));
      let a = Tn(this.mod, s, o);
      return _t(this.mod), a;
    }
    sendPrepared(t, e, n) {
      let [i, s, o] = ot(
        this.mod,
        'duckdb_web_prepared_send',
        ['number', 'number', 'string'],
        [t, e, JSON.stringify(n)]
      );
      if (i !== 0) throw new Error(z(this.mod, s, o));
      let a = Tn(this.mod, s, o);
      return _t(this.mod), a;
    }
    insertArrowFromIPCStream(t, e, n) {
      if (e.length == 0) return;
      let i = this.mod._malloc(e.length);
      this.mod.HEAPU8.subarray(i, i + e.length).set(e);
      let o = n ? JSON.stringify(n) : '',
        [a, c, u] = ot(
          this.mod,
          'duckdb_web_insert_arrow_from_ipc_stream',
          ['number', 'number', 'number', 'string'],
          [t, i, e.length, o]
        );
      if (a !== 0) throw new Error(z(this.mod, c, u));
    }
    insertCSVFromPath(t, e, n) {
      if (n.columns !== void 0) {
        n.columnsFlat = [];
        for (let u in n.columns) n.columnsFlat.push(Ho(u, n.columns[u]));
      }
      let i = { ...n };
      (i.columns = i.columnsFlat), delete i.columnsFlat;
      let s = JSON.stringify(i),
        [o, a, c] = ot(
          this.mod,
          'duckdb_web_insert_csv_from_path',
          ['number', 'string', 'string'],
          [t, e, s]
        );
      if (o !== 0) throw new Error(z(this.mod, a, c));
    }
    insertJSONFromPath(t, e, n) {
      if (n.columns !== void 0) {
        n.columnsFlat = [];
        for (let u in n.columns) n.columnsFlat.push(Ho(u, n.columns[u]));
      }
      let i = { ...n };
      (i.columns = i.columnsFlat), delete i.columnsFlat;
      let s = JSON.stringify(i),
        [o, a, c] = ot(
          this.mod,
          'duckdb_web_insert_json_from_path',
          ['number', 'string', 'string'],
          [t, e, s]
        );
      if (o !== 0) throw new Error(z(this.mod, a, c));
    }
    globFiles(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_fs_glob_file_infos',
        ['string'],
        [t]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      let s = z(this.mod, n, i);
      _t(this.mod);
      let o = JSON.parse(s);
      return o == null ? [] : o;
    }
    registerFileURL(t, e, n, i = !1) {
      e === void 0 && (e = t);
      let [s, o, a] = ot(
        this.mod,
        'duckdb_web_fs_register_file_url',
        ['string', 'string'],
        [t, e, n, i]
      );
      if (s !== 0) throw new Error(z(this.mod, o, a));
      _t(this.mod);
    }
    registerFileText(t, e) {
      let n = x_.encode(e);
      this.registerFileBuffer(t, n);
    }
    registerFileBuffer(t, e) {
      let n = this.mod._malloc(e.length);
      this.mod.HEAPU8.subarray(n, n + e.length).set(e);
      let [s, o, a] = ot(
        this.mod,
        'duckdb_web_fs_register_file_buffer',
        ['string', 'number', 'number'],
        [t, n, e.length]
      );
      if (s !== 0) throw new Error(z(this.mod, o, a));
      _t(this.mod);
    }
    registerFileHandle(t, e, n, i) {
      let [s, o, a] = ot(
        this.mod,
        'duckdb_web_fs_register_file_url',
        ['string', 'string', 'number', 'boolean'],
        [t, t, n, i]
      );
      if (s !== 0) throw new Error(z(this.mod, o, a));
      if (
        (_t(this.mod),
        (globalThis.DUCKDB_RUNTIME._files = (
          globalThis.DUCKDB_RUNTIME._files || new Map()
        ).set(t, e)),
        this.pthread)
      ) {
        for (let c of this.pthread.runningWorkers)
          c.postMessage({
            cmd: 'registerFileHandle',
            fileName: t,
            fileHandle: e,
          });
        for (let c of this.pthread.unusedWorkers)
          c.postMessage({ cmd: 'dropFileHandle', fileName: t });
      }
    }
    dropFile(t) {
      let [e, n, i] = ot(this.mod, 'duckdb_web_fs_drop_file', ['string'], [t]);
      if (e !== 0) throw new Error(z(this.mod, n, i));
      _t(this.mod);
    }
    dropFiles() {
      let [t, e, n] = ot(this.mod, 'duckdb_web_fs_drop_files', [], []);
      if (t !== 0) throw new Error(z(this.mod, e, n));
      _t(this.mod);
    }
    flushFiles() {
      this.mod.ccall('duckdb_web_flush_files', null, [], []);
    }
    copyFileToPath(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_copy_file_to_path',
        ['string', 'string'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
      _t(this.mod);
    }
    copyFileToBuffer(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_copy_file_to_buffer',
        ['string'],
        [t]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      let s = this.mod.HEAPU8.subarray(n, n + i),
        o = new Uint8Array(s.length);
      return o.set(s), _t(this.mod), o;
    }
    collectFileStatistics(t, e) {
      let [n, i, s] = ot(
        this.mod,
        'duckdb_web_collect_file_stats',
        ['string', 'boolean'],
        [t, e]
      );
      if (n !== 0) throw new Error(z(this.mod, i, s));
    }
    exportFileStatistics(t) {
      let [e, n, i] = ot(
        this.mod,
        'duckdb_web_export_file_stats',
        ['string'],
        [t]
      );
      if (e !== 0) throw new Error(z(this.mod, n, i));
      return new $o(this.mod.HEAPU8.subarray(n, n + i));
    }
  };
  var Xo = class extends Yo {
    constructor(e, n, i, s) {
      super(e, n);
      (this.mainModuleURL = i), (this.pthreadWorkerURL = s);
    }
    locateFile(e, n) {
      if (e.endsWith('.wasm')) return this.mainModuleURL;
      if (e.endsWith('.worker.js')) {
        if (!this.pthreadWorkerURL)
          throw new Error('Missing DuckDB worker URL!');
        return this.pthreadWorkerURL;
      }
      throw new Error(
        `WASM instantiation requested unexpected file: prefix=${n} path=${e}`
      );
    }
    instantiateWasm(e, n) {
      globalThis.DUCKDB_RUNTIME = this._runtime;
      let i = this.onInstantiationProgress;
      if (WebAssembly.instantiateStreaming)
        if (typeof TransformStream == 'function') {
          let o = (async () => {
            var Z;
            let a = new Request(this.mainModuleURL),
              c = await fetch(a),
              u = c.headers.get('content-length'),
              p = (u && parseInt(u, 10)) || 0,
              b = new Date(),
              _ = {
                startedAt: b,
                updatedAt: b,
                bytesTotal: p || 0,
                bytesLoaded: 0,
              },
              S = {
                transform(dt, Ft) {
                  _.bytesLoaded += dt.byteLength;
                  let Zt = new Date();
                  if (Zt.getTime() - _.updatedAt.getTime() < 20) {
                    (_.updatedAt = Zt), Ft.enqueue(dt);
                    return;
                  }
                  for (let oe of i) oe(_);
                  Ft.enqueue(dt);
                },
              },
              J = new TransformStream(S);
            return new Response(
              (Z = c.body) == null ? void 0 : Z.pipeThrough(J),
              c
            );
          })();
          WebAssembly.instantiateStreaming(o, e).then((a) => {
            n(a.instance, a.module);
          });
        } else {
          console.warn(
            'instantiating without progress handler since transform streams are unavailable'
          );
          let s = new Request(this.mainModuleURL);
          WebAssembly.instantiateStreaming(fetch(s), e).then((o) => {
            n(o.instance, o.module);
          });
        }
      else if (typeof XMLHttpRequest == 'function') {
        let s = new XMLHttpRequest(),
          o = this.mainModuleURL,
          a = new Date(),
          c = { startedAt: a, updatedAt: a, bytesTotal: 0, bytesLoaded: 0 };
        s.open('GET', o),
          (s.responseType = 'arraybuffer'),
          (s.onerror = (u) => {
            throw (
              (this.logger.log({
                timestamp: new Date(),
                level: 4,
                origin: 3,
                topic: 5,
                event: 2,
                value: 'Failed to load WASM: ' + u,
              }),
              new Error(u.toString()))
            );
          }),
          (s.onprogress = (u) => {
            (c.bytesTotal = u.total), (c.bytesLoaded = u.loaded);
            let p = new Date();
            if (p.getTime() - c.updatedAt.getTime() < 20) {
              c.updatedAt = p;
              return;
            }
            for (let b of i) b(c);
          }),
          (s.onload = () => {
            WebAssembly.instantiate(s.response, e)
              .then((u) => {
                n(u.instance, u.module);
              })
              .catch((u) => {
                throw (
                  (this.logger.log({
                    timestamp: new Date(),
                    level: 4,
                    origin: 3,
                    topic: 5,
                    event: 2,
                    value: 'Failed to instantiate WASM: ' + u,
                  }),
                  new Error(u))
                );
              });
          }),
          s.send();
      } else
        console.warn(
          'instantiating with manual fetch since streaming instantiation and xhrs are unavailable'
        ),
          (async () => {
            let o = new Request(this.mainModuleURL),
              c = await (await fetch(o)).arrayBuffer();
            WebAssembly.instantiate(c, e).then((u) => {
              n(u.instance, u.module);
            });
          })();
      return [];
    }
  };
  var Go = class extends Xo {
    constructor(t, e, n, i = null) {
      super(t, e, n, i);
    }
    instantiateImpl(t) {
      return Wu({
        ...t,
        instantiateWasm: this.instantiateWasm.bind(this),
        locateFile: this.locateFile.bind(this),
      });
    }
  };
  var an = Uc(Ku()),
    Ju = function (r, t, e) {
      var n;
      if (
        (n = r == null ? void 0 : r.endpoint) != null &&
        n.startsWith('http')
      ) {
        let i = `${r == null ? void 0 : r.endpoint}`,
          s = i.indexOf('://') + 3;
        return i.substring(s);
      } else
        return r != null && r.endpoint
          ? `${e}.${r == null ? void 0 : r.endpoint}`
          : `${e}.s3.amazonaws.com`;
    };
  function B_(r, t, e) {
    var s, o, a, c;
    let n = qu(t),
      i = n.path;
    return (
      Zu(r) && (i = `/${n.bucket}${i}`),
      {
        url: i,
        query: '',
        host: Ju(r, t, n.bucket),
        region: (s = r == null ? void 0 : r.region) != null ? s : '',
        service: 's3',
        method: e,
        accessKeyId: (o = r == null ? void 0 : r.accessKeyId) != null ? o : '',
        secretAccessKey:
          (a = r == null ? void 0 : r.secretAccessKey) != null ? a : '',
        sessionToken:
          (c = r == null ? void 0 : r.sessionToken) != null ? c : '',
        dateNow: new Date().toISOString().replace(/-/g, '').split('T')[0],
        datetimeNow:
          new Date()
            .toISOString()
            .replace(/-/g, '')
            .replace(/:/g, '')
            .split('.')[0] + 'Z',
      }
    );
  }
  function T_(r, t = !1) {
    let e = '0123456789ABCDEF',
      n = '';
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      (s >= 'A' && s <= 'Z') ||
      (s >= 'a' && s <= 'z') ||
      (s >= '0' && s <= '9') ||
      s == '_' ||
      s == '-' ||
      s == '~' ||
      s == '.'
        ? (n += s)
        : s == '/'
        ? t
          ? (n += '%2F')
          : (n += s)
        : ((n += '%'),
          (n += e[s.charCodeAt(0) >> 4]),
          (n += e[s.charCodeAt(0) & 15]));
    }
    return n;
  }
  function D_(r, t = null) {
    var J;
    let e =
        (J = t == null ? void 0 : t.contentHash) != null
          ? J
          : 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      n = new Map();
    n.set('x-amz-date', r.datetimeNow),
      n.set('x-amz-content-sha256', e),
      r.sessionToken && n.set('x-amz-security-token', r.sessionToken);
    let i = '';
    t != null && t.contentType && (i += 'content-type;'),
      (i += 'host;x-amz-content-sha256;x-amz-date'),
      r.sessionToken && (i += ';x-amz-security-token');
    let s =
      r.method +
      `
` +
      T_(r.url) +
      `
` +
      r.query;
    t != null &&
      t.contentType &&
      (s +=
        `
content-type:` + (t == null ? void 0 : t.contentType)),
      (s +=
        `
host:` +
        r.host +
        `
x-amz-content-sha256:` +
        e +
        `
x-amz-date:` +
        r.datetimeNow),
      r.sessionToken &&
        r.sessionToken.length > 0 &&
        (s +=
          `
x-amz-security-token:` + r.sessionToken),
      (s +=
        `

` +
        i +
        `
` +
        e);
    let o = (0, an.sha256)(s),
      a =
        `AWS4-HMAC-SHA256
` +
        r.datetimeNow +
        `
` +
        r.dateNow +
        '/' +
        r.region +
        '/' +
        r.service +
        `/aws4_request
` +
        o,
      c = 'AWS4' + r.secretAccessKey,
      u = an.sha256.hmac.arrayBuffer(c, r.dateNow),
      p = an.sha256.hmac.arrayBuffer(u, r.region),
      b = an.sha256.hmac.arrayBuffer(p, r.service),
      _ = an.sha256.hmac.arrayBuffer(b, 'aws4_request'),
      S = an.sha256.hmac(_, a);
    return (
      n.set(
        'Authorization',
        'AWS4-HMAC-SHA256 Credential=' +
          r.accessKeyId +
          '/' +
          r.dateNow +
          '/' +
          r.region +
          '/' +
          r.service +
          '/aws4_request, SignedHeaders=' +
          i +
          ', Signature=' +
          S
      ),
      n
    );
  }
  var E_ = function (r, t, e, n = null, i = null) {
    let s = B_(r, t, e),
      o = { contentType: n, contentHash: i ? an.sha256.hex(i) : null };
    return D_(s, o);
  };
  function Sr(r, t, e, n, i = null, s = null) {
    ((t == null ? void 0 : t.accessKeyId) ||
      (t == null ? void 0 : t.sessionToken)) &&
      (E_(t, e, n, i, s).forEach((a, c) => {
        r.setRequestHeader(c, a);
      }),
      i && r.setRequestHeader('content-type', i));
  }
  function qu(r) {
    if (r.indexOf('s3://') != 0)
      throw new Error('URL needs to start with s3://');
    let t = r.indexOf('/', 5);
    if (t == -1) throw new Error("URL needs to contain a '/' after the host");
    let e = r.substring(5, t);
    if (!e) throw new Error('URL needs to contain a bucket name');
    let n = r.substring(t);
    if (!n) throw new Error('URL needs to contain key');
    return { bucket: e, path: n };
  }
  function Zu(r) {
    var t;
    return !!(
      (t = r == null ? void 0 : r.endpoint) != null && t.startsWith('http')
    );
  }
  function Ir(r, t) {
    let e = qu(t);
    return Zu(r)
      ? `${r == null ? void 0 : r.endpoint}/${e.bucket}` + e.path
      : 'https://' + Ju(r, t, e.bucket) + e.path;
  }
  var et = {
    _files: new Map(),
    _fileInfoCache: new Map(),
    _udfFunctions: new Map(),
    _globalFileInfo: null,
    getFileInfo(r, t) {
      try {
        let e = et._fileInfoCache.get(t),
          [n, i, s] = ot(
            r,
            'duckdb_web_fs_get_file_info_by_id',
            ['number', 'number'],
            [t, (e == null ? void 0 : e.cacheEpoch) || 0]
          );
        if (n !== 0) return null;
        if (s === 0) return e;
        let o = z(r, i, s);
        _t(r);
        let a = JSON.parse(o);
        if (a == null) return null;
        let c = { ...a, blob: null };
        return et._fileInfoCache.set(t, c), c;
      } catch (e) {
        return null;
      }
    },
    getGlobalFileInfo(r) {
      var t;
      try {
        let [e, n, i] = ot(
          r,
          'duckdb_web_get_global_file_info',
          ['number'],
          [((t = et._globalFileInfo) == null ? void 0 : t.cacheEpoch) || 0]
        );
        if (e !== 0) return null;
        if (i === 0) return et._globalFileInfo;
        let s = z(r, n, i);
        _t(r);
        let o = JSON.parse(s);
        return o == null
          ? null
          : ((et._globalFileInfo = { ...o, blob: null }), et._globalFileInfo);
      } catch (e) {
        return null;
      }
    },
    testPlatformFeature: (r, t) => {
      switch (t) {
        case 1:
          return typeof BigInt64Array < 'u';
        default:
          return console.warn(`test for unknown feature: ${t}`), !1;
      }
    },
    getDefaultDataProtocol(r) {
      return 2;
    },
    openFile: (r, t, e) => {
      var n;
      try {
        et._fileInfoCache.delete(t);
        let i = et.getFileInfo(r, t);
        switch (i == null ? void 0 : i.dataProtocol) {
          case 4:
          case 5: {
            if (e & 1 && e & 2)
              throw new Error(
                `Opening file ${i.fileName} failed: cannot open file with both read and write flags set`
              );
            if (e & 32)
              throw new Error(
                `Opening file ${i.fileName} failed: appending to HTTP/S3 files is not supported`
              );
            if (e & 2) {
              let a = new XMLHttpRequest();
              if (
                (i.dataProtocol == 5
                  ? (a.open('HEAD', Ir(i.s3Config, i.dataUrl), !1),
                    Sr(a, i.s3Config, i.dataUrl, 'HEAD'))
                  : a.open('HEAD', i.dataUrl, !1),
                a.send(null),
                a.status != 200 && a.status != 404)
              )
                throw new Error(
                  `Opening file ${i.fileName} failed: Unexpected return status from server (${a.status})`
                );
              if (a.status == 404 && !(e & 8 || e & 16))
                throw new Error(
                  `Opening file ${i.fileName} failed: Cannot write to non-existent file without FILE_FLAGS_FILE_CREATE or FILE_FLAGS_FILE_CREATE_NEW flag.`
                );
              let c = r._malloc(1),
                u = new Uint8Array();
              r.HEAPU8.set(u, c);
              let p = r._malloc(2 * 8);
              return (
                (r.HEAPF64[(p >> 3) + 0] = 1), (r.HEAPF64[(p >> 3) + 1] = c), p
              );
            } else if (e != 1)
              throw new Error(
                `Opening file ${i.fileName} failed: unsupported file flags: ${e}`
              );
            let s = null,
              o = null;
            try {
              let a = new XMLHttpRequest();
              if (
                (i.dataProtocol == 5
                  ? (a.open('HEAD', Ir(i.s3Config, i.dataUrl), !1),
                    Sr(a, i.s3Config, i.dataUrl, 'HEAD'))
                  : a.open('HEAD', i.dataUrl, !1),
                a.setRequestHeader('Range', 'bytes=0-'),
                a.send(null),
                (s = a.getResponseHeader('Content-Length')),
                s !== null && a.status == 206)
              ) {
                let c = r._malloc(16);
                return (
                  (r.HEAPF64[(c >> 3) + 0] = +s),
                  (r.HEAPF64[(c >> 3) + 1] = 0),
                  c
                );
              }
            } catch (a) {
              (o = a),
                console.warn(`HEAD request with range header failed: ${a}`);
            }
            if (i.allowFullHttpReads) {
              if (s !== null && +s > 1) {
                let c = new XMLHttpRequest();
                i.dataProtocol == 5
                  ? (c.open('GET', Ir(i.s3Config, i.dataUrl), !1),
                    Sr(c, i.s3Config, i.dataUrl, 'GET'))
                  : c.open('GET', i.dataUrl, !1),
                  c.setRequestHeader('Range', 'bytes=0-0'),
                  c.send(null);
                let u = c.getResponseHeader('Content-Length');
                if (c.status == 206 && u !== null && +u == 1) {
                  let p = r._malloc(16);
                  return (
                    (r.HEAPF64[(p >> 3) + 0] = +s),
                    (r.HEAPF64[(p >> 3) + 1] = 0),
                    p
                  );
                }
                if (c.status == 200 && u !== null && +u == +s) {
                  console.warn(`fall back to full HTTP read for: ${i.dataUrl}`);
                  let p = r._malloc(c.response.byteLength),
                    b = new Uint8Array(c.response, 0, c.response.byteLength);
                  r.HEAPU8.set(b, p);
                  let _ = r._malloc(2 * 8);
                  return (
                    (r.HEAPF64[(_ >> 3) + 0] = c.response.byteLength),
                    (r.HEAPF64[(_ >> 3) + 1] = p),
                    _
                  );
                }
              }
              console.warn(`falling back to full HTTP read for: ${i.dataUrl}`);
              let a = new XMLHttpRequest();
              if (
                (i.dataProtocol == 5
                  ? (a.open('GET', Ir(i.s3Config, i.dataUrl), !1),
                    Sr(a, i.s3Config, i.dataUrl, 'GET'))
                  : a.open('GET', i.dataUrl, !1),
                (a.responseType = 'arraybuffer'),
                a.send(null),
                a.status == 200)
              ) {
                let c = r._malloc(a.response.byteLength),
                  u = new Uint8Array(a.response, 0, a.response.byteLength);
                r.HEAPU8.set(u, c);
                let p = r._malloc(2 * 8);
                return (
                  (r.HEAPF64[(p >> 3) + 0] = a.response.byteLength),
                  (r.HEAPF64[(p >> 3) + 1] = c),
                  p
                );
              }
            }
            if (o != null)
              throw new Error(
                `Reading file ${i.fileName} failed with error: ${o}`
              );
            return 0;
          }
          case 2: {
            let s = (n = et._files) == null ? void 0 : n.get(i.fileName);
            if (s) {
              let c = r._malloc(16);
              return (
                (r.HEAPF64[(c >> 3) + 0] = s.size),
                (r.HEAPF64[(c >> 3) + 1] = 0),
                c
              );
            }
            console.warn(`Buffering missing file: ${i.fileName}`);
            let o = r._malloc(2 * 8),
              a = r._malloc(1);
            return (
              (r.HEAPF64[(o >> 3) + 0] = 1), (r.HEAPF64[(o >> 3) + 1] = a), o
            );
          }
        }
      } catch (i) {
        console.error(i.toString()), ir(r, i.toString());
      }
      return 0;
    },
    glob: (r, t, e) => {
      var n;
      try {
        let i = z(r, t, e);
        if (i.startsWith('http') || i.startsWith('s3://')) {
          let s = new XMLHttpRequest();
          if (i.startsWith('s3://')) {
            let o = et.getGlobalFileInfo(r);
            s.open('HEAD', Ir(o == null ? void 0 : o.s3Config, i), !1),
              Sr(s, o == null ? void 0 : o.s3Config, i, 'HEAD');
          } else s.open('HEAD', i, !1);
          if ((s.send(null), s.status != 200 && s.status !== 206)) {
            if (
              !((n = et.getGlobalFileInfo(r)) != null && n.allowFullHttpReads)
            ) {
              ir(
                r,
                `HEAD request failed: ${i}, with full http reads are disabled`
              );
              return;
            }
            let o = new XMLHttpRequest();
            if (i.startsWith('s3://')) {
              let c = et.getGlobalFileInfo(r);
              o.open('GET', Ir(c == null ? void 0 : c.s3Config, i), !1),
                Sr(o, c == null ? void 0 : c.s3Config, i, 'HEAD');
            } else o.open('GET', i, !1);
            if (
              (o.setRequestHeader('Range', 'bytes=0-0'),
              o.send(null),
              o.status != 200 && o.status !== 206)
            ) {
              ir(r, `HEAD and GET requests failed: ${i}`);
              return;
            }
            let a = o.getResponseHeader('Content-Length');
            a &&
              +a > 1 &&
              console.warn(
                `Range request for ${i} did not return a partial response: ${o.status} "${o.statusText}"`
              );
          }
          r.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [i]);
        }
      } catch (i) {
        return ir(r, i.toString()), 0;
      }
    },
    checkFile: (r, t, e) => {
      try {
        let n = z(r, t, e);
        if (n.startsWith('http') || n.startsWith('s3://')) {
          let i = new XMLHttpRequest();
          if (n.startsWith('s3://')) {
            let s = et.getGlobalFileInfo(r);
            i.open('HEAD', Ir(s == null ? void 0 : s.s3Config, n), !1),
              Sr(i, s == null ? void 0 : s.s3Config, n, 'HEAD');
          } else i.open('HEAD', n, !1);
          return i.send(null), i.status == 206 || i.status == 200;
        }
      } catch (n) {
        return !1;
      }
      return !1;
    },
    syncFile: (r, t) => {},
    closeFile: (r, t) => {
      var n;
      let e = et.getFileInfo(r, t);
      switch (
        (et._fileInfoCache.delete(t), e == null ? void 0 : e.dataProtocol)
      ) {
        case 0:
        case 4:
        case 5:
          break;
        case 1:
        case 2:
          return;
        case 3: {
          let i = (n = et._files) == null ? void 0 : n.get(e.fileName);
          if (!i)
            throw new Error(
              `No OPFS access handle registered with name: ${e.fileName}`
            );
          return i.flush();
        }
      }
    },
    truncateFile: (r, t, e) => {
      var i;
      let n = et.getFileInfo(r, t);
      switch (n == null ? void 0 : n.dataProtocol) {
        case 4:
          ir(r, 'Cannot truncate a http file');
          return;
        case 5:
          ir(r, 'Cannot truncate an s3 file');
          return;
        case 0:
        case 1:
        case 2:
          ir(r, 'truncateFile not implemented');
          return;
        case 3: {
          let s = (i = et._files) == null ? void 0 : i.get(n.fileName);
          if (!s)
            throw new Error(
              `No OPFS access handle registered with name: ${n.fileName}`
            );
          return s.truncate(e);
        }
      }
      return 0;
    },
    readFile(r, t, e, n, i) {
      var s, o;
      if (n == 0) return 0;
      try {
        let a = et.getFileInfo(r, t);
        switch (a == null ? void 0 : a.dataProtocol) {
          case 4:
          case 5: {
            if (!a.dataUrl) throw new Error(`Missing data URL for file ${t}`);
            try {
              let c = new XMLHttpRequest();
              if (
                (a.dataProtocol == 5
                  ? (c.open(
                      'GET',
                      Ir(a == null ? void 0 : a.s3Config, a.dataUrl),
                      !1
                    ),
                    Sr(c, a == null ? void 0 : a.s3Config, a.dataUrl, 'GET'))
                  : c.open('GET', a.dataUrl, !1),
                (c.responseType = 'arraybuffer'),
                c.setRequestHeader('Range', `bytes=${i}-${i + n - 1}`),
                c.send(null),
                c.status == 206 ||
                  (c.status == 200 && n == c.response.byteLength && i == 0))
              ) {
                let u = new Uint8Array(
                  c.response,
                  0,
                  Math.min(c.response.byteLength, n)
                );
                return r.HEAPU8.set(u, e), u.byteLength;
              } else if (c.status == 200) {
                console.warn(
                  `Range request for ${a.dataUrl} did not return a partial response: ${c.status} "${c.statusText}"`
                );
                let u = new Uint8Array(
                  c.response,
                  i,
                  Math.min(c.response.byteLength - i, n)
                );
                return r.HEAPU8.set(u, e), u.byteLength;
              } else
                throw new Error(
                  `Range request for ${a.dataUrl} did returned non-success status: ${c.status} "${c.statusText}"`
                );
            } catch (c) {
              throw new Error(
                `Range request for ${a.dataUrl} failed with error: ${c}"`
              );
            }
          }
          case 2: {
            let c = (s = et._files) == null ? void 0 : s.get(a.fileName);
            if (!c)
              throw new Error(
                `No HTML5 file registered with name: ${a.fileName}`
              );
            let u = c.slice(i, i + n),
              p = new Uint8Array(new FileReaderSync().readAsArrayBuffer(u));
            return r.HEAPU8.set(p, e), p.byteLength;
          }
          case 3: {
            let c = (o = et._files) == null ? void 0 : o.get(a.fileName);
            if (!c)
              throw new Error(
                `No OPFS access handle registered with name: ${a.fileName}`
              );
            let u = r.HEAPU8.subarray(e, e + n);
            return c.read(u, { at: i });
          }
        }
        return 0;
      } catch (a) {
        return ir(r, a.toString()), 0;
      }
    },
    writeFile: (r, t, e, n, i) => {
      var o;
      let s = et.getFileInfo(r, t);
      switch (s == null ? void 0 : s.dataProtocol) {
        case 4:
          return ir(r, 'Cannot write to HTTP file'), 0;
        case 5: {
          let a = r.HEAPU8.subarray(e, e + n),
            c = new XMLHttpRequest();
          return (
            c.open('PUT', Ir(s == null ? void 0 : s.s3Config, s.dataUrl), !1),
            Sr(c, s == null ? void 0 : s.s3Config, s.dataUrl, 'PUT', '', a),
            c.send(a),
            n
          );
        }
        case 2:
          return ir(r, 'cannot write using the html5 file reader api'), 0;
        case 3: {
          let a = (o = et._files) == null ? void 0 : o.get(s.fileName);
          if (!a)
            throw new Error(
              `No OPFS access handle registered with name: ${s.fileName}`
            );
          let c = r.HEAPU8.subarray(e, e + n);
          return a.write(c, { at: i });
        }
      }
      return 0;
    },
    getLastFileModificationTime: (r, t) => {
      var n;
      let e = et.getFileInfo(r, t);
      switch (e == null ? void 0 : e.dataProtocol) {
        case 2: {
          if (!((n = et._files) == null ? void 0 : n.get(e.fileName)))
            throw Error(`No handle available for file: ${e.fileName}`);
          return 0;
        }
        case 4:
        case 5:
          return new Date().getTime();
      }
      return 0;
    },
    checkDirectory: (r, t, e) => {
      let n = z(r, t, e);
      return console.log(`checkDirectory: ${n}`), !1;
    },
    createDirectory: (r, t, e) => {
      let n = z(r, t, e);
      console.log(`createDirectory: ${n}`);
    },
    removeDirectory: (r, t, e) => {
      let n = z(r, t, e);
      console.log(`removeDirectory: ${n}`);
    },
    listDirectoryEntries: (r, t, e) => {
      let n = z(r, t, e);
      return console.log(`listDirectoryEntries: ${n}`), !1;
    },
    moveFile: (r, t, e, n, i) => {
      var c, u;
      let s = z(r, t, e),
        o = z(r, n, i),
        a = (c = et._files) == null ? void 0 : c.get(s);
      a !== void 0 && (et._files.delete(a), et._files.set(o, a));
      for (let [p, b] of ((u = et._fileInfoCache) == null
        ? void 0
        : u.entries()) || [])
        if (b.dataUrl == s) {
          et._fileInfoCache.delete(p);
          break;
        }
      return !0;
    },
    removeFile: (r, t, e) => {},
    callScalarUDF: (r, t, e, n, i, s, o) => {
      Gu(et, r, t, e, n, i, s, o);
    },
  };
  var lc = class extends Vo {
    postMessage(t, e) {
      globalThis.postMessage(t, e);
    }
    async instantiate(t, e, n) {
      return await new Go(this, et, t, e).instantiate(n);
    }
  };
  function Qu() {
    let r = new lc();
    globalThis.onmessage = async (t) => {
      await r.onMessage(t.data);
    };
  }
  Qu();
  return Ph(O_);
})();
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
//# sourceMappingURL=duckdb-browser-eh.worker.js.map
