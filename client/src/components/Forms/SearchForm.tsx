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
import { locations } from "@/utils/data/locations";
import clsx from "clsx";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";

const SearchForm = ({ isDark }: { isDark: boolean }) => {
  const todayDate = today(getLocalTimeZone());
  const tenDaysLater = todayDate.add({ days: 10 });

  const { setLocation, setDates, location, startDate, endDate } =
    useTrekStore();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      location: location || "",
      dateRange: {
        startDate: startDate || null,
        endDate: endDate || null,
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    // Update Zustand state
    setLocation(data.location);
    setDates(data.dateRange?.startDate, data.dateRange?.endDate);

    // Prepare JSON for backend
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
          {/* Location Input */}
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
              >
                {locations.map((loc) => (
                  <AutocompleteItem key={loc.label} id={loc.key}>
                    {loc.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            )}
          />

          {/* Single Date Range Picker */}
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
                  start: startDate
                    ? parseDate(startDate?.toString())
                    : todayDate,
                  end: endDate ? parseDate(endDate?.toString()) : tenDaysLater,
                }}
                onChange={(range) => {
                  field.onChange({
                    startDate: range?.start || null,
                    endDate: range?.end || null,
                  });
                  setDates(range?.start || null, range?.end || null); // Sync Zustand state
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
