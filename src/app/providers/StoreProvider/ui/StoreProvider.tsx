// Modules
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
// Types
import { TStoreProviderProps, TStateSchema } from '../types';

export const StoreProvider = ({ initialState, children }: TStoreProviderProps) => {
    const store = createReduxStore(initialState as TStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
