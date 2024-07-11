import React from 'react'
import InputField from './InputField'
import { googleLogin } from '../../api/UserAPI'

export default function RegisterForm() {


  const google = ()=>{
     googleLogin()
  }


  return (
    <div class="container">
      <button onClick={google}>Google</button>
      <form>
        <div class="mb-3">
          <InputField type="email" name="Email" placeholde="name@example.com"/>
        </div>
        <div class="mb-3">
          <InputField type="password" name="Password" placeholde="password"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}
