import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import history from '../../history'
import RegisterHeader from './RegisterHeader'
import { useEffect } from 'react'

const Gradient = styled.div`
width: 100vw;
min-height: 100vh;
background: linear-gradient(105.01deg, #21488A -28.31%, #0B182D 67.65%);
color: #fff;
overflow-x: hidden;

a {
  color: var(--blue);
}

a:visited {
  color: var(--blue);
}

a:hover {
  color: var(--blue);
}
`
const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('./images/darkblueFlogo.png');
  background-repeat: no-repeat;
  background-position: 0px 30px;

  @media (max-width: 800px) {
    background-image: none;
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 4rem;
  position: relative;

  @media (max-width: 800px) {
    padding: 4rem 1rem 0rem 1rem;
  }
`
const CenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const Heading = styled.span`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 1.5rem;
`
const SubHeading = styled.span`
  font-size: 16px;
  font-weight: 100;
  line-height: 22px;
`
const ResendLink = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #00ABE0;
  margin-top: 3rem;
  cursor: pointer;
`
const EmailIcon = styled.img`
  margin: 1.5rem;
`
const SemiBold = styled.span`
  font-size: inherit;
  font-weight: 500;
  color: inherit;
`
const BottomWrapper = styled.span`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  text-align: center;
`
const Button = styled.button`
  color: #5d789a;
  border-radius: 40px;
  width: 340px;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 20px;
  font-weight: 100;
  margin: 2rem;
  outline: none;
  background: transparent;
  background: rgba(0, 171, 224, 0.2);
  border: 1px solid #5d789a;

  &::disabled {
    background-color: #2a4c78;
  }
`

const VerifyEmail = () => {
  const user = useSelector(state => state.user)

  const sendVerifyEmail = async () => {
    const data = new URLSearchParams();
    data.append("channel", "email");
    data.append("email", user.email);
    fetch("twilio/start-verify", {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json);
        if (json.success) {
          console.log("Successfully sent email.");
        } else {
          console.log(json.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    sendVerifyEmail()
  }, [])
  return (
    <Gradient>
      <BackgroundImage>
        <RegisterHeader />
        <Wrapper>
          <Heading>Verify your email</Heading>
          <CenteredWrapper>
            <EmailIcon src="./images/confirmemail.png" />
            <SubHeading>A confirmation link has been sent to</SubHeading>
            <SubHeading>
              <SemiBold>{user.email}</SemiBold>
            </SubHeading>
            <ResendLink onClick={sendVerifyEmail}>
              Resend the link
            </ResendLink>
          </CenteredWrapper>
          <BottomWrapper>
            <SubHeading>
              In order to proceed, please check your email and click the
              confirmation link.
            </SubHeading>
            <Button onClick={e => clickHandler(e)}>Continue</Button>
          </BottomWrapper>
        </Wrapper>
      </BackgroundImage>
    </Gradient>
  )
}
export default VerifyEmail
