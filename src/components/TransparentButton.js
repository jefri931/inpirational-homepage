


export function TransparentButton({ text, onClick }) {
    return (
        <button onClick={onClick} className="transparent-bg" style={{ border: 0, color: 'white', fontSize: 40 }}>{text}</button>
    )
}