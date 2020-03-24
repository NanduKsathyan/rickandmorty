import React, { Fragment, Component } from 'react'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";
import envVariable from '../../config/env'
import CharacterItem from './characterItem'
import CardLoader from '../loader/cardListTemplate'
import sortIcon from '../../assets/sorting.png'
class Characters extends Component {
    overFlowHelper = {
        overflow: 'inherit'
    }
    state = {
        originalData: [],
        tempData: [],
        search: '',
        loader: true
    }
    componentDidMount() {
        this.callApi()
    }
    callApi = () => {
        axios.get(envVariable.urls.character)
            .then(res => {
                this.setState({
                    originalData: res.data.results,
                    loader: false,
                    tempData: res.data.results
                })
            })
    }
    onchange = (e) => {
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        })
    }
    fetchMoreData = () => {
        console.log("Hello")
    }
    sortBy = () => {
        let newList = this.state.tempData.reverse()
        this.setState({
            tempData: newList.sort((a, b) => a.id > b.id)
        })
    }
    filterBy = (val, type) => {

        switch (type) {
            case 'gender': if (val !== 'all') {
                let data;
                data = this.state.originalData ? this.state.originalData.filter(item => {
                    return item.gender.toLowerCase() === val.toLowerCase();
                }) : null
                this.setState({
                    tempData: data
                })
            } else {
                this.setState({
                    tempData: this.state.originalData
                })
            }
                break;
            default:
                if (val !== 'all') {
                    let data;
                    data = this.state.originalData ? this.state.originalData.filter(item => {
                        return item.species.toLowerCase() === val.toLowerCase();
                    }) : null
                    this.setState({
                        tempData: data
                    })
                } else {
                    this.setState({
                        tempData: this.state.originalData
                    })
                }
                break;


        }


    }
    render() {
        return (
            <Fragment>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search By Name..." onChange={(e) => this.onchange(e)} />
                        <div className="input-group-btn">
                            <button className="btn btn-default">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </form>

                <div className='dark-mode'>
                    <div className='horizontal-center'>
                        <div className='filter'>
                            <span className='grey-text'>Sort By Id :</span>
                            <img src={sortIcon} alt='icon' className='sort-icon hand' onClick={this.sortBy} />
                            <span className='grey-text'> | </span>
                            <span className='grey-text'>Gender : </span>
                            <label className="checkbox-inline orange-text"><input type="radio" onClick={() => this.filterBy('male', 'gender')} name="optradio" /> Male </label>
                            <label className="checkbox-inline orange-text"><input type="radio" name="optradio" onClick={() => this.filterBy('female', 'gender')} /> Female</label>
                            <span className='grey-text'> | </span>
                            <span className='grey-text'> Species : </span>
                            <label className="checkbox-inline orange-text"><input type="radio" onClick={() => this.filterBy('human', 'species')} name="optradio" /> Human </label>
                            <label className="checkbox-inline orange-text"><input type="radio" name="optradio" onClick={() => this.filterBy('alien', 'species')} /> Alien</label>
                            <span className='grey-text'> | </span>
                            <button className='btn btn-sm orange-btn' onClick={() => this.filterBy('all', 'species')}>Reset</button>
                        </div>
                    </div>
                    {/* <InfiniteScroll
                        style={this.overFlowHelper}
                        dataLength={this.state.data.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={this.state.loader ? (<div className="text-center adjust-top" role="status"><i className="fa fa-refresh fa-spin text-center fa-4x"></i></div>) : null}
                    > */}
                    {this.state.loader ? <div className='container'><CardLoader /></div> : <Fragment>
                        {this.state.tempData && this.state.tempData.length ?
                            <CharacterItem info={this.state.tempData} search={this.state.search} /> : null}
                    </Fragment>}
                    {/* </InfiniteScroll> */}
                    <p>By Nandu </p>
                </div>


            </Fragment>


        )
    }

}
export default Characters