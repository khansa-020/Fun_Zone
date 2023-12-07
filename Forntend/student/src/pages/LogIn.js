import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/")
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };
      const response = await axios.post("http://localhost:5000/api/user/userLogin", formData);
      if(response){
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/dashboard")
      }else{
        alert("Plz Enter correct details")
      }
    } 
    catch (error) {
      console.error('Plz Enter correct details:', error.message, error.response);
    }
  };

  return (
    <div className='container' id="login">
      <form onSubmit={handleLogin}>
        <h2 className='text-center pt-3'>SIGN IN</h2>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <p className='pt-3'>Don't have an Account yet <Link to='/signup'>Log I</Link></p>
      </form>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function LogIn() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(()=>{
//     const auth = localStorage.getItem('user');
//     if(auth){
//       navigate("/")
//     }
//   })
//   const formData = { email, password };
//   const handleLogin = async (e) => {
//     e.preventDefault();

//    try {
//             const response = await fetch('http://localhost:5000', {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json', },
//                 body: JSON.stringify(formData),
//             });
//             if (response.ok) {console.log('Registration successful!');
//             // Redirect to the home page after successful registration
//             navigate('/Dashboard');
//             } else { console.error('Registration failed.');
//             } }
//         catch (error) {console.error('Error during registration:', error);
//         } };


//   return (
//     <div className='container' id="login">
//       <form onSubmit={handleLogin}>
//         <h2 className='text-center pt-3'>LOG IN</h2>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" id="exampleInputEmail1"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//         <p className='pt-3'>Don't have an Account yet <Link to='/signUp'>SIGN UP</Link></p>
//       </form>
//     </div>
//   );
// }