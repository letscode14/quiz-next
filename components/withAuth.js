"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../utils/auth';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace('/login');
      }
    }, []);

    if (typeof window === 'undefined') {
      return null;
    }

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
