import React from 'react';
import { Suspense } from 'react';
import Preloader from '../components/common/preloader/Preloader';




export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
}