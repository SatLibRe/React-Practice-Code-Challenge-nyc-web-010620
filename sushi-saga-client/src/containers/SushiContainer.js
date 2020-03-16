import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} handleEatSushi={s => props.handleEatSushi(s)}/>)
        }
        <MoreButton handleMoreSushi={props.handleMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer