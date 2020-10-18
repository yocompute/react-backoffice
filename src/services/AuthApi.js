import Api from './Api';

const API_URL = process.env.REACT_APP_API_URL;

const AuthApi = {
    
    async get(query={}){
        const url = process.env.REACT_APP_LOCAL_DATA ? `/auth.json` : Api.buildUrl(API_URL, 'auth', query);

        const res = await Api.get(url);

        if(res && res.status === 200){
            return res.data.data;
        }else{
            // redirect to error page and log error message
            console.log(res.statusText);
            return [];
        }
    }
}

export default AuthApi;