import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { OrganizationSchema } from './OrganizationSchema';
import { WebSiteSchema } from './WebSiteSchema';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-peak-mint selection:text-peak-black">
      <OrganizationSchema />
      <WebSiteSchema />
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-peak-gray py-12 text-center border-t border-peak-black/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl font-serif text-peak-black mb-4">Peak<span className="italic text-peak-darkGray/60 ml-1">Money</span></h2>
          <p className="text-xs font-sans text-peak-darkGray/50 max-w-md mx-auto leading-relaxed">
            © 2025 Peak Money. All rights reserved. The content on this site is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
};
