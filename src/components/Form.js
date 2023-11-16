import React, {Component} from "react";
import axios from 'axios';
//import md5 from 'md5';
//const md5 = require('md5');
import Cookies from 'universal-cookie';



const baseUrl="http://localhost:3006/api/v1/users/";
const cookies = new Cookies();


const backgroundStyle = {
  backgroundColor: '#146c94',
};

class Form extends Component {

  state={
    form:{
      name:'',
      password:''
    }
  }

  handleChange=async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }

    })
    console.log(this.state.form);
  }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {name: this.state.form.name, password: this.state.form.password}})
    .then(response=>{
      return(response.data);
    })
    .then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id',respuesta.id, {path: "/"});
        cookies.set('name',respuesta.name, {path: "/"});
        cookies.set('last_name',respuesta.last_name, {path: "/"});
        cookies.set('email',respuesta.email, {path: "/"});
        cookies.set('phone_number',respuesta.id, {path: "/"});
        cookies.set('save',respuesta.save, {path: "/"});
        alert(`Bienvenido a lookstyle ${respuesta.name} ${response.last_name}`);
        window.location.href="./prueba"

      }else{
        alert('el usuario o la contraseña son incorrectos')
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }


  render() {
    return (
      <div className="flex justify-center items-center h-screen" style={backgroundStyle} >
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className='w-full max-w-md md:max-w-lg xl:max-w-2xl px-6 md:px-8 py-8 rounded-3xl bg-white border-2 border-gray-100'>

          <h1 className='text-3xl md:text-5xl font-semibold text-center mb-4'>Bienvenido a LookStyle</h1>

          <p className='text-sm md:text-lg text-gray-500 text-center mb-6'>Bienvenido, Por favor ingresa tus datos.</p>

          <div className='mt-6'>
            <div className='mb-4'>
              <label className='text-base md:text-lg font-medium'>UserName</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                placeholder="Ingresa Email"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='text-base md:text-lg font-medium'>Password</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                placeholder="Ingresa Contraseña"
                type={"password"}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className='mt-4 md:mt-6 flex justify-between items-center'>
              <div>
                <input type="checkbox" id='remember' />
                <label className='ml-2 text-base font-medium' htmlFor="remember">Recuérdame</label>
              </div>
              <button className='text-base text-violet-500'>Recuperar Contraseña</button>
            </div>
            <div className='mt-6 flex flex-col gap-4'>
              <button
                className='w-full py-3 md:py-4 bg-violet-500 rounded-xl text-white font-semibold text-lg' onClick={()=> this.iniciarSesion()}>
                Iniciar Sesión
              </button>
              <button
                className='w-full flex items-center justify-center gap-2 py-3 md:py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                  <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                  <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                  <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />

                </svg>
                Inicia Sesión con Google
              </button>
            </div>
            <div className='mt-6 flex justify-center items-center'>
              <p className='text-base'>¿No tienes cuenta? </p>
              <button className='ml-2 text-base text-violet-500'>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
}


export default Form;

