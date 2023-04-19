import React, { useState } from "react";
import { apiTmdb } from "../api/movieapi";
import Logo from "../assets/logo/Logo FUll dark.png"

const SignInModal = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleLogin(event) {
    event.preventDefault();
    await apiTmdb
      .get("authentication/token/new")
      .then((response1) => {
        apiTmdb
          .post("authentication/token/validate_with_login", {
            username: username,
            password: password,
            request_token: response1.data.request_token,
          })
          .then((response2) => {
            apiTmdb
              .post("authentication/session/new", {
                request_token: response2.data.request_token,
              })
              .then((response3) => {
                localStorage.setItem("session", JSON.stringify(response3.data.session_id));
                apiTmdb
                  .get("account", {
                    params: { session_id: response3.data.session_id },
                  })
                  .then((response4) => {
                    localStorage.setItem("account", JSON.stringify(response4.data));
                    window.location.reload();

                    console.log(response4.data);
                  });
              });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  

  return (
    <>
    <div className="login-bg login-page">
        <div className="login-bubble  ">
        <div className="head-item"><img src={Logo} alt="" style="width: 200px"/>
        <div style="color: white;"><p>Selamat datang di OnFlix. Untuk mengakses Fitur lebih banyak, silahkan untuk melakukan log in menggunakan email dan password yang sudah terdaftar.</p></div>
        </div>
        
        <div className="col-12 d-flex form-contact">
            <form className="row g-3 form-content" style="color: white;">
            {/* <!-- Email--> */}
            <div>
                <label for="inputEmail4" className="form-label">Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" />
            </div>
    
                {/* <!-- Password --> */}
            <div>
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="d-grid gap-2">
              <button onClick={(e) => handleLogin(e)} type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            </form>
        </div>
        </div>

      </div>


    </>
  );
};

export default SignInModal;