import React, {useEffect, useState} from 'react';

import '../App.css';
import {search} from "../services/services";

function call_search() {

    search({
        params:{
            term: "food",
            latitude: 37.786882,
            longitude: -122.399972

        }

    }).then(({data}:any)=>{
        console.log("starting data")
        console.log(data);
        console.log("done sending data")
    })
}
export default  call_search