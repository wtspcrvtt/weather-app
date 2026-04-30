interface WeatherFormProps {
    value: string;
    onChange: (city: string) => void;
    onSearch: () => void;
}
function WeatherForm({value, onChange, onSearch}: WeatherFormProps) {
    return (
        <div>
            <input type="text" placeholder="Введите город..."
            value={value}
            onChange={(e) => onChange(e.target.value)} />
            <button onClick={onSearch}>Узнать погоду</button>
        </div>
    )
}


export default WeatherForm