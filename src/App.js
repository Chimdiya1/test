import React, { useState, useEffect } from "react";
import { readString } from "react-papaparse";
import "./App.css";
import Table from "./components/table/Table";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getCsvData = async () => {
      let csvData = await fetchCsv();
      let data = readString(csvData);
      setData(data);
    };
    getCsvData();
  }, []);

  const fetchCsv = () => {
    return fetch("/cities.csv").then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");
      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  return (
    <div className="App">
      <h3>Test</h3>
      {data && <Table data={data.data} />}
    </div>
  );
}

export default App;
