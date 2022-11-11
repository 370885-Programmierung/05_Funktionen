"use strict";

/***** Funktionen 01 *****/

//  callee
function test() {
    console.log ("Hallo");
}

//  call
// test();

function ausgabeName (personName, personNachname) //Parameter
{
    console.log ("Hallo " + personName + " " + personNachname);
}
 ausgabeName("Sabine", "Eitel") //Aufruf mit Argunment