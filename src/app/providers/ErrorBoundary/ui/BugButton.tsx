// Modules
import React, { useEffect, useState } from 'react';
// Components
import { Button } from 'shared/ui';
// Hooks
import { useTranslation } from 'react-i18next';

// Компонент для тестирования error boundary
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState<boolean>(false);

    const throwErrorHandler = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button type="button" onClick={throwErrorHandler}>
            {t('Создать ошибку')}
        </Button>
    );
};
