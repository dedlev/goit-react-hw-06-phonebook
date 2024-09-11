// import { useState } from 'react';
// import { User } from '@/app/types';

// interface RateModalProps {
//   users: User[];
//   onClose: () => void;
//   onSave: (userId: string, newRate: number) => void;
// }

// export default function RateModal({ users, onClose, onSave }: RateModalProps) {
//   const [selectedUserId, setSelectedUserId] = useState<string>(
//     users[0]?.id || ''
//   );
//   const [inputValue, setInputValue] = useState<string>('0');

//   const handleSave = () => {
//     const newRate = parseFloat(inputValue);
//     if (!isNaN(newRate)) {
//       onSave(selectedUserId, newRate);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
//       <div className="bg-white dark:bg-slate-800 p-4 rounded shadow-lg">
//         <h2 className="text-lg font-semibold mb-4">Set Rate</h2>
//         <select
//           value={selectedUserId}
//           onChange={e => setSelectedUserId(e.target.value)}
//           className="border-grey-400 dark:bg-gray-600 dark:text-gray-200 p-2 rounded w-full mb-4"
//         >
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.name || user.email}
//             </option>
//           ))}
//         </select>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//           step="0.01"
//           className="border-grey-400 dark:bg-gray-600 dark:text-gray-200 p-2 rounded w-full mb-4"
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="mr-2 btn-lg border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="btn-lg px-6 bg-indigo-500 hover:bg-indigo-600 text-white"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
