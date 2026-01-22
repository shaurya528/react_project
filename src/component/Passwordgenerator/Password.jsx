import { useState } from "react";
 import { ToastContainer, toast,Bounce } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

function Passwordgenerator() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+-={}[]<>?";

  const [length, setLength] = useState(12);
  const [upperchar, setUpperchar] = useState(true);
  const [lowerchar, setLowerchar] = useState(true);
  const [numberchar, setNumberchar] = useState(true);
  const [symbolchar, setSymbolchar] = useState(true);
  const [password, setpassword] = useState("");
  function copypassword(){
   if(!password){
         toast.error("no password to copy")
   }else{
    navigator.clipboard.writeText(password);
    toast.success("password succesfully cpoied")
   }
  }

  function generate() {
    let char = "";
    if (upperchar) char += upper;
    if (lowerchar) char += lower;
    if (numberchar) char += number;
    if (symbolchar) char += symbol;

    if (!char) {
      alert("Please select at least one option");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += char[Math.floor(Math.random() * char.length)];
    }
    setpassword(pass);
    toast.success('🦄 Password generated', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">
        
        <h1 className="text-2xl font-bold text-center">
          Random Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Generated Password"
            value={password}
            readOnly
            className="flex-1 border rounded px-3 py-2 focus:outline-none"
          />
          <button
            onClick={copypassword}
            className="bg-black text-white px-4 rounded hover:bg-gray-800"
          >
            Copy
          </button>
        
        </div>

        {/* Length Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium">
            <span>Password Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="18"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Checkboxes */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={upperchar}
              onChange={(e) => setUpperchar(e.target.checked)}
            />
            Uppercase
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lowerchar}
              onChange={(e) => setLowerchar(e.target.checked)}
            />
            Lowercase
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberchar}
              onChange={(e) => setNumberchar(e.target.checked)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={symbolchar}
              onChange={(e) => setSymbolchar(e.target.checked)}
            />
            Symbols
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generate}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Generate Password
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      

    </div>
  );
}

export default Passwordgenerator;
