import { useEffect, useState } from "react"
import { axiosCatApi } from "./axiosApi"

export default function useCategoriesAxiosApi() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()


  const getApiData = async () => {
    try {
      const response = await axiosCatApi("/breeds")
      const responseData = await response?.data
      setData(responseData)
      setIsLoading(false)
    } catch (err) {
      setIsError(true)
      setError("data could not be received")
      throw new Error(err)
    }
  }

  useEffect(() => {
    setTimeout(() => getApiData(), 500)
  }, [])

  return [data, isLoading, isError, error]
}