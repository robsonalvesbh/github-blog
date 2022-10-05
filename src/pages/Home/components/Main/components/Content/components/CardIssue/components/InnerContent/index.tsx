import {
  BodyContentContainer,
  ContainerInnerContent,
  HeaderContentInner,
  InfoContent,
} from './styles'

import { NavLink } from 'react-router-dom'

export function InnerContent() {
  return (
    <ContainerInnerContent>
      <HeaderContentInner>
        <InfoContent>
          <NavLink to="/">Voltar</NavLink>
          <NavLink to="">Ver no github</NavLink>
          <h2>JavaScript data types and data structures</h2>
          <ul>
            <li>cameronwll</li>
            <li>Há 1 dia</li>
            <li>5 comentários</li>
          </ul>
        </InfoContent>
      </HeaderContentInner>

      <BodyContentContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <pre>
          let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </pre>
      </BodyContentContainer>
    </ContainerInnerContent>
  )
}
