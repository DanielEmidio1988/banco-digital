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
    // color: white;
    padding-top: 20px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 8px;

    div{
        margin-bottom: 12px;
        padding: 8px;
 
    }

    div:hover{
        cursor: pointer;
        background-color: #374151;
        width: 96%;
        border-radius: 8px;
    }
    
`