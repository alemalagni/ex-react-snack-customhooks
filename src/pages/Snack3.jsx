import useCustomPointer from "../components/useCustomPointer";

function Snack3() {
    const customPointer = useCustomPointer("🔥");

    return (
        <div>
            <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
            {customPointer}
        </div>
    )
}

export default Snack3;