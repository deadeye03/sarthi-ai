'use client';
 
import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
 
const Providers = ({ children }) => {
  return (
    <ProgressProvider 
      height="4px"
      color="#E11D48"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};
 
export default Providers;