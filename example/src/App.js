import React from 'react';

import Nav from './organisms/Nav';
import InstallSection from './organisms/InstallSection';
import ApiSection from './organisms/ApiSection';

export default function App() {
    return (
        <div className="min-h-screen bg-grey-light">
            <Nav />

            <main className="p-5 pt-24">
                <InstallSection />

                <ApiSection />
            </main>
        </div>
    );
}
