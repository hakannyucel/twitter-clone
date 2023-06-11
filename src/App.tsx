import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/error';
import AppRoutes from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseLoading from './components/SuspenseLoading';
import Layout from './pages';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<SuspenseLoading />}>
        <Router>
          <Layout>
            <AppRoutes/>
          </Layout>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )

}

export default App;
