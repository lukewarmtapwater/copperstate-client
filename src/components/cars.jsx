import { useSearchParams, Form, Link } from "react-router";
import DashboardSection from "./dashboard-section";
import Input from "./input";
import Dropdown from "./dropdown";
import Button from "./button";
import Car from "./car";
import { RiArrowDropRightLine, RiFilter3Line } from "@remixicon/react";

function Cars({
    title = "Inventory",
    cars,
    pagination,
    showHeader = false,
    showFilter = false,
}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage);
        setSearchParams(params);
    };

    const { currentPage, totalPages, totalCount, limit } = pagination || {};

    return (
        <DashboardSection
            title={title}
            header={
                showHeader ? (
                    <Link className="flex items-center" to="/inventory">
                        View All <RiArrowDropRightLine />
                    </Link>
                ) : null
            }
        >
            {showFilter && (
                <Form
                    method="get"
                    className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:items-end p-4 rounded-md border border-muted"
                >
                    <Input
                        id="search"
                        label="Search"
                        placeholder="Search by make, model, year..."
                        defaultValue={searchParams.get("search") || ""}
                        required={false}
                    />

                    <Input
                        id="startDate"
                        label="Start Date"
                        type="date"
                        defaultValue={
                            searchParams.get("startDate") || ""
                        }
                        required={false}
                    />

                    <Input
                        id="endDate"
                        label="End Date"
                        type="date"
                        defaultValue={
                            searchParams.get("endDate") || ""
                        }
                        required={false}
                    />

                    <div className="flex flex-col gap-1">
                        <label htmlFor="sort">Sort By</label>

                        <Dropdown
                            id="sort"
                            options={[
                                "Latest to Oldest",
                                "Oldest to Latest",
                            ]}
                            defaultValue={
                                searchParams.get("sort") ||
                                "Latest to Oldest"
                            }
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        updateNavigationState={true}
                        className="w-full sm:w-auto"
                    >
                        Filter Cars <RiFilter3Line />
                    </Button>
                </Form>
            )}

            {cars.length ? (
                <>
                    {cars.map((car) => (
                        <Car car={car} key={car.id} />
                    ))}

                    {pagination && totalCount !== undefined && (
                        <div className="flex flex-wrap justify-between items-center gap-4 border border-muted py-2 px-4 rounded-md">
                            <p>
                                Showing{" "}
                                {(currentPage - 1) * limit + 1} to{" "}
                                {Math.min(
                                    currentPage * limit,
                                    totalCount
                                )}{" "}
                                of {totalCount} result(s)
                            </p>

                            {totalPages > 1 && (
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        disabled={currentPage === 1}
                                        onClick={() =>
                                            handlePageChange(
                                                currentPage - 1
                                            )
                                        }
                                    >
                                        Previous
                                    </Button>

                                    <div className="flex gap-1">
                                        {[...Array(totalPages)].map(
                                            (_, i) => (
                                                <Button
                                                    key={i + 1}
                                                    variant={
                                                        currentPage === i + 1
                                                            ? "primary"
                                                            : "ghost"
                                                    }
                                                    onClick={() =>
                                                        handlePageChange(
                                                            i + 1
                                                        )
                                                    }
                                                >
                                                    {i + 1}
                                                </Button>
                                            )
                                        )}
                                    </div>

                                    <Button
                                        variant="ghost"
                                        disabled={
                                            currentPage === totalPages
                                        }
                                        onClick={() =>
                                            handlePageChange(
                                                currentPage + 1
                                            )
                                        }
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <p>No cars found.</p>
            )}
        </DashboardSection>
    );
}

export default Cars;