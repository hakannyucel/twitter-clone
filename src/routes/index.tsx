import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/notFound";

const Feed = lazy(() => import("../pages/feed"));
const Explore = lazy(() => import("../pages/explore"));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;