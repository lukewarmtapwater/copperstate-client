const rolesObject = {
  admin: "Manager",
  inspector: "Inspector",
  mechanic: "Mechanic",
  unassigned: "Unassigned",
};

const roles = Object.values(rolesObject);

function formatRole(role) {
  return rolesObject[role];
}

export { formatRole, roles };
