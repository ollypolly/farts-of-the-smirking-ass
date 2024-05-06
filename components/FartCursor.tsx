import { useEffect } from 'react'
import { styled } from 'styled-components'

const StyledBody = styled.div`
  cursor: url(/fart-cursor.png), auto;
`

export const FartCursor = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.addEventListener('click', () => {
      const fart = new Audio('/fart-sfx/short-fart.mp3')
      fart.play()
    })
  }, [])

  return <StyledBody id={'fart-cursor-container'}>{children}</StyledBody>
}
