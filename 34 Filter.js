// filters()
// create a new array

// const shows = ['lupin','cobra kai','24','Mr.robot'];

// const displayShows =shows.filter((word) => word.length > 5);

// console.log(displayShows);



// const showDisplay = document.querySelector('.display')

// showDisplay.innerHTML = displayShows;


const shows =[
    {
        name :'abababa',
        series : 1,
        episode :5
    },
    {
        name :'lupin',
        series : 4,
        episode :6
    },
    {
        name :'24',
        series : 7,
        episode :9
    },
    {
        name :'mr.robot',
        series : 7,
        episode :33
    }
];

const  displayShows = shows.filter(show => show.series > 2);
console.log(displayShows);


const showDisplay = document.querySelector('.display')