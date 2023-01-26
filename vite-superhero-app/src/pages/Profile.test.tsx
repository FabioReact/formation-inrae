import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Profile from './Profile';

describe('Profile Page', () => {
  test('should have Profile as h1', () => {
    render(<Profile />);
    expect(screen.getAllByText(/Profile/i)).toBeDefined();
  });
});
