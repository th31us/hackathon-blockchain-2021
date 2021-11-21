// change action 
import React from 'react';

export default class SearchInput extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        query: ''
      }
    }
    static contextTypes = {
        router: React.PropTypes.object
     }
    
    handleSearch = () => {
        this.context.router.push(`'https://ipfs.io/ipfs/${this.state.query}/some-action'`);
    }
    queryChange = (evt) => {
      this.setState({query: evt.target.value})
    }
  
    render() {
      const { handleSearch, placeholder } = this.props
      return (
        <form>
          <input id="site-search" type="search" placeholder={placeholder} value={this.state.query} onChange={this.queryChange} />
          <input type="submit" value="Search" onClick={this.handleSearch} />
        </form>
      )
    }
  }