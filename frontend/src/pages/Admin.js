import React from 'react'
import {connect} from 'react-redux'

//From pirateship's site "How does the squarespace intergration work"

// Once your Squarespace store is connected, 
// when you go to the Ship page in Pirate Ship and click Import from Squarespace 
// (or Import from Integrations if you have mutliple platforms connected) 
// you'll see every unshipped order that's currently in your Squarespace store.

const Admin = ({products}) => {
    return (
        <div className="container">
            <h3>Admin </h3>
            <div className="mx-auto">
                <button className="btn btn-primary float-right">Add New Candle</button>
                <div className="row">
                    {/* {products.map((product, i)=>
                        <div key={i}>{null}</div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    products:state.products.products
})

export default connect(mapStateToProps,null)(Admin)
