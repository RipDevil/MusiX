/**
 * Creates a simple store
 * @param {string} name - name of the store
 */
export const createSimpleStore = (name) => ({
    error: null,
    isFetching: false,
    [name || 'content']: null
});