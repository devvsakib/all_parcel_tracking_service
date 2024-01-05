import React, { useState } from 'react'

const SearchBox = ({ handleSearch }) => {
    const [trackId, setTrackId] = useState("")

    return (

        <div className="flex mx-auto w-fit mb-5">
            <input
                value={trackId}
                onChange={(e) => {
                    setTrackId(e.target.value)
                }}
                type="text"
                placeholder="Enter your tracking ID"
                className="border border-gray-200 outline-none p-4 rounded-l-md"
            />
            <button
                disabled={trackId.length === 0}

                className="bg-blue-500 text-white px-4 rounded-r-md"
                onClick={() => handleSearch(trackId)}
            >Track</button>
        </div>

    )
}

export default SearchBox