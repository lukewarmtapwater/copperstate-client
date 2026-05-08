const rolesObject = {
  admin: "Admin",
  inspector: "Inspector",
  mechanic: "Mechanic",
  unassigned: "Unassigned",
};

const roles = Object.values(rolesObject);

function formatRole(role) {
  return rolesObject[role];
}

function getKey(value) {
  return Object.keys(rolesObject).find((key) => rolesObject[key] === value);
}

export { formatRole, roles, getKey };
