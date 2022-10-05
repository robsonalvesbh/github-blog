import { useEffect, useState } from 'react'

import axios from 'axios'
import { CardIssue } from './components/CardIssue'
import { InputSearch, PublishesApi } from './components/InputSearch'
import { ContentContainer } from './styles'

export function Content() {
  const [issues, SetIssuesData] = useState([])

  const objeto = {
    publishes: issues,
  } as PublishesApi

  useEffect(() => {
    getIssuesFromGithubApi()
  }, [])

  async function getIssuesFromGithubApi() {
    const response = await axios.get(
      'https://api.github.com/search/issues?q=lorem%20repo:gregolly/github-blog',
    )

    const apiData = response.data.items
    SetIssuesData(apiData)
  }
  console.log(issues)
  return (
    <ContentContainer>
      <InputSearch publishes={issues} />
      {/* <CardIssue publishes={objeto} /> */}
    </ContentContainer>
  )
}
