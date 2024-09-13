import CountryCards from "./CountryCards";

const CountryList = () => {
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      <CountryCards />
      <CountryCards />
      <CountryCards />
      <CountryCards />
      <CountryCards />
    </div>
  );
};

export default CountryList;
