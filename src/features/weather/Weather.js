
export function Weather() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'flex-end', marginBottom: 10
        }}>
            <img src="http://openweathermap.org/img/w/04d.png" alt="Weather icon" style={{margin: 5 }} />
            <div>
                <h3 style={{ margin: 0}}>28.5°C</h3>
                <p style={{ margin: 0}}>Broken Clouds</p>
            </div>
        </div>
    )
}