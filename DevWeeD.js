//$(".frontPage").append(
//    '<div class="mainWindow"><div class="logo"><div class="name-logo">DevWeeD<br>FarmProj</div></div><div class="button playGame">START</div><div class="button scores">DIFFIC</div></div>'
//); //create main window

//$(".frontPage").append('<div class="mainWindow"><div class="unitFrame"><div class="unitHeader"><div class="unitCoins"></div><div class="unitLevel"></div><div class="unitUpgrade"><div class="upgradeIcon"></div></div</div><div class="unitImage"></div></div></div>');
//create UNITS WINDOW

/*var UNITS = [
    {        unitName: first, unitId: 1, unitLevel: 1, unitFactor: 1, unitImage:  },
    {        unitName: second, unitId: 2, unitLevel: 1, unitFactor: 2, unitImage:  },
    {        unitName: third, unitId: 3, unitLevel: 1, unitFactor: 3, unitImage:  },
    {        unitName: fourth, unitId: 4, unitLevel: 1, unitFactor: 4, unitImage:  },
    {        unitName: fifth, unitId: 5, unitLevel: 1, unitFactor: 5, unitImage:  },
    {        unitName: sixth, unitId: 6, unitLevel: 1, unitFactor: 6, unitImage:  },
    {        unitName: seventh, unitId: 7, unitLevel: 1, unitFactor: 7, unitImage:  },
    {        unitName: eighth, unitId: 8, unitLevel: 1, unitFactor: 8, unitImage:  },
    {        unitName: ninth, unitId: 9, unitLevel: 1, unitFactor: 9, unitImage:  }
]
*/

 //var unitsModel = [1,2,3,4,5,6,7,8,9];

 var unitsId = 0;
 for(i=0; i<3; i++){
 for(j=0; j<3; j++){
 $(".mainWindow").append('<div class="unitFrame" data-id="'+unitsId+'"><div class="unitHeader"><div class="unitCoins"></div><div class="unitLevel"></div><div class="unitUpgrade"><div class="upgradeIcon"></div></div</div><div class="unitImage"></div></div>');

 unitsId++;
 }
 $('.mainWindow').append('<br>')
 }

//$(".frontPage").append('<div class="mainWindow"><div class="unitFrame" data-id="'+unitsId+'"><div class="unitHeader"><div class="unitCoins"></div><div class="unitLevel"></div><div class="unitUpgrade"><div class="upgradeIcon"></div></div</div><div class="unitImage"></div></div></div>');











/*
var unitsModel = [1,2,3,4,5,6,7,8,9];

var unitsId = 0;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            $('.mainWindow').append('<div class="units" data-id="'+unitsId+'"></div>')
            unitsId++;
        }
        $('.mainWindow').append('<br>')
    }
*/ //add units