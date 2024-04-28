

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`
    }
    async postComment(comment) { 
        // console.log(comment)
        try{
           const response = await axios.post(`${this.baseUrl}comments?api_key=<${this.apiKey}>`, comment)
           return response.data
        } catch(error){
            console.error('Error posting comment:');
            console.log(error)
        }
    }
    async getComments() {
        try{
           const response = await axios.get(`${this.baseUrl}comments?api_key=<${this.apiKey}>`)
           return response.data
        }catch(error){
            console.error('Error getting comment:');
            console.log(error)
        }
    }
    async getShows () {
        try{
            const response = await axios.get(`${this.baseUrl}showdates?api_key=<${this.apiKey}>`)
            return response.data
        }catch(error){
            console.error('Error getting shows:');
            console.log(error)
        }
    }
    async deleteComments(id) {
        try{
            const response = await axios.delete(`${this.baseUrl}comments/${id}?api_key=<${this.apiKey}>`)
            return response.data
        }catch(error){
            console.error('Error deleting comments:');
            console.log(error)
            throw error
        }
    }
}

export default new BandSiteApi(`e404f1cc-7cb2-4a28-8176-eda6fe932c33`)
