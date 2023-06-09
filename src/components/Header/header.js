import React from 'react'

const header = () => {
  return (
    <>
        <header class="p-3 bg-dark text-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justfy-content-lg-start">
                    <a>

                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" class="nav-link px-2 text-secondary">Home</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-2 text-secondary">Profile</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-2 text-secondary">About</a>
                        </li>
                    </ul>
                    <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
      
    </>
  )
}

export default header
