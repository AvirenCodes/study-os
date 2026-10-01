const username = "Lord";

const timeIcon = {
  afternoon: "☀",
  noon: "😎",
  morning: "🌄",
  night: "🌚",
};

const time = {
  afternoon: "afternoon",
  noon: "noon",
  morning: "morning",
  night: "night",
};

type time = "afternoon" | "noon" | "morning" | "night";


export function WelcomeMessage({ prop }: { prop: keyof typeof time }) {
  return (
    <h1 className="text-lg pt-1">
      Good {time[prop]}, <span className="text-primary">{username}</span>{" "}
      <span className="text-warning">{timeIcon[prop]}</span>
    </h1>
  );
}

export function Nav() {
  return (
    <nav className="text-xl w-full h-10 flex items-center justify-between">
      <button>
        <Icon name="menu" />
      </button>
      <button className="">
        <i className="fas fa-book mr-2" />
        StudyOs
      </button>
      <button className="w-6 rounded-full bg-center bg-cover">
        <Icon name="profile" />
      </button>
    </nav>
  );
}
