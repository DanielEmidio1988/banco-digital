import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToHomePage, goToRegisterPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function LoginPage () {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  //Daniel: função que será ativa quando o formulário de login for submetido, puxando todas as informações que forem inseridas dentro dele.
  const handleClick = async (event)=>{
    event.preventDefault()
  
    try{
      context.setIsLoading(true)

      const body = {
        name: context.accountUser.name,
        cpf: context.accountUser.cpf,
        password: context.accountUser.password,
        accountValue: context.accountUser.accountValue,
      }
      
      await axios.post(
        `${BASE_URL}/user/login`, body
      )
       alert(`Login realizado com sucesso!`)
       context.setIsLoading(false)
       context.setIsAuth(true)
       goToHomePage(navigate)
    }catch(error){
      context.setIsLoading(false)
      if(error.response.status === 422){
        alert('CPF ou Senha incorretos!')
        console.log("CPF ou Senha incorretos!")
      }
      alert(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
      console.log(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
      console.log('Detalhes: ',error)
    }
  }

  return (
    <>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Acesso à Conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Insira seus dados para iniciarmos a sessão
            </p>
          </div>

          {/* Daniel: formulário de login */}
          <form onSubmit={handleClick} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="account-client" className="sr-only">
                  Insira o número da sua conta
                </label>
                <input
                  id="cpf-client"
                  name="cpf"
                  type="text"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Insira o número da sua conta"
                  value={context.accountUser.cpf}
                  onChange={context.onChangeForm}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Insira a sua senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Insira a sua senha"
                  value={context.accountUser.password}
                  onChange={context.onChangeForm}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {context.isLoading ? "Carregando..." : "Continuar"}
              </button>
            </div>
            <div>

            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Não possui uma conta?{" "}
            
            <a onClick={()=>goToRegisterPage(navigate)} className="font-medium text-indigo-600 hover:text-indigo-500">
                  {" "}Cadastrar
            </a></label>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage