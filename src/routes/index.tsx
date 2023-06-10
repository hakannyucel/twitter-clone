import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/notFound";

const Feed = lazy(() => import("../pages/feed"));
const Explore = lazy(() => import("../pages/explore"));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/twitter-clone" element={<Feed />} />
            <Route path="/twitter-clone/explore" element={<Explore />} />
            <Route path="/twitter-clone/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;