import React, { Fragment } from 'react'

class MoreMoney extends React.Component {
    render(){
        return (
            <div style={{textAlign: "center"}}>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                    Add da Money!:
                    <input type="text"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}

export default MoreMoney