import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import LoginPage from './LoginPage.jsx';
import { AuthContext } from '../../context/authContext.jsx';

describe('LoginPage', () => {
  it('renders login toggle text', () => {
    const mockContextValue = {
      login: () => {}
    };

    render(
      <AuthContext.Provider value={mockContextValue}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    // Should display Create Account or Login depending on the default state (Sign Up)
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
  });
});
