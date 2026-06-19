import { useState, useEffect } from 'react';

// 1. Risolviamo ts(7053): Diciamo a TS che la cache accetta stringhe come chiavi e array di qualunque tipo (any[]) come valori
const fetchCache: Record<string, any[]> = {};

// 2. Risolviamo ts(7006): Tipizziamo esplicitamente 'username' come string e 'limit' como number
export function useGithubProjects(username: string, limit: number = 6) {
  // Tipizziamo gli stati interni di React
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const cacheKey = `${username}-repos-${limit}`;

    // Ora TS sa che puoi usare una stringa per indicizzare 'fetchCache'
    if (fetchCache[cacheKey]) {
      setProjects(fetchCache[cacheKey]);
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`
        );
        
        if (!response.ok) throw new Error('Impossibile recuperare i progetti GitHub');
        
        const data = await response.json();
        
        // Tipizziamo il parametro 'repo' nel filtro per evitare altri warning impliciti
        const originalRepos = data.filter((repo: any) => !repo.fork);
        
        fetchCache[cacheKey] = originalRepos;
        setProjects(originalRepos);
      } catch (err) {
        // Gestione sicura dell'errore in TypeScript
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Errore sconosciuto');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, limit]);

  return { projects, loading, error };
}