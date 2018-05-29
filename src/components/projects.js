import React, { Component } from 'react';

import ProjectItem from './projectItem';

// import  { Navbar, Nav, NavItem,MenuItem, NavDropdown} from 'react-bootstrap';

class Projects extends Component {

    
  render() {

      let projectItems;

    if(this.props.projects){
        projectItems = this.props.projects.map(project =>{
            // console.log(project);
            return(
            <ProjectItem key={project.title} project={project}></ProjectItem>
            );
        });
    }

      console.log(this.props);
    return (
      <div className = "Projects">
         {/*<p> My projects {this.props.test}</p>*/}
         {projectItems}
      </div>
    );
  }
}

export default Projects;
