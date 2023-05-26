function Landing({ updateLoc, time, location }: any) {
  return (
    <div className="landing-page">
      <h1 className="time">{time}</h1>
      <p className="landing-p">Input your location below</p>
      <form className="location-form">
        <input
          placeholder="Rome, Italy"
          className="location-box"
          type="text"
          value={location}
          onChange={updateLoc}
          maxLength={64}
        />
        <img
          className="search-button"
          src="/src/assets/searchButton.svg"
          alt=""
        />
      </form>
    </div>
  );
}

export default Landing;
