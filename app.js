angular.module('goldRushApp', []);

angular.module('goldRushApp');

angular.module('goldRushApp').controller('goldCtrl', goldFunc);

function goldFunc() {
    var gold = this;
    gold.userEvent = function(john) {
        gold.pageX = john.pageX;
        gold.pageY = john.pageY;
        //console.log(john.pageX, gold.pageY);
        gold.panPoints.push([gold.pageX, gold.pageY]);

        console.log(gold.panPoints);

    };
    gold.panPoints = [];
}






/* function getCoordinates(event) {
    var cX = event.clientX;
    var sX = event.screenX;
    var cY = event.clientY;
    var sY = event.screenY;
    console.log(cX);
    var bullseye = document.getElementById('bullseye');
    var icon = document.createElement('img');
    CSSStyleDeclaration
}*/
