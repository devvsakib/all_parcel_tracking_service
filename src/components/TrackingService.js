import React from 'react'
import RedX from './RedX'
import EDS from './EDS'
import Paperfly from './Paperfly'

const TrackingService = (props) => {
    const { trackId, deliverService } = props

    return (
        <div className='mx-auto'>
            {
                deliverService === "EDS API" ? <EDS trackId={trackId} /> : deliverService === "Redx API" ? <RedX trackId={trackId} />
                    : deliverService === "Paperfly API" ? <Paperfly trackId={trackId} /> : <div>Not Found</div>
            }
        </div>
    )
}

export default TrackingService