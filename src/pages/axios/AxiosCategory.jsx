import { useParams } from "react-router-dom"
import Row from "../../components/Row"
import CatCard from "../../components/CatCard"
import LoadingComponent from "../../components/LoadingComponent"
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi"

const AxiosCategory = () => {
  const { categoryName } = useParams()
  const [data, isLoading, isError, error] = useCategoryAxiosApi(categoryName)
  console.log(data)

  return (
    <div className="col-sm-12">
      <h1>Axios Category: {categoryName}</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <Row className="row row-cols-sm-3">
        {data.map(item => <CatCard key={item.id} imgSrc={item.url} />)}
      </Row>

    </div>
  )
}

export default AxiosCategory