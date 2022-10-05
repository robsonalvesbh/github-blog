import { CardContainer, CardWrapper } from './styles'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface PublishesItems {
  id: string
  title: string
  created_at: string
  body: string
  publishes: []
}

export function CardIssue(publishes: PublishesItems) {
  const [items, setItems] = useState<PublishesItems[]>([])

  setItems(publishes.publishes)
  // console.log(publishes.publishes)

  return (
    <CardContainer>
      <CardWrapper>
        {items.map((publish) => (
          <NavLink to="/content" key={publish.id}>
            <div className="wrapper">
              <h2>{publish.title}</h2>
              <span>{publish.created_at}</span>
            </div>
            <p>{publish.body}</p>
          </NavLink>
        ))}
      </CardWrapper>
    </CardContainer>
  )
}
