import { useDispatch, useSelector } from "react-redux";
import "./Tabs.css";
import React from "react";
import { changeTab } from "../redux/slices/TabsSlice";

const TABS = ["All", "Done", "Active"];
const Tabs = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabs);
  const handleTabSwitch = (tab) => {
    dispatch(changeTab(tab));
  };
  return (
    <div className="tabs">
      {TABS.map((tab) => (
        <button
          className={selectedTab === tab ? "selected-tab tab-btn" : "tab-btn"}
          onClick={() => handleTabSwitch(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
