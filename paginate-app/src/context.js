import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const endPoint = `https://reqres.in/api/users`

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(null)
  const getUser = async (url) => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const info = await res.json()
      if (info) {
        const { total_pages, data } = info
        setTotalPage(total_pages)

        setUser(data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePreviousPage = () => {
    setPage(page - 1)
  }
  useEffect(() => {
    getUser(`${endPoint}?page=${page}`)
  }, [page])

  return (
    <AppContext.Provider
      value={{
        page,
        user,
        loading,
        totalPage,
        handleNextPage,
        handlePreviousPage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
