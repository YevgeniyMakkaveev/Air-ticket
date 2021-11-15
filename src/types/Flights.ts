interface IFlights{
carrier: string;
carrierUid: string;
price: number;
currency: string;
duration: number;
startCity: string;
startAirport: string;
startPointUid: string;
endCity: string;
endAirport: string;
endPointUid: string;
startDate: string;
endDate: string;
hasTranser: boolean;
}
export default IFlights
