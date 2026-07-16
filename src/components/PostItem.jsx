export const PostItem = props => {
    return (
        <li>
            {props.title}
            <i
                className="bi bi-trash3-fill"
                onClick={() => props.onClick(props.title)}
            ></i>
        </li>
    );
};