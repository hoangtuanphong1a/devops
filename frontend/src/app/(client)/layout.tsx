// Layout.js
import { ClientLayout } from '@/components/layout/MainLayout';
import React from 'react';
import Providers from '../providers';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ClientLayout>
<Providers>
        {children}
</Providers>
    </ClientLayout>;

};

export default Layout;
