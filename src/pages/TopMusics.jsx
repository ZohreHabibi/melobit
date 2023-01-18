import TopWeekDayMusicCard from "../components/TopWeekDayMusicCard";

import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";

const TopMusics = () => {
  const [topDayData, setTopDayData] = useState(null);
  const [topWeekData, setTopWeekData] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`https://api-beta.melobit.com/v1/song/top/week/0/100`),
      fetch(`https://api-beta.melobit.com/v1/song/top/day/0/100`),
    ])
      .then(([resWeek, resDay]) => Promise.all([resWeek.json(), resDay.json()]))
      .then(([dataWeeks, dataDays]) => {
        setTopWeekData(dataWeeks);
        setTopDayData(dataDays);
      });
  }, []);

  const sortResultsFunc = useCallback((data) => {
    const milionDownloadns = [];
    const thousandDownloadns = [];

    data?.results.slice(0, 10).forEach((music) => {
      if (music.downloadCount.includes("M")) {
        milionDownloadns.push(music);
      } else {
        thousandDownloadns.push(music);
      }
      milionDownloadns.sort(
        (a, b) => +b.downloadCount.slice(0, -1) - +a.downloadCount.slice(0, -1)
      );
      thousandDownloadns.sort(
        (a, b) => +b.downloadCount.slice(0, -1) - +a.downloadCount.slice(0, -1)
      );
    });
    return milionDownloadns.concat(thousandDownloadns);
  }, []);

  const sortedDayResults = useMemo(() => {
    return sortResultsFunc(topDayData);
  }, [topDayData]);
  const sortedWeekResults = useMemo(() => {
    return sortResultsFunc(topWeekData);
  }, [topDayData, topWeekData]);

  return (
    <div>
      <div>
        <h2 className="text-white text-3xl ml-10  my-10">Top 10 of the Day</h2>
        <div className="mx-8">
          {sortedDayResults.map((music, i) => (
            <TopWeekDayMusicCard
              currentListData={sortedDayResults}
              key={music.id}
              music={music}
              i={i}
            />
          ))}
        </div>
        <div className="mx-8">
          <h2 className="text-white text-3xl ml-10 my-12">
            Top 10 of the Week
          </h2>
          {sortedWeekResults.map((music, i) => (
            <TopWeekDayMusicCard
              currentListData={sortedWeekResults}
              key={music.id}
              music={music}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMusics;
