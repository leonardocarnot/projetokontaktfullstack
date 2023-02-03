import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: #FFFFFF;
    margin-left:22px;
}
span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--grey0);
    margin-right: 25px;
}
button{
    width: 15px;
    height: 15px;
    background: none;
    border: none;
    margin-right: 18px;
}
.wholeCard{
    display: flex;
    align-items: center;
    width: 732px;
    height: 49px;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    background-color: #1f1717;
    border-radius: 4px;
}

.delete{
    color: white;
}
`