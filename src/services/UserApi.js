import Api from './Api';

const API_URL = process.env.REACT_APP_API_URL;

const UserApi = {
    
    async get(query={}){
        const url = `${API_URL}/users`;
        const res = await Api.get(url);

        if(res && res.status === 200){
            return res.data;
        }else{
            // redirect to error page and log error message
            console.log(res.statusText);
            return [];
        }
    }
}

export default UserApi;