import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGerenator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*";
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGerenator();
  }, [length, numberAllowed, charAllowed, setPassword, passwordGerenator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-4 bg-gray-700 text-orange-500">
        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>
        <input
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-80 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-2 shrink "
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
