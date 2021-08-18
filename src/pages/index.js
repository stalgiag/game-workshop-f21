import React from 'react';
import Nav from '../components/Nav';
import VideoLogo from '../components/VideoLogo';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import '../styles/main.scss';

import { tabs } from '../utilities/globals';
import Body from '../components/Body';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: tabs.SYLLABUS
    };

    this.updateFocus = this.updateFocus.bind(this);
  }

  updateFocus(newFocus) {
    this.setState({activeTab: newFocus});
  }

  getLogo

  render() {
    return (
      <>
        <header>
          <Nav activeTab={this.state.activeTab} onChange={this.updateFocus}/>
          <VideoLogo />
        </header>
        <Body section={this.state.activeTab} />
        <Marquee />
        <Footer />
      </>
    );
  }
}

export default Home;