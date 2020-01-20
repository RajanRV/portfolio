import React from 'react';
import Preloader from './components/preloader';
import NavBar from './components/nav-bar';
import Head from './components/head';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
class App extends React.Component {
  state = {
    education : [
      {
          title : "Bachelor of Engineering",
          subtitle1 : 'Govt. Engineering College Modasa',
          subtitle2 : '2016 - 2019',
          description : ''
      },
      {
          title : "Diploma",
          subtitle1 : 'Govt. Polytechnic Jamnagar',
          subtitle2 : '2013 - 2016',
          description : ''
      },
      {
          title : "Unigraphics NX CAD/CAM",
          subtitle1 : '--',
          subtitle2 : '2013',
          description : ''
      },
      {
          title : "SSC",
          subtitle1 : 'Sankalp High School',
          subtitle2 : '2012 - 2013',
          description : ''
      }
    ],
    skills : [
      {
        name: "Professional",
        items: [
          {
            name: 'NodeJs',
            percentage: '85%'
          },
          {
            name: 'ReactJs',
            percentage: '80%'
          },
          {
            name: 'PHP',
            percentage: '85%'
          },
          {
            name: 'Frameworks & CMS',
            percentage: '90%'
          }
        ]
      },
      {
        name: "Personal",
        items: [
          {
            name: 'Teamwork',
            percentage: '80%'
          },
          {
            name: 'Creativity',
            percentage: '90%'
          },
          {
            name: 'Dedication',
            percentage: '95%'
          },
          {
            name: 'Communication',
            percentage: '70%'
          }
        ]
      },
      {
        name: "Qualities",
        items: [
          {
            name: 'Problem Solving',
            percentage: '95%'
          },
          {
            name: 'Decision Making',
            percentage: '85%'
          },
          {
            name: 'Self-motivation',
            percentage: '90%'
          },
          {
            name: 'Leadership',
            percentage: '85%'
          }
        ]
      }
    ],
    experience : [
      {
          title : "Software Engineer",
          subtitle1 : 'Cybercom Creation',
          subtitle2 : '2019',
          description : 'Here i am responsible for R&D new technologies and implementing them and working on NodeJs, ReactJs, PHP projects using various frameworks and CMS.'
      },
      {
          title : "CAD Engineer",
          subtitle1 : '-',
          subtitle2 : '2015-2016',
          description : 'My responsibility was to create Parts Drawings with all dimentions.'
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Preloader />
        <header id="home">
          <NavBar />
          <Head />
        </header>
        <About/>
        <Education cardData={this.state.education}/>
        <Skills skills={this.state.skills}/>
        <Experience cardData={this.state.experience} />
        <section id="interest" className="section">
          <div className="container">
              <div className="section-title">
                  <h4 className="text-uppercase text-center"><i className="title-icon fa fa-heart"></i>Interest</h4>
              </div>

              <div id="interest-card" className="card">
                  <div className="card-content">
                      <p>
                          First of all I love music, country music is my favorite. Love watching
                          movies and playing games with my buddies. I spend quite a lot of time
                          in traveling and photography, these keeps me fresh for working environment.
                      </p>
                  </div>
                  <div className="row no-gutters">
                      <div className="col-md-2 col-sm-4 col-xs-6  box text-center">
                          <div className="interest-icon">
                              <i className="fa fa-music"></i>
                              <span>Music</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                          <div className="interest-icon-even">
                              <i className="fa fa-gamepad"></i>
                              <span>Gaming</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                          <div className="interest-icon">
                              <i className="fa fa-camera"></i>
                              <span>Photography</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                          <div className="interest-icon-even">
                              <i className="fa fa-futbol-o"></i>
                              <span>Football</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                          <div className="interest-icon">
                              <i className="fa fa-plane"></i>
                              <span>Traveling</span>
                          </div>
                      </div>
                      <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                          <div className="interest-icon-even">
                              <i className="fa fa-film"></i>
                              <span>Movies</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="interest" className="section">
          <div className="container">
              <div className="section-title">
                  <h4 className="text-uppercase text-center">Rest of it Coming Soon...</h4>
                  <center><p>(Under Construction)</p></center>
              </div>
          </div>
      </section>
    </div> 
    );
  }
}

// function App() {
//   return (
//     <div classNameNameNameNameNameName="App">
//       <Preloader />
//       <header id="home">
//         <NavBar />
//         <Head />
//         <About />
//         <Education />
//         <Skills />
//     </header>
//   </div>
//   );
// }

export default App;
