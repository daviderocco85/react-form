import { PostItem } from './PostItem';

export const PostList = props => {
    return (
        <ul>
            {props.posts.map(post => (
                <PostItem
                    key={post}
                    title={post}
                    onClick={props.onClick}
                />
            ))}
        </ul>
    );
};