"use client";
import { useState } from "react";
import { FaFutbol, FaUsers, FaTrophy, FaUserPlus } from "react-icons/fa";
import HomeCard from "./components/HomeCard";
export default function Home() {
  const [activeForm, setActiveForm] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-green-600 flex items-center justify-center gap-2">
          <FaFutbol className="text-green-700" /> Football Arina
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your football tournaments, teams and players with ease
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-6 mb-10">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow"
          onClick={() => setActiveForm("tournament")}
        >
          <FaTrophy /> Create Tournament
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
          onClick={() => setActiveForm("team")}
        >
          <FaUsers /> Create Team
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded shadow"
          onClick={() => setActiveForm("player")}
        >
          <FaUserPlus /> Add Player
        </button>
      </nav>

      <main className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        {activeForm === "team" && (
          <HomeCard
            title="Create Team"
            description="Set up your football team and assign players"
            imagePath="/Team-lineup-amico.svg"
          />
        )}
        {activeForm === "player" && (
          <HomeCard
            title="Add Player"
            description="Add and manage your player profiles"
            imagePath="/Football-Goal-amico.svg"
          />
        )}
        {activeForm === "tournament" && (
          <HomeCard
            title="Start Tournament"
            description="Launch tournaments with scheduling and fixtures"
            imagePath="/Soccer-bro.svg"
          />
        )}

        {activeForm === "tournament" && (
          <form className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Create Tournament
            </h2>
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
              {/* 5side,7side,9side, 11 side
               */}
              <option value="5side">5 side</option>
              <option value="7side">7 side</option>
              <option value="9side">9 side</option>
              <option value="11side">11 side</option>
              <option value="defence">defence</option>
            </select>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
              Create
            </button>
          </form>
        )}

        {activeForm === "team" && (
          <form className="space-y-4 ">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Create Team
            </h2>
            <input
              type="text"
              placeholder="Team Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Coach Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Home Ground"
              className="w-full p-2 border rounded"
              required
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Create
            </button>
          </form>
        )}

        {activeForm === "player" && (
          <form className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Add Player
            </h2>
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
              {/* Striker,winger, midfielder, defence, goalkeeper */}
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
        )}
      </main>
    </div>
  );
}
