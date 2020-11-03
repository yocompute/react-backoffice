import Api from './Api';

const API_URL = process.env.REACT_APP_API_URL;

const AuthApi = {
    
    async get(query=null){
        const url = process.env.REACT_APP_MODE === 'local' ? `/auth.json` : Api.buildUrl(API_URL, 'auth', query);

        const {data, status, statusText} = await Api.get(url);

        if(status === 200){
            return data.data;
        }else{
            // redirect to error page and log error message
            console.log(statusText);
            return [];
        }
    },

    async login(credential=null){
        const url = process.env.REACT_APP_MODE === 'local' ? `/auth.json` : Api.buildUrl(API_URL, 'auth/login');

        const {data, status, statusText} = await Api.post(url, credential);

        if(status === 200){
            return data.data;
        }else{
            // redirect to error page and log error message
            console.log(statusText);
            return null;
        }
    },

    async signup(entity=null){
        const url = process.env.REACT_APP_MODE === 'local' ? `/auth.json` : Api.buildUrl(API_URL, 'auth/signup');

        const {data, status, statusText} = await Api.post(url, entity);

        if(status === 200){
            return data.data;
        }else{
            // redirect to error page and log error message
            console.log(statusText);
            return null;
        }
    },
}

export default AuthApi;