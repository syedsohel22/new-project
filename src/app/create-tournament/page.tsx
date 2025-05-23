import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <form className="space-y-4">
          {" "}
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Create Tournament{" "}
          </h2>{" "}
          <input
            type="text"
            placeholder="Tournament Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Organizer Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="City/State"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            className="w-full p-2 border rounded"
            required
            placeholder="Start Date"
          />
          <input
            type="date"
            className="w-full p-2 border rounded"
            required
            placeholder="End Date"
          />
          <input
            type="number"
            placeholder="Entry Fee"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Number of Teams"
            className="w-full p-2 border rounded"
            required
          />
          <select className="w-full p-2 border rounded" required>
            <option value="">tournament type</option>
            <option value="5side">5 side</option>
            <option value="7side">7 side</option>
            <option value="9side">9 side</option>
            <option value="11side">11 side</option>
          </select>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
