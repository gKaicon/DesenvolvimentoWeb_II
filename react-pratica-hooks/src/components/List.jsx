export default function List(props) {
    return (
        <ul className="list-group">
            {
                props.items.map((v, i) => {
                    return <li className="list-group-item">{v}</li>;
                })
            }
        </ul>
    );
};

