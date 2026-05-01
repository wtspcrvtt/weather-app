interface WeatherFormProps {
    value: string;
    onChange: (city: string) => void;
    onSearch: () => void;
}
function WeatherForm({value, onChange, onSearch}: WeatherFormProps) {
    return (
        <div className="inputs">
            <input className="input" type="text" placeholder="Введите город..."
            value={value}
            onChange={(e) => onChange(e.target.value)} />
            <button className="input-btn" onClick={onSearch}>Узнать погоду</button>
        </div>
    )
}


export default WeatherForm