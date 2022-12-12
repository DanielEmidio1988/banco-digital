// import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import {ContainerMain, MenuOptions} from './styleHomePage'
import { goToDepositPage } from '../../routes/coordinator'
import { goToTransferPage } from '../../routes/coordinator'

function HomePage() {

  const navigate = useNavigate()



  return (
    <>
    <Header/>
    <ContainerMain>
      <MenuOptions>
        <div>
          <h3>Sua Conta</h3>
        </div>
        <div onClick={()=>goToDepositPage(navigate)}>
          DEPOSITO
        </div>
        <div onClick={()=>goToTransferPage(navigate)}>
          TRANSFERÊNCIAS
        </div>
        <div>
          AREA PIX
        </div>
        <div>
          INVESTIMENTOS
        </div>
        <div>
          SEGUROS
        </div>
      </MenuOptions>
      <div>
        <div>
          <h1>USUARIO</h1>
          <p>Saldo em Conta: R$ 0.00</p>
        </div>
        <div>
          <h3>BEM VINDO USUARIO</h3>
          <p>Bem Vindo(a) ao Banco Digital!</p>
          <p></p>
          <p>Aqui você poderá administrar toda sua movimentação da sua conta bancária, com isenção em todas as taxas.</p>
          <p></p>
          <p></p>



        </div>

      </div>
    </ContainerMain>
    </>
  )
}

export default HomePage