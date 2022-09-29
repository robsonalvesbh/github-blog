import { ProfileCard, ProfileContainer } from './styles'
import github from '../../../../../../assets/github.svg'
import building from '../../../../../../assets/building.svg'
import users from '../../../../../../assets/users.svg'
import link from '../../../../../../assets/link.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface UserInfoGithub {
  avatar_url: string
  name: string
  bio: string
  html_url: string
  followers: number
}

export function CardProfile() {
  const [user, setUser] = useState<UserInfoGithub>()

  useEffect(() => {
    getUserInfo()
  }, [])

  async function getUserInfo() {
    const response = await axios.get<UserInfoGithub>(
      'http://api.github.com/users/gregolly',
    )

    setUser(response.data)
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <img className="img-avatar" src={user?.avatar_url} alt="" />
        <div className="wrapper">
          <h1>{user?.name}</h1>
          <p>{user?.bio}</p>
          <ul className="flex">
            <a href={user?.html_url}>
              <li className="flex align-items-center gap">
                <img src={github} alt="" />
                <span>{user?.name}</span>
              </li>
            </a>
            <li className="flex align-items-center gap">
              <img src={building} alt="" />
              <span>N/A</span>
            </li>
            <li className="flex align-items-center gap">
              <img src={users} alt="" />
              <span>{user?.followers} seguidores</span>
            </li>
          </ul>
        </div>
        <a
          href={user?.html_url}
          className="flex position"
          target="_blank"
          rel="noreferrer"
        >
          <span>Github</span>
          <img className="img-link" src={link} alt="" />
        </a>
      </ProfileCard>
    </ProfileContainer>
  )
}
