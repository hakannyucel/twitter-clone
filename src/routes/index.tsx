import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Feed = lazy(() => import("../pages/feed"));
const Explore = lazy(() => import("../pages/explore"));
const PageNotFound = lazy(() => import("../pages/notFound"));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;