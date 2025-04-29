import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
  testMatch: [
    '<rootDir>/tests/jest/**/*.(test|spec).ts', 
    '<rootDir>/tests/jest/**/*.(test|spec).tsx', 
  ],
};

export default createJestConfig(config);