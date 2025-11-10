// The Revenge of [Hall Of Fame](https://www.codewars.com/kata/59879e52704c4f96540000c1)
// >" *It should be good to enter the Hall of Fame . . .* "
// Bad news ! Top places are ALL occupied by the same player ! ! ! 
// ( som'thin' like myjinKing, myKingxin, or whatosoever ).

// Things should change now !

// Task
// Create a class HallOfFame(size, players) with list property and add method.

// list give list of size players in the form "Name: score", sorted by score in 
// descending order and name in ascending order in case of same score.

// add( player ) lets. . . add a player to the list.

// a player is a 2-items array : [name, score]
// if score is lesser than last player of the list then player is not added.
// if name is yet in list, score of this player is updated if new score is 
// better than previous and other players may stay in list.
// if a new player is added or a score is changed the list should be re-sorted
// at last, add method return the object itself (to permit chaining methods).
// HallOfFame constructor may have 2 arguments : size and players.

// size (default 5) defines the maximum size of the list (listcan't take more than size players)
// players if provided, should be added to the list.
// If no players (or not enough players) are provided "empty slots" should returns empty strings.
// Examples
// var top3 = new HallOfFame(3, [["Ada",99], ["Bob","42], ["Clo", 101], ["Dan", 3]])
//   // ... create a Hall of size 3 and (try) to add 4 players

// top3.list -> ["Clo: 101", "Ada: 99", "Bob: 42"] 
//   // ... only 3 players kept 'cause size of the Hall is 3

// top3.add(["Dan",54])
// top3.list -> ["Clo: 101", "Ada: 99", "Dan: 54"]
//   // ... Dan entered the list 'cause is score is better than Bob's

// top3.add(["Eva",75]).add(["Fox",120]).list --> ["Fox: 120","Clo: 101","Ada: 99"]
//   // ... 2 new players added using chaining

// var top5 = new HallOfFame(); 
//   // ... create an empty Hall of size 5 (by default)

// top5.add(["A",4]).add(["E",3]).add(["I",1])
//   // ... add 3 players

// top5.list --> ["A: 4","E: 3","I: 1","",""] 
//   // ... 2 "empty players" at the end of list

// top5.add(["S",5]).add(["T",7])
// top5.list --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
//   // ... 2 more players, no more "empty slot"

// top5.add(["A", 25]).list --> ["A: 25","T: 7","S: 5","E: 3","I: 1"]
//   // ... add "A" with a new (better) score then it moves to 1st place !

// top5.add(["T", 6]).list --> ["A: 25","T: 7","S: 5","E: 3","I: 1"]
//   // ... try to add "S" with a lesser score then no change !  
// Note: The ECMAScript 2015 Class model given in "Initial Soluion" is not mandatory, 
// feel free to choose the way to implement HallOfFame.

// Will you enter it ?

class HallOfFame{
    constructor(size = 5, players = []) {
        if(size > 5){
            size = 5;
        }
        this.size = size;
        this.players = players;
    }

    get list() {
        let order = this.players.sort((a,b)=> {
            if(b[1] === a[1]) return a[0].localeCompare(b[0]);
            return b[1] - a[1];
        });
        let arr = [];
        for(let [key, value] of order){
            arr.push(`${key}: ${value}`);
        }
        if(arr.length>this.size){
            return arr.slice(0, this.size);
        }
        else if( arr.length < this.size){
            while(arr.length < this.size){
                arr.push("");
            }
            return arr;
        }
        else return arr;
    }

    add(player) {
        if(this.players.some(x=>x[0] === player[0])){
            let index = this.players.findIndex(x=> x[0] === player[0]);
            
            if(player[1] > this.players[index][1]){
                this.players[index][1] = player[1];
            }
        }
        else{
            if(this.players.length < this.size){
                this.players.push(player);
            }
            else{
                let order = this.players.sort((a,b)=> {
                    if(b[1] === a[1]) return a[0].localeCompare(b[0]);
                    return b[1] - a[1];
                });
                let final = this.players.length - 1;
                if(this.players[final][1] < player[1]){
                    this.players[final] = player;
                }
            }
        }
        return this;
    }
}