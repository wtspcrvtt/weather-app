function WeatherDisplay({ data }: {data: any }) {
    
    return (
        <div>
            <h1>Погода в {data.name}</h1>
            <p>{data.temp}</p>
            <p>{data.description}</p>
        </div>
    )
}


export default WeatherDisplay;