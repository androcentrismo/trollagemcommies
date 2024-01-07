const geo = [{ "code": "vn", "lat": -23.384869630861022, "lon": -46.62154733653317}];

var room = HBInit({
	roomName: "☭ ‎ NEGROS TÊM QI BAIXO ‎ ☭",
	maxPlayers: 30,
	noPlayer: true, // Remove host player (recommended!)
    public: true,
    password: 'pretapretona11',
    geo: geo[0],
    token: roomArgs['token'] 
});
room.setDefaultStadium("Big");
room.setScoreLimit(5);
room.setTimeLimit(0);

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() { 
  // Get all players
  var players = room.getPlayerList();
  if ( players.length == 0 ) return; // No players left, do nothing.
  if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

room.onPlayerJoin = function(player) {
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
}
