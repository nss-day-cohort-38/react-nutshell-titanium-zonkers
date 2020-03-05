const baseUrl = "http://localhost:8088";

const dbAPI = {
  getUsers() {
    return fetch(`${baseUrl}/users`).then(resp => resp.json());
  },
  getFriends(currentUserId) {
    return fetch(`${baseUrl}/friends?loggedInUserId=${currentUserId}&_expand=user`).then(resp => resp.json());
  },
  getObjectByResource(resource, userId) {
    return fetch(
      `${baseUrl}/${resource}/?userId=${userId}&_expand=user`
    ).then(resp => resp.json());
  },
  postObjectByResource(resource, resourceObject) {
    return fetch(`${baseUrl}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceObject)
    }).then(resp => resp.json());
  },
  deleteObjectByResource(resource, id) {
    return fetch(`${baseUrl}/${resource}/${id}`, {
      method: "DELETE"
    });
  },
  putObjectByResource(resource, resourceObject) {
    return fetch(`${baseUrl}/${resource}/${resourceObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceObject)
    }).then(resp => resp.json());
  },
  patchObjectByResource(resource, id, keyValueObj) {
    return fetch(`${baseUrl}/${resource}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(keyValueObj)
    }).then(resp => resp.json());
  },
  getMessagesExpanded() {
    return fetch(`${baseUrl}/messages?_expand=user`).then(resp => resp.json());
  },
  fetchObjectById(resource, id) {
    return fetch(`${baseUrl}/${resource}/${id}`).then(resp => resp.json());
  },
  async editResource (resource, resourceObject) {
    const resp = await fetch(`${baseUrl}/${resource}/${resourceObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceObject)
    });
  }
};

export default dbAPI;

/*
add button to add friend
that button should only be visible when they aren't already friends
-- this is the part where we need to talk because the data as it currently
stands does't allow us to fetch messages and users and to see those users friends.
We would need to make another call to fetch the friends for....
*when load the page you could do when load the chat box could fetch friends expand users 
and do data-isFriend attribute.

await the getMessagesExpanded and the getFriends api calls and call them both with a promise.all
so you get the array with 2 objects in the array so we have an object of messages expanded with the user and 
and object of friends. 
or can make an api call that fetches them both and awaits them both. 
POST
data: {
  loggedInUserId: the currently logged in user id from session
  userId: get the user id from the html data-user-id attr
}

re-render friends list
*/
