import { useEffect, useState } from 'react';

export default function usePromise(promiseCreator, deps) {
  // 대기 /완료 /실패 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const resolve = await promiseCreator();

        setResolved(resolve);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    process();
    //eslint-dsable-next-lin reac-hooks-/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
