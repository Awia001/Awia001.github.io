$("#theButton").click(function() {
	var value = $("#steamID").val();
	$.ajax({
	url: "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B030F6B15D785FA5743BA896A745B795&steamid=76561197970373462&format=json&callback=?",
	type: 'GET',
	success: function(resp){
	}});
})
	
	
