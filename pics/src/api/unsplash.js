import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos' ,
    headers:{
        Authorization: 'Client-ID 6Ym8aKeYt6MFm_AHVSrvRy6fbEB9khKKNnyuDfc4BVE',
      }
});