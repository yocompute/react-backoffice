import Api from "./Api";


export const PaymentMethod = {
    CASH: 'CASH',
    WECHAT: 'WECHAT',
    CREDIT_CARD: 'CC',
    DEPOSIT: 'DEPOSIT'
  };
  

const API_URL = process.env.REACT_APP_API_URL;

const PaymentApi = {

    getPayments(query = null) {
        // const url = `/payments.json`;
        const url = Api.buildUrl(API_URL, 'payments', query);

        return new Promise(resolve => {
            Api.get(url).then(res => {
                if (res && res.status === 200) {
                    resolve(res.data);
                } else {
                    // redirect to error page and log error message
                    console.log(res.statusText);
                    resolve([]);
                }
            });
        });
    },

    /**
     * 
     * @param {*} data --- {userId, payment: {method, cc, exp, cvd, addr}, cart}
     */
    createPayment(data) {
        // const url = `/orders.json`;
        const url = Api.buildUrl(API_URL, 'payments');

        return new Promise(resolve => {
            Api.post(url, data).then(res => {
                if (res && res.status === 200) {
                    resolve(res.data);
                } else {
                    // redirect to error page and log error message
                    console.log(res.statusText);
                    resolve();
                }
            });
        });
    },

    updatePayment(data) {
        // const url = `/orders.json`;
        const url = Api.buildUrl(API_URL, 'payments');

        return new Promise(resolve => {
            Api.put(url, data).then(res => {
                if (res && res.status === 200) {
                    resolve(res.data);
                } else {
                    // redirect to error page and log error message
                    console.log(res.statusText);
                    resolve();
                }
            });
        });
    },

}

export default PaymentApi;