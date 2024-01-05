import React from 'react'
import RedX from './RedX'
import Paperfly from './Paperfly'
import EdesApi from './EdesApi.js'

const TrackingService = (props) => {
    const { trackId, deliverService } = props

    return (
        <div className='mx-auto'>
            {
                deliverService === "EDS API" ? <EdesApi /> : deliverService === "Redx API" ? <RedX />
                    : deliverService === "Paperfly API" ? <Paperfly /> : <div>Comming soon...</div>
            }
        </div>
    )
}

export default TrackingService