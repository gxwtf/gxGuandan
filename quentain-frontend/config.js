const isProd = process.env.NODE_ENV === 'production'

export default {
  serverPath: isProd ? "https://api.guandan.gxwtf.cn": "http://localhost:5000",
}
