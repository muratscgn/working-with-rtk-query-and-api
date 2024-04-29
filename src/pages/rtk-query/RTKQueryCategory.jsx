import { useParams } from "react-router-dom"
import Row from "../../components/Row"
import CatCard from "../../components/CatCard"
import LoadingComponent from "../../components/LoadingComponent"
import { useFetchCategoryQuery } from "../../store/catApi/catApiSlicer"

const RTKQueryCategory = () => {
  const { categoryName } = useParams()
  const { data, isLoading, isError, error } = useFetchCategoryQuery(categoryName)
  console.log(data)

  return (
    <div className="col-sm-12">
      <h1>RTK Query Category: {categoryName}</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <Row className="row row-cols-sm-3">
        {data?.map(item => <CatCard key={item.id} imgSrc={item.url} id={item.id} />)}
      </Row>
    </div>
  )
}

export default RTKQueryCategory