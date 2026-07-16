export const PostForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                value={props.input}
                placeholder="Inserisci nuovo articolo"
                onChange={props.onChange}
            />
            <button>Aggiungi</button>
        </form>
    );
};