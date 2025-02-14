'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [stocks, setStocks] = useState<{ name: string; price: number }[]>([]);
  const [selectedContest, setSelectedContest] = useState<{
    id: number;
    name: string;
    entryFee: number;
    winningPool: number;
    prizes: string[];
    details: string;
  } | null>(null);

  useEffect(() => {
    // Sample stock data
    const sampleData = [
      { name: "Reliance", price: 2800 },
      { name: "TCS", price: 3500 },
      { name: "Infosys", price: 1650 },
      { name: "HDFC Bank", price: 1580 },
      { name: "ICICI Bank", price: 1020 },
      { name: "L&T", price: 2780 },
      { name: "Bajaj Finance", price: 7050 },
      { name: "Wipro", price: 580 },
      { name: "Kotak Mahindra", price: 1720 },
      { name: "Asian Paints", price: 2900 },
      { name: "Maruti Suzuki", price: 9800 },
      { name: "Hindustan Unilever", price: 2600 },
      { name: "Sun Pharma", price: 1180 },
      { name: "ONGC", price: 180 },
      { name: "Tata Motors", price: 820 },
      { name: "NTPC", price: 250 },
      { name: "Power Grid", price: 260 },
      { name: "HCL Tech", price: 1350 },
    ];
    setStocks(sampleData);
  }, []);

  const contests = [
    {
      id: 1,
      name: "Mega Contest",
      entryFee: 199,
      winningPool: 50000,
      prizes: ["1st: ₹25,000", "2nd: ₹15,000", "3rd: ₹5,000", "Top 10 get ₹500"],
      details: "This is the biggest contest of the week! Join now for a chance to win big.",
    },
    {
      id: 2,
      name: "Grand League",
      entryFee: 99,
      winningPool: 20000,
      prizes: ["1st: ₹10,000", "2nd: ₹5,000", "3rd: ₹2,000", "Top 20 get ₹250"],
      details: "A grand league for all skill levels. Compete and show your strategy!",
    },
    {
      id: 3,
      name: "Head to Head",
      entryFee: 49,
      winningPool: 2000,
      prizes: ["Winner takes ₹1800"],
      details: "Face off 1v1 against another player. The winner takes it all!",
    },
    {
      id: 4,
      name: "Daily Challenge",
      entryFee: 29,
      winningPool: 5000,
      prizes: ["1st: ₹2,500", "2nd: ₹1,500", "3rd: ₹500"],
      details: "Join our daily challenge and win exciting prizes!",
    },
  ];

  return (
    <>
      <div className="w-[95%] mx-auto mt-4 flex flex-row justify-between items-center min-h-[87vh] gap-6">
        {/* Left Section */}
        <div className="flex flex-col min-w-[50%] min-h-[87vh]">
          {/* Upper Panel */}
          <div className="Menu w-full h-[43vh] border-2 border-purple-500 rounded-2xl p-4">
            hi
          </div>

          {/* Nifty 50 Stocks Panel */}
          <div className="Nifty-50 w-full h-[42vh] border-2 border-purple-500 rounded-2xl mt-4 p-4 overflow-y-auto custom-scrollbar">
            <h2 className="text-lg font-semibold mb-2">NIFTY 50 Market Rates</h2>
            <ul className="space-y-2">
              {stocks.map((stock, index) => (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span>{stock.name}</span>
                  <span className="font-semibold text-green-600">₹{stock.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Contest List */}
        <div className="Contests min-w-[49%] min-h-[87vh] border-2 border-purple-500 rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-4">Fantasy Contests</h2>
          <div className="space-y-3 overflow-y-auto h-[75vh] custom-scrollbar">
            {contests.map((contest) => (
              <div
                key={contest.id}
                onClick={() => setSelectedContest(contest)}
                className="p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-purple-100 transition"
              >
                <h3 className="font-semibold">{contest.name}</h3>
                <p className="text-sm">Entry Fee: ₹{contest.entryFee}</p>
                <p className="text-sm">Winning Pool: ₹{contest.winningPool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Contest Details */}
      {selectedContest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-2">{selectedContest.name}</h2>
            <p className="mb-2">Entry Fee: ₹{selectedContest.entryFee}</p>
            <p className="mb-2">Winning Pool: ₹{selectedContest.winningPool}</p>
            <h3 className="font-semibold mb-1">Prizes:</h3>
            <ul className="list-disc pl-4 mb-3">
              {selectedContest.prizes.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
            <p className="mb-3">{selectedContest.details}</p>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              onClick={() => setSelectedContest(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3e8ff;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9333ea;
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b21a8;
        }
      `}</style>
    </>
  );
}
