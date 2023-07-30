import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
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

  const getProfile = useCallback(async () => {
    const response = await api.get('users/victor-com-code')

    setProfile(response.data)
  }, [])

  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
