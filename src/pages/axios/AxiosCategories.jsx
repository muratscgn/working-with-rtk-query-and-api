import { Link } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"
import useCategoriesAxiosApi from "../../axiosCustomHooks/useCategoriesAxiosApi"

const AxiosCategories = () => {
  const [data, isLoading, isError, error] = useCategoriesAxiosApi()
  console.log(data)

  return (
    <div className="col-sm-12">
      <h1>Axios Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group col-sm-6">
        {data.map(item => <li className="list-group-item" key={item.id}>
          <Link to={`/axios-category/${item.id}`}>{item.name}</Link>
        </li>
        )}
      </ul>
    </div>
  )
}

export default AxiosCategories