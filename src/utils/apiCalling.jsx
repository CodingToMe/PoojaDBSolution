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
        console.log(data,url,"data,url")
        const result = await axios({
            ...postConfig,
            url: `${postConfig.baseUrl}/${url}`,
            data
        });
        console.log(result,"result");
        const response = await result.json()
        console.log(response,"response");
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