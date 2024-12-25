import App from "../App/App";
import ErrorPage from "../Error/ErrorPage";
import Layout from "../Layout/Layout";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/:name",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/error",
    element: <ErrorPage />, 
  },
];

export default routes;
