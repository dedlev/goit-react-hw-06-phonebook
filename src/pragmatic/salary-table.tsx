@ -2,37 +2,11 @@

import { useState } from 'react';
import UsersTableItem from './salary-table-item';
import { User } from '@/app/types';

export default function UsersTable({ users, onArchiveChange }: { users: User[], onArchiveChange: (userId: string, archived: boolean) => void }) {

  const [showArchived, setShowArchived] = useState<boolean>(false);

  const filteredUsers = showArchived
    ? users
    : users.filter(user => !user.archived);
@ -46,27 +20,12 @@ export default function UsersTable({ users, onArchiveChange }: { users: User[],
            {filteredUsers.length}
          </span>
        </h2>
          <button
            className="btn bg-gray-600 hover:bg-gray-700 text-gray-200 py-1"
            onClick={() => setShowArchived(!showArchived)}
          >
            {showArchived ? 'Hide archived' : 'Show archived'}
          </button>
      </header>

      <div className="overflow-x-auto">
@ -103,8 +62,7 @@ export default function UsersTable({ users, onArchiveChange }: { users: User[],
                <UsersTableItem
                  key={user.id}
                  user={user}
                  onArchiveChange={onArchiveChange}
                />
              ))
            ) : (
@ -117,14 +75,6 @@ export default function UsersTable({ users, onArchiveChange }: { users: User[],
          </tbody>
        </table>
      </div>
    </div>
  );
}