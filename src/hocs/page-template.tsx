import React from 'react';
import { useSelector } from 'react-redux';
import { getLoadedDataStatus, getLoadedCommentsStatus } from '../store/catalog-data/selectors';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import LoadingScreen from '../components/loading-screen/loading-screen';

type PageTemplateComponent = {
  children: React.ReactNode;
  hasData?: boolean;
}

function PageTemplate({ children, hasData = true }: PageTemplateComponent): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isCommentsLoaded = useSelector(getLoadedCommentsStatus);

  if (!hasData) {
    return (
      <div className="wrapper">
        <Header/>
        {children}
        <Footer/>
      </div>
    );
  }

  return(
    <div className="wrapper">
      <Header/>
      {!isDataLoaded && !isCommentsLoaded && <LoadingScreen />}
      {isDataLoaded && isCommentsLoaded && children}
      <Footer/>
    </div>
  );
}

export default PageTemplate;
