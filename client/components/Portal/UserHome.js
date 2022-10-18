import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import ReferAFriend from './ReferAFriend'
import {VerifyEmail, VerifyPhone, ChoosePlan} from '../'
import styled from 'styled-components'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UserHome = () => {
  const user = useSelector(state => state.user)
  // if user.emailVerified => render verify
  // if user.phoneVerified => render verify phone
  // if user.userPlan => render choose plan

  // if(!user.emailVerified) {
  //   return <VerifyEmail />
  // }

  // if (!user.phoneVerified) {
  //   return <VerifyPhone />
  // }

  // if (!user.plan) {
  //   return <ChoosePlan />
  // }
const Wrapper = styled.div`
width: 100vw;
padding: 2rem;
background: linear-gradient(102.57deg, #21488a 0%, #0b182d 100%);
`
const Main = styled.div`
height: 500px;
width: 100vw;
color: #fff;
display: flex;
padding: 5rem;
flex-direction: row;
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 70%;
justify-content: flex-start;
`
const H1 = styled.h1`
font-size: 42px;
font-weight: 500;
color: #FFF;
`
const MemberID = styled.span`
font-size: 20px;
font-weight: 200;
color: #FFF;
margin-bottom: 1rem;
`
const Button = styled.button`
color: #fff;
width: 220px;
border: 1px solid #FFF;
border-radius: 5px;
padding: .75rem;
background: transparent;
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const BlueButton = styled.button`
color: #fff;
width: 220px;
border: none;
border-radius: 5px;
padding: .75rem;
background: var(--cyan);
outline: none;
margin: .5rem 0rem .5rem 0rem;
font-size: 18px;
font-weight: 200;
cursor: pointer;
`
const Right = styled.div`
display: flex;
flex-direction: column;
width: 30%;
justify-content: flex-start;
`
const TextBlock = styled.div`
display: flex;
width: 220px;
flex-direction: column;
margin: .5rem 0 .5rem 0;
`
const Bold = styled.span`
font-weight: 500;
`
const Small = styled.span`
font-weight: 200;
`
const ProgressBarWrapper = styled.div`
height: 20px;
width: 20px;
`
  return (
    <>
    <Wrapper>
      <Navbar />
      <Main>
      <Left>
        <H1>Hi, {user.firstName}</H1>
        <MemberID>#000000001</MemberID>
        <Button>Membership Card</Button>
        <Button>Add a spouse</Button>
        <BlueButton>Emergency Help</BlueButton>
      </Left>
      <Right>
        <CircularProgressbar
        value={50}
        text={`227 days remaining`}
        styles={buildStyles({
          textColor: "#FFF",
          pathColor: "#D6AE21",
          trailColor: "#FFF",
          textSize: "7px",
          strokeLinecap: "butt"
        })}
      />
    <TextBlock><Bold>Auto Renew</Bold><Small>October 12, 2022</Small></TextBlock>
    <TextBlock><Bold>Questions</Bold><Small>Call 1 877 xxx xxxx</Small></TextBlock>
      </Right>
      </Main>
    </Wrapper>
     <ReferAFriend></ReferAFriend>
     </>
  )
}

export default UserHome
