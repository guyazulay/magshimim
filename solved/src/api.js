const sensors = {
    humidity: "38",
    temperature:"28.2",
    pressure: "150",
    compass:"36",
    led_array: ["yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","","",
                "yellow","green","red","white","pink","blue","",""
    ]
}


export const getSensorsState = () => {
    //TBD: api call using axios
    const promise = new Promise((resolve, reject)=>{
        resolve(
            {
                data: sensors
            }
        )
    })

    return promise
}

export const updateLedColor = (index,color) => {
    const promise = new Promise((resolve, reject)=>{
        sensors["led_array"][index] = color
        resolve()
    })

    return promise
}