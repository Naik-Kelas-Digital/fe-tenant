import React from 'react'

const RegisterForm = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center ">
    {/* Black overlayy */}
    {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form className="space-y-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password Baru</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Sudah punya akun?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login di sini
          </a>
        </p>
      </div>
      </div>
    </div>
  )
}

export default RegisterForm