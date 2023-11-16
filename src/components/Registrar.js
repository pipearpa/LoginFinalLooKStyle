import * as React from 'react';
import { ReactComponent as LogoIcon } from '../LogoLookStyle.svg';
//import FacebookIcon from 'url/to/facebook-icon.svg';
//import GoogleIcon from 'url/to/google-icon.svg';

export default function Registrar() {
  const handleRegistro = (e) => {
    e.preventDefault();
    // lógica para registrar al usuario
    // console.log('Usuario registrado');
  };
  const backgroundStyle = {
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/013/501/104/non_2x/gradient-blue-color-background-or-gradient-blue-wallpaper-free-vector.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="font-sans" >
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100" style={backgroundStyle}>
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Registrate <LogoIcon className="  w-12 h-12 mr-4"  />
            </label>
            <form method="#" action="#" className="mt-10">

              <div>
                <input type="text" placeholder="Nombres" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <input type="email" placeholder="Correo electrónico" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <input type="password" placeholder="Contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <input type="password" placeholder="Confirmar contraseña" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105" onClick={handleRegistro}>
                  Registrarse
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                {/* <img src={FacebookIcon} alt="Facebook" className="inline-block w-6 h-6 mr-2" /> */}
                  Facebook
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                {/* <img src={GoogleIcon} alt="Google" className="inline-block w-6 h-6 mr-2" /> */}
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿Ya tienes una cuenta?</label>
                  <a href="#" className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
