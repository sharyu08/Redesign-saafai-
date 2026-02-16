'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const CompanyContext = createContext();

/**
 * CompanyProvider - Provides company context to the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string|number} [props.initialCompanyId] - Initial company ID (optional)
 * @returns {React.ReactNode} - The provider component
 */
export function CompanyProvider({ children, initialCompanyId = 26 }) {
  // Use the initialCompanyId prop or default to 26 if not provided
  const [companyId, setCompanyId] = useState(initialCompanyId);
  const [hasCompanyContext, setHasCompanyContext] = useState(false);

  // You can add more company-related state here if needed
  // const [companyData, setCompanyData] = useState(null);

  // Load company ID from localStorage on initial load if needed
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Try to get companyId from localStorage
      const savedCompanyId = localStorage.getItem('companyId');
      
      // If we have a saved companyId, use it
      if (savedCompanyId) {
        setCompanyId(savedCompanyId);
      } else if (initialCompanyId) {
        // Otherwise, use the initialCompanyId if provided
        localStorage.setItem('companyId', initialCompanyId.toString());
      }
      
      setHasCompanyContext(true);
    }
  }, [initialCompanyId]);

  // Update localStorage when companyId changes
  useEffect(() => {
    if (typeof window !== 'undefined' && companyId) {
      localStorage.setItem('companyId', companyId.toString());
    }
  }, [companyId]);

  // The value that will be passed to consumers of this context
  const value = {
    companyId,
    setCompanyId,
    hasCompanyContext,
    // Add other company-related values and methods here
  };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
}

/**
 * useCompanyId - Custom hook to access the company context
 * @returns {Object} - The company context
 * @throws {Error} - If used outside of a CompanyProvider
 */
export function useCompanyId() {
  const context = useContext(CompanyContext);
  
  if (context === undefined) {
    // Use a default context if the hook is used outside of a provider
    return {
      companyId: 26, // Default company ID
      setCompanyId: () => {
        console.warn('setCompanyId was called but there is no CompanyProvider');
      },
      hasCompanyContext: false,
    };
  }
  
  return context;
}

/**
 * withCompanyProvider - HOC to wrap a component with CompanyProvider
 * @param {React.ComponentType} Component - The component to wrap
 * @param {Object} [props] - Additional props to pass to the CompanyProvider
 * @returns {React.ComponentType} - The wrapped component
 */
export function withCompanyProvider(Component, props = {}) {
  return function WrappedComponent(componentProps) {
    return (
      <CompanyProvider {...props}>
        <Component {...componentProps} />
      </CompanyProvider>
    );
  };
}

export default CompanyProvider;
