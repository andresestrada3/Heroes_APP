import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes} from '../heroes'
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login/*' element={
                    <PublicRoute>
                        {/* <LoginPage/> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage/>}/>
                        </Routes>
                    </PublicRoute>
                }/>
                {/* <Route path="login" element={<LoginPage/>}/> */}
                
                {/* Utilizo esto para proteger mis rutas si el usuario no esta logged (Rutas Privadas) */}

                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                }/> 

                {/* <Route path='/*' element={<HeroesRoutes/>}/>  */}
            </Routes>
        </>
    )
}
