import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import { goToHomePage, goToRegisterPage } from '../../routes/coordinator'

function LoginPage () {

  const [form, setForm] = useState({
    account: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onChangeForm = (event)=>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  // const login = async (event)=>{
  //   event.preventDefault()
  //   try{
  //     setIsLoading(true)
  //     const body ={
  //       account: form.account,
  //       password: form.password
  //     }

  //     const response = await axios.get(
  //       `${BASE_URL}/main`, body
  //     )
  //      window.localStorage.setItem("tokenBancoDigital", response.data.token)
  //      goToHomePage(navigate)
  //      console.log("Deu certo!")
  //      setIsLoading(false)
  //   }catch(error){
  //     console.log("Deu erro!")
  //     console.log(error)
  //     setIsLoading(false)
  //   }
  // }

  const login = (event)=>{
    event.preventDefault()
    goToHomePage(navigate)
  }

  // const registerUser = (event)=>{
  //   event.preventDefault()
  //   goToRegisterPage(navigate)

  // }

  return (
    <>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* ATUALIZAR O LOGO POSTERIORMENTE */}
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
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="account-client" className="sr-only">
                  Insira o número da sua conta
                </label>
                <input
                  id="account-client"
                  name="account"
                  type="text"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Insira o número da sua conta"
                  value={form.account}
                  onChange={onChangeForm}
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
                  value={form.password}
                  onChange={onChangeForm}
                />
              </div>
            </div>

            <div>
              <button
                onClick={login}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                {isLoading ? "Carregando..." : "Continuar"}
              </button>
            </div>
            <div>

            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Não possui uma conta?{" "}
            
            <a href={goToRegisterPage(navigate)} className="font-medium text-indigo-600 hover:text-indigo-500">
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