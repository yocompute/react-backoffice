import Api from './Api';

const API_URL = process.env.REACT_APP_API_URL;

const UserApi = {
    
    async get(query){
        const url = process.env.REACT_APP_MODE === 'local' ? `/users.json` : Api.buildUrl(API_URL, 'users', query);

        const res = await Api.get(url);

        if(res && res.status === 200){
            return res.data.data;
        }else{
            // redirect to error page and log error message
            console.log(res.statusText);
            return [];
        }
    },

    async create(data){
        const url = process.env.REACT_APP_MODE === 'local' ? `/users.json` : Api.buildUrl(API_URL, 'users');

        const res = await Api.post(url, data);

        if(res && res.status === 200){
            return res.data.data;
        }else{
            // redirect to error page and log error message
            console.log(res.statusText);
            return [];
        }
    },

    async update(data){
        const url = process.env.REACT_APP_MODE === 'local' ? `/users.json` : Api.buildUrl(API_URL, 'users');

        const res = await Api.put(url, data);

        if(res && res.status === 200){
            return res.data.data;
        }else{
            // redirect to error page and log error message
            console.log(res.statusText);
            return [];
        }
    }
}

export default UserApi;