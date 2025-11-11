type Awaitable<T> = () => Promise<T>;

interface UseRemoteOrLocalReturn {
  fallbackToLocalOnError: <T>(remote: Awaitable<T>, local: Awaitable<T>) => Promise<T>;
}

export function useRemoteOrLocal(): UseRemoteOrLocalReturn {
  const { public: { isDev } } = useRuntimeConfig();

  const fallbackToLocalOnError = async <T>(remote: Awaitable<T>, local: Awaitable<T>): Promise<T> => {
    if (isDev) {
      return local();
    }

    // For testimonials, prioritize local loading for faster initial render
    // Only try remote if local fails or is empty
    try {
      const localResult = await local();
      if (localResult && (!Array.isArray(localResult) || localResult.length > 0)) {
        // Try to fetch remote in background for next load, but don't block
        remote().catch(() => {
          // Silently fail background remote fetch
        });
        return localResult;
      }
    }
    catch (localError: any) {
      logger.warn('Local data fetch failed, trying remote', localError);
    }

    // Fallback to remote with timeout
    try {
      const result = await Promise.race([
        remote(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Remote fetch timeout')), 3000),
        ),
      ]);

      if (result && (!Array.isArray(result) || result.length > 0)) {
        return result;
      }
    }
    catch (error: any) {
      logger.error('Failed to fetch remote data, falling back to local data', error);
    }

    // Final fallback to local
    return local();
  };

  return {
    fallbackToLocalOnError,
  };
}
