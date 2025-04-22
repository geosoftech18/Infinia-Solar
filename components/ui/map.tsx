"use client";
import { IndiaMap } from "@vishalvoid/react-india-map";
import type { StateData } from "@vishalvoid/react-india-map";

export const Map = () => {
  // Map styling configuration
  const mapStyle = {
    backgroundColor: "#f8f9fa",
    borderColor: "#dee2e6",
    defaultColor: "#cce5ff", 
    hoverColor: "#ffffff",
    selectedColor: "#4361ee",
    tooltipConfig: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      textColor: "#ffffff",
      fontSize: "14px",
      padding: "10px",
      borderRadius: "5px",
    },
  };

  const stateData: StateData[] = [
    { id: "IN-AP", customData: { population: "53.9M", capital: "Amaravati" } },
    { id: "IN-AR", customData: { population: "1.6M", capital: "Itanagar" } },
    { id: "IN-AS", customData: { population: "36.5M", capital: "Dispur" } },
    { id: "IN-BR", customData: { population: "130.4M", capital: "Patna" } },
    { id: "IN-CT", customData: { population: "32.7M", capital: "Raipur" } },
    { id: "IN-GA", customData: { population: "1.5M", capital: "Panaji" } },
    {
      id: "IN-GJ",
      customData: { population: "70.6M", capital: "Gandhinagar" },
    },
    { id: "IN-HR", customData: { population: "29.4M", capital: "Chandigarh" } },
    { id: "IN-HP", customData: { population: "7.3M", capital: "Shimla" } },
    { id: "IN-JH", customData: { population: "39.5M", capital: "Ranchi" } },
    { id: "IN-KA", customData: { population: "68.3M", capital: "Bengaluru" } },
    {
      id: "IN-KL",
      customData: { population: "35.7M", capital: "Thiruvananthapuram" },
    },
    { id: "IN-MP", customData: { population: "93.5M", capital: "Bhopal" } },
    { id: "IN-MH", customData: { population: "123.2M", capital: "Mumbai" } },
    { id: "IN-MN", customData: { population: "3.2M", capital: "Imphal" } },
    { id: "IN-ML", customData: { population: "3.4M", capital: "Shillong" } },
    { id: "IN-MZ", customData: { population: "1.3M", capital: "Aizawl" } },
    { id: "IN-NL", customData: { population: "2.3M", capital: "Kohima" } },
    {
      id: "IN-OD",
      customData: { population: "46.8M", capital: "Bhubaneswar" },
    },
    { id: "IN-PB", customData: { population: "30.1M", capital: "Chandigarh" } },
    { id: "IN-RJ", customData: { population: "81.0M", capital: "Jaipur" } },
    { id: "IN-SK", customData: { population: "0.7M", capital: "Gangtok" } },
    { id: "IN-TN", customData: { population: "78.8M", capital: "Chennai" } },
    { id: "IN-TG", customData: { population: "39.0M", capital: "Hyderabad" } },
    { id: "IN-TR", customData: { population: "4.2M", capital: "Agartala" } },
    { id: "IN-UP", customData: { population: "223.2M", capital: "Lucknow" } },
    { id: "IN-UT", customData: { population: "11.3M", capital: "Dehradun" } },
    { id: "IN-WB", customData: { population: "99.6M", capital: "Kolkata" } },

    // Union Territories
    { id: "IN-AN", customData: { population: "0.4M", capital: "Port Blair" } },
    { id: "IN-CH", customData: { population: "1.1M", capital: "Chandigarh" } },
    { id: "IN-DL", customData: { population: "19.8M", capital: "New Delhi" } },
    { id: "IN-DN", customData: { population: "0.6M", capital: "Daman" } },
    {
      id: "IN-JK",
      customData: {
        population: "13.6M",
        capital: "Srinagar (Summer), Jammu (Winter)",
      },
    },
    { id: "IN-LA", customData: { population: "0.3M", capital: "Leh" } },
    { id: "IN-LD", customData: { population: "0.07M", capital: "Kavaratti" } },
    { id: "IN-PY", customData: { population: "1.5M", capital: "Puducherry" } },
  ];

  // Handle hover events
  // const handleStateHover = (stateId: string, stateInfo?: StateData) => {
  //   console.log(`{Hovering over ${stateId}, stateInfo}`);
  // };

  // Handle click events
  // const handleStateClick = (stateId: string, stateInfo?: StateData) => {
  //   console.log(`{Clicked on ${stateId}, stateInfo}`);
  //   alert(
  //     `{You clicked ${stateId}\nCapital: ${stateInfo?.customData?.capital}\nPopulation: ${stateInfo?.customData?.population}}`
  //   );
  // };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Interactive India Map
      </h1>
      <div
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <IndiaMap
          mapStyle={mapStyle}
          stateData={stateData}

          // onStateHover={handleStateHover}
          // onStateClick={handleStateClick}
        />
      </div>
    </div>
  );
};
