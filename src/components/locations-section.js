import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Modal from 'react-modal';

class LocationsSection extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
        const { data } = this.props; 
        
      return (
          <div>
            {data.allWordpressWpLocation.edges.map((post) => (
                <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <Modal 
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                    <h3>{post.node.title}</h3>
                </Modal>
            </div>
            ))}
          </div>
      );
    }
  }
  
  export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpLocation {
                edges {
                    node {
                        title
                    }
                }
            }
        }
      `}
      render={data => <LocationsSection data={data} {...props} />}
    />
  );