import React from 'react'

const Signup = () => {
  return (
    <>
    <section className='signup'>
        <div class="container mt-5">
            <div className='signup-content'>
                <div className='signup-form'>
                    <h2 className='form-tittle'>Signup</h2>
                    <form className='register-form' id='register-form'>

                        <div className='form-group'>
                      <label htmlFor='name'>
                      <i class="zmdi zmdi-account material-icons-name"></i>
                      </label>
                     <input type='text' name="name" id="name" autoComplete='off' placeholder='Your Name'
                     />
                        </div>  

                    <div className='form-group'>
                      <label htmlFor='phone'>
                      <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                      </label>
                     <input type='number' name="phone" id="phone" autoComplete='off' placeholder='Your Phone'
                     />
                        </div>  

                        <div className='form-group'>
                      <label htmlFor='email'>
                      <i class="zmdi zmdi-email material-icons-name"></i>
                      </label>
                     <input type='emai' name="email" id="email" autoComplete='off' placeholder='Your Email'
                     />
                    </div>  

                        <div className='form-group'>
                      <label htmlFor='password'>
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                      </label>
                     <input type='password' name="password" id="password" autoComplete='off' placeholder='Your Password'
                     />
                         </div>        

                            <div className='form-group'>
                      <label htmlFor='cpassword'>
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                      </label>
                     <input type='password' name="cpassword" id="cpassword" autoComplete='off' placeholder='Confirm Password'
                     />
                         </div>               

                        <div className='form-group form-button'> 
                        <input  type='submit' name="signup" id="signup" value='Register' className='form-submit'/>


                        </div>
                    </form>
                    <div className='form-link'>
                        <figure>
                            <img src='{signpic' alr="registration pic"/>
                        </figure>
                        </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup

