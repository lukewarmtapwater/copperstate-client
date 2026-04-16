import Button from "../../components/button";
import Dropdown from "../../components/dropdown";
import DashboardSection from "../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";

const cars = [
  {
    id: 20322,
    year: 2020,
    model: "Passport",
    make: "Honda",
    dateCreated: "2026-04-30",
    status: {
      current: 0,
      lastUpdated: "2026-04-28T18:30:00",
    },
    inspection: {
      windshield: "Not Needed",
      rimDamage: "light",
      headlightBuff: "Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Warehouse",
  },
  {
    id: 20323,
    year: 2019,
    model: "Camry",
    make: "Toyota",
    dateCreated: "2026-04-29",
    status: {
      current: 3,
      lastUpdated: "2026-04-29T10:15:00",
    },
    inspection: {
      windshield: "Good",
      rimDamage: "none",
      headlightBuff: "Not Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Showroom",
  },
  {
    id: 20324,
    year: 2018,
    model: "Civic",
    make: "Honda",
    dateCreated: "2026-04-27",
    status: {
      current: 5,
      lastUpdated: "2026-04-27T14:00:00",
    },
    inspection: {
      windshield: "Minor Crack",
      rimDamage: "moderate",
      headlightBuff: "Needed",
    },
    features: {
      camera: "No",
      powerSteering: "Yes",
    },
    location: "Yard",
  },
  {
    id: 20325,
    year: 2021,
    model: "Altima",
    make: "Nissan",
    dateCreated: "2026-04-26",
    status: {
      current: 1,
      lastUpdated: "2026-04-28T09:20:00",
    },
    inspection: {
      windshield: "Not Needed",
      rimDamage: "light",
      headlightBuff: "Not Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Mechanic Shop",
  },
  {
    id: 20326,
    year: 2022,
    model: "Corolla",
    make: "Toyota",
    dateCreated: "2026-04-25",
    status: {
      current: 4,
      lastUpdated: "2026-04-25T16:45:00",
    },
    inspection: {
      windshield: "Good",
      rimDamage: "none",
      headlightBuff: "Not Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Warehouse",
  },
  {
    id: 20327,
    year: 2017,
    model: "Accord",
    make: "Honda",
    dateCreated: "2026-04-24",
    status: {
      current: 3,
      lastUpdated: "2026-04-24T11:10:00",
    },
    inspection: {
      windshield: "Replaced",
      rimDamage: "light",
      headlightBuff: "Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Yard",
  },
  {
    id: 20328,
    year: 2020,
    model: "Elantra",
    make: "Hyundai",
    dateCreated: "2026-04-23",
    status: {
      current: 2,
      lastUpdated: "2026-04-23T12:00:00",
    },
    inspection: {
      windshield: "Good",
      rimDamage: "none",
      headlightBuff: "Not Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Showroom",
  },
  {
    id: 20329,
    year: 2016,
    model: "Sentra",
    make: "Nissan",
    dateCreated: "2026-04-22",
    status: {
      current: 0,
      lastUpdated: "2026-04-22T09:30:00",
    },
    inspection: {
      windshield: "Good",
      rimDamage: "moderate",
      headlightBuff: "Needed",
    },
    features: {
      camera: "No",
      powerSteering: "Yes",
    },
    location: "Mechanic Shop",
  },
  {
    id: 20330,
    year: 2023,
    model: "RAV4",
    make: "Toyota",
    dateCreated: "2026-04-21",
    status: {
      current: 6,
      lastUpdated: "2026-04-21T18:00:00",
    },
    inspection: {
      windshield: "Not Needed",
      rimDamage: "none",
      headlightBuff: "Not Needed",
    },
    features: {
      camera: "Yes",
      powerSteering: "Yes",
    },
    location: "Transit Yard",
  },
  {
    id: 20331,
    year: 2015,
    model: "Malibu",
    make: "Chevrolet",
    dateCreated: "2026-04-20",
    status: {
      current: 3,
      lastUpdated: "2026-04-20T13:15:00",
    },
    inspection: {
      windshield: "Cracked",
      rimDamage: "heavy",
      headlightBuff: "Needed",
    },
    features: {
      camera: "No",
      powerSteering: "Yes",
    },
    location: "Warehouse",
  },
];

const statuses = [
  "Awaiting Inspection",
  "Inspection in Progress",
  "At Mechanic Shop",
  "Awaiting Parts",
  "Repair in Progress",
  "Repair Complete",
  "Detail Pending",
  "Detailing in Progress",
];

function Inventory() {
  return (
    <div>
      <h1 className="mb-10">INVENTORY</h1>

      <div className="flex gap-3">
        <DashboardSection className="" title="Total Cars">
          <h1 className="text-primary">25</h1>
        </DashboardSection>

        <DashboardSection title="At the Dent Shop">
          <h1 className="text-primary">3</h1>
        </DashboardSection>

        <DashboardSection title="At Mechanic's">
          <h1 className="text-primary">7</h1>
        </DashboardSection>
        <DashboardSection title="Ready to Check-in">
          <h1 className="text-primary">12</h1>
        </DashboardSection>
      </div>

      <DashboardSection title="Your Cars" className="flex flex-col gap-4">
        {cars.map((car, i) => (
          <Car car={car} key={i} />
        ))}
      </DashboardSection>
    </div>
  );
}

function Car({ car }) {
  return (
    <div className="sm:flex justify-between bg-background border border-muted p-6 rounded-md">
      <div className="mb-4 sm:mb-0">
        <h4>
          {car.make} {car.model} {car.year}
        </h4>
        <div className="flex gap-16 mt-4 ml-1">
          <div>
            <h5 className="my-2">General</h5>
            <div className="ml-1">
              <p>ID: {car.id}</p>
              <p>Created on: {car.dateCreated}</p>
              <p>Location: {car.location}</p>
            </div>
          </div>
          <div>
            <h5 className="my-2">Inspection</h5>
            <div>
              <p>Rim damage: {car.inspection.rimDamage}</p>
              <p>Windshield: {car.inspection.windshield}</p>
              <p>Headlight Buff: {car.inspection.headlightBuff}</p>
            </div>
          </div>
          <div>
            <h5 className="my-2">Features</h5>
            <div>
              <p>Camera: {car.features.camera}</p>
              <p>Power Steering: {car.features.powerSteering}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Dropdown value={statuses[car.status.current]} options={statuses} />
        <Button>
          Open <RiArrowDropRightLine />
        </Button>
      </div>
    </div>
  );
}

export default Inventory;
