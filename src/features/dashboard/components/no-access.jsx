function NoAccess() {
  return (
    <p className="text-danger">
      You haven't been assigned a role yet by a manager or higher.
    </p>
  );
}

export default NoAccess;
