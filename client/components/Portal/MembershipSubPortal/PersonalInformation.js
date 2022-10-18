import React from 'react'
import styled from 'styled-components'

export default function PersonalInformation() {
    const user = useSelector(state.user)

    const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    `
    return (
        <Wrapper>
            Personal Info
        </Wrapper>
    )
}
