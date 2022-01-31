import * as axios from 'axios';

const BASE_URL =  'https://thwanisithole.co.za/file/upload';

function upload(formData) {
    const url = `${BASE_URL}`;
    return axios.post(url, formData)
        // get data
        .then(console.log(response));
}

export { upload }