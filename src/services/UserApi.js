import Api from './Api';

const API_URL = process.env.REACT_APP_API_URL;

const UserApi = {
    
    async get(query={}){
        const url = process.env.REACT_APP_LOCAL_DATA ? `/users.json` : Api.buildUrl(API_URL, 'users', query);

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

export default UserApi;