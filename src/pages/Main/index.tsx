import Socials from '../../components/Socials';
import style from './style.module.scss'

function Main({ colorTheme, setColorTheme }) {

  function changeColorTheme() {
    if (colorTheme === 'dark') {
      setColorTheme('light');
    } else {
      setColorTheme('dark');
    }
  }

  return (
    <div className={colorTheme === 'dark' ? `${style.container} ${style.darkMode}` : `${style.container} ${style.lightMode}`}>
      <div>
        <div className={style.header}>
          <h1>devfinder</h1>
          <button onClick={() => changeColorTheme()}>
            {colorTheme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
        </div>

        <div className={style.search__bar}>
          <input type="text" placeholder='Search GitHub username...' />
          <button className={style.search__button}>Search</button>
        </div>

        <div className={style.main__content}>
          <div className={style.user__info}>
            <img src="" alt="profile-pic" />
            <div>
              <h3>User Name</h3>
              <p>user @username </p>
              <p>Join date</p>
            </div>
          </div>

          <div className={style.user__description}>
            <p>
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
              Donec odio. Quisque volutpat mattis eros.
            </p>
          </div>

          <div className={style.user__git__info}>
            <div>
              <p>Repos</p>
              <p>Num</p>
            </div>

            <div>
              <p>Followers</p>
              <p>Num</p>
            </div>

            <div>
              <p>Following</p>
              <p>Num</p>
            </div>
          </div>

          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Main;