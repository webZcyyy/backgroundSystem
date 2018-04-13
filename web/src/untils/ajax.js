import axios from 'axios';
import qs from 'qs';
import baseurl from './baseUrl';

var baseUrl = baseurl.url;

var filterUrl = function (url) {
    if(url.startsWith('http')){
        return url;
    }
    return baseUrl + url;
}
export default{
    get:(opt) => {
        return new Promise((resolve, reject)=>{
            if(opt.ve){
                opt.ve['loading'] = true;
            };
            axios.get(filterUrl(opt.url)).then((res)=>{
                if(opt.ve){
                    opt.ve['loading'] = false;
                }
                resolve(res);
            }).catch((error)=>{
                if(opt.ve){
                    opt.ve['loading'] = false;
                }
                reject(error);
            })
        })
    },
    post:(opt) => {
        return new Promise((resolve, reject)=>{
            axios({
                url: filterUrl(opt, url),
                data: qs.stringify(opt.params),
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
};