interface WeatherDisplayProps {
    data: {name: string; temp: number; description: string, feels_like: number } | null;
    isLoading: boolean;
    error: string | null;
}

function WeatherDisplay({ data, isLoading, error }: WeatherDisplayProps) {
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
        <div>
            <h1>Погода в {data.name}</h1>
            <p>{data.temp}°C</p>
            <p>Ощущается как: {data.feels_like}°C</p>
            <p>{data.description}</p>
        </div>
    )
}


export default WeatherDisplay;