import React from 'react'

function Signs() {
  return (
    <div>
        <div className='signin'>
        <form>
            <div>
                <label>Username:</label>
                <input />
            </div>
            <div>
                <label>Password:</label>
                <input />
            </div>
            <button>SignIn</button>
        </form>
        </div>
        <div className='signup'>
        <form>
            <div>
                <label>Username:</label>
                <input />
            </div>
            <div>
                <label>Password:</label>
                <input />
            </div>
            <button>Signup</button>
        </form>
        <div>
        <h2>Auths</h2>
        <button>Google</button>
        <button>Facebook</button>
        <button>Apple</button>
        </div>
        </div>
    </div>
  )
}

export default Signs