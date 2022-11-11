"use strict";

/***** Funktionen 01 *****/

//  callee
function test() {
    console.log ("Hallo");
}

//  call
// test();

function ausgabeName (personName) //Parameter
{
    console.log ("Hallo " + personName);

    return;
}

function zuweisungName(personName)
{
    personName = prompt("Bitte den Namend er Person eingeben:");

    return personName;
}


 ausgabeName(zuweisungName()); //Aufruf mit Argunment