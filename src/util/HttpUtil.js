import main from '../main.js'

const httpUtil = {
    getVue(){
        return main.vum
    },
    baseurl(){
       return "http://192.168.31.8:8080/";
    },

    get(url, callback){
        this.getVue().$http(this.baseurl() + url, 'get').then(response=>{
                callback(response)
            },response=;>{
                callback(response)
            })
    },
    post(url, param, callback){
        this.getVue().$http.post(this.baseurl() + url, param, {emulateJSON:true})
            .then(response=>{
                callback(response)
            },response=;>{
                callback(response)
            })
    }


};

export default httpUtil;