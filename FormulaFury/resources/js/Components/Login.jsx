import { useForm } from '@inertiajs/react';
import '../../css/loginOrria/register.css';
import fondo from '@/../assets/video/video.mp4';

function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: ''
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <>
      <div className='container text-center'>
        <video className="video-background" autoPlay muted loop>
          <source src={fondo} type="video/mp4" />
        </video>

       

        <div>
        <div className='sesioa'>
        <a href="/">

        <div className='atzeraDiv'>
        <p>&lt; </p> <p  className='atzera'>Atzera</p>
        </div>
        </a>

        <p>Ongi etorri!</p>
        </div>
          <form className='login-form' onSubmit={submit}>
            <input
              className='login-input'
              type="email"
              name="email"
              placeholder='E-mail'
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}

            <input
              className='login-input'
              type="password"
              name="password"
              placeholder='Pasahitza'
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}

            <div className='onartu'>
  <input type="checkbox" name="onartu" id="check" className="black-checkbox circular-checkbox" />
  <p>
    Irakurri dut eta onartzen dut Formula Fury enpresak zure datuekin 
    <a href=""> nahi duena </a> egiten ahal duela
  </p>
</div>

            <button className='sartu' type='submit' disabled={processing}>Sartu</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;