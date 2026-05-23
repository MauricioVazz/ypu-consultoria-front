'use client'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${({ theme }) => theme?.container?.width ?? 'min(1400px, 92%)'};
  margin: 0 auto;
`

export default function Container({
  children
}) {
  return <Wrapper>{children}</Wrapper>
}