import apicalypse from 'apicalypse';

const rawQueryString = 'fields a,b,c;limit 50;offset 0;';

const requestOptions = {
    queryMethod: 'url',
    method: 'post', // The default is `get`
    baseURL: 'https://myapi.com',
    headers: {
        'Accept': 'application/json'
    },
    responseType: 'json',
    timeout: 1000, // 1 second timeout
};

const response = await apicalypse(requestOptions)
    .fields('name,movies,age')
    .limit(50)    
    .query('age > 50 & movies != n')
    // After setting the baseURL in the requestOptions,
    // you can just use an endpoint in the request
    .request('/actors'); 

console.log(response.data);