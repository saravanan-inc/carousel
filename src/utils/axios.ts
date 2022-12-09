import axios from 'axios';

export const server = axios.create({
    baseURL: 'http://ec2-3-17-25-95.us-east-2.compute.amazonaws.com/',
    headers: {
        'Content-type': 'application/json'
    },
});
  