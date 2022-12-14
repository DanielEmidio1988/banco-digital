const router = require('express').Router()
const Person = require('../models/Person')

router.post('/signup', async (req, res)=>{
    const {name, cpf, password, accountValue} = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatório!'})
    }
    if(!password){
        res.status(422).json({error: 'A senha é obrigatório!'})
    }
    if(!cpf){
        res.status(422).json({error: 'O CPF é obrigatório!'})
    }

    const person= {
        name, 
        cpf, 
        password,
        accountValue
    }

    try{
        await Person.create(person)
        res.status(201).json({message: "Cliente cadastrado com sucesso!"})
    }catch(error){
        res.status(500).json({error:error})
    }
})

//Daniel: Resgatar contas de usuários
router.get('/all', async (req, res) => {
    try{
        const accounts = await Person.find()

        res.status(200).json(accounts)

    }catch(error){

        res.status(500).json({error: error})

    }
})


//Daniel: busca usuário pelo CPF
router.get('/:id', async (req, res)=>{
    const cpf = req.params.id

    try{
        const account = await Person.findOne({cpf:cpf})
        if(!account){
            res.status(422).json({error: 'Usuário não encontrado'})
            return
        }
        res.status(200).json(account)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//Daniel: login de usuário
router.post("/login", async (req, res)=>{
    const cpf = req.body.cpf;
    const password = req.body.password

    try{
        const accountPerson = await Person.findOne({cpf:cpf})
        console.log(accountPerson)
        console.log(req.body)

        if(!accountPerson){
            res.status(422).json({error: 'Conta não cadastrada'})
            return
        }
        if(cpf == accountPerson.cpf && password == accountPerson.password){
            res.status(201).json({message: 'Login realizado com sucesso!'})
            return
        }else{
            res.status(422).json({error: 'CPF ou senha incorretos'})
            return
        }
    }catch(error){
        res.status(500).json({error: error})
    }
})

//Daniel: atualiza Cadastro
router.put('/:id', async (req, res)=>{

    const id = req.body.cpf
    const {name, cpf, accountValue, password} = req.body
    console.log("id",id)
    console.log("body", req.body)

    const person ={
        name,
        cpf,
        accountValue,
        password,
    }

    try{
        
        await Person.updateOne({cpf:id},person)

        res.status(200).json({message:"Atualização realizada com sucesso!"})

    }catch (error){
        res.status(500).json({error: error})
        return
    }
})

module.exports = router