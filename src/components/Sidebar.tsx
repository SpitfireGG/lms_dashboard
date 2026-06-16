import { useState } from "react";
import {
  Home as HomeIcon,
  BookOpen,
  Calendar,
  ClipboardList,
  LineChart,
  MessageSquare,
  Compass,
  Settings,
  Info,
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { ActiveTab } from "../types";

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onAddModuleClick: () => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  homeSubTab: "overview" | "live-network" | "todo";
  setHomeSubTab: (sub: "overview" | "live-network" | "todo") => void;
  triggerCalendarFocus: () => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed,
  homeSubTab,
  setHomeSubTab,
  triggerCalendarFocus,
}: SidebarProps) {
  const [homeExpanded, setHomeExpanded] = useState(true);

  // Nav actions
  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    if (tabId === "home") {
      setHomeSubTab("overview");
    }
  };

  return (
    <aside
      className={`h-screen fixed left-0 top-0 bg-zinc-950 z-50 flex flex-col pt-6 pb-4 justify-between transition-all duration-300 ${
        sidebarCollapsed ? "w-[72px] px-2" : "w-64 px-4"
      }`}
    >
      <div className="flex flex-col">
        {/* Company Header (24px padding on top from container, 32px gap below) */}
        <div
          className={`mb-8 ${sidebarCollapsed ? "flex justify-center" : "px-3"}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-950/50 hover:shadow-xl active:scale-95 transition-all cursor-pointer shrink-0 overflow-hidden">
              <img
                src="/assets/naatiLogo.png"
                alt="Logo"
                className="w-7 h-7 object-contain"
              />
            </div>

            {!sidebarCollapsed && (
              <div className="text-left select-none">
                <h1 className="text-[15px] leading-none flex items-baseline gap-[5px]">
                  <span className="font-extrabold tracking-tight bg-gradient-to-r from-accent-light via-accent to-accent-dark bg-clip-text text-transparent">
                    NAATI
                  </span>
                  <span className="font-extralight tracking-wide text-zinc-300">
                    Excellence
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation links */}
        <nav className="space-y-5">
          <div>
            {!sidebarCollapsed && (
              <span className="px-3 text-[10px] font-bold text-zinc-550 uppercase tracking-wider block mb-2 font-mono select-none text-zinc-500">
                Main Menu
              </span>
            )}
            <ul className="space-y-1">
              {/* Home block - supporting collapsible hierarchy precisely like image */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("home")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "home"
                        ? "bg-accent-dark/15 text-accent font-semibold"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Home / Overview"
                  >
                    <HomeIcon className="w-5 h-5 stroke-[2px]" />
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => setHomeExpanded(!homeExpanded)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        activeTab === "home"
                          ? "bg-accent-dark/15 text-accent"
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <HomeIcon className="w-4 h-4 stroke-[2px]" />
                        <span>Home</span>
                      </div>
                      {homeExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                      )}
                    </button>

                    {/* Nesting Tree branch lines */}
                    {homeExpanded && (
                      <div className="ml-7 mt-1 mb-1">
                        {/* Sub nav item: Overview */}
                        <div className="relative flex items-center h-8 pl-4 border-l border-zinc-800">
                          <div className="absolute left-0 top-1/2 w-3 h-px bg-zinc-800" />
                          <button
                            onClick={() => {
                              setActiveTab("home");
                              setHomeSubTab("overview");
                            }}
                            className={`w-full text-left text-xs font-medium pl-1 py-1 select-none transition-colors duration-200 cursor-pointer ${
                              homeSubTab === "overview" && activeTab === "home"
                                ? "text-accent font-bold"
                                : "text-zinc-500 hover:text-zinc-200"
                            }`}
                          >
                            Overview
                          </button>
                        </div>

                        {/* Sub nav item: To-Do's */}
                        <div className="relative flex items-center h-8 pl-4 border-l border-zinc-800">
                          <div className="absolute left-0 top-1/2 w-3 h-px bg-zinc-800" />
                          <button
                            onClick={() => {
                              setActiveTab("home");
                              setHomeSubTab("todo");
                              triggerCalendarFocus();
                            }}
                            className={`w-full text-left text-xs font-medium pl-1 py-1 select-none transition-colors duration-200 cursor-pointer ${
                              homeSubTab === "todo" && activeTab === "home"
                                ? "text-accent font-bold"
                                : "text-zinc-500 hover:text-zinc-200"
                            }`}
                          >
                            To-Do's
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </li>

              {/* My Courses */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("my-courses")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "my-courses"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="My Courses"
                  >
                    <BookOpen className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("my-courses")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "my-courses"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 stroke-[1.8px]" />
                      <span>My Courses</span>
                    </div>
                  </button>
                )}
              </li>

              {/* Schedule */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("schedule")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "schedule"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Schedule"
                  >
                    <Calendar className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("schedule")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "schedule"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 stroke-[1.8px]" />
                      <span>Schedule</span>
                    </div>
                  </button>
                )}
              </li>

              {/* Assignments */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("assignments")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "assignments"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Assignments"
                  >
                    <ClipboardList className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("assignments")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "assignments"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ClipboardList className="w-4 h-4 stroke-[1.8px]" />
                      <span>Assignments</span>
                    </div>
                  </button>
                )}
              </li>

              {/* Progress */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("progress")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "progress"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Progress"
                  >
                    <LineChart className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("progress")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "progress"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <LineChart className="w-4 h-4 stroke-[1.8px]" />
                      <span>Progress</span>
                    </div>
                  </button>
                )}
              </li>

              {/* Messages */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("messages")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "messages"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Messages"
                  >
                    <MessageSquare className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("messages")}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "messages"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 stroke-[1.8px]" />
                      <span>Messages</span>
                    </div>
                  </button>
                )}
              </li>
            </ul>
          </div>

          <div className="pt-2">
            {!sidebarCollapsed && (
              <span className="px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2 font-mono select-none">
                More
              </span>
            )}
            <ul className="space-y-1">
              {/* Discover */}
              <li>
                {sidebarCollapsed ? (
                  <button
                    onClick={() => handleNavClick("discover")}
                    className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                      activeTab === "discover"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                    title="Discover"
                  >
                    <Compass className="w-5 h-5 stroke-[1.8px]" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick("discover")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === "discover"
                        ? "bg-accent-dark/15 text-accent"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                    }`}
                  >
                    <Compass className="w-4 h-4 stroke-[1.8px]" />
                    <span>Discover</span>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Footer link systems & Collapse action */}
      <div className="space-y-4 pt-4 flex flex-col">
        {/* Settings and Info links */}
        <div className={`space-y-1 ${sidebarCollapsed ? "px-0" : "px-3"}`}>
          {sidebarCollapsed ? (
            <button
              onClick={() => handleNavClick("settings")}
              className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                activeTab === "settings"
                  ? "bg-accent-dark/15 text-accent"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
              title="Settings"
            >
              <Settings className="w-5 h-5 stroke-[1.8px]" />
            </button>
          ) : (
            <button
              onClick={() => handleNavClick("settings")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "settings"
                  ? "bg-accent-dark/15 text-accent"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
            >
              <Settings className="w-4 h-4 stroke-[1.8px]" />
              <span>Settings</span>
            </button>
          )}

          {sidebarCollapsed ? (
            <button
              onClick={() => handleNavClick("info")}
              className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                activeTab === "info"
                  ? "bg-accent-dark/15 text-accent"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
              title="Platform Info"
            >
              <Info className="w-5 h-5 stroke-[1.8px]" />
            </button>
          ) : (
            <button
              onClick={() => handleNavClick("info")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "info"
                  ? "bg-accent-dark/15 text-accent"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
            >
              <Info className="w-4 h-4 stroke-[1.8px]" />
              <span>Info</span>
            </button>
          )}

          {/* Sidebar Toggle */}
          <div className={`mt-2 ${sidebarCollapsed ? "" : ""}`}>
            {sidebarCollapsed ? (
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                title="Expand Sidebar"
              >
                <PanelLeftOpen className="w-5 h-5 stroke-[1.8px]" />
              </button>
            ) : (
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                title="Collapse Sidebar"
              >
                <PanelLeftClose className="w-4 h-4 stroke-[1.8px]" />
                <span>Collapse</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
