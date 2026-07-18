function MatchTabs({ activeTab, setActiveTab }) {
  const tabs = [
    "overview",
    "timeline",
    "statistics",
    "lineups",
  ];

  return (
    <div className="tabs">

      {tabs.map((tab) => (

        <button
          key={tab}
          className={
            activeTab === tab
              ? "active-tab"
              : ""
          }
          onClick={() =>
            setActiveTab(tab)
          }
        >
          {tab.charAt(0).toUpperCase() +
            tab.slice(1)}
        </button>

      ))}

    </div>
  );
}

export default MatchTabs;