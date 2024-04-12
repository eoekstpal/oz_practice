import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <>
      <Container>
        헤더div에옹
      </Container>
      <InnerText>헤더p에옹</InnerText>
    </>
  )
}
// #242729
export default Header

const Container = styled.div`
  max-width: 1440px;
  height: 54px;
  background-color: #F1ECEA;
`;
const InnerText = styled.p`
  font-size: 100px;
`;