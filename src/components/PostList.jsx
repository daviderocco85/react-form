import { PostItem } from './PostItem';

export const PostList = props => {
    return (

        <ul>
            {props.posts.map(post => (
                <PostItem
                    key={post.title}
                    title={post.title}
                    author={post.author}
                    body={post.body}
                    public={post.public}
                    onClick={props.onClick}
                />
            ))}
        </ul>

    );
};