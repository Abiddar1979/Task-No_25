/* Task # 25 : Alien colours #1: Imagin an alien was just shot down in a game .Creat 
a variable called alien_colour and assign it with a value of `green` , `yellow` or `red`.

*write an if statement to tesyt weather the alien's colour is green .If it is , print a massage that the player just earned 5 points .*/

let alien_colour: string = `green`;

if (alien_colour === `green`) {
    console.log("congralutions! you just earned 5 points!");
}

/* Write one version of this program that passes the if test and another that fails.(The Version that fails will have no output.)*/

alien_colour =`red`;

if (alien_colour === `green`) {
    console.log("congralujtions! you just earned 5 points");
}


