export default class RError extends Error {
  constructor (params) {
    if (!params || !params.message) { throw new Error('message param required!') }
    super()
    this.message = params.message
    this.code = params.code || 500
    this.status = params.status || 'SERVER_ERROR'
  }
}
