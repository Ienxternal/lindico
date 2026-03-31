import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './app/App';
import { getClerkPublishableKey } from './app/lib/auth/clerk';
import './styles/index.css';
import './styles/theme.css';

const publishableKey = getClerkPublishableKey();

function PortalSetupNotice() {
  return (
    <main className="portal-auth-layout">
      <section className="portal-panel">
        <p className="portal-kicker">Portal Setup</p>
        <h1>Add your Clerk publishable key to continue.</h1>
        <p className="portal-copy">
          Set <code>VITE_CLERK_PUBLISHABLE_KEY</code> in an environment file for the
          portal app, then restart the dev server to enable authentication.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  publishableKey ? (
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  ) : (
    <PortalSetupNotice />
  )
);
