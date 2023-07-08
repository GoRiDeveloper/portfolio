import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/main_layout/MainLayout";

export const Index = () => {

    const LazyHome = lazy(() => import("../pages/Home"));
    const LazyProject = lazy(() => import("../pages/Project"));

    return (

        <Routes>
            <Route element={(
                <Suspense fallback={<span> loading... </span>}>
                    <MainLayout />
                </Suspense>
            )}>
                <Route path="/" element={<LazyHome />} />
                <Route key="/:name" path="/:name" element={<LazyProject />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

    );

};