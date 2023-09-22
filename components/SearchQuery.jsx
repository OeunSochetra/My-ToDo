"use client";
import { useState } from "react";
import axios from "axios";

const SearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3030/user/search?query=${searchQuery}`
      );
      setSearchResult(res.data);
      console.log("res", res);
    } catch (error) {
      console.log("Error searching data", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pt-10 gap-5 rounded-xl ">
        <input
          className="px-5 h-7 outline-none font-[600] text-[#111827]"
          type="search"
          placeholder="Search..."
          value={SearchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="ext-[12px] bg-green-500 hover:bg-green-600 px-5 h-7 rounded-sm"
          onClick={handleSearch}
        >
          🔎
        </button>
      </div>
    </>
  );
};

export default SearchQuery;
