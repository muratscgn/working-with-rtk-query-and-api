import { Link } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"
import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer"

const RTKQueryCategories = () => {
  const { data, isLoading, isError, error } = useFetchCategoriesQuery()

  return (
    <div className="col-sm-12">
      <h1>RTK Query Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group col-sm-6">
        {data?.map(item => <li className="list-group-item" key={item.id}>
          <Link to={`/rtk-query-category/${item.id}`}>{item.name}</Link>
        </li>
        )}
      </ul>
    </div>
  )
}

export default RTKQueryCategories