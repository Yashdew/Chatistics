import React, { useContext, useState } from "react";
import { FileContext } from "../../App";
import DayBar from "../graphs/DayBar";
import StatsBox from "../StatsBox";
import Layout from "../common/Layout";
import {
  faCommentDots,
  faCalendarWeek,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function DaySection() {
  const context = useContext(FileContext);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });

  return (
    <Layout
      sectionHeader={
        <h1 className="subtitle is-3 ">
          Breakdown of your chats, <span className="underline">day-wise</span>
        </h1>
      }
      rightColumn={false}
      graph={
        <DayBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      }
      rightColumnContent={
        <>
          <StatsBox
            title={"Average Texts Per Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .averageTexts
            }
            icon={faCommentDots}
          />
          <StatsBox
            title={"Most Texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostActiveDay
            }
            icon={faCalendarWeek}
          />
          <StatsBox
            title={"Most Frequently texted Day"}
            stats={
              context.file.stats.analysis.basedOnDays[selectedOption.value]
                .mostFrequentDay
            }
            icon={faAngleDoubleUp}
          />
        </>
      }
    />
  );
}
