import { useState } from 'react'
import { useRouter } from "next/router"
import VisualizerHeaderContext from '../../context/VisualizerHeaderContext'


function VisualizerContextWrapper({ children, visualizer_areas }) {

    // router definitaion
    const Router = useRouter()

    const menuItemAreas = visualizer_areas

    const [active, setActive] = useState(menuItemAreas.active)

    const updateActive = (set_active_id) => {
        for (let key in menuItemAreas.data) {
            if(menuItemAreas.data[key].id === set_active_id){
                if(menuItemAreas.data[key]){
                    setActive(menuItemAreas.data[key])
                }else{
                    window.location = '/404'
                }
                break
            }
        }
    }

    return (
        <VisualizerHeaderContext.Provider value={{ menuItemAreas, active, setActive, updateActive }}>
            {children}
        </VisualizerHeaderContext.Provider>
    )

}

export default VisualizerContextWrapper

