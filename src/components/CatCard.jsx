import PropTypes from "prop-types"

const CatCard = ({ imgSrc }) => {
  return (
    <div className="col-sm mb-3">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the Caards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default CatCard

CatCard.propTypes = {
  imgSrc: PropTypes.any
}