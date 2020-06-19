import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectList from './ProjectList';
import ArtList from './ArtList';

export class Portfolio extends Component {

  render() {

    const projects = this.props.projects;
    return (
      <div className="portfolio_wrapper" id="portfolio">
        <div className="container">
          <div className="portfolio_section">
            <h2 className="t-h2">Projects</h2>
            <div className="divider" />
            <ProjectList projects={projects.projects} />
            <hr />
          </div>

          <div className="art_section">
            <h2 className="t-h2">Some of my art works</h2>
            <div className="divider" />
            <ArtList illustrator={projects.illustrator} />
            <h4 className="t-h4 see-more">
              See more in<a href="https://dribbble.com/supriyaamatya" target="_blank" rel="noopener noreferrer"> Dribble</a>
              <span>
                <svg className="dribble-icon" width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <path d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5z" fill="#E74D89" />
                  <path d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6zM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1zM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68z" fill="#B2215A" />
                </svg>
              </span>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

export default connect(mapStateToProps)(Portfolio);
