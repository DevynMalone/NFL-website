import React, { Component } from 'react';

class Gamelist extends Component {
    render () {
        return(
            <div className="tile is-parent" key={this.props.index}>
                            <article className="tile is-child box">
                                <p className="title">{this.props.team1}</p>
                                <p className="title">{this.props.team2}</p>
                                <p className="subtitle">{this.props.date}</p>
                                <a className="button is-small is-info is-outlined " href={this.props.link}>
                    View
                  </a>
                            </article>
                        </div>
        )
    }
}

export default Gamelist;