import React from 'react'
import RedX from './RedX'
import Paperfly from './Paperfly'
import Edes from './Edes'

const TrackingService = (props) => {
    const { trackId, deliverService } = props

    return (
        <div className='mx-auto'>
            {
                deliverService === "EDS API" ? <Edes trackId={trackId} /> : deliverService === "Redx API" ? <RedX trackId={trackId} />
                    : deliverService === "Paperfly API" ? <Paperfly trackId={trackId} /> : <div>Comming soon...</div>
            }
        </div>
    )
}

export default TrackingService