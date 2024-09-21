import Select from "react-select";

const options = [
  { value: "all region", label: "All regions" },
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const handleRegionChange = (e) => {
    const filteredCountries = countriesList.filter((country) => {
      // Check if the selected option is "All regions"
      if (e.value === "all region") {
        return true;
      }

      // Ensure region comparison is case insensitive and handle missing regions
      return (
        country.region && country.region.toLowerCase() === e.value.toLowerCase()
      );
    });

    filterCountriesList(filteredCountries);
  };

  return (
    <div>
      <Select
        defaultValue={options[0]}
        onChange={handleRegionChange}
        options={options}
        classNames={{
          input: () => "dark:!text-gray-100",
          singleValue: () => "dark:text-gray-100",
          control: () =>
            "flex h-12 items-center justify-between gap-12 rounded border-none pl-4 pr-2 shadow dark:bg-gray-800",
          indicatorSeparator: () => "hidden",
          option: () => "hover:text-gray-800",
          menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
        }}
      />
    </div>
  );
};

export default RegionMenu;
