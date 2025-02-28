import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Link to="/" className="hover:text-blue-600">
        <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home" className="w-4 h-4" />
      </Link>
      <img
        src="https://img.icons8.com/material-outlined/24/000000/chevron-right.png"
        alt="chevron-right"
        className="w-4 h-4"
      />
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      <img
        src="https://img.icons8.com/material-outlined/24/000000/chevron-right.png"
        alt="chevron-right"
        className="w-4 h-4"
      />
    </div>
  )
}

export default Breadcrumb