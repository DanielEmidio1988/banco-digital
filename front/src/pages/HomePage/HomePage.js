import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { useContext, useEffect} from 'react'
import Header from '../../components/Header'
import {ContainerMain, MenuOptions, MainDisplay, MainFinancial} from './styleHomePage'
import { goToDepositPage } from '../../routes/coordinator'
import { goToTransferPage } from '../../routes/coordinator'
import { GlobalContext } from '../../context/GlobalContext'

function HomePage() {
  const context = useContext(GlobalContext)
  const {accountUser, setAccountUser} = context
  const navigate = useNavigate()

const searchAccount = async () =>{
    const body ={
      cpf: accountUser.cpf,
    }
    
    try{
      const response = await axios.get(`${BASE_URL}/user/${body.cpf}`)
      setAccountUser(response.data)
      return

    }catch(error){
        console.log(`Erro de conexão com a base de dados nº ${error.response.status}.\nTipo não mapeado. Favor verificar!`)
        console.log('Detalhes: ',error)
        console.log(error)
    }
  }

  useEffect(() => {
    (searchAccount())
}, [])

  return (
    <>
    <Header/>
    <ContainerMain>
      <MenuOptions>
  
        <div onClick={()=>goToDepositPage(navigate)}>
          <p>DEPOSITO</p>
        </div>
        <div onClick={()=>goToTransferPage(navigate)}>
          <p>TRANSFERÊNCIAS</p>
        </div>
        <div>
          <p>AREA PIX</p>
        </div>
        <div>
          <p>INVESTIMENTOS</p>
        </div>
        <div>
          <p>SEGUROS</p>
        </div>
      </MenuOptions>
      <MainDisplay>
        <div>
          <h1>ÁREA EXCLUSIVA</h1>
          <p>Olá, {accountUser.name}</p>
          <p>Saldo em Conta: R$ {accountUser.accountValue}</p>
        </div>
        <MainFinancial>
          <div>
            <h3>Resumo Financeiro</h3>
            <ul>
              <li><span>Depósito</span><span>R$ 0.00</span></li>
              <li><span>Limite de Crédito</span><span>R$ 0.00</span></li>
              <li><span>Investimentos</span><span>R$ 0.00</span></li>
              <li><span>Gastos com Cartão e Crédito</span><span>R$ 0.00</span></li>
              <li><span>Taxas e Serviços Bancários</span><span>R$ 0.00</span></li>
            </ul>
            <p></p>
          </div>
          <div>
            <h3>Atendimento Exclusivo</h3>

              <p>
                Converse com nosso time de especialistas e confira as melhores opções de investimento.
              </p>
              <p>
                <a href="#">Fale com um especialista!</a>
              </p>
              
            
          </div>
        </MainFinancial>

      </MainDisplay>
    </ContainerMain>
    </>
  )
}

export default HomePage