import axios from 'axios'

const SERVER_HOST = ""
class Http{
    constructor(){
        this.server_host = SERVER_HOST
        this.http = axios.create({
            baseURL: SERVER_HOST,
            timeout: 1000*60,
        })
    }
    getTimeRangeData(data = '近7天'){
        const url = ''
        return this.http.post(url, data)
    }
}

export default new Http()