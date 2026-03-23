export const jsonLdStringify = (data: unknown): string | null => {
  try {
    if (typeof data === 'string') {
      const trimmed = data.trim();
      const parsed = JSON.parse(trimmed);
      if (parsed && (typeof parsed === 'object' || Array.isArray(parsed))) {
        return JSON.stringify(parsed);
      }
      return null;
    }

    return JSON.stringify(data);
  } catch {
    return null;
  }
};
