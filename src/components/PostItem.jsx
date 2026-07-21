import './PostItem.css';

export const PostItem = props => {
    return (
        <div className="post-card">
            <div className="post-header">
                <h3 className="post-title">{props.title}</h3>
                <span className="post-author">di {props.author}</span>
            </div>

            <p className="post-body">{props.body}</p>

            <div className="post-footer">
                <span className={`post-status ${props.public ? 'pubblico' : 'bozza'}`}>
                    {props.public ? 'Pubblico' : 'Bozza'}
                </span>

                <i
                    className="bi bi-trash3-fill delete-icon"
                    onClick={() => props.onClick(props.title)}
                ></i>
            </div>
        </div>
    );
};
