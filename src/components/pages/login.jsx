import s from './pages.module.css'

function LoginPage(props) {
  
  return (
    <>
      <div className={s.row}>
        <div className={s.column}>
          <p className="text text_type_main-large">
            Сверстай меня!
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
