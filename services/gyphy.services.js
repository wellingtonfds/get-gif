import axios from 'axios'
const gyphyServices = {
    list: [],
    async getGifByTerm(term) {
        let result = {};
        await axios.get(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.giphyKey}&limit=${parseInt(process.env.giphyLimit,10)}`).then(res => {
            result = res.data;
        })
        return result.data
    },
    async getGifByTerms(terms) {
        const promisse =  (terms.map(async term => {
            return term = {
                'term': term,
                gif: await this.getGifByTerm(term)
            }
        }))
        const result = await Promise.all(promisse)
        return result
    }
}
module.exports = gyphyServices