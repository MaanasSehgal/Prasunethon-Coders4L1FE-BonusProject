"use server"

const getIncidents = async ({
    south, west, north, east
}) => {
    const response = await fetch(`http://dev.virtualearth.net/REST/v1/Traffic/Incidents/${south},${west},${north},${east}   ?key=${process.env.Bing_API}`)
    return response.json()
    }

export default getIncidents
