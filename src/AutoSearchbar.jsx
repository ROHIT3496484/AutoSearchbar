import { useEffect, useState } from "react";

export default function AutoSearchbar() {
  var val = ["Apple", "Banana", "Pineapple", "grapes"];
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    var arr = [];
    if (search.length > 0) {
      arr = val.filter((item) => {
        return item.includes(search);
      });
    }
    setData(arr);
  }, [search]);
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <div>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
    </div>
  );
}
