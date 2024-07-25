import React from "react";

function OutfitAiCard({ weatherData }) {
  return (
    <div className="border-4 border-slate-300 rounded-xl flex flex-col items-center h-small w-small">
      {weatherData && <div>OutfitAiCard</div>}
    </div>
  );
}

export default OutfitAiCard;
