var movies=['RRR','Bahubali1','Bahubali2'];


document.getElementById("demo").innerHTML=movies;

// push()
console.log(movies, 'movies before push');
var oldMovies=movies.push('ega');
console.log(movies, 'movies after push');

// document.getElementById('demo1').innerHTML=oldMovies;
document.getElementById("demo1").innerHTML=movies;

console.log(oldMovies, 'oldMovies');
// pop()
movies.pop();
console.log(movies, 'movies after pop');
document.getElementById("demo2").innerHTML=movies;
// unshift()
movies.unshift("Sye");
console.log(movies, 'movies after unshift');
document.getElementById("demo3").innerHTML=movies;
//shift
movies.shift();
console.log(movies, 'movies after shift');
document.getElementById("demo4").innerHTML=movies;
//slice
var mv=movies.slice(0,2);
console.log(mv, 'movies after slice');
document.getElementById("demo5").innerHTML=mv;
//indexOf
movies.indexOf('Bahubali2');
console.log(movies.indexOf('Bahubali2'));
console.log(movies.indexOf('Eega'));  //Eega is not der in list.so,will get -1
var mv1=['RRR','bahubali1','bahubali2','RRR'];
console.log(movies.indexOf('RRR'));   //will get first enter value not secnd one

movies[100]='Yemadonga';
console.log(movies);
console.log(movies.length);






