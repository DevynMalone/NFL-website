import React, { Component } from "react";

//components
import Gamelist from "./Gamelist";

const gameList = [
    {
        team1:'NEP 9-4',
        team2:'IND 7-6',
        date:'SAT  05:15 PM',
        link:'https://www.nfl.com/games/patriots-at-colts-2021-reg-15'
    },
    {
        team1:'DAL 9-4',
        team2:'NYG 4-9',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/cowboys-at-giants-2021-reg-15'
    },
    {
        team1:'HOU 2-11',
        team2:'JAX 2-11',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/texans-at-jaguars-2021-reg-15'
    },
    {
        team1:'TEN 9-4',
        team2:'PIT 6-6-1',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/titans-at-steelers-2021-reg-15'
    },
    {
        team1:'NYJ 3-10',
        team2:'MIA 6-7',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/jets-at-dolphins-2021-reg-15'
    },{
        team1:'ARI 10-3',
        team2:'DET 1-11',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/cardinals-at-lions-2021-reg-15'
    },{
        team1:'CAR 5-8',
        team2:'BUF 7-6',
        date:'SUN 10:00 AM',
        link:'https://www.nfl.com/games/panthers-at-bills-2021-reg-15'
    }
]

const displayGameList = gameList.map((game,index)=>{
    return(
        <Gamelist key={index} index={index} team1={game.team1} team2={game.team2} date={game.date} link={game.link} />
    )
})


class Gamecards extends Component {
    render(){
        return(
            
            <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                    {displayGameList}
                        
                    </div>
                </section>
        );
    }
}





export default Gamecards;