const axios = require('axios');

module.exports = {

    async getImageId(url){
        
        if(!url)
            return false

        try{
            const imageUrl = "http://api.instagram.com/oembed?url=" + url

            const response = await axios.get(imageUrl)

            return response.data.media_id
        } catch(e) {
            return false
        }
    }

}