export default function Cell({content, handleClick}) {
    return <button className="button cell is-primary subtitle has-text-black" onClick={handleClick}>{ content }</button>;
}
