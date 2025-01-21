"use client";

import {
  Autocomplete,
  AutocompleteItem,
  DateRangePicker,
} from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { useTrekStore } from "@/store/store";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";
import { MapPin } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const fetchLocations = async () => {
  const response = await fetch("http://localhost:5500/api/locations");
  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  return response.json();
};

const SearchForm = ({ isDark }: { isDark: boolean }) => {
  const { setLocation, setDates, location, startDate, endDate } =
    useTrekStore();
  const pathname = usePathname();
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      location: location || "",
      dateRange: {
        startDate: startDate,
        endDate: endDate,
      },
    },
  });

  // Fetch locations with caching
  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 1000 * 60 * 10, // Cache data for 10 minutes
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setLocation(data.location);
    setDates(data.dateRange?.startDate, data.dateRange?.endDate);

    // Build the query parameters regardless of the page
    const queryParams = new URLSearchParams();

    if (data.location) {
      queryParams.set("location", data.location);
    }

    if (data.dateRange?.startDate && data.dateRange?.endDate) {
      const formattedStartDate = `${String(
        data.dateRange.startDate.day
      ).padStart(2, "0")}-${String(data.dateRange.startDate.month).padStart(
        2,
        "0"
      )}-${data.dateRange.startDate.year}`;

      const formattedEndDate = `${String(data.dateRange.endDate.day).padStart(
        2,
        "0"
      )}-${String(data.dateRange.endDate.month).padStart(2, "0")}-${
        data.dateRange.endDate.year
      }`;

      queryParams.set("dateRange", `${formattedStartDate}_${formattedEndDate}`);
    }

    // Handle navigation after setting query parameters
    const queryString = queryParams.toString();

    if (pathname === "/trek") {
      router.push(queryString ? `/trek?${queryString}` : "/trek");
    } else {
      router.push(queryString ? `/trek?${queryString}` : "/trek");
    }

    // Log search payload
    const searchPayload = {
      location: data.location,
      startDate: data.dateRange?.startDate
        ? `${String(data.dateRange.startDate.day).padStart(2, "0")}-${String(
            data.dateRange.startDate.month
          ).padStart(2, "0")}-${data.dateRange.startDate.year}`
        : null,
      endDate: data.dateRange?.endDate
        ? `${String(data.dateRange.endDate.day).padStart(2, "0")}-${String(
            data.dateRange.endDate.month
          ).padStart(2, "0")}-${data.dateRange.endDate.year}`
        : null,
    };

    console.log("Search Payload:", JSON.stringify(searchPayload, null, 2));
  };

  return (
    <div className={"flex items-center justify-center text-center px-4"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          isDark
            ? "flex flex-col gap-5 items-center"
            : "flex md:flex-row flex-col gap-5 items-center"
        )}
        name="SearchForm"
      >
        <div className={"flex md:flex-row flex-col w-full items-center gap-5"}>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                className="max-w-xs text-black border-gray-500"
                placeholder="Location"
                color="default"
                defaultSelectedKey={location}
                startContent={<MapPin className="text-gray-500" />}
                variant="flat"
                onSelectionChange={(value) =>
                  field.onChange(value?.toString() || "")
                }
                isDisabled={isLoading || isError}
              >
                {isLoading && (
                  <AutocompleteItem key="loading">Loading...</AutocompleteItem>
                )}
                {isError && (
                  <AutocompleteItem key="error">
                    Error loading locations
                  </AutocompleteItem>
                )}
                {locations?.map((loc: { key: string; label: string }) => (
                  <AutocompleteItem key={loc.key} id={loc.key}>
                    {loc.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            )}
          />

          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <DateRangePicker
                aria-label="Date Range"
                selectorButtonPlacement="start"
                className="max-w-xs"
                variant="flat"
                showMonthAndYearPickers={true}
                defaultValue={{
                  start: startDate,
                  end: endDate,
                }}
                onChange={(range) => {
                  field.onChange({
                    startDate: range?.start,
                    endDate: range?.end,
                  });
                  setDates(range.start, range.end);
                }}
              />
            )}
          />
        </div>
        <ButtonClient
          type="submit"
          className={clsx(
            "md:w-[25%] w-full",
            isDark ? "text-black bg-white" : "bg-black text-white"
          )}
        >
          Search for Trek
        </ButtonClient>
      </form>
    </div>
  );
};

export default SearchForm;
