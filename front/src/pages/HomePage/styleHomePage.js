import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: lightgray;
`
export const MenuOptions = styled.div`
    width: 200px;
    background-color: white;
    padding-top: 20px;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 8px;

    p{
        margin-bottom: 12px;
        padding: 8px;
    }

    p:hover{
        cursor: pointer;
        color: orangered;
        width: 96%;
        border-radius: 8px;
    }    
`

export const MainDisplay = styled.div`
    width: 80%;
    margin-top: 20px;
    margin-left: 40px;
    background-color: white;
    border-radius: 8px;
    padding-left: 20px;
    padding-top: 10px;

    h1{
        font-size: 30px;
        margin-bottom: 20px;
        color: orangered;
    }

    div:first-child{
        margin-bottom: 36px;
    }

    h3{
        font-size: 20px;
        margin-bottom: 10px;
        color: orangered;
        font-weight: bold;
    }

    ul{
        li{
            margin-right: 30px;
            display: flex;
            justify-content: space-between;
        }
    }
`

export const MainFinancial = styled.div`
    display: flex;
    gap: 10px;
    padding-right: 4vw;


    div:first-child{
        width: 70%;
        flex-direction: column;
    } 
    
    a{
        color: orangered;
    }
    
`