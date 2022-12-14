//Daniel: configuração inicial
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const DB_USER = 'daniel'
const DB_PASSWORD = encodeURIComponent('#P7mD_Kc67mdYhJ')

app.use(cors())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Daniel: rota de teste de verificação de conexão
app.get('/',(req,res)=>{
    res.json({message: 'Teste de conexão!'})
})

//Daniel: rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/user',personRoutes)

mongoose.set('strictQuery', true)
    mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apibancodigital.pntaupv.mongodb.net/?retryWrites=true&w=majority`,
        )
    .then(()=>{
        console.log('Conectamos ao MongoDB')
        app.listen(3001) 
    })
        .catch((err)=>{
        console.log(err)
})