@ -1,16 +1,48 @@
'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { useSessionContext } from '@/app/session-context';
import { useNotification } from '@/app/notifications-context';
import ErrorPage from '@/components/Error-page';

export default function UsersLayout({ children }: { children: ReactNode }) {

  const [canUse, setCanUse] = useState<Boolean>(false);
  const { session, loading: sessionLoading } = useSessionContext() as any;
  const { addNotification } = useNotification();

  useEffect(() => {
    if (sessionLoading) return;

    if (!session?.user) {
      addNotification(
        'Failed to get user info. Please try reload the page',
        'error'
      );
      setCanUse(false);
      return;
    }

    const canUseResult = Boolean(
      session?.user?.role === 'Superadmin' || session?.user?.role === 'Finance'
    );

    if (!canUseResult) {
      setCanUse(false);
    } else {
      setCanUse(true);
    }
  }, [session?.user, sessionLoading, addNotification]);

  if (sessionLoading) {
    return <Spinner />;
  }

  if (!canUse) {
    return (
      <ErrorPage message="You seem to not have access to this page. If you believe this is an error, please contact support for assistance." />
    );
  }

  return <div>{children}</div>;
}