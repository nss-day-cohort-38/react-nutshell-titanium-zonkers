import React from "react";
import { Input } from "semantic-ui-react";
import './SearchUsers.css'

const SearchUsers = ({setSearchQuery, searchQuery}) => {

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

  return (
    <Input icon="at" id="search-users" onChange={handleChange} value={searchQuery} transparent iconPosition="left" placeholder="Search users..." />
  );
};

export default SearchUsers;
