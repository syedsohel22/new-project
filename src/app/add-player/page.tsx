import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        {" "}
        <form className="space-y-4">
          {" "}
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Add Player{" "}
          </h2>{" "}
          <input
            type="text"
            placeholder="Player Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-2 border rounded"
            required
          />
          <select className="w-full p-2 border rounded" required>
            <option value="">Player Position</option>
            <option value="Striker">Striker</option>
            <option value="winger">winger</option>
            <option value="midfielder">midfielder</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="defence">defence</option>
          </select>
          <input
            type="text"
            placeholder="Team Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Instgaram ID"
            className="w-full p-2 border rounded"
            required
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Add Player
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
