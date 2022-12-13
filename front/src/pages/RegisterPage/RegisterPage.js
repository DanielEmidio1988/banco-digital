import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToLoginPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function RegisterPage() {
  const context = useContext(GlobalContext)
  const {accountUser, isLoading, setIsLoading, onChangeForm} = context
  const navigate = useNavigate()
  const [validatePassword, setValidatePassword] = useState("")

  //Daniel: Função para cadastrar nova conta, será chamada apenas se não houver CPF duplicado, conforme função "checkDuplicate"
  const signup = async (event)  => {
    // event.preventDefault()
    const body ={
      name: accountUser.name,
      cpf: accountUser.cpf,
      password: accountUser.password,
      accountValue: accountUser.accountValue,
    }

    try{
      await axios.post(`${BASE_URL}/user/signup`,body)
      alert(`Conta cadastrada com sucesso!`)
      setIsLoading(false)
      goToLoginPage(navigate)
    }catch(error){
        alert(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
        console.log(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
        console.log('Detalhes: ',error)
        setIsLoading(false)
    }
  }

//Daniel: função que verificará se há um CPF cadastrado na Base de Dados, que será chamada ao cadastrar (clicando em "Cadastrar")
  const checkDuplicate = async (event)=> {
    event.preventDefault()

    const body ={
      name: accountUser.name,
      cpf: accountUser.cpf,
      password: accountUser.password,
      accountValue: accountUser.accountValue,
    }
    try{

      setIsLoading(true)

      //Daniel: função para validar se ambas as senhas conferem.
      if(validatePassword !== accountUser.password){
        alert(`Senha não confere!`)
        setIsLoading(false)
        return  
      }

      await axios.get(`${BASE_URL}/user/${body.cpf}`)
      alert(`CPF já cadastrado na Base de Dados!`)
      setIsLoading(false)
    
    return
    }catch(error){
        if(error.response.status !== 422){
        alert(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
        console.log(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
        console.log('Detalhes: ',error)
        setIsLoading(false)}
        else{
          signup()
        }
    }
  }

  //Daniel: função para retornar a página anterior
  const backToLogin =(event) =>{
    event.preventDefault()
    goToLoginPage(navigate)
  }

    return (
      <>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Cadastro Pessoal</h3>
                <p className="mt-1 text-sm text-gray-600">Insira os seus dados para cadastro</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">               
                  <div className="bg-white px-4 py-5 sm:p-6">               
                    <div className="grid grid-cols-6 gap-6">                      
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Nome:
                          
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={accountUser.name}
                          onChange={onChangeForm}
                          required
                          autoComplete="off"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          CPF:
                        </label>
                        <input
                          type="text"
                          name="cpf"
                          id="cpf"
                          value={accountUser.cpf}
                          onChange={onChangeForm}
                          required
                          autoComplete="off"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Senha:
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={accountUser.password}
                          onChange={onChangeForm}
                          required
                          autoComplete="off"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Confirme sua Senha:
                        </label>
                        <input
                          type="password"
                          name="password-validate"
                          id="password-validate"
                          value={validatePassword}
                          onChange={(event)=>setValidatePassword(event.target.value)}
                          required
                          autoComplete="off"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  
                    <button
                      type="submit"
                      onClick={checkDuplicate} 
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {isLoading ? 'Carregando...':'Cadastrar'}
                    </button>

                    
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                      type="submit"
                      onClick={backToLogin}
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Voltar
                    </button>
                                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

      </>
    )
  }
  

export default RegisterPage