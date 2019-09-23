let favoriteMovie = {
    id: 1,
    nameOfMovie: 'Forest Gump',
    runTime: 180,
    genre: 'PG13',
    characters: {
        characterInfo: {
            character: [
                {
                character: 1,
                name: 'Forest Gump',
                age: 40,
                    items: [{
                        itemone:'leg braces', 
                         itemtwo: 'red hat'}]
        },
        {
                character: 2,
                name: 'Lieutenant Dan',
                age: 43,
                    items: [{
                        itemone: 'whisky',
                        itemtwo: 'cigar' }]
        }        
    ]
    }
}

}


//console.log("All Data:",favoriteMovie)

console.log("Movie Name:",favoriteMovie.nameOfMovie),
console.log(favoriteMovie.runTime),
console.log(favoriteMovie.characters.characterInfo.character),
console.log(favoriteMovie.characters.characterInfo.character[1].name),
console.log(favoriteMovie.characters.characterInfo.character[1].items.itemone)





