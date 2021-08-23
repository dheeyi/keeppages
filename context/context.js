import React, { useContext, createContext } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {}, [])

  const values = React.useMemo(() => ({
        user,
        setUser
      }),
    [user]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)

  if(!context){
    console.error('Error deploying App Context!!!')
  }

  return context
}

export default useAppContext