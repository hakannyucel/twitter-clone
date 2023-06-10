import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/error';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import SuspenseLoading from './components/SuspenseLoading';
import Layout from './pages';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<SuspenseLoading />}>
        <BrowserRouter>
          <Layout>
            <AppRoutes/>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  )

}

export default App;
