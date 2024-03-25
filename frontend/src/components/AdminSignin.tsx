import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AdminSignin = () => {
  const [email, setEmail] = useState<any>('') 
  const [password, setPassword] = useState<any>('') 
  const navigate = useNavigate();

  const validateForm = (e: any) => {
    e.preventDefault()

      axios
      .post('https://anime-databases-apis.onrender.com/admin/adminsignin', {
        email,
        pass: password
      })
      .then((response) => {
        console.log(response.data.message)
        navigate('/adminPage/addadmin')
      })
      .catch((error) => {
        console.log(error)
        navigate('/adminPage/addadmin')

      })
  }

  return (
    <main className="w-screen h-screen bg-teal-950 flex flex-col align-middle justify-center">
        <section className="w-2/5 mx-auto rounded-md overflow-hidden border-2 border-teal-900 ">
            <h1 className="text-lg font-semibold text-white bg-teal-900 p-5 w-full mx-auto">Login</h1>
            <form onSubmit={validateForm} className="w-full mx-auto overflow-hidden p-5">
              <input type="text" placeholder="Email" name="email" value={email} className="w-full rounded-sm h-10 mb-4 p-2 text-white bg-teal-900 outline-none" onChange={(e) => setEmail(e.target.value)} required/>
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-sm h-10 mb-4 p-2 text-white bg-teal-900 outline-none" required/>
              <button type="submit" className="text-white p-2 bg-teal-800 rounded-sm block">Login</button>
            </form>
        </section>
    </main>
  )
}

export default AdminSignin
