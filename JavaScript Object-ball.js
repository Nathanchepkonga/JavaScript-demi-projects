// Sample data structure (hypothetical)
const basketballStats = {
    players: [
        { name: "Player A", points: 20, steals: 3 },
        { name: "Player B", points: 18, steals: 2 },
        { name: "Player C", points: 25, steals: 4 }
    ],
    teams: [
        { name: "Team X", points: 60 },
        { name: "Team Y", points: 55 }
    ]
};

// Function to find the player with the most points
function mostPointsScored(stats) {
    let maxPoints = 0;
    let playerWithMostPoints = null;

    stats.players.forEach(player => {
        if (player.points > maxPoints) {
            maxPoints = player.points;
            playerWithMostPoints = player.name;
        }
    });

    return playerWithMostPoints;
}

// Function to find the team with the most points
function winningTeam(stats) {
    let maxPoints = 0;
    let teamWithMostPoints = null;

    stats.teams.forEach(team => {
        if (team.points > maxPoints) {
            maxPoints = team.points;
            teamWithMostPoints = team.name;
        }
    });

    return teamWithMostPoints;
}

// Function to find the player with the longest name
function playerWithLongestName(stats) {
    let longestName = "";
    let playerWithLongestName = null;

    stats.players.forEach(player => {
        if (player.name.length > longestName.length) {
            longestName = player.name;
            playerWithLongestName = player.name;
        }
    });

    return playerWithLongestName;
}

// Super Bonus: Function to check if player with longest name had the most steals
function doesLongNameStealATon(stats) {
    let longestName = "";
    let playerWithLongestName = null;
    let maxSteals = 0;
    let playerWithMostSteals = null;

    stats.players.forEach(player => {
        if (player.name.length > longestName.length) {
            longestName = player.name;
            playerWithLongestName = player.name;
        }
        if (player.steals > maxSteals) {
            maxSteals = player.steals;
            playerWithMostSteals = player.name;
        }
    });

    return playerWithLongestName === playerWithMostSteals;
}

// Testing the functions with the sample data
console.log("Player with the most points:", mostPointsScored(basketballStats));
console.log("Winning team:", winningTeam(basketballStats));
console.log("Player with the longest name:", playerWithLongestName(basketballStats));
console.log("Does player with longest name steal a ton?", doesLongNameStealATon(basketballStats));
