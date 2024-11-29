function DateTimePicker({ setDate, setTime }) {
    return (
        <div className="date-time-picker-container">
            <div>
                <label htmlFor="date">Pick a Date: </label>
                <input
                    id="date"
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                    type="date"
                />
            </div>
            <div>
                <label htmlFor="time">Pick a Time: </label>
                <input
                    id="time"
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}
                    type="time"
                />
            </div>
        </div>
    );
}
export default DateTimePicker;
