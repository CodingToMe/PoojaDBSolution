import axios from "axios";

class API{
    async get(url,haveParams =false ,params ={}){
        try{
            const headers = new Headers()

            headers.set('Content-type','applicatioin/x-www-form-urlencoded')
            // header.set('Authorization', await this.getToken());
            const request =await fetch(
                `${url}${haveParams ? `?${new URLSearchParams(params)}`:''}`,
                {
                    method:'GET',
                    headers,
                }
            );
            const response =await request.json()
             return {
                    status: response.status,
                    data: response.data
                };
        }
        catch(error){
           
                return {
                    status: error.response ? error.response.status : 500,
                    data: error.response ? error.response.data : "Unknown Error"
                }; 
            
        }
    }



    async post(url,data){
        // const data =Object.keys(body)
        // .map(key =>{
        //     return encodeURIComponent(key) + '='+ encodeURIComponent(body[key])
        // })
        // .join('&')
        // console.log(body,"boddyuyud")

        console.log(JSON.stringify(data))
        try{
            const headers = new Headers()

            headers.set('Content-type','applicatioin/x-www-form-urlencoded')
            // header.set('Authorization', await this.getToken());
            const request =await fetch(url,{
                    method:"POST",
                    headers,
                    body: JSON.stringify(data),
                }
            );
            const response =await request.json()
             return {
                    status: response.status,
                    data: response.data
                };
        }
        catch(error){
                return {
                    status: error.response ? error.response.status : 500,
                    data: error.response ? error.response.data : "Unknown Error"
                }; 
            
        }
    }

}

export default API