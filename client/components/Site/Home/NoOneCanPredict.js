import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100vw;
  height: 840px;
  background-image: url('./images/break-in.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 27rem 0rem 0rem 12rem;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    height: auto;
    padding: 4rem 2rem 3rem;
    height: 270px;
  }
`
const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: flex-end;
  }
`
const Header = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #fff;
  margin-bottom: 2rem;
  position: relative;
  width: 451px;

  @media (max-width: 800px) {
    display: none;
  }
`

export default function NoOneCanPredict() {
  return (
    <Section>
      <Wrapper>
        <Header>No one can predict when something will happen.</Header>
      </Wrapper>
    </Section>
  )
}
