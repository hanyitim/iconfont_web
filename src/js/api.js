import Axios from 'axios';
import qs from 'qs';
const HOST = '//node.guaiyu.online';
// const HOST = '//192.168.10.17:8090';

/* devblock:start */
// import MockAdapter from 'axios-mock-adapter';
// import { mockAdapter } from './mockAdapter.js';

// var mock = new MockAdapter(Axios, { delayResponse: 300 });
// mockAdapter(mock);
/* devblock:end */
/**
 * request 工厂
 * @param {*} requireOption   axios config
 * @return function(data)
 */
function requireFactory(requireOption){
    return (data,subUrl) =>{
        // console.log(opt,requireOption);
        switch(requireOption.method){
        case 'get':
            requireOption.params = data;
            break;
        case 'post':
            requireOption.data = qs.stringify(data);
            break;
        default:
            requireOption.params = data;
            break;
        }
        if(subUrl){
            requireOption.url = subUrl;
        }
        // console.log(requireOption);
        return Axios({
            ...requireOption,
        });
    };
}

export const apiLibraryAdd = requireFactory({
    url: `${HOST}/api/library/add`,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const apiLibraryList = requireFactory({
    url: `${HOST}/api/library/list`,
    method: 'get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const apiLibraryById = requireFactory({
    baseURL: `${HOST}/api/library/`,
    method: 'get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
});

export const apiLibraryDelete = requireFactory({
    url: `${HOST}/api/library/delete`,
    method: 'get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const apiLibraryUpdate = requireFactory({
    baseURL: `${HOST}/api/library/update/`,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const apiGetConfig = requireFactory({
    method: 'get',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export const apiFontmin = requireFactory({
    url: `${HOST}/api/fontmin`,
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
});