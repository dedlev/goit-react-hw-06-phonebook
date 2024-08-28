@ -1,5 +1,5 @@
import { archiveUser } from '@/app/actions';
import { User } from '@/app/types';
import { useNotification } from '@/app/notifications-context';

interface UsersTableItemProps {
@ -67,7 +67,7 @@ export default function UsersTableItem({ user, rate, onArchiveChange }: UsersTab
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-left">
        <div>{salary.toFixed(2)}</div>
      </td>
      <td className="w-24 group px-1 first:pl-5 last:pr-5 py-0.5 min-w-[5rem]">
        <div className="group-hover:flex hidden">
          <button
            className={`flex items-center justify-between w-full cursor-pointer`}
@ -88,4 +88,4 @@ function convertDecimalDurationToHHMM(decimalDuration: number) {
    2,
    '0'
  )}`;
}