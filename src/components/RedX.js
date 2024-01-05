import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import axios from 'axios'
import { FaCheck } from 'react-icons/fa'

const RedX = () => {
    // PFL-BD0009426886 - Paperfly
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const api = "https://api.redx.com.bd/parcel-track/"
    const trackId = "20A719SU147NN"
    const url = api + trackId

    const handleSearch = (trackId) => {
        fetchData(trackId)
    }
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.post(url)
            setData(res.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    console.log(data)
    return (
        <div>
            <SearchBox
                handleSearch={handleSearch}
            />
            <div>
                <div class="grid grid-cols-3 gap-10  items-start">
                    <div class="col-span-2 flex gap-10">
                        <div>
                            <div class="title-wrapper">
                                <p class="title css-8fv8tv">Tracking ID</p>
                            </div>
                            <div class="subtitle-wrapper">
                                <p class="subtitle">20A719SU147NN</p>
                            </div>
                        </div>
                        <div class="col-span-3 tracking-wrapper">
                            <div class="vertical-timeline vertical-timeline--one-column grid gap-10">
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <div style={{ background: "rgb(19, 160, 84)", color: "rgb(255, 255, 255)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </div>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class=" css-1gcmzp2">পার্সেল ডেলিভারি সম্পন্ন হয়েছে</p>
                                        <span class="date current">Jul, 23rd 2020 01:21 pm</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <div style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </div>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">ডেলিভারি এজেন্ট Sorwar(8801887943111) ডেলিভারির জন্যে বের হয়েছে</p>
                                        <span class="date">Jul, 23rd 2020 11:45 am</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি Chittagong Hub এ রিসিভ করা হয়েছে</p>
                                        <span class="date">Jul, 23rd 2020 09:43 am</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি Chittagong Hub এ পাঠানো হচ্ছে</p>
                                        <span class="date">Jul, 21st 2020 06:34 pm</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি undefined এ পাঠানো হচ্ছে</p>
                                        <span class="date">Jul, 21st 2020 06:39 am</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি Tejgaon Central Mother Hub এ রিসিভ করা হয়েছে</p>
                                        <span class="date">Jul, 21st 2020 03:41 am</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি Tejgaon Central Mother Hub এ পাঠানো হচ্ছে</p>
                                        <span class="date">Jul, 20th 2020 11:42 pm</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <div style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </div>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেল পিকাপ সম্পন্ন হয়েছে </p>
                                        <span class="date">Jul, 20th 2020 11:03 pm</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                                <div id="" class="vertical-timeline-element--work vertical-timeline-element">
                                    <span style={{ background: "rgb(255, 255, 255)", color: "rgb(19, 160, 84)" }} class="vertical-timeline-element-icon bounce-in"><span role="img" aria-label="check" class="anticon check"><FaCheck /></span>
                                    </span>
                                    <div class="vertical-timeline-element-content bounce-in">
                                        <div class="vertical-timeline-element-content-arrow"></div>
                                        <p class="vertical-timeline-element-title css-1gcmzp2">পার্সেলটি পিকআপের জন্য মার্চেন্ট অনুরোধ করেছেন</p>
                                        <span class="date">Jul, 19th 2020 04:38 pm</span><span class="vertical-timeline-element-date"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="customer-info">
                            <div class="header">
                                <div class="caption">
                                    <p class="title css-1y8lftn">কাস্টমার ও অর্ডারের বিস্তারিত তথ্য</p>
                                </div>
                            </div>
                            <div class=" css-11rzb4j"></div>
                            <div class="body">
                                <div class="info-wrapper">
                                    <div class="title-wrapper">
                                        <p class="title css-1ti8for">Parcel ID</p>
                                    </div>
                                    <div class="subtitle-wrapper">
                                        <p class="subtitle css-1ti8for">20A719SU147NN</p>
                                    </div>
                                </div>
                                <div class="info-wrapper">
                                    <div class="title-wrapper">
                                        <p class="title css-1ti8for">Customer Name</p>
                                    </div>
                                    <div class="subtitle-wrapper">
                                        <p class="subtitle css-1ti8for">Nahid Ahmed Chowdhury </p>
                                    </div>
                                </div>
                                <div class="info-wrapper">
                                    <div class="title-wrapper">
                                        <p class="title css-1ti8for">Area</p>
                                    </div>
                                    <div class="subtitle-wrapper">
                                        <p class="subtitle css-1ti8for">Chittagong Sadar</p>
                                    </div>
                                </div>
                                <div class="info-wrapper">
                                    <div class="title-wrapper">
                                        <p class="title css-1ti8for">Placed At</p>
                                    </div>
                                    <div class="subtitle-wrapper">
                                        <p class="subtitle css-1ti8for">Jul, 19th, 2020 04:38 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedX