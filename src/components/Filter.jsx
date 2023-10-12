
const Filter = () => {
return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filterOptions">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
        </div>
</div>
)
}

export default Filter