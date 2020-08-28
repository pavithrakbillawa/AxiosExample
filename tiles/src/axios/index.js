import React, { Component } from 'react';
import AxiosConfig from './configuratins';
import axios from 'axios';
import ExampleTile from './components';
import {Col } from "antd";


export default class AxiosExample extends Component {
    state = {
        getData: {
            [AxiosConfig.DATA_FIELD.PROFILE]: undefined
        },

        postData: {
            [AxiosConfig.DATA_FIELD.PROFILE]: undefined
        },

        putData: {
            [AxiosConfig.DATA_FIELD.PROFILE]: undefined
        },

        deleteData: {
            [AxiosConfig.DATA_FIELD.PROFILE]: undefined
        },
    };

    performGetCall=()=>{
        axios.get(AxiosConfig.URLs.GET_ALL)
            .then(response =>
                this.setState({
                    getData: {
                        ...this.state.getData,
                        [AxiosConfig.DATA_FIELD.PROFILE]: response.data,
                    },
                })

            );
    };
    

    performPostCall=()=>{
        axios.post(AxiosConfig.URLs.POST)
            .then(response =>
                this.setState({
                    postData: {
                        ...this.state.postData,
                        [AxiosConfig.DATA_FIELD.PROFILE]: response.data,
                    },
                })

            );
    };

    

    performPutCall=()=>{
        axios.put(AxiosConfig.URLs.PUT)
            .then(response =>
                this.setState({
                    putData: {
                        ...this.state.putData,
                        [AxiosConfig.DATA_FIELD.PROFILE]: response.data,
                    },
                })

            );
    };
    

    performDeleteCall=()=>{
        axios.delete(AxiosConfig.URLs.DELETE)
            .then(response =>
                this.setState({
                    deleteData: {
                        ...this.state.deleteData,
                        [AxiosConfig.DATA_FIELD.PROFILE]: response.data,
                    },
                })

            );
    };
    

    componentWillMount() {
        this.performGetCall();
        this.performPostCall();
        this.performPutCall();
        this.performDeleteCall();
    }

    render() {
        let DisplayTiles = (
            this.state.getData[AxiosConfig.DATA_FIELD.PROFILE] || []
            ).map((item) => {
            return (
                
                <Col style={{textAlign:'center'}}>
                    <ExampleTile profileData={item} />
                </Col>
                
            ); 
        });



        return (
            <div>
                {DisplayTiles}
                {/* <div id="getData">
                    <h1>Get Data</h1>
                    <p>
                        {AxiosConfig.DATA_FIELD.PROFILE}Data:{""}
                        {JSON.stringify(
                            this.state.getData[
                            [AxiosConfig.DATA_FIELD.PROFILE]
                            ]
                        )}
                    </p>
                </div> */}

                {/* <div id="postData">
                    <h1>Post Data</h1>
                    <p>
                        {AxiosConfig.DATA_FIELD.PROFILE}Data:{""}
                        {JSON.stringify(
                            this.state.postData[
                            [AxiosConfig.DATA_FIELD.PROFILE]
                            ]
                        )}
                    </p>
                </div> */}

                {/* <div id="putData">
                    <h1>Put Data</h1>
                    <p>
                        {AxiosConfig.DATA_FIELD.PROFILE}Data:{""}
                        {JSON.stringify(
                            this.state.putData[
                            [AxiosConfig.DATA_FIELD.PROFILE]
                            ]
                        )}
                    </p>
                </div> */}

                {/* <div id="deleteData">
                    <h1>Delete Data</h1>
                    <p>
                        {AxiosConfig.DATA_FIELD.PROFILE}Data:{""}
                        {JSON.stringify(
                            this.state.deleteData[
                            [AxiosConfig.DATA_FIELD.PROFILE]
                            ]
                        )}
                    </p>
                </div> */}
            </div>
        )

    }
}

