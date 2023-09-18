
const bcryptjs = require("bcrypt")

const encrypt = async (plainPassword)=>{

    const hash = await bcryptjs.hash(plainPassword,10)
    return hash

}

const compare = async (plainPassword,hashPassword)=>{

    
            
        const unhash = await bcryptjs.compare(plainPassword,hashPassword)
        return unhash

    
        

}


module.exports = {encrypt,compare}