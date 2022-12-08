import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

function LoginPage () {

  // const [account, setAccount] = useState("")
  // const [password, setPassword] = useState("")

  const [form, setForm] = useState({
    account: "",
    password: "",
  })

  const onChangeForm = (event)=>{
    setForm({...form, [event.target.name]: event.target.value})
  }

  const login = ()=>{
    console.log("Conta: ", form.account)
    console.log("E-mail: ", form.password)
  }

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
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
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
                Continuar
              </button>
            </div>
            <div>

            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Não possui uma conta?{" "}
            
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
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