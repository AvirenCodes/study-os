import { CardDataSummary } from "./Dashboard.card";
import { Nav, WelcomeMessage } from "./Dashboard.nav";

export function Dashboard() {
  return (
    <main className="bg-bg font-family p-4 text-text w-screen h-screen list-box scroll-hidden">
      <Nav />
      <header className="">
        <WelcomeMessage prop="night" />
        <div className="grid-cols-2 mt-3 gap-2 grid grid-rows-2 w-full h-[34vh]">
          <CardDataSummary
            dataName="studyTime"
            data="4h 20m"
            duringTime="this week"
          />
          <CardDataSummary
            dataName="questions"
            data="86"
            duringTime="this week"
          />
          <CardDataSummary
            dataName="accuracy"
            data="78%"
            duringTime="this week"
          />
          <CardDataSummary dataName="reviews" data="12" duringTime="today" />
        </div>
      </header>
    </main>
  );
}
