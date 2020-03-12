import gyphyServices from '../services/gyphy.services.js'
import algorithmiaServices from '../services/algorithmia.services.js'

const textController = {
    async getGifsByText(req, res, next) {
        const sumaryText = await algorithmiaServices.sumary(req.params.word)
        const terms = await algorithmiaServices.terms(sumaryText)
        const gifs = await gyphyServices.getGifByTerms(terms)
        res.send(gifs);
    }

}

module.exports = textController