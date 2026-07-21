import './PostForm.css';

export const PostForm = props => {
    return (

        <form onSubmit={props.onSubmit}>
            <div className='form-row'>
                <label>
                    Autore
                    <input
                        name="author"
                        type="text"
                        placeholder=" Inserisci l'Autore"
                        value={props.newArticles.author}
                        onChange={props.onChange}
                    />
                </label>
                <label>
                    Titolo
                    <input
                        name="title"
                        type="text"
                        placeholder="Inserisci il Titolo"
                        value={props.newArticles.title}
                        onChange={props.onChange}
                    />
                </label>
            </div>
            <div className="form-body">
                <label>
                    Corpo dell'articolo
                    <textarea
                        name="body"
                        placeholder="Inserisci il corpo dell'articolo"
                        value={props.newArticles.body}
                        onChange={props.onChange}
                        rows={5}
                    />
                </label>
            </div>
            <label className="form-actions">
                Vuoi che l'articolo sia pubblico?
                <input
                    name="public"
                    type="checkbox"
                    checked={props.newArticles.public}
                    onChange={props.onChange}
                />

            </label>
            <button>Aggiungi Articolo</button>
        </form>


    );
};