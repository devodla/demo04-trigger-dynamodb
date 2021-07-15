class Handler {
  async main() {
    try {
      return {
        statusCode: 200,
        body: 'Hello'
      }      
    } catch (error) {
      console.error('Error...', error.stack)
      return {
        statusCode: 500,
        body: 'Internal error'
      }
    }
  }
}

const handler = new Handler()
module.exports = handler.main.bind(handler)
