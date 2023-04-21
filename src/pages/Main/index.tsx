import style from './style.module.scss'
import LocationIcon from '../../assets/icon-location.svg';
import GitHubIcon from '../../assets/icon-website.svg';
import TwitterIcon from '../../assets/icon-twitter.svg';
import CompanyIcon from '../../assets/icon-company.svg';
import AvatarDefault from '../../assets/avatar-default.svg';
import LupaIcon from '../../assets/lupa.svg';
import Moon from '../../assets/icon-moon.svg';
import Sun from '../../assets/icon-sun.svg';

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
            <img src={colorTheme === 'dark' ? Sun : Moon} alt="theme" />
          </button>
        </div>

        <div className={style.search__bar}>
          <img src={LupaIcon} alt="lupa" />
          <input type="text" placeholder='Search GitHub username...' />
          <button className={style.search__button}>Search</button>
        </div>

        <div className={style.main__content}>
          <div className={style.user__info}>
            <img src={AvatarDefault} alt="profile-pic" />
            <div>
              <h3>User Name</h3>
              <p className={style.username}>user @username </p>
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
              <b>Num</b>
            </div>

            <div>
              <p>Followers</p>
              <b>Num</b>
            </div>

            <div>
              <p>Following</p>
              <b>Num</b>
            </div>
          </div>

          <div className={style.user__socials}>
            <div>
              <img src={LocationIcon} alt="location" />
              <p>Location</p>
            </div>

            <div>
              <img src={GitHubIcon} alt="github" />
              <p>github</p>
            </div>

            <div>
              <img src={TwitterIcon} alt="twitter" />
              <p>Twitter</p>
            </div>

            <div>
              <img src={CompanyIcon} alt="current-company" />
              <p>@companyname</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;