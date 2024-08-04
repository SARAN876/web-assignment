import { useRoutes, Navigate } from 'react-router-dom';
import Themebar from '../theme/themeBar';
import DashBoard from '../pages/DashBoard';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Themebar />,
      children: [
        { element: <Navigate to="/dashboard" replace />, index: true },
        { path: 'dashboard', element: <DashBoard /> },
      ]
    },
  ]);
}
