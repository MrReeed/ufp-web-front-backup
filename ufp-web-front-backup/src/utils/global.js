var env = 'production'
// var env = 'localdebug'
let apiUrl = ''

switch (env) {
  case 'localdebug':
    apiUrl = 'http://192.168.123.100:8001/'
    break
  case 'production':
    apiUrl = 'http://ufpapi.lixiaole.com/'
    break
}

const uploadUrl = apiUrl + 'ad/uploadimage/'

export default {
  apiUrl,
  uploadUrl
}
