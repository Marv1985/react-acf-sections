import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MenuData from '../FetchMenuData/MenuData';
import './Header.css'

function Header() {

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['post'],
    queryFn: () => MenuData(2),
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

    // Get all menu items url's
    const urls = data.map((page) => {
        return page.url
    })

    // Get last part of each url
    const lastParts = urls.map((url) => {
        return url.split('/').filter(Boolean).pop();
    })

    // Map `lastParts` back to the posts in `data`
    const updatedData = data.map((post, index) => ({
        ...post, // Preserve all existing post properties
        url: post.type_label === "Front Page" ? "/" : `/${lastParts[index]}`, // Conditional URL assignment
    }));
    

  return (
    <header>
     <ul>
        {updatedData.map((post) => {
          return (
            <li key={post.id}>
              <Link to={post.url}>
                <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
