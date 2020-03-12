import algorithmia from 'algorithmia'

const algorithmiaServices = {


    getAlgo() {
        return algorithmia(process.env.algorithmiaKey)
    },

    async sumary(text) {
        const result = await this.getAlgo().algo("nlp/Summarizer/0.1.8?timeout=300")
            .pipe(text)
        return result.get()
    },

    async terms(text) {
        const result = await this.getAlgo().algo("nlp/AutoTag/1.0.1?timeout=300")
            .pipe(text)
        return result.get()
    }



}
module.exports = algorithmiaServices;