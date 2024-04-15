// const axios = require('axios');
import axios from "axios";

const postConfig = {
    baseUrl: "http://localhost:3000/api/v1",
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Authorization": "Bearer YOUR_TOKEN_HERE" // Replace with your actual token
    },
    method: 'post'
};

const postAPI = async (url, data) => {
    try {
       
        const result = await axios({
            ...postConfig,
            url: url,
            data
        });
        const responseData = result.data;

        console.log(responseData, "responseData");
        return responseData
    } catch (errors) {
        let error
        return  error= errors.response ? errors.response.data : "Unknown Error"
    
    }
};


// get config



const getConfig = {
    baseUrl: "http://localhost:3000/api/v1/",
    headers: {
        "Authorization": "Bearer YOUR_TOKEN_HERE" // Replace with your actual token
    },
    method: 'get'
};

const getAPI = async (url, data) => {
    try {
        const response = await axios({
            ...getConfig,
            url: `${getConfig.baseUrl}/${url}/`,
        });
        console.log(response);
        return {
            status: response.status,
            data: response.data
        };
    } catch (error) {
        console.log(error);
        return {
            status: error.response ? error.response.status : 500,
            data: error.response ? error.response.data : "Unknown Error"
        };
    }
};

export{ postAPI,getAPI };