import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useContext, useReducer } from 'react';
import { Store } from '../../utils/Store';


function AdminDashboard() {
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;



  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }

  }, []);
  return (
    <div title="Admin Dashboard">
admin
    </div>
  );
}

export default dynamic(() => Promise.resolve(AdminDashboard), { ssr: false });
