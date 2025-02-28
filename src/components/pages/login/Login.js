import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import DateTime from "../../common/DateTime";
import Sidebar2 from "../../common/Sidebar2";
import  LoginData from './LoginData'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100" style={{ backgroundColor: '#0d1b2a' }}>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <div className="">
        {/* <Sidebar2 className="w-2/4" /> */}
        <main className="flex-grow rounded-lg shadow-md">
          <div className="">
            <LoginData></LoginData>
          </div>
        </main>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Breadcrumb />
          {/* <DateTime /> */}
        </div>
      </footer>
    </div>
  );
};

export default Login;