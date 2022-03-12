import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Layout_VSG from '../components/Layout_VSG'
import { useRouter } from "next/router"
import axiosInstance from '../components/axios'
import ContextWrapper from '../components/contextWrappers/ContextWrapper'
import VisualizerContextWrapper from '../components/contextWrappers/VisualizerContextWrapper'


function MyApp({ Component, pageProps, products, visualizer_areas }) {

    const router = useRouter()
    const current_path = router.pathname.split('/')[1]

    // initialization of header (its present in all.js but it was only getting initialized once on the page refresh)
    // useEffect(() => {
    //     window.onload = function() {
    //     }
    // }, []);


    if(current_path === "visualizer"){
        return (
            <VisualizerContextWrapper visualizer_areas={ visualizer_areas }>
                <Layout_VSG>
                    <Component {...pageProps} />
                </Layout_VSG>
            </VisualizerContextWrapper>
        );
    } else {

        return (
            <ContextWrapper products={ products }>
                <VisualizerContextWrapper visualizer_areas={ visualizer_areas }>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </VisualizerContextWrapper>
            </ContextWrapper>
        );
    }

}

export default MyApp


MyApp.getInitialProps = async() => {

    // Main Header Products
    const Request = () => {

        return axiosInstance
            .get(`/product/`)
            .then((response) => {
                response = {
                    "statusCode": response.status,
                    "statusText": response.statusText,
                    "data": response.data,
                }
                return response
            })
            .catch(response => {
                if (response.response != undefined) {
                    response = {
                        "statusCode": response.response.status,
                        "statusText": response.response.statusText,
                        "data": response.response.data,
                    }
                }
                else {
                    response = {
                        "statusCode": "ECONNREFUSED",
                        "statusText": "Can not connect",
                        "data": "null",
                    }
                }
                return response
            });
    }
    const response = await Request()


    // Visualizer Header Area
    const Visualizer_Request = () => {

        return axiosInstance
            .get(`/visualizer_area/`)
            .then((response) => {
                response = {
                    "statusCode": response.status,
                    "statusText": response.statusText,
                    "data": response.data,
                }
                return response
            })
            .catch(response => {
                if (response.response != undefined) {
                    response = {
                        "statusCode": response.response.status,
                        "statusText": response.response.statusText,
                        "data": response.response.data,
                    }
                }
                else {
                    response = {
                        "statusCode": "ECONNREFUSED",
                        "statusText": "Can not connect",
                        "data": "null",
                    }
                }
                return response
            });
    }
    const visualizer_response = await Visualizer_Request()

    // fetch the active visualizer area
    let temp_active, active
    if(visualizer_response.statusCode === 200){
        for (let key in visualizer_response.data) {
            // console.log(key, visualizer_response.data[key])
            if(visualizer_response.data[key].is_active === true){
                temp_active = visualizer_response.data[key]
                break
            }
        }
    }

    if(temp_active){
        active = temp_active
    }else if (visualizer_response.statusCode === 200){
        console.log(visualizer_response.data)
        active = visualizer_response.data[0]
    }else{
        active = "null"
    }
    

    return {
        products: {
            statusCode : response.statusCode,
            data: response.data,
        },
        visualizer_areas: {
            statusCode : visualizer_response.statusCode,
            data: visualizer_response.data,
            active: active,
        }
    }

}
