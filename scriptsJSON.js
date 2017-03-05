

/*window.onload = function Load()
{
   
    //loop through each infoButton on page

    for (var j=0; j<4; j++)
        {
            var infoButton = document.getElementsByClassName("infoButton")[j];
            infoButton.addEventListener("click", displayActivityInfo);
    		infoButton.innerHTML="Learn More";//example if I want to change button text through js
            
        }
    
}*/

function displayActivityInfo(activities, buttonClass)
{
	switch ($(buttonClass).attr("class")){ 
		case "infoButton button1":
			alert(activities.activities[0].activity1 + " Price: $" + activities.activities[0].cost + " " +
		" The tourguide is " + activities.activities[0].tourguide + ".");
			break;

		case "infoButton button2":
			alert(activities.activities[1].activity2 + " Price: $" + activities.activities[1].cost + " " +
		" The tourguide is " + activities.activities[1].tourguide + ".");
			break;

		case "infoButton button3":
			alert(activities.activities[2].activity3 + " Price: $" + activities.activities[2].cost + " " +
		" The tourguide is " + activities.activities[2].tourguide + ".");
			break;

		case "infoButton button4":
			alert(activities.activities[3].activity4 + " Price: $" + activities.activities[3].cost + " " +
		" The tourguide is " + activities.activities[3].tourguide + ".");
			break;



}

}


function createActivityInfo()
{
   return {

			"activities": [
			{
				"activity1" : "Paddleboarding", 
				"cost": 50,
				"tourguide": "Deb"
			},
			
			{
				"activity2" : "Cycling", 
				"cost": 30,
				"tourguide": "Libby"
			}, 

			{
				"activity3" : "Snowshoing", 
				"cost": 30,
				"tourguide": "Deb"

			},

			{
				"activity4" : "Hiking", 
				"cost": 20,
				"tourguide": "Deb"
			}
		]
	};
}	


$(document).ready(function()
  {
  	//var activities = createActivityInfo();
  	$(".infoButton").click(function()
  	{
  		var activityOBJ = createActivityInfo();
  		displayActivityInfo(activityOBJ, $(this));
  	});

  });


