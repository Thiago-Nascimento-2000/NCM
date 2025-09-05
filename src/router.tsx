import {Routes, Route} from 'react-router-dom'

import { Main } from './pages/Main'
import { Ncm } from './pages/Ncm'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<Main />} />
                <Route path="/ncm" element={<Ncm />} />
            </Route>
        </Routes>
    );
}