import Icon from "../../components/icon/icon";
import AreaChart from "../../features/dataAnalyze/areaChart";

export function CardDataSummary({
  data,
  dataName,
  duringTime,
}: {
  data: string;
  dataName: "studyTime" | "accuracy" | "reviews" | "questions";
  duringTime: "this week" | "today";
}) {
  const iconColor =
    dataName === "studyTime"
      ? "#3B82F6"
      : dataName === "accuracy"
        ? "#F59E0B"
        : dataName === "questions"
          ? "#10B981"
          : "#EF4444";
  return (
    <div className="card-data-summary capitalize ">
      <div className=" col-start-1 gap-x-2 text-text-secondary text-lg col-end-6 row-end-2 flex-row pt-2 flex">
        <Icon
          name={dataName}
          style={{ backgroundColor: iconColor }}
          className={` text-white/80 bg-linear-to-br to-black/60 size-8 rounded-md`}
        />
        <h1 className="">{dataName}</h1>
      </div>

      <div className=" flex flex-col col-start-1 col-end-4 row-end-3 row-start-2 ">
        <h1 className="text-text text-lg font-medium">{data}</h1>
        <h1 className="text-text-muted text-sm">{duringTime}</h1>
      </div>

      <div className=" col-start-4 col-end-6 row-end-3 row-start-2 ">
        <AreaChart
          color={`${iconColor}`}
          width={20}
          height={14}
          data={[
            { label: "ش", value: 40 },
            { label: "ی", value: 65 },
            { label: "د", value: 90 },
            { label: "س", value: 80 },
            { label: "چ", value: 70 },
            { label: "پ", value: 95 },
            { label: "ج", value: 60 },
          ]}
          strokeW={0.3}
        />
      </div>
    </div>
  );
}
