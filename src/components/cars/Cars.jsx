import CarList from "./CarList";
import Featured from "./Featured";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Cars = () => {
  return (
    <>
    <div className="container mx-auto p-6">
        <Header />
        <div className="flex space-x-3 py-3">
            <SearchBar /> 
            <Featured />
        </div>
        <CarList />
    </div>
    </>
  )
}

export default Cars;