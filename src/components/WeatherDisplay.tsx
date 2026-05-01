interface WeatherDisplayProps {
    data: {name: string; temp: number; description: string, feels_like: number } | null;
    isLoading: boolean;
    error: string | null;
    condition?: string;
}

function WeatherDisplay({ data, isLoading, error, condition }: WeatherDisplayProps) {
    if (isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }
    if (error) {
        return (
            <div>Ошибка: {error}</div>
        )
    }
    if (!data) {
        return (
            <div>Введите город</div>
        )
    }
    return (
        <div className={`weather-card ${condition || ''}`}>
            <h1>Weather in {data.name}</h1>
            <p>{data.temp}°C</p>
            <p>Feels like: {data.feels_like}°C</p>
            <p>{data.description}</p>
        </div>
    )
}


export default WeatherDisplay;