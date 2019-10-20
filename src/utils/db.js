import { Component } from 'react'

class DBProvider extends Component {
  state = {
    submissions:{}
  }

  store = window.localStorage

  componentDidMount(){
    const submissions = Object.keys(this.store).map(key => JSON.parse(this.store.getItem(key)))
    this.setState({ submissions })
  }

  getAll = () => this.state.submissions

  getItem = key => JSON.parse(this.store.getItem(key))

  setItem = ({ key, val }) => {
    this.store.setItem(key, JSON.stringify(val))
    this.setState((prevState) => ({submissions: [...prevState.submissions, val]}))
  }

  render(){
    return this.props.children({ getAll : this.getAll, getItem: this.getItem, setItem: this.setItem })
  }
}

export default DBProvider