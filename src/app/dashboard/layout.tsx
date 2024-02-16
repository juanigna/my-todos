// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { WidgetItem } from '@/components';
import { Sidebar, TopMenu } from '@/components/dashboard';
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />
            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <TopMenu />
                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6">
                    {/* TODO: dashboard/page.tsx  */}
                    {children}
                    {/* TODO: fin del dashboard/page.tsx  */}
                    {/* TODO: Fin del contenido en el Layout.tsx */}
                </div>
            </div>
        </>
    );
}