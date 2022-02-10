const Rules = {
    regex: (validation,value) => {
        if(value && !value.match(validation.limit)) return validation.message
        return false
    },
    required: (validation,value) => {
        if(!value || value.trim() == '') return validation.message
        return false
    },
}
const validate = (validation,value) => {
    let messages = []
    for(let i in validation) {
        let message = Rules[validation[i].rule](validation[i],value)
        if(message) messages.push(message)
    }
    return messages
}
export default {validate}