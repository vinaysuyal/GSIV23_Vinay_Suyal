import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "#9b9b9b",
      }}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a Movie..."
        inputProps={{ "aria-label": "search google maps" }}
        value={searchQuery}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSearch(searchQuery);
          }
        }}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
    </Paper>
  );
};

export default SearchComponent;
