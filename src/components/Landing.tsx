import styles from "./Landing.module.css";

interface LandingProps {
  updateLoc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  time: string;
  location: string;
  updatePage: (newPage: string) => void;
}

function Landing({ updateLoc, time, location, updatePage }: LandingProps) {
  return (
    <div className={styles.landingPage}>
      <h1 className={styles.time}>{time}</h1>
      <p className={styles.landingText}>Input your location below</p>
      <form className={styles.locationForm}>
        <input
          placeholder="Rome, Italy"
          className={styles.locationBox}
          type="text"
          value={location}
          onChange={updateLoc}
          maxLength={64}
        />
        <img
          className={styles.searchButton}
          src="/src/assets/searchButton.svg"
          alt=""
          onClick={() => updatePage("weather")}
        />
      </form>
    </div>
  );
}

export default Landing;
