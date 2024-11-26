function DateTimePicker({ setDate, setTime }) {
    return (
        <div>
            <input
                onChange={(e) => {
                    setDate(e.target.value);
                }}
                type="date"
            />
            <input
                onChange={(e) => {
                    setTime(e.target.value);
                }}
                type="time"
            />
        </div>
    );
}
export default DateTimePicker;
