import React, { useContext } from "react";
import { FileContext } from "../../pages/index";
import StatsBox from "../StatsBox";
import Section from "../common/Section";
import {
  faCalendarAlt,
  faComments,
  faPaperPlane,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
export default function Summary() {
  const context = useContext(FileContext);
  return (
    <Section>
      <h1 className="title is-3 ">Lazy? Here's how we'd show your stats,</h1>
      <h3 className="subtitle is-5 ">
        showing
        <span className="has-text-weight-semibold bg-light-green px-1">
          example
        </span>
        chat between 3 Bois
      </h3>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <StatsBox
            title={"Total Days"}
            stats={context.file.stats.summary.total_days}
            icon={faCalendarAlt}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Message Exchanged"}
            stats={context.file.stats.summary.total_message}
            icon={faComments}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Words Sent"}
            stats={context.file.stats.summary.total_words}
            icon={faPaperPlane}
          />
        </div>
        <div className="tile is-parent">
          <StatsBox
            title={"Total Letters Used"}
            stats={context.file.stats.summary.total_letters}
            icon={faHeading}
          />
        </div>
      </div>
    </Section>
  );
}