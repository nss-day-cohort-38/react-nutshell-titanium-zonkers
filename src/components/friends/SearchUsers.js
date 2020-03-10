import React from "react";
import { Input } from "semantic-ui-react";

const SearchUsers = ({setSearchQuery, searchQuery}) => {

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

  return (
    <Input icon="at" onChange={handleChange} value={searchQuery} transparent iconPosition="left" placeholder="Search users..." />
  );
};

export default SearchUsers;
