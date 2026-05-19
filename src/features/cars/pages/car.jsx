import { useLoaderData, useOutletContext, useSubmit, useNavigate } from "react-router";
import DashboardContainer from "../../../components/dashboard-container";
import DashboardSection from "../../../components/dashboard-section";
import formatDateTime from "../../../utils/formatDateTime";
import {
  RiCalendarView,
  RiCameraLine,
  RiCarLine,
  RiDeleteBinLine,
  RiFlagLine,
  RiIdCardLine,
  RiMapPinLine,
  RiMoreLine,
  RiSeoLine,
  RiSteering2Line,
  RiUser2Line,
} from "@remixicon/react";
import DataItem from "../../../components/data-item";
import Dropdown from "../../../components/dropdown";
import Button from "../../../components/button";
import Dialog from "../../../components/dialog";
import { useState, useEffect } from "react";
import generateCarReport from "../../../utils/generateCarReport";
import ImageSlider from "../../../components/image-slider";

function Car() {
  const car = useLoaderData();
  const { user } = useOutletContext();
  const submit = useSubmit();
  const navigate = useNavigate();

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [statusDialog, setStatusDialog] = useState({ state: false });


  async function handleDropdown(option) {
    if (option === "Generate Report") {
      await generateCarReport(car);
    } else if (option === "Delete Car") {
      setDeleteDialog(true);
    } else if (option === "Edit Car") {
      navigate(`/inventory/${car.id}/edit`);
    }
  }

  async function confirmStatusChange() {
    await submit({ newStatus: statusDialog.newStatus, carId: car.id }, { method: "PATCH" });
    setStatusDialog({ state: false })
  }

  return (
    <>
      <DashboardContainer
        title="Car Details"
        header={
          <Dropdown
            options={user.role === "admin"
              ? ["Edit Car", "Generate Report", "Delete Car"]
              : ["Generate Report"]}
            onChange={handleDropdown}
            trigger={
              <Button variant="ghost">
                <RiMoreLine />
              </Button>
            }
          />
        }
      >
        <DashboardSection title="Images">
          <ImageSlider images={car.images} />
        </DashboardSection>
        <DashboardSection
          title="Status"
          className="gap-0"
          header={
            <Dropdown
              id="newStatus"
              defaultValue={car.status}
              updateValue={false}
              options={[
                "Awaiting Inspection",
                "Inspected",
                "At warehouse",
                "Body Shop - Waitlisted",
                "Windshield-awa",
                "Dent shop-waitlisted",
                "At dent shop",
                "Ready for Check-in",
                "Detail Done",
                "Detail Waitlisted",
                "Sold",
              ]}
              onChange={newStatus =>
                newStatus !== car.status && setStatusDialog({ state: true, newStatus })
              }
              updateNavigationState={true}
            />
          }
        >
          <DataItem
            text="Status"
            Icon={RiFlagLine}
            value={car.status}
            first={true}
          />
          <DataItem
            text="Last Updated"
            Icon={RiCalendarView}
            value={formatDateTime(car.statusLastUpdated)}
          />
          <DataItem
            text="Updated By"
            Icon={RiUser2Line}
            value={car.statusUpdatedBy || "[not found]"}
            redirect={car.statusUpdatedBy && `/user/${car.statusUpdatedBy}`}
            last={true}
          />
        </DashboardSection>
        <DashboardSection title="General Information" className="gap-0">
          <DataItem text="Make" Icon={RiCarLine} value={car.make} first={true} />
          <DataItem text="Model" Icon={RiCarLine} value={car.model} />
          <DataItem text="Year" Icon={RiCalendarView} value={car.year} />
          <DataItem
            text="System Assigned ID"
            Icon={RiIdCardLine}
            value={car.id}
          />
          <DataItem
            text="Created by"
            Icon={RiUser2Line}
            redirect={car.createdBy && `/user/${car.createdBy}`}
            value={car.createdBy || "[not found]"}
          />
          <DataItem
            text="Created on"
            Icon={RiCalendarView}
            value={formatDateTime(car.createdOn)}
          />
          <DataItem
            text="Location"
            Icon={RiMapPinLine}
            value={car.location}
            last={true}
          />
        </DashboardSection>
        <DashboardSection title="Inspection" className="gap-0">
          <DataItem
            text="Rim Damage"
            Icon={RiSeoLine}
            value={car.rimDamage}
            first={true}
          />
          <DataItem
            text="Windshield Damage"
            Icon={RiSeoLine}
            value={car.windshield}
          />
          <DataItem text="Camera Issue" Icon={RiCameraLine} value={car.camera} />
          <DataItem
            text="Power Steering Issue"
            Icon={RiSteering2Line}
            value={car.steering}
            last={true}
          />
        </DashboardSection>
      </DashboardContainer >

      <Dialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        title="Delete Car"
      >
        <p>
          Are you sure you want to delete{" "}
          <span>
            {car.year} {car.make} {car.model}
          </span>
          ? This action cannot be undone.
        </p>
        <div className="flex items-center gap-2 justify-end mt-5">
          <Button
            variant="ghost"
            onClick={() => setDeleteDialog(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => submit({ carId: car.id }, { method: "DELETE" })}
            updateNavigationState={true}
          >

            Delete <RiDeleteBinLine />
          </Button>
        </div>

      </Dialog>

      <Dialog
        open={statusDialog.state && statusDialog.newStatus}
        onClose={() => setStatusDialog({ state: false })}
        title="Change Status"
      >
        <p>
          Are you sure you want to change the status of this car to{" "}
          <span>{statusDialog.newStatus}</span>?
        </p>
        <div className="flex items-center gap-2 justify-end mt-5">
          <Button
            variant="ghost"
            onClick={() => setStatusDialog({ state: false })}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={confirmStatusChange}
          >
            Confirm
          </Button>
        </div>
      </Dialog>


    </>
  );
}

export default Car;
