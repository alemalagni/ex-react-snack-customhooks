import useDate from "../components/useDate";

function Snack2() {
    const currentDate = useDate();

    return (
        <div>
            <h2>Data e ora attuali:</h2>
            <h3>{currentDate.toLocaleString()}</h3>
        </div>
    )
}

export default Snack2;