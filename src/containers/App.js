import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll';
import MainPage from '../components/MainPage';
import {connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

import './App.css';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
}
   } 





class App extends React.Component {
    state ={
        count: 1
    }
    
    componentDidMount(){
        this.props.onRequestRobots();
                console.log(this.props);
        

    }



   


    render() {
        return (<MainPage { ...this.props }/>)
    
      
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( App) ;