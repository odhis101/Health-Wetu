import { useContext } from 'react';
import React from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState(null);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthContext;
