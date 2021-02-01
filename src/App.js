import React, { useState, useEffect, createContext } from "react";
import "./styles/index.scss";
import Hero from "./components/sections/Hero";
import Summary from "./components/sections/Summary";
import { mockData } from "./mockAPI";
import TimelineSection from "./components/sections/TimelineSection";
import DaySection from "./components/sections/DaySection";
import Loader, { LoaderAnalysis } from "./components/Loader";
import TimeRadarSection from "./components/sections/TimeRadarSection";
import UserSummary from "./components/sections/UserSummary";
import Input from "./components/Input";
import Heatmap from "./components/sections/Heatmap";
import EmojiSection from "./components/sections/EmojiSection";
import WordcloudSection from "./components/sections/WordcloudSection";
import SpecificUserSection from "./components/sections/SpecificUserSection";
import ErrorModal from "./components/modals/ErrorModal";
import Footer from './components/sections/Footer';

export const FileContext = createContext(null);

function App() {
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [initLoader, setInitLoader] = useState(true);
  const [axiosError, setAxiosError] = useState(null);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);

  useEffect(() => {
    setFile(mockData);
    setInitLoader(false);
  }, []);

  if (initLoader) {
    return <Loader />;
  }

  if (loader) {
    return <LoaderAnalysis />;
  }

  return (
    <>
      <Hero />
      <Input setLoader={setLoader} setAxiosError={setAxiosError} showDownloadBtn={showDownloadBtn} setShowDownloadBtn={setShowDownloadBtn} />
      <FileContext.Provider value={{ file }}>
        <Summary file={file} />
        <TimelineSection data={mockData.stats.timelineByMonth} />
        <DaySection />
        <TimeRadarSection />
        <Heatmap />
        <EmojiSection />
        <UserSummary />
        <WordcloudSection />
        <SpecificUserSection />
      </FileContext.Provider>
      <Footer/>
      {axiosError && <ErrorModal error={axiosError} setError = {setAxiosError}/>}
    </>
  );
}

export default App;

