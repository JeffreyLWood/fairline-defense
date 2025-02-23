import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100vw;
background-color: #fff;
color: var(--darkblue);
display: flex;
flex-direction: row;
padding: 4rem 12rem 4rem 12rem;
align-items: center;
min-height: 70vh;

@media (max-width: 768px) {
    padding: 1rem;
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: flex-start;

@media (max-width: 768px) {
    img {
        width: 100%;
    }
`
const H3 = styled.h3`
  font-size: 36px;
  font-weight: 600;
  color: var(--darkblue);
  margin-bottom: 1.5rem;
  line-height: 42px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const H4 = styled.h4`
  font-size: 30px;
  font-weight: 200;
  color: var(--darkblue);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const CyanButton = styled.button`
  color: #fff;
  width: 220px;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  background: var(--cyan);
  outline: none;
  margin: 0.5rem 0rem 0.5rem 0rem;
  font-size: 18px;
  font-weight: 200;
  cursor: pointer;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  padding: 2rem;
  img {
    width: 360px;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`
const TextBlock = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  margin: 0.5rem 0 0.5rem 0;
`
const Cyan = styled.span`
  font-size: inherit;
  font-weight: 500;
  color: var(--cyan);
`
export default function ReferAFriend() {
  return (
    <Wrapper>
      <Left>
        <H3>Fairline defense is awesome.</H3>
        <H4>
          Refer a Friend
        </H4>
        <CyanButton>Refer a Friend</CyanButton>
      </Left>
      <Right>
        <img src="./images/referafriend.png" />
      </Right>
    </Wrapper>
  )
}
