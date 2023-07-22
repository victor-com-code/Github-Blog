import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

import { Endpoints } from '@octokit/types'

type ProfileResponse = Endpoints['GET /users/{username}']['response']['data']

interface ProfileContextType {
  profile: ProfileResponse
}

export const ProfileContext = createContext({} as ProfileContextType)

interface ProfileContextProviderProps {
  children: ReactNode
}

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileResponse)

  async function getProfile() {
    const response = await api.get('users/victor-com-code')

    setProfile(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
