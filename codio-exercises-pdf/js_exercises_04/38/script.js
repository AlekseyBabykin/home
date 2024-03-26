const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const userList = document.getElementById("List");

users.forEach((user) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${user.firstName} ${user.lastName}`;
  listItem.setAttribute("data-id", user.id);
  userList.appendChild(listItem);
});
