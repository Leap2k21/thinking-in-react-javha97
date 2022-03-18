export const Searchbar = ({ setinputv, setcheckstock, checkstock }) => {
    return (
        <>
            <input onChange={(e) => setinputv(e.target.value)} placeholder="Search..."></input>
            <input checked={checkstock}
                onChange={e => setcheckstock(e.target.checked)} type="checkbox"></input>
        </>
    )
}