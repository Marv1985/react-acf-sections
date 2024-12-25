import { useQuery } from '@tanstack/react-query';
import fetchPosts from '../fetchDataFunctions/fetchPosts';
import { useParams, useNavigate } from "react-router-dom";
import Page from '../Page/Page';

export const App = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Get all pages
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['page'],
    queryFn: fetchPosts, 
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  // Search Pages and if a match (slug) is found, it returns the entire object
  const matchingPage = data.find((page) => page.slug === name);

  // Get homepage ID to display homepage when there's no url
  const homePageId = data.find((page) => page.id === 2);

  // If `name` is provided but no matching slug exists, redirect to ErrorPage
  if (name && !matchingPage) {
    navigate("/error", { replace: true });
    return null;
  }

  return (
    <div className="max_width">
      {matchingPage ? (
        <Page title={matchingPage.slug} pageData={matchingPage} />
      ) : (
        <Page pageData={homePageId} /> 
      )}
    </div>
  );
};

export default App;
