import React from 'react'
import RedX from './RedX'
import Paperfly from './Paperfly'
import Edes from './Edes.js'

const TrackingService = (props) => {
    const { trackId, deliverService } = props

    return (
        <div className='mx-auto'>
            {
                deliverService === "EDS API" ? <Edes /> : deliverService === "Redx API" ? <RedX />
                    : deliverService === "Paperfly API" ? <Paperfly /> : <div>Comming soon...</div>
            }
        </div>
    )
}

export default TrackingService