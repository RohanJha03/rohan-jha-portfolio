import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../context/datacontext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TerminalIcon from "@mui/icons-material/Terminal";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SplitText from "../SplitText";

const HomeGithub = () => {
  const { darkMode } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Rohan Jha's Developer Terminal [Version 1.0.0]" },
    { type: "output", text: "Type 'help' to see the list of available commands." },
    { type: "output", text: "" }
  ]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input when clicking terminal window
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmedInput = input.trim().toLowerCase();
      const newHistory = [...history, { type: "input", text: `rohan@portfolio:~$ ${input}` }];

      if (trimmedInput === "") {
        setHistory(newHistory);
        setInput("");
        return;
      }

      let output = "";
      switch (trimmedInput) {
        case "help":
          output = `Available commands:
  about     - Brief biography of Rohan Jha
  skills    - Core technical stack details
  projects  - Active software builds & contributions
  education - Academic history, institution, & CGPA
  social    - Active developer profiles & social channels
  clear     - Wipes the console logs`;
          break;
        case "about":
          output = `Rohan Jha is a Computer Science and Engineering undergraduate at Government Engineering College, Patan. 
He is a passionate developer focused on architecting secure backends, designing optimized relational and non-relational database structures, and leading software engineering workflows.`;
          break;
        case "skills":
          output = `Technical Competencies:
  • Languages: JavaScript, Java, Python, C, SQL
  • Frontend: React JS, Tailwind CSS, Material UI, Bootstrap, HTML5, CSS3, Sass, EJS
  • Backend: Node.js, Express.js, RESTful APIs
  • Databases: MySQL, MongoDB
  • Tools & OS: Git, GitHub, Postman, AWS, GCP, Linux, Windows`;
          break;
        case "projects":
          output = `Featured Project Builds:
  1. Team Management App [Academic / Lead]
     - Built with Java, MySQL, REST APIs, Git.
     - Secured task flow coordinate system for 5+ concurrent teams.
  2. Wanderlust Travel Website [Personal / Full-Stack]
     - Built with Node.js, Express.js, MongoDB, HTML, CSS, JS, EJS.
     - Fully operational destination listing & review logs.`;
          break;
        case "education":
          output = `Academic Journey:
  • B.E. Computer Science & Engineering - GEC Patan (GTU) | 2023 - 2027 | Current CGPA: 8.91/10.0
  • High School (HSC Science) - 68% | Secondary Schooling (SSC) - 86%`;
          break;
        case "social":
          output = `Active Developer Channels:
  • GitHub: https://github.com/RohanJha03
  • LinkedIn: https://www.linkedin.com/in/rohan-jha-cs2027
  • Instagram: https://www.instagram.com/rohan_jha03/`;
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        default:
          output = `command not found: '${trimmedInput}'. Type 'help' to see active commands.`;
      }

      setHistory([...newHistory, { type: "output", text: output }]);
      setInput("");
    }
  };

  const cardStyle = {
    backdropFilter: "blur(5px)",
    borderRadius: "16px",
    opacity: 1,
    borderBottom: "2px solid rgba(255, 255, 255, 0.15)",
    borderLeft: "0px solid",
    borderRight: "0px solid",
  };

  return (
    <div className="flex justify-center flex-col gap-16 items-center w-full py-20 overflow-hidden">
      <h2 className="text-4xl font-bold">
        <SplitText
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          className="text-left"
          text="Interactive Hub"
        />
      </h2>

      <div className="xl:w-4/5 3xl:w-3/5 w-11/12 grid lg:grid-cols-12 grid-cols-1 gap-8 px-4 md:px-0">
        {/* Left Column: Metrics Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
          {/* CGPA Score */}
          <div
            style={cardStyle}
            className={`p-6 flex flex-col gap-2 rounded-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] shadow-md border-gray-200"
                : "bg-[#0b0c1099] border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            }`}
          >
            <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Academic Standing
            </h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-[#f59e0b]">8.91</span>
              <span className="text-xl text-gray-400">/ 10.0 CGPA</span>
            </div>
            <p className="text-sm opacity-75">
              Computer Science & Engineering at Government Engineering College, Patan.
            </p>
          </div>

          {/* DSA Challenges */}
          <div
            style={cardStyle}
            className={`p-6 flex flex-col gap-2 rounded-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] shadow-md border-gray-200"
                : "bg-[#0b0c1099] border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            }`}
          >
            <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Problem Solving
            </h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-[#f59e0b]">100+</span>
              <span className="text-xl text-gray-400">Challenges</span>
            </div>
            <p className="text-sm opacity-75">
              Data Structures & Algorithms problems solved on LeetCode & GeeksforGeeks.
            </p>
          </div>

          {/* Core Tech Stack */}
          <div
            style={cardStyle}
            className={`p-6 flex flex-col gap-2 rounded-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03] ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] shadow-md border-gray-200"
                : "bg-[#0b0c1099] border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            }`}
          >
            <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Core Stack
            </h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-[#f59e0b]">MERN & Java</span>
            </div>
            <p className="text-sm opacity-75">
              Specializing in scalable full-stack web builds, backend REST APIs, and database design.
            </p>
          </div>
        </div>

        {/* Right Column: Terminal Shell */}
        <div
          onClick={focusInput}
          className="lg:col-span-8 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#0c0f12] flex flex-col h-[420px] cursor-text"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#14191e] border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <TerminalIcon sx={{ fontSize: 16 }} />
              <span>rohan@developer-console: ~</span>
            </div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Console Log */}
          <div className="flex-1 p-5 overflow-y-auto font-mono text-base text-cyan-400/90 flex flex-col gap-2 scrollbar-thin">
            {history.map((item, index) =>
              item.type === "input" ? (
                <div key={index} className="text-white font-semibold flex items-center gap-1.5">
                  <ChevronRightIcon sx={{ fontSize: 16 }} className="text-[#f59e0b]" />
                  <span>{item.text}</span>
                </div>
              ) : (
                <div key={index} className="whitespace-pre-wrap leading-relaxed opacity-90 pl-5">
                  {item.text}
                </div>
              )
            )}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Prompt */}
          <div className="p-5 bg-[#0f1317] border-t border-gray-800/80 flex items-center gap-2 font-mono">
            <span className="text-[#f59e0b] font-bold">rohan@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent text-white outline-none border-none caret-cyan-400 p-0 text-base"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-start px-2 items-center">
        <a
          href="https://github.com/RohanJha03"
          target="_blank"
          rel="noreferrer"
          className={`bg-black font-para text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
            !darkMode
              ? "shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
              : "shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } text-center`}
        >
          <span>
            Visit GitHub <ArrowOutwardIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomeGithub;
