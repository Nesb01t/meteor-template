export const getBaseName = (path: string) => {
  return path.split('/').pop()?.split('.').shift();
};
