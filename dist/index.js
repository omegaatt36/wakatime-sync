module.exports = (function(e, t) {
  'use strict'
  var r = {}
  function __webpack_require__(t) {
    if (r[t]) {
      return r[t].exports
    }
    var i = (r[t] = { i: t, l: false, exports: {} })
    e[t].call(i.exports, i, i.exports, __webpack_require__)
    i.l = true
    return i.exports
  }
  __webpack_require__.ab = __dirname + '/'
  function startup() {
    return __webpack_require__(104)
  }
  return startup()
})({
  0: function(e, t, r) {
    const { requestLog: i } = r(916)
    const { restEndpointMethods: n } = r(842)
    const s = r(529)
    const o = [r(190), r(19), i, r(148), n, r(430), r(850)]
    const a = s.plugin(o)
    function DeprecatedOctokit(e) {
      const t = e && e.log && e.log.warn ? e.log.warn : console.warn
      t(
        '[@octokit/rest] `const Octokit = require("@octokit/rest")` is deprecated. Use `const { Octokit } = require("@octokit/rest")` instead'
      )
      return new a(e)
    }
    const u = Object.assign(DeprecatedOctokit, { Octokit: a })
    Object.keys(a).forEach(e => {
      if (a.hasOwnProperty(e)) {
        u[e] = a[e]
      }
    })
    e.exports = u
  },
  2: function(e, t, r) {
    'use strict'
    const i = r(87)
    const n = r(118)
    const s = r(49)
    const o = (e, t) => {
      if (!e && t) {
        throw new Error("You can't specify a `release` without specifying `platform`")
      }
      e = e || i.platform()
      let r
      if (e === 'darwin') {
        if (!t && i.platform() === 'darwin') {
          t = i.release()
        }
        const e = t ? (Number(t.split('.')[0]) > 15 ? 'macOS' : 'OS X') : 'macOS'
        r = t ? n(t).name : ''
        return e + (r ? ' ' + r : '')
      }
      if (e === 'linux') {
        if (!t && i.platform() === 'linux') {
          t = i.release()
        }
        r = t ? t.replace(/^(\d+\.\d+).*/, '$1') : ''
        return 'Linux' + (r ? ' ' + r : '')
      }
      if (e === 'win32') {
        if (!t && i.platform() === 'win32') {
          t = i.release()
        }
        r = t ? s(t) : ''
        return 'Windows' + (r ? ' ' + r : '')
      }
      return e
    }
    e.exports = o
  },
  9: function(e, t, r) {
    var i = r(969)
    var n = function() {}
    var s = function(e) {
      return e.setHeader && typeof e.abort === 'function'
    }
    var o = function(e) {
      return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3
    }
    var a = function(e, t, r) {
      if (typeof t === 'function') return a(e, null, t)
      if (!t) t = {}
      r = i(r || n)
      var u = e._writableState
      var p = e._readableState
      var c = t.readable || (t.readable !== false && e.readable)
      var d = t.writable || (t.writable !== false && e.writable)
      var l = false
      var m = function() {
        if (!e.writable) g()
      }
      var g = function() {
        d = false
        if (!c) r.call(e)
      }
      var h = function() {
        c = false
        if (!d) r.call(e)
      }
      var y = function(t) {
        r.call(e, t ? new Error('exited with error code: ' + t) : null)
      }
      var f = function(t) {
        r.call(e, t)
      }
      var b = function() {
        process.nextTick(_)
      }
      var _ = function() {
        if (l) return
        if (c && !(p && p.ended && !p.destroyed)) return r.call(e, new Error('premature close'))
        if (d && !(u && u.ended && !u.destroyed)) return r.call(e, new Error('premature close'))
      }
      var v = function() {
        e.req.on('finish', g)
      }
      if (s(e)) {
        e.on('complete', g)
        e.on('abort', b)
        if (e.req) v()
        else e.on('request', v)
      } else if (d && !u) {
        e.on('end', m)
        e.on('close', m)
      }
      if (o(e)) e.on('exit', y)
      e.on('end', h)
      e.on('finish', g)
      if (t.error !== false) e.on('error', f)
      e.on('close', b)
      return function() {
        l = true
        e.removeListener('complete', g)
        e.removeListener('abort', b)
        e.removeListener('request', v)
        if (e.req) e.req.removeListener('finish', g)
        e.removeListener('end', m)
        e.removeListener('close', m)
        e.removeListener('finish', g)
        e.removeListener('exit', y)
        e.removeListener('end', h)
        e.removeListener('error', f)
        e.removeListener('close', b)
      }
    }
    e.exports = a
  },
  11: function(e) {
    e.exports = wrappy
    function wrappy(e, t) {
      if (e && t) return wrappy(e)(t)
      if (typeof e !== 'function') throw new TypeError('need wrapper function')
      Object.keys(e).forEach(function(t) {
        wrapper[t] = e[t]
      })
      return wrapper
      function wrapper() {
        var t = new Array(arguments.length)
        for (var r = 0; r < t.length; r++) {
          t[r] = arguments[r]
        }
        var i = e.apply(this, t)
        var n = t[t.length - 1]
        if (typeof i === 'function' && i !== n) {
          Object.keys(n).forEach(function(e) {
            i[e] = n[e]
          })
        }
        return i
      }
    }
  },
  18: function() {
    eval('require')('encoding')
  },
  19: function(e, t, r) {
    e.exports = authenticationPlugin
    const { Deprecation: i } = r(692)
    const n = r(969)
    const s = n((e, t) => e.warn(t))
    const o = r(674)
    const a = r(471)
    const u = r(349)
    function authenticationPlugin(e, t) {
      if (t.auth) {
        e.authenticate = () => {
          s(
            e.log,
            new i(
              '[@octokit/rest] octokit.authenticate() is deprecated and has no effect when "auth" option is set on Octokit constructor'
            )
          )
        }
        return
      }
      const r = { octokit: e, auth: false }
      e.authenticate = o.bind(null, r)
      e.hook.before('request', a.bind(null, r))
      e.hook.error('request', u.bind(null, r))
    }
  },
  20: function(e, t, r) {
    'use strict'
    const i = r(129)
    const n = r(568)
    const s = r(881)
    function spawn(e, t, r) {
      const o = n(e, t, r)
      const a = i.spawn(o.command, o.args, o.options)
      s.hookChildProcess(a, o)
      return a
    }
    function spawnSync(e, t, r) {
      const o = n(e, t, r)
      const a = i.spawnSync(o.command, o.args, o.options)
      a.error = a.error || s.verifyENOENTSync(a.status, o)
      return a
    }
    e.exports = spawn
    e.exports.spawn = spawn
    e.exports.sync = spawnSync
    e.exports._parse = n
    e.exports._enoent = s
  },
  26: function(e, t, r) {
    'use strict'
    var i = r(369)
    e.exports = function createError(e, t, r, n, s) {
      var o = new Error(e)
      return i(o, t, r, n, s)
    }
  },
  35: function(e, t, r) {
    'use strict'
    var i = r(727)
    var n = Object.prototype.toString
    function isArray(e) {
      return n.call(e) === '[object Array]'
    }
    function isUndefined(e) {
      return typeof e === 'undefined'
    }
    function isBuffer(e) {
      return (
        e !== null &&
        !isUndefined(e) &&
        e.constructor !== null &&
        !isUndefined(e.constructor) &&
        typeof e.constructor.isBuffer === 'function' &&
        e.constructor.isBuffer(e)
      )
    }
    function isArrayBuffer(e) {
      return n.call(e) === '[object ArrayBuffer]'
    }
    function isFormData(e) {
      return typeof FormData !== 'undefined' && e instanceof FormData
    }
    function isArrayBufferView(e) {
      var t
      if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        t = ArrayBuffer.isView(e)
      } else {
        t = e && e.buffer && e.buffer instanceof ArrayBuffer
      }
      return t
    }
    function isString(e) {
      return typeof e === 'string'
    }
    function isNumber(e) {
      return typeof e === 'number'
    }
    function isObject(e) {
      return e !== null && typeof e === 'object'
    }
    function isPlainObject(e) {
      if (n.call(e) !== '[object Object]') {
        return false
      }
      var t = Object.getPrototypeOf(e)
      return t === null || t === Object.prototype
    }
    function isDate(e) {
      return n.call(e) === '[object Date]'
    }
    function isFile(e) {
      return n.call(e) === '[object File]'
    }
    function isBlob(e) {
      return n.call(e) === '[object Blob]'
    }
    function isFunction(e) {
      return n.call(e) === '[object Function]'
    }
    function isStream(e) {
      return isObject(e) && isFunction(e.pipe)
    }
    function isURLSearchParams(e) {
      return typeof URLSearchParams !== 'undefined' && e instanceof URLSearchParams
    }
    function trim(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
    }
    function isStandardBrowserEnv() {
      if (
        typeof navigator !== 'undefined' &&
        (navigator.product === 'ReactNative' ||
          navigator.product === 'NativeScript' ||
          navigator.product === 'NS')
      ) {
        return false
      }
      return typeof window !== 'undefined' && typeof document !== 'undefined'
    }
    function forEach(e, t) {
      if (e === null || typeof e === 'undefined') {
        return
      }
      if (typeof e !== 'object') {
        e = [e]
      }
      if (isArray(e)) {
        for (var r = 0, i = e.length; r < i; r++) {
          t.call(null, e[r], r, e)
        }
      } else {
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            t.call(null, e[n], n, e)
          }
        }
      }
    }
    function merge() {
      var e = {}
      function assignValue(t, r) {
        if (isPlainObject(e[r]) && isPlainObject(t)) {
          e[r] = merge(e[r], t)
        } else if (isPlainObject(t)) {
          e[r] = merge({}, t)
        } else if (isArray(t)) {
          e[r] = t.slice()
        } else {
          e[r] = t
        }
      }
      for (var t = 0, r = arguments.length; t < r; t++) {
        forEach(arguments[t], assignValue)
      }
      return e
    }
    function extend(e, t, r) {
      forEach(t, function assignValue(t, n) {
        if (r && typeof t === 'function') {
          e[n] = i(t, r)
        } else {
          e[n] = t
        }
      })
      return e
    }
    function stripBOM(e) {
      if (e.charCodeAt(0) === 65279) {
        e = e.slice(1)
      }
      return e
    }
    e.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM
    }
  },
  39: function(e) {
    'use strict'
    e.exports = e => {
      e = e || {}
      const t = e.env || process.env
      const r = e.platform || process.platform
      if (r !== 'win32') {
        return 'PATH'
      }
      return Object.keys(t).find(e => e.toUpperCase() === 'PATH') || 'Path'
    }
  },
  47: function(e, t, r) {
    e.exports = factory
    const i = r(402)
    const n = r(855)
    function factory(e) {
      const t = i.bind(null, e || [])
      t.plugin = n.bind(null, e || [])
      return t
    }
  },
  49: function(e, t, r) {
    'use strict'
    const i = r(87)
    const n = r(955)
    const s = new Map([
      ['10.0', '10'],
      ['6.3', '8.1'],
      ['6.2', '8'],
      ['6.1', '7'],
      ['6.0', 'Vista'],
      ['5.2', 'Server 2003'],
      ['5.1', 'XP'],
      ['5.0', '2000'],
      ['4.9', 'ME'],
      ['4.1', '98'],
      ['4.0', '95']
    ])
    const o = e => {
      const t = /\d+\.\d/.exec(e || i.release())
      if (e && !t) {
        throw new Error("`release` argument doesn't match `n.n`")
      }
      const r = (t || [])[0]
      if ((!e || e === i.release()) && ['6.1', '6.2', '6.3', '10.0'].includes(r)) {
        const e = n.sync('wmic', ['os', 'get', 'Caption']).stdout || ''
        const t = (e.match(/2008|2012|2016/) || [])[0]
        if (t) {
          return `Server ${t}`
        }
      }
      return s.get(r)
    }
    e.exports = o
  },
  53: function(e, t, r) {
    e.exports = r(352)
  },
  63: function(e, t, r) {
    const i = r(747)
    const n = r(622)
    function log(e) {
      console.log(`[dotenv][DEBUG] ${e}`)
    }
    const s = '\n'
    const o = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
    const a = /\\n/g
    function parse(e, t) {
      const r = Boolean(t && t.debug)
      const i = {}
      e.toString()
        .split(s)
        .forEach(function(e, t) {
          const n = e.match(o)
          if (n != null) {
            const e = n[1]
            let t = n[2] || ''
            const r = t.length - 1
            const o = t[0] === '"' && t[r] === '"'
            const u = t[0] === "'" && t[r] === "'"
            if (u || o) {
              t = t.substring(1, r)
              if (o) {
                t = t.replace(a, s)
              }
            } else {
              t = t.trim()
            }
            i[e] = t
          } else if (r) {
            log(`did not match key and value when parsing line ${t + 1}: ${e}`)
          }
        })
      return i
    }
    function config(e) {
      let t = n.resolve(process.cwd(), '.env')
      let r = 'utf8'
      let s = false
      if (e) {
        if (e.path != null) {
          t = e.path
        }
        if (e.encoding != null) {
          r = e.encoding
        }
        if (e.debug != null) {
          s = true
        }
      }
      try {
        const e = parse(i.readFileSync(t, { encoding: r }), { debug: s })
        Object.keys(e).forEach(function(t) {
          if (!process.env.hasOwnProperty(t)) {
            process.env[t] = e[t]
          } else if (s) {
            log(`"${t}" is already defined in \`process.env\` and will not be overwritten`)
          }
        })
        return { parsed: e }
      } catch (e) {
        return { error: e }
      }
    }
    e.exports.config = config
    e.exports.parse = parse
  },
  87: function(e) {
    e.exports = require('os')
  },
  104: function(e, t, r) {
    r(63).config()
    const i = r(629)
    const { Octokit: n } = r(0)
    const s = r(53)
    const { WAKATIME_API_KEY: o, GH_TOKEN: a, GIST_ID: u } = process.env
    const p = 'https://wakatime.com/api/v1'
    const c = `${p}/users/current/summaries`
    const d = new n({ auth: `token ${a}` })
    function getMySummary(e) {
      return s.get(c, { params: { start: e, end: e, api_key: o } }).then(e => e.data)
    }
    async function updateGist(e, t) {
      const r = ''
      try {
        await d.gists.update({
          gist_id: u,
          files: { [`summaries_${e}.json`]: { content: JSON.stringify(t) } }
        })
      } catch (e) {
        console.error(`Unable to update gist \n ${e}`)
      }
    }
    const l = async e => {
      const t = i()
        .subtract(1, 'day')
        .format('YYYY-MM-DD')
      try {
        const r = await getMySummary(t)
        await updateGist(t, r.data)
      } catch (t) {
        if (e === 1) {
          console.error(`Unable to fetch wakatime summary\n ${t} `)
          return
        }
        console.log(`retry fetch summary data: ${e - 1} time`)
        l(e - 1)
      }
    }
    async function main() {
      l(3)
    }
    main()
  },
  118: function(e, t, r) {
    'use strict'
    const i = r(87)
    const n = new Map([
      [19, 'Catalina'],
      [18, 'Mojave'],
      [17, 'High Sierra'],
      [16, 'Sierra'],
      [15, 'El Capitan'],
      [14, 'Yosemite'],
      [13, 'Mavericks'],
      [12, 'Mountain Lion'],
      [11, 'Lion'],
      [10, 'Snow Leopard'],
      [9, 'Leopard'],
      [8, 'Tiger'],
      [7, 'Panther'],
      [6, 'Jaguar'],
      [5, 'Puma']
    ])
    const s = e => {
      e = Number((e || i.release()).split('.')[0])
      return { name: n.get(e), version: '10.' + (e - 4) }
    }
    e.exports = s
    e.exports.default = s
  },
  126: function(e) {
    var t = 200
    var r = '__lodash_hash_undefined__'
    var i = 1 / 0
    var n = '[object Function]',
      s = '[object GeneratorFunction]'
    var o = /[\\^$.*+?()[\]{}|]/g
    var a = /^\[object .+?Constructor\]$/
    var u = typeof global == 'object' && global && global.Object === Object && global
    var p = typeof self == 'object' && self && self.Object === Object && self
    var c = u || p || Function('return this')()
    function arrayIncludes(e, t) {
      var r = e ? e.length : 0
      return !!r && baseIndexOf(e, t, 0) > -1
    }
    function arrayIncludesWith(e, t, r) {
      var i = -1,
        n = e ? e.length : 0
      while (++i < n) {
        if (r(t, e[i])) {
          return true
        }
      }
      return false
    }
    function baseFindIndex(e, t, r, i) {
      var n = e.length,
        s = r + (i ? 1 : -1)
      while (i ? s-- : ++s < n) {
        if (t(e[s], s, e)) {
          return s
        }
      }
      return -1
    }
    function baseIndexOf(e, t, r) {
      if (t !== t) {
        return baseFindIndex(e, baseIsNaN, r)
      }
      var i = r - 1,
        n = e.length
      while (++i < n) {
        if (e[i] === t) {
          return i
        }
      }
      return -1
    }
    function baseIsNaN(e) {
      return e !== e
    }
    function cacheHas(e, t) {
      return e.has(t)
    }
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    function setToArray(e) {
      var t = -1,
        r = Array(e.size)
      e.forEach(function(e) {
        r[++t] = e
      })
      return r
    }
    var d = Array.prototype,
      l = Function.prototype,
      m = Object.prototype
    var g = c['__core-js_shared__']
    var h = (function() {
      var e = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var y = l.toString
    var f = m.hasOwnProperty
    var b = m.toString
    var _ = RegExp(
      '^' +
        y
          .call(f)
          .replace(o, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var v = d.splice
    var q = getNative(c, 'Map'),
      w = getNative(c, 'Set'),
      E = getNative(Object, 'create')
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function hashClear() {
      this.__data__ = E ? E(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (E) {
        var i = t[e]
        return i === r ? undefined : i
      }
      return f.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return E ? t[e] !== undefined : f.call(t, e)
    }
    function hashSet(e, t) {
      var i = this.__data__
      i[e] = E && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var i = t.length - 1
      if (r == i) {
        t.pop()
      } else {
        v.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        i = assocIndexOf(r, e)
      if (i < 0) {
        r.push([e, t])
      } else {
        r[i][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (q || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function SetCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.__data__ = new MapCache()
      while (++t < r) {
        this.add(e[t])
      }
    }
    function setCacheAdd(e) {
      this.__data__.set(e, r)
      return this
    }
    function setCacheHas(e) {
      return this.__data__.has(e)
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
    SetCache.prototype.has = setCacheHas
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? _ : a
      return t.test(toSource(e))
    }
    function baseUniq(e, r, i) {
      var n = -1,
        s = arrayIncludes,
        o = e.length,
        a = true,
        u = [],
        p = u
      if (i) {
        a = false
        s = arrayIncludesWith
      } else if (o >= t) {
        var c = r ? null : T(e)
        if (c) {
          return setToArray(c)
        }
        a = false
        s = cacheHas
        p = new SetCache()
      } else {
        p = r ? [] : u
      }
      e: while (++n < o) {
        var d = e[n],
          l = r ? r(d) : d
        d = i || d !== 0 ? d : 0
        if (a && l === l) {
          var m = p.length
          while (m--) {
            if (p[m] === l) {
              continue e
            }
          }
          if (r) {
            p.push(l)
          }
          u.push(d)
        } else if (!s(p, l, i)) {
          if (p !== u) {
            p.push(l)
          }
          u.push(d)
        }
      }
      return u
    }
    var T = !(w && 1 / setToArray(new w([, -0]))[1] == i)
      ? noop
      : function(e) {
          return new w(e)
        }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!h && h in e
    }
    function toSource(e) {
      if (e != null) {
        try {
          return y.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function uniq(e) {
      return e && e.length ? baseUniq(e) : []
    }
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    function isFunction(e) {
      var t = isObject(e) ? b.call(e) : ''
      return t == n || t == s
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function noop() {}
    e.exports = uniq
  },
  129: function(e) {
    e.exports = require('child_process')
  },
  133: function(e, t, r) {
    'use strict'
    var i = r(35)
    function encode(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function buildURL(e, t, r) {
      if (!t) {
        return e
      }
      var n
      if (r) {
        n = r(t)
      } else if (i.isURLSearchParams(t)) {
        n = t.toString()
      } else {
        var s = []
        i.forEach(t, function serialize(e, t) {
          if (e === null || typeof e === 'undefined') {
            return
          }
          if (i.isArray(e)) {
            t = t + '[]'
          } else {
            e = [e]
          }
          i.forEach(e, function parseValue(e) {
            if (i.isDate(e)) {
              e = e.toISOString()
            } else if (i.isObject(e)) {
              e = JSON.stringify(e)
            }
            s.push(encode(t) + '=' + encode(e))
          })
        })
        n = s.join('&')
      }
      if (n) {
        var o = e.indexOf('#')
        if (o !== -1) {
          e = e.slice(0, o)
        }
        e += (e.indexOf('?') === -1 ? '?' : '&') + n
      }
      return e
    }
  },
  137: function(e, t, r) {
    'use strict'
    var i = r(826)
    function CancelToken(e) {
      if (typeof e !== 'function') {
        throw new TypeError('executor must be a function.')
      }
      var t
      this.promise = new Promise(function promiseExecutor(e) {
        t = e
      })
      var r = this
      e(function cancel(e) {
        if (r.reason) {
          return
        }
        r.reason = new i(e)
        t(r.reason)
      })
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason
      }
    }
    CancelToken.source = function source() {
      var e
      var t = new CancelToken(function executor(t) {
        e = t
      })
      return { token: t, cancel: e }
    }
    e.exports = CancelToken
  },
  143: function(e, t, r) {
    e.exports = withAuthorizationPrefix
    const i = r(368)
    const n = /^[\w-]+:/
    function withAuthorizationPrefix(e) {
      if (/^(basic|bearer|token) /i.test(e)) {
        return e
      }
      try {
        if (n.test(i(e))) {
          return `basic ${e}`
        }
      } catch (e) {}
      if (e.split(/\./).length === 3) {
        return `bearer ${e}`
      }
      return `token ${e}`
    }
  },
  145: function(e, t, r) {
    'use strict'
    const i = r(453)
    const n = r(966)
    class MaxBufferError extends Error {
      constructor() {
        super('maxBuffer exceeded')
        this.name = 'MaxBufferError'
      }
    }
    function getStream(e, t) {
      if (!e) {
        return Promise.reject(new Error('Expected a stream'))
      }
      t = Object.assign({ maxBuffer: Infinity }, t)
      const { maxBuffer: r } = t
      let s
      return new Promise((o, a) => {
        const u = e => {
          if (e) {
            e.bufferedData = s.getBufferedValue()
          }
          a(e)
        }
        s = i(e, n(t), e => {
          if (e) {
            u(e)
            return
          }
          o()
        })
        s.on('data', () => {
          if (s.getBufferedLength() > r) {
            u(new MaxBufferError())
          }
        })
      }).then(() => s.getBufferedValue())
    }
    e.exports = getStream
    e.exports.buffer = (e, t) => getStream(e, Object.assign({}, t, { encoding: 'buffer' }))
    e.exports.array = (e, t) => getStream(e, Object.assign({}, t, { array: true }))
    e.exports.MaxBufferError = MaxBufferError
  },
  148: function(e, t, r) {
    e.exports = paginatePlugin
    const { paginateRest: i } = r(299)
    function paginatePlugin(e) {
      Object.assign(e, i(e))
    }
  },
  168: function(e) {
    'use strict'
    const t = ['stdin', 'stdout', 'stderr']
    const r = e => t.some(t => Boolean(e[t]))
    e.exports = e => {
      if (!e) {
        return null
      }
      if (e.stdio && r(e)) {
        throw new Error(
          `It's not possible to provide \`stdio\` in combination with one of ${t
            .map(e => `\`${e}\``)
            .join(', ')}`
        )
      }
      if (typeof e.stdio === 'string') {
        return e.stdio
      }
      const i = e.stdio || []
      if (!Array.isArray(i)) {
        throw new TypeError(
          `Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof i}\``
        )
      }
      const n = []
      const s = Math.max(i.length, t.length)
      for (let r = 0; r < s; r++) {
        let s = null
        if (i[r] !== undefined) {
          s = i[r]
        } else if (e[t[r]] !== undefined) {
          s = e[t[r]]
        }
        n[r] = s
      }
      return n
    }
  },
  190: function(e, t, r) {
    e.exports = authenticationPlugin
    const { createTokenAuth: i } = r(813)
    const { Deprecation: n } = r(692)
    const s = r(969)
    const o = r(863)
    const a = r(293)
    const u = r(954)
    const p = r(143)
    const c = s((e, t) => e.warn(t))
    const d = s((e, t) => e.warn(t))
    function authenticationPlugin(e, t) {
      if (t.authStrategy) {
        const r = t.authStrategy(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      }
      if (!t.auth) {
        e.auth = () => Promise.resolve({ type: 'unauthenticated' })
        return
      }
      const r = typeof t.auth === 'string' && /^basic/.test(p(t.auth))
      if (typeof t.auth === 'string' && !r) {
        const r = i(t.auth)
        e.hook.wrap('request', r.hook)
        e.auth = r
        return
      }
      const [s, l] = r
        ? [
            c,
            'Setting the "new Octokit({ auth })" option to a Basic Auth string is deprecated. Use https://github.com/octokit/auth-basic.js instead. See (https://octokit.github.io/rest.js/#authentication)'
          ]
        : [
            d,
            'Setting the "new Octokit({ auth })" option to an object without also setting the "authStrategy" option is deprecated and will be removed in v17. See (https://octokit.github.io/rest.js/#authentication)'
          ]
      s(e.log, new n('[@octokit/rest] ' + l))
      e.auth = () => Promise.resolve({ type: 'deprecated', message: l })
      u(t.auth)
      const m = { octokit: e, auth: t.auth }
      e.hook.before('request', o.bind(null, m))
      e.hook.error('request', a.bind(null, m))
    }
  },
  197: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var i = r(747)
    function isexe(e, t, r) {
      i.stat(e, function(e, i) {
        r(e, e ? false : checkStat(i, t))
      })
    }
    function sync(e, t) {
      return checkStat(i.statSync(e), t)
    }
    function checkStat(e, t) {
      return e.isFile() && checkMode(e, t)
    }
    function checkMode(e, t) {
      var r = e.mode
      var i = e.uid
      var n = e.gid
      var s = t.uid !== undefined ? t.uid : process.getuid && process.getuid()
      var o = t.gid !== undefined ? t.gid : process.getgid && process.getgid()
      var a = parseInt('100', 8)
      var u = parseInt('010', 8)
      var p = parseInt('001', 8)
      var c = a | u
      var d = r & p || (r & u && n === o) || (r & a && i === s) || (r & c && s === 0)
      return d
    }
  },
  211: function(e) {
    e.exports = require('https')
  },
  215: function(e) {
    e.exports = {
      name: '@octokit/rest',
      version: '16.43.1',
      publishConfig: { access: 'public' },
      description: 'GitHub REST API client for Node.js',
      keywords: ['octokit', 'github', 'rest', 'api-client'],
      author: 'Gregor Martynus (https://github.com/gr2m)',
      contributors: [
        { name: 'Mike de Boer', email: 'info@mikedeboer.nl' },
        { name: 'Fabian Jakobs', email: 'fabian@c9.io' },
        { name: 'Joe Gallo', email: 'joe@brassafrax.com' },
        { name: 'Gregor Martynus', url: 'https://github.com/gr2m' }
      ],
      repository: 'https://github.com/octokit/rest.js',
      dependencies: {
        '@octokit/auth-token': '^2.4.0',
        '@octokit/plugin-paginate-rest': '^1.1.1',
        '@octokit/plugin-request-log': '^1.0.0',
        '@octokit/plugin-rest-endpoint-methods': '2.4.0',
        '@octokit/request': '^5.2.0',
        '@octokit/request-error': '^1.0.2',
        'atob-lite': '^2.0.0',
        'before-after-hook': '^2.0.0',
        'btoa-lite': '^1.0.0',
        deprecation: '^2.0.0',
        'lodash.get': '^4.4.2',
        'lodash.set': '^4.3.2',
        'lodash.uniq': '^4.5.0',
        'octokit-pagination-methods': '^1.1.0',
        once: '^1.4.0',
        'universal-user-agent': '^4.0.0'
      },
      devDependencies: {
        '@gimenete/type-writer': '^0.1.3',
        '@octokit/auth': '^1.1.1',
        '@octokit/fixtures-server': '^5.0.6',
        '@octokit/graphql': '^4.2.0',
        '@types/node': '^13.1.0',
        bundlesize: '^0.18.0',
        chai: '^4.1.2',
        'compression-webpack-plugin': '^3.1.0',
        cypress: '^3.0.0',
        glob: '^7.1.2',
        'http-proxy-agent': '^4.0.0',
        'lodash.camelcase': '^4.3.0',
        'lodash.merge': '^4.6.1',
        'lodash.upperfirst': '^4.3.1',
        lolex: '^5.1.2',
        mkdirp: '^1.0.0',
        mocha: '^7.0.1',
        mustache: '^4.0.0',
        nock: '^11.3.3',
        'npm-run-all': '^4.1.2',
        nyc: '^15.0.0',
        prettier: '^1.14.2',
        proxy: '^1.0.0',
        'semantic-release': '^17.0.0',
        sinon: '^8.0.0',
        'sinon-chai': '^3.0.0',
        'sort-keys': '^4.0.0',
        'string-to-arraybuffer': '^1.0.0',
        'string-to-jsdoc-comment': '^1.0.0',
        typescript: '^3.3.1',
        webpack: '^4.0.0',
        'webpack-bundle-analyzer': '^3.0.0',
        'webpack-cli': '^3.0.0'
      },
      types: 'index.d.ts',
      scripts: {
        coverage: 'nyc report --reporter=html && open coverage/index.html',
        lint:
          "prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
        'lint:fix':
          "prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json",
        pretest: 'npm run -s lint',
        test: 'nyc mocha test/mocha-node-setup.js "test/*/**/*-test.js"',
        'test:browser': 'cypress run --browser chrome',
        build: 'npm-run-all build:*',
        'build:ts': 'npm run -s update-endpoints:typescript',
        'prebuild:browser': 'mkdirp dist/',
        'build:browser': 'npm-run-all build:browser:*',
        'build:browser:development':
          'webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json',
        'build:browser:production':
          'webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map',
        'generate-bundle-report':
          'webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html',
        'update-endpoints': 'npm-run-all update-endpoints:*',
        'update-endpoints:fetch-json': 'node scripts/update-endpoints/fetch-json',
        'update-endpoints:typescript': 'node scripts/update-endpoints/typescript',
        'prevalidate:ts': 'npm run -s build:ts',
        'validate:ts': 'tsc --target es6 --noImplicitAny index.d.ts',
        'postvalidate:ts': 'tsc --noEmit --target es6 test/typescript-validate.ts',
        'start-fixtures-server': 'octokit-fixtures-server'
      },
      license: 'MIT',
      files: ['index.js', 'index.d.ts', 'lib', 'plugins'],
      nyc: { ignore: ['test'] },
      release: {
        publish: [
          '@semantic-release/npm',
          { path: '@semantic-release/github', assets: ['dist/*', '!dist/*.map.gz'] }
        ]
      },
      bundlesize: [{ path: './dist/octokit-rest.min.js.gz', maxSize: '33 kB' }]
    }
  },
  219: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(564)
    var s = r(864)
    var o = r(133)
    var a = r(960)
    var u = r(631)
    var p = r(688)
    var c = r(26)
    e.exports = function xhrAdapter(e) {
      return new Promise(function dispatchXhrRequest(t, r) {
        var d = e.data
        var l = e.headers
        var m = e.responseType
        if (i.isFormData(d)) {
          delete l['Content-Type']
        }
        var g = new XMLHttpRequest()
        if (e.auth) {
          var h = e.auth.username || ''
          var y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          l.Authorization = 'Basic ' + btoa(h + ':' + y)
        }
        var f = a(e.baseURL, e.url)
        g.open(e.method.toUpperCase(), o(f, e.params, e.paramsSerializer), true)
        g.timeout = e.timeout
        function onloadend() {
          if (!g) {
            return
          }
          var i = 'getAllResponseHeaders' in g ? u(g.getAllResponseHeaders()) : null
          var s = !m || m === 'text' || m === 'json' ? g.responseText : g.response
          var o = {
            data: s,
            status: g.status,
            statusText: g.statusText,
            headers: i,
            config: e,
            request: g
          }
          n(t, r, o)
          g = null
        }
        if ('onloadend' in g) {
          g.onloadend = onloadend
        } else {
          g.onreadystatechange = function handleLoad() {
            if (!g || g.readyState !== 4) {
              return
            }
            if (g.status === 0 && !(g.responseURL && g.responseURL.indexOf('file:') === 0)) {
              return
            }
            setTimeout(onloadend)
          }
        }
        g.onabort = function handleAbort() {
          if (!g) {
            return
          }
          r(c('Request aborted', e, 'ECONNABORTED', g))
          g = null
        }
        g.onerror = function handleError() {
          r(c('Network Error', e, null, g))
          g = null
        }
        g.ontimeout = function handleTimeout() {
          var t = 'timeout of ' + e.timeout + 'ms exceeded'
          if (e.timeoutErrorMessage) {
            t = e.timeoutErrorMessage
          }
          r(
            c(
              t,
              e,
              e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
              g
            )
          )
          g = null
        }
        if (i.isStandardBrowserEnv()) {
          var b =
            (e.withCredentials || p(f)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : undefined
          if (b) {
            l[e.xsrfHeaderName] = b
          }
        }
        if ('setRequestHeader' in g) {
          i.forEach(l, function setRequestHeader(e, t) {
            if (typeof d === 'undefined' && t.toLowerCase() === 'content-type') {
              delete l[t]
            } else {
              g.setRequestHeader(t, e)
            }
          })
        }
        if (!i.isUndefined(e.withCredentials)) {
          g.withCredentials = !!e.withCredentials
        }
        if (m && m !== 'json') {
          g.responseType = e.responseType
        }
        if (typeof e.onDownloadProgress === 'function') {
          g.addEventListener('progress', e.onDownloadProgress)
        }
        if (typeof e.onUploadProgress === 'function' && g.upload) {
          g.upload.addEventListener('progress', e.onUploadProgress)
        }
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (!g) {
              return
            }
            g.abort()
            r(e)
            g = null
          })
        }
        if (!d) {
          d = null
        }
        g.send(d)
      })
    }
  },
  260: function(e, t, r) {
    var i = r(357)
    var n = r(654)
    var s = r(614)
    if (typeof s !== 'function') {
      s = s.EventEmitter
    }
    var o
    if (process.__signal_exit_emitter__) {
      o = process.__signal_exit_emitter__
    } else {
      o = process.__signal_exit_emitter__ = new s()
      o.count = 0
      o.emitted = {}
    }
    if (!o.infinite) {
      o.setMaxListeners(Infinity)
      o.infinite = true
    }
    e.exports = function(e, t) {
      i.equal(typeof e, 'function', 'a callback must be provided for exit handler')
      if (u === false) {
        load()
      }
      var r = 'exit'
      if (t && t.alwaysLast) {
        r = 'afterexit'
      }
      var n = function() {
        o.removeListener(r, e)
        if (o.listeners('exit').length === 0 && o.listeners('afterexit').length === 0) {
          unload()
        }
      }
      o.on(r, e)
      return n
    }
    e.exports.unload = unload
    function unload() {
      if (!u) {
        return
      }
      u = false
      n.forEach(function(e) {
        try {
          process.removeListener(e, a[e])
        } catch (e) {}
      })
      process.emit = c
      process.reallyExit = p
      o.count -= 1
    }
    function emit(e, t, r) {
      if (o.emitted[e]) {
        return
      }
      o.emitted[e] = true
      o.emit(e, t, r)
    }
    var a = {}
    n.forEach(function(e) {
      a[e] = function listener() {
        var t = process.listeners(e)
        if (t.length === o.count) {
          unload()
          emit('exit', null, e)
          emit('afterexit', null, e)
          process.kill(process.pid, e)
        }
      }
    })
    e.exports.signals = function() {
      return n
    }
    e.exports.load = load
    var u = false
    function load() {
      if (u) {
        return
      }
      u = true
      o.count += 1
      n = n.filter(function(e) {
        try {
          process.on(e, a[e])
          return true
        } catch (e) {
          return false
        }
      })
      process.emit = processEmit
      process.reallyExit = processReallyExit
    }
    var p = process.reallyExit
    function processReallyExit(e) {
      process.exitCode = e || 0
      emit('exit', process.exitCode, null)
      emit('afterexit', process.exitCode, null)
      p.call(process, process.exitCode)
    }
    var c = process.emit
    function processEmit(e, t) {
      if (e === 'exit') {
        if (t !== undefined) {
          process.exitCode = t
        }
        var r = c.apply(this, arguments)
        emit('exit', process.exitCode, null)
        emit('afterexit', process.exitCode, null)
        return r
      } else {
        return c.apply(this, arguments)
      }
    }
  },
  265: function(e, t, r) {
    e.exports = getPage
    const i = r(370)
    const n = r(577)
    const s = r(297)
    function getPage(e, t, r, o) {
      i(
        `octokit.get${r.charAt(0).toUpperCase() +
          r.slice(
            1
          )}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      const a = n(t)[r]
      if (!a) {
        const e = new s(`No ${r} page found`, 404)
        return Promise.reject(e)
      }
      const u = { url: a, headers: applyAcceptHeader(t, o) }
      const p = e.request(u)
      return p
    }
    function applyAcceptHeader(e, t) {
      const r = e.headers && e.headers['x-github-media-type']
      if (!r || (t && t.accept)) {
        return t
      }
      t = t || {}
      t.accept = 'application/vnd.' + r.replace('; param=', '.').replace('; format=', '+')
      return t
    }
  },
  280: function(e, t) {
    t = e.exports = SemVer
    var r
    if (
      typeof process === 'object' &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ) {
      r = function() {
        var e = Array.prototype.slice.call(arguments, 0)
        e.unshift('SEMVER')
        console.log.apply(console, e)
      }
    } else {
      r = function() {}
    }
    t.SEMVER_SPEC_VERSION = '2.0.0'
    var i = 256
    var n = Number.MAX_SAFE_INTEGER || 9007199254740991
    var s = 16
    var o = (t.re = [])
    var a = (t.src = [])
    var u = 0
    var p = u++
    a[p] = '0|[1-9]\\d*'
    var c = u++
    a[c] = '[0-9]+'
    var d = u++
    a[d] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'
    var l = u++
    a[l] = '(' + a[p] + ')\\.' + '(' + a[p] + ')\\.' + '(' + a[p] + ')'
    var m = u++
    a[m] = '(' + a[c] + ')\\.' + '(' + a[c] + ')\\.' + '(' + a[c] + ')'
    var g = u++
    a[g] = '(?:' + a[p] + '|' + a[d] + ')'
    var h = u++
    a[h] = '(?:' + a[c] + '|' + a[d] + ')'
    var y = u++
    a[y] = '(?:-(' + a[g] + '(?:\\.' + a[g] + ')*))'
    var f = u++
    a[f] = '(?:-?(' + a[h] + '(?:\\.' + a[h] + ')*))'
    var b = u++
    a[b] = '[0-9A-Za-z-]+'
    var _ = u++
    a[_] = '(?:\\+(' + a[b] + '(?:\\.' + a[b] + ')*))'
    var v = u++
    var q = 'v?' + a[l] + a[y] + '?' + a[_] + '?'
    a[v] = '^' + q + '$'
    var w = '[v=\\s]*' + a[m] + a[f] + '?' + a[_] + '?'
    var E = u++
    a[E] = '^' + w + '$'
    var T = u++
    a[T] = '((?:<|>)?=?)'
    var k = u++
    a[k] = a[c] + '|x|X|\\*'
    var j = u++
    a[j] = a[p] + '|x|X|\\*'
    var S = u++
    a[S] =
      '[v=\\s]*(' +
      a[j] +
      ')' +
      '(?:\\.(' +
      a[j] +
      ')' +
      '(?:\\.(' +
      a[j] +
      ')' +
      '(?:' +
      a[y] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var O = u++
    a[O] =
      '[v=\\s]*(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:\\.(' +
      a[k] +
      ')' +
      '(?:' +
      a[f] +
      ')?' +
      a[_] +
      '?' +
      ')?)?'
    var P = u++
    a[P] = '^' + a[T] + '\\s*' + a[S] + '$'
    var C = u++
    a[C] = '^' + a[T] + '\\s*' + a[O] + '$'
    var x = u++
    a[x] =
      '(?:^|[^\\d])' +
      '(\\d{1,' +
      s +
      '})' +
      '(?:\\.(\\d{1,' +
      s +
      '}))?' +
      '(?:\\.(\\d{1,' +
      s +
      '}))?' +
      '(?:$|[^\\d])'
    var R = u++
    a[R] = '(?:~>?)'
    var A = u++
    a[A] = '(\\s*)' + a[R] + '\\s+'
    o[A] = new RegExp(a[A], 'g')
    var G = '$1~'
    var L = u++
    a[L] = '^' + a[R] + a[S] + '$'
    var D = u++
    a[D] = '^' + a[R] + a[O] + '$'
    var $ = u++
    a[$] = '(?:\\^)'
    var U = u++
    a[U] = '(\\s*)' + a[$] + '\\s+'
    o[U] = new RegExp(a[U], 'g')
    var F = '$1^'
    var B = u++
    a[B] = '^' + a[$] + a[S] + '$'
    var M = u++
    a[M] = '^' + a[$] + a[O] + '$'
    var I = u++
    a[I] = '^' + a[T] + '\\s*(' + w + ')$|^$'
    var H = u++
    a[H] = '^' + a[T] + '\\s*(' + q + ')$|^$'
    var N = u++
    a[N] = '(\\s*)' + a[T] + '\\s*(' + w + '|' + a[S] + ')'
    o[N] = new RegExp(a[N], 'g')
    var z = '$1$2$3'
    var V = u++
    a[V] = '^\\s*(' + a[S] + ')' + '\\s+-\\s+' + '(' + a[S] + ')' + '\\s*$'
    var W = u++
    a[W] = '^\\s*(' + a[O] + ')' + '\\s+-\\s+' + '(' + a[O] + ')' + '\\s*$'
    var K = u++
    a[K] = '(<|>)?=?\\s*\\*'
    for (var X = 0; X < u; X++) {
      r(X, a[X])
      if (!o[X]) {
        o[X] = new RegExp(a[X])
      }
    }
    t.parse = parse
    function parse(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof SemVer) {
        return e
      }
      if (typeof e !== 'string') {
        return null
      }
      if (e.length > i) {
        return null
      }
      var r = t.loose ? o[E] : o[v]
      if (!r.test(e)) {
        return null
      }
      try {
        return new SemVer(e, t)
      } catch (e) {
        return null
      }
    }
    t.valid = valid
    function valid(e, t) {
      var r = parse(e, t)
      return r ? r.version : null
    }
    t.clean = clean
    function clean(e, t) {
      var r = parse(e.trim().replace(/^[=v]+/, ''), t)
      return r ? r.version : null
    }
    t.SemVer = SemVer
    function SemVer(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof SemVer) {
        if (e.loose === t.loose) {
          return e
        } else {
          e = e.version
        }
      } else if (typeof e !== 'string') {
        throw new TypeError('Invalid Version: ' + e)
      }
      if (e.length > i) {
        throw new TypeError('version is longer than ' + i + ' characters')
      }
      if (!(this instanceof SemVer)) {
        return new SemVer(e, t)
      }
      r('SemVer', e, t)
      this.options = t
      this.loose = !!t.loose
      var s = e.trim().match(t.loose ? o[E] : o[v])
      if (!s) {
        throw new TypeError('Invalid Version: ' + e)
      }
      this.raw = e
      this.major = +s[1]
      this.minor = +s[2]
      this.patch = +s[3]
      if (this.major > n || this.major < 0) {
        throw new TypeError('Invalid major version')
      }
      if (this.minor > n || this.minor < 0) {
        throw new TypeError('Invalid minor version')
      }
      if (this.patch > n || this.patch < 0) {
        throw new TypeError('Invalid patch version')
      }
      if (!s[4]) {
        this.prerelease = []
      } else {
        this.prerelease = s[4].split('.').map(function(e) {
          if (/^[0-9]+$/.test(e)) {
            var t = +e
            if (t >= 0 && t < n) {
              return t
            }
          }
          return e
        })
      }
      this.build = s[5] ? s[5].split('.') : []
      this.format()
    }
    SemVer.prototype.format = function() {
      this.version = this.major + '.' + this.minor + '.' + this.patch
      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.')
      }
      return this.version
    }
    SemVer.prototype.toString = function() {
      return this.version
    }
    SemVer.prototype.compare = function(e) {
      r('SemVer.compare', this.version, this.options, e)
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      return this.compareMain(e) || this.comparePre(e)
    }
    SemVer.prototype.compareMain = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      return (
        compareIdentifiers(this.major, e.major) ||
        compareIdentifiers(this.minor, e.minor) ||
        compareIdentifiers(this.patch, e.patch)
      )
    }
    SemVer.prototype.comparePre = function(e) {
      if (!(e instanceof SemVer)) {
        e = new SemVer(e, this.options)
      }
      if (this.prerelease.length && !e.prerelease.length) {
        return -1
      } else if (!this.prerelease.length && e.prerelease.length) {
        return 1
      } else if (!this.prerelease.length && !e.prerelease.length) {
        return 0
      }
      var t = 0
      do {
        var i = this.prerelease[t]
        var n = e.prerelease[t]
        r('prerelease compare', t, i, n)
        if (i === undefined && n === undefined) {
          return 0
        } else if (n === undefined) {
          return 1
        } else if (i === undefined) {
          return -1
        } else if (i === n) {
          continue
        } else {
          return compareIdentifiers(i, n)
        }
      } while (++t)
    }
    SemVer.prototype.inc = function(e, t) {
      switch (e) {
        case 'premajor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor = 0
          this.major++
          this.inc('pre', t)
          break
        case 'preminor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor++
          this.inc('pre', t)
          break
        case 'prepatch':
          this.prerelease.length = 0
          this.inc('patch', t)
          this.inc('pre', t)
          break
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', t)
          }
          this.inc('pre', t)
          break
        case 'major':
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++
          }
          this.minor = 0
          this.patch = 0
          this.prerelease = []
          break
        case 'minor':
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++
          }
          this.patch = 0
          this.prerelease = []
          break
        case 'patch':
          if (this.prerelease.length === 0) {
            this.patch++
          }
          this.prerelease = []
          break
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0]
          } else {
            var r = this.prerelease.length
            while (--r >= 0) {
              if (typeof this.prerelease[r] === 'number') {
                this.prerelease[r]++
                r = -2
              }
            }
            if (r === -1) {
              this.prerelease.push(0)
            }
          }
          if (t) {
            if (this.prerelease[0] === t) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [t, 0]
              }
            } else {
              this.prerelease = [t, 0]
            }
          }
          break
        default:
          throw new Error('invalid increment argument: ' + e)
      }
      this.format()
      this.raw = this.version
      return this
    }
    t.inc = inc
    function inc(e, t, r, i) {
      if (typeof r === 'string') {
        i = r
        r = undefined
      }
      try {
        return new SemVer(e, r).inc(t, i).version
      } catch (e) {
        return null
      }
    }
    t.diff = diff
    function diff(e, t) {
      if (eq(e, t)) {
        return null
      } else {
        var r = parse(e)
        var i = parse(t)
        var n = ''
        if (r.prerelease.length || i.prerelease.length) {
          n = 'pre'
          var s = 'prerelease'
        }
        for (var o in r) {
          if (o === 'major' || o === 'minor' || o === 'patch') {
            if (r[o] !== i[o]) {
              return n + o
            }
          }
        }
        return s
      }
    }
    t.compareIdentifiers = compareIdentifiers
    var J = /^[0-9]+$/
    function compareIdentifiers(e, t) {
      var r = J.test(e)
      var i = J.test(t)
      if (r && i) {
        e = +e
        t = +t
      }
      return e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1
    }
    t.rcompareIdentifiers = rcompareIdentifiers
    function rcompareIdentifiers(e, t) {
      return compareIdentifiers(t, e)
    }
    t.major = major
    function major(e, t) {
      return new SemVer(e, t).major
    }
    t.minor = minor
    function minor(e, t) {
      return new SemVer(e, t).minor
    }
    t.patch = patch
    function patch(e, t) {
      return new SemVer(e, t).patch
    }
    t.compare = compare
    function compare(e, t, r) {
      return new SemVer(e, r).compare(new SemVer(t, r))
    }
    t.compareLoose = compareLoose
    function compareLoose(e, t) {
      return compare(e, t, true)
    }
    t.rcompare = rcompare
    function rcompare(e, t, r) {
      return compare(t, e, r)
    }
    t.sort = sort
    function sort(e, r) {
      return e.sort(function(e, i) {
        return t.compare(e, i, r)
      })
    }
    t.rsort = rsort
    function rsort(e, r) {
      return e.sort(function(e, i) {
        return t.rcompare(e, i, r)
      })
    }
    t.gt = gt
    function gt(e, t, r) {
      return compare(e, t, r) > 0
    }
    t.lt = lt
    function lt(e, t, r) {
      return compare(e, t, r) < 0
    }
    t.eq = eq
    function eq(e, t, r) {
      return compare(e, t, r) === 0
    }
    t.neq = neq
    function neq(e, t, r) {
      return compare(e, t, r) !== 0
    }
    t.gte = gte
    function gte(e, t, r) {
      return compare(e, t, r) >= 0
    }
    t.lte = lte
    function lte(e, t, r) {
      return compare(e, t, r) <= 0
    }
    t.cmp = cmp
    function cmp(e, t, r, i) {
      switch (t) {
        case '===':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e === r
        case '!==':
          if (typeof e === 'object') e = e.version
          if (typeof r === 'object') r = r.version
          return e !== r
        case '':
        case '=':
        case '==':
          return eq(e, r, i)
        case '!=':
          return neq(e, r, i)
        case '>':
          return gt(e, r, i)
        case '>=':
          return gte(e, r, i)
        case '<':
          return lt(e, r, i)
        case '<=':
          return lte(e, r, i)
        default:
          throw new TypeError('Invalid operator: ' + t)
      }
    }
    t.Comparator = Comparator
    function Comparator(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof Comparator) {
        if (e.loose === !!t.loose) {
          return e
        } else {
          e = e.value
        }
      }
      if (!(this instanceof Comparator)) {
        return new Comparator(e, t)
      }
      r('comparator', e, t)
      this.options = t
      this.loose = !!t.loose
      this.parse(e)
      if (this.semver === Y) {
        this.value = ''
      } else {
        this.value = this.operator + this.semver.version
      }
      r('comp', this)
    }
    var Y = {}
    Comparator.prototype.parse = function(e) {
      var t = this.options.loose ? o[I] : o[H]
      var r = e.match(t)
      if (!r) {
        throw new TypeError('Invalid comparator: ' + e)
      }
      this.operator = r[1]
      if (this.operator === '=') {
        this.operator = ''
      }
      if (!r[2]) {
        this.semver = Y
      } else {
        this.semver = new SemVer(r[2], this.options.loose)
      }
    }
    Comparator.prototype.toString = function() {
      return this.value
    }
    Comparator.prototype.test = function(e) {
      r('Comparator.test', e, this.options.loose)
      if (this.semver === Y) {
        return true
      }
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      }
      return cmp(e, this.operator, this.semver, this.options)
    }
    Comparator.prototype.intersects = function(e, t) {
      if (!(e instanceof Comparator)) {
        throw new TypeError('a Comparator is required')
      }
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      var r
      if (this.operator === '') {
        r = new Range(e.value, t)
        return satisfies(this.value, r, t)
      } else if (e.operator === '') {
        r = new Range(this.value, t)
        return satisfies(e.semver, r, t)
      }
      var i =
        (this.operator === '>=' || this.operator === '>') &&
        (e.operator === '>=' || e.operator === '>')
      var n =
        (this.operator === '<=' || this.operator === '<') &&
        (e.operator === '<=' || e.operator === '<')
      var s = this.semver.version === e.semver.version
      var o =
        (this.operator === '>=' || this.operator === '<=') &&
        (e.operator === '>=' || e.operator === '<=')
      var a =
        cmp(this.semver, '<', e.semver, t) &&
        (this.operator === '>=' || this.operator === '>') &&
          (e.operator === '<=' || e.operator === '<')
      var u =
        cmp(this.semver, '>', e.semver, t) &&
        (this.operator === '<=' || this.operator === '<') &&
          (e.operator === '>=' || e.operator === '>')
      return i || n || (s && o) || a || u
    }
    t.Range = Range
    function Range(e, t) {
      if (!t || typeof t !== 'object') {
        t = { loose: !!t, includePrerelease: false }
      }
      if (e instanceof Range) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
          return e
        } else {
          return new Range(e.raw, t)
        }
      }
      if (e instanceof Comparator) {
        return new Range(e.value, t)
      }
      if (!(this instanceof Range)) {
        return new Range(e, t)
      }
      this.options = t
      this.loose = !!t.loose
      this.includePrerelease = !!t.includePrerelease
      this.raw = e
      this.set = e
        .split(/\s*\|\|\s*/)
        .map(function(e) {
          return this.parseRange(e.trim())
        }, this)
        .filter(function(e) {
          return e.length
        })
      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + e)
      }
      this.format()
    }
    Range.prototype.format = function() {
      this.range = this.set
        .map(function(e) {
          return e.join(' ').trim()
        })
        .join('||')
        .trim()
      return this.range
    }
    Range.prototype.toString = function() {
      return this.range
    }
    Range.prototype.parseRange = function(e) {
      var t = this.options.loose
      e = e.trim()
      var i = t ? o[W] : o[V]
      e = e.replace(i, hyphenReplace)
      r('hyphen replace', e)
      e = e.replace(o[N], z)
      r('comparator trim', e, o[N])
      e = e.replace(o[A], G)
      e = e.replace(o[U], F)
      e = e.split(/\s+/).join(' ')
      var n = t ? o[I] : o[H]
      var s = e
        .split(' ')
        .map(function(e) {
          return parseComparator(e, this.options)
        }, this)
        .join(' ')
        .split(/\s+/)
      if (this.options.loose) {
        s = s.filter(function(e) {
          return !!e.match(n)
        })
      }
      s = s.map(function(e) {
        return new Comparator(e, this.options)
      }, this)
      return s
    }
    Range.prototype.intersects = function(e, t) {
      if (!(e instanceof Range)) {
        throw new TypeError('a Range is required')
      }
      return this.set.some(function(r) {
        return r.every(function(r) {
          return e.set.some(function(e) {
            return e.every(function(e) {
              return r.intersects(e, t)
            })
          })
        })
      })
    }
    t.toComparators = toComparators
    function toComparators(e, t) {
      return new Range(e, t).set.map(function(e) {
        return e
          .map(function(e) {
            return e.value
          })
          .join(' ')
          .trim()
          .split(' ')
      })
    }
    function parseComparator(e, t) {
      r('comp', e, t)
      e = replaceCarets(e, t)
      r('caret', e)
      e = replaceTildes(e, t)
      r('tildes', e)
      e = replaceXRanges(e, t)
      r('xrange', e)
      e = replaceStars(e, t)
      r('stars', e)
      return e
    }
    function isX(e) {
      return !e || e.toLowerCase() === 'x' || e === '*'
    }
    function replaceTildes(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceTilde(e, t)
        })
        .join(' ')
    }
    function replaceTilde(e, t) {
      var i = t.loose ? o[D] : o[L]
      return e.replace(i, function(t, i, n, s, o) {
        r('tilde', e, t, i, n, s, o)
        var a
        if (isX(i)) {
          a = ''
        } else if (isX(n)) {
          a = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0'
        } else if (isX(s)) {
          a = '>=' + i + '.' + n + '.0 <' + i + '.' + (+n + 1) + '.0'
        } else if (o) {
          r('replaceTilde pr', o)
          a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + (+n + 1) + '.0'
        } else {
          a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + (+n + 1) + '.0'
        }
        r('tilde return', a)
        return a
      })
    }
    function replaceCarets(e, t) {
      return e
        .trim()
        .split(/\s+/)
        .map(function(e) {
          return replaceCaret(e, t)
        })
        .join(' ')
    }
    function replaceCaret(e, t) {
      r('caret', e, t)
      var i = t.loose ? o[M] : o[B]
      return e.replace(i, function(t, i, n, s, o) {
        r('caret', e, t, i, n, s, o)
        var a
        if (isX(i)) {
          a = ''
        } else if (isX(n)) {
          a = '>=' + i + '.0.0 <' + (+i + 1) + '.0.0'
        } else if (isX(s)) {
          if (i === '0') {
            a = '>=' + i + '.' + n + '.0 <' + i + '.' + (+n + 1) + '.0'
          } else {
            a = '>=' + i + '.' + n + '.0 <' + (+i + 1) + '.0.0'
          }
        } else if (o) {
          r('replaceCaret pr', o)
          if (i === '0') {
            if (n === '0') {
              a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + n + '.' + (+s + 1)
            } else {
              a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + i + '.' + (+n + 1) + '.0'
            }
          } else {
            a = '>=' + i + '.' + n + '.' + s + '-' + o + ' <' + (+i + 1) + '.0.0'
          }
        } else {
          r('no pr')
          if (i === '0') {
            if (n === '0') {
              a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + n + '.' + (+s + 1)
            } else {
              a = '>=' + i + '.' + n + '.' + s + ' <' + i + '.' + (+n + 1) + '.0'
            }
          } else {
            a = '>=' + i + '.' + n + '.' + s + ' <' + (+i + 1) + '.0.0'
          }
        }
        r('caret return', a)
        return a
      })
    }
    function replaceXRanges(e, t) {
      r('replaceXRanges', e, t)
      return e
        .split(/\s+/)
        .map(function(e) {
          return replaceXRange(e, t)
        })
        .join(' ')
    }
    function replaceXRange(e, t) {
      e = e.trim()
      var i = t.loose ? o[C] : o[P]
      return e.replace(i, function(t, i, n, s, o, a) {
        r('xRange', e, t, i, n, s, o, a)
        var u = isX(n)
        var p = u || isX(s)
        var c = p || isX(o)
        var d = c
        if (i === '=' && d) {
          i = ''
        }
        if (u) {
          if (i === '>' || i === '<') {
            t = '<0.0.0'
          } else {
            t = '*'
          }
        } else if (i && d) {
          if (p) {
            s = 0
          }
          o = 0
          if (i === '>') {
            i = '>='
            if (p) {
              n = +n + 1
              s = 0
              o = 0
            } else {
              s = +s + 1
              o = 0
            }
          } else if (i === '<=') {
            i = '<'
            if (p) {
              n = +n + 1
            } else {
              s = +s + 1
            }
          }
          t = i + n + '.' + s + '.' + o
        } else if (p) {
          t = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0'
        } else if (c) {
          t = '>=' + n + '.' + s + '.0 <' + n + '.' + (+s + 1) + '.0'
        }
        r('xRange return', t)
        return t
      })
    }
    function replaceStars(e, t) {
      r('replaceStars', e, t)
      return e.trim().replace(o[K], '')
    }
    function hyphenReplace(e, t, r, i, n, s, o, a, u, p, c, d, l) {
      if (isX(r)) {
        t = ''
      } else if (isX(i)) {
        t = '>=' + r + '.0.0'
      } else if (isX(n)) {
        t = '>=' + r + '.' + i + '.0'
      } else {
        t = '>=' + t
      }
      if (isX(u)) {
        a = ''
      } else if (isX(p)) {
        a = '<' + (+u + 1) + '.0.0'
      } else if (isX(c)) {
        a = '<' + u + '.' + (+p + 1) + '.0'
      } else if (d) {
        a = '<=' + u + '.' + p + '.' + c + '-' + d
      } else {
        a = '<=' + a
      }
      return (t + ' ' + a).trim()
    }
    Range.prototype.test = function(e) {
      if (!e) {
        return false
      }
      if (typeof e === 'string') {
        e = new SemVer(e, this.options)
      }
      for (var t = 0; t < this.set.length; t++) {
        if (testSet(this.set[t], e, this.options)) {
          return true
        }
      }
      return false
    }
    function testSet(e, t, i) {
      for (var n = 0; n < e.length; n++) {
        if (!e[n].test(t)) {
          return false
        }
      }
      if (t.prerelease.length && !i.includePrerelease) {
        for (n = 0; n < e.length; n++) {
          r(e[n].semver)
          if (e[n].semver === Y) {
            continue
          }
          if (e[n].semver.prerelease.length > 0) {
            var s = e[n].semver
            if (s.major === t.major && s.minor === t.minor && s.patch === t.patch) {
              return true
            }
          }
        }
        return false
      }
      return true
    }
    t.satisfies = satisfies
    function satisfies(e, t, r) {
      try {
        t = new Range(t, r)
      } catch (e) {
        return false
      }
      return t.test(e)
    }
    t.maxSatisfying = maxSatisfying
    function maxSatisfying(e, t, r) {
      var i = null
      var n = null
      try {
        var s = new Range(t, r)
      } catch (e) {
        return null
      }
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!i || n.compare(e) === -1) {
            i = e
            n = new SemVer(i, r)
          }
        }
      })
      return i
    }
    t.minSatisfying = minSatisfying
    function minSatisfying(e, t, r) {
      var i = null
      var n = null
      try {
        var s = new Range(t, r)
      } catch (e) {
        return null
      }
      e.forEach(function(e) {
        if (s.test(e)) {
          if (!i || n.compare(e) === 1) {
            i = e
            n = new SemVer(i, r)
          }
        }
      })
      return i
    }
    t.minVersion = minVersion
    function minVersion(e, t) {
      e = new Range(e, t)
      var r = new SemVer('0.0.0')
      if (e.test(r)) {
        return r
      }
      r = new SemVer('0.0.0-0')
      if (e.test(r)) {
        return r
      }
      r = null
      for (var i = 0; i < e.set.length; ++i) {
        var n = e.set[i]
        n.forEach(function(e) {
          var t = new SemVer(e.semver.version)
          switch (e.operator) {
            case '>':
              if (t.prerelease.length === 0) {
                t.patch++
              } else {
                t.prerelease.push(0)
              }
              t.raw = t.format()
            case '':
            case '>=':
              if (!r || gt(r, t)) {
                r = t
              }
              break
            case '<':
            case '<=':
              break
            default:
              throw new Error('Unexpected operation: ' + e.operator)
          }
        })
      }
      if (r && e.test(r)) {
        return r
      }
      return null
    }
    t.validRange = validRange
    function validRange(e, t) {
      try {
        return new Range(e, t).range || '*'
      } catch (e) {
        return null
      }
    }
    t.ltr = ltr
    function ltr(e, t, r) {
      return outside(e, t, '<', r)
    }
    t.gtr = gtr
    function gtr(e, t, r) {
      return outside(e, t, '>', r)
    }
    t.outside = outside
    function outside(e, t, r, i) {
      e = new SemVer(e, i)
      t = new Range(t, i)
      var n, s, o, a, u
      switch (r) {
        case '>':
          n = gt
          s = lte
          o = lt
          a = '>'
          u = '>='
          break
        case '<':
          n = lt
          s = gte
          o = gt
          a = '<'
          u = '<='
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      }
      if (satisfies(e, t, i)) {
        return false
      }
      for (var p = 0; p < t.set.length; ++p) {
        var c = t.set[p]
        var d = null
        var l = null
        c.forEach(function(e) {
          if (e.semver === Y) {
            e = new Comparator('>=0.0.0')
          }
          d = d || e
          l = l || e
          if (n(e.semver, d.semver, i)) {
            d = e
          } else if (o(e.semver, l.semver, i)) {
            l = e
          }
        })
        if (d.operator === a || d.operator === u) {
          return false
        }
        if ((!l.operator || l.operator === a) && s(e, l.semver)) {
          return false
        } else if (l.operator === u && o(e, l.semver)) {
          return false
        }
      }
      return true
    }
    t.prerelease = prerelease
    function prerelease(e, t) {
      var r = parse(e, t)
      return r && r.prerelease.length ? r.prerelease : null
    }
    t.intersects = intersects
    function intersects(e, t, r) {
      e = new Range(e, r)
      t = new Range(t, r)
      return e.intersects(t)
    }
    t.coerce = coerce
    function coerce(e) {
      if (e instanceof SemVer) {
        return e
      }
      if (typeof e !== 'string') {
        return null
      }
      var t = e.match(o[x])
      if (t == null) {
        return null
      }
      return parse(t[1] + '.' + (t[2] || '0') + '.' + (t[3] || '0'))
    }
  },
  283: function(e, t, r) {
    'use strict'
    var i = r(35)
    function InterceptorManager() {
      this.handlers = []
    }
    InterceptorManager.prototype.use = function use(e, t, r) {
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: r ? r.synchronous : false,
        runWhen: r ? r.runWhen : null
      })
      return this.handlers.length - 1
    }
    InterceptorManager.prototype.eject = function eject(e) {
      if (this.handlers[e]) {
        this.handlers[e] = null
      }
    }
    InterceptorManager.prototype.forEach = function forEach(e) {
      i.forEach(this.handlers, function forEachHandler(t) {
        if (t !== null) {
          e(t)
        }
      })
    }
    e.exports = InterceptorManager
  },
  293: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: i } = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const n = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !n) {
        throw t
      }
      if (t.status === 401 && n && t.request && t.request.headers['x-github-otp']) {
        if (e.otp) {
          delete e.otp
        } else {
          throw new i('Invalid one-time password for two-factor authentication', 401, {
            headers: t.headers,
            request: r
          })
        }
      }
      if (typeof e.auth.on2fa !== 'function') {
        throw new i(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r }
        )
      }
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        })
        .then(t => {
          const i = Object.assign(r, { headers: Object.assign(r.headers, { 'x-github-otp': t }) })
          return e.octokit.request(i).then(r => {
            e.otp = t
            return r
          })
        })
    }
  },
  294: function(e, t, r) {
    e.exports = parseOptions
    const { Deprecation: i } = r(692)
    const { getUserAgent: n } = r(796)
    const s = r(969)
    const o = r(215)
    const a = s((e, t) => e.warn(t))
    const u = s((e, t) => e.warn(t))
    const p = s((e, t) => e.warn(t))
    function parseOptions(e, t, r) {
      if (e.headers) {
        e.headers = Object.keys(e.headers).reduce((t, r) => {
          t[r.toLowerCase()] = e.headers[r]
          return t
        }, {})
      }
      const s = {
        headers: e.headers || {},
        request: e.request || {},
        mediaType: { previews: [], format: '' }
      }
      if (e.baseUrl) {
        s.baseUrl = e.baseUrl
      }
      if (e.userAgent) {
        s.headers['user-agent'] = e.userAgent
      }
      if (e.previews) {
        s.mediaType.previews = e.previews
      }
      if (e.timeZone) {
        s.headers['time-zone'] = e.timeZone
      }
      if (e.timeout) {
        a(
          t,
          new i(
            '[@octokit/rest] new Octokit({timeout}) is deprecated. Use {request: {timeout}} instead. See https://github.com/octokit/request.js#request'
          )
        )
        s.request.timeout = e.timeout
      }
      if (e.agent) {
        u(
          t,
          new i(
            '[@octokit/rest] new Octokit({agent}) is deprecated. Use {request: {agent}} instead. See https://github.com/octokit/request.js#request'
          )
        )
        s.request.agent = e.agent
      }
      if (e.headers) {
        p(
          t,
          new i(
            '[@octokit/rest] new Octokit({headers}) is deprecated. Use {userAgent, previews} instead. See https://github.com/octokit/request.js#request'
          )
        )
      }
      const c = s.headers['user-agent']
      const d = `octokit.js/${o.version} ${n()}`
      s.headers['user-agent'] = [c, d].filter(Boolean).join(' ')
      s.request.hook = r.bind(null, 'request')
      return s
    }
  },
  297: function(e) {
    e.exports = class HttpError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'HttpError'
        this.code = t
        this.headers = r
      }
    }
  },
  299: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    const r = '1.1.2'
    const i = [
      /^\/search\//,
      /^\/repos\/[^/]+\/[^/]+\/commits\/[^/]+\/(check-runs|check-suites)([^/]|$)/,
      /^\/installation\/repositories([^/]|$)/,
      /^\/user\/installations([^/]|$)/,
      /^\/repos\/[^/]+\/[^/]+\/actions\/secrets([^/]|$)/,
      /^\/repos\/[^/]+\/[^/]+\/actions\/workflows(\/[^/]+\/runs)?([^/]|$)/,
      /^\/repos\/[^/]+\/[^/]+\/actions\/runs(\/[^/]+\/(artifacts|jobs))?([^/]|$)/
    ]
    function normalizePaginatedListResponse(e, t, r) {
      const n = t.replace(e.request.endpoint.DEFAULTS.baseUrl, '')
      const s = i.find(e => e.test(n))
      if (!s) return
      const o = r.data.incomplete_results
      const a = r.data.repository_selection
      const u = r.data.total_count
      delete r.data.incomplete_results
      delete r.data.repository_selection
      delete r.data.total_count
      const p = Object.keys(r.data)[0]
      const c = r.data[p]
      r.data = c
      if (typeof o !== 'undefined') {
        r.data.incomplete_results = o
      }
      if (typeof a !== 'undefined') {
        r.data.repository_selection = a
      }
      r.data.total_count = u
      Object.defineProperty(r.data, p, {
        get() {
          e.log.warn(
            `[@octokit/paginate-rest] "response.data.${p}" is deprecated for "GET ${n}". Get the results directly from "response.data"`
          )
          return Array.from(c)
        }
      })
    }
    function iterator(e, t, r) {
      const i = e.request.endpoint(t, r)
      const n = i.method
      const s = i.headers
      let o = i.url
      return {
        [Symbol.asyncIterator]: () => ({
          next() {
            if (!o) {
              return Promise.resolve({ done: true })
            }
            return e.request({ method: n, url: o, headers: s }).then(t => {
              normalizePaginatedListResponse(e, o, t)
              o = ((t.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1]
              return { value: t }
            })
          }
        })
      }
    }
    function paginate(e, t, r, i) {
      if (typeof r === 'function') {
        i = r
        r = undefined
      }
      return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), i)
    }
    function gather(e, t, r, i) {
      return r.next().then(n => {
        if (n.done) {
          return t
        }
        let s = false
        function done() {
          s = true
        }
        t = t.concat(i ? i(n.value, done) : n.value.data)
        if (s) {
          return t
        }
        return gather(e, t, r, i)
      })
    }
    function paginateRest(e) {
      return {
        paginate: Object.assign(paginate.bind(null, e), { iterator: iterator.bind(null, e) })
      }
    }
    paginateRest.VERSION = r
    t.paginateRest = paginateRest
  },
  323: function(e) {
    'use strict'
    var t = (e.exports = function(e) {
      return e !== null && typeof e === 'object' && typeof e.pipe === 'function'
    })
    t.writable = function(e) {
      return (
        t(e) &&
        e.writable !== false &&
        typeof e._write === 'function' &&
        typeof e._writableState === 'object'
      )
    }
    t.readable = function(e) {
      return (
        t(e) &&
        e.readable !== false &&
        typeof e._read === 'function' &&
        typeof e._readableState === 'object'
      )
    }
    t.duplex = function(e) {
      return t.writable(e) && t.readable(e)
    }
    t.transform = function(e) {
      return (
        t.duplex(e) && typeof e._transform === 'function' && typeof e._transformState === 'object'
      )
    }
  },
  336: function(e, t, r) {
    e.exports = hasLastPage
    const i = r(370)
    const n = r(577)
    function hasLastPage(e) {
      i(
        `octokit.hasLastPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return n(e).last
    }
  },
  348: function(e, t, r) {
    'use strict'
    e.exports = validate
    const { RequestError: i } = r(463)
    const n = r(854)
    const s = r(883)
    function validate(e, t) {
      if (!t.request.validate) {
        return
      }
      const { validate: r } = t.request
      Object.keys(r).forEach(e => {
        const o = n(r, e)
        const a = o.type
        let u
        let p
        let c = true
        let d = false
        if (/\./.test(e)) {
          u = e.replace(/\.[^.]+$/, '')
          d = u.slice(-2) === '[]'
          if (d) {
            u = u.slice(0, -2)
          }
          p = n(t, u)
          c = u === 'headers' || (typeof p === 'object' && p !== null)
        }
        const l = d ? (n(t, u) || []).map(t => t[e.split(/\./).pop()]) : [n(t, e)]
        l.forEach((r, n) => {
          const u = typeof r !== 'undefined'
          const p = r === null
          const l = d ? e.replace(/\[\]/, `[${n}]`) : e
          if (!o.required && !u) {
            return
          }
          if (!c) {
            return
          }
          if (o.allowNull && p) {
            return
          }
          if (!o.allowNull && p) {
            throw new i(`'${l}' cannot be null`, 400, { request: t })
          }
          if (o.required && !u) {
            throw new i(`Empty value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
              request: t
            })
          }
          if (a === 'integer') {
            const e = r
            r = parseInt(r, 10)
            if (isNaN(r)) {
              throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(e)} is NaN`, 400, {
                request: t
              })
            }
          }
          if (o.enum && o.enum.indexOf(String(r)) === -1) {
            throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
              request: t
            })
          }
          if (o.validation) {
            const e = new RegExp(o.validation)
            if (!e.test(r)) {
              throw new i(`Invalid value for parameter '${l}': ${JSON.stringify(r)}`, 400, {
                request: t
              })
            }
          }
          if (a === 'object' && typeof r === 'string') {
            try {
              r = JSON.parse(r)
            } catch (e) {
              throw new i(
                `JSON parse error of value for parameter '${l}': ${JSON.stringify(r)}`,
                400,
                { request: t }
              )
            }
          }
          s(t, o.mapTo || l, r)
        })
      })
      return t
    }
  },
  349: function(e, t, r) {
    e.exports = authenticationRequestError
    const { RequestError: i } = r(463)
    function authenticationRequestError(e, t, r) {
      if (!t.headers) throw t
      const n = /required/.test(t.headers['x-github-otp'] || '')
      if (t.status !== 401 || !n) {
        throw t
      }
      if (t.status === 401 && n && t.request && t.request.headers['x-github-otp']) {
        throw new i('Invalid one-time password for two-factor authentication', 401, {
          headers: t.headers,
          request: r
        })
      }
      if (typeof e.auth.on2fa !== 'function') {
        throw new i(
          '2FA required, but options.on2fa is not a function. See https://github.com/octokit/rest.js#authentication',
          401,
          { headers: t.headers, request: r }
        )
      }
      return Promise.resolve()
        .then(() => {
          return e.auth.on2fa()
        })
        .then(t => {
          const i = Object.assign(r, { headers: Object.assign({ 'x-github-otp': t }, r.headers) })
          return e.octokit.request(i)
        })
    }
  },
  352: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(727)
    var s = r(779)
    var o = r(825)
    var a = r(774)
    function createInstance(e) {
      var t = new s(e)
      var r = n(s.prototype.request, t)
      i.extend(r, s.prototype, t)
      i.extend(r, t)
      return r
    }
    var u = createInstance(a)
    u.Axios = s
    u.create = function create(e) {
      return createInstance(o(u.defaults, e))
    }
    u.Cancel = r(826)
    u.CancelToken = r(137)
    u.isCancel = r(732)
    u.all = function all(e) {
      return Promise.all(e)
    }
    u.spread = r(879)
    u.isAxiosError = r(769)
    e.exports = u
    e.exports.default = u
  },
  357: function(e) {
    e.exports = require('assert')
  },
  361: function(e) {
    e.exports = {
      name: 'axios',
      version: '0.21.2',
      description: 'Promise based HTTP client for the browser and node.js',
      main: 'index.js',
      scripts: {
        test: 'grunt test',
        start: 'node ./sandbox/server.js',
        build: 'NODE_ENV=production grunt build',
        preversion: 'npm test',
        version:
          'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json',
        postversion: 'git push && git push --tags',
        examples: 'node ./examples/server.js',
        coveralls: 'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
        fix: 'eslint --fix lib/**/*.js'
      },
      repository: { type: 'git', url: 'https://github.com/axios/axios.git' },
      keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
      author: 'Matt Zabriskie',
      license: 'MIT',
      bugs: { url: 'https://github.com/axios/axios/issues' },
      homepage: 'https://axios-http.com',
      devDependencies: {
        coveralls: '^3.0.0',
        'es6-promise': '^4.2.4',
        grunt: '^1.3.0',
        'grunt-banner': '^0.6.0',
        'grunt-cli': '^1.2.0',
        'grunt-contrib-clean': '^1.1.0',
        'grunt-contrib-watch': '^1.0.0',
        'grunt-eslint': '^23.0.0',
        'grunt-karma': '^4.0.0',
        'grunt-mocha-test': '^0.13.3',
        'grunt-ts': '^6.0.0-beta.19',
        'grunt-webpack': '^4.0.2',
        'istanbul-instrumenter-loader': '^1.0.0',
        'jasmine-core': '^2.4.1',
        karma: '^6.3.2',
        'karma-chrome-launcher': '^3.1.0',
        'karma-firefox-launcher': '^2.1.0',
        'karma-jasmine': '^1.1.1',
        'karma-jasmine-ajax': '^0.1.13',
        'karma-safari-launcher': '^1.0.0',
        'karma-sauce-launcher': '^4.3.6',
        'karma-sinon': '^1.0.5',
        'karma-sourcemap-loader': '^0.3.8',
        'karma-webpack': '^4.0.2',
        'load-grunt-tasks': '^3.5.2',
        minimist: '^1.2.0',
        mocha: '^8.2.1',
        sinon: '^4.5.0',
        'terser-webpack-plugin': '^4.2.3',
        typescript: '^4.0.5',
        'url-search-params': '^0.10.0',
        webpack: '^4.44.2',
        'webpack-dev-server': '^3.11.0'
      },
      browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' },
      jsdelivr: 'dist/axios.min.js',
      unpkg: 'dist/axios.min.js',
      typings: './index.d.ts',
      dependencies: { 'follow-redirects': '^1.14.0' },
      bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' }]
    }
  },
  363: function(e) {
    e.exports = register
    function register(e, t, r, i) {
      if (typeof r !== 'function') {
        throw new Error('method for before hook must be a function')
      }
      if (!i) {
        i = {}
      }
      if (Array.isArray(t)) {
        return t.reverse().reduce(function(t, r) {
          return register.bind(null, e, r, t, i)
        }, r)()
      }
      return Promise.resolve().then(function() {
        if (!e.registry[t]) {
          return r(i)
        }
        return e.registry[t].reduce(function(e, t) {
          return t.hook.bind(null, e, i)
        }, r)()
      })
    }
  },
  368: function(e) {
    e.exports = function atob(e) {
      return Buffer.from(e, 'base64').toString('binary')
    }
  },
  369: function(e) {
    'use strict'
    e.exports = function enhanceError(e, t, r, i, n) {
      e.config = t
      if (r) {
        e.code = r
      }
      e.request = i
      e.response = n
      e.isAxiosError = true
      e.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        }
      }
      return e
    }
  },
  370: function(e) {
    e.exports = deprecate
    const t = {}
    function deprecate(e) {
      if (t[e]) {
        return
      }
      console.warn(`DEPRECATED (@octokit/rest): ${e}`)
      t[e] = 1
    }
  },
  385: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var i = _interopDefault(r(696))
    var n = r(796)
    function lowercaseKeys(e) {
      if (!e) {
        return {}
      }
      return Object.keys(e).reduce((t, r) => {
        t[r.toLowerCase()] = e[r]
        return t
      }, {})
    }
    function mergeDeep(e, t) {
      const r = Object.assign({}, e)
      Object.keys(t).forEach(n => {
        if (i(t[n])) {
          if (!(n in e)) Object.assign(r, { [n]: t[n] })
          else r[n] = mergeDeep(e[n], t[n])
        } else {
          Object.assign(r, { [n]: t[n] })
        }
      })
      return r
    }
    function merge(e, t, r) {
      if (typeof t === 'string') {
        let [e, i] = t.split(' ')
        r = Object.assign(i ? { method: e, url: i } : { url: e }, r)
      } else {
        r = Object.assign({}, t)
      }
      r.headers = lowercaseKeys(r.headers)
      const i = mergeDeep(e || {}, r)
      if (e && e.mediaType.previews.length) {
        i.mediaType.previews = e.mediaType.previews
          .filter(e => !i.mediaType.previews.includes(e))
          .concat(i.mediaType.previews)
      }
      i.mediaType.previews = i.mediaType.previews.map(e => e.replace(/-preview/, ''))
      return i
    }
    function addQueryParameters(e, t) {
      const r = /\?/.test(e) ? '&' : '?'
      const i = Object.keys(t)
      if (i.length === 0) {
        return e
      }
      return (
        e +
        r +
        i
          .map(e => {
            if (e === 'q') {
              return (
                'q=' +
                t.q
                  .split('+')
                  .map(encodeURIComponent)
                  .join('+')
              )
            }
            return `${e}=${encodeURIComponent(t[e])}`
          })
          .join('&')
      )
    }
    const s = /\{[^}]+\}/g
    function removeNonChars(e) {
      return e.replace(/^\W+|\W+$/g, '').split(/,/)
    }
    function extractUrlVariableNames(e) {
      const t = e.match(s)
      if (!t) {
        return []
      }
      return t.map(removeNonChars).reduce((e, t) => e.concat(t), [])
    }
    function omit(e, t) {
      return Object.keys(e)
        .filter(e => !t.includes(e))
        .reduce((t, r) => {
          t[r] = e[r]
          return t
        }, {})
    }
    function encodeReserved(e) {
      return e
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function(e) {
          if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e)
              .replace(/%5B/g, '[')
              .replace(/%5D/g, ']')
          }
          return e
        })
        .join('')
    }
    function encodeUnreserved(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return (
          '%' +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
        )
      })
    }
    function encodeValue(e, t, r) {
      t = e === '+' || e === '#' ? encodeReserved(t) : encodeUnreserved(t)
      if (r) {
        return encodeUnreserved(r) + '=' + t
      } else {
        return t
      }
    }
    function isDefined(e) {
      return e !== undefined && e !== null
    }
    function isKeyOperator(e) {
      return e === ';' || e === '&' || e === '?'
    }
    function getValues(e, t, r, i) {
      var n = e[r],
        s = []
      if (isDefined(n) && n !== '') {
        if (typeof n === 'string' || typeof n === 'number' || typeof n === 'boolean') {
          n = n.toString()
          if (i && i !== '*') {
            n = n.substring(0, parseInt(i, 10))
          }
          s.push(encodeValue(t, n, isKeyOperator(t) ? r : ''))
        } else {
          if (i === '*') {
            if (Array.isArray(n)) {
              n.filter(isDefined).forEach(function(e) {
                s.push(encodeValue(t, e, isKeyOperator(t) ? r : ''))
              })
            } else {
              Object.keys(n).forEach(function(e) {
                if (isDefined(n[e])) {
                  s.push(encodeValue(t, n[e], e))
                }
              })
            }
          } else {
            const e = []
            if (Array.isArray(n)) {
              n.filter(isDefined).forEach(function(r) {
                e.push(encodeValue(t, r))
              })
            } else {
              Object.keys(n).forEach(function(r) {
                if (isDefined(n[r])) {
                  e.push(encodeUnreserved(r))
                  e.push(encodeValue(t, n[r].toString()))
                }
              })
            }
            if (isKeyOperator(t)) {
              s.push(encodeUnreserved(r) + '=' + e.join(','))
            } else if (e.length !== 0) {
              s.push(e.join(','))
            }
          }
        }
      } else {
        if (t === ';') {
          if (isDefined(n)) {
            s.push(encodeUnreserved(r))
          }
        } else if (n === '' && (t === '&' || t === '?')) {
          s.push(encodeUnreserved(r) + '=')
        } else if (n === '') {
          s.push('')
        }
      }
      return s
    }
    function parseUrl(e) {
      return { expand: expand.bind(null, e) }
    }
    function expand(e, t) {
      var r = ['+', '#', '.', '/', ';', '?', '&']
      return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(e, i, n) {
        if (i) {
          let e = ''
          const n = []
          if (r.indexOf(i.charAt(0)) !== -1) {
            e = i.charAt(0)
            i = i.substr(1)
          }
          i.split(/,/g).forEach(function(r) {
            var i = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r)
            n.push(getValues(t, e, i[1], i[2] || i[3]))
          })
          if (e && e !== '+') {
            var s = ','
            if (e === '?') {
              s = '&'
            } else if (e !== '#') {
              s = e
            }
            return (n.length !== 0 ? e : '') + n.join(s)
          } else {
            return n.join(',')
          }
        } else {
          return encodeReserved(n)
        }
      })
    }
    function parse(e) {
      let t = e.method.toUpperCase()
      let r = (e.url || '/').replace(/:([a-z]\w+)/g, '{+$1}')
      let i = Object.assign({}, e.headers)
      let n
      let s = omit(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType'])
      const o = extractUrlVariableNames(r)
      r = parseUrl(r).expand(s)
      if (!/^http/.test(r)) {
        r = e.baseUrl + r
      }
      const a = Object.keys(e)
        .filter(e => o.includes(e))
        .concat('baseUrl')
      const u = omit(s, a)
      const p = /application\/octet-stream/i.test(i.accept)
      if (!p) {
        if (e.mediaType.format) {
          i.accept = i.accept
            .split(/,/)
            .map(t =>
              t.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${e.mediaType.format}`
              )
            )
            .join(',')
        }
        if (e.mediaType.previews.length) {
          const t = i.accept.match(/[\w-]+(?=-preview)/g) || []
          i.accept = t
            .concat(e.mediaType.previews)
            .map(t => {
              const r = e.mediaType.format ? `.${e.mediaType.format}` : '+json'
              return `application/vnd.github.${t}-preview${r}`
            })
            .join(',')
        }
      }
      if (['GET', 'HEAD'].includes(t)) {
        r = addQueryParameters(r, u)
      } else {
        if ('data' in u) {
          n = u.data
        } else {
          if (Object.keys(u).length) {
            n = u
          } else {
            i['content-length'] = 0
          }
        }
      }
      if (!i['content-type'] && typeof n !== 'undefined') {
        i['content-type'] = 'application/json; charset=utf-8'
      }
      if (['PATCH', 'PUT'].includes(t) && typeof n === 'undefined') {
        n = ''
      }
      return Object.assign(
        { method: t, url: r, headers: i },
        typeof n !== 'undefined' ? { body: n } : null,
        e.request ? { request: e.request } : null
      )
    }
    function endpointWithDefaults(e, t, r) {
      return parse(merge(e, t, r))
    }
    function withDefaults(e, t) {
      const r = merge(e, t)
      const i = endpointWithDefaults.bind(null, r)
      return Object.assign(i, {
        DEFAULTS: r,
        defaults: withDefaults.bind(null, r),
        merge: merge.bind(null, r),
        parse: parse
      })
    }
    const o = '5.5.2'
    const a = `octokit-endpoint.js/${o} ${n.getUserAgent()}`
    const u = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: { accept: 'application/vnd.github.v3+json', 'user-agent': a },
      mediaType: { format: '', previews: [] }
    }
    const p = withDefaults(null, u)
    t.endpoint = p
  },
  389: function(e, t, r) {
    'use strict'
    const i = r(747)
    const n = r(866)
    function readShebang(e) {
      const t = 150
      let r
      if (Buffer.alloc) {
        r = Buffer.alloc(t)
      } else {
        r = new Buffer(t)
        r.fill(0)
      }
      let s
      try {
        s = i.openSync(e, 'r')
        i.readSync(s, r, 0, t, 0)
        i.closeSync(s)
      } catch (e) {}
      return n(r.toString())
    }
    e.exports = readShebang
  },
  402: function(e, t, r) {
    e.exports = Octokit
    const { request: i } = r(753)
    const n = r(523)
    const s = r(294)
    function Octokit(e, t) {
      t = t || {}
      const r = new n.Collection()
      const o = Object.assign(
        { debug: () => {}, info: () => {}, warn: console.warn, error: console.error },
        t && t.log
      )
      const a = { hook: r, log: o, request: i.defaults(s(t, o, r)) }
      e.forEach(e => e(a, t))
      return a
    }
  },
  411: function(e, t, r) {
    'use strict'
    var i = r(35)
    e.exports = function normalizeHeaderName(e, t) {
      i.forEach(e, function processHeader(r, i) {
        if (i !== t && i.toUpperCase() === t.toUpperCase()) {
          e[t] = r
          delete e[i]
        }
      })
    }
  },
  413: function(e) {
    e.exports = require('stream')
  },
  427: function(e, t, r) {
    'use strict'
    const i = r(669)
    let n
    if (typeof i.getSystemErrorName === 'function') {
      e.exports = i.getSystemErrorName
    } else {
      try {
        n = process.binding('uv')
        if (typeof n.errname !== 'function') {
          throw new TypeError('uv.errname is not a function')
        }
      } catch (e) {
        console.error("execa/lib/errname: unable to establish process.binding('uv')", e)
        n = null
      }
      e.exports = e => errname(n, e)
    }
    e.exports.__test__ = errname
    function errname(e, t) {
      if (e) {
        return e.errname(t)
      }
      if (!(t < 0)) {
        throw new Error('err >= 0')
      }
      return `Unknown system error ${t}`
    }
  },
  430: function(e, t, r) {
    e.exports = octokitValidate
    const i = r(348)
    function octokitValidate(e) {
      e.hook.before('request', i.bind(null, e))
    }
  },
  453: function(e, t, r) {
    var i = r(969)
    var n = r(9)
    var s = r(747)
    var o = function() {}
    var a = /^v?\.0/.test(process.version)
    var u = function(e) {
      return typeof e === 'function'
    }
    var p = function(e) {
      if (!a) return false
      if (!s) return false
      return (e instanceof (s.ReadStream || o) || e instanceof (s.WriteStream || o)) && u(e.close)
    }
    var c = function(e) {
      return e.setHeader && u(e.abort)
    }
    var d = function(e, t, r, s) {
      s = i(s)
      var a = false
      e.on('close', function() {
        a = true
      })
      n(e, { readable: t, writable: r }, function(e) {
        if (e) return s(e)
        a = true
        s()
      })
      var d = false
      return function(t) {
        if (a) return
        if (d) return
        d = true
        if (p(e)) return e.close(o)
        if (c(e)) return e.abort()
        if (u(e.destroy)) return e.destroy()
        s(t || new Error('stream was destroyed'))
      }
    }
    var l = function(e) {
      e()
    }
    var m = function(e, t) {
      return e.pipe(t)
    }
    var g = function() {
      var e = Array.prototype.slice.call(arguments)
      var t = (u(e[e.length - 1] || o) && e.pop()) || o
      if (Array.isArray(e[0])) e = e[0]
      if (e.length < 2) throw new Error('pump requires two streams per minimum')
      var r
      var i = e.map(function(n, s) {
        var o = s < e.length - 1
        var a = s > 0
        return d(n, o, a, function(e) {
          if (!r) r = e
          if (e) i.forEach(l)
          if (o) return
          i.forEach(l)
          t(r)
        })
      })
      return e.reduce(m)
    }
    e.exports = g
  },
  454: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var i = _interopDefault(r(413))
    var n = _interopDefault(r(605))
    var s = _interopDefault(r(835))
    var o = _interopDefault(r(211))
    var a = _interopDefault(r(761))
    const u = i.Readable
    const p = Symbol('buffer')
    const c = Symbol('type')
    class Blob {
      constructor() {
        this[c] = ''
        const e = arguments[0]
        const t = arguments[1]
        const r = []
        let i = 0
        if (e) {
          const t = e
          const n = Number(t.length)
          for (let e = 0; e < n; e++) {
            const n = t[e]
            let s
            if (n instanceof Buffer) {
              s = n
            } else if (ArrayBuffer.isView(n)) {
              s = Buffer.from(n.buffer, n.byteOffset, n.byteLength)
            } else if (n instanceof ArrayBuffer) {
              s = Buffer.from(n)
            } else if (n instanceof Blob) {
              s = n[p]
            } else {
              s = Buffer.from(typeof n === 'string' ? n : String(n))
            }
            i += s.length
            r.push(s)
          }
        }
        this[p] = Buffer.concat(r)
        let n = t && t.type !== undefined && String(t.type).toLowerCase()
        if (n && !/[^\u0020-\u007E]/.test(n)) {
          this[c] = n
        }
      }
      get size() {
        return this[p].length
      }
      get type() {
        return this[c]
      }
      text() {
        return Promise.resolve(this[p].toString())
      }
      arrayBuffer() {
        const e = this[p]
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        return Promise.resolve(t)
      }
      stream() {
        const e = new u()
        e._read = function() {}
        e.push(this[p])
        e.push(null)
        return e
      }
      toString() {
        return '[object Blob]'
      }
      slice() {
        const e = this.size
        const t = arguments[0]
        const r = arguments[1]
        let i, n
        if (t === undefined) {
          i = 0
        } else if (t < 0) {
          i = Math.max(e + t, 0)
        } else {
          i = Math.min(t, e)
        }
        if (r === undefined) {
          n = e
        } else if (r < 0) {
          n = Math.max(e + r, 0)
        } else {
          n = Math.min(r, e)
        }
        const s = Math.max(n - i, 0)
        const o = this[p]
        const a = o.slice(i, i + s)
        const u = new Blob([], { type: arguments[2] })
        u[p] = a
        return u
      }
    }
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    })
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true
    })
    function FetchError(e, t, r) {
      Error.call(this, e)
      this.message = e
      this.type = t
      if (r) {
        this.code = this.errno = r.code
      }
      Error.captureStackTrace(this, this.constructor)
    }
    FetchError.prototype = Object.create(Error.prototype)
    FetchError.prototype.constructor = FetchError
    FetchError.prototype.name = 'FetchError'
    let d
    try {
      d = r(18).convert
    } catch (e) {}
    const l = Symbol('Body internals')
    const m = i.PassThrough
    function Body(e) {
      var t = this
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        n = r.size
      let s = n === undefined ? 0 : n
      var o = r.timeout
      let a = o === undefined ? 0 : o
      if (e == null) {
        e = null
      } else if (isURLSearchParams(e)) {
        e = Buffer.from(e.toString())
      } else if (isBlob(e));
      else if (Buffer.isBuffer(e));
      else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        e = Buffer.from(e)
      } else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)
      } else if (e instanceof i);
      else {
        e = Buffer.from(String(e))
      }
      this[l] = { body: e, disturbed: false, error: null }
      this.size = s
      this.timeout = a
      if (e instanceof i) {
        e.on('error', function(e) {
          const r =
            e.name === 'AbortError'
              ? e
              : new FetchError(
                  `Invalid response body while trying to fetch ${t.url}: ${e.message}`,
                  'system',
                  e
                )
          t[l].error = r
        })
      }
    }
    Body.prototype = {
      get body() {
        return this[l].body
      },
      get bodyUsed() {
        return this[l].disturbed
      },
      arrayBuffer() {
        return consumeBody.call(this).then(function(e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        })
      },
      blob() {
        let e = (this.headers && this.headers.get('content-type')) || ''
        return consumeBody.call(this).then(function(t) {
          return Object.assign(new Blob([], { type: e.toLowerCase() }), { [p]: t })
        })
      },
      json() {
        var e = this
        return consumeBody.call(this).then(function(t) {
          try {
            return JSON.parse(t.toString())
          } catch (t) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${e.url} reason: ${t.message}`,
                'invalid-json'
              )
            )
          }
        })
      },
      text() {
        return consumeBody.call(this).then(function(e) {
          return e.toString()
        })
      },
      buffer() {
        return consumeBody.call(this)
      },
      textConverted() {
        var e = this
        return consumeBody.call(this).then(function(t) {
          return convertBody(t, e.headers)
        })
      }
    }
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    })
    Body.mixIn = function(e) {
      for (const t of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(t in e)) {
          const r = Object.getOwnPropertyDescriptor(Body.prototype, t)
          Object.defineProperty(e, t, r)
        }
      }
    }
    function consumeBody() {
      var e = this
      if (this[l].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`))
      }
      this[l].disturbed = true
      if (this[l].error) {
        return Body.Promise.reject(this[l].error)
      }
      let t = this.body
      if (t === null) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }
      if (isBlob(t)) {
        t = t.stream()
      }
      if (Buffer.isBuffer(t)) {
        return Body.Promise.resolve(t)
      }
      if (!(t instanceof i)) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }
      let r = []
      let n = 0
      let s = false
      return new Body.Promise(function(i, o) {
        let a
        if (e.timeout) {
          a = setTimeout(function() {
            s = true
            o(
              new FetchError(
                `Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,
                'body-timeout'
              )
            )
          }, e.timeout)
        }
        t.on('error', function(t) {
          if (t.name === 'AbortError') {
            s = true
            o(t)
          } else {
            o(
              new FetchError(
                `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                'system',
                t
              )
            )
          }
        })
        t.on('data', function(t) {
          if (s || t === null) {
            return
          }
          if (e.size && n + t.length > e.size) {
            s = true
            o(new FetchError(`content size at ${e.url} over limit: ${e.size}`, 'max-size'))
            return
          }
          n += t.length
          r.push(t)
        })
        t.on('end', function() {
          if (s) {
            return
          }
          clearTimeout(a)
          try {
            i(Buffer.concat(r, n))
          } catch (t) {
            o(
              new FetchError(
                `Could not create Buffer from response body for ${e.url}: ${t.message}`,
                'system',
                t
              )
            )
          }
        })
      })
    }
    function convertBody(e, t) {
      if (typeof d !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function'
        )
      }
      const r = t.get('content-type')
      let i = 'utf-8'
      let n, s
      if (r) {
        n = /charset=([^;]*)/i.exec(r)
      }
      s = e.slice(0, 1024).toString()
      if (!n && s) {
        n = /<meta.+?charset=(['"])(.+?)\1/i.exec(s)
      }
      if (!n && s) {
        n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(s)
        if (!n) {
          n = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(s)
          if (n) {
            n.pop()
          }
        }
        if (n) {
          n = /charset=(.*)/i.exec(n.pop())
        }
      }
      if (!n && s) {
        n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(s)
      }
      if (n) {
        i = n.pop()
        if (i === 'gb2312' || i === 'gbk') {
          i = 'gb18030'
        }
      }
      return d(e, 'UTF-8', i).toString()
    }
    function isURLSearchParams(e) {
      if (
        typeof e !== 'object' ||
        typeof e.append !== 'function' ||
        typeof e.delete !== 'function' ||
        typeof e.get !== 'function' ||
        typeof e.getAll !== 'function' ||
        typeof e.has !== 'function' ||
        typeof e.set !== 'function'
      ) {
        return false
      }
      return (
        e.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(e) === '[object URLSearchParams]' ||
        typeof e.sort === 'function'
      )
    }
    function isBlob(e) {
      return (
        typeof e === 'object' &&
        typeof e.arrayBuffer === 'function' &&
        typeof e.type === 'string' &&
        typeof e.stream === 'function' &&
        typeof e.constructor === 'function' &&
        typeof e.constructor.name === 'string' &&
        /^(Blob|File)$/.test(e.constructor.name) &&
        /^(Blob|File)$/.test(e[Symbol.toStringTag])
      )
    }
    function clone(e) {
      let t, r
      let n = e.body
      if (e.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      }
      if (n instanceof i && typeof n.getBoundary !== 'function') {
        t = new m()
        r = new m()
        n.pipe(t)
        n.pipe(r)
        e[l].body = t
        n = r
      }
      return n
    }
    function extractContentType(e) {
      if (e === null) {
        return null
      } else if (typeof e === 'string') {
        return 'text/plain;charset=UTF-8'
      } else if (isURLSearchParams(e)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      } else if (isBlob(e)) {
        return e.type || null
      } else if (Buffer.isBuffer(e)) {
        return null
      } else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        return null
      } else if (ArrayBuffer.isView(e)) {
        return null
      } else if (typeof e.getBoundary === 'function') {
        return `multipart/form-data;boundary=${e.getBoundary()}`
      } else if (e instanceof i) {
        return null
      } else {
        return 'text/plain;charset=UTF-8'
      }
    }
    function getTotalBytes(e) {
      const t = e.body
      if (t === null) {
        return 0
      } else if (isBlob(t)) {
        return t.size
      } else if (Buffer.isBuffer(t)) {
        return t.length
      } else if (t && typeof t.getLengthSync === 'function') {
        if (
          (t._lengthRetrievers && t._lengthRetrievers.length == 0) ||
          (t.hasKnownLength && t.hasKnownLength())
        ) {
          return t.getLengthSync()
        }
        return null
      } else {
        return null
      }
    }
    function writeToStream(e, t) {
      const r = t.body
      if (r === null) {
        e.end()
      } else if (isBlob(r)) {
        r.stream().pipe(e)
      } else if (Buffer.isBuffer(r)) {
        e.write(r)
        e.end()
      } else {
        r.pipe(e)
      }
    }
    Body.Promise = global.Promise
    const g = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
    const h = /[^\t\x20-\x7e\x80-\xff]/
    function validateName(e) {
      e = `${e}`
      if (g.test(e) || e === '') {
        throw new TypeError(`${e} is not a legal HTTP header name`)
      }
    }
    function validateValue(e) {
      e = `${e}`
      if (h.test(e)) {
        throw new TypeError(`${e} is not a legal HTTP header value`)
      }
    }
    function find(e, t) {
      t = t.toLowerCase()
      for (const r in e) {
        if (r.toLowerCase() === t) {
          return r
        }
      }
      return undefined
    }
    const y = Symbol('map')
    class Headers {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined
        this[y] = Object.create(null)
        if (e instanceof Headers) {
          const t = e.raw()
          const r = Object.keys(t)
          for (const e of r) {
            for (const r of t[e]) {
              this.append(e, r)
            }
          }
          return
        }
        if (e == null);
        else if (typeof e === 'object') {
          const t = e[Symbol.iterator]
          if (t != null) {
            if (typeof t !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            }
            const r = []
            for (const t of e) {
              if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') {
                throw new TypeError('Each header pair must be iterable')
              }
              r.push(Array.from(t))
            }
            for (const e of r) {
              if (e.length !== 2) {
                throw new TypeError('Each header pair must be a name/value tuple')
              }
              this.append(e[0], e[1])
            }
          } else {
            for (const t of Object.keys(e)) {
              const r = e[t]
              this.append(t, r)
            }
          }
        } else {
          throw new TypeError('Provided initializer must be an object')
        }
      }
      get(e) {
        e = `${e}`
        validateName(e)
        const t = find(this[y], e)
        if (t === undefined) {
          return null
        }
        return this[y][t].join(', ')
      }
      forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined
        let r = getHeaders(this)
        let i = 0
        while (i < r.length) {
          var n = r[i]
          const s = n[0],
            o = n[1]
          e.call(t, o, s, this)
          r = getHeaders(this)
          i++
        }
      }
      set(e, t) {
        e = `${e}`
        t = `${t}`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        this[y][r !== undefined ? r : e] = [t]
      }
      append(e, t) {
        e = `${e}`
        t = `${t}`
        validateName(e)
        validateValue(t)
        const r = find(this[y], e)
        if (r !== undefined) {
          this[y][r].push(t)
        } else {
          this[y][e] = [t]
        }
      }
      has(e) {
        e = `${e}`
        validateName(e)
        return find(this[y], e) !== undefined
      }
      delete(e) {
        e = `${e}`
        validateName(e)
        const t = find(this[y], e)
        if (t !== undefined) {
          delete this[y][t]
        }
      }
      raw() {
        return this[y]
      }
      keys() {
        return createHeadersIterator(this, 'key')
      }
      values() {
        return createHeadersIterator(this, 'value')
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value')
      }
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator]
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true
    })
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    })
    function getHeaders(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value'
      const r = Object.keys(e[y]).sort()
      return r.map(
        t === 'key'
          ? function(e) {
              return e.toLowerCase()
            }
          : t === 'value'
          ? function(t) {
              return e[y][t].join(', ')
            }
          : function(t) {
              return [t.toLowerCase(), e[y][t].join(', ')]
            }
      )
    }
    const f = Symbol('internal')
    function createHeadersIterator(e, t) {
      const r = Object.create(b)
      r[f] = { target: e, kind: t, index: 0 }
      return r
    }
    const b = Object.setPrototypeOf(
      {
        next() {
          if (!this || Object.getPrototypeOf(this) !== b) {
            throw new TypeError('Value of `this` is not a HeadersIterator')
          }
          var e = this[f]
          const t = e.target,
            r = e.kind,
            i = e.index
          const n = getHeaders(t, r)
          const s = n.length
          if (i >= s) {
            return { value: undefined, done: true }
          }
          this[f].index = i + 1
          return { value: n[i], done: false }
        }
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    )
    Object.defineProperty(b, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true
    })
    function exportNodeCompatibleHeaders(e) {
      const t = Object.assign({ __proto__: null }, e[y])
      const r = find(e[y], 'Host')
      if (r !== undefined) {
        t[r] = t[r][0]
      }
      return t
    }
    function createHeadersLenient(e) {
      const t = new Headers()
      for (const r of Object.keys(e)) {
        if (g.test(r)) {
          continue
        }
        if (Array.isArray(e[r])) {
          for (const i of e[r]) {
            if (h.test(i)) {
              continue
            }
            if (t[y][r] === undefined) {
              t[y][r] = [i]
            } else {
              t[y][r].push(i)
            }
          }
        } else if (!h.test(e[r])) {
          t[y][r] = [e[r]]
        }
      }
      return t
    }
    const _ = Symbol('Response internals')
    const v = n.STATUS_CODES
    class Response {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        Body.call(this, e, t)
        const r = t.status || 200
        const i = new Headers(t.headers)
        if (e != null && !i.has('Content-Type')) {
          const t = extractContentType(e)
          if (t) {
            i.append('Content-Type', t)
          }
        }
        this[_] = {
          url: t.url,
          status: r,
          statusText: t.statusText || v[r],
          headers: i,
          counter: t.counter
        }
      }
      get url() {
        return this[_].url || ''
      }
      get status() {
        return this[_].status
      }
      get ok() {
        return this[_].status >= 200 && this[_].status < 300
      }
      get redirected() {
        return this[_].counter > 0
      }
      get statusText() {
        return this[_].statusText
      }
      get headers() {
        return this[_].headers
      }
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        })
      }
    }
    Body.mixIn(Response.prototype)
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    })
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true
    })
    const q = Symbol('Request internals')
    const w = s.parse
    const E = s.format
    const T = 'destroy' in i.Readable.prototype
    function isRequest(e) {
      return typeof e === 'object' && typeof e[q] === 'object'
    }
    function isAbortSignal(e) {
      const t = e && typeof e === 'object' && Object.getPrototypeOf(e)
      return !!(t && t.constructor.name === 'AbortSignal')
    }
    class Request {
      constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        let r
        if (!isRequest(e)) {
          if (e && e.href) {
            r = w(e.href)
          } else {
            r = w(`${e}`)
          }
          e = {}
        } else {
          r = w(e.url)
        }
        let i = t.method || e.method || 'GET'
        i = i.toUpperCase()
        if (
          (t.body != null || (isRequest(e) && e.body !== null)) &&
          (i === 'GET' || i === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        }
        let n = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null
        Body.call(this, n, { timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0 })
        const s = new Headers(t.headers || e.headers || {})
        if (n != null && !s.has('Content-Type')) {
          const e = extractContentType(n)
          if (e) {
            s.append('Content-Type', e)
          }
        }
        let o = isRequest(e) ? e.signal : null
        if ('signal' in t) o = t.signal
        if (o != null && !isAbortSignal(o)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal')
        }
        this[q] = {
          method: i,
          redirect: t.redirect || e.redirect || 'follow',
          headers: s,
          parsedURL: r,
          signal: o
        }
        this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20
        this.compress =
          t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true
        this.counter = t.counter || e.counter || 0
        this.agent = t.agent || e.agent
      }
      get method() {
        return this[q].method
      }
      get url() {
        return E(this[q].parsedURL)
      }
      get headers() {
        return this[q].headers
      }
      get redirect() {
        return this[q].redirect
      }
      get signal() {
        return this[q].signal
      }
      clone() {
        return new Request(this)
      }
    }
    Body.mixIn(Request.prototype)
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true
    })
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    })
    function getNodeRequestOptions(e) {
      const t = e[q].parsedURL
      const r = new Headers(e[q].headers)
      if (!r.has('Accept')) {
        r.set('Accept', '*/*')
      }
      if (!t.protocol || !t.hostname) {
        throw new TypeError('Only absolute URLs are supported')
      }
      if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported')
      }
      if (e.signal && e.body instanceof i.Readable && !T) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
        )
      }
      let n = null
      if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        n = '0'
      }
      if (e.body != null) {
        const t = getTotalBytes(e)
        if (typeof t === 'number') {
          n = String(t)
        }
      }
      if (n) {
        r.set('Content-Length', n)
      }
      if (!r.has('User-Agent')) {
        r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)')
      }
      if (e.compress && !r.has('Accept-Encoding')) {
        r.set('Accept-Encoding', 'gzip,deflate')
      }
      let s = e.agent
      if (typeof s === 'function') {
        s = s(t)
      }
      if (!r.has('Connection') && !s) {
        r.set('Connection', 'close')
      }
      return Object.assign({}, t, {
        method: e.method,
        headers: exportNodeCompatibleHeaders(r),
        agent: s
      })
    }
    function AbortError(e) {
      Error.call(this, e)
      this.type = 'aborted'
      this.message = e
      Error.captureStackTrace(this, this.constructor)
    }
    AbortError.prototype = Object.create(Error.prototype)
    AbortError.prototype.constructor = AbortError
    AbortError.prototype.name = 'AbortError'
    const k = i.PassThrough
    const j = s.resolve
    function fetch(e, t) {
      if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative')
      }
      Body.Promise = fetch.Promise
      return new fetch.Promise(function(r, s) {
        const u = new Request(e, t)
        const p = getNodeRequestOptions(u)
        const c = (p.protocol === 'https:' ? o : n).request
        const d = u.signal
        let l = null
        const m = function abort() {
          let e = new AbortError('The user aborted a request.')
          s(e)
          if (u.body && u.body instanceof i.Readable) {
            u.body.destroy(e)
          }
          if (!l || !l.body) return
          l.body.emit('error', e)
        }
        if (d && d.aborted) {
          m()
          return
        }
        const g = function abortAndFinalize() {
          m()
          finalize()
        }
        const h = c(p)
        let y
        if (d) {
          d.addEventListener('abort', g)
        }
        function finalize() {
          h.abort()
          if (d) d.removeEventListener('abort', g)
          clearTimeout(y)
        }
        if (u.timeout) {
          h.once('socket', function(e) {
            y = setTimeout(function() {
              s(new FetchError(`network timeout at: ${u.url}`, 'request-timeout'))
              finalize()
            }, u.timeout)
          })
        }
        h.on('error', function(e) {
          s(new FetchError(`request to ${u.url} failed, reason: ${e.message}`, 'system', e))
          finalize()
        })
        h.on('response', function(e) {
          clearTimeout(y)
          const t = createHeadersLenient(e.headers)
          if (fetch.isRedirect(e.statusCode)) {
            const i = t.get('Location')
            const n = i === null ? null : j(u.url, i)
            switch (u.redirect) {
              case 'error':
                s(
                  new FetchError(
                    `uri requested responds with a redirect, redirect mode is set to error: ${u.url}`,
                    'no-redirect'
                  )
                )
                finalize()
                return
              case 'manual':
                if (n !== null) {
                  try {
                    t.set('Location', n)
                  } catch (e) {
                    s(e)
                  }
                }
                break
              case 'follow':
                if (n === null) {
                  break
                }
                if (u.counter >= u.follow) {
                  s(new FetchError(`maximum redirect reached at: ${u.url}`, 'max-redirect'))
                  finalize()
                  return
                }
                const i = {
                  headers: new Headers(u.headers),
                  follow: u.follow,
                  counter: u.counter + 1,
                  agent: u.agent,
                  compress: u.compress,
                  method: u.method,
                  body: u.body,
                  signal: u.signal,
                  timeout: u.timeout,
                  size: u.size
                }
                if (e.statusCode !== 303 && u.body && getTotalBytes(u) === null) {
                  s(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                    )
                  )
                  finalize()
                  return
                }
                if (
                  e.statusCode === 303 ||
                  ((e.statusCode === 301 || e.statusCode === 302) && u.method === 'POST')
                ) {
                  i.method = 'GET'
                  i.body = undefined
                  i.headers.delete('content-length')
                }
                r(fetch(new Request(n, i)))
                finalize()
                return
            }
          }
          e.once('end', function() {
            if (d) d.removeEventListener('abort', g)
          })
          let i = e.pipe(new k())
          const n = {
            url: u.url,
            status: e.statusCode,
            statusText: e.statusMessage,
            headers: t,
            size: u.size,
            timeout: u.timeout,
            counter: u.counter
          }
          const o = t.get('Content-Encoding')
          if (
            !u.compress ||
            u.method === 'HEAD' ||
            o === null ||
            e.statusCode === 204 ||
            e.statusCode === 304
          ) {
            l = new Response(i, n)
            r(l)
            return
          }
          const p = { flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH }
          if (o == 'gzip' || o == 'x-gzip') {
            i = i.pipe(a.createGunzip(p))
            l = new Response(i, n)
            r(l)
            return
          }
          if (o == 'deflate' || o == 'x-deflate') {
            const t = e.pipe(new k())
            t.once('data', function(e) {
              if ((e[0] & 15) === 8) {
                i = i.pipe(a.createInflate())
              } else {
                i = i.pipe(a.createInflateRaw())
              }
              l = new Response(i, n)
              r(l)
            })
            return
          }
          if (o == 'br' && typeof a.createBrotliDecompress === 'function') {
            i = i.pipe(a.createBrotliDecompress())
            l = new Response(i, n)
            r(l)
            return
          }
          l = new Response(i, n)
          r(l)
        })
        writeToStream(h, u)
      })
    }
    fetch.isRedirect = function(e) {
      return e === 301 || e === 302 || e === 303 || e === 307 || e === 308
    }
    fetch.Promise = global.Promise
    e.exports = t = fetch
    Object.defineProperty(t, '__esModule', { value: true })
    t.default = t
    t.Headers = Headers
    t.Request = Request
    t.Response = Response
    t.FetchError = FetchError
  },
  462: function(e) {
    'use strict'
    const t = /([()\][%!^"`<>&|;, *?])/g
    function escapeCommand(e) {
      e = e.replace(t, '^$1')
      return e
    }
    function escapeArgument(e, r) {
      e = `${e}`
      e = e.replace(/(\\*)"/g, '$1$1\\"')
      e = e.replace(/(\\*)$/, '$1$1')
      e = `"${e}"`
      e = e.replace(t, '^$1')
      if (r) {
        e = e.replace(t, '^$1')
      }
      return e
    }
    e.exports.command = escapeCommand
    e.exports.argument = escapeArgument
  },
  463: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var i = r(692)
    var n = _interopDefault(r(969))
    const s = n(e => console.warn(e))
    class RequestError extends Error {
      constructor(e, t, r) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'HttpError'
        this.status = t
        Object.defineProperty(this, 'code', {
          get() {
            s(
              new i.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return t
          }
        })
        this.headers = r.headers || {}
        const n = Object.assign({}, r.request)
        if (r.request.headers.authorization) {
          n.headers = Object.assign({}, r.request.headers, {
            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]')
          })
        }
        n.url = n.url
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = n
      }
    }
    t.RequestError = RequestError
  },
  470: function(e, t, r) {
    'use strict'
    var i = r(361)
    var n = {}
    ;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(e, t) {
      n[e] = function validator(r) {
        return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
      }
    })
    var s = {}
    var o = i.version.split('.')
    function isOlderVersion(e, t) {
      var r = t ? t.split('.') : o
      var i = e.split('.')
      for (var n = 0; n < 3; n++) {
        if (r[n] > i[n]) {
          return true
        } else if (r[n] < i[n]) {
          return false
        }
      }
      return false
    }
    n.transitional = function transitional(e, t, r) {
      var n = t && isOlderVersion(t)
      function formatMessage(e, t) {
        return (
          '[Axios v' + i.version + "] Transitional option '" + e + "'" + t + (r ? '. ' + r : '')
        )
      }
      return function(r, i, o) {
        if (e === false) {
          throw new Error(formatMessage(i, ' has been removed in ' + t))
        }
        if (n && !s[i]) {
          s[i] = true
          console.warn(
            formatMessage(
              i,
              ' has been deprecated since v' + t + ' and will be removed in the near future'
            )
          )
        }
        return e ? e(r, i, o) : true
      }
    }
    function assertOptions(e, t, r) {
      if (typeof e !== 'object') {
        throw new TypeError('options must be an object')
      }
      var i = Object.keys(e)
      var n = i.length
      while (n-- > 0) {
        var s = i[n]
        var o = t[s]
        if (o) {
          var a = e[s]
          var u = a === undefined || o(a, s, e)
          if (u !== true) {
            throw new TypeError('option ' + s + ' must be ' + u)
          }
          continue
        }
        if (r !== true) {
          throw Error('Unknown option ' + s)
        }
      }
    }
    e.exports = { isOlderVersion: isOlderVersion, assertOptions: assertOptions, validators: n }
  },
  471: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const i = r(675)
    const n = r(126)
    function authenticationBeforeRequest(e, t) {
      if (!e.auth.type) {
        return
      }
      if (e.auth.type === 'basic') {
        const r = i(`${e.auth.username}:${e.auth.password}`)
        t.headers.authorization = `Basic ${r}`
        return
      }
      if (e.auth.type === 'token') {
        t.headers.authorization = `token ${e.auth.token}`
        return
      }
      if (e.auth.type === 'app') {
        t.headers.authorization = `Bearer ${e.auth.token}`
        const r = t.headers.accept
          .split(',')
          .concat('application/vnd.github.machine-man-preview+json')
        t.headers.accept = n(r)
          .filter(Boolean)
          .join(',')
        return
      }
      t.url += t.url.indexOf('?') === -1 ? '?' : '&'
      if (e.auth.token) {
        t.url += `access_token=${encodeURIComponent(e.auth.token)}`
        return
      }
      const r = encodeURIComponent(e.auth.key)
      const s = encodeURIComponent(e.auth.secret)
      t.url += `client_id=${r}&client_secret=${s}`
    }
  },
  489: function(e, t, r) {
    'use strict'
    const i = r(622)
    const n = r(814)
    const s = r(39)()
    function resolveCommandAttempt(e, t) {
      const r = process.cwd()
      const o = e.options.cwd != null
      if (o) {
        try {
          process.chdir(e.options.cwd)
        } catch (e) {}
      }
      let a
      try {
        a = n.sync(e.command, {
          path: (e.options.env || process.env)[s],
          pathExt: t ? i.delimiter : undefined
        })
      } catch (e) {
      } finally {
        process.chdir(r)
      }
      if (a) {
        a = i.resolve(o ? e.options.cwd : '', a)
      }
      return a
    }
    function resolveCommand(e) {
      return resolveCommandAttempt(e) || resolveCommandAttempt(e, true)
    }
    e.exports = resolveCommand
  },
  510: function(e) {
    e.exports = addHook
    function addHook(e, t, r, i) {
      var n = i
      if (!e.registry[r]) {
        e.registry[r] = []
      }
      if (t === 'before') {
        i = function(e, t) {
          return Promise.resolve()
            .then(n.bind(null, t))
            .then(e.bind(null, t))
        }
      }
      if (t === 'after') {
        i = function(e, t) {
          var r
          return Promise.resolve()
            .then(e.bind(null, t))
            .then(function(e) {
              r = e
              return n(r, t)
            })
            .then(function() {
              return r
            })
        }
      }
      if (t === 'error') {
        i = function(e, t) {
          return Promise.resolve()
            .then(e.bind(null, t))
            .catch(function(e) {
              return n(e, t)
            })
        }
      }
      e.registry[r].push({ hook: i, orig: n })
    }
  },
  523: function(e, t, r) {
    var i = r(363)
    var n = r(510)
    var s = r(763)
    var o = Function.bind
    var a = o.bind(o)
    function bindApi(e, t, r) {
      var i = a(s, null).apply(null, r ? [t, r] : [t])
      e.api = { remove: i }
      e.remove = i
      ;['before', 'error', 'after', 'wrap'].forEach(function(i) {
        var s = r ? [t, i, r] : [t, i]
        e[i] = e.api[i] = a(n, null).apply(null, s)
      })
    }
    function HookSingular() {
      var e = 'h'
      var t = { registry: {} }
      var r = i.bind(null, t, e)
      bindApi(r, t, e)
      return r
    }
    function HookCollection() {
      var e = { registry: {} }
      var t = i.bind(null, e)
      bindApi(t, e)
      return t
    }
    var u = false
    function Hook() {
      if (!u) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        )
        u = true
      }
      return HookCollection()
    }
    Hook.Singular = HookSingular.bind()
    Hook.Collection = HookCollection.bind()
    e.exports = Hook
    e.exports.Hook = Hook
    e.exports.Singular = Hook.Singular
    e.exports.Collection = Hook.Collection
  },
  529: function(e, t, r) {
    const i = r(47)
    e.exports = i()
  },
  536: function(e, t, r) {
    e.exports = hasFirstPage
    const i = r(370)
    const n = r(577)
    function hasFirstPage(e) {
      i(
        `octokit.hasFirstPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return n(e).first
    }
  },
  549: function(e, t, r) {
    var i = r(835)
    var n = i.URL
    var s = r(605)
    var o = r(211)
    var a = r(413).Writable
    var u = r(357)
    var p = r(900)
    var c = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout']
    var d = Object.create(null)
    c.forEach(function(e) {
      d[e] = function(t, r, i) {
        this._redirectable.emit(e, t, r, i)
      }
    })
    var l = createErrorType('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed')
    var m = createErrorType('ERR_FR_TOO_MANY_REDIRECTS', 'Maximum number of redirects exceeded')
    var g = createErrorType(
      'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
      'Request body larger than maxBodyLength limit'
    )
    var h = createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end')
    function RedirectableRequest(e, t) {
      a.call(this)
      this._sanitizeOptions(e)
      this._options = e
      this._ended = false
      this._ending = false
      this._redirectCount = 0
      this._redirects = []
      this._requestBodyLength = 0
      this._requestBodyBuffers = []
      if (t) {
        this.on('response', t)
      }
      var r = this
      this._onNativeResponse = function(e) {
        r._processResponse(e)
      }
      this._performRequest()
    }
    RedirectableRequest.prototype = Object.create(a.prototype)
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest)
      this.emit('abort')
    }
    RedirectableRequest.prototype.write = function(e, t, r) {
      if (this._ending) {
        throw new h()
      }
      if (!(typeof e === 'string' || (typeof e === 'object' && 'length' in e))) {
        throw new TypeError('data should be a string, Buffer or Uint8Array')
      }
      if (typeof t === 'function') {
        r = t
        t = null
      }
      if (e.length === 0) {
        if (r) {
          r()
        }
        return
      }
      if (this._requestBodyLength + e.length <= this._options.maxBodyLength) {
        this._requestBodyLength += e.length
        this._requestBodyBuffers.push({ data: e, encoding: t })
        this._currentRequest.write(e, t, r)
      } else {
        this.emit('error', new g())
        this.abort()
      }
    }
    RedirectableRequest.prototype.end = function(e, t, r) {
      if (typeof e === 'function') {
        r = e
        e = t = null
      } else if (typeof t === 'function') {
        r = t
        t = null
      }
      if (!e) {
        this._ended = this._ending = true
        this._currentRequest.end(null, null, r)
      } else {
        var i = this
        var n = this._currentRequest
        this.write(e, t, function() {
          i._ended = true
          n.end(null, null, r)
        })
        this._ending = true
      }
    }
    RedirectableRequest.prototype.setHeader = function(e, t) {
      this._options.headers[e] = t
      this._currentRequest.setHeader(e, t)
    }
    RedirectableRequest.prototype.removeHeader = function(e) {
      delete this._options.headers[e]
      this._currentRequest.removeHeader(e)
    }
    RedirectableRequest.prototype.setTimeout = function(e, t) {
      var r = this
      function destroyOnTimeout(t) {
        t.setTimeout(e)
        t.removeListener('timeout', t.destroy)
        t.addListener('timeout', t.destroy)
      }
      function startTimer(t) {
        if (r._timeout) {
          clearTimeout(r._timeout)
        }
        r._timeout = setTimeout(function() {
          r.emit('timeout')
          clearTimer()
        }, e)
        destroyOnTimeout(t)
      }
      function clearTimer() {
        if (r._timeout) {
          clearTimeout(r._timeout)
          r._timeout = null
        }
        r.removeListener('abort', clearTimer)
        r.removeListener('error', clearTimer)
        r.removeListener('response', clearTimer)
        if (t) {
          r.removeListener('timeout', t)
        }
        if (!r.socket) {
          r._currentRequest.removeListener('socket', startTimer)
        }
      }
      if (t) {
        this.on('timeout', t)
      }
      if (this.socket) {
        startTimer(this.socket)
      } else {
        this._currentRequest.once('socket', startTimer)
      }
      this.on('socket', destroyOnTimeout)
      this.on('abort', clearTimer)
      this.on('error', clearTimer)
      this.on('response', clearTimer)
      return this
    }
    ;['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(function(e) {
      RedirectableRequest.prototype[e] = function(t, r) {
        return this._currentRequest[e](t, r)
      }
    })
    ;['aborted', 'connection', 'socket'].forEach(function(e) {
      Object.defineProperty(RedirectableRequest.prototype, e, {
        get: function() {
          return this._currentRequest[e]
        }
      })
    })
    RedirectableRequest.prototype._sanitizeOptions = function(e) {
      if (!e.headers) {
        e.headers = {}
      }
      if (e.host) {
        if (!e.hostname) {
          e.hostname = e.host
        }
        delete e.host
      }
      if (!e.pathname && e.path) {
        var t = e.path.indexOf('?')
        if (t < 0) {
          e.pathname = e.path
        } else {
          e.pathname = e.path.substring(0, t)
          e.search = e.path.substring(t)
        }
      }
    }
    RedirectableRequest.prototype._performRequest = function() {
      var e = this._options.protocol
      var t = this._options.nativeProtocols[e]
      if (!t) {
        this.emit('error', new TypeError('Unsupported protocol ' + e))
        return
      }
      if (this._options.agents) {
        var r = e.substr(0, e.length - 1)
        this._options.agent = this._options.agents[r]
      }
      var n = (this._currentRequest = t.request(this._options, this._onNativeResponse))
      this._currentUrl = i.format(this._options)
      n._redirectable = this
      for (var s = 0; s < c.length; s++) {
        n.on(c[s], d[c[s]])
      }
      if (this._isRedirect) {
        var o = 0
        var a = this
        var u = this._requestBodyBuffers
        ;(function writeNext(e) {
          if (n === a._currentRequest) {
            if (e) {
              a.emit('error', e)
            } else if (o < u.length) {
              var t = u[o++]
              if (!n.finished) {
                n.write(t.data, t.encoding, writeNext)
              }
            } else if (a._ended) {
              n.end()
            }
          }
        })()
      }
    }
    RedirectableRequest.prototype._processResponse = function(e) {
      var t = e.statusCode
      if (this._options.trackRedirects) {
        this._redirects.push({ url: this._currentUrl, headers: e.headers, statusCode: t })
      }
      var r = e.headers.location
      if (r && this._options.followRedirects !== false && t >= 300 && t < 400) {
        abortRequest(this._currentRequest)
        e.destroy()
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit('error', new m())
          return
        }
        if (
          ((t === 301 || t === 302) && this._options.method === 'POST') ||
          (t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))
        ) {
          this._options.method = 'GET'
          this._requestBodyBuffers = []
          removeMatchingHeaders(/^content-/i, this._options.headers)
        }
        var n = removeMatchingHeaders(/^host$/i, this._options.headers)
        var s = i.parse(this._currentUrl)
        var o = n || s.host
        var a = /^\w+:/.test(r) ? this._currentUrl : i.format(Object.assign(s, { host: o }))
        var u
        try {
          u = i.resolve(a, r)
        } catch (e) {
          this.emit('error', new l(e))
          return
        }
        p('redirecting to', u)
        this._isRedirect = true
        var c = i.parse(u)
        Object.assign(this._options, c)
        if (!(c.host === o || isSubdomainOf(c.host, o))) {
          removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers)
        }
        if (typeof this._options.beforeRedirect === 'function') {
          var d = { headers: e.headers }
          try {
            this._options.beforeRedirect.call(null, this._options, d)
          } catch (e) {
            this.emit('error', e)
            return
          }
          this._sanitizeOptions(this._options)
        }
        try {
          this._performRequest()
        } catch (e) {
          this.emit('error', new l(e))
        }
      } else {
        e.responseUrl = this._currentUrl
        e.redirects = this._redirects
        this.emit('response', e)
        this._requestBodyBuffers = []
      }
    }
    function wrap(e) {
      var t = { maxRedirects: 21, maxBodyLength: 10 * 1024 * 1024 }
      var r = {}
      Object.keys(e).forEach(function(s) {
        var o = s + ':'
        var a = (r[o] = e[s])
        var c = (t[s] = Object.create(a))
        function request(e, s, a) {
          if (typeof e === 'string') {
            var c = e
            try {
              e = urlToOptions(new n(c))
            } catch (t) {
              e = i.parse(c)
            }
          } else if (n && e instanceof n) {
            e = urlToOptions(e)
          } else {
            a = s
            s = e
            e = { protocol: o }
          }
          if (typeof s === 'function') {
            a = s
            s = null
          }
          s = Object.assign({ maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength }, e, s)
          s.nativeProtocols = r
          u.equal(s.protocol, o, 'protocol mismatch')
          p('options', s)
          return new RedirectableRequest(s, a)
        }
        function get(e, t, r) {
          var i = c.request(e, t, r)
          i.end()
          return i
        }
        Object.defineProperties(c, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        })
      })
      return t
    }
    function noop() {}
    function urlToOptions(e) {
      var t = {
        protocol: e.protocol,
        hostname: e.hostname.startsWith('[') ? e.hostname.slice(1, -1) : e.hostname,
        hash: e.hash,
        search: e.search,
        pathname: e.pathname,
        path: e.pathname + e.search,
        href: e.href
      }
      if (e.port !== '') {
        t.port = Number(e.port)
      }
      return t
    }
    function removeMatchingHeaders(e, t) {
      var r
      for (var i in t) {
        if (e.test(i)) {
          r = t[i]
          delete t[i]
        }
      }
      return r === null || typeof r === 'undefined' ? undefined : String(r).trim()
    }
    function createErrorType(e, t) {
      function CustomError(e) {
        Error.captureStackTrace(this, this.constructor)
        if (!e) {
          this.message = t
        } else {
          this.message = t + ': ' + e.message
          this.cause = e
        }
      }
      CustomError.prototype = new Error()
      CustomError.prototype.constructor = CustomError
      CustomError.prototype.name = 'Error [' + e + ']'
      CustomError.prototype.code = e
      return CustomError
    }
    function abortRequest(e) {
      for (var t = 0; t < c.length; t++) {
        e.removeListener(c[t], d[c[t]])
      }
      e.on('error', noop)
      e.abort()
    }
    function isSubdomainOf(e, t) {
      const r = e.length - t.length - 1
      return r > 0 && e[r] === '.' && e.endsWith(t)
    }
    e.exports = wrap({ http: s, https: o })
    e.exports.wrap = wrap
  },
  550: function(e, t, r) {
    e.exports = getNextPage
    const i = r(265)
    function getNextPage(e, t, r) {
      return i(e, t, 'next', r)
    }
  },
  558: function(e, t, r) {
    e.exports = hasPreviousPage
    const i = r(370)
    const n = r(577)
    function hasPreviousPage(e) {
      i(
        `octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return n(e).prev
    }
  },
  563: function(e, t, r) {
    e.exports = getPreviousPage
    const i = r(265)
    function getPreviousPage(e, t, r) {
      return i(e, t, 'prev', r)
    }
  },
  564: function(e, t, r) {
    'use strict'
    var i = r(26)
    e.exports = function settle(e, t, r) {
      var n = r.config.validateStatus
      if (!r.status || !n || n(r.status)) {
        e(r)
      } else {
        t(i('Request failed with status code ' + r.status, r.config, null, r.request, r))
      }
    }
  },
  568: function(e, t, r) {
    'use strict'
    const i = r(622)
    const n = r(948)
    const s = r(489)
    const o = r(462)
    const a = r(389)
    const u = r(280)
    const p = process.platform === 'win32'
    const c = /\.(?:com|exe)$/i
    const d = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i
    const l = n(() => u.satisfies(process.version, '^4.8.0 || ^5.7.0 || >= 6.0.0', true)) || false
    function detectShebang(e) {
      e.file = s(e)
      const t = e.file && a(e.file)
      if (t) {
        e.args.unshift(e.file)
        e.command = t
        return s(e)
      }
      return e.file
    }
    function parseNonShell(e) {
      if (!p) {
        return e
      }
      const t = detectShebang(e)
      const r = !c.test(t)
      if (e.options.forceShell || r) {
        const r = d.test(t)
        e.command = i.normalize(e.command)
        e.command = o.command(e.command)
        e.args = e.args.map(e => o.argument(e, r))
        const n = [e.command].concat(e.args).join(' ')
        e.args = ['/d', '/s', '/c', `"${n}"`]
        e.command = process.env.comspec || 'cmd.exe'
        e.options.windowsVerbatimArguments = true
      }
      return e
    }
    function parseShell(e) {
      if (l) {
        return e
      }
      const t = [e.command].concat(e.args).join(' ')
      if (p) {
        e.command =
          typeof e.options.shell === 'string' ? e.options.shell : process.env.comspec || 'cmd.exe'
        e.args = ['/d', '/s', '/c', `"${t}"`]
        e.options.windowsVerbatimArguments = true
      } else {
        if (typeof e.options.shell === 'string') {
          e.command = e.options.shell
        } else if (process.platform === 'android') {
          e.command = '/system/bin/sh'
        } else {
          e.command = '/bin/sh'
        }
        e.args = ['-c', t]
      }
      return e
    }
    function parse(e, t, r) {
      if (t && !Array.isArray(t)) {
        r = t
        t = null
      }
      t = t ? t.slice(0) : []
      r = Object.assign({}, r)
      const i = {
        command: e,
        args: t,
        options: r,
        file: undefined,
        original: { command: e, args: t }
      }
      return r.shell ? parseShell(i) : parseNonShell(i)
    }
    e.exports = parse
  },
  577: function(e) {
    e.exports = getPageLinks
    function getPageLinks(e) {
      e = e.link || e.headers.link || ''
      const t = {}
      e.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (e, r, i) => {
        t[i] = r
      })
      return t
    }
  },
  589: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(774)
    e.exports = function transformData(e, t, r) {
      var s = this || n
      i.forEach(r, function transform(r) {
        e = r.call(s, e, t)
      })
      return e
    }
  },
  590: function(e) {
    'use strict'
    e.exports = function isAbsoluteURL(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  605: function(e) {
    e.exports = require('http')
  },
  614: function(e) {
    e.exports = require('events')
  },
  621: function(e, t, r) {
    'use strict'
    const i = r(622)
    const n = r(39)
    e.exports = e => {
      e = Object.assign({ cwd: process.cwd(), path: process.env[n()] }, e)
      let t
      let r = i.resolve(e.cwd)
      const s = []
      while (t !== r) {
        s.push(i.join(r, 'node_modules/.bin'))
        t = r
        r = i.resolve(r, '..')
      }
      s.push(i.dirname(process.execPath))
      return s.concat(e.path).join(i.delimiter)
    }
    e.exports.env = t => {
      t = Object.assign({ env: process.env }, t)
      const r = Object.assign({}, t.env)
      const i = n({ env: r })
      t.path = r[i]
      r[i] = e.exports(t)
      return r
    }
  },
  622: function(e) {
    e.exports = require('path')
  },
  629: function(e) {
    !(function(t, r) {
      true ? (e.exports = r()) : undefined
    })(this, function() {
      'use strict'
      var e = 'millisecond',
        t = 'second',
        r = 'minute',
        i = 'hour',
        n = 'day',
        s = 'week',
        o = 'month',
        a = 'quarter',
        u = 'year',
        p = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        d = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        l = function(e, t, r) {
          var i = String(e)
          return !i || i.length >= t ? e : '' + Array(t + 1 - i.length).join(r) + e
        },
        m = {
          s: l,
          z: function(e) {
            var t = -e.utcOffset(),
              r = Math.abs(t),
              i = Math.floor(r / 60),
              n = r % 60
            return (t <= 0 ? '+' : '-') + l(i, 2, '0') + ':' + l(n, 2, '0')
          },
          m: function(e, t) {
            var r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              i = e.clone().add(r, o),
              n = t - i < 0,
              s = e.clone().add(r + (n ? -1 : 1), o)
            return Number(-(r + (t - i) / (n ? i - s : s - i)) || 0)
          },
          a: function(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function(p) {
            return (
              { M: o, y: u, w: s, d: n, h: i, m: r, s: t, ms: e, Q: a }[p] ||
              String(p || '')
                .toLowerCase()
                .replace(/s$/, '')
            )
          },
          u: function(e) {
            return void 0 === e
          }
        },
        g = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          )
        },
        h = 'en',
        y = {}
      y[h] = g
      var f = function(e) {
          return e instanceof q
        },
        b = function(e, t, r) {
          var i
          if (!e) return h
          if ('string' == typeof e) y[e] && (i = e), t && ((y[e] = t), (i = e))
          else {
            var n = e.name
            ;(y[n] = e), (i = n)
          }
          return r || (h = i), i
        },
        _ = function(e, t, r) {
          if (f(e)) return e.clone()
          var i = t ? ('string' == typeof t ? { format: t, pl: r } : t) : {}
          return (i.date = e), new q(i)
        },
        v = m
      ;(v.l = b),
        (v.i = f),
        (v.w = function(e, t) {
          return _(e, { locale: t.$L, utc: t.$u, $offset: t.$offset })
        })
      var q = (function() {
        function c(e) {
          ;(this.$L = this.$L || b(e.locale, null, !0)), this.parse(e)
        }
        var l = c.prototype
        return (
          (l.parse = function(e) {
            ;(this.$d = (function(e) {
              var t = e.date,
                r = e.utc
              if (null === t) return new Date(NaN)
              if (v.u(t)) return new Date()
              if (t instanceof Date) return new Date(t)
              if ('string' == typeof t && !/Z$/i.test(t)) {
                var i = t.match(p)
                if (i)
                  return r
                    ? new Date(
                        Date.UTC(
                          i[1],
                          i[2] - 1,
                          i[3] || 1,
                          i[4] || 0,
                          i[5] || 0,
                          i[6] || 0,
                          i[7] || 0
                        )
                      )
                    : new Date(
                        i[1],
                        i[2] - 1,
                        i[3] || 1,
                        i[4] || 0,
                        i[5] || 0,
                        i[6] || 0,
                        i[7] || 0
                      )
              }
              return new Date(t)
            })(e)),
              this.init()
          }),
          (l.init = function() {
            var e = this.$d
            ;(this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds())
          }),
          (l.$utils = function() {
            return v
          }),
          (l.isValid = function() {
            return !('Invalid Date' === this.$d.toString())
          }),
          (l.isSame = function(e, t) {
            var r = _(e)
            return this.startOf(t) <= r && r <= this.endOf(t)
          }),
          (l.isAfter = function(e, t) {
            return _(e) < this.startOf(t)
          }),
          (l.isBefore = function(e, t) {
            return this.endOf(t) < _(e)
          }),
          (l.$g = function(e, t, r) {
            return v.u(e) ? this[t] : this.set(r, e)
          }),
          (l.year = function(e) {
            return this.$g(e, '$y', u)
          }),
          (l.month = function(e) {
            return this.$g(e, '$M', o)
          }),
          (l.day = function(e) {
            return this.$g(e, '$W', n)
          }),
          (l.date = function(e) {
            return this.$g(e, '$D', 'date')
          }),
          (l.hour = function(e) {
            return this.$g(e, '$H', i)
          }),
          (l.minute = function(e) {
            return this.$g(e, '$m', r)
          }),
          (l.second = function(e) {
            return this.$g(e, '$s', t)
          }),
          (l.millisecond = function(t) {
            return this.$g(t, '$ms', e)
          }),
          (l.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (l.valueOf = function() {
            return this.$d.getTime()
          }),
          (l.startOf = function(e, a) {
            var p = this,
              c = !!v.u(a) || a,
              d = v.p(e),
              l = function(e, t) {
                var r = v.w(p.$u ? Date.UTC(p.$y, t, e) : new Date(p.$y, t, e), p)
                return c ? r : r.endOf(n)
              },
              m = function(e, t) {
                return v.w(
                  p.toDate()[e].apply(p.toDate(), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)),
                  p
                )
              },
              g = this.$W,
              h = this.$M,
              y = this.$D,
              f = 'set' + (this.$u ? 'UTC' : '')
            switch (d) {
              case u:
                return c ? l(1, 0) : l(31, 11)
              case o:
                return c ? l(1, h) : l(0, h + 1)
              case s:
                var b = this.$locale().weekStart || 0,
                  _ = (g < b ? g + 7 : g) - b
                return l(c ? y - _ : y + (6 - _), h)
              case n:
              case 'date':
                return m(f + 'Hours', 0)
              case i:
                return m(f + 'Minutes', 1)
              case r:
                return m(f + 'Seconds', 2)
              case t:
                return m(f + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (l.endOf = function(e) {
            return this.startOf(e, !1)
          }),
          (l.$set = function(s, a) {
            var p,
              c = v.p(s),
              d = 'set' + (this.$u ? 'UTC' : ''),
              l = ((p = {}),
              (p[n] = d + 'Date'),
              (p.date = d + 'Date'),
              (p[o] = d + 'Month'),
              (p[u] = d + 'FullYear'),
              (p[i] = d + 'Hours'),
              (p[r] = d + 'Minutes'),
              (p[t] = d + 'Seconds'),
              (p[e] = d + 'Milliseconds'),
              p)[c],
              m = c === n ? this.$D + (a - this.$W) : a
            if (c === o || c === u) {
              var g = this.clone().set('date', 1)
              g.$d[l](m),
                g.init(),
                (this.$d = g.set('date', Math.min(this.$D, g.daysInMonth())).toDate())
            } else l && this.$d[l](m)
            return this.init(), this
          }),
          (l.set = function(e, t) {
            return this.clone().$set(e, t)
          }),
          (l.get = function(e) {
            return this[v.p(e)]()
          }),
          (l.add = function(e, a) {
            var p,
              c = this
            e = Number(e)
            var d = v.p(a),
              l = function(t) {
                var r = _(c)
                return v.w(r.date(r.date() + Math.round(t * e)), c)
              }
            if (d === o) return this.set(o, this.$M + e)
            if (d === u) return this.set(u, this.$y + e)
            if (d === n) return l(1)
            if (d === s) return l(7)
            var m = ((p = {}), (p[r] = 6e4), (p[i] = 36e5), (p[t] = 1e3), p)[d] || 1,
              g = this.$d.getTime() + e * m
            return v.w(g, this)
          }),
          (l.subtract = function(e, t) {
            return this.add(-1 * e, t)
          }),
          (l.format = function(e) {
            var t = this
            if (!this.isValid()) return 'Invalid Date'
            var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
              i = v.z(this),
              n = this.$locale(),
              s = this.$H,
              o = this.$m,
              a = this.$M,
              u = n.weekdays,
              p = n.months,
              c = function(e, i, n, s) {
                return (e && (e[i] || e(t, r))) || n[i].substr(0, s)
              },
              l = function(e) {
                return v.s(s % 12 || 12, e, '0')
              },
              m =
                n.meridiem ||
                function(e, t, r) {
                  var i = e < 12 ? 'AM' : 'PM'
                  return r ? i.toLowerCase() : i
                },
              g = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: v.s(a + 1, 2, '0'),
                MMM: c(n.monthsShort, a, p, 3),
                MMMM: p[a] || p(this, r),
                D: this.$D,
                DD: v.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: c(n.weekdaysMin, this.$W, u, 2),
                ddd: c(n.weekdaysShort, this.$W, u, 3),
                dddd: u[this.$W],
                H: String(s),
                HH: v.s(s, 2, '0'),
                h: l(1),
                hh: l(2),
                a: m(s, o, !0),
                A: m(s, o, !1),
                m: String(o),
                mm: v.s(o, 2, '0'),
                s: String(this.$s),
                ss: v.s(this.$s, 2, '0'),
                SSS: v.s(this.$ms, 3, '0'),
                Z: i
              }
            return r.replace(d, function(e, t) {
              return t || g[e] || i.replace(':', '')
            })
          }),
          (l.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (l.diff = function(e, p, c) {
            var d,
              l = v.p(p),
              m = _(e),
              g = 6e4 * (m.utcOffset() - this.utcOffset()),
              h = this - m,
              y = v.m(this, m)
            return (
              (y =
                ((d = {}),
                (d[u] = y / 12),
                (d[o] = y),
                (d[a] = y / 3),
                (d[s] = (h - g) / 6048e5),
                (d[n] = (h - g) / 864e5),
                (d[i] = h / 36e5),
                (d[r] = h / 6e4),
                (d[t] = h / 1e3),
                d)[l] || h),
              c ? y : v.a(y)
            )
          }),
          (l.daysInMonth = function() {
            return this.endOf(o).$D
          }),
          (l.$locale = function() {
            return y[this.$L]
          }),
          (l.locale = function(e, t) {
            if (!e) return this.$L
            var r = this.clone(),
              i = b(e, t, !0)
            return i && (r.$L = i), r
          }),
          (l.clone = function() {
            return v.w(this.$d, this)
          }),
          (l.toDate = function() {
            return new Date(this.valueOf())
          }),
          (l.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
          }),
          (l.toISOString = function() {
            return this.$d.toISOString()
          }),
          (l.toString = function() {
            return this.$d.toUTCString()
          }),
          c
        )
      })()
      return (
        (_.prototype = q.prototype),
        (_.extend = function(e, t) {
          return e(t, q, _), _
        }),
        (_.locale = b),
        (_.isDayjs = f),
        (_.unix = function(e) {
          return _(1e3 * e)
        }),
        (_.en = y[h]),
        (_.Ls = y),
        _
      )
    })
  },
  631: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent'
    ]
    e.exports = function parseHeaders(e) {
      var t = {}
      var r
      var s
      var o
      if (!e) {
        return t
      }
      i.forEach(e.split('\n'), function parser(e) {
        o = e.indexOf(':')
        r = i.trim(e.substr(0, o)).toLowerCase()
        s = i.trim(e.substr(o + 1))
        if (r) {
          if (t[r] && n.indexOf(r) >= 0) {
            return
          }
          if (r === 'set-cookie') {
            t[r] = (t[r] ? t[r] : []).concat([s])
          } else {
            t[r] = t[r] ? t[r] + ', ' + s : s
          }
        }
      })
      return t
    }
  },
  649: function(e, t, r) {
    e.exports = getLastPage
    const i = r(265)
    function getLastPage(e, t, r) {
      return i(e, t, 'last', r)
    }
  },
  654: function(e) {
    e.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']
    if (process.platform !== 'win32') {
      e.exports.push(
        'SIGVTALRM',
        'SIGXCPU',
        'SIGXFSZ',
        'SIGUSR2',
        'SIGTRAP',
        'SIGSYS',
        'SIGQUIT',
        'SIGIOT'
      )
    }
    if (process.platform === 'linux') {
      e.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED')
    }
  },
  669: function(e) {
    e.exports = require('util')
  },
  670: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(564)
    var s = r(960)
    var o = r(133)
    var a = r(605)
    var u = r(211)
    var p = r(549).http
    var c = r(549).https
    var d = r(835)
    var l = r(761)
    var m = r(361)
    var g = r(26)
    var h = r(369)
    var y = /https:?/
    function setProxy(e, t, r) {
      e.hostname = t.host
      e.host = t.host
      e.port = t.port
      e.path = r
      if (t.auth) {
        var i = Buffer.from(t.auth.username + ':' + t.auth.password, 'utf8').toString('base64')
        e.headers['Proxy-Authorization'] = 'Basic ' + i
      }
      e.beforeRedirect = function beforeRedirect(e) {
        e.headers.host = e.host
        setProxy(e, t, e.href)
      }
    }
    e.exports = function httpAdapter(e) {
      return new Promise(function dispatchHttpRequest(t, r) {
        var f = function resolve(e) {
          t(e)
        }
        var b = function reject(e) {
          r(e)
        }
        var _ = e.data
        var v = e.headers
        if ('User-Agent' in v || 'user-agent' in v) {
          if (!v['User-Agent'] && !v['user-agent']) {
            delete v['User-Agent']
            delete v['user-agent']
          }
        } else {
          v['User-Agent'] = 'axios/' + m.version
        }
        if (_ && !i.isStream(_)) {
          if (Buffer.isBuffer(_)) {
          } else if (i.isArrayBuffer(_)) {
            _ = Buffer.from(new Uint8Array(_))
          } else if (i.isString(_)) {
            _ = Buffer.from(_, 'utf-8')
          } else {
            return b(
              g(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            )
          }
          v['Content-Length'] = _.length
        }
        var q = undefined
        if (e.auth) {
          var w = e.auth.username || ''
          var E = e.auth.password || ''
          q = w + ':' + E
        }
        var T = s(e.baseURL, e.url)
        var k = d.parse(T)
        var j = k.protocol || 'http:'
        if (!q && k.auth) {
          var S = k.auth.split(':')
          var O = S[0] || ''
          var P = S[1] || ''
          q = O + ':' + P
        }
        if (q) {
          delete v.Authorization
        }
        var C = y.test(j)
        var x = C ? e.httpsAgent : e.httpAgent
        var R = {
          path: o(k.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method.toUpperCase(),
          headers: v,
          agent: x,
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: q
        }
        if (e.socketPath) {
          R.socketPath = e.socketPath
        } else {
          R.hostname = k.hostname
          R.port = k.port
        }
        var A = e.proxy
        if (!A && A !== false) {
          var G = j.slice(0, -1) + '_proxy'
          var L = process.env[G] || process.env[G.toUpperCase()]
          if (L) {
            var D = d.parse(L)
            var $ = process.env.no_proxy || process.env.NO_PROXY
            var U = true
            if ($) {
              var F = $.split(',').map(function trim(e) {
                return e.trim()
              })
              U = !F.some(function proxyMatch(e) {
                if (!e) {
                  return false
                }
                if (e === '*') {
                  return true
                }
                if (e[0] === '.' && k.hostname.substr(k.hostname.length - e.length) === e) {
                  return true
                }
                return k.hostname === e
              })
            }
            if (U) {
              A = { host: D.hostname, port: D.port, protocol: D.protocol }
              if (D.auth) {
                var B = D.auth.split(':')
                A.auth = { username: B[0], password: B[1] }
              }
            }
          }
        }
        if (A) {
          R.headers.host = k.hostname + (k.port ? ':' + k.port : '')
          setProxy(R, A, j + '//' + k.hostname + (k.port ? ':' + k.port : '') + R.path)
        }
        var M
        var I = C && (A ? y.test(A.protocol) : true)
        if (e.transport) {
          M = e.transport
        } else if (e.maxRedirects === 0) {
          M = I ? u : a
        } else {
          if (e.maxRedirects) {
            R.maxRedirects = e.maxRedirects
          }
          M = I ? c : p
        }
        if (e.maxBodyLength > -1) {
          R.maxBodyLength = e.maxBodyLength
        }
        var H = M.request(R, function handleResponse(t) {
          if (H.aborted) return
          var r = t
          var s = t.req || H
          if (t.statusCode !== 204 && s.method !== 'HEAD' && e.decompress !== false) {
            switch (t.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                r = r.pipe(l.createUnzip())
                delete t.headers['content-encoding']
                break
            }
          }
          var o = {
            status: t.statusCode,
            statusText: t.statusMessage,
            headers: t.headers,
            config: e,
            request: s
          }
          if (e.responseType === 'stream') {
            o.data = r
            n(f, b, o)
          } else {
            var a = []
            var u = 0
            r.on('data', function handleStreamData(t) {
              a.push(t)
              u += t.length
              if (e.maxContentLength > -1 && u > e.maxContentLength) {
                r.destroy()
                b(g('maxContentLength size of ' + e.maxContentLength + ' exceeded', e, null, s))
              }
            })
            r.on('error', function handleStreamError(t) {
              if (H.aborted) return
              b(h(t, e, null, s))
            })
            r.on('end', function handleStreamEnd() {
              var t = Buffer.concat(a)
              if (e.responseType !== 'arraybuffer') {
                t = t.toString(e.responseEncoding)
                if (!e.responseEncoding || e.responseEncoding === 'utf8') {
                  t = i.stripBOM(t)
                }
              }
              o.data = t
              n(f, b, o)
            })
          }
        })
        H.on('error', function handleRequestError(t) {
          if (H.aborted && t.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return
          b(h(t, e, null, H))
        })
        if (e.timeout) {
          var N = parseInt(e.timeout, 10)
          if (isNaN(N)) {
            b(g('error trying to parse `config.timeout` to int', e, 'ERR_PARSE_TIMEOUT', H))
            return
          }
          H.setTimeout(N, function handleRequestTimeout() {
            H.abort()
            b(
              g(
                'timeout of ' + N + 'ms exceeded',
                e,
                e.transitional && e.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                H
              )
            )
          })
        }
        if (e.cancelToken) {
          e.cancelToken.promise.then(function onCanceled(e) {
            if (H.aborted) return
            H.abort()
            b(e)
          })
        }
        if (i.isStream(_)) {
          _.on('error', function handleStreamError(t) {
            b(h(t, e, null, H))
          }).pipe(H)
        } else {
          H.end(_)
        }
      })
    }
  },
  674: function(e, t, r) {
    e.exports = authenticate
    const { Deprecation: i } = r(692)
    const n = r(969)
    const s = n((e, t) => e.warn(t))
    function authenticate(e, t) {
      s(
        e.octokit.log,
        new i(
          '[@octokit/rest] octokit.authenticate() is deprecated. Use "auth" constructor option instead.'
        )
      )
      if (!t) {
        e.auth = false
        return
      }
      switch (t.type) {
        case 'basic':
          if (!t.username || !t.password) {
            throw new Error('Basic authentication requires both a username and password to be set')
          }
          break
        case 'oauth':
          if (!t.token && !(t.key && t.secret)) {
            throw new Error('OAuth2 authentication requires a token or key & secret to be set')
          }
          break
        case 'token':
        case 'app':
          if (!t.token) {
            throw new Error('Token authentication requires a token to be set')
          }
          break
        default:
          throw new Error("Invalid authentication type, must be 'basic', 'oauth', 'token' or 'app'")
      }
      e.auth = t
    }
  },
  675: function(e) {
    e.exports = function btoa(e) {
      return new Buffer(e).toString('base64')
    }
  },
  688: function(e, t, r) {
    'use strict'
    var i = r(35)
    e.exports = i.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          var e = /(msie|trident)/i.test(navigator.userAgent)
          var t = document.createElement('a')
          var r
          function resolveURL(r) {
            var i = r
            if (e) {
              t.setAttribute('href', i)
              i = t.href
            }
            t.setAttribute('href', i)
            return {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname: t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname
            }
          }
          r = resolveURL(window.location.href)
          return function isURLSameOrigin(e) {
            var t = i.isString(e) ? resolveURL(e) : e
            return t.protocol === r.protocol && t.host === r.host
          }
        })()
      : (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true
          }
        })()
  },
  692: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    class Deprecation extends Error {
      constructor(e) {
        super(e)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
        this.name = 'Deprecation'
      }
    }
    t.Deprecation = Deprecation
  },
  696: function(e) {
    'use strict'
    function isObject(e) {
      return e != null && typeof e === 'object' && Array.isArray(e) === false
    }
    function isObjectObject(e) {
      return isObject(e) === true && Object.prototype.toString.call(e) === '[object Object]'
    }
    function isPlainObject(e) {
      var t, r
      if (isObjectObject(e) === false) return false
      t = e.constructor
      if (typeof t !== 'function') return false
      r = t.prototype
      if (isObjectObject(r) === false) return false
      if (r.hasOwnProperty('isPrototypeOf') === false) {
        return false
      }
      return true
    }
    e.exports = isPlainObject
  },
  697: function(e) {
    'use strict'
    e.exports = (e, t) => {
      t = t || (() => {})
      return e.then(
        e =>
          new Promise(e => {
            e(t())
          }).then(() => e),
        e =>
          new Promise(e => {
            e(t())
          }).then(() => {
            throw e
          })
      )
    }
  },
  727: function(e) {
    'use strict'
    e.exports = function bind(e, t) {
      return function wrap() {
        var r = new Array(arguments.length)
        for (var i = 0; i < r.length; i++) {
          r[i] = arguments[i]
        }
        return e.apply(t, r)
      }
    }
  },
  732: function(e) {
    'use strict'
    e.exports = function isCancel(e) {
      return !!(e && e.__CANCEL__)
    }
  },
  742: function(e, t, r) {
    var i = r(747)
    var n
    if (process.platform === 'win32' || global.TESTING_WINDOWS) {
      n = r(818)
    } else {
      n = r(197)
    }
    e.exports = isexe
    isexe.sync = sync
    function isexe(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {}
      }
      if (!r) {
        if (typeof Promise !== 'function') {
          throw new TypeError('callback not provided')
        }
        return new Promise(function(r, i) {
          isexe(e, t || {}, function(e, t) {
            if (e) {
              i(e)
            } else {
              r(t)
            }
          })
        })
      }
      n(e, t || {}, function(e, i) {
        if (e) {
          if (e.code === 'EACCES' || (t && t.ignoreErrors)) {
            e = null
            i = false
          }
        }
        r(e, i)
      })
    }
    function sync(e, t) {
      try {
        return n.sync(e, t || {})
      } catch (e) {
        if ((t && t.ignoreErrors) || e.code === 'EACCES') {
          return false
        } else {
          throw e
        }
      }
    }
  },
  747: function(e) {
    e.exports = require('fs')
  },
  753: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var i = r(385)
    var n = r(796)
    var s = _interopDefault(r(696))
    var o = _interopDefault(r(454))
    var a = r(463)
    const u = '5.3.1'
    function getBufferResponse(e) {
      return e.arrayBuffer()
    }
    function fetchWrapper(e) {
      if (s(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body)
      }
      let t = {}
      let r
      let i
      const n = (e.request && e.request.fetch) || o
      return n(
        e.url,
        Object.assign(
          { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect },
          e.request
        )
      )
        .then(n => {
          i = n.url
          r = n.status
          for (const e of n.headers) {
            t[e[0]] = e[1]
          }
          if (r === 204 || r === 205) {
            return
          }
          if (e.method === 'HEAD') {
            if (r < 400) {
              return
            }
            throw new a.RequestError(n.statusText, r, { headers: t, request: e })
          }
          if (r === 304) {
            throw new a.RequestError('Not modified', r, { headers: t, request: e })
          }
          if (r >= 400) {
            return n.text().then(i => {
              const n = new a.RequestError(i, r, { headers: t, request: e })
              try {
                let e = JSON.parse(n.message)
                Object.assign(n, e)
                let t = e.errors
                n.message = n.message + ': ' + t.map(JSON.stringify).join(', ')
              } catch (e) {}
              throw n
            })
          }
          const s = n.headers.get('content-type')
          if (/application\/json/.test(s)) {
            return n.json()
          }
          if (!s || /^text\/|charset=utf-8$/.test(s)) {
            return n.text()
          }
          return getBufferResponse(n)
        })
        .then(e => {
          return { status: r, url: i, headers: t, data: e }
        })
        .catch(r => {
          if (r instanceof a.RequestError) {
            throw r
          }
          throw new a.RequestError(r.message, 500, { headers: t, request: e })
        })
    }
    function withDefaults(e, t) {
      const r = e.defaults(t)
      const i = function(e, t) {
        const i = r.merge(e, t)
        if (!i.request || !i.request.hook) {
          return fetchWrapper(r.parse(i))
        }
        const n = (e, t) => {
          return fetchWrapper(r.parse(r.merge(e, t)))
        }
        Object.assign(n, { endpoint: r, defaults: withDefaults.bind(null, r) })
        return i.request.hook(n, i)
      }
      return Object.assign(i, { endpoint: r, defaults: withDefaults.bind(null, r) })
    }
    const p = withDefaults(i.endpoint, {
      headers: { 'user-agent': `octokit-request.js/${u} ${n.getUserAgent()}` }
    })
    t.request = p
  },
  761: function(e) {
    e.exports = require('zlib')
  },
  763: function(e) {
    e.exports = removeHook
    function removeHook(e, t, r) {
      if (!e.registry[t]) {
        return
      }
      var i = e.registry[t]
        .map(function(e) {
          return e.orig
        })
        .indexOf(r)
      if (i === -1) {
        return
      }
      e.registry[t].splice(i, 1)
    }
  },
  768: function(e) {
    'use strict'
    e.exports = function(e) {
      var t = typeof e === 'string' ? '\n' : '\n'.charCodeAt()
      var r = typeof e === 'string' ? '\r' : '\r'.charCodeAt()
      if (e[e.length - 1] === t) {
        e = e.slice(0, e.length - 1)
      }
      if (e[e.length - 1] === r) {
        e = e.slice(0, e.length - 1)
      }
      return e
    }
  },
  769: function(e) {
    'use strict'
    e.exports = function isAxiosError(e) {
      return typeof e === 'object' && e.isAxiosError === true
    }
  },
  774: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(411)
    var s = r(369)
    var o = { 'Content-Type': 'application/x-www-form-urlencoded' }
    function setContentTypeIfUnset(e, t) {
      if (!i.isUndefined(e) && i.isUndefined(e['Content-Type'])) {
        e['Content-Type'] = t
      }
    }
    function getDefaultAdapter() {
      var e
      if (typeof XMLHttpRequest !== 'undefined') {
        e = r(219)
      } else if (
        typeof process !== 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]'
      ) {
        e = r(670)
      }
      return e
    }
    var a = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [
        function transformRequest(e, t) {
          n(t, 'Accept')
          n(t, 'Content-Type')
          if (
            i.isFormData(e) ||
            i.isArrayBuffer(e) ||
            i.isBuffer(e) ||
            i.isStream(e) ||
            i.isFile(e) ||
            i.isBlob(e)
          ) {
            return e
          }
          if (i.isArrayBufferView(e)) {
            return e.buffer
          }
          if (i.isURLSearchParams(e)) {
            setContentTypeIfUnset(t, 'application/x-www-form-urlencoded;charset=utf-8')
            return e.toString()
          }
          if (i.isObject(e) || (t && t['Content-Type'] === 'application/json')) {
            setContentTypeIfUnset(t, 'application/json')
            return JSON.stringify(e)
          }
          return e
        }
      ],
      transformResponse: [
        function transformResponse(e) {
          var t = this.transitional
          var r = t && t.silentJSONParsing
          var n = t && t.forcedJSONParsing
          var o = !r && this.responseType === 'json'
          if (o || (n && i.isString(e) && e.length)) {
            try {
              return JSON.parse(e)
            } catch (e) {
              if (o) {
                if (e.name === 'SyntaxError') {
                  throw s(e, this, 'E_JSON_PARSE')
                }
                throw e
              }
            }
          }
          return e
        }
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300
      }
    }
    a.headers = { common: { Accept: 'application/json, text/plain, */*' } }
    i.forEach(['delete', 'get', 'head'], function forEachMethodNoData(e) {
      a.headers[e] = {}
    })
    i.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      a.headers[e] = i.merge(o)
    })
    e.exports = a
  },
  777: function(e, t, r) {
    e.exports = getFirstPage
    const i = r(265)
    function getFirstPage(e, t, r) {
      return i(e, t, 'first', r)
    }
  },
  779: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(133)
    var s = r(283)
    var o = r(946)
    var a = r(825)
    var u = r(470)
    var p = u.validators
    function Axios(e) {
      this.defaults = e
      this.interceptors = { request: new s(), response: new s() }
    }
    Axios.prototype.request = function request(e) {
      if (typeof e === 'string') {
        e = arguments[1] || {}
        e.url = arguments[0]
      } else {
        e = e || {}
      }
      e = a(this.defaults, e)
      if (e.method) {
        e.method = e.method.toLowerCase()
      } else if (this.defaults.method) {
        e.method = this.defaults.method.toLowerCase()
      } else {
        e.method = 'get'
      }
      var t = e.transitional
      if (t !== undefined) {
        u.assertOptions(
          t,
          {
            silentJSONParsing: p.transitional(p.boolean, '1.0.0'),
            forcedJSONParsing: p.transitional(p.boolean, '1.0.0'),
            clarifyTimeoutError: p.transitional(p.boolean, '1.0.0')
          },
          false
        )
      }
      var r = []
      var i = true
      this.interceptors.request.forEach(function unshiftRequestInterceptors(t) {
        if (typeof t.runWhen === 'function' && t.runWhen(e) === false) {
          return
        }
        i = i && t.synchronous
        r.unshift(t.fulfilled, t.rejected)
      })
      var n = []
      this.interceptors.response.forEach(function pushResponseInterceptors(e) {
        n.push(e.fulfilled, e.rejected)
      })
      var s
      if (!i) {
        var c = [o, undefined]
        Array.prototype.unshift.apply(c, r)
        c.concat(n)
        s = Promise.resolve(e)
        while (c.length) {
          s = s.then(c.shift(), c.shift())
        }
        return s
      }
      var d = e
      while (r.length) {
        var l = r.shift()
        var m = r.shift()
        try {
          d = l(d)
        } catch (e) {
          m(e)
          break
        }
      }
      try {
        s = o(d)
      } catch (e) {
        return Promise.reject(e)
      }
      while (n.length) {
        s = s.then(n.shift(), n.shift())
      }
      return s
    }
    Axios.prototype.getUri = function getUri(e) {
      e = a(this.defaults, e)
      return n(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
    }
    i.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(e) {
      Axios.prototype[e] = function(t, r) {
        return this.request(a(r || {}, { method: e, url: t, data: (r || {}).data }))
      }
    })
    i.forEach(['post', 'put', 'patch'], function forEachMethodWithData(e) {
      Axios.prototype[e] = function(t, r, i) {
        return this.request(a(i || {}, { method: e, url: t, data: r }))
      }
    })
    e.exports = Axios
  },
  796: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e
    }
    var i = _interopDefault(r(2))
    function getUserAgent() {
      try {
        return `Node.js/${process.version.substr(1)} (${i()}; ${process.arch})`
      } catch (e) {
        if (/wmic os get Caption/.test(e.message)) {
          return 'Windows <version undetectable>'
        }
        throw e
      }
    }
    t.getUserAgent = getUserAgent
  },
  813: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    async function auth(e) {
      const t = e.split(/\./).length === 3 ? 'app' : /^v\d+\./.test(e) ? 'installation' : 'oauth'
      return { type: 'token', token: e, tokenType: t }
    }
    function withAuthorizationPrefix(e) {
      if (e.split(/\./).length === 3) {
        return `bearer ${e}`
      }
      return `token ${e}`
    }
    async function hook(e, t, r, i) {
      const n = t.endpoint.merge(r, i)
      n.headers.authorization = withAuthorizationPrefix(e)
      return t(n)
    }
    const r = function createTokenAuth(e) {
      if (!e) {
        throw new Error('[@octokit/auth-token] No token passed to createTokenAuth')
      }
      if (typeof e !== 'string') {
        throw new Error('[@octokit/auth-token] Token passed to createTokenAuth is not a string')
      }
      e = e.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, e), { hook: hook.bind(null, e) })
    }
    t.createTokenAuth = r
  },
  814: function(e, t, r) {
    e.exports = which
    which.sync = whichSync
    var i =
      process.platform === 'win32' ||
      process.env.OSTYPE === 'cygwin' ||
      process.env.OSTYPE === 'msys'
    var n = r(622)
    var s = i ? ';' : ':'
    var o = r(742)
    function getNotFoundError(e) {
      var t = new Error('not found: ' + e)
      t.code = 'ENOENT'
      return t
    }
    function getPathInfo(e, t) {
      var r = t.colon || s
      var n = t.path || process.env.PATH || ''
      var o = ['']
      n = n.split(r)
      var a = ''
      if (i) {
        n.unshift(process.cwd())
        a = t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
        o = a.split(r)
        if (e.indexOf('.') !== -1 && o[0] !== '') o.unshift('')
      }
      if (e.match(/\//) || (i && e.match(/\\/))) n = ['']
      return { env: n, ext: o, extExe: a }
    }
    function which(e, t, r) {
      if (typeof t === 'function') {
        r = t
        t = {}
      }
      var i = getPathInfo(e, t)
      var s = i.env
      var a = i.ext
      var u = i.extExe
      var p = []
      ;(function F(i, c) {
        if (i === c) {
          if (t.all && p.length) return r(null, p)
          else return r(getNotFoundError(e))
        }
        var d = s[i]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = n.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        }
        ;(function E(e, n) {
          if (e === n) return F(i + 1, c)
          var s = a[e]
          o(l + s, { pathExt: u }, function(i, o) {
            if (!i && o) {
              if (t.all) p.push(l + s)
              else return r(null, l + s)
            }
            return E(e + 1, n)
          })
        })(0, a.length)
      })(0, s.length)
    }
    function whichSync(e, t) {
      t = t || {}
      var r = getPathInfo(e, t)
      var i = r.env
      var s = r.ext
      var a = r.extExe
      var u = []
      for (var p = 0, c = i.length; p < c; p++) {
        var d = i[p]
        if (d.charAt(0) === '"' && d.slice(-1) === '"') d = d.slice(1, -1)
        var l = n.join(d, e)
        if (!d && /^\.[\\\/]/.test(e)) {
          l = e.slice(0, 2) + l
        }
        for (var m = 0, g = s.length; m < g; m++) {
          var h = l + s[m]
          var y
          try {
            y = o.sync(h, { pathExt: a })
            if (y) {
              if (t.all) u.push(h)
              else return h
            }
          } catch (e) {}
        }
      }
      if (t.all && u.length) return u
      if (t.nothrow) return null
      throw getNotFoundError(e)
    }
  },
  816: function(e) {
    'use strict'
    e.exports = /^#!.*/
  },
  818: function(e, t, r) {
    e.exports = isexe
    isexe.sync = sync
    var i = r(747)
    function checkPathExt(e, t) {
      var r = t.pathExt !== undefined ? t.pathExt : process.env.PATHEXT
      if (!r) {
        return true
      }
      r = r.split(';')
      if (r.indexOf('') !== -1) {
        return true
      }
      for (var i = 0; i < r.length; i++) {
        var n = r[i].toLowerCase()
        if (n && e.substr(-n.length).toLowerCase() === n) {
          return true
        }
      }
      return false
    }
    function checkStat(e, t, r) {
      if (!e.isSymbolicLink() && !e.isFile()) {
        return false
      }
      return checkPathExt(t, r)
    }
    function isexe(e, t, r) {
      i.stat(e, function(i, n) {
        r(i, i ? false : checkStat(n, e, t))
      })
    }
    function sync(e, t) {
      return checkStat(i.statSync(e), e, t)
    }
  },
  825: function(e, t, r) {
    'use strict'
    var i = r(35)
    e.exports = function mergeConfig(e, t) {
      t = t || {}
      var r = {}
      var n = ['url', 'method', 'data']
      var s = ['headers', 'auth', 'proxy', 'params']
      var o = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding'
      ]
      var a = ['validateStatus']
      function getMergedValue(e, t) {
        if (i.isPlainObject(e) && i.isPlainObject(t)) {
          return i.merge(e, t)
        } else if (i.isPlainObject(t)) {
          return i.merge({}, t)
        } else if (i.isArray(t)) {
          return t.slice()
        }
        return t
      }
      function mergeDeepProperties(n) {
        if (!i.isUndefined(t[n])) {
          r[n] = getMergedValue(e[n], t[n])
        } else if (!i.isUndefined(e[n])) {
          r[n] = getMergedValue(undefined, e[n])
        }
      }
      i.forEach(n, function valueFromConfig2(e) {
        if (!i.isUndefined(t[e])) {
          r[e] = getMergedValue(undefined, t[e])
        }
      })
      i.forEach(s, mergeDeepProperties)
      i.forEach(o, function defaultToConfig2(n) {
        if (!i.isUndefined(t[n])) {
          r[n] = getMergedValue(undefined, t[n])
        } else if (!i.isUndefined(e[n])) {
          r[n] = getMergedValue(undefined, e[n])
        }
      })
      i.forEach(a, function merge(i) {
        if (i in t) {
          r[i] = getMergedValue(e[i], t[i])
        } else if (i in e) {
          r[i] = getMergedValue(undefined, e[i])
        }
      })
      var u = n
        .concat(s)
        .concat(o)
        .concat(a)
      var p = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function filterAxiosKeys(e) {
          return u.indexOf(e) === -1
        })
      i.forEach(p, mergeDeepProperties)
      return r
    }
  },
  826: function(e) {
    'use strict'
    function Cancel(e) {
      this.message = e
    }
    Cancel.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }
    Cancel.prototype.__CANCEL__ = true
    e.exports = Cancel
  },
  835: function(e) {
    e.exports = require('url')
  },
  842: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    var i = r(692)
    var n = {
      actions: {
        cancelWorkflowRun: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/cancel'
        },
        createOrUpdateSecretForRepo: {
          method: 'PUT',
          params: {
            encrypted_value: { type: 'string' },
            key_id: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        createRegistrationToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/registration-token'
        },
        createRemoveToken: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/remove-token'
        },
        deleteArtifact: {
          method: 'DELETE',
          params: {
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        },
        deleteSecretFromRepo: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        downloadArtifact: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' },
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format'
        },
        getArtifact: {
          method: 'GET',
          params: {
            artifact_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/artifacts/:artifact_id'
        },
        getPublicKey: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/public-key'
        },
        getSecret: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets/:name'
        },
        getSelfHostedRunner: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            runner_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        },
        getWorkflow: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            workflow_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id'
        },
        getWorkflowJob: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/jobs/:job_id'
        },
        getWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id'
        },
        listDownloadsForSelfHostedRunnerApplication: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners/downloads'
        },
        listJobsForWorkflowRun: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/jobs'
        },
        listRepoWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' },
            branch: { type: 'string' },
            event: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runs'
        },
        listRepoWorkflows: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/workflows'
        },
        listSecretsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/secrets'
        },
        listSelfHostedRunnersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/runners'
        },
        listWorkflowJobLogs: {
          method: 'GET',
          params: {
            job_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/actions/jobs/:job_id/logs'
        },
        listWorkflowRunArtifacts: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/artifacts'
        },
        listWorkflowRunLogs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/logs'
        },
        listWorkflowRuns: {
          method: 'GET',
          params: {
            actor: { type: 'string' },
            branch: { type: 'string' },
            event: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['completed', 'status', 'conclusion'], type: 'string' },
            workflow_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/workflows/:workflow_id/runs'
        },
        reRunWorkflow: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            run_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runs/:run_id/rerun'
        },
        removeSelfHostedRunner: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            runner_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/actions/runners/:runner_id'
        }
      },
      activity: {
        checkStarringRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        },
        deleteRepoSubscription: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        deleteThreadSubscription: {
          method: 'DELETE',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        getRepoSubscription: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        getThread: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id'
        },
        getThreadSubscription: {
          method: 'GET',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        listEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events/orgs/:org'
        },
        listEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events'
        },
        listFeeds: { method: 'GET', params: {}, url: '/feeds' },
        listNotifications: {
          method: 'GET',
          params: {
            all: { type: 'boolean' },
            before: { type: 'string' },
            page: { type: 'integer' },
            participating: { type: 'boolean' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/notifications'
        },
        listNotificationsForRepo: {
          method: 'GET',
          params: {
            all: { type: 'boolean' },
            before: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            participating: { type: 'boolean' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/notifications'
        },
        listPublicEvents: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/events'
        },
        listPublicEventsForOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/events'
        },
        listPublicEventsForRepoNetwork: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/networks/:owner/:repo/events'
        },
        listPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/events/public'
        },
        listReceivedEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/received_events'
        },
        listReceivedPublicEventsForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/received_events/public'
        },
        listRepoEvents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/events'
        },
        listReposStarredByAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/user/starred'
        },
        listReposStarredByUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/starred'
        },
        listReposWatchedByUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/subscriptions'
        },
        listStargazersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stargazers'
        },
        listWatchedReposForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/subscriptions'
        },
        listWatchersForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/subscribers'
        },
        markAsRead: {
          method: 'PUT',
          params: { last_read_at: { type: 'string' } },
          url: '/notifications'
        },
        markNotificationsAsReadForRepo: {
          method: 'PUT',
          params: {
            last_read_at: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/notifications'
        },
        markThreadAsRead: {
          method: 'PATCH',
          params: { thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id'
        },
        setRepoSubscription: {
          method: 'PUT',
          params: {
            ignored: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            subscribed: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/subscription'
        },
        setThreadSubscription: {
          method: 'PUT',
          params: { ignored: { type: 'boolean' }, thread_id: { required: true, type: 'integer' } },
          url: '/notifications/threads/:thread_id/subscription'
        },
        starRepo: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        },
        unstarRepo: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/user/starred/:owner/:repo'
        }
      },
      apps: {
        addRepoToInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'PUT',
          params: {
            installation_id: { required: true, type: 'integer' },
            repository_id: { required: true, type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories/:repository_id'
        },
        checkAccountIsAssociatedWithAny: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' } },
          url: '/marketplace_listing/accounts/:account_id'
        },
        checkAccountIsAssociatedWithAnyStubbed: {
          method: 'GET',
          params: { account_id: { required: true, type: 'integer' } },
          url: '/marketplace_listing/stubbed/accounts/:account_id'
        },
        checkAuthorization: {
          deprecated:
            'octokit.apps.checkAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        checkToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'POST',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        createContentAttachment: {
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            content_reference_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/content_references/:content_reference_id/attachments'
        },
        createFromManifest: {
          headers: { accept: 'application/vnd.github.fury-preview+json' },
          method: 'POST',
          params: { code: { required: true, type: 'string' } },
          url: '/app-manifests/:code/conversions'
        },
        createInstallationToken: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'POST',
          params: {
            installation_id: { required: true, type: 'integer' },
            permissions: { type: 'object' },
            repository_ids: { type: 'integer[]' }
          },
          url: '/app/installations/:installation_id/access_tokens'
        },
        deleteAuthorization: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'DELETE',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grant'
        },
        deleteInstallation: {
          headers: {
            accept:
              'application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json'
          },
          method: 'DELETE',
          params: { installation_id: { required: true, type: 'integer' } },
          url: '/app/installations/:installation_id'
        },
        deleteToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'DELETE',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        findOrgInstallation: {
          deprecated:
            'octokit.apps.findOrgInstallation() has been renamed to octokit.apps.getOrgInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/installation'
        },
        findRepoInstallation: {
          deprecated:
            'octokit.apps.findRepoInstallation() has been renamed to octokit.apps.getRepoInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/installation'
        },
        findUserInstallation: {
          deprecated:
            'octokit.apps.findUserInstallation() has been renamed to octokit.apps.getUserInstallation() (2019-04-10)',
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username/installation'
        },
        getAuthenticated: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {},
          url: '/app'
        },
        getBySlug: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { app_slug: { required: true, type: 'string' } },
          url: '/apps/:app_slug'
        },
        getInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { installation_id: { required: true, type: 'integer' } },
          url: '/app/installations/:installation_id'
        },
        getOrgInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/installation'
        },
        getRepoInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/installation'
        },
        getUserInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username/installation'
        },
        listAccountsUserOrOrgOnPlan: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            plan_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/marketplace_listing/plans/:plan_id/accounts'
        },
        listAccountsUserOrOrgOnPlanStubbed: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            plan_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/marketplace_listing/stubbed/plans/:plan_id/accounts'
        },
        listInstallationReposForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            installation_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories'
        },
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/app/installations'
        },
        listInstallationsForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/installations'
        },
        listMarketplacePurchasesForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/marketplace_purchases'
        },
        listMarketplacePurchasesForAuthenticatedUserStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/marketplace_purchases/stubbed'
        },
        listPlans: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/marketplace_listing/plans'
        },
        listPlansStubbed: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/marketplace_listing/stubbed/plans'
        },
        listRepos: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/installation/repositories'
        },
        removeRepoFromInstallation: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'DELETE',
          params: {
            installation_id: { required: true, type: 'integer' },
            repository_id: { required: true, type: 'integer' }
          },
          url: '/user/installations/:installation_id/repositories/:repository_id'
        },
        resetAuthorization: {
          deprecated:
            'octokit.apps.resetAuthorization() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        resetToken: {
          headers: { accept: 'application/vnd.github.doctor-strange-preview+json' },
          method: 'PATCH',
          params: {
            access_token: { type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/token'
        },
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.apps.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeGrantForApplication: {
          deprecated:
            'octokit.apps.revokeGrantForApplication() is deprecated, see https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grants/:access_token'
        },
        revokeInstallationToken: {
          headers: { accept: 'application/vnd.github.gambit-preview+json' },
          method: 'DELETE',
          params: {},
          url: '/installation/token'
        }
      },
      checks: {
        create: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            actions: { type: 'object[]' },
            'actions[].description': { required: true, type: 'string' },
            'actions[].identifier': { required: true, type: 'string' },
            'actions[].label': { required: true, type: 'string' },
            completed_at: { type: 'string' },
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            },
            details_url: { type: 'string' },
            external_id: { type: 'string' },
            head_sha: { required: true, type: 'string' },
            name: { required: true, type: 'string' },
            output: { type: 'object' },
            'output.annotations': { type: 'object[]' },
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            },
            'output.annotations[].end_column': { type: 'integer' },
            'output.annotations[].end_line': { required: true, type: 'integer' },
            'output.annotations[].message': { required: true, type: 'string' },
            'output.annotations[].path': { required: true, type: 'string' },
            'output.annotations[].raw_details': { type: 'string' },
            'output.annotations[].start_column': { type: 'integer' },
            'output.annotations[].start_line': { required: true, type: 'integer' },
            'output.annotations[].title': { type: 'string' },
            'output.images': { type: 'object[]' },
            'output.images[].alt': { required: true, type: 'string' },
            'output.images[].caption': { type: 'string' },
            'output.images[].image_url': { required: true, type: 'string' },
            'output.summary': { required: true, type: 'string' },
            'output.text': { type: 'string' },
            'output.title': { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            started_at: { type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs'
        },
        createSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            head_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites'
        },
        get: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        },
        getSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_suite_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id'
        },
        listAnnotations: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_run_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id/annotations'
        },
        listForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_name: { type: 'string' },
            filter: { enum: ['latest', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/check-runs'
        },
        listForSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            check_name: { type: 'string' },
            check_suite_id: { required: true, type: 'integer' },
            filter: { enum: ['latest', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/check-runs'
        },
        listSuitesForRef: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'GET',
          params: {
            app_id: { type: 'integer' },
            check_name: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/check-suites'
        },
        rerequestSuite: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'POST',
          params: {
            check_suite_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/:check_suite_id/rerequest'
        },
        setSuitesPreferences: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'PATCH',
          params: {
            auto_trigger_checks: { type: 'object[]' },
            'auto_trigger_checks[].app_id': { required: true, type: 'integer' },
            'auto_trigger_checks[].setting': { required: true, type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/check-suites/preferences'
        },
        update: {
          headers: { accept: 'application/vnd.github.antiope-preview+json' },
          method: 'PATCH',
          params: {
            actions: { type: 'object[]' },
            'actions[].description': { required: true, type: 'string' },
            'actions[].identifier': { required: true, type: 'string' },
            'actions[].label': { required: true, type: 'string' },
            check_run_id: { required: true, type: 'integer' },
            completed_at: { type: 'string' },
            conclusion: {
              enum: ['success', 'failure', 'neutral', 'cancelled', 'timed_out', 'action_required'],
              type: 'string'
            },
            details_url: { type: 'string' },
            external_id: { type: 'string' },
            name: { type: 'string' },
            output: { type: 'object' },
            'output.annotations': { type: 'object[]' },
            'output.annotations[].annotation_level': {
              enum: ['notice', 'warning', 'failure'],
              required: true,
              type: 'string'
            },
            'output.annotations[].end_column': { type: 'integer' },
            'output.annotations[].end_line': { required: true, type: 'integer' },
            'output.annotations[].message': { required: true, type: 'string' },
            'output.annotations[].path': { required: true, type: 'string' },
            'output.annotations[].raw_details': { type: 'string' },
            'output.annotations[].start_column': { type: 'integer' },
            'output.annotations[].start_line': { required: true, type: 'integer' },
            'output.annotations[].title': { type: 'string' },
            'output.images': { type: 'object[]' },
            'output.images[].alt': { required: true, type: 'string' },
            'output.images[].caption': { type: 'string' },
            'output.images[].image_url': { required: true, type: 'string' },
            'output.summary': { required: true, type: 'string' },
            'output.text': { type: 'string' },
            'output.title': { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            started_at: { type: 'string' },
            status: { enum: ['queued', 'in_progress', 'completed'], type: 'string' }
          },
          url: '/repos/:owner/:repo/check-runs/:check_run_id'
        }
      },
      codesOfConduct: {
        getConductCode: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: { key: { required: true, type: 'string' } },
          url: '/codes_of_conduct/:key'
        },
        getForRepo: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/community/code_of_conduct'
        },
        listConductCodes: {
          headers: { accept: 'application/vnd.github.scarlet-witch-preview+json' },
          method: 'GET',
          params: {},
          url: '/codes_of_conduct'
        }
      },
      emojis: { get: { method: 'GET', params: {}, url: '/emojis' } },
      gists: {
        checkIsStarred: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            files: { required: true, type: 'object' },
            'files.content': { type: 'string' },
            public: { type: 'boolean' }
          },
          url: '/gists'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments'
        },
        delete: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        },
        fork: {
          method: 'POST',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/forks'
        },
        get: {
          method: 'GET',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        },
        getRevision: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/:sha'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists'
        },
        listComments: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/commits'
        },
        listForks: {
          method: 'GET',
          params: {
            gist_id: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/gists/:gist_id/forks'
        },
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists/public'
        },
        listPublicForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/gists'
        },
        listStarred: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/gists/starred'
        },
        star: {
          method: 'PUT',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        unstar: {
          method: 'DELETE',
          params: { gist_id: { required: true, type: 'string' } },
          url: '/gists/:gist_id/star'
        },
        update: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            files: { type: 'object' },
            'files.content': { type: 'string' },
            'files.filename': { type: 'string' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            gist_id: { required: true, type: 'string' }
          },
          url: '/gists/:gist_id/comments/:comment_id'
        }
      },
      git: {
        createBlob: {
          method: 'POST',
          params: {
            content: { required: true, type: 'string' },
            encoding: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/blobs'
        },
        createCommit: {
          method: 'POST',
          params: {
            author: { type: 'object' },
            'author.date': { type: 'string' },
            'author.email': { type: 'string' },
            'author.name': { type: 'string' },
            committer: { type: 'object' },
            'committer.date': { type: 'string' },
            'committer.email': { type: 'string' },
            'committer.name': { type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            parents: { required: true, type: 'string[]' },
            repo: { required: true, type: 'string' },
            signature: { type: 'string' },
            tree: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/commits'
        },
        createRef: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs'
        },
        createTag: {
          method: 'POST',
          params: {
            message: { required: true, type: 'string' },
            object: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag: { required: true, type: 'string' },
            tagger: { type: 'object' },
            'tagger.date': { type: 'string' },
            'tagger.email': { type: 'string' },
            'tagger.name': { type: 'string' },
            type: { enum: ['commit', 'tree', 'blob'], required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/tags'
        },
        createTree: {
          method: 'POST',
          params: {
            base_tree: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tree: { required: true, type: 'object[]' },
            'tree[].content': { type: 'string' },
            'tree[].mode': {
              enum: ['100644', '100755', '040000', '160000', '120000'],
              type: 'string'
            },
            'tree[].path': { type: 'string' },
            'tree[].sha': { allowNull: true, type: 'string' },
            'tree[].type': { enum: ['blob', 'tree', 'commit'], type: 'string' }
          },
          url: '/repos/:owner/:repo/git/trees'
        },
        deleteRef: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:ref'
        },
        getBlob: {
          method: 'GET',
          params: {
            file_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/blobs/:file_sha'
        },
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/commits/:commit_sha'
        },
        getRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/ref/:ref'
        },
        getTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag_sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/tags/:tag_sha'
        },
        getTree: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            recursive: { enum: ['1'], type: 'integer' },
            repo: { required: true, type: 'string' },
            tree_sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/trees/:tree_sha'
        },
        listMatchingRefs: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/matching-refs/:ref'
        },
        listRefs: {
          method: 'GET',
          params: {
            namespace: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:namespace'
        },
        updateRef: {
          method: 'PATCH',
          params: {
            force: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/git/refs/:ref'
        }
      },
      gitignore: {
        getTemplate: {
          method: 'GET',
          params: { name: { required: true, type: 'string' } },
          url: '/gitignore/templates/:name'
        },
        listTemplates: { method: 'GET', params: {}, url: '/gitignore/templates' }
      },
      interactions: {
        addOrUpdateRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/interaction-limits'
        },
        addOrUpdateRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'PUT',
          params: {
            limit: {
              enum: ['existing_users', 'contributors_only', 'collaborators_only'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        },
        getRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/interaction-limits'
        },
        getRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        },
        removeRestrictionsForOrg: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'DELETE',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/interaction-limits'
        },
        removeRestrictionsForRepo: {
          headers: { accept: 'application/vnd.github.sombra-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/interaction-limits'
        }
      },
      issues: {
        addAssignees: {
          method: 'POST',
          params: {
            assignees: { type: 'string[]' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        },
        addLabels: {
          method: 'POST',
          params: {
            issue_number: { required: true, type: 'integer' },
            labels: { required: true, type: 'string[]' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        checkAssignee: {
          method: 'GET',
          params: {
            assignee: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/assignees/:assignee'
        },
        create: {
          method: 'POST',
          params: {
            assignee: { type: 'string' },
            assignees: { type: 'string[]' },
            body: { type: 'string' },
            labels: { type: 'string[]' },
            milestone: { type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        },
        createLabel: {
          method: 'POST',
          params: {
            color: { required: true, type: 'string' },
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels'
        },
        createMilestone: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            due_on: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        deleteLabel: {
          method: 'DELETE',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:name'
        },
        deleteMilestone: {
          method: 'DELETE',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        },
        get: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        getEvent: {
          method: 'GET',
          params: {
            event_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/events/:event_id'
        },
        getLabel: {
          method: 'GET',
          params: {
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:name'
        },
        getMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        },
        list: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/issues'
        },
        listAssignees: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/assignees'
        },
        listComments: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/comments'
        },
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments'
        },
        listEvents: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/events'
        },
        listEventsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/events'
        },
        listEventsForTimeline: {
          headers: { accept: 'application/vnd.github.mockingbird-preview+json' },
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/timeline'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/user/issues'
        },
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            filter: {
              enum: ['assigned', 'created', 'mentioned', 'subscribed', 'all'],
              type: 'string'
            },
            labels: { type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/orgs/:org/issues'
        },
        listForRepo: {
          method: 'GET',
          params: {
            assignee: { type: 'string' },
            creator: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            labels: { type: 'string' },
            mentioned: { type: 'string' },
            milestone: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated', 'comments'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/issues'
        },
        listLabelsForMilestone: {
          method: 'GET',
          params: {
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number/labels'
        },
        listLabelsForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels'
        },
        listLabelsOnIssue: {
          method: 'GET',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        listMilestonesForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['due_on', 'completeness'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones'
        },
        lock: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' },
            lock_reason: { enum: ['off-topic', 'too heated', 'resolved', 'spam'], type: 'string' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        },
        removeAssignees: {
          method: 'DELETE',
          params: {
            assignees: { type: 'string[]' },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/assignees'
        },
        removeLabel: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            name: { required: true, type: 'string' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels/:name'
        },
        removeLabels: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        replaceLabels: {
          method: 'PUT',
          params: {
            issue_number: { required: true, type: 'integer' },
            labels: { type: 'string[]' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/labels'
        },
        unlock: {
          method: 'DELETE',
          params: {
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/lock'
        },
        update: {
          method: 'PATCH',
          params: {
            assignee: { type: 'string' },
            assignees: { type: 'string[]' },
            body: { type: 'string' },
            issue_number: { required: true, type: 'integer' },
            labels: { type: 'string[]' },
            milestone: { allowNull: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id'
        },
        updateLabel: {
          method: 'PATCH',
          params: {
            color: { type: 'string' },
            current_name: { required: true, type: 'string' },
            description: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/labels/:current_name'
        },
        updateMilestone: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            due_on: { type: 'string' },
            milestone_number: { required: true, type: 'integer' },
            number: { alias: 'milestone_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/milestones/:milestone_number'
        }
      },
      licenses: {
        get: {
          method: 'GET',
          params: { license: { required: true, type: 'string' } },
          url: '/licenses/:license'
        },
        getForRepo: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/license'
        },
        list: {
          deprecated:
            'octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)',
          method: 'GET',
          params: {},
          url: '/licenses'
        },
        listCommonlyUsed: { method: 'GET', params: {}, url: '/licenses' }
      },
      markdown: {
        render: {
          method: 'POST',
          params: {
            context: { type: 'string' },
            mode: { enum: ['markdown', 'gfm'], type: 'string' },
            text: { required: true, type: 'string' }
          },
          url: '/markdown'
        },
        renderRaw: {
          headers: { 'content-type': 'text/plain; charset=utf-8' },
          method: 'POST',
          params: { data: { mapTo: 'data', required: true, type: 'string' } },
          url: '/markdown/raw'
        }
      },
      meta: { get: { method: 'GET', params: {}, url: '/meta' } },
      migrations: {
        cancelImport: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        deleteArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id/archive'
        },
        deleteArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        downloadArchiveForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        getArchiveForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id/archive'
        },
        getArchiveForOrg: {
          deprecated:
            'octokit.migrations.getArchiveForOrg() has been renamed to octokit.migrations.downloadArchiveForOrg() (2020-01-27)',
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/archive'
        },
        getCommitAuthors: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import/authors'
        },
        getImportProgress: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        getLargeFiles: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/large_files'
        },
        getStatusForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { migration_id: { required: true, type: 'integer' } },
          url: '/user/migrations/:migration_id'
        },
        getStatusForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id'
        },
        listForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/migrations'
        },
        listForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/migrations'
        },
        listReposForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/migrations/:migration_id/repositories'
        },
        listReposForUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'GET',
          params: {
            migration_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/user/:migration_id/repositories'
        },
        mapCommitAuthor: {
          method: 'PATCH',
          params: {
            author_id: { required: true, type: 'integer' },
            email: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/authors/:author_id'
        },
        setLfsPreference: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            use_lfs: { enum: ['opt_in', 'opt_out'], required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/import/lfs'
        },
        startForAuthenticatedUser: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' },
            lock_repositories: { type: 'boolean' },
            repositories: { required: true, type: 'string[]' }
          },
          url: '/user/migrations'
        },
        startForOrg: {
          method: 'POST',
          params: {
            exclude_attachments: { type: 'boolean' },
            lock_repositories: { type: 'boolean' },
            org: { required: true, type: 'string' },
            repositories: { required: true, type: 'string[]' }
          },
          url: '/orgs/:org/migrations'
        },
        startImport: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tfvc_project: { type: 'string' },
            vcs: { enum: ['subversion', 'git', 'mercurial', 'tfvc'], type: 'string' },
            vcs_password: { type: 'string' },
            vcs_url: { required: true, type: 'string' },
            vcs_username: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        },
        unlockRepoForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            repo_name: { required: true, type: 'string' }
          },
          url: '/user/migrations/:migration_id/repos/:repo_name/lock'
        },
        unlockRepoForOrg: {
          headers: { accept: 'application/vnd.github.wyandotte-preview+json' },
          method: 'DELETE',
          params: {
            migration_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            repo_name: { required: true, type: 'string' }
          },
          url: '/orgs/:org/migrations/:migration_id/repos/:repo_name/lock'
        },
        updateImport: {
          method: 'PATCH',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            vcs_password: { type: 'string' },
            vcs_username: { type: 'string' }
          },
          url: '/repos/:owner/:repo/import'
        }
      },
      oauthAuthorizations: {
        checkAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.checkAuthorization() has been renamed to octokit.apps.checkAuthorization() (2019-11-05)',
          method: 'GET',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        createAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.createAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization',
          method: 'POST',
          params: {
            client_id: { type: 'string' },
            client_secret: { type: 'string' },
            fingerprint: { type: 'string' },
            note: { required: true, type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations'
        },
        deleteAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.deleteAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization',
          method: 'DELETE',
          params: { authorization_id: { required: true, type: 'integer' } },
          url: '/authorizations/:authorization_id'
        },
        deleteGrant: {
          deprecated:
            'octokit.oauthAuthorizations.deleteGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#delete-a-grant',
          method: 'DELETE',
          params: { grant_id: { required: true, type: 'integer' } },
          url: '/applications/grants/:grant_id'
        },
        getAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.getAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization',
          method: 'GET',
          params: { authorization_id: { required: true, type: 'integer' } },
          url: '/authorizations/:authorization_id'
        },
        getGrant: {
          deprecated:
            'octokit.oauthAuthorizations.getGrant() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant',
          method: 'GET',
          params: { grant_id: { required: true, type: 'integer' } },
          url: '/applications/grants/:grant_id'
        },
        getOrCreateAuthorizationForApp: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id'
        },
        getOrCreateAuthorizationForAppAndFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { required: true, type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id/:fingerprint'
        },
        getOrCreateAuthorizationForAppFingerprint: {
          deprecated:
            'octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)',
          method: 'PUT',
          params: {
            client_id: { required: true, type: 'string' },
            client_secret: { required: true, type: 'string' },
            fingerprint: { required: true, type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/clients/:client_id/:fingerprint'
        },
        listAuthorizations: {
          deprecated:
            'octokit.oauthAuthorizations.listAuthorizations() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations',
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/authorizations'
        },
        listGrants: {
          deprecated:
            'octokit.oauthAuthorizations.listGrants() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#list-your-grants',
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/applications/grants'
        },
        resetAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.resetAuthorization() has been renamed to octokit.apps.resetAuthorization() (2019-11-05)',
          method: 'POST',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeAuthorizationForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeAuthorizationForApplication() has been renamed to octokit.apps.revokeAuthorizationForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/tokens/:access_token'
        },
        revokeGrantForApplication: {
          deprecated:
            'octokit.oauthAuthorizations.revokeGrantForApplication() has been renamed to octokit.apps.revokeGrantForApplication() (2019-11-05)',
          method: 'DELETE',
          params: {
            access_token: { required: true, type: 'string' },
            client_id: { required: true, type: 'string' }
          },
          url: '/applications/:client_id/grants/:access_token'
        },
        updateAuthorization: {
          deprecated:
            'octokit.oauthAuthorizations.updateAuthorization() is deprecated, see https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization',
          method: 'PATCH',
          params: {
            add_scopes: { type: 'string[]' },
            authorization_id: { required: true, type: 'integer' },
            fingerprint: { type: 'string' },
            note: { type: 'string' },
            note_url: { type: 'string' },
            remove_scopes: { type: 'string[]' },
            scopes: { type: 'string[]' }
          },
          url: '/authorizations/:authorization_id'
        }
      },
      orgs: {
        addOrUpdateMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            role: { enum: ['admin', 'member'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        blockUser: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        checkBlockedUser: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        checkMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/members/:username'
        },
        checkPublicMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        concealMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        convertMemberToOutsideCollaborator: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/outside_collaborators/:username'
        },
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' },
            config: { required: true, type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks'
        },
        createInvitation: {
          method: 'POST',
          params: {
            email: { type: 'string' },
            invitee_id: { type: 'integer' },
            org: { required: true, type: 'string' },
            role: { enum: ['admin', 'direct_member', 'billing_manager'], type: 'string' },
            team_ids: { type: 'integer[]' }
          },
          url: '/orgs/:org/invitations'
        },
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        get: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org'
        },
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        getMembership: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        getMembershipForAuthenticatedUser: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/user/memberships/orgs/:org'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'integer' }
          },
          url: '/organizations'
        },
        listBlockedUsers: {
          method: 'GET',
          params: { org: { required: true, type: 'string' } },
          url: '/orgs/:org/blocks'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/orgs'
        },
        listForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/orgs'
        },
        listHooks: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/hooks'
        },
        listInstallations: {
          headers: { accept: 'application/vnd.github.machine-man-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/installations'
        },
        listInvitationTeams: {
          method: 'GET',
          params: {
            invitation_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/invitations/:invitation_id/teams'
        },
        listMembers: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['all', 'admin', 'member'], type: 'string' }
          },
          url: '/orgs/:org/members'
        },
        listMemberships: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['active', 'pending'], type: 'string' }
          },
          url: '/user/memberships/orgs'
        },
        listOutsideCollaborators: {
          method: 'GET',
          params: {
            filter: { enum: ['2fa_disabled', 'all'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/outside_collaborators'
        },
        listPendingInvitations: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/invitations'
        },
        listPublicMembers: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/public_members'
        },
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id/pings'
        },
        publicizeMembership: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/public_members/:username'
        },
        removeMember: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/members/:username'
        },
        removeMembership: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/memberships/:username'
        },
        removeOutsideCollaborator: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/outside_collaborators/:username'
        },
        unblockUser: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/blocks/:username'
        },
        update: {
          method: 'PATCH',
          params: {
            billing_email: { type: 'string' },
            company: { type: 'string' },
            default_repository_permission: {
              enum: ['read', 'write', 'admin', 'none'],
              type: 'string'
            },
            description: { type: 'string' },
            email: { type: 'string' },
            has_organization_projects: { type: 'boolean' },
            has_repository_projects: { type: 'boolean' },
            location: { type: 'string' },
            members_allowed_repository_creation_type: {
              enum: ['all', 'private', 'none'],
              type: 'string'
            },
            members_can_create_internal_repositories: { type: 'boolean' },
            members_can_create_private_repositories: { type: 'boolean' },
            members_can_create_public_repositories: { type: 'boolean' },
            members_can_create_repositories: { type: 'boolean' },
            name: { type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org'
        },
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' },
            config: { type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            hook_id: { required: true, type: 'integer' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/hooks/:hook_id'
        },
        updateMembership: {
          method: 'PATCH',
          params: {
            org: { required: true, type: 'string' },
            state: { enum: ['active'], required: true, type: 'string' }
          },
          url: '/user/memberships/orgs/:org'
        }
      },
      projects: {
        addCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username'
        },
        createCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' },
            content_id: { type: 'integer' },
            content_type: { type: 'string' },
            note: { type: 'string' }
          },
          url: '/projects/columns/:column_id/cards'
        },
        createColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            name: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/columns'
        },
        createForAuthenticatedUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: { body: { type: 'string' }, name: { required: true, type: 'string' } },
          url: '/user/projects'
        },
        createForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            body: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' }
          },
          url: '/orgs/:org/projects'
        },
        createForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            body: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/projects'
        },
        delete: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { project_id: { required: true, type: 'integer' } },
          url: '/projects/:project_id'
        },
        deleteCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { card_id: { required: true, type: 'integer' } },
          url: '/projects/columns/cards/:card_id'
        },
        deleteColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: { column_id: { required: true, type: 'integer' } },
          url: '/projects/columns/:column_id'
        },
        get: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { project_id: { required: true, type: 'integer' } },
          url: '/projects/:project_id'
        },
        getCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { card_id: { required: true, type: 'integer' } },
          url: '/projects/columns/cards/:card_id'
        },
        getColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: { column_id: { required: true, type: 'integer' } },
          url: '/projects/columns/:column_id'
        },
        listCards: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            archived_state: { enum: ['all', 'archived', 'not_archived'], type: 'string' },
            column_id: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/projects/columns/:column_id/cards'
        },
        listCollaborators: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/collaborators'
        },
        listColumns: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            project_id: { required: true, type: 'integer' }
          },
          url: '/projects/:project_id/columns'
        },
        listForOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/orgs/:org/projects'
        },
        listForRepo: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/projects'
        },
        listForUser: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/projects'
        },
        moveCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            card_id: { required: true, type: 'integer' },
            column_id: { type: 'integer' },
            position: { required: true, type: 'string', validation: '^(top|bottom|after:\\d+)$' }
          },
          url: '/projects/columns/cards/:card_id/moves'
        },
        moveColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'POST',
          params: {
            column_id: { required: true, type: 'integer' },
            position: { required: true, type: 'string', validation: '^(first|last|after:\\d+)$' }
          },
          url: '/projects/columns/:column_id/moves'
        },
        removeCollaborator: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username'
        },
        reviewUserPermissionLevel: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/projects/:project_id/collaborators/:username/permission'
        },
        update: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            name: { type: 'string' },
            organization_permission: { type: 'string' },
            private: { type: 'boolean' },
            project_id: { required: true, type: 'integer' },
            state: { enum: ['open', 'closed'], type: 'string' }
          },
          url: '/projects/:project_id'
        },
        updateCard: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            archived: { type: 'boolean' },
            card_id: { required: true, type: 'integer' },
            note: { type: 'string' }
          },
          url: '/projects/columns/cards/:card_id'
        },
        updateColumn: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PATCH',
          params: {
            column_id: { required: true, type: 'integer' },
            name: { required: true, type: 'string' }
          },
          url: '/projects/columns/:column_id'
        }
      },
      pulls: {
        checkIfMerged: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        },
        create: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            body: { type: 'string' },
            draft: { type: 'boolean' },
            head: { required: true, type: 'string' },
            maintainer_can_modify: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        createComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_id: { required: true, type: 'string' },
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            },
            line: { type: 'integer' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            position: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' },
            start_line: { type: 'integer' },
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        createCommentReply: {
          deprecated:
            'octokit.pulls.createCommentReply() has been renamed to octokit.pulls.createComment() (2019-09-09)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_id: { required: true, type: 'string' },
            in_reply_to: {
              deprecated: true,
              description:
                'The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.',
              type: 'integer'
            },
            line: { type: 'integer' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            position: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            side: { enum: ['LEFT', 'RIGHT'], type: 'string' },
            start_line: { type: 'integer' },
            start_side: { enum: ['LEFT', 'RIGHT', 'side'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        createFromIssue: {
          deprecated:
            'octokit.pulls.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request',
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            draft: { type: 'boolean' },
            head: { required: true, type: 'string' },
            issue: { required: true, type: 'integer' },
            maintainer_can_modify: { type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        createReview: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            comments: { type: 'object[]' },
            'comments[].body': { required: true, type: 'string' },
            'comments[].path': { required: true, type: 'string' },
            'comments[].position': { required: true, type: 'integer' },
            commit_id: { type: 'string' },
            event: { enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        },
        createReviewCommentReply: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies'
        },
        createReviewRequest: {
          method: 'POST',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            reviewers: { type: 'string[]' },
            team_reviewers: { type: 'string[]' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        deleteComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        deletePendingReview: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        },
        deleteReviewRequest: {
          method: 'DELETE',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            reviewers: { type: 'string[]' },
            team_reviewers: { type: 'string[]' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        dismissReview: {
          method: 'PUT',
          params: {
            message: { required: true, type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals'
        },
        get: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number'
        },
        getComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        getCommentsForReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments'
        },
        getReview: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        },
        list: {
          method: 'GET',
          params: {
            base: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            head: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['created', 'updated', 'popularity', 'long-running'], type: 'string' },
            state: { enum: ['open', 'closed', 'all'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls'
        },
        listComments: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/comments'
        },
        listCommentsForRepo: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            since: { type: 'string' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/commits'
        },
        listFiles: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/files'
        },
        listReviewRequests: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/requested_reviewers'
        },
        listReviews: {
          method: 'GET',
          params: {
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews'
        },
        merge: {
          method: 'PUT',
          params: {
            commit_message: { type: 'string' },
            commit_title: { type: 'string' },
            merge_method: { enum: ['merge', 'squash', 'rebase'], type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/merge'
        },
        submitReview: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            event: {
              enum: ['APPROVE', 'REQUEST_CHANGES', 'COMMENT'],
              required: true,
              type: 'string'
            },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events'
        },
        update: {
          method: 'PATCH',
          params: {
            base: { type: 'string' },
            body: { type: 'string' },
            maintainer_can_modify: { type: 'boolean' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            state: { enum: ['open', 'closed'], type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number'
        },
        updateBranch: {
          headers: { accept: 'application/vnd.github.lydian-preview+json' },
          method: 'PUT',
          params: {
            expected_head_sha: { type: 'string' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/update-branch'
        },
        updateComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id'
        },
        updateReview: {
          method: 'PUT',
          params: {
            body: { required: true, type: 'string' },
            number: { alias: 'pull_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            pull_number: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            review_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id'
        }
      },
      rateLimit: { get: { method: 'GET', params: {}, url: '/rate_limit' } },
      reactions: {
        createForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        },
        createForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        },
        createForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        },
        createForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        },
        createForTeamDiscussion: {
          deprecated:
            'octokit.reactions.createForTeamDiscussion() has been renamed to octokit.reactions.createForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        createForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionComment() has been renamed to octokit.reactions.createForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        createForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        },
        createForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.createForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'POST',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              required: true,
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        delete: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'DELETE',
          params: { reaction_id: { required: true, type: 'integer' } },
          url: '/reactions/:reaction_id'
        },
        listForCommitComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id/reactions'
        },
        listForIssue: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            issue_number: { required: true, type: 'integer' },
            number: { alias: 'issue_number', deprecated: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/:issue_number/reactions'
        },
        listForIssueComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/issues/comments/:comment_id/reactions'
        },
        listForPullRequestReviewComment: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pulls/comments/:comment_id/reactions'
        },
        listForTeamDiscussion: {
          deprecated:
            'octokit.reactions.listForTeamDiscussion() has been renamed to octokit.reactions.listForTeamDiscussionLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        },
        listForTeamDiscussionComment: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionComment() has been renamed to octokit.reactions.listForTeamDiscussionCommentLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionCommentInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url:
            '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionCommentLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions'
        },
        listForTeamDiscussionInOrg: {
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions'
        },
        listForTeamDiscussionLegacy: {
          deprecated:
            'octokit.reactions.listForTeamDiscussionLegacy() is deprecated, see https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-legacy',
          headers: { accept: 'application/vnd.github.squirrel-girl-preview+json' },
          method: 'GET',
          params: {
            content: {
              enum: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes'],
              type: 'string'
            },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/reactions'
        }
      },
      repos: {
        acceptInvitation: {
          method: 'PATCH',
          params: { invitation_id: { required: true, type: 'integer' } },
          url: '/user/repository_invitations/:invitation_id'
        },
        addCollaborator: {
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        addDeployKey: {
          method: 'POST',
          params: {
            key: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            read_only: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            title: { type: 'string' }
          },
          url: '/repos/:owner/:repo/keys'
        },
        addProtectedBranchAdminEnforcement: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        addProtectedBranchAppRestrictions: {
          method: 'POST',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        addProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        addProtectedBranchRequiredStatusChecksContexts: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        addProtectedBranchTeamRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        addProtectedBranchUserRestrictions: {
          method: 'POST',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        checkCollaborator: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        checkVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        compareCommits: {
          method: 'GET',
          params: {
            base: { required: true, type: 'string' },
            head: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/compare/:base...:head'
        },
        createCommitComment: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            commit_sha: { required: true, type: 'string' },
            line: { type: 'integer' },
            owner: { required: true, type: 'string' },
            path: { type: 'string' },
            position: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { alias: 'commit_sha', deprecated: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        },
        createDeployment: {
          method: 'POST',
          params: {
            auto_merge: { type: 'boolean' },
            description: { type: 'string' },
            environment: { type: 'string' },
            owner: { required: true, type: 'string' },
            payload: { type: 'string' },
            production_environment: { type: 'boolean' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            required_contexts: { type: 'string[]' },
            task: { type: 'string' },
            transient_environment: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/deployments'
        },
        createDeploymentStatus: {
          method: 'POST',
          params: {
            auto_inactive: { type: 'boolean' },
            deployment_id: { required: true, type: 'integer' },
            description: { type: 'string' },
            environment: { enum: ['production', 'staging', 'qa'], type: 'string' },
            environment_url: { type: 'string' },
            log_url: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            state: {
              enum: ['error', 'failure', 'inactive', 'in_progress', 'queued', 'pending', 'success'],
              required: true,
              type: 'string'
            },
            target_url: { type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        },
        createDispatchEvent: {
          method: 'POST',
          params: {
            client_payload: { type: 'object' },
            event_type: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/dispatches'
        },
        createFile: {
          deprecated:
            'octokit.repos.createFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        createForAuthenticatedUser: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            auto_init: { type: 'boolean' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            gitignore_template: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            license_template: { type: 'string' },
            name: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { type: 'integer' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/user/repos'
        },
        createFork: {
          method: 'POST',
          params: {
            organization: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/forks'
        },
        createHook: {
          method: 'POST',
          params: {
            active: { type: 'boolean' },
            config: { required: true, type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks'
        },
        createInOrg: {
          method: 'POST',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            auto_init: { type: 'boolean' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            gitignore_template: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            license_template: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { type: 'integer' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/orgs/:org/repos'
        },
        createOrUpdateFile: {
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        createRelease: {
          method: 'POST',
          params: {
            body: { type: 'string' },
            draft: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            prerelease: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            tag_name: { required: true, type: 'string' },
            target_commitish: { type: 'string' }
          },
          url: '/repos/:owner/:repo/releases'
        },
        createStatus: {
          method: 'POST',
          params: {
            context: { type: 'string' },
            description: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' },
            state: {
              enum: ['error', 'failure', 'pending', 'success'],
              required: true,
              type: 'string'
            },
            target_url: { type: 'string' }
          },
          url: '/repos/:owner/:repo/statuses/:sha'
        },
        createUsingTemplate: {
          headers: { accept: 'application/vnd.github.baptiste-preview+json' },
          method: 'POST',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            owner: { type: 'string' },
            private: { type: 'boolean' },
            template_owner: { required: true, type: 'string' },
            template_repo: { required: true, type: 'string' }
          },
          url: '/repos/:template_owner/:template_repo/generate'
        },
        declineInvitation: {
          method: 'DELETE',
          params: { invitation_id: { required: true, type: 'integer' } },
          url: '/user/repository_invitations/:invitation_id'
        },
        delete: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        deleteCommitComment: {
          method: 'DELETE',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        deleteDownload: {
          method: 'DELETE',
          params: {
            download_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads/:download_id'
        },
        deleteFile: {
          method: 'DELETE',
          params: {
            author: { type: 'object' },
            'author.email': { type: 'string' },
            'author.name': { type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { type: 'string' },
            'committer.name': { type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        deleteHook: {
          method: 'DELETE',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        deleteInvitation: {
          method: 'DELETE',
          params: {
            invitation_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        },
        deleteRelease: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        deleteReleaseAsset: {
          method: 'DELETE',
          params: {
            asset_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        disableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/automated-security-fixes'
        },
        disablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        disableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        enableAutomatedSecurityFixes: {
          headers: { accept: 'application/vnd.github.london-preview+json' },
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/automated-security-fixes'
        },
        enablePagesSite: {
          headers: { accept: 'application/vnd.github.switcheroo-preview+json' },
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            source: { type: 'object' },
            'source.branch': { enum: ['master', 'gh-pages'], type: 'string' },
            'source.path': { type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        enableVulnerabilityAlerts: {
          headers: { accept: 'application/vnd.github.dorian-preview+json' },
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/vulnerability-alerts'
        },
        get: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        getAppsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        getArchiveLink: {
          method: 'GET',
          params: {
            archive_format: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/:archive_format/:ref'
        },
        getBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch'
        },
        getBranchProtection: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        getClones: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            per: { enum: ['day', 'week'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/clones'
        },
        getCodeFrequencyStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/code_frequency'
        },
        getCollaboratorPermissionLevel: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username/permission'
        },
        getCombinedStatusForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/status'
        },
        getCommit: {
          method: 'GET',
          params: {
            commit_sha: { alias: 'ref', deprecated: true, type: 'string' },
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { alias: 'ref', deprecated: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref'
        },
        getCommitActivityStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/commit_activity'
        },
        getCommitComment: {
          method: 'GET',
          params: {
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        getCommitRefSha: {
          deprecated:
            'octokit.repos.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit',
          headers: { accept: 'application/vnd.github.v3.sha' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref'
        },
        getContents: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        getContributorsStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/contributors'
        },
        getDeployKey: {
          method: 'GET',
          params: {
            key_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys/:key_id'
        },
        getDeployment: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id'
        },
        getDeploymentStatus: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            status_id: { required: true, type: 'integer' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id'
        },
        getDownload: {
          method: 'GET',
          params: {
            download_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads/:download_id'
        },
        getHook: {
          method: 'GET',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        getLatestPagesBuild: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds/latest'
        },
        getLatestRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/latest'
        },
        getPages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        getPagesBuild: {
          method: 'GET',
          params: {
            build_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds/:build_id'
        },
        getParticipationStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/participation'
        },
        getProtectedBranchAdminEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        getProtectedBranchPullRequestReviewEnforcement: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        getProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        getProtectedBranchRequiredStatusChecks: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        getProtectedBranchRestrictions: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        },
        getPunchCardStats: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/stats/punch_card'
        },
        getReadme: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/readme'
        },
        getRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        getReleaseAsset: {
          method: 'GET',
          params: {
            asset_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        getReleaseByTag: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            tag: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/tags/:tag'
        },
        getTeamsWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        getTopPaths: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/popular/paths'
        },
        getTopReferrers: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/popular/referrers'
        },
        getUsersWithAccessToProtectedBranch: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        getViews: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            per: { enum: ['day', 'week'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/traffic/views'
        },
        list: {
          method: 'GET',
          params: {
            affiliation: { type: 'string' },
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: { enum: ['all', 'owner', 'public', 'private', 'member'], type: 'string' },
            visibility: { enum: ['all', 'public', 'private'], type: 'string' }
          },
          url: '/user/repos'
        },
        listAppsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listAppsWithAccessToProtectedBranch() has been renamed to octokit.repos.getAppsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        listAssetsForRelease: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id/assets'
        },
        listBranches: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            protected: { type: 'boolean' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches'
        },
        listBranchesForHeadCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' },
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/branches-where-head'
        },
        listCollaborators: {
          method: 'GET',
          params: {
            affiliation: { enum: ['outside', 'direct', 'all'], type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators'
        },
        listCommentsForCommit: {
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { alias: 'commit_sha', deprecated: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/comments'
        },
        listCommitComments: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments'
        },
        listCommits: {
          method: 'GET',
          params: {
            author: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            path: { type: 'string' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' },
            since: { type: 'string' },
            until: { type: 'string' }
          },
          url: '/repos/:owner/:repo/commits'
        },
        listContributors: {
          method: 'GET',
          params: {
            anon: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/contributors'
        },
        listDeployKeys: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys'
        },
        listDeploymentStatuses: {
          method: 'GET',
          params: {
            deployment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments/:deployment_id/statuses'
        },
        listDeployments: {
          method: 'GET',
          params: {
            environment: { type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' },
            task: { type: 'string' }
          },
          url: '/repos/:owner/:repo/deployments'
        },
        listDownloads: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/downloads'
        },
        listForOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: {
              enum: ['all', 'public', 'private', 'forks', 'sources', 'member', 'internal'],
              type: 'string'
            }
          },
          url: '/orgs/:org/repos'
        },
        listForUser: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            sort: { enum: ['created', 'updated', 'pushed', 'full_name'], type: 'string' },
            type: { enum: ['all', 'owner', 'member'], type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/repos'
        },
        listForks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' },
            sort: { enum: ['newest', 'oldest', 'stargazers'], type: 'string' }
          },
          url: '/repos/:owner/:repo/forks'
        },
        listHooks: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks'
        },
        listInvitations: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations'
        },
        listInvitationsForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/repository_invitations'
        },
        listLanguages: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/languages'
        },
        listPagesBuilds: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds'
        },
        listProtectedBranchRequiredStatusChecksContexts: {
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        listProtectedBranchTeamRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchTeamRestrictions() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        listProtectedBranchUserRestrictions: {
          deprecated:
            'octokit.repos.listProtectedBranchUserRestrictions() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-09)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        listPublic: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'integer' }
          },
          url: '/repositories'
        },
        listPullRequestsAssociatedWithCommit: {
          headers: { accept: 'application/vnd.github.groot-preview+json' },
          method: 'GET',
          params: {
            commit_sha: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:commit_sha/pulls'
        },
        listReleases: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases'
        },
        listStatusesForRef: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            ref: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/commits/:ref/statuses'
        },
        listTags: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/tags'
        },
        listTeams: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/teams'
        },
        listTeamsWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listTeamsWithAccessToProtectedBranch() has been renamed to octokit.repos.getTeamsWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        listTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' },
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/topics'
        },
        listUsersWithAccessToProtectedBranch: {
          deprecated:
            'octokit.repos.listUsersWithAccessToProtectedBranch() has been renamed to octokit.repos.getUsersWithAccessToProtectedBranch() (2019-09-13)',
          method: 'GET',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        merge: {
          method: 'POST',
          params: {
            base: { required: true, type: 'string' },
            commit_message: { type: 'string' },
            head: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/merges'
        },
        pingHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id/pings'
        },
        removeBranchProtection: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        removeCollaborator: {
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/collaborators/:username'
        },
        removeDeployKey: {
          method: 'DELETE',
          params: {
            key_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/keys/:key_id'
        },
        removeProtectedBranchAdminEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
        },
        removeProtectedBranchAppRestrictions: {
          method: 'DELETE',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        removeProtectedBranchPullRequestReviewEnforcement: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        removeProtectedBranchRequiredSignatures: {
          headers: { accept: 'application/vnd.github.zzzax-preview+json' },
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_signatures'
        },
        removeProtectedBranchRequiredStatusChecks: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        removeProtectedBranchRequiredStatusChecksContexts: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        removeProtectedBranchRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
        },
        removeProtectedBranchTeamRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        removeProtectedBranchUserRestrictions: {
          method: 'DELETE',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        replaceProtectedBranchAppRestrictions: {
          method: 'PUT',
          params: {
            apps: { mapTo: 'data', required: true, type: 'string[]' },
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/apps'
        },
        replaceProtectedBranchRequiredStatusChecksContexts: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { mapTo: 'data', required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
        },
        replaceProtectedBranchTeamRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            teams: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
        },
        replaceProtectedBranchUserRestrictions: {
          method: 'PUT',
          params: {
            branch: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            users: { mapTo: 'data', required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
        },
        replaceTopics: {
          headers: { accept: 'application/vnd.github.mercy-preview+json' },
          method: 'PUT',
          params: {
            names: { required: true, type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/topics'
        },
        requestPageBuild: {
          method: 'POST',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/pages/builds'
        },
        retrieveCommunityProfileMetrics: {
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/community/profile'
        },
        testPushHook: {
          method: 'POST',
          params: {
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id/tests'
        },
        transfer: {
          method: 'POST',
          params: {
            new_owner: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_ids: { type: 'integer[]' }
          },
          url: '/repos/:owner/:repo/transfer'
        },
        update: {
          method: 'PATCH',
          params: {
            allow_merge_commit: { type: 'boolean' },
            allow_rebase_merge: { type: 'boolean' },
            allow_squash_merge: { type: 'boolean' },
            archived: { type: 'boolean' },
            default_branch: { type: 'string' },
            delete_branch_on_merge: { type: 'boolean' },
            description: { type: 'string' },
            has_issues: { type: 'boolean' },
            has_projects: { type: 'boolean' },
            has_wiki: { type: 'boolean' },
            homepage: { type: 'string' },
            is_template: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            private: { type: 'boolean' },
            repo: { required: true, type: 'string' },
            visibility: { enum: ['public', 'private', 'visibility', 'internal'], type: 'string' }
          },
          url: '/repos/:owner/:repo'
        },
        updateBranchProtection: {
          method: 'PUT',
          params: {
            allow_deletions: { type: 'boolean' },
            allow_force_pushes: { allowNull: true, type: 'boolean' },
            branch: { required: true, type: 'string' },
            enforce_admins: { allowNull: true, required: true, type: 'boolean' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            required_linear_history: { type: 'boolean' },
            required_pull_request_reviews: { allowNull: true, required: true, type: 'object' },
            'required_pull_request_reviews.dismiss_stale_reviews': { type: 'boolean' },
            'required_pull_request_reviews.dismissal_restrictions': { type: 'object' },
            'required_pull_request_reviews.dismissal_restrictions.teams': { type: 'string[]' },
            'required_pull_request_reviews.dismissal_restrictions.users': { type: 'string[]' },
            'required_pull_request_reviews.require_code_owner_reviews': { type: 'boolean' },
            'required_pull_request_reviews.required_approving_review_count': { type: 'integer' },
            required_status_checks: { allowNull: true, required: true, type: 'object' },
            'required_status_checks.contexts': { required: true, type: 'string[]' },
            'required_status_checks.strict': { required: true, type: 'boolean' },
            restrictions: { allowNull: true, required: true, type: 'object' },
            'restrictions.apps': { type: 'string[]' },
            'restrictions.teams': { required: true, type: 'string[]' },
            'restrictions.users': { required: true, type: 'string[]' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection'
        },
        updateCommitComment: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/comments/:comment_id'
        },
        updateFile: {
          deprecated:
            'octokit.repos.updateFile() has been renamed to octokit.repos.createOrUpdateFile() (2019-06-07)',
          method: 'PUT',
          params: {
            author: { type: 'object' },
            'author.email': { required: true, type: 'string' },
            'author.name': { required: true, type: 'string' },
            branch: { type: 'string' },
            committer: { type: 'object' },
            'committer.email': { required: true, type: 'string' },
            'committer.name': { required: true, type: 'string' },
            content: { required: true, type: 'string' },
            message: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            path: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            sha: { type: 'string' }
          },
          url: '/repos/:owner/:repo/contents/:path'
        },
        updateHook: {
          method: 'PATCH',
          params: {
            active: { type: 'boolean' },
            add_events: { type: 'string[]' },
            config: { type: 'object' },
            'config.content_type': { type: 'string' },
            'config.insecure_ssl': { type: 'string' },
            'config.secret': { type: 'string' },
            'config.url': { required: true, type: 'string' },
            events: { type: 'string[]' },
            hook_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            remove_events: { type: 'string[]' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/hooks/:hook_id'
        },
        updateInformationAboutPagesSite: {
          method: 'PUT',
          params: {
            cname: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            source: { enum: ['"gh-pages"', '"master"', '"master /docs"'], type: 'string' }
          },
          url: '/repos/:owner/:repo/pages'
        },
        updateInvitation: {
          method: 'PATCH',
          params: {
            invitation_id: { required: true, type: 'integer' },
            owner: { required: true, type: 'string' },
            permissions: { enum: ['read', 'write', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/invitations/:invitation_id'
        },
        updateProtectedBranchPullRequestReviewEnforcement: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' },
            dismiss_stale_reviews: { type: 'boolean' },
            dismissal_restrictions: { type: 'object' },
            'dismissal_restrictions.teams': { type: 'string[]' },
            'dismissal_restrictions.users': { type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            require_code_owner_reviews: { type: 'boolean' },
            required_approving_review_count: { type: 'integer' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
        },
        updateProtectedBranchRequiredStatusChecks: {
          method: 'PATCH',
          params: {
            branch: { required: true, type: 'string' },
            contexts: { type: 'string[]' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            strict: { type: 'boolean' }
          },
          url: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
        },
        updateRelease: {
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            draft: { type: 'boolean' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            prerelease: { type: 'boolean' },
            release_id: { required: true, type: 'integer' },
            repo: { required: true, type: 'string' },
            tag_name: { type: 'string' },
            target_commitish: { type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/:release_id'
        },
        updateReleaseAsset: {
          method: 'PATCH',
          params: {
            asset_id: { required: true, type: 'integer' },
            label: { type: 'string' },
            name: { type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' }
          },
          url: '/repos/:owner/:repo/releases/assets/:asset_id'
        },
        uploadReleaseAsset: {
          method: 'POST',
          params: {
            data: { mapTo: 'data', required: true, type: 'string | object' },
            file: { alias: 'data', deprecated: true, type: 'string | object' },
            headers: { required: true, type: 'object' },
            'headers.content-length': { required: true, type: 'integer' },
            'headers.content-type': { required: true, type: 'string' },
            label: { type: 'string' },
            name: { required: true, type: 'string' },
            url: { required: true, type: 'string' }
          },
          url: ':url'
        }
      },
      search: {
        code: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['indexed'], type: 'string' }
          },
          url: '/search/code'
        },
        commits: {
          headers: { accept: 'application/vnd.github.cloak-preview+json' },
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['author-date', 'committer-date'], type: 'string' }
          },
          url: '/search/commits'
        },
        issues: {
          deprecated:
            'octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)',
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            }
          },
          url: '/search/issues'
        },
        issuesAndPullRequests: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: {
              enum: [
                'comments',
                'reactions',
                'reactions-+1',
                'reactions--1',
                'reactions-smile',
                'reactions-thinking_face',
                'reactions-heart',
                'reactions-tada',
                'interactions',
                'created',
                'updated'
              ],
              type: 'string'
            }
          },
          url: '/search/issues'
        },
        labels: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            q: { required: true, type: 'string' },
            repository_id: { required: true, type: 'integer' },
            sort: { enum: ['created', 'updated'], type: 'string' }
          },
          url: '/search/labels'
        },
        repos: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['stars', 'forks', 'help-wanted-issues', 'updated'], type: 'string' }
          },
          url: '/search/repositories'
        },
        topics: {
          method: 'GET',
          params: { q: { required: true, type: 'string' } },
          url: '/search/topics'
        },
        users: {
          method: 'GET',
          params: {
            order: { enum: ['desc', 'asc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            q: { required: true, type: 'string' },
            sort: { enum: ['followers', 'repositories', 'joined'], type: 'string' }
          },
          url: '/search/users'
        }
      },
      teams: {
        addMember: {
          deprecated:
            'octokit.teams.addMember() has been renamed to octokit.teams.addMemberLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        addMemberLegacy: {
          deprecated:
            'octokit.teams.addMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-team-member-legacy',
          method: 'PUT',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        addOrUpdateMembership: {
          deprecated:
            'octokit.teams.addOrUpdateMembership() has been renamed to octokit.teams.addOrUpdateMembershipLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        addOrUpdateMembershipInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        addOrUpdateMembershipLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#add-or-update-team-membership-legacy',
          method: 'PUT',
          params: {
            role: { enum: ['member', 'maintainer'], type: 'string' },
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        addOrUpdateProject: {
          deprecated:
            'octokit.teams.addOrUpdateProject() has been renamed to octokit.teams.addOrUpdateProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        addOrUpdateProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        addOrUpdateProjectLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'PUT',
          params: {
            permission: { enum: ['read', 'write', 'admin'], type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        addOrUpdateRepo: {
          deprecated:
            'octokit.teams.addOrUpdateRepo() has been renamed to octokit.teams.addOrUpdateRepoLegacy() (2020-01-16)',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        addOrUpdateRepoInOrg: {
          method: 'PUT',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        addOrUpdateRepoLegacy: {
          deprecated:
            'octokit.teams.addOrUpdateRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#add-or-update-team-repository-legacy',
          method: 'PUT',
          params: {
            owner: { required: true, type: 'string' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        checkManagesRepo: {
          deprecated:
            'octokit.teams.checkManagesRepo() has been renamed to octokit.teams.checkManagesRepoLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        checkManagesRepoInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        checkManagesRepoLegacy: {
          deprecated:
            'octokit.teams.checkManagesRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository-legacy',
          method: 'GET',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        create: {
          method: 'POST',
          params: {
            description: { type: 'string' },
            maintainers: { type: 'string[]' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            repo_names: { type: 'string[]' }
          },
          url: '/orgs/:org/teams'
        },
        createDiscussion: {
          deprecated:
            'octokit.teams.createDiscussion() has been renamed to octokit.teams.createDiscussionLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/discussions'
        },
        createDiscussionComment: {
          deprecated:
            'octokit.teams.createDiscussionComment() has been renamed to octokit.teams.createDiscussionCommentLegacy() (2020-01-16)',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        createDiscussionCommentInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        },
        createDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.createDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#create-a-comment-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        createDiscussionInOrg: {
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_slug: { required: true, type: 'string' },
            title: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions'
        },
        createDiscussionLegacy: {
          deprecated:
            'octokit.teams.createDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#create-a-discussion-legacy',
          method: 'POST',
          params: {
            body: { required: true, type: 'string' },
            private: { type: 'boolean' },
            team_id: { required: true, type: 'integer' },
            title: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/discussions'
        },
        delete: {
          deprecated:
            'octokit.teams.delete() has been renamed to octokit.teams.deleteLegacy() (2020-01-16)',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        deleteDiscussion: {
          deprecated:
            'octokit.teams.deleteDiscussion() has been renamed to octokit.teams.deleteDiscussionLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        deleteDiscussionComment: {
          deprecated:
            'octokit.teams.deleteDiscussionComment() has been renamed to octokit.teams.deleteDiscussionCommentLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionCommentInOrg: {
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment-legacy',
          method: 'DELETE',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        deleteDiscussionInOrg: {
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        deleteDiscussionLegacy: {
          deprecated:
            'octokit.teams.deleteDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#delete-a-discussion-legacy',
          method: 'DELETE',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        deleteInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        deleteLegacy: {
          deprecated:
            'octokit.teams.deleteLegacy() is deprecated, see https://developer.github.com/v3/teams/#delete-team-legacy',
          method: 'DELETE',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        get: {
          deprecated:
            'octokit.teams.get() has been renamed to octokit.teams.getLegacy() (2020-01-16)',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        getByName: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        getDiscussion: {
          deprecated:
            'octokit.teams.getDiscussion() has been renamed to octokit.teams.getDiscussionLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        getDiscussionComment: {
          deprecated:
            'octokit.teams.getDiscussionComment() has been renamed to octokit.teams.getDiscussionCommentLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionCommentInOrg: {
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.getDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment-legacy',
          method: 'GET',
          params: {
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        getDiscussionInOrg: {
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        getDiscussionLegacy: {
          deprecated:
            'octokit.teams.getDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#get-a-single-discussion-legacy',
          method: 'GET',
          params: {
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        getLegacy: {
          deprecated:
            'octokit.teams.getLegacy() is deprecated, see https://developer.github.com/v3/teams/#get-team-legacy',
          method: 'GET',
          params: { team_id: { required: true, type: 'integer' } },
          url: '/teams/:team_id'
        },
        getMember: {
          deprecated:
            'octokit.teams.getMember() has been renamed to octokit.teams.getMemberLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        getMemberLegacy: {
          deprecated:
            'octokit.teams.getMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-member-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        getMembership: {
          deprecated:
            'octokit.teams.getMembership() has been renamed to octokit.teams.getMembershipLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        getMembershipInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        getMembershipLegacy: {
          deprecated:
            'octokit.teams.getMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#get-team-membership-legacy',
          method: 'GET',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        list: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' }
          },
          url: '/orgs/:org/teams'
        },
        listChild: {
          deprecated:
            'octokit.teams.listChild() has been renamed to octokit.teams.listChildLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/teams'
        },
        listChildInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/teams'
        },
        listChildLegacy: {
          deprecated:
            'octokit.teams.listChildLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-child-teams-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/teams'
        },
        listDiscussionComments: {
          deprecated:
            'octokit.teams.listDiscussionComments() has been renamed to octokit.teams.listDiscussionCommentsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        listDiscussionCommentsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments'
        },
        listDiscussionCommentsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionCommentsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#list-comments-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments'
        },
        listDiscussions: {
          deprecated:
            'octokit.teams.listDiscussions() has been renamed to octokit.teams.listDiscussionsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions'
        },
        listDiscussionsInOrg: {
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions'
        },
        listDiscussionsLegacy: {
          deprecated:
            'octokit.teams.listDiscussionsLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#list-discussions-legacy',
          method: 'GET',
          params: {
            direction: { enum: ['asc', 'desc'], type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions'
        },
        listForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/teams'
        },
        listMembers: {
          deprecated:
            'octokit.teams.listMembers() has been renamed to octokit.teams.listMembersLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/members'
        },
        listMembersInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/members'
        },
        listMembersLegacy: {
          deprecated:
            'octokit.teams.listMembersLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-team-members-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            role: { enum: ['member', 'maintainer', 'all'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/members'
        },
        listPendingInvitations: {
          deprecated:
            'octokit.teams.listPendingInvitations() has been renamed to octokit.teams.listPendingInvitationsLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/invitations'
        },
        listPendingInvitationsInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/invitations'
        },
        listPendingInvitationsLegacy: {
          deprecated:
            'octokit.teams.listPendingInvitationsLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#list-pending-team-invitations-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/invitations'
        },
        listProjects: {
          deprecated:
            'octokit.teams.listProjects() has been renamed to octokit.teams.listProjectsLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects'
        },
        listProjectsInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects'
        },
        listProjectsLegacy: {
          deprecated:
            'octokit.teams.listProjectsLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-projects-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects'
        },
        listRepos: {
          deprecated:
            'octokit.teams.listRepos() has been renamed to octokit.teams.listReposLegacy() (2020-01-16)',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos'
        },
        listReposInOrg: {
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos'
        },
        listReposLegacy: {
          deprecated:
            'octokit.teams.listReposLegacy() is deprecated, see https://developer.github.com/v3/teams/#list-team-repos-legacy',
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos'
        },
        removeMember: {
          deprecated:
            'octokit.teams.removeMember() has been renamed to octokit.teams.removeMemberLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        removeMemberLegacy: {
          deprecated:
            'octokit.teams.removeMemberLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-member-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/members/:username'
        },
        removeMembership: {
          deprecated:
            'octokit.teams.removeMembership() has been renamed to octokit.teams.removeMembershipLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        removeMembershipInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/memberships/:username'
        },
        removeMembershipLegacy: {
          deprecated:
            'octokit.teams.removeMembershipLegacy() is deprecated, see https://developer.github.com/v3/teams/members/#remove-team-membership-legacy',
          method: 'DELETE',
          params: {
            team_id: { required: true, type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/teams/:team_id/memberships/:username'
        },
        removeProject: {
          deprecated:
            'octokit.teams.removeProject() has been renamed to octokit.teams.removeProjectLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        removeProjectInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        removeProjectLegacy: {
          deprecated:
            'octokit.teams.removeProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-project-legacy',
          method: 'DELETE',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        removeRepo: {
          deprecated:
            'octokit.teams.removeRepo() has been renamed to octokit.teams.removeRepoLegacy() (2020-01-16)',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        removeRepoInOrg: {
          method: 'DELETE',
          params: {
            org: { required: true, type: 'string' },
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/repos/:owner/:repo'
        },
        removeRepoLegacy: {
          deprecated:
            'octokit.teams.removeRepoLegacy() is deprecated, see https://developer.github.com/v3/teams/#remove-team-repository-legacy',
          method: 'DELETE',
          params: {
            owner: { required: true, type: 'string' },
            repo: { required: true, type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/repos/:owner/:repo'
        },
        reviewProject: {
          deprecated:
            'octokit.teams.reviewProject() has been renamed to octokit.teams.reviewProjectLegacy() (2020-01-16)',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        reviewProjectInOrg: {
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            org: { required: true, type: 'string' },
            project_id: { required: true, type: 'integer' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/projects/:project_id'
        },
        reviewProjectLegacy: {
          deprecated:
            'octokit.teams.reviewProjectLegacy() is deprecated, see https://developer.github.com/v3/teams/#review-a-team-project-legacy',
          headers: { accept: 'application/vnd.github.inertia-preview+json' },
          method: 'GET',
          params: {
            project_id: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/projects/:project_id'
        },
        update: {
          deprecated:
            'octokit.teams.update() has been renamed to octokit.teams.updateLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id'
        },
        updateDiscussion: {
          deprecated:
            'octokit.teams.updateDiscussion() has been renamed to octokit.teams.updateDiscussionLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' },
            title: { type: 'string' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        updateDiscussionComment: {
          deprecated:
            'octokit.teams.updateDiscussionComment() has been renamed to octokit.teams.updateDiscussionCommentLegacy() (2020-01-16)',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionCommentInOrg: {
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionCommentLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionCommentLegacy() is deprecated, see https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment-legacy',
          method: 'PATCH',
          params: {
            body: { required: true, type: 'string' },
            comment_number: { required: true, type: 'integer' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id/discussions/:discussion_number/comments/:comment_number'
        },
        updateDiscussionInOrg: {
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            org: { required: true, type: 'string' },
            team_slug: { required: true, type: 'string' },
            title: { type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug/discussions/:discussion_number'
        },
        updateDiscussionLegacy: {
          deprecated:
            'octokit.teams.updateDiscussionLegacy() is deprecated, see https://developer.github.com/v3/teams/discussions/#edit-a-discussion-legacy',
          method: 'PATCH',
          params: {
            body: { type: 'string' },
            discussion_number: { required: true, type: 'integer' },
            team_id: { required: true, type: 'integer' },
            title: { type: 'string' }
          },
          url: '/teams/:team_id/discussions/:discussion_number'
        },
        updateInOrg: {
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            org: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_slug: { required: true, type: 'string' }
          },
          url: '/orgs/:org/teams/:team_slug'
        },
        updateLegacy: {
          deprecated:
            'octokit.teams.updateLegacy() is deprecated, see https://developer.github.com/v3/teams/#edit-team-legacy',
          method: 'PATCH',
          params: {
            description: { type: 'string' },
            name: { required: true, type: 'string' },
            parent_team_id: { type: 'integer' },
            permission: { enum: ['pull', 'push', 'admin'], type: 'string' },
            privacy: { enum: ['secret', 'closed'], type: 'string' },
            team_id: { required: true, type: 'integer' }
          },
          url: '/teams/:team_id'
        }
      },
      users: {
        addEmails: {
          method: 'POST',
          params: { emails: { required: true, type: 'string[]' } },
          url: '/user/emails'
        },
        block: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        checkBlocked: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        checkFollowing: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        checkFollowingForUser: {
          method: 'GET',
          params: {
            target_user: { required: true, type: 'string' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/following/:target_user'
        },
        createGpgKey: {
          method: 'POST',
          params: { armored_public_key: { type: 'string' } },
          url: '/user/gpg_keys'
        },
        createPublicKey: {
          method: 'POST',
          params: { key: { type: 'string' }, title: { type: 'string' } },
          url: '/user/keys'
        },
        deleteEmails: {
          method: 'DELETE',
          params: { emails: { required: true, type: 'string[]' } },
          url: '/user/emails'
        },
        deleteGpgKey: {
          method: 'DELETE',
          params: { gpg_key_id: { required: true, type: 'integer' } },
          url: '/user/gpg_keys/:gpg_key_id'
        },
        deletePublicKey: {
          method: 'DELETE',
          params: { key_id: { required: true, type: 'integer' } },
          url: '/user/keys/:key_id'
        },
        follow: {
          method: 'PUT',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        getAuthenticated: { method: 'GET', params: {}, url: '/user' },
        getByUsername: {
          method: 'GET',
          params: { username: { required: true, type: 'string' } },
          url: '/users/:username'
        },
        getContextForUser: {
          method: 'GET',
          params: {
            subject_id: { type: 'string' },
            subject_type: {
              enum: ['organization', 'repository', 'issue', 'pull_request'],
              type: 'string'
            },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/hovercard'
        },
        getGpgKey: {
          method: 'GET',
          params: { gpg_key_id: { required: true, type: 'integer' } },
          url: '/user/gpg_keys/:gpg_key_id'
        },
        getPublicKey: {
          method: 'GET',
          params: { key_id: { required: true, type: 'integer' } },
          url: '/user/keys/:key_id'
        },
        list: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            since: { type: 'string' }
          },
          url: '/users'
        },
        listBlocked: { method: 'GET', params: {}, url: '/user/blocks' },
        listEmails: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/emails'
        },
        listFollowersForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/followers'
        },
        listFollowersForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/followers'
        },
        listFollowingForAuthenticatedUser: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/following'
        },
        listFollowingForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/following'
        },
        listGpgKeys: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/gpg_keys'
        },
        listGpgKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/gpg_keys'
        },
        listPublicEmails: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/public_emails'
        },
        listPublicKeys: {
          method: 'GET',
          params: { page: { type: 'integer' }, per_page: { type: 'integer' } },
          url: '/user/keys'
        },
        listPublicKeysForUser: {
          method: 'GET',
          params: {
            page: { type: 'integer' },
            per_page: { type: 'integer' },
            username: { required: true, type: 'string' }
          },
          url: '/users/:username/keys'
        },
        togglePrimaryEmailVisibility: {
          method: 'PATCH',
          params: {
            email: { required: true, type: 'string' },
            visibility: { required: true, type: 'string' }
          },
          url: '/user/email/visibility'
        },
        unblock: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' } },
          url: '/user/blocks/:username'
        },
        unfollow: {
          method: 'DELETE',
          params: { username: { required: true, type: 'string' } },
          url: '/user/following/:username'
        },
        updateAuthenticated: {
          method: 'PATCH',
          params: {
            bio: { type: 'string' },
            blog: { type: 'string' },
            company: { type: 'string' },
            email: { type: 'string' },
            hireable: { type: 'boolean' },
            location: { type: 'string' },
            name: { type: 'string' }
          },
          url: '/user'
        }
      }
    }
    const s = '2.4.0'
    function registerEndpoints(e, t) {
      Object.keys(t).forEach(r => {
        if (!e[r]) {
          e[r] = {}
        }
        Object.keys(t[r]).forEach(n => {
          const s = t[r][n]
          const o = ['method', 'url', 'headers'].reduce((e, t) => {
            if (typeof s[t] !== 'undefined') {
              e[t] = s[t]
            }
            return e
          }, {})
          o.request = { validate: s.params }
          let a = e.request.defaults(o)
          const u = Object.keys(s.params || {}).find(e => s.params[e].deprecated)
          if (u) {
            const t = patchForDeprecation.bind(null, e, s)
            a = t(e.request.defaults(o), `.${r}.${n}()`)
            a.endpoint = t(a.endpoint, `.${r}.${n}.endpoint()`)
            a.endpoint.merge = t(a.endpoint.merge, `.${r}.${n}.endpoint.merge()`)
          }
          if (s.deprecated) {
            e[r][n] = Object.assign(function deprecatedEndpointMethod() {
              e.log.warn(new i.Deprecation(`[@octokit/rest] ${s.deprecated}`))
              e[r][n] = a
              return a.apply(null, arguments)
            }, a)
            return
          }
          e[r][n] = a
        })
      })
    }
    function patchForDeprecation(e, t, r, n) {
      const s = s => {
        s = Object.assign({}, s)
        Object.keys(s).forEach(r => {
          if (t.params[r] && t.params[r].deprecated) {
            const o = t.params[r].alias
            e.log.warn(
              new i.Deprecation(
                `[@octokit/rest] "${r}" parameter is deprecated for "${n}". Use "${o}" instead`
              )
            )
            if (!(o in s)) {
              s[o] = s[r]
            }
            delete s[r]
          }
        })
        return r(s)
      }
      Object.keys(r).forEach(e => {
        s[e] = r[e]
      })
      return s
    }
    function restEndpointMethods(e) {
      e.registerEndpoints = registerEndpoints.bind(null, e)
      registerEndpoints(e, n)
      ;[
        ['gitdata', 'git'],
        ['authorization', 'oauthAuthorizations'],
        ['pullRequests', 'pulls']
      ].forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            e.log.warn(
              new i.Deprecation(
                `[@octokit/plugin-rest-endpoint-methods] "octokit.${t}.*" methods are deprecated, use "octokit.${r}.*" instead`
              )
            )
            return e[r]
          }
        })
      })
      return {}
    }
    restEndpointMethods.VERSION = s
    t.restEndpointMethods = restEndpointMethods
  },
  850: function(e, t, r) {
    e.exports = paginationMethodsPlugin
    function paginationMethodsPlugin(e) {
      e.getFirstPage = r(777).bind(null, e)
      e.getLastPage = r(649).bind(null, e)
      e.getNextPage = r(550).bind(null, e)
      e.getPreviousPage = r(563).bind(null, e)
      e.hasFirstPage = r(536)
      e.hasLastPage = r(336)
      e.hasNextPage = r(929)
      e.hasPreviousPage = r(558)
    }
  },
  854: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var i = 1 / 0
    var n = '[object Function]',
      s = '[object GeneratorFunction]',
      o = '[object Symbol]'
    var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      u = /^\w*$/,
      p = /^\./,
      c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var d = /[\\^$.*+?()[\]{}|]/g
    var l = /\\(\\)?/g
    var m = /^\[object .+?Constructor\]$/
    var g = typeof global == 'object' && global && global.Object === Object && global
    var h = typeof self == 'object' && self && self.Object === Object && self
    var y = g || h || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    var f = Array.prototype,
      b = Function.prototype,
      _ = Object.prototype
    var v = y['__core-js_shared__']
    var q = (function() {
      var e = /[^.]+$/.exec((v && v.keys && v.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var w = b.toString
    var E = _.hasOwnProperty
    var T = _.toString
    var k = RegExp(
      '^' +
        w
          .call(E)
          .replace(d, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var j = y.Symbol,
      S = f.splice
    var O = getNative(y, 'Map'),
      P = getNative(Object, 'create')
    var C = j ? j.prototype : undefined,
      x = C ? C.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function hashClear() {
      this.__data__ = P ? P(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (P) {
        var i = t[e]
        return i === r ? undefined : i
      }
      return E.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return P ? t[e] !== undefined : E.call(t, e)
    }
    function hashSet(e, t) {
      var i = this.__data__
      i[e] = P && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var i = t.length - 1
      if (r == i) {
        t.pop()
      } else {
        S.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        i = assocIndexOf(r, e)
      if (i < 0) {
        r.push([e, t])
      } else {
        r[i][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (O || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseGet(e, t) {
      t = isKey(t, e) ? [t] : castPath(t)
      var r = 0,
        i = t.length
      while (e != null && r < i) {
        e = e[toKey(t[r++])]
      }
      return r && r == i ? e : undefined
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? k : m
      return t.test(toSource(e))
    }
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      }
      if (isSymbol(e)) {
        return x ? x.call(e) : ''
      }
      var t = e + ''
      return t == '0' && 1 / e == -i ? '-0' : t
    }
    function castPath(e) {
      return A(e) ? e : R(e)
    }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isKey(e, t) {
      if (A(e)) {
        return false
      }
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      }
      return u.test(e) || !a.test(e) || (t != null && e in Object(t))
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!q && q in e
    }
    var R = memoize(function(e) {
      e = toString(e)
      var t = []
      if (p.test(e)) {
        t.push('')
      }
      e.replace(c, function(e, r, i, n) {
        t.push(i ? n.replace(l, '$1') : r || e)
      })
      return t
    })
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      }
      var t = e + ''
      return t == '0' && 1 / e == -i ? '-0' : t
    }
    function toSource(e) {
      if (e != null) {
        try {
          return w.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      }
      var i = function() {
        var t = arguments,
          n = r ? r.apply(this, t) : t[0],
          s = i.cache
        if (s.has(n)) {
          return s.get(n)
        }
        var o = e.apply(this, t)
        i.cache = s.set(n, o)
        return o
      }
      i.cache = new (memoize.Cache || MapCache)()
      return i
    }
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    var A = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? T.call(e) : ''
      return t == n || t == s
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    }
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && T.call(e) == o)
    }
    function toString(e) {
      return e == null ? '' : baseToString(e)
    }
    function get(e, t, r) {
      var i = e == null ? undefined : baseGet(e, t)
      return i === undefined ? r : i
    }
    e.exports = get
  },
  855: function(e, t, r) {
    e.exports = registerPlugin
    const i = r(47)
    function registerPlugin(e, t) {
      return i(e.includes(t) ? e : e.concat(t))
    }
  },
  863: function(e, t, r) {
    e.exports = authenticationBeforeRequest
    const i = r(675)
    const n = r(143)
    function authenticationBeforeRequest(e, t) {
      if (typeof e.auth === 'string') {
        t.headers.authorization = n(e.auth)
        return
      }
      if (e.auth.username) {
        const r = i(`${e.auth.username}:${e.auth.password}`)
        t.headers.authorization = `Basic ${r}`
        if (e.otp) {
          t.headers['x-github-otp'] = e.otp
        }
        return
      }
      if (e.auth.clientId) {
        if (/\/applications\/:?[\w_]+\/tokens\/:?[\w_]+($|\?)/.test(t.url)) {
          const r = i(`${e.auth.clientId}:${e.auth.clientSecret}`)
          t.headers.authorization = `Basic ${r}`
          return
        }
        t.url += t.url.indexOf('?') === -1 ? '?' : '&'
        t.url += `client_id=${e.auth.clientId}&client_secret=${e.auth.clientSecret}`
        return
      }
      return Promise.resolve()
        .then(() => {
          return e.auth()
        })
        .then(e => {
          t.headers.authorization = n(e)
        })
    }
  },
  864: function(e, t, r) {
    'use strict'
    var i = r(35)
    e.exports = i.isStandardBrowserEnv()
      ? (function standardBrowserEnv() {
          return {
            write: function write(e, t, r, n, s, o) {
              var a = []
              a.push(e + '=' + encodeURIComponent(t))
              if (i.isNumber(r)) {
                a.push('expires=' + new Date(r).toGMTString())
              }
              if (i.isString(n)) {
                a.push('path=' + n)
              }
              if (i.isString(s)) {
                a.push('domain=' + s)
              }
              if (o === true) {
                a.push('secure')
              }
              document.cookie = a.join('; ')
            },
            read: function read(e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
              return t ? decodeURIComponent(t[3]) : null
            },
            remove: function remove(e) {
              this.write(e, '', Date.now() - 864e5)
            }
          }
        })()
      : (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null
            },
            remove: function remove() {}
          }
        })()
  },
  866: function(e, t, r) {
    'use strict'
    var i = r(816)
    e.exports = function(e) {
      var t = e.match(i)
      if (!t) {
        return null
      }
      var r = t[0].replace(/#! ?/, '').split(' ')
      var n = r[0].split('/').pop()
      var s = r[1]
      return n === 'env' ? s : n + (s ? ' ' + s : '')
    }
  },
  879: function(e) {
    'use strict'
    e.exports = function spread(e) {
      return function wrap(t) {
        return e.apply(null, t)
      }
    }
  },
  881: function(e) {
    'use strict'
    const t = process.platform === 'win32'
    function notFoundError(e, t) {
      return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${t} ${e.command}`,
        path: e.command,
        spawnargs: e.args
      })
    }
    function hookChildProcess(e, r) {
      if (!t) {
        return
      }
      const i = e.emit
      e.emit = function(t, n) {
        if (t === 'exit') {
          const t = verifyENOENT(n, r, 'spawn')
          if (t) {
            return i.call(e, 'error', t)
          }
        }
        return i.apply(e, arguments)
      }
    }
    function verifyENOENT(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawn')
      }
      return null
    }
    function verifyENOENTSync(e, r) {
      if (t && e === 1 && !r.file) {
        return notFoundError(r.original, 'spawnSync')
      }
      return null
    }
    e.exports = {
      hookChildProcess: hookChildProcess,
      verifyENOENT: verifyENOENT,
      verifyENOENTSync: verifyENOENTSync,
      notFoundError: notFoundError
    }
  },
  883: function(e) {
    var t = 'Expected a function'
    var r = '__lodash_hash_undefined__'
    var i = 1 / 0,
      n = 9007199254740991
    var s = '[object Function]',
      o = '[object GeneratorFunction]',
      a = '[object Symbol]'
    var u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      p = /^\w*$/,
      c = /^\./,
      d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var l = /[\\^$.*+?()[\]{}|]/g
    var m = /\\(\\)?/g
    var g = /^\[object .+?Constructor\]$/
    var h = /^(?:0|[1-9]\d*)$/
    var y = typeof global == 'object' && global && global.Object === Object && global
    var f = typeof self == 'object' && self && self.Object === Object && self
    var b = y || f || Function('return this')()
    function getValue(e, t) {
      return e == null ? undefined : e[t]
    }
    function isHostObject(e) {
      var t = false
      if (e != null && typeof e.toString != 'function') {
        try {
          t = !!(e + '')
        } catch (e) {}
      }
      return t
    }
    var _ = Array.prototype,
      v = Function.prototype,
      q = Object.prototype
    var w = b['__core-js_shared__']
    var E = (function() {
      var e = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
    var T = v.toString
    var k = q.hasOwnProperty
    var j = q.toString
    var S = RegExp(
      '^' +
        T.call(k)
          .replace(l, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
    var O = b.Symbol,
      P = _.splice
    var C = getNative(b, 'Map'),
      x = getNative(Object, 'create')
    var R = O ? O.prototype : undefined,
      A = R ? R.toString : undefined
    function Hash(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function hashClear() {
      this.__data__ = x ? x(null) : {}
    }
    function hashDelete(e) {
      return this.has(e) && delete this.__data__[e]
    }
    function hashGet(e) {
      var t = this.__data__
      if (x) {
        var i = t[e]
        return i === r ? undefined : i
      }
      return k.call(t, e) ? t[e] : undefined
    }
    function hashHas(e) {
      var t = this.__data__
      return x ? t[e] !== undefined : k.call(t, e)
    }
    function hashSet(e, t) {
      var i = this.__data__
      i[e] = x && t === undefined ? r : t
      return this
    }
    Hash.prototype.clear = hashClear
    Hash.prototype['delete'] = hashDelete
    Hash.prototype.get = hashGet
    Hash.prototype.has = hashHas
    Hash.prototype.set = hashSet
    function ListCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function listCacheClear() {
      this.__data__ = []
    }
    function listCacheDelete(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      if (r < 0) {
        return false
      }
      var i = t.length - 1
      if (r == i) {
        t.pop()
      } else {
        P.call(t, r, 1)
      }
      return true
    }
    function listCacheGet(e) {
      var t = this.__data__,
        r = assocIndexOf(t, e)
      return r < 0 ? undefined : t[r][1]
    }
    function listCacheHas(e) {
      return assocIndexOf(this.__data__, e) > -1
    }
    function listCacheSet(e, t) {
      var r = this.__data__,
        i = assocIndexOf(r, e)
      if (i < 0) {
        r.push([e, t])
      } else {
        r[i][1] = t
      }
      return this
    }
    ListCache.prototype.clear = listCacheClear
    ListCache.prototype['delete'] = listCacheDelete
    ListCache.prototype.get = listCacheGet
    ListCache.prototype.has = listCacheHas
    ListCache.prototype.set = listCacheSet
    function MapCache(e) {
      var t = -1,
        r = e ? e.length : 0
      this.clear()
      while (++t < r) {
        var i = e[t]
        this.set(i[0], i[1])
      }
    }
    function mapCacheClear() {
      this.__data__ = { hash: new Hash(), map: new (C || ListCache)(), string: new Hash() }
    }
    function mapCacheDelete(e) {
      return getMapData(this, e)['delete'](e)
    }
    function mapCacheGet(e) {
      return getMapData(this, e).get(e)
    }
    function mapCacheHas(e) {
      return getMapData(this, e).has(e)
    }
    function mapCacheSet(e, t) {
      getMapData(this, e).set(e, t)
      return this
    }
    MapCache.prototype.clear = mapCacheClear
    MapCache.prototype['delete'] = mapCacheDelete
    MapCache.prototype.get = mapCacheGet
    MapCache.prototype.has = mapCacheHas
    MapCache.prototype.set = mapCacheSet
    function assignValue(e, t, r) {
      var i = e[t]
      if (!(k.call(e, t) && eq(i, r)) || (r === undefined && !(t in e))) {
        e[t] = r
      }
    }
    function assocIndexOf(e, t) {
      var r = e.length
      while (r--) {
        if (eq(e[r][0], t)) {
          return r
        }
      }
      return -1
    }
    function baseIsNative(e) {
      if (!isObject(e) || isMasked(e)) {
        return false
      }
      var t = isFunction(e) || isHostObject(e) ? S : g
      return t.test(toSource(e))
    }
    function baseSet(e, t, r, i) {
      if (!isObject(e)) {
        return e
      }
      t = isKey(t, e) ? [t] : castPath(t)
      var n = -1,
        s = t.length,
        o = s - 1,
        a = e
      while (a != null && ++n < s) {
        var u = toKey(t[n]),
          p = r
        if (n != o) {
          var c = a[u]
          p = i ? i(c, u, a) : undefined
          if (p === undefined) {
            p = isObject(c) ? c : isIndex(t[n + 1]) ? [] : {}
          }
        }
        assignValue(a, u, p)
        a = a[u]
      }
      return e
    }
    function baseToString(e) {
      if (typeof e == 'string') {
        return e
      }
      if (isSymbol(e)) {
        return A ? A.call(e) : ''
      }
      var t = e + ''
      return t == '0' && 1 / e == -i ? '-0' : t
    }
    function castPath(e) {
      return L(e) ? e : G(e)
    }
    function getMapData(e, t) {
      var r = e.__data__
      return isKeyable(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    function getNative(e, t) {
      var r = getValue(e, t)
      return baseIsNative(r) ? r : undefined
    }
    function isIndex(e, t) {
      t = t == null ? n : t
      return !!t && (typeof e == 'number' || h.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    function isKey(e, t) {
      if (L(e)) {
        return false
      }
      var r = typeof e
      if (r == 'number' || r == 'symbol' || r == 'boolean' || e == null || isSymbol(e)) {
        return true
      }
      return p.test(e) || !u.test(e) || (t != null && e in Object(t))
    }
    function isKeyable(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    function isMasked(e) {
      return !!E && E in e
    }
    var G = memoize(function(e) {
      e = toString(e)
      var t = []
      if (c.test(e)) {
        t.push('')
      }
      e.replace(d, function(e, r, i, n) {
        t.push(i ? n.replace(m, '$1') : r || e)
      })
      return t
    })
    function toKey(e) {
      if (typeof e == 'string' || isSymbol(e)) {
        return e
      }
      var t = e + ''
      return t == '0' && 1 / e == -i ? '-0' : t
    }
    function toSource(e) {
      if (e != null) {
        try {
          return T.call(e)
        } catch (e) {}
        try {
          return e + ''
        } catch (e) {}
      }
      return ''
    }
    function memoize(e, r) {
      if (typeof e != 'function' || (r && typeof r != 'function')) {
        throw new TypeError(t)
      }
      var i = function() {
        var t = arguments,
          n = r ? r.apply(this, t) : t[0],
          s = i.cache
        if (s.has(n)) {
          return s.get(n)
        }
        var o = e.apply(this, t)
        i.cache = s.set(n, o)
        return o
      }
      i.cache = new (memoize.Cache || MapCache)()
      return i
    }
    memoize.Cache = MapCache
    function eq(e, t) {
      return e === t || (e !== e && t !== t)
    }
    var L = Array.isArray
    function isFunction(e) {
      var t = isObject(e) ? j.call(e) : ''
      return t == s || t == o
    }
    function isObject(e) {
      var t = typeof e
      return !!e && (t == 'object' || t == 'function')
    }
    function isObjectLike(e) {
      return !!e && typeof e == 'object'
    }
    function isSymbol(e) {
      return typeof e == 'symbol' || (isObjectLike(e) && j.call(e) == a)
    }
    function toString(e) {
      return e == null ? '' : baseToString(e)
    }
    function set(e, t, r) {
      return e == null ? e : baseSet(e, t, r)
    }
    e.exports = set
  },
  887: function(e) {
    'use strict'
    e.exports = function combineURLs(e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  },
  900: function(e, t, r) {
    var i
    e.exports = function() {
      if (!i) {
        try {
          i = r(944)('follow-redirects')
        } catch (e) {}
        if (typeof i !== 'function') {
          i = function() {}
        }
      }
      i.apply(null, arguments)
    }
  },
  916: function(e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: true })
    const r = '1.0.0'
    function requestLog(e) {
      e.hook.wrap('request', (t, r) => {
        e.log.debug('request', r)
        const i = Date.now()
        const n = e.request.endpoint.parse(r)
        const s = n.url.replace(r.baseUrl, '')
        return t(r)
          .then(t => {
            e.log.info(`${n.method} ${s} - ${t.status} in ${Date.now() - i}ms`)
            return t
          })
          .catch(t => {
            e.log.info(`${n.method} ${s} - ${t.status} in ${Date.now() - i}ms`)
            throw t
          })
      })
    }
    requestLog.VERSION = r
    t.requestLog = requestLog
  },
  929: function(e, t, r) {
    e.exports = hasNextPage
    const i = r(370)
    const n = r(577)
    function hasNextPage(e) {
      i(
        `octokit.hasNextPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`
      )
      return n(e).next
    }
  },
  944: function() {
    eval('require')('debug')
  },
  946: function(e, t, r) {
    'use strict'
    var i = r(35)
    var n = r(589)
    var s = r(732)
    var o = r(774)
    function throwIfCancellationRequested(e) {
      if (e.cancelToken) {
        e.cancelToken.throwIfRequested()
      }
    }
    e.exports = function dispatchRequest(e) {
      throwIfCancellationRequested(e)
      e.headers = e.headers || {}
      e.data = n.call(e, e.data, e.headers, e.transformRequest)
      e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)
      i.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(t) {
          delete e.headers[t]
        }
      )
      var t = e.adapter || o.adapter
      return t(e).then(
        function onAdapterResolution(t) {
          throwIfCancellationRequested(e)
          t.data = n.call(e, t.data, t.headers, e.transformResponse)
          return t
        },
        function onAdapterRejection(t) {
          if (!s(t)) {
            throwIfCancellationRequested(e)
            if (t && t.response) {
              t.response.data = n.call(e, t.response.data, t.response.headers, e.transformResponse)
            }
          }
          return Promise.reject(t)
        }
      )
    }
  },
  948: function(e) {
    'use strict'
    e.exports = function(e) {
      try {
        return e()
      } catch (e) {}
    }
  },
  954: function(e) {
    e.exports = validateAuth
    function validateAuth(e) {
      if (typeof e === 'string') {
        return
      }
      if (typeof e === 'function') {
        return
      }
      if (e.username && e.password) {
        return
      }
      if (e.clientId && e.clientSecret) {
        return
      }
      throw new Error(`Invalid "auth" option: ${JSON.stringify(e)}`)
    }
  },
  955: function(e, t, r) {
    'use strict'
    const i = r(622)
    const n = r(129)
    const s = r(20)
    const o = r(768)
    const a = r(621)
    const u = r(323)
    const p = r(145)
    const c = r(697)
    const d = r(260)
    const l = r(427)
    const m = r(168)
    const g = 1e3 * 1e3 * 10
    function handleArgs(e, t, r) {
      let n
      r = Object.assign({ extendEnv: true, env: {} }, r)
      if (r.extendEnv) {
        r.env = Object.assign({}, process.env, r.env)
      }
      if (r.__winShell === true) {
        delete r.__winShell
        n = { command: e, args: t, options: r, file: e, original: { cmd: e, args: t } }
      } else {
        n = s._parse(e, t, r)
      }
      r = Object.assign(
        {
          maxBuffer: g,
          buffer: true,
          stripEof: true,
          preferLocal: true,
          localDir: n.options.cwd || process.cwd(),
          encoding: 'utf8',
          reject: true,
          cleanup: true
        },
        n.options
      )
      r.stdio = m(r)
      if (r.preferLocal) {
        r.env = a.env(Object.assign({}, r, { cwd: r.localDir }))
      }
      if (r.detached) {
        r.cleanup = false
      }
      if (process.platform === 'win32' && i.basename(n.command) === 'cmd.exe') {
        n.args.unshift('/q')
      }
      return { cmd: n.command, args: n.args, opts: r, parsed: n }
    }
    function handleInput(e, t) {
      if (t === null || t === undefined) {
        return
      }
      if (u(t)) {
        t.pipe(e.stdin)
      } else {
        e.stdin.end(t)
      }
    }
    function handleOutput(e, t) {
      if (t && e.stripEof) {
        t = o(t)
      }
      return t
    }
    function handleShell(e, t, r) {
      let i = '/bin/sh'
      let n = ['-c', t]
      r = Object.assign({}, r)
      if (process.platform === 'win32') {
        r.__winShell = true
        i = process.env.comspec || 'cmd.exe'
        n = ['/s', '/c', `"${t}"`]
        r.windowsVerbatimArguments = true
      }
      if (r.shell) {
        i = r.shell
        delete r.shell
      }
      return e(i, n, r)
    }
    function getStream(e, t, { encoding: r, buffer: i, maxBuffer: n }) {
      if (!e[t]) {
        return null
      }
      let s
      if (!i) {
        s = new Promise((r, i) => {
          e[t].once('end', r).once('error', i)
        })
      } else if (r) {
        s = p(e[t], { encoding: r, maxBuffer: n })
      } else {
        s = p.buffer(e[t], { maxBuffer: n })
      }
      return s.catch(e => {
        e.stream = t
        e.message = `${t} ${e.message}`
        throw e
      })
    }
    function makeError(e, t) {
      const { stdout: r, stderr: i } = e
      let n = e.error
      const { code: s, signal: o } = e
      const { parsed: a, joinedCmd: u } = t
      const p = t.timedOut || false
      if (!n) {
        let e = ''
        if (Array.isArray(a.opts.stdio)) {
          if (a.opts.stdio[2] !== 'inherit') {
            e += e.length > 0 ? i : `\n${i}`
          }
          if (a.opts.stdio[1] !== 'inherit') {
            e += `\n${r}`
          }
        } else if (a.opts.stdio !== 'inherit') {
          e = `\n${i}${r}`
        }
        n = new Error(`Command failed: ${u}${e}`)
        n.code = s < 0 ? l(s) : s
      }
      n.stdout = r
      n.stderr = i
      n.failed = true
      n.signal = o || null
      n.cmd = u
      n.timedOut = p
      return n
    }
    function joinCmd(e, t) {
      let r = e
      if (Array.isArray(t) && t.length > 0) {
        r += ' ' + t.join(' ')
      }
      return r
    }
    e.exports = (e, t, r) => {
      const i = handleArgs(e, t, r)
      const { encoding: o, buffer: a, maxBuffer: u } = i.opts
      const p = joinCmd(e, t)
      let l
      try {
        l = n.spawn(i.cmd, i.args, i.opts)
      } catch (e) {
        return Promise.reject(e)
      }
      let m
      if (i.opts.cleanup) {
        m = d(() => {
          l.kill()
        })
      }
      let g = null
      let h = false
      const y = () => {
        if (g) {
          clearTimeout(g)
          g = null
        }
        if (m) {
          m()
        }
      }
      if (i.opts.timeout > 0) {
        g = setTimeout(() => {
          g = null
          h = true
          l.kill(i.opts.killSignal)
        }, i.opts.timeout)
      }
      const f = new Promise(e => {
        l.on('exit', (t, r) => {
          y()
          e({ code: t, signal: r })
        })
        l.on('error', t => {
          y()
          e({ error: t })
        })
        if (l.stdin) {
          l.stdin.on('error', t => {
            y()
            e({ error: t })
          })
        }
      })
      function destroy() {
        if (l.stdout) {
          l.stdout.destroy()
        }
        if (l.stderr) {
          l.stderr.destroy()
        }
      }
      const b = () =>
        c(
          Promise.all([
            f,
            getStream(l, 'stdout', { encoding: o, buffer: a, maxBuffer: u }),
            getStream(l, 'stderr', { encoding: o, buffer: a, maxBuffer: u })
          ]).then(e => {
            const t = e[0]
            t.stdout = e[1]
            t.stderr = e[2]
            if (t.error || t.code !== 0 || t.signal !== null) {
              const e = makeError(t, { joinedCmd: p, parsed: i, timedOut: h })
              e.killed = e.killed || l.killed
              if (!i.opts.reject) {
                return e
              }
              throw e
            }
            return {
              stdout: handleOutput(i.opts, t.stdout),
              stderr: handleOutput(i.opts, t.stderr),
              code: 0,
              failed: false,
              killed: false,
              signal: null,
              cmd: p,
              timedOut: false
            }
          }),
          destroy
        )
      s._enoent.hookChildProcess(l, i.parsed)
      handleInput(l, i.opts.input)
      l.then = (e, t) => b().then(e, t)
      l.catch = e => b().catch(e)
      return l
    }
    e.exports.stdout = (...t) => e.exports(...t).then(e => e.stdout)
    e.exports.stderr = (...t) => e.exports(...t).then(e => e.stderr)
    e.exports.shell = (t, r) => handleShell(e.exports, t, r)
    e.exports.sync = (e, t, r) => {
      const i = handleArgs(e, t, r)
      const s = joinCmd(e, t)
      if (u(i.opts.input)) {
        throw new TypeError('The `input` option cannot be a stream in sync mode')
      }
      const o = n.spawnSync(i.cmd, i.args, i.opts)
      o.code = o.status
      if (o.error || o.status !== 0 || o.signal !== null) {
        const e = makeError(o, { joinedCmd: s, parsed: i })
        if (!i.opts.reject) {
          return e
        }
        throw e
      }
      return {
        stdout: handleOutput(i.opts, o.stdout),
        stderr: handleOutput(i.opts, o.stderr),
        code: 0,
        failed: false,
        signal: null,
        cmd: s,
        timedOut: false
      }
    }
    e.exports.shellSync = (t, r) => handleShell(e.exports.sync, t, r)
  },
  960: function(e, t, r) {
    'use strict'
    var i = r(590)
    var n = r(887)
    e.exports = function buildFullPath(e, t) {
      if (e && !i(t)) {
        return n(e, t)
      }
      return t
    }
  },
  966: function(e, t, r) {
    'use strict'
    const { PassThrough: i } = r(413)
    e.exports = e => {
      e = Object.assign({}, e)
      const { array: t } = e
      let { encoding: r } = e
      const n = r === 'buffer'
      let s = false
      if (t) {
        s = !(r || n)
      } else {
        r = r || 'utf8'
      }
      if (n) {
        r = null
      }
      let o = 0
      const a = []
      const u = new i({ objectMode: s })
      if (r) {
        u.setEncoding(r)
      }
      u.on('data', e => {
        a.push(e)
        if (s) {
          o = a.length
        } else {
          o += e.length
        }
      })
      u.getBufferedValue = () => {
        if (t) {
          return a
        }
        return n ? Buffer.concat(a, o) : a.join('')
      }
      u.getBufferedLength = () => o
      return u
    }
  },
  969: function(e, t, r) {
    var i = r(11)
    e.exports = i(once)
    e.exports.strict = i(onceStrict)
    once.proto = once(function() {
      Object.defineProperty(Function.prototype, 'once', {
        value: function() {
          return once(this)
        },
        configurable: true
      })
      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
          return onceStrict(this)
        },
        configurable: true
      })
    })
    function once(e) {
      var t = function() {
        if (t.called) return t.value
        t.called = true
        return (t.value = e.apply(this, arguments))
      }
      t.called = false
      return t
    }
    function onceStrict(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError)
        t.called = true
        return (t.value = e.apply(this, arguments))
      }
      var r = e.name || 'Function wrapped with `once`'
      t.onceError = r + " shouldn't be called more than once"
      t.called = false
      return t
    }
  }
})
