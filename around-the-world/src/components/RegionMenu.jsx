import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RegionMenu = () => {
  return (
    <div>
      <Select
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
