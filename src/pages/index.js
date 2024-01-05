import React, { useState } from "react"
import Test from "@/components/Test"
import TrackingService from "@/components/TrackingService"

const services = [
    {
        name: "EDS API"
    },
    {
        name: "Redx API"
    },
    {
        name: "Paperfly API"
    },
    {
        name: "Pathao API"
    },
    {
        name: "Shohoz API"
    },
    {
        name: "Jod API"
    },
    {
        name: "Chaldal API"
    },
    {
        name: "Dhaka Courier API"
    },
    {
        name: "Sundarban API"
    },
    {
        name: "S.A Paribahan API"
    }
]

export default function Home() {

    const [trackId, setTrackId] = useState("")
    const [deliverService, setDeliverService] = useState("EDS API")


    return (
        <main className="grid  min-h-screen p-24 w-full">
            <div className="mb-5 mx-auto">
                <h1 className="text-2xl font-bold mb-4">Track your parcel</h1>
                <div>
                    <div className="flex">
                        <select className="border border-gray-200  outline-none p-2 rounded-md" onChange={(e) => setDeliverService(e.target.value)}>
                            {services.map((service, index) => (
                                <option key={index} value={service.name}>{service.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full">
                <TrackingService
                    trackId={trackId}
                    deliverService={deliverService}
                />
            </div>
        </main>
    )
}
