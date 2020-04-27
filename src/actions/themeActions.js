// Action Types
export const DARK = 'DARK';
export const LIGHT = 'LIGHT';

// Create redux action creators that return an action
export const theme = dark => ({
  type: dark ? DARK : LIGHT,
});