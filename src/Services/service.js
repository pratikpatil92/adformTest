

import data from "./data.json"

const Service={
    getData: ()=>{
        return new Promise((resolve, reject)=>{
              resolve({
                  data
              })
        })
    }
}

export default Service