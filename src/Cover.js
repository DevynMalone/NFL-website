import React, { Component } from "react";

//component
import Menu from "./Menu";

const header = {
    title: 'Breaking News: NFL postpones three Week 15 games due to COVID-19 surge',
    subTitle: 'A surge in COVID-19 cases across the NFL and United States as a whole has resulted in the postponement of multiple Week 15 games. ',
    link: 'https://www.nfl.com/news/nfl-covid-week-15-game-postponement'
}

const menuList = [
{
    name:'News',
    link: 'https://www.nfl.com/news/'
},{
    name:'Scores',
    link: 'https://www.nfl.com/scores/'
},{
    name:'Schedule',
    link: 'https://www.nfl.com/schedules/'
},{
    name:'Videos',
    link: 'https://www.nfl.com/videos/'
},{
    name:'Teams',
    link: 'https://www.nfl.com/teams/'
},{
    name:'Players',
    link: 'https://www.nfl.com/players/'
},{
    name:'Stats',
    link:'https://www.nfl.com/stats/player-stats/'
},{
    name:'Standings',
    link:'https://www.nfl.com/standings/'
},{
    name:'Playoff Picture',
    link:'https://www.nfl.com/standings/playoff-picture'
},{
    name:'Game Pass',
    link:'https://www.nfl.com/game-pass/'
},
]

const displayMenuList = menuList.map((menu,index)=>{
    return (
       <Menu key={index} link={menu.link} name={menu.name} />
    )
})

class Cover extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://www.nfl.com/">
                  <img src="https://www.pngfind.com/pngs/m/300-3009798_nfl-logo-national-football-league-nfl-small-nfl.png" alt="Logo" title='logo'/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active">
                        <a>Home</a>
                      </li>
                      {displayMenuList}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img
                    src="https://media.pff.com/2021/05/QB-Ranks.jpeg?w=956&h=538"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">{header.title}</h1>
                <h2 className="subtitle is-4">
                  {header.subTitle}
                </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined" href={header.link}>
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <a>WHAT'S TRENDING</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;