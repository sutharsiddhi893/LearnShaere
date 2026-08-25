/**
 * localStorage helpers with safe fallbacks.
 */

export const readFromStorage = (key, fallback) => {
    try {
        const raw = window.localStorage.getItem(key);
        if (raw === null || raw === undefined) return fallback;
        return JSON.parse(raw);
    } catch (err) {
        return fallback;
    }
};

export const writeToStorage = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        /* quota exceeded or unavailable, ignore */
    }
};

export const generateId = (prefix = "id") =>
    `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
