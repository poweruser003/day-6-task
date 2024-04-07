
    
    // a) Write a constructor for the class Movie, which takes a String representing
    //  the title of the movie, a String representing the studio, and a String representing the 
    // rating as its arguments, and sets the respective class properties to these values.

    // b) The constructor for the class Movie will set the class property rating 
    // to "PG" as default when no rating is provided.
     
    class Movie{
        constructor(title= " ",studio= " ",rating= "PG"){
        this.title= title;
        this.studio= studio;
        this.rating= rating;
        }
    }
        var M1= new Movie("Lucy","Universal Pictures")
        var M2= new Movie("Martian","Century Studios")
        var M3= new Movie("Wall-E","Walt Disney")
        // var M4= new Movie("Interstellar","Warner Bros")
        // var M5= new Movie("Enchanto","Walt Disney")
        console.log(M1)


        // c) Write a method getPG, which takes an array of base type Movie 
        // as its argument,and returns a new array of only those movies in the
        //  input array with a rating of "PG". 
        // You may assume the input array is full of Movie instances. The returned 
        // array need not be full.
        
        class Movie{
            constructor(title= " ",studio= " ",rating= " "){
            this.title= title;
            this.studio= studio;
            this.rating= rating;
            }
            getPG() {
                return movies.filter(Movie => Movie.rating === "PG");
              }
              

            }
        
            var M1= new Movie("Lucy","Universal Pictures","PG")
            var M2= new Movie("Martian","Century Studios","PG")
            var M3= new Movie("Wall-E","Walt Disney","U")
            var M4= new Movie("Interstellar","Warner Bros","PG")
            var M5= new Movie("Enchanto","Walt Disney","U")
            var movies= [{M1},{M2},{M3},{M4},{M5}]

            console.log(movies.getPG())

        
        // d) Write a piece of code that creates an instance of the class Movie 
        // with the title “Casino Royale”, the studio “Eon Productions”, and 
        // the rating “PG­13
        
        class Movie{
            constructor(title= " ",studio= " ",rating= " "){
            this.title= title;
            this.studio= studio;
            this.rating= rating;
            }
    }
            var M1= new Movie("Casino Royale","Eon Productions","PG13")
            
            console.log(M1)