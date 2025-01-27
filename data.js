
const sportsTeams = [
    
    // Soccer Teams
    { name: "Arsenal", sport: "Soccer", league: "Premier League" },
    { name: "Aston Villa", sport: "Soccer", league: "Premier League" },
    { name: "Bournemouth", sport: "Soccer", league: "Premier League" },
    { name: "Brentford", sport: "Soccer", league: "Premier League" },
    { name: "Brighton", sport: "Soccer", league: "Premier League" },
    { name: "Chelsea", sport: "Soccer", league: "Premier League" },
    { name: "Crystal Palace", sport: "Soccer", league: "Premier League" },
    { name: "Everton", sport: "Soccer", league: "Premier League" },
    { name: "Fulham", sport: "Soccer", league: "Premier League" },
    { name: "Ipswich Town", sport: "Soccer", league: "Premier League" },
    { name: "Leicester City", sport: "Soccer", league: "Premier League" },
    { name: "Liverpool", sport: "Soccer", league: "Premier League" },
    { name: "Manchester City", sport: "Soccer", league: "Premier League" },
    { name: "Manchester United", sport: "Soccer", league: "Premier League" },
    { name: "Newcastle United", sport: "Soccer", league: "Premier League" },
    { name: "Nottingham Forest", sport: "Soccer", league: "Premier League" },
    { name: "Southampton", sport: "Soccer", league: "Premier League" },
    { name: "Tottenham Hotspur", sport: "Soccer", league: "Premier League" },
    { name: "West Ham United", sport: "Soccer", league: "Premier League" },
    { name: "Wolverhampton Wanderers", sport: "Soccer", league: "Premier League" },
  
    // Baseball Teams
    { name: "Arizona Diamondbacks", sport: "Baseball", league: "MLB" },
    { name: "Atlanta Braves", sport: "Baseball", league: "MLB" },
    { name: "Baltimore Orioles", sport: "Baseball", league: "MLB" },
    { name: "Boston Red Sox", sport: "Baseball", league: "MLB" },
    { name: "Chicago White Sox", sport: "Baseball", league: "MLB" },
    { name: "Chicago Cubs", sport: "Baseball", league: "MLB" },
    { name: "Cincinnati Reds", sport: "Baseball", league: "MLB" },
    { name: "Cleveland Guardians", sport: "Baseball", league: "MLB" },
    { name: "Colorado Rockies", sport: "Baseball", league: "MLB" },
    { name: "Detroit Tigers", sport: "Baseball", league: "MLB" },
    { name: "Houston Astros", sport: "Baseball", league: "MLB" },
    { name: "Kansas City Royals", sport: "Baseball", league: "MLB" },
    { name: "Los Angeles Angels", sport: "Baseball", league: "MLB" },
    { name: "Los Angeles Dodgers", sport: "Baseball", league: "MLB" },
    { name: "Miami Marlins", sport: "Baseball", league: "MLB" },
    { name: "Milwaukee Brewers", sport: "Baseball", league: "MLB" },
    { name: "Minnesota Twins", sport: "Baseball", league: "MLB" },
    { name: "New York Yankees", sport: "Baseball", league: "MLB" },
    { name: "New York Mets", sport: "Baseball", league: "MLB" },
    { name: "Oakland Athletics", sport: "Baseball", league: "MLB" },
    { name: "Philadelphia Phillies", sport: "Baseball", league: "MLB" },
    { name: "Pittsburgh Pirates", sport: "Baseball", league: "MLB" },
    { name: "San Diego Padres", sport: "Baseball", league: "MLB" },
    { name: "San Francisco Giants", sport: "Baseball", league: "MLB" },
    { name: "Seattle Mariners", sport: "Baseball", league: "MLB" },
    { name: "St. Louis Cardinals", sport: "Baseball", league: "MLB" },
    { name: "Tampa Bay Rays", sport: "Baseball", league: "MLB" },
    { name: "Texas Rangers", sport: "Baseball", league: "MLB" },
    { name: "Toronto Blue Jays", sport: "Baseball", league: "MLB" },
    { name: "Washington Nationals", sport: "Baseball", league: "MLB" },
  
    // Basketball Teams
    { name: "Atlanta Hawks", sport: "Basketball", league: "NBA" },
    { name: "Boston Celtics", sport: "Basketball", league: "NBA" },
    { name: "Brooklyn Nets", sport: "Basketball", league: "NBA" },
    { name: "Charlotte Hornets", sport: "Basketball", league: "NBA" },
    { name: "Chicago Bulls", sport: "Basketball", league: "NBA" },
    { name: "Cleveland Cavaliers", sport: "Basketball", league: "NBA" },
    { name: "Dallas Mavericks", sport: "Basketball", league: "NBA" },
    { name: "Denver Nuggets", sport: "Basketball", league: "NBA" },
    { name: "Detroit Pistons", sport: "Basketball", league: "NBA" },
    { name: "Golden State Warriors", sport: "Basketball", league: "NBA" },
    { name: "Houston Rockets", sport: "Basketball", league: "NBA" },
    { name: "Indiana Pacers", sport: "Basketball", league: "NBA" },
    { name: "Los Angeles Clippers", sport: "Basketball", league: "NBA" },
    { name: "Los Angeles Lakers", sport: "Basketball", league: "NBA" },
    { name: "Memphis Grizzlies", sport: "Basketball", league: "NBA" },
    { name: "Miami Heat", sport: "Basketball", league: "NBA" },
    { name: "Milwaukee Bucks", sport: "Basketball", league: "NBA" },
    { name: "Minnesota Timberwolves", sport: "Basketball", league: "NBA" },
    { name: "New Orleans Pelicans", sport: "Basketball", league: "NBA" },
    { name: "New York Knicks", sport: "Basketball", league: "NBA" },
    { name: "Oklahoma City Thunder", sport: "Basketball", league: "NBA" },
    { name: "Orlando Magic", sport: "Basketball", league: "NBA" },
    { name: "Philadelphia 76ers", sport: "Basketball", league: "NBA" },
    { name: "Phoenix Suns", sport: "Basketball", league: "NBA" },
    { name: "Portland Trail Blazers", sport: "Basketball", league: "NBA" },
    { name: "Sacramento Kings", sport: "Basketball", league: "NBA" },
    { name: "San Antonio Spurs", sport: "Basketball", league: "NBA" },
    { name: "Toronto Raptors", sport: "Basketball", league: "NBA" },
    { name: "Utah Jazz", sport: "Basketball", league: "NBA" },
    { name: "Washington Wizards", sport: "Basketball", league: "NBA" },
  
    // Football Teams
    { name: "Arizona Cardinals", sport: "Football", league: "NFL" },
    { name: "Atlanta Falcons", sport: "Football", league: "NFL" },
    { name: "Baltimore Ravens", sport: "Football", league: "NFL" },
    { name: "Buffalo Bills", sport: "Football", league: "NFL" },
    { name: "Carolina Panthers", sport: "Football", league: "NFL" },
    { name: "Chicago Bears", sport: "Football", league: "NFL" },
    { name: "Cincinnati Bengals", sport: "Football", league: "NFL" },
    { name: "Cleveland Browns", sport: "Football", league: "NFL" },
    { name: "Dallas Cowboys", sport: "Football", league: "NFL" },
    { name: "Denver Broncos", sport: "Football", league: "NFL" },
    { name: "Detroit Lions", sport: "Football", league: "NFL" },
    { name: "Green Bay Packers", sport: "Football", league: "NFL" },
    { name: "Houston Texans", sport: "Football", league: "NFL" },
    { name: "Indianapolis Colts", sport: "Football", league: "NFL" },
    { name: "Jacksonville Jaguars", sport: "Football", league: "NFL" },
    { name: "Kansas City Chiefs", sport: "Football", league: "NFL" },
    { name: "Las Vegas Raiders", sport: "Football", league: "NFL" },
    { name: "Los Angeles Chargers", sport: "Football", league: "NFL" },
    { name: "Los Angeles Rams", sport: "Football", league: "NFL" },
    { name: "Miami Dolphins", sport: "Football", league: "NFL" },
    { name: "Minnesota Vikings", sport: "Football", league: "NFL" },
    { name: "New England Patriots", sport: "Football", league: "NFL" },
    { name: "New Orleans Saints", sport: "Football", league: "NFL" },
    { name: "New York Giants", sport: "Football", league: "NFL" },
    { name: "New York Jets", sport: "Football", league: "NFL" },
    { name: "Philadelphia Eagles", sport: "Football", league: "NFL" },
    { name: "Pittsburgh Steelers", sport: "Football", league: "NFL" },
    { name: "San Francisco 49ers", sport: "Football", league: "NFL" },
    { name: "Seattle Seahawks", sport: "Football", league: "NFL" },
    { name: "Tampa Bay Buccaneers", sport: "Football", league: "NFL" },
    { name: "Tennessee Titans", sport: "Football", league: "NFL" },
    { name: "Washington Commanders", sport: "Football", league: "NFL" },
  
    // Hockey Teams
    { name: "Anaheim Ducks", sport: "Hockey", league: "NHL" },
    { name: "Boston Bruins", sport: "Hockey", league: "NHL" },
    { name: "Buffalo Sabres", sport: "Hockey", league: "NHL" },
    { name: "Calgary Flames", sport: "Hockey", league: "NHL" },
    { name: "Carolina Hurricanes", sport: "Hockey", league: "NHL" },
    { name: "Chicago Blackhawks", sport: "Hockey", league: "NHL" },
    { name: "Colorado Avalanche", sport: "Hockey", league: "NHL" },
    { name: "Columbus Blue Jackets", sport: "Hockey", league: "NHL" },
    { name: "Dallas Stars", sport: "Hockey", league: "NHL" },
    { name: "Detroit Red Wings", sport: "Hockey", league: "NHL" },
    { name: "Edmonton Oilers", sport: "Hockey", league: "NHL" },
    { name: "Florida Panthers", sport: "Hockey", league: "NHL" },
    { name: "Los Angeles Kings", sport: "Hockey", league: "NHL" },
    { name: "Minnesota Wild", sport: "Hockey", league: "NHL" },
    { name: "Montreal Canadiens", sport: "Hockey", league: "NHL" },
    { name: "Nashville Predators", sport: "Hockey", league: "NHL" },
    { name: "New Jersey Devils", sport: "Hockey", league: "NHL" },
    { name: "New York Islanders", sport: "Hockey", league: "NHL" },
    { name: "New York Rangers", sport: "Hockey", league: "NHL" },
    { name: "Ottawa Senators", sport: "Hockey", league: "NHL" },
    { name: "Philadelphia Flyers", sport: "Hockey", league: "NHL" },
    { name: "Pittsburgh Penguins", sport: "Hockey", league: "NHL" },
    { name: "San Jose Sharks", sport: "Hockey", league: "NHL" },
    { name: "Seattle Kraken", sport: "Hockey", league: "NHL" },
    { name: "St. Louis Blues", sport: "Hockey", league: "NHL" },
    { name: "Tampa Bay Lightning", sport: "Hockey", league: "NHL" },
    { name: "Toronto Maple Leafs", sport: "Hockey", league: "NHL" },
    { name: "Utah Hockey Club", sport: "Hockey", league: "NHL" },
    { name: "Vancouver Canucks", sport: "Hockey", league: "NHL" },
    { name: "Vegas Golden Knights", sport: "Hockey", league: "NHL" },
    { name: "Washington Capitals", sport: "Hockey", league: "NHL" },
    { name: "Winnipeg Jets", sport: "Hockey", league: "NHL" },
  
    // Formula 1 Teams
    { name: "Red Bull Racing", sport: "Motorsport", league: "Formula 1" },
    { name: "Mercedes-AMG Petronas F1 Team", sport: "Motorsport", league: "Formula 1" },
    { name: "Scuderia Ferrari", sport: "Motorsport", league: "Formula 1" },
    { name: "McLaren F1 Team", sport: "Motorsport", league: "Formula 1" },
    { name: "Aston Martin Aramco Cognizant F1 Team", sport: "Motorsport", league: "Formula 1" },
    { name: "BWT Alpine F1 Team", sport: "Motorsport", league: "Formula 1" },
    { name: "Williams Racing", sport: "Motorsport", league: "Formula 1" },
    { name: "RB", sport: "Motorsport", league: "Formula 1" },
    { name: "Alfa Romeo F1 Team Stake", sport: "Motorsport", league: "Formula 1" },
    { name: "Haas F1 Team", sport: "Motorsport", league: "Formula 1" }
];
  
  