import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="col-sm-8 offset-sm-2">
      <h1>Home Page</h1>
      <h3>API Usage with <Link to="/rtk-query-categories">Redux Toolkit Query</Link>,
        <Link to="/fetch-categories"> Fetch</Link> and
        <Link to="/axios-categories"> Axios</Link></h3>
      <hr />
      <h3><Link to="/rtk-query-categories">Redux Toolkit Query</Link>,
        <Link to="/fetch-categories"> Fetch</Link> ve
        <Link to="/axios-categories"> Axios</Link> İle API Kullanımı</h3>
    </div>
  )
}

export default HomePage