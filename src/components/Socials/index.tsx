import style from './style.module.scss'

function Socials() {
  return (
    <div className={style.user__socials}>
      <div>
        <img src="" alt="location" />
        <p>Location</p>
      </div>

      <div>
        <img src="" alt="github" />
        <p>github</p>
      </div>

      <div>
        <img src="" alt="twitter" />
        <p>Twitter</p>
      </div>

      <div>
        <img src="" alt="current-company" />
        <p>@companyname</p>
      </div>

    </div>
  );
}

export default Socials;