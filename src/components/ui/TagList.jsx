function TagList({ tags }) {
     return (
          <ul className="ul-tags">
               {tags.map((tag) => (
                    <li className="li-tag" key={tag}>
                         <div className="tag">{tag}</div>
                    </li>
               ))}
          </ul>
     );
}

export default TagList;
