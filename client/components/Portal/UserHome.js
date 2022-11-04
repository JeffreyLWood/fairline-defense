import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Navbar from './Navbar'
import ReferAFriend from './ReferAFriend'
import Card from './Card'
import {VerifyEmail, VerifyPhone, ChoosePlan, Footer} from '../'
import styled from 'styled-components'
import {useEffect} from 'react'
import { me } from '../../store'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

@media (max-width: 768px) {
  height: 110vh;
  flex-direction: column;
  padding: 1rem 0rem 0rem 0rem;
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 65%;
height: 70vh;
justify-content: flex-start;

@media (max-width: 768px) {
  width: 100%;
}
`
const Right = styled.div`
display: flex;
flex-direction: column;
width: 35%;
justify-content: flex-start;

@media (max-width: 768px) {
  justify-content: center;
  width: 100%;
  height: 70px;
}
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
const TextBlock = styled.div`
display: flex;
width: 220px;
flex-direction: column;
margin-bottom: .5rem;
`
const Bold = styled.span`
font-weight: 500;
`
const Small = styled.span`
font-weight: 200;
`
const ProgressBarWrapper = styled.div`
width: 225px;
height: 225px;
margin-bottom: 2rem;
@media (max-width: 768px) {
  height: 300px;
  width: 300px;
}
`
const UserHome = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  // if user.emailVerified => render verify
  // if user.phoneVerified => render verify phone
  // if user.userPlan => render choose plan

  // if(!user.emailVerified) {
  //   return <VerifyEmail />
  // }

  // if (!user.phoneVerified) {
  //   return <VerifyPhone />
  // }

  if (!user.planActive) {
    return <ChoosePlan />
  }
  return (
    <>
    <Wrapper>
      <Navbar />
      <Main>
      <Left>
        <H1>Hi, {user.firstName}</H1>
        <MemberID>#{user.membershipNumber}</MemberID>
        <Button>Membership Card</Button>
        <Button>Add a spouse</Button>
        <BlueButton>Emergency Help</BlueButton>
      </Left>
      <Right>
        <ProgressBarWrapper>
        <CircularProgressbar
        value={user.percentageLeft}
        text={`${user.daysLeft} days remaining`}
        styles={buildStyles({
          textColor: "#FFF",
          pathColor: "#D6AE21",
          trailColor: "#FFF",
          textSize: "7px",
          strokeLinecap: "butt",
        })}
      />
      </ProgressBarWrapper>
    <TextBlock><Bold>Auto Renew</Bold><Small>{user.periodEnd}</Small></TextBlock>
    <TextBlock><Bold>Questions</Bold><Small>Call 1 877 xxx xxxx</Small></TextBlock>
      </Right>
      </Main>
    </Wrapper>
     <ReferAFriend />
     <Card />
     <Footer />
     </>
  )
}

export default UserHome
