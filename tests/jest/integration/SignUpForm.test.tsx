import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupForm from '../../../components/SignUpForm';
import { describe, test, expect } from '@jest/globals';

describe('SignupForm', () => {
  test('shows thank you message after submit', () => {
    render(<SignupForm />);
    
    const input = screen.getByPlaceholderText('Your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    
    fireEvent.click(screen.getByText('Sign up'));
    
    expect(screen.getByText(/thanks for signing up/i)).toBeInTheDocument();
  });
});
