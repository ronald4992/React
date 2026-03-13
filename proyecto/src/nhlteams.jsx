import React, { useState, useEffect } from "react";
import "./App.css";

const teams = [
  { name: "Anaheim Ducks", abbr: "ANA" },
  { name: "Arizona Coyotes", abbr: "ARI" },
  { name: "Boston Bruins", abbr: "BOS" },
  { name: "Buffalo Sabres", abbr: "BUF" },
  { name: "Calgary Flames", abbr: "CGY" },
  { name: "Carolina Hurricanes", abbr: "CAR" },
  { name: "Chicago Blackhawks", abbr: "CHI" },
  { name: "Colorado Avalanche", abbr: "COL" },
  { name: "Columbus Blue Jackets", abbr: "CBJ" },
  { name: "Dallas Stars", abbr: "DAL" },
  { name: "Detroit Red Wings", abbr: "DET" },
  { name: "Edmonton Oilers", abbr: "EDM" },
  { name: "Florida Panthers", abbr: "FLA" },
  { name: "Los Angeles Kings", abbr: "LAK" },
  { name: "Minnesota Wild", abbr: "MIN" },
  { name: "Montreal Canadiens", abbr: "MTL" },
  { name: "Nashville Predators", abbr: "NSH" },
  { name: "New Jersey Devils", abbr: "NJD" },
  { name: "New York Islanders", abbr: "NYI" },
  { name: "New York Rangers", abbr: "NYR" },
  { name: "Ottawa Senators", abbr: "OTT" },
  { name: "Philadelphia Flyers", abbr: "PHI" },
  { name: "Pittsburgh Penguins", abbr: "PIT" },
  { name: "San Jose Sharks", abbr: "SJS" },
  { name: "Seattle Kraken", abbr: "SEA" },
  { name: "St. Louis Blues", abbr: "STL" },
  { name: "Tampa Bay Lightning", abbr: "TBL" },
  { name: "Toronto Maple Leafs", abbr: "TOR" },
  { name: "Vancouver Canucks", abbr: "VAN" },
  { name: "Vegas Golden Knights", abbr: "VGK" },
  { name: "Washington Capitals", abbr: "WSH" },
  { name: "Winnipeg Jets", abbr: "WPG" }
];

function getRandomTeam() {
  return teams[Math.floor(Math.random() * teams.length)];
}

function getOptions(correct) {
  const options = [correct];

  while (options.length < 4) {
    const random = getRandomTeam();
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  return options.sort(() => Math.random() - 0.5);
}

function NHLTeams() {
  const [currentTeam, setCurrentTeam] = useState(getRandomTeam());
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setOptions(getOptions(currentTeam));
  }, [currentTeam]);

  function handleAnswer(team) {
    if (team.name === currentTeam.name) {
      setScore(score + 1);
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Wrong!");
    }

    setTimeout(() => {
      setCurrentTeam(getRandomTeam());
      setMessage("");
    }, 1200);
  }

  const logoUrl = `https://assets.nhle.com/logos/nhl/svg/${currentTeam.abbr}_light.svg`;

  return (
    <div className="container">
      <h1>NHL Logo Quiz 🏒</h1>

      <h2>Score: {score}</h2>

      <div className="logo-container">
        <img src={logoUrl} alt="team logo" className="logo" />
      </div>

      <div className="options">
        {options.map((team) => (
          <button
            key={team.name}
            onClick={() => handleAnswer(team)}
            className="option-btn"
          >
            {team.name}
          </button>
        ))}
      </div>

      <h3>{message}</h3>
    </div>
  );
}

export default NHLTeams;