@ -3,64 +3,35 @@
import { useState, useEffect } from 'react';
import UsersTable from './salary-table';
import { fetchUserTimeLogsForRange } from '../actions/action-timelog';
import { User } from '@/app/types';
import NewDateSelect from '../components/date-select-new';
import UsersLayout from './layout';
import Spinner from '@/components/Spinner';

function UsersContent() {
  const [users, setUsers] = useState<User[]>([]);
  const [dateRange, setDateRange] = useState<string>('last_month');

  useEffect(() => {
      try {
        const data = await fetchUserTimeLogsForRange(dateRange) as unknown as User[];
 
        if (data && data.length > 0) {
          setUsers(data);
          console.log('=== data ===>', data);
        } else {
          console.log('No data received or empty response');
          setUsers([]); 
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setUsers([]); 
      }
    }
 
    fetchData();
  }, [dateRange]);

  const handleArchiveChange = (userId: string, archived: boolean) => {
    setUsers(prevUsers =>
@ -71,34 +42,26 @@ function UsersContent() {
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
            Team ✨
          </h1>
        </div>
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Dropdown */}
          <NewDateSelect setDateRange={setDateRange} />{' '}
          {/* Передаємо функцію для зміни діапазону */}
        </div>
      </div>

      {/* TableOfProjects */}
      <UsersTable users={users} onArchiveChange={handleArchiveChange} />
    </div>
  );
}

