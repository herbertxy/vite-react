import { useRef, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const urlRef = useRef("");
  return (
    <div className="App">
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        <input
          style={{ width: 400, height: 40 }}
          ref={urlRef}
          //  onChange={(e)=> setUrl(e.target.value)
          // }
        ></input>
        <button
          onClick={() => {
            setUrl(urlRef.current.value);
          }}
        >
          {" "}
          查询{" "}
        </button>
      </div>

      <SwaggerUI url={url} />
    </div>
  );
}

export default App;
