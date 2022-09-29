import { HeaderContainer } from './styles'
import terminal from '../../../../assets/terminal.svg'
import leftEffect from '../../../../assets/left-effect.svg'
import rightEffect from '../../../../assets/right-effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img className="left-effect" src={leftEffect} alt="" />
      <img className="right-effect" src={rightEffect} alt="" />
      <img className="img-terminal" src={terminal} alt="" />
      <p>Github Blog</p>
    </HeaderContainer>
  )
}
