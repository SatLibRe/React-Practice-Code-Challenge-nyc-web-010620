import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer