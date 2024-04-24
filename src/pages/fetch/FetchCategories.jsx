import LoadingComponent from "../../components/LoadingComponent"
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi"

const FetchCategories = () => {
  const [data, isLoading, isError, error] = useCategoriesFetchApi()

  return (
    <div className="col-sm-12">
      <h1>Fetch Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group col-sm-6">
        {data.map(item => <li className="list-group-item" key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}

export default FetchCategories