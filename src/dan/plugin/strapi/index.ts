const _data = (res: any, def = []) => (res ? res.data : def)

const _insert = (res: any) => ({ id: res.id, ...res.attributes })

const data = function (res: any, _is_data = true): [] {
  res = _is_data ? _data(res) : res

  return res ? ((res.constructor === Array) ? res.map(e => _insert(e)) : (res ? _insert(res) : null)) : []
}

const kiii_of_k = function (src: [ ], k: string[ ]): [] {
  src.map((e: any) => {
    if (k.length > 0) {
      k.map((_k: string) => {
        e[_k] = data(e[_k])

        return _k
      })
    }

    return e
  })

  return src
}

export default {
  data,
  kiii_of_k,
  ser_aii: (src: ONE, ks: string[ ]): ONE => {
    const res = data(src)

    return {
      data: res ? kiii_of_k(res, ks) : [],
      page: src.meta ? src.meta.pagination : { },
    }
  },
}
