export const Main = () => {
  type Title = {
    title: string;
  }

  const titleText: Title = {title: 'Main Component'};
  
  return (<h1>{titleText.title}</h1>)
  
};
