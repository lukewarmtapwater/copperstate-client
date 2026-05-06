import DashboardContainer from "../../../components/dashboard-container";

function NoAccess() {
  return (
    <DashboardContainer
      title="No Access"
      description="You haven't been assigned a role yet by a manager or higher."
    />
  );
}

export default NoAccess;
