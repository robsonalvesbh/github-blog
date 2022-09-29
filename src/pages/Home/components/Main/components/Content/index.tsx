// import { useState, useEffect } from 'react'

// import axios from 'axios'
import { CardIssue } from './components/CardIssue'
import { InputSearch } from './components/InputSearch'
import { ContentContainer } from './styles'

export function Content() {
  // const [issues, setIssues] = useState()

  // async function getIssuesFromGithubApi() {
  //   const response = await axios.get('')
  // }

  return (
    <ContentContainer>
      <InputSearch />
      <CardIssue />
    </ContentContainer>
  )
}
